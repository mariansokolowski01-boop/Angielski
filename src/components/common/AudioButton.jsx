import React, { useState } from 'react';
import { Volume2 } from './Icons';
import { speechService } from '../../services/speechService';
import { audioEffects } from '../../services/audioEffects';

export const AudioButton = ({
  text,
  audioUrl = null,
  lang = 'en',
  slow = false,
  size = "md", // sm, md, lg, xl
  label = null,
  className = "",
  variant = "orange" // orange, emerald, stone, subtle
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sizeClasses = {
    sm: "p-1.5 text-xs gap-1",
    md: "p-2.5 text-sm gap-2",
    lg: "p-3.5 text-base gap-2.5",
    xl: "p-5 text-xl gap-3"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };

  const variantClasses = {
    orange: "bg-gradient-to-b from-orange-400 to-fox-600 text-white shadow-wood hover:from-orange-500 hover:to-fox-700 active:translate-y-1 active:shadow-wood-active border border-amber-300",
    emerald: "bg-gradient-to-b from-emerald-500 to-forest-700 text-white shadow-leaf hover:from-emerald-600 hover:to-forest-800 active:translate-y-1 active:shadow-wood-active border border-emerald-300",
    stone: "bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900 border border-amber-200 shadow-sm active:scale-95",
    subtle: "bg-transparent text-amber-800 hover:bg-amber-100/60 active:scale-95 border-0 p-1"
  };

  const handlePlay = async (e) => {
    e.stopPropagation();
    audioEffects.playPop();
    setIsPlaying(true);

    try {
      if (lang === 'en') {
        await speechService.speakEnglish(text, audioUrl, slow);
      } else {
        await speechService.speakPolish(text, audioUrl);
      }
    } finally {
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      title={`Odsłuchaj: ${text}${slow ? ' (wolniej)' : ''}`}
      aria-label={`Odsłuchaj ${text}`}
      className={`inline-flex items-center justify-center font-bold font-story rounded-2xl transition-all duration-150 cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${isPlaying ? 'ring-4 ring-amber-300/60 scale-105' : ''} ${className}`}
    >
      <Volume2 className={`${iconSizes[size]} ${isPlaying ? 'animate-bounce' : ''}`} />
      {label && <span>{label}</span>}
    </button>
  );
};
