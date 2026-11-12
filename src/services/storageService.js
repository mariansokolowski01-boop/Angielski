/**
 * Serwis zapisu stanu gry w localStorage
 * Obsługuje: postępy, gwiazdki, odblokowane strony, naklejki z Koła Fortuny
 * oraz system powtórek następnego dnia (Spaced Repetition).
 */

const STORAGE_KEY = 'lisek_angielski_zuzia_v2';

const getTodayDateString = () => {
  const now = new Date();
  return now.toISOString().split('T')[0];
};

const getYesterdayDateString = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
};

const DEFAULT_STATE = {
  userName: "Zuzia",
  unlockedStages: [1],              // Etap 1 odblokowany na starcie
  stageStars: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
  stageCompletedAt: {},             // np. { 1: "2026-11-12" }
  morningReviewsCompleted: {},     // np. { 1: "2026-11-13" }
  unlockedBookPages: [],            // Strony bajki
  stickers: ["sticker_scarf"],      // Początkowa naklejka w albumie Zuzi
  hasSeenWelcome: false,
  soundEnabled: true,
  speechRate: 0.9,
  simulatedDayOffset: 0
};

class StorageService {
  load() {
    if (typeof window === 'undefined') return DEFAULT_STATE;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT_STATE;
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_STATE,
        ...parsed,
        stageStars: { ...DEFAULT_STATE.stageStars, ...(parsed.stageStars || {}) },
        stageCompletedAt: { ...(parsed.stageCompletedAt || {}) },
        morningReviewsCompleted: { ...(parsed.morningReviewsCompleted || {}) },
        stickers: Array.isArray(parsed.stickers) ? parsed.stickers : ["sticker_scarf"]
      };
    } catch (e) {
      console.warn("Błąd odczytu localStorage:", e);
      return DEFAULT_STATE;
    }
  }

  save(state) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Błąd zapisu localStorage:", e);
    }
  }

  // Sprawdza czy dla danego etapu przyszedł czas na poranną rozgrzewkę
  isMorningReviewDue(stageId, state) {
    const completedDate = state.stageCompletedAt?.[stageId];
    if (!completedDate) return false;

    const today = getTodayDateString();
    const reviewDate = state.morningReviewsCompleted?.[stageId];

    // Ukończony wcześniej niż dzisiaj i jeszcze nie powtórzony dzisiaj
    return completedDate < today && reviewDate !== today;
  }

  // Symulacja kolejnego dnia dla testów rodzica
  simulateNextDay(currentState) {
    const yesterday = getYesterdayDateString();
    const updatedCompletedAt = {};

    // Ustaw wszystkie ukończone etapy jako ukończone wczoraj
    (currentState.unlockedStages || []).forEach(stageId => {
      if (currentState.stageStars?.[stageId] > 0 || stageId === 1) {
        updatedCompletedAt[stageId] = yesterday;
      }
    });

    const nextState = {
      ...currentState,
      stageCompletedAt: updatedCompletedAt,
      morningReviewsCompleted: {}, // reset powtórek na nowy dzień
      simulatedDayOffset: (currentState.simulatedDayOffset || 0) + 1
    };

    this.save(nextState);
    return nextState;
  }

  resetProgress() {
    const fresh = {
      ...DEFAULT_STATE,
      hasSeenWelcome: true
    };
    this.save(fresh);
    return fresh;
  }

  resetAll() {
    this.save(DEFAULT_STATE);
    return DEFAULT_STATE;
  }
}

export const storageService = new StorageService();
export { getTodayDateString };
