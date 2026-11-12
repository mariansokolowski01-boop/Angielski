import React, { useState } from 'react';
import { INTRO_DATA } from '../../data/stagesData';
import { Sparkles, ArrowRight, FoxIcon, Volume2 } from '../common/Icons';
import { audioEffects } from '../../services/audioEffects';
import { speechService } from '../../services/speechService';

export const WelcomeScreen = ({ onStartAdventure }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [hasFinishedAudio, setHasFinishedAudio] = useState(false);

  const handleStart = () => {
    speechService.stop();
    audioEffects.playVictory();
    onStartAdventure();
  };

  const handlePlayIntro = async () => {
    audioEffects.playPop();
    setIsPlayingAudio(true);
    setHasFinishedAudio(false);

    try {
      // Odtwarzamy intro.mp3 (głos pl-PL-ZofiaNeural)
      await speechService.speakPolish(INTRO_DATA.story, INTRO_DATA.audio);
      setHasFinishedAudio(true);
    } finally {
      setIsPlayingAudio(false);
    }
  };

  const handleStopIntro = () => {
    audioEffects.playPop();
    speechService.stop();
    setIsPlayingAudio(false);
  };

  const handleSkipIntro = () => {
    audioEffects.playPop();
    speechService.stop();
    setIsPlayingAudio(false);
    setHasFinishedAudio(true);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-3 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl bg-cream-50/95 rounded-3xl border-4 border-amber-300 shadow-wood p-4 sm:p-7 md:p-9 relative overflow-hidden transition-all duration-500">
        
        {/* Dekoracyjne elementy tła */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

        {/* Nagłówek powitalny */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300 text-orange-950 text-xs sm:text-sm font-bold shadow-sm mb-2">
            <FoxIcon className="w-4 h-4 text-orange-600" />
            <span>Magiczna Opowieść Językowa</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 font-story tracking-tight">
            {INTRO_DATA.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-emerald-800 font-bold mt-1">
            {INTRO_DATA.subtitle}
          </p>
        </div>

        {/* Galeria ilustracji: Zuzia, lisek i miś + Lisek w szaliku */}
        {/* W trybie odtwarzania ilustracja ma skupienie (spotlight), wznosi się i powiększa */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 items-stretch transition-all duration-500 ${
          isPlayingAudio ? 'scale-[1.02] sm:scale-[1.03] z-20 drop-shadow-xl' : ''
        }`}>
          
          {/* Główna ilustracja: Spotkanie przy furtce (z idealnym kadrowaniem od góry) */}
          <div className="md:col-span-2 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-md group relative bg-amber-100">
            <img
              src={INTRO_DATA.imageHero}
              alt="Zuzia, lisek i miś przy drewnianej furtce"
              className="w-full h-64 sm:h-80 md:h-88 object-cover object-top transition-transform duration-500"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent p-3 text-white text-xs sm:text-sm font-bold font-story text-center">
              Zuzia, Rudy Lisek i Miś przy starej furtce ogrodu
            </div>

            {/* Pulsujący wskaźnik podczas słuchania */}
            {isPlayingAudio && (
              <div className="absolute top-3 right-3 bg-amber-400/95 text-amber-950 px-3 py-1 rounded-full text-xs font-black border border-white shadow-md flex items-center gap-1.5 animate-pulse">
                <span>🎧 Lektorka czyta bajkę...</span>
              </div>
            )}
          </div>

          {/* Mniejsza ilustracja z boku: Lisek w szaliku (kadrowana od góry) */}
          <div className="md:col-span-1 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-md flex flex-col justify-between bg-amber-100/70 p-3 text-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-300 shadow-sm flex-1 max-h-52 md:max-h-none bg-white">
              <img
                src={INTRO_DATA.imageFox}
                alt="Lisek w szaliku"
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <div className="mt-2.5">
              <span className="text-xs font-black text-amber-950 block font-story">
                Rudy Lisek w szaliku
              </span>
              <span className="text-[11px] text-amber-800 font-semibold">
                Twój leśny przyjaciel! 🦊
              </span>
            </div>
          </div>

        </div>

        {/* Pasek kontrolny podczas odtwarzania (Widoczny gdy lektor czyta) */}
        {isPlayingAudio && (
          <div className="w-full bg-gradient-to-r from-amber-200 via-orange-100 to-amber-200 rounded-2xl border-2 border-amber-400 p-3 mb-4 flex items-center justify-between gap-3 shadow-sm animate-pulse z-30 relative">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-orange-600 animate-bounce" />
              <span className="text-xs sm:text-sm font-black text-amber-950 font-story">
                Posłuchaj ciepłej opowieści o Zuzi i Lisku...
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleStopIntro}
                className="px-3 py-1.5 rounded-xl bg-red-100 hover:bg-red-200 text-red-900 border border-red-300 text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
              >
                <span>⏹️ Zatrzymaj</span>
              </button>

              <button
                type="button"
                onClick={handleSkipIntro}
                className="px-3 py-1.5 rounded-xl bg-amber-300 hover:bg-amber-400 text-amber-950 border border-amber-500 text-xs font-black transition-all cursor-pointer shadow-sm"
              >
                <span>Pomiń opowieść ⏭️</span>
              </button>
            </div>
          </div>
        )}

        {/* Dolna część ekranu z zasadami i przyciskiem startu */}
        {/* EFEKT SKUPIENIA (BLUR): gdy audio gra, ta sekcja staje się rozmyta i przyciemniona */}
        <div className={`transition-all duration-500 ${
          isPlayingAudio ? 'filter blur-[3px] opacity-30 pointer-events-none' : 'opacity-100'
        }`}>
          {/* Książkowa treść opowieści */}
          <div className="bg-amber-50/90 rounded-2xl p-4 sm:p-5 border-2 border-amber-200/90 shadow-inner mb-5 space-y-2.5 text-stone-800 text-xs sm:text-sm md:text-base leading-relaxed font-story">
            <p className="font-medium text-amber-950">
              Pewnego słonecznego poranka dziewczynka <strong className="text-orange-900 font-extrabold">Zuzia</strong> podeszła do starej, drewnianej furtki na skraju ogrodu. Tuż za nią siedział mały, rudy lisek w ciepłym zielonym szaliku, który zgubił drogę do swojego leśnego domku.
            </p>
            <div className="p-3 bg-white/85 rounded-xl border border-amber-200 flex items-start gap-3">
              <span className="text-2xl shrink-0">🌲</span>
              <div className="text-xs sm:text-sm text-stone-700">
                <strong className="text-emerald-950 block font-bold mb-0.5">Zasady naszej przygody:</strong>
                <ul className="list-disc list-inside space-y-0.5 text-stone-600 font-medium">
                  <li>Przejdź przez 7 krain i poznaj po 5 magicznych słówek po angielsku</li>
                  <li>Ćwicz wymowę z automatycznym mikrofonem 🎤</li>
                  <li>Graj w Magiczne Pary i zdobywaj gwiazdki w sprawdzianie ⭐</li>
                  <li>Kręć Kołem Fortuny, zbieraj naklejki i odblokowuj bajkę!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Przyciski akcji: Odsłuchaj wstęp & Ruszamy na szlak */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePlayIntro}
              disabled={isPlayingAudio}
              className="px-5 py-3 rounded-2xl font-black font-story text-xs sm:text-sm bg-white text-stone-800 hover:bg-amber-100 border-2 border-amber-300 shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <Volume2 className="w-5 h-5 text-orange-600" />
              <span>Odsłuchaj wstęp bajki</span>
            </button>

            {/* Wielki przycisk startu - po zakończeniu lektora świeci się zapraszająco */}
            <button
              type="button"
              onClick={handleStart}
              className={`w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-fox-600 hover:from-orange-600 hover:to-fox-700 text-white font-black text-base sm:text-xl font-story rounded-2xl shadow-wood hover:shadow-wood-hover active:shadow-wood-active active:translate-y-1 transition-all flex items-center justify-center gap-3 border-2 border-amber-300 cursor-pointer ${
                hasFinishedAudio ? 'ring-4 ring-amber-400 scale-105 animate-bounce' : ''
              }`}
            >
              <span>Ruszamy na szlak!</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
