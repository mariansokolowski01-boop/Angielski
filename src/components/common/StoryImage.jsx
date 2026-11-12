import React, { useState } from 'react';
import { Sparkles } from './Icons';

/**
 * Komponent ilustracji z akwarelową ramką i wyraźnym placeholderem.
 * Gdy plik graficzny istnieje w folderze public/images/ – wyświetla ilustrację.
 * Gdy plik jeszcze nie istnieje – prezentuje piękny, czytelny placeholder z dokładną ścieżką!
 */
export const StoryImage = ({
  src,
  alt = "Ilustracja bajkowa",
  className = "w-full h-48 md:h-64",
  caption = null,
  fallbackEmoji = "🦊",
  aspectRatio = "aspect-video"
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-3xl border-4 border-amber-200/80 bg-gradient-to-b from-amber-50/90 to-orange-50/50 shadow-soft transition-all duration-300 ${className}`}>
      {/* Ozdobne akwarelowe plamy w tle */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-emerald-200/30 blur-xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-orange-200/40 blur-xl pointer-events-none" />

      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      ) : null}

      {/* Wyświetlany placeholder, gdy brak pliku graficznego */}
      {(hasError || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
          <div className="w-16 h-16 mb-2 rounded-2xl bg-amber-100/90 border-2 border-amber-300/80 flex items-center justify-center text-3xl shadow-sm animate-pulse">
            {fallbackEmoji}
          </div>
          <span className="text-sm font-bold text-amber-900 font-story flex items-center gap-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Miejsce na Twoją ilustrację
          </span>
          <span className="mt-1 px-3 py-1 bg-white/80 rounded-full text-xs font-mono text-emerald-800 border border-emerald-200 font-semibold shadow-inner">
            {src}
          </span>
          <p className="mt-1 text-[11px] text-amber-700/80 max-w-xs leading-tight">
            (Wstaw plik do folderu <code className="bg-amber-100/80 px-1 rounded">public{src}</code>, a pojawi się tu automatycznie!)
          </p>
        </div>
      )}

      {/* Podpis pod ilustracją jeśli podany */}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-900/60 to-transparent p-2 text-white text-xs text-center font-story font-medium">
          {caption}
        </div>
      )}
    </div>
  );
};
