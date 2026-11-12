/**
 * Serwis mowy: Zoptymalizowany do odtwarzania wygenerowanych plików MP3 (edge-tts)
 * z obsługą spowolnionego tempa dla dzieci oraz fallbackiem do Web Speech API.
 */

class SpeechService {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.cachedVoices = [];
    this.currentAudio = null;
    this.rate = 0.9;
    this.isMuted = false;

    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return [];
    this.cachedVoices = this.synth.getVoices();
    return this.cachedVoices;
  }

  getBestVoice(lang = 'en') {
    const voices = this.cachedVoices.length > 0 ? this.cachedVoices : this.loadVoices();
    if (!voices || voices.length === 0) return null;

    if (lang === 'en') {
      const preferred = voices.find(v => 
        (v.lang.startsWith('en-GB') || v.lang.startsWith('en-US')) && 
        (v.name.includes('Sonia') || v.name.includes('Aria') || v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Zira'))
      );
      if (preferred) return preferred;

      const anyEnglish = voices.find(v => v.lang.startsWith('en'));
      if (anyEnglish) return anyEnglish;
    } else if (lang === 'pl') {
      const polish = voices.find(v => v.lang.startsWith('pl'));
      if (polish) return polish;
    }

    return voices[0] || null;
  }

  /**
   * Odtwórz słowo lub zdanie po angielsku.
   * Zawsze priorytetyzuje pliki .mp3 z folderu /audio/words/[słówko].mp3
   */
  async speakEnglish(text, audioUrl = null, slow = false) {
    if (this.isMuted) return;

    this.stop();

    // Wyznacz właściwą ścieżkę do pliku MP3
    let targetUrl = audioUrl;
    if (!targetUrl && text) {
      const cleanWord = text.trim().toLowerCase().replace(/[^a-z]/g, '');
      if (cleanWord) {
        targetUrl = `/audio/words/${cleanWord}.mp3`;
      }
    }

    // 1. Zawsze spróbuj odtworzyć plik audio MP3
    if (targetUrl) {
      const played = await this.playAudioFile(targetUrl, slow ? 0.75 : 1.0);
      if (played) return;
    }

    // 2. Fallback: Web Speech API (jeśli brak pliku)
    return this.speakWithSynthesis(text, 'en', slow ? 0.65 : this.rate);
  }

  /**
   * Odtwórz tekst po polsku (np. wstęp bajki)
   */
  async speakPolish(text, audioUrl = null) {
    if (this.isMuted) return;

    this.stop();

    const targetUrl = audioUrl || '/audio/intro.mp3';

    // 1. Spróbuj odtworzyć plik audio MP3 (np. /audio/intro.mp3)
    if (targetUrl) {
      const played = await this.playAudioFile(targetUrl, 1.0);
      if (played) return;
    }

    // 2. Fallback: Web Speech API
    return this.speakWithSynthesis(text, 'pl', 0.95);
  }

  /**
   * Odtwarza plik MP3 z obsługą playbackRate
   */
  playAudioFile(url, playbackRate = 1.0) {
    return new Promise((resolve) => {
      try {
        const audio = new Audio();
        this.currentAudio = audio;
        audio.playbackRate = playbackRate;

        let hasEnded = false;

        audio.onended = () => {
          this.currentAudio = null;
          if (!hasEnded) {
            hasEnded = true;
            resolve(true);
          }
        };

        audio.onerror = () => {
          this.currentAudio = null;
          if (!hasEnded) {
            hasEnded = true;
            resolve(false);
          }
        };

        audio.src = url;
        audio.play().catch(() => {
          this.currentAudio = null;
          if (!hasEnded) {
            hasEnded = true;
            resolve(false);
          }
        });
      } catch (e) {
        this.currentAudio = null;
        resolve(false);
      }
    });
  }

  speakWithSynthesis(text, lang = 'en', customRate = null) {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'en' ? 'en-GB' : 'pl-PL';
      utterance.rate = customRate || this.rate;
      utterance.pitch = 1.05;

      const voice = this.getBestVoice(lang);
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      this.synth.speak(utterance);
    });
  }

  stop() {
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio = null;
      } catch (e) {}
    }
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted) this.stop();
  }

  setRate(newRate) {
    this.rate = Math.min(Math.max(newRate, 0.5), 1.5);
  }
}

export const speechService = new SpeechService();
