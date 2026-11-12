import React, { useState } from 'react';
import { Step1StoryLearn } from './Step1StoryLearn';
import { Step2MemoryGame } from './Step2MemoryGame';
import { Step3Quiz } from './Step3Quiz';
import { Step4WheelAndReward } from './Step4WheelAndReward';

export const StageModal = ({
  stage,
  onClose,
  onFinishStage,
  onAwardSticker,
  onOpenBook,
  onOpenAlbum
}) => {
  // 'step1' (Opowieść i słówka) -> 'step2' (Magiczne Pary) -> 'step3' (Sprawdzian) -> 'step4' (Koło i Nagroda)
  const [currentStep, setCurrentStep] = useState('step1');
  const [lastScore, setLastScore] = useState(0);
  const [lastStars, setLastStars] = useState(0);

  const handleCompleteStep1 = () => {
    setCurrentStep('step2');
  };

  const handleCompleteStep2 = () => {
    setCurrentStep('step3');
  };

  const handleCompleteStep3 = (score, stars) => {
    setLastScore(score);
    setLastStars(stars);
    onFinishStage(stage.id, score, stars);
    setCurrentStep('step4');
  };

  return (
    <div className="fixed inset-0 z-40 bg-stone-900/65 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl my-auto py-3">
        
        {/* Górny pasek postępu 4 kroków etapu */}
        <div className="max-w-xl mx-auto mb-3 bg-cream-50/95 rounded-2xl p-1.5 sm:p-2 border-2 border-amber-300 shadow-sm flex items-center justify-around text-[11px] sm:text-xs font-black font-story">
          <div className={`px-2.5 py-1 rounded-xl transition-all ${
            currentStep === 'step1' ? 'bg-orange-500 text-white shadow-sm scale-105' : 'text-stone-500'
          }`}>
            <span>1. Opowieść</span>
          </div>

          <span className="text-amber-400">➜</span>

          <div className={`px-2.5 py-1 rounded-xl transition-all ${
            currentStep === 'step2' ? 'bg-orange-500 text-white shadow-sm scale-105' : 'text-stone-500'
          }`}>
            <span>2. Magiczne Pary</span>
          </div>

          <span className="text-amber-400">➜</span>

          <div className={`px-2.5 py-1 rounded-xl transition-all ${
            currentStep === 'step3' ? 'bg-orange-500 text-white shadow-sm scale-105' : 'text-stone-500'
          }`}>
            <span>3. Sprawdzian</span>
          </div>

          <span className="text-amber-400">➜</span>

          <div className={`px-2.5 py-1 rounded-xl transition-all ${
            currentStep === 'step4' ? 'bg-emerald-600 text-white shadow-sm scale-105' : 'text-stone-500'
          }`}>
            <span>4. Koło Fortuny 🎡</span>
          </div>
        </div>

        {/* Dynamiczny krok */}
        {currentStep === 'step1' && (
          <Step1StoryLearn
            stage={stage}
            onCompleteStep1={handleCompleteStep1}
            onBackToMap={onClose}
          />
        )}

        {currentStep === 'step2' && (
          <Step2MemoryGame
            stage={stage}
            onCompleteStep2={handleCompleteStep2}
            onBackToStep1={() => setCurrentStep('step1')}
          />
        )}

        {currentStep === 'step3' && (
          <Step3Quiz
            stage={stage}
            onCompleteStep3={handleCompleteStep3}
            onBackToStep2={() => setCurrentStep('step2')}
          />
        )}

        {currentStep === 'step4' && (
          <Step4WheelAndReward
            stage={stage}
            score={lastScore}
            stars={lastStars}
            onAwardSticker={onAwardSticker}
            onGoToMap={onClose}
            onOpenBook={() => {
              onClose();
              onOpenBook();
            }}
            onOpenAlbum={() => {
              onClose();
              onOpenAlbum();
            }}
          />
        )}

      </div>
    </div>
  );
};
