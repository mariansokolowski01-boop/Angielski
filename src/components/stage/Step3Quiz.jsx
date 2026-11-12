import React, { useState, useEffect } from 'react';
import { Volume2, Check, ArrowRight, Sparkles, FoxIcon, ArrowLeft } from '../common/Icons';
import { AudioButton } from '../common/AudioButton';
import { audioEffects } from '../../services/audioEffects';
import { speechService } from '../../services/speechService';

export const Step3Quiz = ({ stage, onCompleteStep3, onBackToStep2 }) => {
  const words = stage.words;
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedWordId, setSelectedWordId] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);

  const targetWord = words[currentQIndex];

  // Przygotuj 4 opcje do pytania
  useEffect(() => {
    if (!targetWord) return;

    const otherWords = words.filter(w => w.id !== targetWord.id);
    const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random()).slice(0, 3);
    const roundOptions = [targetWord, ...shuffledOthers].sort(() => 0.5 - Math.random());

    setOptions(roundOptions);
    setSelectedWordId(null);
    setIsAnswered(false);

    // Odtwórz słowo automatycznie
    const timer = setTimeout(() => {
      speechService.speakEnglish(targetWord.english, targetWord.audioFile);
    }, 350);

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
      let stars = 1;
      if (score >= 4) stars = 3;
      else if (score >= 3) stars = 2;
      else stars = 1; // Zawsze motywująca 1 gwiazdka za ukończenie

      audioEffects.playVictory();
      onCompleteStep3(score, stars);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      
      {/* Nagłówek sprawdzianu */}
      <div className="flex items-center justify-between w-full mb-3 px-1">
        <button
          type="button"
          onClick={onBackToStep2}
          className="text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 transition-all flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Wróć do par</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Pytanie {currentQIndex + 1} z {words.length}
          </span>
          <span className="text-xs font-black text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
            Punkty: {score}
          </span>
        </div>
      </div>

      {/* Karta pytania sprawdzianu */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center">
        
        <p className="text-sm sm:text-base font-black text-emerald-950 mb-2 font-story flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" />
          Posłuchaj i wybierz poprawny obrazek:
        </p>

        {/* Przycisk odsłuchu */}
        <div className="my-2">
          <AudioButton
            text={targetWord?.english}
            audioUrl={targetWord?.audioFile}
            lang="en"
            size="xl"
            variant="orange"
            label="Posłuchaj jeszcze raz 🔊"
            className="text-base sm:text-lg px-6 py-3.5 shadow-wood hover:scale-105"
          />
        </div>

        {/* Siatka 4 opcji */}
        <div className="grid grid-cols-2 gap-3 w-full mt-4">
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
                className={`p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 ${cardStyle}`}
              >
                {/* Miniaturka obrazka lub emoji */}
                {option.imageFile && !option.imageFile.endsWith('.png') ? (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-amber-300 shadow-inner bg-white">
                    <img
                      src={option.imageFile}
                      alt={option.polish}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                    {option.emoji}
                  </div>
                )}

                <div className="text-center">
                  <span className="block text-sm sm:text-base font-black font-story text-amber-950">
                    {option.polish}
                  </span>
                  {isAnswered && isTarget && (
                    <span className="block text-xs font-mono font-bold text-emerald-700">
                      {option.english} ✓
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Odpowiedź i przycisk dalej */}
        {isAnswered && (
          <div className="mt-5 w-full">
            <div className={`p-3 rounded-2xl mb-3 font-story font-bold text-xs sm:text-sm flex items-center justify-center gap-2 ${
              selectedWordId === targetWord.id
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-orange-100 text-orange-950 border border-orange-300'
            }`}>
              {selectedWordId === targetWord.id ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Brawo Zuziu! Znakomicie! 🎉</span>
                </>
              ) : (
                <>
                  <FoxIcon className="w-4 h-4 text-orange-600" />
                  <span>Dobre próby! Prawidłowa odpowiedź to: <strong>{targetWord.polish}</strong> ({targetWord.english})</span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={handleNextQuestion}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-sm sm:text-base font-story rounded-2xl shadow-wood hover:scale-102 active:scale-95 transition-all flex items-center justify-center gap-2 border-2 border-emerald-300 cursor-pointer"
            >
              <span>{currentQIndex === words.length - 1 ? "Przejdź do Koła Fortuny! 🎡" : "Następne pytanie →"}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

