import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Check, RotateCcw } from '../common/Icons';
import { audioEffects } from '../../services/audioEffects';
import { speechService } from '../../services/speechService';

export const Step2MemoryGame = ({ stage, onCompleteStep2, onBackToStep1 }) => {
  const words = stage.words;

  // Tworzymy 10 kart: 5 po angielsku, 5 po polsku z emotką/ikoną
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedWordIds, setMatchedWordIds] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [movesCount, setMovesCount] = useState(0);

  // Inicjalizacja potasowanych kart
  useEffect(() => {
    const deck = [];
    words.forEach((w) => {
      // Karta angielska
      deck.push({
        id: `${w.id}_en`,
        wordId: w.id,
        type: 'en',
        text: w.english,
        subtext: '🔊 en',
        audioText: w.english,
        audioFile: w.audioFile
      });
      // Karta polska
      deck.push({
        id: `${w.id}_pl`,
        wordId: w.id,
        type: 'pl',
        text: w.polish,
        emoji: w.emoji,
        audioText: w.english,
        audioFile: w.audioFile
      });
    });

    // Przetasuj losowo
    setCards([...deck].sort(() => 0.5 - Math.random()));
    setFlippedIndices([]);
    setMatchedWordIds([]);
    setMovesCount(0);
  }, [stage]);

  const handleCardClick = (index) => {
    if (isLocked) return;
    if (flippedIndices.includes(index)) return;
    const card = cards[index];
    if (matchedWordIds.includes(card.wordId)) return;

    audioEffects.playPop();

    // Wymów słowo, gdy Zuzia odkrywa kartę
    speechService.speakEnglish(card.audioText, card.audioFile);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setIsLocked(true);
      setMovesCount(prev => prev + 1);

      const [idx1, idx2] = newFlipped;
      const card1 = cards[idx1];
      const card2 = cards[idx2];

      // Czy to ta sama para słówek, ale różny typ (jedno en, drugie pl)?
      if (card1.wordId === card2.wordId && card1.type !== card2.type) {
        // Dopasowanie!
        audioEffects.playCorrect();
        setMatchedWordIds(prev => [...prev, card1.wordId]);
        setFlippedIndices([]);
        setIsLocked(false);
      } else {
        // Pomyłka - odczekaj chwilkę i odwróć z powrotem
        audioEffects.playGentleOops();
        setTimeout(() => {
          setFlippedIndices([]);
          setIsLocked(false);
        }, 1100);
      }
    }
  };

  const isGameComplete = matchedWordIds.length === words.length;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Pasek nawigacji kroku 2 */}
      <div className="flex items-center justify-between w-full mb-3 px-1">
        <button
          type="button"
          onClick={onBackToStep1}
          className="text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 flex items-center gap-1 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Wróć do słówek</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-600">
            Ruchy: {movesCount}
          </span>
          <span className="text-xs font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Dopasowano: {matchedWordIds.length} / {words.length} par
          </span>
        </div>
      </div>

      {/* Plansza Memory */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center">
        
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-bold border border-orange-300 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Krok 2: Magiczne Pary</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-amber-950 font-story">
            Połącz angielskie słówko z polskim znaczeniem!
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-medium">
            Dotykaj kart, by je odwrócić i posłuchać lektora. Znajdź wszystkie 5 par!
          </p>
        </div>

        {/* Siatka 10 kart Memory (2x5 na telefonach, 5x2 na większych ekranach) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full mb-6">
          {cards.map((card, idx) => {
            const isFlipped = flippedIndices.includes(idx);
            const isMatched = matchedWordIds.includes(card.wordId);

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(idx)}
                className={`h-28 sm:h-32 rounded-2xl p-2.5 flex flex-col items-center justify-center border-3 transition-all duration-300 select-none cursor-pointer ${
                  isMatched
                    ? 'bg-emerald-100 border-emerald-500 shadow-leaf scale-98 opacity-95 text-emerald-950'
                    : isFlipped
                    ? 'bg-white border-orange-400 shadow-wood scale-102 ring-2 ring-orange-300'
                    : 'bg-gradient-to-tr from-amber-200 to-orange-200 hover:from-amber-300 hover:to-orange-300 border-amber-300 shadow-sm hover:scale-103'
                }`}
              >
                {isMatched || isFlipped ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    {card.emoji && (
                      <span className="text-2xl sm:text-3xl mb-1">{card.emoji}</span>
                    )}
                    <span className="font-black text-sm sm:text-base font-story text-amber-950 leading-tight">
                      {card.text}
                    </span>
                    {card.type === 'en' && (
                      <span className="text-[10px] text-orange-700 font-bold mt-1 bg-orange-100 px-1.5 py-0.5 rounded-full">
                        🔊 English
                      </span>
                    )}
                    {isMatched && (
                      <div className="mt-1 flex items-center gap-0.5 text-emerald-700 text-[10px] font-extrabold">
                        <Check className="w-3 h-3" /> Para!
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-amber-800">
                    <span className="text-3xl">🦊</span>
                    <span className="text-[11px] font-bold font-story mt-1 opacity-75">
                      Odkryj
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sukces i przycisk przejścia do Kroku 3 */}
        {isGameComplete && (
          <div className="w-full bg-emerald-100/90 rounded-2xl border-2 border-emerald-400 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 animate-pulse">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl">🎉</span>
              <div className="text-left">
                <h4 className="text-base font-black text-emerald-950 font-story">
                  Wspaniała pamięć, Zuziu!
                </h4>
                <p className="text-xs text-emerald-800 font-medium">
                  Wszystkie 5 par połączone bezbłędnie!
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                audioEffects.playStar();
                onCompleteStep2();
              }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 text-white font-black text-sm sm:text-base shadow-wood hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-emerald-300 cursor-pointer"
            >
              <span>Przejdź do: Sprawdzian 🎯</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
