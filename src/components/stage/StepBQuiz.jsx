import React, { useState, useEffect } from 'react';
import { Volume2, Check, ArrowRight, Sparkles, FoxIcon } from '../common/Icons';
import { AudioButton } from '../common/AudioButton';
import { audioEffects } from '../../services/audioEffects';
import { speechService } from '../../services/speechService';

export const StepBQuiz = ({ stage, onCompleteStepB, onBackToLearn }) => {
  const words = stage.words;
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);

  const targetWord = words[currentQIndex];

  // Przygotuj 4 losowe opcje (w tym poprawna) dla pytania
  useEffect(() => {
    if (!targetWord) return;

    const otherWords = words.filter(w => w.id !== targetWord.id);
    // Losujemy 3 błędne opcje
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const roundOptions = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

    setOptions(roundOptions);
    setSelectedWordId(null);
    setIsAnswered(false);

    // Automatycznie odtwórz angielskie słowo po krótkiej chwili
    const timer = setTimeout(() => {
      speechService.speakEnglish(targetWord.english, targetWord.audioFile);
    }, 400);

    return () => clearTimeout(timer);
  }, [currentQIndex]);

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
      // Oblicz gwiazdki na podstawie wyniku
      const finalScore = score + (selectedWordId === targetWord.id ? 0 : 0);
      let stars = 1;
      if (finalScore >= 5) stars = 3;
      else if (finalScore >= 4) stars = 2;
      else stars = 1; // Zawsze minimum 1 gwiazdka za ukończenie, by motywować dziecko!

      audioEffects.playVictory();
      onCompleteStepB(finalScore, stars);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      
      {/* Nagłówek sprawdzianu */}
      <div className="flex items-center justify-between w-full mb-4 px-2">
        <button
          type="button"
          onClick={onBackToLearn}
          className="text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 transition-all"
        >
          ← Wróć do nauki
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-extrabold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Pytanie {currentQIndex + 1} z {words.length}
          </span>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
            Punkty: {score}
          </span>
        </div>
      </div>

      {/* Główna karta pytania */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Polecenie */}
        <p className="text-sm sm:text-base font-bold text-emerald-900 mb-2 font-story flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Posłuchaj i wskaż właściwe słówko:
        </p>

        {/* Wielki przycisk odsłuchu */}
        <div className="my-3">
          <AudioButton
            text={targetWord?.english}
            audioUrl={targetWord?.audioFile}
            lang="en"
            size="xl"
            variant="orange"
            label="Posłuchaj jeszcze raz"
            className="text-lg sm:text-xl px-6 py-4 shadow-wood hover:scale-105"
          />
        </div>

        {/* Siatka 4 opcji do wyboru */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mt-4">
          {options.map((option) => {
            const isSelected = selectedWordId === option.id;
            const isTarget = option.id === targetWord.id;

            let cardStyle = "bg-white border-2 border-stone-200 hover:border-amber-400 hover:bg-amber-50/70 shadow-sm";
            if (isAnswered) {
              if (isTarget) {
                cardStyle = "bg-emerald-100 border-4 border-emerald-500 shadow-leaf text-emerald-950 font-extrabold scale-102";
              } else if (isSelected && !isTarget) {
                cardStyle = "bg-red-50 border-4 border-red-300 opacity-60";
              } else {
                cardStyle = "bg-stone-50 border-stone-200 opacity-40";
              }
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option)}
                disabled={isAnswered}
                className={`p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 ${cardStyle}`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                  {option.emoji}
                </div>
                <div className="text-center">
                  <span className="block text-base sm:text-lg font-bold font-story text-amber-950">
                    {option.polish}
                  </span>
                  {isAnswered && isTarget && (
                    <span className="block text-xs font-extrabold text-emerald-700 font-mono">
                      {option.english} ✓
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Komunikat po odpowiedzi */}
        {isAnswered && (
          <div className="mt-5 w-full">
            <div className={`p-3 rounded-2xl mb-3 font-story font-bold text-sm sm:text-base flex items-center justify-center gap-2 ${
              selectedWordId === targetWord.id
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-orange-100 text-orange-950 border border-orange-300'
            }`}>
              {selectedWordId === targetWord.id ? (
                <>
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Brawo Zuziu! Znakomicie! 🎉</span>
                </>
              ) : (
                <>
                  <FoxIcon className="w-5 h-5 text-orange-600" />
                  <span>Blisko! Prawidłowa odpowiedź to: <strong>{targetWord.polish}</strong> ({targetWord.english})</span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={handleNextQuestion}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-extrabold text-base font-story rounded-2xl shadow-wood hover:shadow-wood-hover active:shadow-wood-active active:translate-y-1 transition-all flex items-center justify-center gap-2 border-2 border-emerald-300"
            >
              <span>{currentQIndex === words.length - 1 ? "Zobacz nagrodę! 🏆" : "Następne pytanie"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
