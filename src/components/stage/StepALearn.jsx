import React, { useState } from 'react';
import { getWordIcon, ArrowLeft, ArrowRight, Sparkles, Volume2 } from '../common/Icons';
import { AudioButton } from '../common/AudioButton';
import { StoryImage } from '../common/StoryImage';
import { audioEffects } from '../../services/audioEffects';

export const StepALearn = ({ stage, onCompleteStepA, onBackToMap }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = stage.words;
  const currentWord = words[currentIndex];

  const handleNext = () => {
    audioEffects.playPop();
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      audioEffects.playStar();
      onCompleteStepA();
    }
  };

  const handlePrev = () => {
    audioEffects.playPop();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      
      {/* Wskaźnik postępu (Kropki 1-5) */}
      <div className="flex items-center justify-between w-full mb-4 px-2">
        <button
          type="button"
          onClick={onBackToMap}
          className="text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 flex items-center gap-1 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Wróć do mapy</span>
        </button>

        <div className="flex items-center gap-2">
          {words.map((w, idx) => (
            <button
              key={w.id}
              onClick={() => {
                audioEffects.playPop();
                setCurrentIndex(idx);
              }}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-orange-500 scale-125 ring-2 ring-orange-300'
                  : idx < currentIndex
                  ? 'bg-emerald-500'
                  : 'bg-stone-300'
              }`}
              title={`Słówko ${idx + 1}: ${w.english}`}
            />
          ))}
          <span className="text-xs font-extrabold text-amber-900 ml-1">
            {currentIndex + 1} / {words.length}
          </span>
        </div>
      </div>

      {/* Karta słówka */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden transition-all">
        
        {/* Odznaka z numerkiem słówka */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold border border-orange-200">
          Słówko {currentIndex + 1} z 5
        </div>

        {/* Ilustracja / Ikona słówka */}
        <div className="w-full mt-4 mb-4">
          <StoryImage
            src={currentWord.imageFile}
            alt={currentWord.english}
            className="w-full h-44 sm:h-52"
            fallbackEmoji={currentWord.emoji}
            caption={`${currentWord.english} — ${currentWord.polish}`}
          />
        </div>

        {/* Słowo po angielsku w wielkim rozmiarze */}
        <div className="my-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 font-story tracking-wide">
            {currentWord.english}
          </h2>
          <p className="text-sm text-stone-500 font-mono mt-0.5">
            {currentWord.phonetic}
          </p>
        </div>

        {/* Polskie znaczenie */}
        <div className="my-2 px-4 py-1.5 rounded-2xl bg-amber-100/90 border border-amber-300">
          <p className="text-lg sm:text-xl font-bold text-amber-900 font-story">
            {currentWord.polish}
          </p>
        </div>

        {/* Podpowiedź / Przykładowe zdanie */}
        <p className="text-xs sm:text-sm text-stone-600 italic font-medium my-2 max-w-sm">
          „{currentWord.hint}”
        </p>

        {/* Przyciski wymowy: Normalna i Wolna (Żółwik) */}
        <div className="flex items-center justify-center gap-3 mt-4 mb-2">
          <AudioButton
            text={currentWord.english}
            audioUrl={currentWord.audioFile}
            lang="en"
            size="lg"
            variant="orange"
            label="Wymowa"
          />

          <AudioButton
            text={currentWord.english}
            audioUrl={currentWord.audioFile}
            lang="en"
            slow={true}
            size="md"
            variant="stone"
            label="🐢 Wolniej"
            className="bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100"
          />
        </div>

      </div>

      {/* Przyciski nawigacji: Poprzednie / Następne */}
      <div className="flex items-center justify-between w-full mt-6 px-1 gap-4">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm font-story border transition-all ${
            currentIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
              : 'bg-white text-stone-700 hover:bg-amber-100 border-stone-300 shadow-sm active:translate-y-0.5'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Poprzednie</span>
        </button>

        <button
          type="button"
          onClick={handleNext}
          className={`flex items-center gap-2 px-7 py-3 rounded-2xl font-extrabold text-sm sm:text-base font-story text-white transition-all shadow-wood hover:shadow-wood-hover active:shadow-wood-active active:translate-y-1 ${
            currentIndex === words.length - 1
              ? 'bg-gradient-to-r from-emerald-500 to-forest-700 hover:from-emerald-600 hover:to-forest-800 border-2 border-emerald-300 animate-pulse'
              : 'bg-gradient-to-r from-orange-500 to-fox-600 hover:from-orange-600 hover:to-fox-700 border-2 border-amber-300'
          }`}
        >
          <span>
            {currentIndex === words.length - 1 ? "Przejdź do sprawdzianu! 🎯" : "Kolejne słówko"}
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
