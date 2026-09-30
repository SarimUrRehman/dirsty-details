import React, { useState } from 'react';

interface BrandLogoProps {
  variant: 'navbar' | 'hero' | 'footer';
}

/**
 * BrandLogo Component
 * Attempts to load `/logo.png` (replace `/public/logo.png` with client's image file).
 * If `/logo.png` cannot be loaded, renders the custom Shield Badge emblem
 * (glossy black car, blue soap bubbles, dark navy & chrome outline)
 * paired with the exact text "DUSTY DETAILS" and "MOBILE DETAILING" underneath.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ variant }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const shieldSizeClasses = {
    navbar: 'w-10 h-11 sm:w-11 sm:h-12',
    hero: 'w-28 h-32 sm:w-36 sm:h-40',
    footer: 'w-9 h-10',
  }[variant];

  const containerClasses = {
    navbar: 'flex items-center gap-3 group focus:outline-none',
    hero: 'inline-flex flex-col items-center gap-3',
    footer: 'inline-flex items-center gap-3',
  }[variant];

  const titleClasses = {
    navbar: 'font-heading font-extrabold uppercase tracking-wider text-white text-base sm:text-lg leading-none',
    hero: 'font-heading font-black uppercase tracking-widest text-white text-xl sm:text-2xl leading-none mt-1',
    footer: 'font-heading font-extrabold uppercase tracking-wider text-white text-sm sm:text-base leading-none',
  }[variant];

  const subtitleClasses = {
    navbar: 'font-heading font-bold uppercase tracking-[0.22em] text-[#7FD0FF] text-[10px] sm:text-[11px] leading-tight mt-1',
    hero: 'font-heading font-bold uppercase tracking-[0.28em] text-[#7FD0FF] text-xs sm:text-sm leading-tight',
    footer: 'font-heading font-bold uppercase tracking-[0.2em] text-[#C9D6E6] text-[10px] leading-tight mt-0.5',
  }[variant];

  return (
    <div className={containerClasses}>
      {/* PLACEHOLDER LOGO IMAGE: Place the attached client logo at /public/logo.png */}
      <img
        src="/logo.png"
        alt="Dusty Details WA – Mobile Detailing Logo"
        referrerPolicy="no-referrer"
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(false)}
        className={`${imgLoaded ? 'block' : 'hidden'} ${
          variant === 'hero'
            ? 'h-32 sm:h-40 w-auto object-contain drop-shadow-[0_0_25px_rgba(46,155,255,0.45)]'
            : variant === 'navbar'
            ? 'h-11 w-auto object-contain'
            : 'h-10 w-auto object-contain'
        }`}
      />

      {/* Fallback Shield Emblem + "DUSTY DETAILS" / "MOBILE DETAILING" when /logo.png isn't loaded */}
      {!imgLoaded && (
        <>
          <div
            className={`relative shrink-0 ${shieldSizeClasses} transition-transform duration-200 group-hover:scale-105`}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 160 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_18px_rgba(46,155,255,0.4)]"
            >
              <defs>
                {/* Chrome Silver Metallic Bevel Gradient */}
                <linearGradient id={`chromeGrad-${variant}`} x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="28%" stopColor="#C9D6E6" />
                  <stop offset="55%" stopColor="#7A8FA8" />
                  <stop offset="78%" stopColor="#E4ECF5" />
                  <stop offset="100%" stopColor="#8CA0B8" />
                </linearGradient>

                {/* Deep Navy to Midnight Black Shield Fill */}
                <linearGradient id={`navyShield-${variant}`} x1="80" y1="10" x2="80" y2="170" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0F2952" />
                  <stop offset="50%" stopColor="#0A1A33" />
                  <stop offset="100%" stopColor="#050B16" />
                </linearGradient>

                {/* Electric Blue Inner Glow */}
                <radialGradient id={`blueGlow-${variant}`} cx="50%" cy="48%" r="50%">
                  <stop offset="0%" stopColor="#2E9BFF" stopOpacity="0.42" />
                  <stop offset="65%" stopColor="#2E9BFF" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#050B16" stopOpacity="0" />
                </radialGradient>

                {/* Glossy Black Car Body Gradient */}
                <linearGradient id={`carGloss-${variant}`} x1="30" y1="75" x2="130" y2="130" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2A364B" />
                  <stop offset="30%" stopColor="#0B111E" />
                  <stop offset="70%" stopColor="#050811" />
                  <stop offset="100%" stopColor="#1D2B44" />
                </linearGradient>
              </defs>

              {/* Outer Chrome Shield Border */}
              <path
                d="M80 6L146 30V84C146 126.5 117.8 158.4 80 174C42.2 158.4 14 126.5 14 84V30L80 6Z"
                fill={`url(#chromeGrad-${variant})`}
              />

              {/* Dark Navy Inner Shield Outline */}
              <path
                d="M80 12L140 34V83.5C140 122.2 114.2 151.6 80 166.2C45.8 151.6 20 122.2 20 83.5V34L80 12Z"
                fill={`url(#navyShield-${variant})`}
                stroke="#0A1A33"
                strokeWidth="2"
              />

              {/* Inner Chrome Pinstripe */}
              <path
                d="M80 18L134 38V83C134 118.2 110.6 145.2 80 159C49.4 145.2 26 118.2 26 83V38L80 18Z"
                stroke="#C9D6E6"
                strokeOpacity="0.55"
                strokeWidth="1.5"
              />

              {/* Ambient Electric Blue Core Glow */}
              <circle cx="80" cy="86" r="52" fill={`url(#blueGlow-${variant})`} />

              {/* Blue Soap Bubbles Inside Shield */}
              <circle cx="48" cy="54" r="9" fill="#2E9BFF" fillOpacity="0.35" stroke="#7FD0FF" strokeWidth="1.3" />
              <circle cx="45" cy="51" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />

              <circle cx="66" cy="42" r="6" fill="#7FD0FF" fillOpacity="0.3" stroke="#7FD0FF" strokeWidth="1" />
              <circle cx="64" cy="40" r="1.6" fill="#FFFFFF" fillOpacity="0.75" />

              <circle cx="110" cy="50" r="11" fill="#2E9BFF" fillOpacity="0.32" stroke="#7FD0FF" strokeWidth="1.4" />
              <circle cx="106" cy="46" r="3" fill="#FFFFFF" fillOpacity="0.8" />

              <circle cx="94" cy="38" r="5" fill="#7FD0FF" fillOpacity="0.35" stroke="#FFFFFF" strokeWidth="0.9" />
              <circle cx="121" cy="68" r="5.5" fill="#2E9BFF" fillOpacity="0.4" stroke="#7FD0FF" strokeWidth="1" />
              <circle cx="38" cy="70" r="4.5" fill="#7FD0FF" fillOpacity="0.35" stroke="#7FD0FF" strokeWidth="0.9" />

              {/* Glossy Black Car Silhouette (Front 3/4 Sports Coupe View) */}
              {/* Car Shadow Base */}
              <ellipse cx="80" cy="122" rx="46" ry="7" fill="#02050A" />

              {/* Car Body */}
              <path
                d="M34 104L44 88C48 81.5 55 77 64 77H96C105 77 112 81.5 116 88L126 104C129 107 130 111 129 116C128 119 125 121 121 121H39C35 121 32 119 31 116C30 111 31 107 34 104Z"
                fill={`url(#carGloss-${variant})`}
                stroke="#C9D6E6"
                strokeWidth="1.6"
              />

              {/* Windshield & Glossy Roof Line */}
              <path
                d="M49 90L57 80.5C59.5 78.5 63 78 67 78H93C97 78 100.5 78.5 103 80.5L111 90H49Z"
                fill="#0A1A33"
                stroke="#7FD0FF"
                strokeOpacity="0.65"
                strokeWidth="1.2"
              />

              {/* Windshield Specular Reflection */}
              <path d="M56 88L62 80H72L64 88H56Z" fill="#7FD0FF" fillOpacity="0.35" />

              {/* Hood Gloss Curves */}
              <path
                d="M38 103C52 98 66 96 80 96C94 96 108 98 122 103"
                stroke="#7FD0FF"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Front Grille */}
              <path
                d="M58 109H102L98 117H62L58 109Z"
                fill="#050B16"
                stroke="#C9D6E6"
                strokeWidth="1.2"
              />

              {/* LED Headlights (Electric Blue & White Glow) */}
              <path d="M36 105L50 107L48 112L35 110Z" fill="#FFFFFF" stroke="#2E9BFF" strokeWidth="1.2" />
              <path d="M124 105L110 107L112 112L125 110Z" fill="#FFFFFF" stroke="#2E9BFF" strokeWidth="1.2" />

              {/* Sparkle Shine Star on Car Hood */}
              <path
                d="M104 93L105.8 97.2L110 99L105.8 100.8L104 105L102.2 100.8L98 99L102.2 97.2L104 93Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          {/* Required Fallback Text: "DUSTY DETAILS" with "MOBILE DETAILING" underneath */}
          <div className={variant === 'hero' ? 'text-center' : 'text-left'}>
            <span className={`block ${titleClasses}`}>DUSTY DETAILS</span>
            <span className={`block ${subtitleClasses}`}>MOBILE DETAILING</span>
          </div>
        </>
      )}
    </div>
  );
};
