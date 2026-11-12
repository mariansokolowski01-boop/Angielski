import React, { useState, useEffect } from 'react';
import { Volume2, Check, ArrowRight, Sparkles, FoxIcon } from '../common/Icons';
import { AudioButton } from '../common/AudioButton';
import { audioEffects } from '../../services/audioEffects';
import { speechService } from '../../services/speechService';

export const MorningReviewModal = ({
  stage,
  onCompleteReview,
  onClose
}) => {
  const words = stage.words;
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const targetWord = words[currentQIndex];

  useEffect(() => {
    if (!targetWord || isFinished) return;

    const otherWords = words.filter(w => w.id !== targetWord.id);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const roundOptions = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

    setOptions(roundOptions);
    setSelectedWordId(null);
    setIsAnswered(false);

    const timer = setTimeout(() => {
      speechService.speakEnglish(targetWord.english, targetWord.audioFile);
    }, 400);

    return () => clearTimeout(timer);
  }, [currentQIndex, isFinished]);

  const handleSelectOption = (option) => {
    if (isAnswered) return;

    setSelectedWordId(option.id);
    setIsAnswered(true);

    const isCorrect = option.id === targetWord.id;
    if (isCorrect) {
      audioEffects.playCorrect();
      setScore(prev => prev + 1);
    } else {
      audioEffects.playGentleOops();
    }
  };

  const handleNextQuestion = () => {
    audioEffects.playPop();

    if (currentQIndex < words.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      audioEffects.playStar();
      setIsFinished(true);
    }
  };

  const handleFinish = () => {
    audioEffects.playVictory();
    onCompleteReview(stage.id);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-xl bg-cream-50 rounded-3xl border-4 border-amber-400 shadow-wood p-5 sm:p-8 relative overflow-hidden">
        
        {/* Dekoracyjne słoneczko w tle */}
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-yellow-300/40 rounded-full blur-2xl pointer-events-none" />

        {/* Nagłówek porannej rozgrzewki */}
        <div className="flex items-center justify-between border-b-2 border-amber-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-spin" style={{ animationDuration: '15s' }}>☀️</span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-orange-800 block">
                Spaced Repetition
              </span>
              <h2 className="text-lg sm:text-xl font-black text-amber-950 font-story">
                Poranna Rozgrzewka z Liskiem
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center font-bold text-xs"
          >
            ✕
          </button>
        </div>

        {!isFinished ? (
          <div>
            <div className="flex items-center justify-between mb-3 text-xs font-bold text-stone-600">
              <span>Etap: {stage.title}</span>
              <span className="bg-amber-100 text-amber-950 px-2.5 py-0.5 rounded-full border border-amber-300">
                Pytanie {currentQIndex + 1} / {words.length}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-bold text-stone-700 text-center mb-2">
              Przypomnij sobie wczorajsze słówko:
            </p>

            {/* Przycisk odsłuchu */}
            <div className="flex justify-center my-3">
              <AudioButton
                text={targetWord?.english}
                audioUrl={targetWord?.audioFile}
                lang="en"
                size="lg"
                variant="orange"
                label="Odsłuchaj słówko 🔊"
                className="shadow-wood"
              />
            </div>

            {/* Opcje odpowiedzi */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 my-4">
              {options.map((opt) => {
                const isSelected = selectedWordId === opt.id;
                const isTarget = opt.id === targetWord.id;

                let btnStyle = "bg-white border-2 border-amber-200 hover:bg-amber-50";
                if (isAnswered) {
                  if (isTarget) {
                    btnStyle = "bg-emerald-100 border-3 border-emerald-500 font-black text-emerald-950";
                  } else if (isSelected) {
                    btnStyle = "bg-red-50 border-2 border-red-300 opacity-60";
                  } else {
                    btnStyle = "bg-stone-50 border-stone-200 opacity-40";
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswered}
                    className={`p-3 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${btnStyle}`}
                  >
                    <span className="text-3xl">{opt.emoji}</span>
                    <span className="text-xs sm:text-sm font-bold font-story text-amber-950">
                      {opt.polish}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Komunikat po odpowiedzi */}
            {isAnswered && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-fox-600 hover:from-orange-600 hover:to-fox-700 text-white font-black text-sm font-story rounded-2xl shadow-wood flex items-center justify-center gap-2 border border-amber-300 cursor-pointer"
                >
                  <span>{currentQIndex === words.length - 1 ? "Zobacz podsumowanie ☀️" : "Dalej →"}</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Ekran sukcesu rozgrzewki */
          <div className="flex flex-col items-center text-center py-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-amber-400 flex items-center justify-center text-4xl shadow-md border-4 border-white mb-3 animate-bounce">
              ☀️
            </div>

            <h3 className="text-2xl font-black text-amber-950 font-story mb-1">
              Pięknie rozpoczęty dzień, Zuziu!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mb-4">
              Twoja pamięć działa znakomicie! Zdobyłaś <strong>{score} / 5</strong> punktów w porannej rozgrzewce.
            </p>

            <div className="p-3 bg-amber-100 rounded-2xl border border-amber-300 mb-5 flex items-center gap-2 text-xs font-bold text-amber-950">
              <span>🏅</span>
              <span>Przyznano odznakę Porannego Promyka Słońca!</span>
            </div>

            <button
              type="button"
              onClick={handleFinish}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-sm sm:text-base font-story rounded-2xl shadow-leaf flex items-center justify-center gap-2 border border-emerald-300 cursor-pointer"
            >
              <span>Wracamy na Szlak Przygody! 🌲</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
