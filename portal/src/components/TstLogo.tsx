import React, { useState } from "react";

interface TstLogoProps {
  className?: string;
  showText?: boolean;
  hideSymbol?: boolean;
  size?: "small" | "normal";
}

export default function TstLogo({ className = "h-14 w-auto", showText = true, hideSymbol = false, size = "normal" }: TstLogoProps) {
  // We use our clean, pixel-perfect vector representation directly as it guarantees crisp, High-DPI layout,
  // exact corporate color matching, and 100% responsiveness without cross-origin CDN fetching issues.
  
  if (!showText && !hideSymbol) {
    return (
      <svg 
        viewBox="0 0 110 85" 
        className={className}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Oficial da Justiça do Trabalho / TST (Símbolo)"
        id="logo-tst-simbolo-vetorial-puro"
      >
        <defs>
          <linearGradient id="tst-blue-grad-icon" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a5080" />
            <stop offset="100%" stopColor="#00355c" />
          </linearGradient>
          <linearGradient id="tst-green-grad-icon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea580" />
            <stop offset="100%" stopColor="#097a5f" />
          </linearGradient>
        </defs>

        {/* 1. BLUE CIRCULAR HEAD (PEOPLE REPRESENTATION) */}
        <circle cx="43" cy="23" r="8.5" fill="url(#tst-blue-grad-icon)" />

        {/* 2. GOLD HORIZONTAL RECT (RIGHT SIDE OF THE SCALE / ARM) */}
        <rect x="52" y="33" width="22" height="8.5" rx="1.5" fill="#f5af0b" />

        {/* 3. GREEN HORIZONTAL RECT (LEFT SIDE OF THE SCALE / HANDOVER) */}
        <rect x="14" y="47" width="22" height="8.5" rx="1.5" fill="url(#tst-green-grad-icon)" />

        {/* 4. BLUE CURVED 'J' / SWOOSH SPIN */}
        <path 
          d="M48 33 
             C48 33, 44 48, 44 58 
             C44 65, 39 71, 31 71 
             L25 71 
             C18 71, 14 66, 14 60 
             L14 55 
             C20 55, 25 57, 25 61 
             C25 64, 28 65, 32 65 
             C36 65, 38 61, 38 54 
             L38 41 
             C38 36, 30 33, 24 33 
             L24 28 
             C34 28, 48 28, 48 33 Z" 
          fill="url(#tst-blue-grad-icon)" 
        />
      </svg>
    );
  }

  const isSmall = size === "small";

  return (
    <div 
      className={`flex items-center select-none ${isSmall ? "gap-1.5 sm:gap-2 mr-1" : "gap-3 sm:gap-4 mr-2"}`} 
      id="identidade-logo-tst-vetorial-fiel"
    >
      {/* 1. Vector Logo Symbol (Coded identically to TST corporate guidelines) */}
      {!hideSymbol && (
        <svg 
          viewBox="0 0 110 85" 
          className={isSmall ? "h-7 w-auto sm:h-9 shrink-0" : "h-12 w-auto sm:h-16 shrink-0"}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="tst-blue-grad-corp" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0c4f82" />
              <stop offset="100%" stopColor="#032a4d" />
            </linearGradient>
            <linearGradient id="tst-green-grad-corp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0da580" />
              <stop offset="100%" stopColor="#087c5f" />
            </linearGradient>
          </defs>

          {/* 1.1. BLUE CIRCULAR HEAD */}
          <circle cx="43" cy="23" r="8.5" fill="url(#tst-blue-grad-corp)" />

          {/* 1.2. GOLD RECT (RIGHT SCALE ARM) */}
          <rect x="52" y="32.5" width="22" height="8.5" rx="1.5" fill="#f5af0b" />

          {/* 1.3. GREEN RECT (LEFT SCALE BALANCE) */}
          <rect x="14" y="47" width="22" height="8.5" rx="1.5" fill="url(#tst-green-grad-corp)" />

          {/* 1.4. BLUE SWOOSH (JT PATH) */}
          <path 
            d="M48 33 
               C48 33, 44 48, 44 58 
               C44 65, 39 71, 31 71 
               L25 71 
               C18 71, 14 66, 14 60 
               L14 55 
               C20 55, 25 57, 25 61 
               C25 64, 28 65, 32 65 
               C36 65, 38 61, 38 54 
               L38 41 
               C38 36, 30 33, 24 33 
               L24 28 
               C34 28, 48 28, 48 33 Z" 
            fill="url(#tst-blue-grad-corp)" 
          />
        </svg>
      )}
      
      {/* 2. Text layout meticulously styled to match the official typography in the image:
          - "JUSTIÇA DO TRABALHO": uppercase, heavily bold, condensed/tracking-tight (deep blue)
          - "Tribunal Superior do Trabalho": Title Case, medium-bold, wider aspect, vibrantly blue */}
      <div className="flex flex-col justify-center text-left py-0.5" id="textos-logo-tst-corporativos">
        <h1 
          className={`font-black text-[#0c437a] leading-none tracking-[-0.051em] uppercase font-sans select-all flex shrink-0 ${
            isSmall 
              ? "text-[11px] sm:text-[14px] md:text-[16px]" 
              : "text-[20px] sm:text-[28px] md:text-[34px]"
          }`}
          style={{ 
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: "-0.051em"
          }}
        >
          JUSTIÇA DO TRABALHO
        </h1>
        <h2 
          className={`font-bold text-[#0c5a96] leading-none whitespace-nowrap font-sans select-all flex shrink-0 ${
            isSmall 
              ? "text-[6.5px] sm:text-[8px] md:text-[9.5px] mt-0.5" 
              : "text-[10px] sm:text-[13px] md:text-[15.5px] mt-1 sm:mt-1.5"
          }`}
          style={{ 
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: "-0.015em"
          }}
        >
          Tribunal Superior do Trabalho
        </h2>
      </div>
    </div>
  );
}
