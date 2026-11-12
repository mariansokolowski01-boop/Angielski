import React, { useState } from 'react';
import { STICKERS_DATA } from '../../data/stagesData';
import { ArrowLeft, Sparkles, Lock, Trophy } from '../common/Icons';
import { audioEffects } from '../../services/audioEffects';

export const StickerAlbumView = ({
  unlockedStickers = [],
  onGoToMap
}) => {
  const [selectedSticker, setSelectedSticker] = useState(null);

  const handleOpenSticker = (sticker, isUnlocked) => {
    if (isUnlocked) {
      audioEffects.playPop();
      setSelectedSticker(sticker);
    } else {
      audioEffects.playGentleOops();
    }
  };

  const collectedCount = unlockedStickers.length;
  const totalCount = STICKERS_DATA.length;

  return (
    <div className="flex-1 max-w-5xl w-full mx-auto p-3 sm:p-6 md:p-8">
      
      {/* Pasek nawigacji u góry albumu */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
        <button
          type="button"
          onClick={() => {
            audioEffects.playPop();
            onGoToMap();
          }}
          className="text-xs sm:text-sm font-bold text-amber-950 bg-white hover:bg-amber-100 px-4 py-2 rounded-2xl border-2 border-amber-300 shadow-sm flex items-center gap-1.5 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Wróć do mapy szlaku</span>
        </button>

        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold border border-orange-200 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Kolekcja Zuzi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-amber-950 font-story">
            Album Magicznych Naklejek 🎨
          </h2>
        </div>

        <div className="text-xs font-black text-emerald-900 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-inner">
          Zdobyto: {collectedCount} z {totalCount} naklejek
        </div>
      </div>

      {/* Album rozkładówka (Karty wklejek) */}
      <div className="bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-8 relative overflow-hidden">
        
        {/* Dekoracyjne elementy papieru księgi */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />

        {/* Siatka naklejek */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {STICKERS_DATA.map((sticker) => {
            const isUnlocked = unlockedStickers.includes(sticker.id);

            return (
              <div
                key={sticker.id}
                onClick={() => handleOpenSticker(sticker, isUnlocked)}
                className={`rounded-2xl p-2.5 sm:p-3 border-3 transition-all duration-300 select-none cursor-pointer flex flex-col items-center justify-between text-center ${
                  isUnlocked
                    ? 'bg-white border-amber-300 shadow-wood hover:shadow-wood-hover hover:scale-103'
                    : 'bg-stone-100/90 border-dashed border-stone-300 opacity-60 hover:opacity-75'
                }`}
              >
                {/* Obrazek naklejki lub tajemnicza sylwetka */}
                <div className="w-full h-32 sm:h-36 rounded-xl overflow-hidden relative mb-2 bg-amber-50 border border-amber-200 shadow-inner flex items-center justify-center">
                  {isUnlocked ? (
                    <img
                      src={sticker.image}
                      alt={sticker.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-stone-400">
                      <Lock className="w-7 h-7 mb-1" />
                      <span className="text-[10px] font-bold font-story">Tajemnica</span>
                    </div>
                  )}

                  {/* Odznaka rzadkości */}
                  {isUnlocked && (
                    <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full text-[9px] font-black bg-amber-400 text-amber-950 shadow-sm border border-amber-500">
                      {sticker.rarity}
                    </span>
                  )}
                </div>

                {/* Tytuł naklejki */}
                <div className="w-full">
                  <h4 className="text-xs sm:text-sm font-black font-story text-amber-950 truncate">
                    {isUnlocked ? sticker.title : "Zablokowana naklejka"}
                  </h4>
                  <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                    {isUnlocked ? sticker.description : "Zakręć Kołem Fortuny!"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal powiększenia zdobytej naklejki */}
      {selectedSticker && (
        <div className="fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-cream-50 rounded-3xl border-4 border-amber-400 shadow-wood p-5 sm:p-7 relative flex flex-col items-center text-center">
            <button
              type="button"
              onClick={() => setSelectedSticker(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 flex items-center justify-center font-bold text-xs"
            >
              ✕
            </button>

            <span className="px-3 py-1 rounded-full bg-amber-200 text-amber-950 font-black text-xs border border-amber-300 mb-2">
              Kolekcja: {selectedSticker.rarity}
            </span>

            <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md my-2">
              <img
                src={selectedSticker.image}
                alt={selectedSticker.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-amber-950 font-story mt-2">
              {selectedSticker.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium mt-1">
              {selectedSticker.description}
            </p>

            <button
              type="button"
              onClick={() => setSelectedSticker(null)}
              className="mt-4 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-fox-600 text-white font-bold text-xs sm:text-sm shadow-wood"
            >
              Zamknij podgląd
            </button>
          </div>
        </div>
      )}

    </div>
  );
};


