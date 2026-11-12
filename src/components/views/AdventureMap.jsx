import React, { useState } from 'react';
import { STAGES_DATA } from '../../data/stagesData';
import { StarRating } from '../common/StarRating';
import { Lock, Sparkles, FoxIcon, ArrowRight, Check } from '../common/Icons';
import { audioEffects } from '../../services/audioEffects';

export const AdventureMap = ({
  unlockedStages = [1],
  stageStars = {},
  onSelectStage,
  onStartMorningReview,
  isReviewDueForStage
}) => {
  const [selectedPreviewStage, setSelectedPreviewStage] = useState(null);

  // Sprawdź czy jakikolwiek etap ma oczekującą poranną rozgrzewkę
  const pendingReviewStageId = unlockedStages.find(id => isReviewDueForStage?.(id));
  const reviewStage = pendingReviewStageId ? STAGES_DATA.find(s => s.id === pendingReviewStageId) : null;

  const handleMarkerClick = (stage, isUnlocked) => {
    if (isUnlocked) {
      audioEffects.playPop();
      setSelectedPreviewStage(stage);
    } else {
      audioEffects.playGentleOops();
    }
  };

  return (
    <div className="flex-1 max-w-5xl w-full mx-auto p-3 sm:p-6 md:p-8 flex flex-col items-center">
      
      {/* Nagłówek Mapy */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold border border-emerald-300 mb-2">
          <span>🌿 Leśna Ścieżka do Domu Liska (7 Etapów)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-950 font-story">
          Wybierz krainę na Szlaku
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-md mx-auto mt-0.5">
          Wędruj od drewnianej furtki na dole aż do ciepłego domku liska na samej górze!
        </p>
      </div>

      {/* Banner porannej rozgrzewki (Spaced Repetition), jeśli aktywny */}
      {reviewStage && (
        <div className="w-full max-w-2xl mb-6 p-4 rounded-3xl bg-gradient-to-r from-amber-200 via-orange-100 to-yellow-200 border-4 border-amber-400 shadow-wood flex items-center justify-between gap-3 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center text-3xl shadow-sm shrink-0">
              ☀️
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-orange-900 block font-story">
                Nowy dzień z Liskiem!
              </span>
              <h4 className="text-base sm:text-lg font-black text-amber-950 font-story">
                Poranna rozgrzewka: {reviewStage.title}
              </h4>
              <p className="text-xs text-amber-900/80 font-medium">
                Powtórz 5 wczorajszych słówek, by zdobyć promyk słońca i iść dalej!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              audioEffects.playStar();
              onStartMorningReview(reviewStage);
            }}
            className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-fox-600 text-white font-extrabold text-xs sm:text-sm shadow-wood hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer border border-amber-300"
          >
            Start ☀️
          </button>
        </div>
      )}

      {/* Główna sekcja z pionową ilustrowaną mapą */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6">
        
        {/* Plansza mapy - pionowa ilustracja z interaktywnymi znacznikami */}
        <div className="relative w-full max-w-[480px] rounded-3xl overflow-hidden border-4 border-amber-300 shadow-wood bg-amber-100 select-none">
          <img
            src="/images/Droga, mapa gry.jpg"
            alt="Pionowa mapa leśnej drogi liska"
            className="w-full h-auto object-cover block"
          />

          {/* Nakładane znaczniki etapów 1-7 wzdłuż ścieżki */}
          {STAGES_DATA.map((stage) => {
            const isUnlocked = unlockedStages.includes(stage.id);
            const stars = stageStars[stage.id] || 0;
            const isReviewDue = isReviewDueForStage?.(stage.id);
            const isNextToPlay = isUnlocked && !stageStars[stage.id];
            const isSelected = selectedPreviewStage?.id === stage.id;
            const coords = stage.mapCoordinates;

            return (
              <div
                key={stage.id}
                style={{
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className="absolute z-20"
              >
                {/* Wskaźnik "Poranna rozgrzewka" */}
                {isReviewDue && (
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-amber-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-md border border-amber-500 flex items-center gap-1 animate-bounce">
                    <span>☀️ Rozgrzewka!</span>
                  </div>
                )}

                {/* Główny przycisk znacznika na mapie */}
                <button
                  type="button"
                  onClick={() => handleMarkerClick(stage, isUnlocked)}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center font-black font-story text-base sm:text-lg transition-all duration-300 cursor-pointer ${
                    isUnlocked
                      ? 'bg-gradient-to-tr from-orange-500 to-amber-300 text-white shadow-wood hover:scale-115 active:scale-95 border-2 border-white'
                      : 'bg-stone-300 text-stone-600 border-2 border-stone-400 opacity-70 cursor-not-allowed'
                  } ${isSelected ? 'ring-4 ring-emerald-500 scale-120' : ''} ${isNextToPlay ? 'ring-4 ring-orange-400/80 animate-pulse' : ''}`}
                  title={`${stage.title} (${isUnlocked ? 'Kliknij, aby otworzyć' : 'Zablokowany'})`}
                >
                  {isUnlocked ? (
                    <>
                      <span className="leading-none drop-shadow-sm">{stage.number}</span>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <span
                            key={i}
                            className={`text-[8px] leading-none ${
                              i < stars ? 'text-yellow-200' : 'text-white/40'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Lock className="w-5 h-5 text-stone-600" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Panel boczny z podglądem wybranego etapu lub listy etapów */}
        <div className="w-full max-w-[440px] flex flex-col gap-4">
          
          {selectedPreviewStage ? (
            /* Karta aktywnie wybranego etapu */
            <div className="bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 relative overflow-hidden transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 font-extrabold text-xs border border-orange-200">
                  {selectedPreviewStage.badge}
                </span>
                <StarRating stars={stageStars[selectedPreviewStage.id] || 0} size="sm" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-amber-950 font-story mb-1">
                {selectedPreviewStage.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-medium mb-3">
                {selectedPreviewStage.description}
              </p>

              {/* Ilustracja etapu z kadrowaniem od góry */}
              <div className="rounded-2xl overflow-hidden border-2 border-amber-200 mb-3 h-44 sm:h-48 relative shadow-sm">
                <img
                  src={selectedPreviewStage.illustration}
                  alt={selectedPreviewStage.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Słówka w tym etapie */}
              <div className="mb-4">
                <span className="text-xs font-bold text-emerald-900 block mb-1.5">
                  Słówka do poznania:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPreviewStage.words.map((w) => (
                    <span
                      key={w.id}
                      className="px-2.5 py-1 rounded-xl bg-amber-100/80 text-amber-950 text-xs font-bold border border-amber-200/80 flex items-center gap-1"
                    >
                      <span>{w.emoji}</span>
                      <span>{w.english}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Przycisk wejścia do etapu */}
              <button
                type="button"
                onClick={() => {
                  audioEffects.playPop();
                  onSelectStage(selectedPreviewStage);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-base font-story rounded-2xl shadow-leaf hover:scale-102 active:scale-95 transition-all flex items-center justify-center gap-2 border-2 border-emerald-300 cursor-pointer"
              >
                <span>Rozpocznij ten etap! 🚀</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            /* Wskazówka startowa */
            <div className="bg-cream-50/90 rounded-3xl border-2 border-amber-200 p-5 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl mb-2">
                🦊
              </div>
              <h4 className="text-base font-bold text-amber-950 font-story mb-1">
                Wybierz numerek na mapie!
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">
                Kliknij dowolny odblokowany numerek (od 1 przy drewnianej furtce aż do 7 przy domku Liska), aby zobaczyć ilustrację i rozpocząć przygodę!
              </p>
            </div>
          )}

          {/* Szybka lista wszystkich 7 etapów */}
          <div className="bg-white/80 rounded-3xl border border-stone-200 p-4 shadow-sm space-y-2 max-h-72 overflow-y-auto">
            <span className="text-xs font-bold text-stone-700 block mb-1">
              Wszystkie krainy na szlaku:
            </span>
            {STAGES_DATA.map((st) => {
              const isUnlocked = unlockedStages.includes(st.id);
              const stars = stageStars[st.id] || 0;
              const isSelected = selectedPreviewStage?.id === st.id;

              return (
                <div
                  key={st.id}
                  onClick={() => handleMarkerClick(st, isUnlocked)}
                  className={`p-2.5 rounded-2xl flex items-center justify-between gap-2 border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-100/90 border-amber-400 font-bold'
                      : isUnlocked
                      ? 'bg-amber-50/50 hover:bg-amber-100/60 border-amber-200/60'
                      : 'bg-stone-100/60 border-stone-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                      isUnlocked ? 'bg-orange-500 text-white' : 'bg-stone-300 text-stone-600'
                    }`}>
                      {st.number}
                    </span>
                    <span className="text-xs font-bold text-stone-800 truncate font-story">
                      {st.title}
                    </span>
                  </div>
                  <div>
                    {isUnlocked ? (
                      <StarRating stars={stars} size="sm" />
                    ) : (
                      <Lock className="w-3.5 h-3.5 text-stone-400" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
