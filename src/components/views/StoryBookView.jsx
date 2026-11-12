import React, { useState } from 'react';
import { STAGES_DATA } from '../../data/stagesData';
import { AudioButton } from '../common/AudioButton';
import { BookOpen, Lock, Sparkles, ArrowLeft, ArrowRight, FoxIcon } from '../common/Icons';
import { audioEffects } from '../../services/audioEffects';

export const StoryBookView = ({
  unlockedBookPages = [],
  onGoToMap
}) => {
  // Aktywna strona w książeczce (od 1 do 7)
  const [activePageIndex, setActivePageIndex] = useState(0);

  const currentStage = STAGES_DATA[activePageIndex] || STAGES_DATA[0];
  const chapter = currentStage.storyChapter;
  const isUnlocked = unlockedBookPages.includes(currentStage.id);

  const handlePrevPage = () => {
    audioEffects.playPop();
    if (activePageIndex > 0) {
      setActivePageIndex(activePageIndex - 1);
    }
  };

  const handleNextPage = () => {
    audioEffects.playPop();
    if (activePageIndex < STAGES_DATA.length - 1) {
      setActivePageIndex(activePageIndex + 1);
    }
  };

  return (
    <div className="flex-1 max-w-5xl w-full mx-auto p-3 sm:p-6 md:p-8">
      
      {/* Pasek nawigacji u góry książeczki */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
        <button
          type="button"
          onClick={() => {
            audioEffects.playPop();
            onGoToMap();
          }}
          className="text-xs sm:text-sm font-bold text-amber-950 bg-white hover:bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Wróć do mapy szlaku</span>
        </button>

        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-orange-600" />
          <h2 className="text-xl sm:text-2xl font-black text-amber-950 font-story">
            Książeczka Zuzi i Liska
          </h2>
        </div>

        <div className="text-xs font-black text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-inner">
          Odblokowano: {unlockedBookPages.length} z {STAGES_DATA.length} stron
        </div>
      </div>

      {/* Zakładki rozdziałów (Strona 1 .. 7) */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-5 flex-wrap">
        {STAGES_DATA.map((st, idx) => {
          const unlocked = unlockedBookPages.includes(st.id);
          const isSelected = activePageIndex === idx;

          return (
            <button
              key={st.id}
              type="button"
              onClick={() => {
                audioEffects.playPop();
                setActivePageIndex(idx);
              }}
              className={`px-3 py-1.5 rounded-2xl font-story text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-fox-600 text-white shadow-wood border-orange-400 scale-105'
                  : unlocked
                  ? 'bg-cream-50 text-amber-950 border-amber-300 hover:bg-amber-100 shadow-sm'
                  : 'bg-stone-200/70 text-stone-500 border-stone-300 opacity-60'
              }`}
            >
              {!unlocked && <Lock className="w-3 h-3" />}
              <span>Rozdział {st.number}</span>
            </button>
          );
        })}
      </div>

      {/* Główna rozkładówka książki bajkowej */}
      <div className="bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-9 relative overflow-hidden transition-all min-h-[460px] flex flex-col justify-between">
        
        {isUnlocked ? (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-amber-200 pb-3 mb-5">
              <div>
                <span className="text-xs font-black text-orange-800 bg-orange-100 px-3 py-0.5 rounded-full border border-orange-200">
                  Rozdział {currentStage.number} z {STAGES_DATA.length}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-amber-950 font-story mt-1">
                  {chapter.title}
                </h3>
              </div>

              {/* Odsłuchaj cały rozdział */}
              <AudioButton
                text={chapter.textParts.map(p => p.type === 'word' ? p.english : p.content).join(' ')}
                lang="pl"
                size="md"
                variant="orange"
                label="Odsłuchaj całą stronę"
              />
            </div>

            {/* Ilustracja rozdziału z gotowych plików użytkownika */}
            <div className="mb-5 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md h-56 sm:h-72 bg-amber-100">
              <img
                src={chapter.illustration}
                alt={chapter.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Treść rozdziału z klikalnymi słówkami */}
            <div className="p-4 sm:p-6 rounded-2xl bg-amber-50/90 border-2 border-amber-200 text-stone-800 text-base sm:text-lg leading-relaxed font-story space-y-4">
              <p>
                {chapter.textParts.map((part, index) => {
                  if (part.type === "text") {
                    return <span key={index}>{part.content}</span>;
                  }

                  if (part.type === "word") {
                    return (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 mx-1 px-2.5 py-0.5 rounded-xl bg-orange-100 border border-orange-300 text-orange-950 font-extrabold hover:bg-orange-200 transition-all cursor-pointer group shadow-sm align-middle select-none"
                        onClick={() => audioEffects.playPop()}
                      >
                        <span>{part.english}</span>
                        <AudioButton
                          text={part.english}
                          audioUrl={part.audioFile}
                          lang="en"
                          size="sm"
                          variant="subtle"
                          className="p-0 text-orange-700 group-hover:text-orange-900"
                        />
                      </span>
                    );
                  }

                  return null;
                })}
              </p>
            </div>
          </div>
        ) : (
          /* Zablokowana strona bajki */
          <div className="my-auto py-12 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-stone-200 text-stone-500 border-2 border-stone-300 flex items-center justify-center text-3xl mb-4 shadow-inner">
              <Lock className="w-10 h-10 text-stone-400" />
            </div>
            <h3 className="text-2xl font-black text-stone-700 font-story mb-2">
              Ta strona jest jeszcze tajemnicą...
            </h3>
            <p className="text-stone-500 max-w-md text-xs sm:text-sm font-medium mb-6">
              Aby odblokować Rozdział {currentStage.number}: <strong>{currentStage.title}</strong>, przejdź ten etap na Leśnym Szlaku, poznaj słówka i zakręć Kołem Fortuny!
            </p>
            <button
              type="button"
              onClick={() => {
                audioEffects.playPop();
                onGoToMap();
              }}
              className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-forest-700 text-white font-black text-sm font-story rounded-2xl shadow-leaf border border-emerald-400 hover:scale-102 active:scale-95 transition-all cursor-pointer"
            >
              Przejdź do tego etapu na mapie ➜
            </button>
          </div>
        )}

        {/* Dolne strzałki przerzucania kartek książki */}
        <div className="flex items-center justify-between border-t-2 border-amber-200/80 pt-4 mt-6">
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={activePageIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-story border transition-all ${
              activePageIndex === 0
                ? 'opacity-30 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                : 'bg-white text-stone-700 hover:bg-amber-100 border-stone-300 shadow-sm cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Poprzednia strona</span>
          </button>

          <span className="text-xs font-black text-amber-950 font-story">
            Strona {activePageIndex + 1} z {STAGES_DATA.length}
          </span>

          <button
            type="button"
            onClick={handleNextPage}
            disabled={activePageIndex === STAGES_DATA.length - 1}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-story border transition-all ${
              activePageIndex === STAGES_DATA.length - 1
                ? 'opacity-30 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                : 'bg-white text-stone-700 hover:bg-amber-100 border-stone-300 shadow-sm cursor-pointer'
            }`}
          >
            <span>Następna strona</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

