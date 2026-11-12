import React from 'react';

export const ForestBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#FAF7F0] text-stone-800 font-story overflow-x-hidden selection:bg-amber-200 selection:text-amber-900">
      {/* Akwarelowe, miękkie plamy i gradienty w tle */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Ciepłe słońce u góry */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-amber-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl" />
        
        {/* Leśna zieleń po lewej */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl" />
        
        {/* Ciepły pomarańcz po prawej */}
        <div className="absolute top-2/3 -right-48 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />

        {/* Akwarelowe, leśne sylwetki na samym dole tła */}
        <div className="absolute bottom-0 inset-x-0 h-40 opacity-20 pointer-events-none">
          <svg className="w-full h-full object-cover" viewBox="0 0 1440 280" preserveAspectRatio="none" fill="none">
            <path d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,181.3C672,171,768,117,864,117.3C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,280L1392,280C1344,280,1248,280,1152,280C1056,280,960,280,864,280C768,280,672,280,576,280C480,280,384,280,288,280C192,280,96,280,48,280L0,280Z" fill="#15803D" />
            <path d="M0,224L60,229.3C120,235,240,245,360,229.3C480,213,600,171,720,165.3C840,160,960,192,1080,208C1200,224,1320,224,1380,224L1440,224L1440,280L1380,280C1320,280,1200,280,1080,280C960,280,840,280,720,280C600,280,480,280,360,280C240,280,120,280,60,280L0,280Z" fill="#166534" />
          </svg>
        </div>
      </div>

      {/* Główna treść */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};
