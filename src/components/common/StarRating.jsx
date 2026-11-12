import React from 'react';
import { StarIcon } from './Icons';

export const StarRating = ({ stars = 0, maxStars = 3, size = "md", animate = false }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-11 h-11"
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, index) => {
        const isFilled = index < stars;
        return (
          <div
            key={index}
            className={`transition-transform duration-300 ${isFilled ? 'text-amber-400 drop-shadow-[0_2px_4px_rgba(245,158,11,0.5)]' : 'text-stone-300'} ${animate && isFilled ? 'animate-pulse scale-110' : ''}`}
          >
            <StarIcon
              className={sizeClasses[size] || "w-6 h-6"}
              filled={isFilled}
              color={isFilled ? "#F59E0B" : "#D6D3D1"}
            />
          </div>
        );
      })}
    </div>
  );
};
