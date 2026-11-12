import React from 'react';

// Ikony UI oraz ikony słówek leśnych dla dzieci w postaci lekkich wektorów SVG

export const FoxIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8l3-5 5 3 5-3 3 5-2 11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3L4 8z" fill="#F97316" fillOpacity="0.15" />
    <path d="M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill={color} />
    <path d="M12 17l-1.5-1.5h3L12 17z" fill={color} />
    <path d="M7 6l5 4 5-4" />
  </svg>
);

export const TreeIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19v3M10 22h4" />
    <path d="M12 2a6 6 0 0 0-5.5 3.6A5 5 0 0 0 4 10a5 5 0 0 0 2 4.1A6 6 0 0 0 12 19a6 6 0 0 0 6-4.9A5 5 0 0 0 20 10a5 5 0 0 0-2.5-4.4A6 6 0 0 0 12 2z" fill="#22C55E" fillOpacity="0.2" />
  </svg>
);

export const BirdIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 7h.01M3 13c1.5-4 5.5-7 10-7a7 7 0 0 1 7 7c0 4-3.5 7-8 7-3 0-5.5-1.5-7-4l-2-3z" fill="#0EA5E9" fillOpacity="0.15" />
    <path d="M20 10l3 2-3 2" />
    <path d="M10 13c1-2 3-3 5-3" />
  </svg>
);

export const FrogIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="8" r="3" fill="#84CC16" fillOpacity="0.2" />
    <circle cx="17" cy="8" r="3" fill="#84CC16" fillOpacity="0.2" />
    <path d="M4 14c0-3 3.5-5 8-5s8 2 8 5-3.5 6-8 6-8-3-8-6z" fill="#84CC16" fillOpacity="0.15" />
    <circle cx="7" cy="8" r="1" fill={color} />
    <circle cx="17" cy="8" r="1" fill={color} />
    <path d="M9 16c1.5 1 4.5 1 6 0" />
  </svg>
);

export const BearIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="6" r="2.5" fill="#B45309" fillOpacity="0.2" />
    <circle cx="19" cy="6" r="2.5" fill="#B45309" fillOpacity="0.2" />
    <rect x="4" y="8" width="16" height="13" rx="6" fill="#B45309" fillOpacity="0.15" />
    <circle cx="9" cy="13" r="1" fill={color} />
    <circle cx="15" cy="13" r="1" fill={color} />
    <ellipse cx="12" cy="16" rx="2" ry="1.2" fill={color} />
  </svg>
);

export const FlowerIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" fill="#F59E0B" />
    <circle cx="12" cy="6" r="3" fill="#EC4899" fillOpacity="0.25" />
    <circle cx="18" cy="12" r="3" fill="#EC4899" fillOpacity="0.25" />
    <circle cx="12" cy="18" r="3" fill="#EC4899" fillOpacity="0.25" />
    <circle cx="6" cy="12" r="3" fill="#EC4899" fillOpacity="0.25" />
  </svg>
);

export const SunIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" fill="#FBBF24" fillOpacity="0.3" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const GrassIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21c1-6 4-11 7-13 1 4 2 8 2 13" fill="#22C55E" fillOpacity="0.2" />
    <path d="M12 21c1-7 4-13 8-15 0 5-1 10-3 15" fill="#22C55E" fillOpacity="0.2" />
    <path d="M2 21h20" />
  </svg>
);

export const ButterflyIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6v12M12 6l-2-2M12 6l2-2" />
    <path d="M12 8c-4-4-9-2-9 3s4 6 9 2c-4 4-2 7 1 7s5-3 5-3" fill="#A855F7" fillOpacity="0.2" />
    <path d="M12 8c4-4 9-2 9 3s-4 6-9 2c4 4 2 7-1 7s-5-3-5-3" fill="#A855F7" fillOpacity="0.2" />
  </svg>
);

export const RockIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18l3-9 8-5 7 4 1 10-5 3H6l-3-3z" fill="#94A3B8" fillOpacity="0.25" />
    <path d="M9 9l5 4-2 6" />
  </svg>
);

export const WaterIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="#38BDF8" fillOpacity="0.25" />
    <path d="M9 14a3 3 0 0 0 3 3" />
  </svg>
);

export const FishIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 16s4-8 11-8c4 0 7 3 9 5-2 2-5 5-9 5-7 0-11-8-11-8z" fill="#38BDF8" fillOpacity="0.2" />
    <path d="M22 13l-4-4v8zM15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export const BridgeIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 19V9h18v10M3 13c6-3 12-3 18 0M8 13v6M16 13v6" />
    <path d="M4 9c4-4 12-4 16 0" />
  </svg>
);

export const DuckIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="8" r="4" fill="#FACC15" fillOpacity="0.2" />
    <path d="M20 8l3 1-3 1" />
    <path d="M3 17c1-4 4-6 9-6h3c1 3 0 6-3 7-3 1-6 1-9-2z" fill="#FACC15" fillOpacity="0.25" />
    <circle cx="16" cy="7" r="1" fill={color} />
  </svg>
);

export const BoatIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18l2 3h16l2-3H2z" fill="#D97706" fillOpacity="0.2" />
    <path d="M12 4v11M12 4l6 7h-6M12 6L7 11h5" />
  </svg>
);

export const AppleIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z" fill="#EF4444" fillOpacity="0.25" />
    <path d="M12 7c.5-2 2-3 4-3" />
  </svg>
);

export const BreadIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11c0-4 3-7 8-7s8 3 8 7v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6z" fill="#D97706" fillOpacity="0.25" />
    <path d="M8 9a1 1 0 0 1 2 0M14 9a1 1 0 0 1 2 0" />
  </svg>
);

