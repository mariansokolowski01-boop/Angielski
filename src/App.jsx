import React, { useState, useEffect } from 'react';
import { ForestBackground } from './components/layout/ForestBackground';
import { Header } from './components/layout/Header';
import { WelcomeScreen } from './components/views/WelcomeScreen';
import { AdventureMap } from './components/views/AdventureMap';
import { StoryBookView } from './components/views/StoryBookView';
import { StickerAlbumView } from './components/views/StickerAlbumView';
import { StageModal } from './components/stage/StageModal';
import { MorningReviewModal } from './components/views/MorningReviewModal';
import { ParentCornerModal } from './components/views/ParentCornerModal';

import { storageService, getTodayDateString } from './services/storageService';
import { speechService } from './services/speechService';
import { audioEffects } from './services/audioEffects';
import { STAGES_DATA } from './data/stagesData';

export function App() {
  const [gameState, setGameState] = useState(() => storageService.load());
  const [activeTab, setActiveTab] = useState('map'); // 'map', 'book', 'album'
  const [showWelcome, setShowWelcome] = useState(() => !storageService.load().hasSeenWelcome);
  const [selectedStage, setSelectedStage] = useState(null);
  const [reviewStage, setReviewStage] = useState(null);
  const [showParentCorner, setShowParentCorner] = useState(false);
  const [isMuted, setIsMuted] = useState(!storageService.load().soundEnabled);

  // Zapisz stan do localStorage
  useEffect(() => {
    storageService.save(gameState);
  }, [gameState]);

  // Licznik gwiazdek i naklejek
  const totalStars = Object.values(gameState.stageStars || {}).reduce((acc, curr) => acc + (curr || 0), 0);
  const maxPossibleStars = STAGES_DATA.length * 3;
  const stickersCount = (gameState.stickers || []).length;

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    speechService.setMuted(nextMuted);
    audioEffects.enabled = !nextMuted;
    setGameState(prev => ({ ...prev, soundEnabled: !nextMuted }));
  };

  // Ukończenie etapu: zapisanie daty ukończenia (Spaced Repetition), odblokowanie kolejnego etapu i strony bajki
  const handleFinishStage = (stageId, score, earnedStars) => {
    const today = getTodayDateString();

    setGameState(prev => {
      const nextUnlockedStages = [...(prev.unlockedStages || [1])];
      const nextStageId = stageId + 1;
      if (nextStageId <= STAGES_DATA.length && !nextUnlockedStages.includes(nextStageId)) {
        nextUnlockedStages.push(nextStageId);
      }

      const nextBookPages = [...(prev.unlockedBookPages || [])];
      if (!nextBookPages.includes(stageId)) {
        nextBookPages.push(stageId);
      }

      const prevStars = prev.stageStars?.[stageId] || 0;
      const bestStars = Math.max(prevStars, earnedStars);

      return {
        ...prev,
        unlockedStages: nextUnlockedStages,
        unlockedBookPages: nextBookPages,
        stageStars: {
          ...prev.stageStars,
          [stageId]: bestStars
        },
        stageCompletedAt: {
          ...prev.stageCompletedAt,
          [stageId]: today
        }
      };
    });
  };

  // Zapisanie naklejki wylosowanej w Kole Fortuny
  const handleAwardSticker = (stickerId) => {
    setGameState(prev => {
      const current = prev.stickers || [];
      if (!current.includes(stickerId)) {
        return {
          ...prev,
          stickers: [...current, stickerId]
        };
      }
      return prev;
    });
  };

  // Ukończenie porannej rozgrzewki
  const handleCompleteMorningReview = (stageId) => {
    const today = getTodayDateString();
    setGameState(prev => ({
      ...prev,
      morningReviewsCompleted: {
        ...prev.morningReviewsCompleted,
        [stageId]: today
      }
    }));
    setReviewStage(null);
  };

  // Symulacja kolejnego dnia dla testów
  const handleSimulateNextDay = () => {
    const nextState = storageService.simulateNextDay(gameState);
    setGameState(nextState);
  };

  const handleStartAdventure = () => {
    setShowWelcome(false);
    setGameState(prev => ({ ...prev, hasSeenWelcome: true }));
    setActiveTab('map');
  };

  const handleResetProgress = () => {
    const fresh = storageService.resetProgress();
    setGameState(fresh);
    setSelectedStage(null);
    setReviewStage(null);
    setActiveTab('map');
  };

  return (
    <ForestBackground>
      {/* Pasek nawigacyjny */}
      <Header
        userName={gameState.userName}
        totalStars={totalStars}
        maxStars={maxPossibleStars}
        stickersCount={stickersCount}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setShowWelcome(false);
          setActiveTab(tab);
        }}
        onOpenParentCorner={() => setShowParentCorner(true)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Ekran główny */}
      <main className="flex-1 flex flex-col justify-start">
        {showWelcome ? (
          <WelcomeScreen onStartAdventure={handleStartAdventure} />
        ) : activeTab === 'book' ? (
          <StoryBookView
            unlockedBookPages={gameState.unlockedBookPages || []}
            onGoToMap={() => setActiveTab('map')}
          />
        ) : activeTab === 'album' ? (
          <StickerAlbumView
            unlockedStickers={gameState.stickers || []}
            onGoToMap={() => setActiveTab('map')}
          />
        ) : (
          <AdventureMap
            unlockedStages={gameState.unlockedStages || [1]}
            stageStars={gameState.stageStars || {}}
            onSelectStage={(stage) => setSelectedStage(stage)}
            onStartMorningReview={(stage) => setReviewStage(stage)}
            isReviewDueForStage={(stageId) => storageService.isMorningReviewDue(stageId, gameState)}
          />
        )}
      </main>

      {/* Modal 4 kroków etapu */}
      {selectedStage && (
        <StageModal
          stage={selectedStage}
          onClose={() => setSelectedStage(null)}
          onFinishStage={handleFinishStage}
          onAwardSticker={handleAwardSticker}
          onOpenBook={() => {
            setSelectedStage(null);
            setActiveTab('book');
          }}
          onOpenAlbum={() => {
            setSelectedStage(null);
            setActiveTab('album');
          }}
        />
      )}

      {/* Modal porannej rozgrzewki (Spaced Repetition) */}
      {reviewStage && (
        <MorningReviewModal
          stage={reviewStage}
          onClose={() => setReviewStage(null)}
          onCompleteReview={handleCompleteMorningReview}
        />
      )}

      {/* Modal Kącika Rodzica */}
      <ParentCornerModal
        isOpen={showParentCorner}
        onClose={() => setShowParentCorner(false)}
        userName={gameState.userName}
        unlockedStages={gameState.unlockedStages || [1]}
        stageStars={gameState.stageStars || {}}
        unlockedBookPages={gameState.unlockedBookPages || []}
        stickersCount={stickersCount}
        onResetProgress={handleResetProgress}
        onReplayIntro={() => setShowWelcome(true)}
        onSimulateNextDay={handleSimulateNextDay}
      />
    </ForestBackground>
  );
}

export default App;
