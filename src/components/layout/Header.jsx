import React from 'react';
import { FoxIcon, BookOpen, MapPin, Settings, StarIcon, Volume2, VolumeX, Sparkles } from '../common/Icons';
import { audioEffects } from '../../services/audioEffects';

export const Header = ({
  userName = "Zuzia",
  totalStars = 0,
  maxStars = 21,
  stickersCount = 0,
  activeTab = "map", // "map", "book", "album"
  onTabChange,
  onOpenParentCorner,
  isMuted = false,
  onToggleMute
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-cream-50/95 backdrop-blur-md border-b-2 border-amber-200 shadow-sm transition-all px-2.5 sm:px-6 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Lewa strona: Awatar i imię dziecka */}
        <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => onTabChange('map')}>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-orange-400 to-amber-300 p-0.5 shadow-sm border border-amber-300 flex items-center justify-center text-white shrink-0">
            <span className="text-xl sm:text-2xl">👧</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-sm sm:text-base text-amber-950 font-story tracking-tight">
                {userName}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-200 hidden sm:inline-block">
                Odkrywczyni
              </span>
            </div>
            <p className="text-[10px] text-amber-800/80 hidden xs:block font-medium">
              Lisek wraca do domu 🦊
            </p>
          </div>
        </div>

        {/* Środek: Gwiazdki i Naklejki */}
        <div className="flex items-center gap-2">
          {/* Gwiazdki */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-2xl bg-gradient-to-r from-amber-100 to-amber-50 border-2 border-amber-300 shadow-inner">
            <StarIcon className="w-4 h-4 text-amber-500 fill-amber-400 animate-pulse" filled={true} />
            <span className="font-black text-amber-950 text-xs sm:text-sm font-story">
              {totalStars}
            </span>
            <span className="text-[10px] text-amber-800/60 font-semibold hidden sm:inline">
              / {maxStars}
            </span>
          </div>

          {/* Licznik naklejek */}
          <button
            type="button"
            onClick={() => {
              audioEffects.playPop();
              onTabChange('album');
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-2xl bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 shadow-inner text-purple-900 font-black text-xs font-story transition-all cursor-pointer"
            title="Przejdź do Albumu Naklejek"
          >
            <span>🎨</span>
            <span>{stickersCount}</span>
          </button>
        </div>

        {/* Prawa strona: Główne zakładki */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Zakładka: Mapa */}
          <button
            type="button"
            onClick={() => {
              audioEffects.playPop();
              onTabChange('map');
            }}
            className={`flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-2xl font-bold text-xs sm:text-sm font-story transition-all cursor-pointer ${
              activeTab === 'map'
                ? 'bg-emerald-600 text-white shadow-leaf border border-emerald-400 scale-102'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-stone-200'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mapa</span>
          </button>

          {/* Zakładka: Książeczka */}
          <button
            type="button"
            onClick={() => {
              audioEffects.playPop();
              onTabChange('book');
            }}
            className={`flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-2xl font-bold text-xs sm:text-sm font-story transition-all cursor-pointer ${
              activeTab === 'book'
                ? 'bg-fox-600 text-white shadow-wood border border-orange-400 scale-102'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-stone-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Książeczka</span>
          </button>

          {/* Zakładka: Album Naklejek */}
          <button
            type="button"
            onClick={() => {
              audioEffects.playPop();
              onTabChange('album');
            }}
            className={`flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-2xl font-bold text-xs sm:text-sm font-story transition-all cursor-pointer ${
              activeTab === 'album'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-wood border border-amber-300 scale-102'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Album</span>
          </button>

          {/* Dźwięk wycisz / włącz */}
          <button
            type="button"
            onClick={() => {
              audioEffects.playPop();
              onToggleMute();
            }}
            title={isMuted ? "Włącz dźwięki" : "Wycisz dźwięki"}
            className="p-1.5 sm:p-2 rounded-2xl bg-white text-stone-600 hover:bg-amber-100 border border-stone-200 transition-all cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
          </button>

          {/* Kącik rodzica */}
          <button
            type="button"
            onClick={() => {
              audioEffects.playPop();
              onOpenParentCorner();
            }}
            title="Kącik rodzica i ustawienia"
            className="p-1.5 sm:p-2 rounded-2xl bg-white text-stone-600 hover:bg-amber-100 border border-stone-200 transition-all cursor-pointer"
          >
            <Settings className="w-4 h-4 text-amber-800" />
          </button>
        </div>

      </div>
    </header>
  );
};