export const MilkIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2h8v3H8zM9 5l-2 4v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9l-2-4" fill="#F8FAFC" fillOpacity="0.3" />
    <path d="M7 13h10" />
  </svg>
);

export const HoneyIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 7h12v12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7z" fill="#F59E0B" fillOpacity="0.25" />
    <path d="M8 4h8v3H8zM12 11v4M10 13h4" />
  </svg>
);

export const BerryIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="14" r="4" fill="#6366F1" fillOpacity="0.3" />
    <circle cx="15" cy="15" r="3.5" fill="#8B5CF6" fillOpacity="0.3" />
    <circle cx="12" cy="10" r="3" fill="#6366F1" fillOpacity="0.2" />
    <path d="M12 7c0-3 2-4 4-4" />
  </svg>
);

export const OwlIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C7 2 5 6 5 11c0 6 3 10 7 10s7-4 7-10c0-5-2-9-7-9z" fill="#64748B" fillOpacity="0.2" />
    <circle cx="9" cy="9" r="2.5" />
    <circle cx="15" cy="9" r="2.5" />
    <path d="M12 11l-1 2h2l-1-2zM5 4l3 3M19 4l-3 3" />
  </svg>
);

export const MoonIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#FBBF24" fillOpacity="0.25" />
  </svg>
);

export const StarIcon = ({ className = "w-6 h-6", filled = false, color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? "#F59E0B" : "none"} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const RabbitIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="15" rx="6" ry="5" fill="#E2E8F0" fillOpacity="0.4" />
    <circle cx="12" cy="9" r="3.5" fill="#E2E8F0" fillOpacity="0.3" />
    <path d="M10 6c0-3.5 1-4 1.5-4s1.5.5 1.5 4M13 6c0-3.5 1-4 1.5-4s1.5.5 1.5 4" />
  </svg>
);

export const SquirrelIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 19c-3 0-5-2-5-5a5 5 0 0 1 5-5c2 0 3-2 3-4s-3-2-5 0c-3 3-3 7-3 10a4 4 0 0 0 4 4z" fill="#EA580C" fillOpacity="0.2" />
    <circle cx="8" cy="11" r="3" fill="#EA580C" fillOpacity="0.25" />
    <path d="M6 13a5 5 0 0 0 5 5h2" />
  </svg>
);

export const HouseIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="#F59E0B" fillOpacity="0.2" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const DoorIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" fill="#B45309" fillOpacity="0.2" />
    <circle cx="8" cy="12" r="1.5" fill={color} />
  </svg>
);

export const WindowIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="#38BDF8" fillOpacity="0.2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

export const BedIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v4" />
  </svg>
);

export const FamilyIcon = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Mapowanie nazw słówek na ikony
export const WordIconMap = {
  Fox: FoxIcon,
  Tree: TreeIcon,
  Bird: BirdIcon,
  Frog: FrogIcon,
  Bear: BearIcon,
  Flower: FlowerIcon,
  Sun: SunIcon,
  Grass: GrassIcon,
  Butterfly: ButterflyIcon,
  Rock: RockIcon,
  Water: WaterIcon,
  Fish: FishIcon,
  Bridge: BridgeIcon,
  Duck: DuckIcon,
  Boat: BoatIcon,
  Apple: AppleIcon,
  Bread: BreadIcon,
  Milk: MilkIcon,
  Honey: HoneyIcon,
  Berry: BerryIcon,
  Owl: OwlIcon,
  Moon: MoonIcon,
  Star: StarIcon,
  Rabbit: RabbitIcon,
  Squirrel: SquirrelIcon,
  House: HouseIcon,
  Door: DoorIcon,
  Window: WindowIcon,
  Bed: BedIcon,
  Family: FamilyIcon,
};

// Pomocnicza funkcja pobierająca ikonę dla słówka
export const getWordIcon = (iconName, props = {}) => {
  const IconComponent = WordIconMap[iconName] || FoxIcon;
  return <IconComponent {...props} />;
};

// Ogólne ikony nawigacji i interfejsu
export const Volume2 = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" fillOpacity="0.2" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

export const VolumeX = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

export const BookOpen = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="currentColor" fillOpacity="0.15" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="currentColor" fillOpacity="0.15" />
  </svg>
);

export const MapPin = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Settings = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const Sparkles = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.912 4.988L19 10l-5.088 2.012L12 17l-1.912-4.988L5 10l5.088-2.012z" fill="#FBBF24" fillOpacity="0.4" />
    <path d="M19 17l.956 2.494L22.5 20.5l-2.544 1.006L19 24l-.956-2.494L15.5 20.5l2.544-1.006z" fill="#FBBF24" fillOpacity="0.4" />
  </svg>
);

export const Trophy = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
    <path d="M6 4h12a2 2 0 0 1 2 2v3a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V6a2 2 0 0 1 2-2z" fill="#FBBF24" fillOpacity="0.3" />
  </svg>
);

export const Check = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ArrowRight = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const ArrowLeft = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const RotateCcw = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);

export const Lock = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="currentColor" fillOpacity="0.2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const Heart = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#EF4444" stroke="#DC2626" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const PawPrint = ({ className = "w-5 h-5", color = "#D97706" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color}>
    <ellipse cx="6" cy="8" rx="2" ry="3" transform="rotate(-20 6 8)" />
    <ellipse cx="11" cy="5" rx="2" ry="3" />
    <ellipse cx="16" cy="6" rx="2" ry="3" transform="rotate(15 16 6)" />
    <ellipse cx="20" cy="11" rx="2" ry="3" transform="rotate(35 20 11)" />
    <path d="M8 14c-1 0-3 2-2 4 1 3 4 5 7 4 3-1 5-4 4-6-1-1-3-2-5-2h-4z" />
  </svg>
);
