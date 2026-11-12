import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, FoxIcon, Volume2, Check } from '../common/Icons';
import { AudioButton } from '../common/AudioButton';
import { audioEffects } from '../../services/audioEffects';
import { speechService } from '../../services/speechService';

export const Step1StoryLearn = ({ stage, onCompleteStep1, onBackToMap }) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const words = stage.words;
  const currentWord = words[selectedWordIndex];

  // Stan rozpoznawania mowy mikrofonu
  const [isListening, setIsListening] = useState(false);
  const [speechFeedback, setSpeechFeedback] = useState(null); // 'success' | 'retry' | null
  const [recognizedText, setRecognizedText] = useState('');
  const [countdown, setCountdown] = useState(5);

  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  // Funkcja porównująca wymowę dziecka ze słówkiem docelowym z tolerancją
  const checkPronunciationMatch = (spoken, target) => {
    if (!spoken || !target) return false;
    const cleanSpoken = spoken.toLowerCase().trim().replace(/[^a-z]/g, '');
    const cleanTarget = target.toLowerCase().trim().replace(/[^a-z]/g, '');

    if (cleanSpoken === cleanTarget) return true;
    if (cleanSpoken.includes(cleanTarget) || cleanTarget.includes(cleanSpoken)) return true;

    // Tolerancja dla drobnych literówek
    let matches = 0;
    const minLen = Math.min(cleanSpoken.length, cleanTarget.length);
    const maxLen = Math.max(cleanSpoken.length, cleanTarget.length);
    if (Math.abs(cleanSpoken.length - cleanTarget.length) > 2) return false;

    for (let i = 0; i < minLen; i++) {
      if (cleanSpoken[i] === cleanTarget[i]) matches++;
    }
    return (matches / maxLen) >= 0.6;
  };

  const stopListening = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setIsListening(false);
  };

  const startListening = () => {
    stopListening();
    setSpeechFeedback(null);
    setRecognizedText('');
    setCountdown(5);

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      setSpeechFeedback('unsupported');
      return;
    }

    try {
      const recognition = new SpeechRec();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsListening(true);
        audioEffects.playPop();

        // Licznik 5 sekund
        let timeLeft = 5;
        countdownIntervalRef.current = setInterval(() => {
          timeLeft -= 1;
          setCountdown(timeLeft);
          if (timeLeft <= 0) {
            clearInterval(countdownIntervalRef.current);
          }
        }, 1000);

        // Automatyczne wyłączenie po 5 sekundach
        timerRef.current = setTimeout(() => {
          stopListening();
        }, 5000);
      };

      recognition.onresult = (event) => {
        stopListening();
        const transcript = event.results[0][0].transcript;
        setRecognizedText(transcript);

        const isMatch = checkPronunciationMatch(transcript, currentWord.english);

        if (isMatch) {
          setSpeechFeedback('success');
          audioEffects.playCorrect();
        } else {
          setSpeechFeedback('retry');
          audioEffects.playGentleOops();
        }
      };

      recognition.onerror = () => {
        stopListening();
        setSpeechFeedback('retry');
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
      setSpeechFeedback('retry');
    }
  };

  // Obsługa odtworzenia słówka z automatycznym włączeniem mikrofonu po zakończeniu
  const handlePlayWordWithAutoMic = async (slow = false) => {
    stopListening();
    setSpeechFeedback(null);
    audioEffects.playPop();

    // 1. Lektor wymawia angielskie słówko
    await speechService.speakEnglish(currentWord.english, currentWord.audioFile, slow);

    // 2. Automatycznie po zakończeniu wymowy włącza się mikrofon na 5 sekund!
    setTimeout(() => {
      startListening();
    }, 250);
  };

  // Reset mikrofonu przy zmianie słówka
  useEffect(() => {
    stopListening();
    setSpeechFeedback(null);
    setRecognizedText('');
    return () => stopListening();
  }, [selectedWordIndex]);

  const handleNext = () => {
    audioEffects.playPop();
    if (selectedWordIndex < words.length - 1) {
      setSelectedWordIndex(selectedWordIndex + 1);
    } else {
      audioEffects.playStar();
      onCompleteStep1();
    }
  };

  const handlePrev = () => {
    audioEffects.playPop();
    if (selectedWordIndex > 0) {
      setSelectedWordIndex(selectedWordIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      
      {/* Pasek nawigacyjny u góry kroku 1 */}
      <div className="flex items-center justify-between w-full mb-3 px-1">
        <button
          type="button"
          onClick={onBackToMap}
          className="text-xs font-bold text-amber-950 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl border border-amber-300 flex items-center gap-1 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Wróć do mapy</span>
        </button>

        <span className="text-xs font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
          Krok 1: Opowieść i 5 słówek
        </span>
      </div>

      {/* Główna karta z bajkowym wprowadzeniem i ilustracją rozdziału */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          
          {/* Ilustracja rozdziału - kadrowanie od góry (object-top), brak uciętych postaci */}
          <div className="rounded-2xl overflow-hidden border-3 border-amber-300 shadow-md h-56 sm:h-64 md:h-72 relative bg-amber-100">
            <img
              src={stage.illustration}
              alt={stage.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-3 left-3 bg-white/95 text-amber-950 px-2.5 py-1 rounded-full text-xs font-black border border-amber-300 shadow-sm">
              {stage.badge}
            </div>
          </div>

          {/* Opowieść wprowadzająca do etapu */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold text-orange-700 uppercase tracking-wide">
                Wprowadzenie do krainy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-amber-950 font-story mt-0.5 mb-2">
                {stage.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed font-story font-medium">
                {stage.storyIntro}
              </p>
            </div>

            {/* Odsłuchanie tekstu opowieści zsynchronizowane z wygenerowanym plikiem etap[X].mp3 */}
            <div className="mt-4 pt-3 border-t border-amber-200 flex items-center justify-between">
              <span className="text-xs text-amber-900 font-bold">
                Odsłuchaj fragment opowieści:
              </span>
              <AudioButton
                text={stage.storyIntro}
                audioUrl={stage.audioFile || `/audio/etap${stage.number}.mp3`}
                lang="pl"
                size="sm"
                variant="orange"
                label="Odsłuchaj lektora 🎧"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Karty słówek (Nawigacja 1-5 i szczegóły wybranego słówka z MIKROFONEM) */}
      <div className="w-full bg-cream-50 rounded-3xl border-4 border-amber-300 shadow-wood p-5 sm:p-7 flex flex-col items-center text-center">
        
        {/* Wybór słówka (Kafelki 1..5) */}
        <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
          {words.map((w, idx) => (
            <button
              key={w.id}
              type="button"
              onClick={() => {
                audioEffects.playPop();
                setSelectedWordIndex(idx);
              }}
              className={`px-3 py-1.5 rounded-2xl text-xs sm:text-sm font-bold font-story transition-all flex items-center gap-1.5 border cursor-pointer ${
                idx === selectedWordIndex
                  ? 'bg-fox-600 text-white shadow-wood border-orange-400 scale-105'
                  : 'bg-white text-stone-700 hover:bg-amber-100 border-amber-200'
              }`}
            >
              <span>{w.emoji}</span>
              <span>{w.english}</span>
            </button>
          ))}
        </div>

        {/* Szczegóły aktywnego słówka */}
        <div className="w-full max-w-lg bg-amber-50/80 rounded-2xl border-2 border-amber-200 p-4 sm:p-6 my-1">
          
          {/* Obrazek słówka z kadrowaniem od góry */}
          {currentWord.imageFile && !currentWord.imageFile.endsWith('.png') && (
            <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-amber-300 mb-3 shadow-inner bg-white">
              <img
                src={currentWord.imageFile}
                alt={currentWord.english}
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          )}

          {/* Angielskie słowo */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-950 font-story tracking-wide">
            {currentWord.english}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-mono mt-0.5">
            {currentWord.phonetic}
          </p>

          {/* Polskie znaczenie */}
          <div className="inline-block my-2 px-4 py-1.5 rounded-2xl bg-amber-200/90 border border-amber-300">
            <span className="text-lg sm:text-xl font-extrabold text-amber-950 font-story">
              {currentWord.polish}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-600 italic font-medium">
            „{currentWord.hint}”
          </p>

          {/* Przyciski wymowy lektora */}
          <div className="flex items-center justify-center gap-3 mt-4 mb-3">
            <button
              type="button"
              onClick={() => handlePlayWordWithAutoMic(false)}
              className="inline-flex items-center justify-center font-bold font-story rounded-2xl px-5 py-3 text-base gap-2 bg-gradient-to-b from-orange-400 to-fox-600 text-white shadow-wood hover:scale-102 active:scale-95 transition-all border border-amber-300 cursor-pointer"
            >
              <Volume2 className="w-5 h-5" />
              <span>Wymowa 🔊</span>
            </button>

            <button
              type="button"
              onClick={() => handlePlayWordWithAutoMic(true)}
              className="inline-flex items-center justify-center font-bold font-story rounded-2xl px-4 py-3 text-sm gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-300 hover:bg-emerald-100 shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <span>🐢 Wolniej</span>
            </button>
          </div>

          {/* SEKCJA 4: AUTOMATYCZNY MIKROFON DO ĆWICZENIA WYMOWY */}
          <div className="mt-4 pt-3 border-t-2 border-amber-200/80 flex flex-col items-center">
            
            {/* Wskaźnik mikrofonu: Zielony pulsujący gdy słucha (5s), Czerwony gdy nie słucha */}
            <div className="w-full flex justify-center mb-2">
              {isListening ? (
                <button
                  type="button"
                  onClick={stopListening}
                  className="w-full py-3 px-4 rounded-2xl bg-emerald-500 text-white font-black text-sm sm:text-base font-story shadow-leaf ring-4 ring-emerald-300/80 animate-pulse flex items-center justify-center gap-2 border-2 border-emerald-300 cursor-pointer"
                >
                  <span className="text-xl animate-bounce">🎙️</span>
                  <span>Powtórz słówko... ({countdown}s)</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startListening}
                  className="w-full py-3 px-4 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-black text-sm sm:text-base font-story shadow-wood flex items-center justify-center gap-2 border-2 border-red-300 active:scale-95 transition-all cursor-pointer"
                >
                  <span className="text-xl">🎤</span>
                  <span>Naciśnij, by powtórzyć na głos</span>
                </button>
              )}
            </div>

            {/* Informacja zwrotna o wymowie Zuzi */}
            {speechFeedback === 'success' && (
              <div className="w-full py-2.5 px-3 rounded-2xl bg-emerald-100 text-emerald-950 font-black text-sm border-2 border-emerald-400 flex items-center justify-center gap-2 animate-bounce">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Brawo Zuziu! Świetna wymowa! 🌟</span>
                {recognizedText && <span className="font-mono text-xs opacity-75 font-normal">("{recognizedText}")</span>}
              </div>
            )}

            {speechFeedback === 'retry' && (
              <div className="w-full py-2.5 px-3 rounded-2xl bg-amber-100 text-amber-950 font-bold text-xs sm:text-sm border-2 border-amber-300 flex items-center justify-center gap-1.5">
                <FoxIcon className="w-4 h-4 text-orange-600" />
                <span>Spróbuj jeszcze raz! 🦊 Powiedz głośno: <strong>{currentWord.english}</strong></span>
              </div>
            )}

            {speechFeedback === 'unsupported' && (
              <p className="text-[11px] text-stone-500 italic">
                (Twoja przeglądarka nie obsługuje mikrofonu, ale możesz powtarzać za lektorką!)
              </p>
            )}

          </div>

        </div>

        {/* Dolne przyciski nawigacji */}
        <div className="flex items-center justify-between w-full max-w-lg mt-5 gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={selectedWordIndex === 0}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold border transition-all ${
              selectedWordIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                : 'bg-white text-stone-700 hover:bg-amber-100 border-stone-300 cursor-pointer'
            }`}
          >
            ← Poprzednie słówko
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-3 rounded-2xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-forest-700 hover:from-emerald-700 hover:to-forest-800 shadow-leaf hover:scale-102 active:scale-95 transition-all flex items-center gap-2 border border-emerald-300 cursor-pointer"
          >
            <span>
              {selectedWordIndex === words.length - 1
                ? "Przejdź do: Magiczne Pary 🃏"
                : "Kolejne słówko →"}
            </span>
          </button>
        </div>

      </div>

    </div>
  );
};
