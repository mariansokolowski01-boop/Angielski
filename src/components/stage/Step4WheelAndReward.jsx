import React, { useState, useEffect } from 'react';
import { StarRating } from '../common/StarRating';
import { AudioButton } from '../common/AudioButton';
import { Sparkles, Trophy, BookOpen, ArrowRight } from '../common/Icons';
import { STICKERS_DATA } from '../../data/stagesData';
import { audioEffects } from '../../services/audioEffects';

export const Step4WheelAndReward = ({
  stage,
  score,
  stars,
  onAwardSticker,
  onGoToMap,
  onOpenBook,
  onOpenAlbum
}) => {
  const chapter = stage.storyChapter;

  // Koło Fortuny stan
  const [hasSpun, setHasSpun] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [wonSticker, setWonSticker] = useState(null);

  useEffect(() => {
    // Odpal radosne konfetti po wejściu do nagrody
    try {
      if (typeof window !== 'undefined' && window.confetti) {
        window.confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    } catch (e) {}
  }, []);

  const handleSpinWheel = () => {
    if (isSpinning || hasSpun) return;

    audioEffects.playPop();
    setIsSpinning(true);

    // Losujemy segment naklejki (od 0 do STICKERS_DATA.length - 1)
    const winningIndex = Math.floor(Math.random() * STICKERS_DATA.length);
    const chosenSticker = STICKERS_DATA[winningIndex];

    const segmentAngle = 360 / STICKERS_DATA.length;
    // Obróć o 5 pełnych obrotów (1800 stopni) + kąt wygranego segmentu
    const totalRotation = 1800 + (winningIndex * segmentAngle) + segmentAngle / 2;

    setRotationDegrees(totalRotation);

    // Dźwięk cykania
    const tickInterval = setInterval(() => {
      audioEffects.playPop();
    }, 120);

    setTimeout(() => {
      clearInterval(tickInterval);
      setIsSpinning(false);
      setHasSpun(true);
      setWonSticker(chosenSticker);
      audioEffects.playVictory();

      // Zapisz zdobytą naklejkę
      onAwardSticker?.(chosenSticker.id);

      // Dodatkowe konfetti za naklejkę
      try {
        if (typeof window !== 'undefined' && window.confetti) {
          window.confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
        }
      } catch (e) {}
    }, 3800);
  };

  const segmentColors = [
    '#F97316', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#F59E0B', '#14B8A6', '#EF4444'
  ];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Nagłówek etapu ukończonego */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 border border-amber-300 text-amber-950 font-black text-xs sm:text-sm shadow-sm mb-2">
          <Trophy className="w-4 h-4 text-amber-600" />
          <span>Wspaniale, Zuziu! Zaliczyłaś etap!</span>
          <Sparkles className="w-4 h-4 text-amber-600" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-amber-950 font-story">
          Zdobyłaś złote gwiazdki!
        </h2>

        <div className="flex justify-center my-3">
          <StarRating stars={stars} size="xl" animate={true} />
        </div>

        <p className="text-xs sm:text-sm text-stone-600 font-medium">
          Wynik sprawdzianu: <strong>{score} / 5</strong> poprawnych odpowiedzi
        </p>
      </div>

      {/* SEKCJA 1: KOŁO FORTUNY (ZAKRĘĆ PO NAKLEJKĘ DO ALBUMU) */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center mb-6 relative overflow-hidden">
        
        <div className="mb-3">
          <span className="text-xs font-bold text-orange-700 uppercase tracking-wide">
            Magiczna Loteria Liska
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-amber-950 font-story">
            Koło Fortuny z Naklejkami 🎡
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-md mx-auto">
            Zakręć kolorowym kołem, by wylosować bajkową ilustrację do swojego Albumu Naklejek!
          </p>
        </div>

        {/* Wizualizacja Koła Fortuny */}
        <div className="relative my-4 flex items-center justify-center">
          {/* Strzałka wskaźnika u góry koła */}
          <div className="absolute -top-3 z-30 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-amber-600 drop-shadow-md" />
          </div>

          {/* Obracająca się tarcza koła */}
          <div
            style={{
              transform: `rotate(${rotationDegrees}deg)`,
              transition: isSpinning ? 'transform 3.8s cubic-bezier(0.15, 0.9, 0.2, 1)' : 'none'
            }}
            className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-6 border-amber-300 shadow-wood relative overflow-hidden flex items-center justify-center bg-white"
          >
            {STICKERS_DATA.map((stk, idx) => {
              const count = STICKERS_DATA.length;
              const angle = (360 / count) * idx;
              return (
                <div
                  key={stk.id}
                  style={{
                    backgroundColor: segmentColors[idx % segmentColors.length],
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: '50% 100%',
                    height: '50%',
                    width: '38%',
                    position: 'absolute',
                    top: '0',
                    left: '31%',
                    clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
                  }}
                  className="flex items-start justify-center pt-2 text-white font-black text-sm drop-shadow"
                >
                  <span className="transform rotate-90 inline-block text-lg">
                    🎁
                  </span>
                </div>
              );
            })}

            {/* Środek koła */}
            <div className="w-16 h-16 rounded-full bg-cream-50 border-4 border-amber-400 flex items-center justify-center shadow-md z-10 text-2xl font-black text-amber-950">
              🦊
            </div>
          </div>
        </div>

        {/* Przycisk zakręcenia kołem */}
        {!hasSpun ? (
          <button
            type="button"
            onClick={handleSpinWheel}
            disabled={isSpinning}
            className={`px-8 py-3.5 rounded-2xl font-black text-base sm:text-lg font-story text-white transition-all shadow-wood flex items-center gap-2 border-2 border-amber-300 cursor-pointer ${
              isSpinning
                ? 'bg-amber-400 opacity-70 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-fox-600 hover:from-orange-600 hover:to-fox-700 hover:scale-105 active:scale-95 animate-pulse'
            }`}
          >
            <Sparkles className="w-5 h-5 text-yellow-200" />
            <span>{isSpinning ? "Koło się kręci..." : "ZAKRĘĆ KOŁEM! 🎡"}</span>
          </button>
        ) : wonSticker ? (
          /* Odsłonięta wylosowana naklejka */
          <div className="w-full max-w-md bg-amber-100/90 rounded-2xl border-2 border-amber-400 p-4 mt-2 flex flex-col items-center animate-bounce">
            <span className="text-xs font-black text-orange-800 uppercase tracking-wider mb-1">
              🎉 Wylosowałaś nową naklejkę!
            </span>
            <div className="w-48 h-36 rounded-xl overflow-hidden border-2 border-white shadow-md my-2">
              <img
                src={wonSticker.image}
                alt={wonSticker.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h4 className="text-lg font-black text-amber-950 font-story">
              {wonSticker.title}
            </h4>
            <p className="text-xs text-stone-700 mt-0.5">
              {wonSticker.description}
            </p>
            <span className="mt-2 text-[11px] font-bold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-300 shadow-sm">
              ✓ Dodano do Twojego Albumu Naklejek!
            </span>
          </div>
        ) : null}

      </div>

      {/* SEKCJA 2: ODBLOKOWANA STRONA KSIĄŻECZKI */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 relative overflow-hidden mb-6">
        
        <div className="flex items-center justify-between mb-4 border-b-2 border-amber-200 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl sm:text-2xl font-black text-amber-950 font-story">
              {chapter.title}
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black border border-emerald-300">
            Nowa strona bajki odblokowana!
          </span>
        </div>

        {/* Ilustracja rozdziału */}
        <div className="rounded-2xl overflow-hidden border-2 border-amber-200 mb-4 h-52 sm:h-72 shadow-sm bg-amber-100">
          <img
            src={chapter.illustration}
            alt={chapter.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Treść bajki z interaktywnymi słówkami */}
        <div className="p-4 sm:p-6 rounded-2xl bg-amber-50/90 border-2 border-amber-200 text-stone-800 text-base sm:text-lg leading-relaxed font-story space-y-3">
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

        <p className="text-xs text-amber-800/80 text-center mt-3 font-medium">
          💡 Klikaj w pomarańczowe słówka w tekście, aby odsłuchać ich angielską wymowę!
        </p>

      </div>

      {/* Dolne przyciski nawigacji */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        <button
          type="button"
          onClick={() => {
            audioEffects.playPop();
            onGoToMap();
          }}
          className="w-full sm:w-auto px-6 py-3.5 bg-white text-stone-700 hover:bg-amber-100 font-bold text-xs sm:text-sm font-story rounded-2xl border-2 border-stone-300 shadow-sm"
        >
          ← Wróć na Leśny Szlak
        </button>

        <button
          type="button"
          onClick={() => {
            audioEffects.playPop();
            onOpenAlbum();
          }}
          className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-amber-950 font-black text-xs sm:text-sm font-story rounded-2xl border-2 border-amber-300 shadow-wood flex items-center justify-center gap-2"
        >
          <span>Otwórz Album Naklejek 🎨</span>
        </button>

        <button
          type="button"
          onClick={() => {
            audioEffects.playPop();
            onOpenBook();
          }}
          className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-fox-600 to-orange-500 hover:from-fox-700 hover:to-orange-600 text-white font-black text-xs sm:text-sm font-story rounded-2xl shadow-wood flex items-center justify-center gap-2 border-2 border-amber-300"
        >
          <BookOpen className="w-4 h-4" />
          <span>Zobacz całą Książeczkę 📖</span>
        </button>
      </div>

    </div>
  );
};

