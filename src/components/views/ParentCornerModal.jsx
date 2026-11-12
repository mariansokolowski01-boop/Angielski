import React, { useState } from 'react';
import { RotateCcw, Volume2, Sparkles, FoxIcon, StarIcon, BookOpen } from '../common/Icons';
import { speechService } from '../../services/speechService';
import { audioEffects } from '../../services/audioEffects';

export const ParentCornerModal = ({
  isOpen,
  onClose,
  userName = "Zuzia",
  unlockedStages = [],
  stageStars = {},
  unlockedBookPages = [],
  stickersCount = 0,
  onResetProgress,
  onReplayIntro,
  onSimulateNextDay
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.9);
  const [simulatedInfo, setSimulatedInfo] = useState(null);

  if (!isOpen) return null;

  const totalStars = Object.values(stageStars).reduce((sum, s) => sum + (s || 0), 0);

  const handleTestVoice = () => {
    speechService.setRate(speechRate);
    speechService.speakEnglish("Hello Zuzia! Welcome to our magical forest adventure!");
  };

  const handleConfirmReset = () => {
    onResetProgress();
    setShowConfirmReset(false);
    onClose();
  };

  const handleSimulateNextDayClick = () => {
    audioEffects.playStar();
    onSimulateNextDay();
    setSimulatedInfo("Zasymulowano kolejny dzień! Sprawdź mapę – pojawiła się Poranna rozgrzewka ☀️");
    setTimeout(() => setSimulatedInfo(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-lg bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 relative my-auto">
        
        {/* Nagłówek modala */}
        <div className="flex items-center justify-between border-b-2 border-amber-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <h2 className="text-xl sm:text-2xl font-black text-amber-950 font-story">
              Kącik Rodzica
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Podsumowanie postępów Zuzi */}
        <div className="grid grid-cols-4 gap-2 mb-5 text-center">
          <div className="p-2.5 bg-amber-100/90 rounded-2xl border border-amber-300">
            <div className="flex justify-center mb-1">
              <StarIcon className="w-4 h-4 text-amber-500" filled={true} />
            </div>
            <span className="text-lg font-black text-amber-950 block">{totalStars}</span>
            <span className="text-[10px] text-amber-900 font-bold">Gwiazdek</span>
          </div>

          <div className="p-2.5 bg-emerald-100/90 rounded-2xl border border-emerald-300">
            <div className="flex justify-center mb-1">
              <span className="text-sm">🌲</span>
            </div>
            <span className="text-lg font-black text-emerald-950 block">{unlockedStages.length} / 7</span>
            <span className="text-[10px] text-emerald-900 font-bold">Krain</span>
          </div>

          <div className="p-2.5 bg-orange-100/90 rounded-2xl border border-orange-300">
            <div className="flex justify-center mb-1">
              <BookOpen className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-lg font-black text-orange-950 block">{unlockedBookPages.length} / 7</span>
            <span className="text-[10px] text-orange-900 font-bold">Stron bajki</span>
          </div>

          <div className="p-2.5 bg-purple-100/90 rounded-2xl border border-purple-300">
            <div className="flex justify-center mb-1">
              <span className="text-sm">🎨</span>
            </div>
            <span className="text-lg font-black text-purple-950 block">{stickersCount}</span>
            <span className="text-[10px] text-purple-900 font-bold">Naklejek</span>
          </div>
        </div>

        {/* Przycisk testowy: Spaced Repetition (Symuluj kolejny dzień) */}
        <div className="p-3.5 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl border-2 border-amber-300 mb-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-xs font-black text-amber-950 block font-story">
                ☀️ Powtórki następnego dnia (Spaced Repetition)
              </span>
              <p className="text-[11px] text-stone-600 leading-tight">
                Sprawdź jak działa poranna rozgrzewka z wczorajszymi słówkami.
              </p>
            </div>
            <button
              type="button"
              onClick={handleSimulateNextDayClick}
              className="px-3.5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl text-xs font-black shadow-wood hover:scale-105 active:scale-95 transition-all shrink-0 border border-amber-300 cursor-pointer"
            >
              🧪 Symuluj kolejny dzień
            </button>
          </div>
          {simulatedInfo && (
            <p className="mt-2 text-xs font-bold text-emerald-800 animate-pulse">
              {simulatedInfo}
            </p>
          )}
        </div>

        {/* Ustawienia tempa mowy lektora */}
        <div className="p-3.5 bg-white/90 rounded-2xl border border-stone-200 mb-4">
          <label className="block text-xs font-bold text-stone-700 mb-1.5 font-story">
            Tempo wymowy angielskich słówek:
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0.6"
              max="1.2"
              step="0.05"
              value={speechRate}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setSpeechRate(val);
                speechService.setRate(val);
              }}
              className="w-full accent-orange-500 cursor-pointer"
            />
            <span className="text-xs font-mono font-bold text-stone-600 min-w-10 text-right">
              {Math.round(speechRate * 100)}%
            </span>
          </div>
          <button
            type="button"
            onClick={handleTestVoice}
            className="mt-1.5 text-xs font-bold text-orange-700 hover:text-orange-900 flex items-center gap-1 underline cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
            Przetestuj głos lektora
          </button>
        </div>

        {/* Opcje: Odtwórz wstęp & Reset */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={() => {
              onReplayIntro();
              onClose();
            }}
            className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs font-story rounded-xl border border-stone-300 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <FoxIcon className="w-4 h-4 text-orange-600" />
            <span>Pokaż Zuzi ekran powitalny bajki</span>
          </button>

          {!showConfirmReset ? (
            <button
              type="button"
              onClick={() => setShowConfirmReset(true)}
              className="w-full py-2.5 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs font-story rounded-xl border border-red-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Zresetuj postępy (wyzeruj gwiazdki i etapy)</span>
            </button>
          ) : (
            <div className="p-3 bg-red-100/90 rounded-xl border-2 border-red-300 text-center">
              <p className="text-xs font-bold text-red-950 mb-2">
                Czy na pewno zresetować postępy Zuzi?
              </p>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleConfirmReset}
                  className="px-3.5 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold shadow-sm hover:bg-red-700 cursor-pointer"
                >
                  Tak, zresetuj
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirmReset(false)}
                  className="px-3.5 py-1.5 bg-stone-200 text-stone-700 rounded-lg text-xs font-bold hover:bg-stone-300 cursor-pointer"
                >
                  Anuluj
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
