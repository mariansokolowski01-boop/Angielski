import React, { useEffect } from 'react';
import { StarRating } from '../common/StarRating';
import { StoryImage } from '../common/StoryImage';
import { AudioButton } from '../common/AudioButton';
import { Sparkles, Trophy, BookOpen, ArrowRight, Heart } from '../common/Icons';
import { audioEffects } from '../../services/audioEffects';

export const StepCReward = ({
  stage,
  score,
  stars,
  onGoToMap,
  onOpenBook
}) => {
  const chapter = stage.storyChapter;

  useEffect(() => {
    // Odpal konfetti
    try {
      if (typeof window !== 'undefined' && window.confetti) {
        window.confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (e) {}
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      
      {/* Nagłówek nagrody */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 border border-amber-300 text-amber-950 font-bold text-sm shadow-sm mb-2">
          <Trophy className="w-4 h-4 text-amber-600" />
          <span>Wspaniale, Zuziu! Etap ukończony!</span>
          <Sparkles className="w-4 h-4 text-amber-600" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-amber-950 font-story">
          Zdobyłaś nagrodę!
        </h2>

        {/* Gwiazdki */}
        <div className="flex justify-center my-3">
          <StarRating stars={stars} size="xl" animate={true} />
        </div>

        <p className="text-xs sm:text-sm text-stone-600 font-medium">
          Twój wynik: <strong>{score} / 5</strong> poprawnych odpowiedzi
        </p>
      </div>

      {/* Odsłonięta strona książeczki */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-6 sm:p-8 relative overflow-hidden mb-6">
        
        {/* Wstążka nagłówka rozdziału */}
        <div className="flex items-center justify-between mb-4 border-b-2 border-amber-200/80 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-amber-950 font-story">
              {chapter.title}
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
            Nowa strona bajki odblokowana!
          </span>
        </div>

        {/* Ilustracja rozdziału */}
        <div className="mb-5">
          <StoryImage
            src={chapter.illustration}
            alt={chapter.title}
            className="w-full h-48 sm:h-60"
            fallbackEmoji="📖"
            caption={chapter.title}
          />
        </div>

        {/* Treść bajki z interaktywnymi słówkami */}
        <div className="p-4 sm:p-6 rounded-2xl bg-amber-50/80 border-2 border-amber-200/80 text-stone-800 text-base sm:text-lg leading-relaxed font-story space-y-3">
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

        {/* Informacja o odsłuchu */}
        <p className="text-xs text-amber-800/80 text-center mt-3 font-medium">
          💡 Klikaj w pomarańczowe słówka w tekście, aby odsłuchać ich angielską wymowę!
        </p>

      </div>

      {/* Przyciski nawigacji po nagrodzie */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
        <button
          type="button"
          onClick={() => {
            audioEffects.playPop();
            onGoToMap();
          }}
          className="w-full sm:w-auto px-6 py-3.5 bg-white text-stone-700 hover:bg-amber-100 font-bold text-sm sm:text-base font-story rounded-2xl border-2 border-stone-300 shadow-sm transition-all"
        >
          ← Wróć na Leśny Szlak
        </button>

        <button
          type="button"
          onClick={() => {
            audioEffects.playPop();
            onOpenBook();
          }}
          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-fox-600 to-orange-500 hover:from-fox-700 hover:to-orange-600 text-white font-extrabold text-base font-story rounded-2xl shadow-wood hover:shadow-wood-hover active:shadow-wood-active active:translate-y-1 transition-all flex items-center justify-center gap-2 border-2 border-amber-300"
        >
          <BookOpen className="w-5 h-5" />
          <span>Zobacz całą Książeczkę Zuzi</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
