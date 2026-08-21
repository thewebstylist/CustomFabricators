import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  // Sizing configurations
  const dimensions = {
    sm: { height: 32, iconSize: 32 },
    md: { height: 42, iconSize: 42 },
    lg: { height: 52, iconSize: 52 },
    xl: { height: 64, iconSize: 64 },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* High-Fidelity Vector Representation of J.A. Custom Fabricators Official Mark */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          style={{ width: dimensions.iconSize, height: dimensions.iconSize }}
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <defs>
            {/* 3D Blue I-Beam Gradients */}
            <linearGradient id="beamFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="40%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
            <linearGradient id="beamSideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>
            <linearGradient id="beamTopGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
            
            {/* Dark Graphite Disc Gradient */}
            <linearGradient id="darkDiscGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3f4146" />
              <stop offset="60%" stopColor="#252629" />
              <stop offset="100%" stopColor="#1a1b1d" />
            </linearGradient>

            {/* Bevel Stroke Gradient */}
            <linearGradient id="discBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#71717a" />
              <stop offset="100%" stopColor="#27272a" />
            </linearGradient>

            <filter id="logoShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* 1. Dark Graphite Crescent Disc (behind right of beam) */}
          <circle
            cx="96"
            cy="80"
            r="56"
            fill="url(#darkDiscGrad)"
            stroke="url(#discBevel)"
            strokeWidth="3.5"
            filter="url(#logoShadow)"
          />

          {/* Inner Disc Depth Ring */}
          <circle
            cx="96"
            cy="80"
            r="49"
            stroke="#52525b"
            strokeWidth="1.2"
            strokeDasharray="4 2"
            strokeOpacity="0.6"
          />

          {/* White Bold Condensed "J.A." Letters */}
          <g filter="url(#logoShadow)">
            <text
              x="100"
              y="97"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="48"
              fontWeight="900"
              fontStyle="italic"
              letterSpacing="-2px"
              fill="#ffffff"
              textAnchor="middle"
            >
              J.A.
            </text>
          </g>

          {/* 2. 3D Isometric Blue I-Beam (Left Foreground) */}
          <g filter="url(#logoShadow)">
            {/* Top Flange Face (Isometric 3D) */}
            <polygon
              points="14,24 64,24 78,14 28,14"
              fill="url(#beamTopGrad)"
            />
            {/* Top Flange Front Thickness */}
            <polygon
              points="14,24 64,24 64,36 14,36"
              fill="url(#beamFrontGrad)"
              stroke="#0284c7"
              strokeWidth="0.8"
            />
            {/* Top Flange Right Side Face */}
            <polygon
              points="64,24 78,14 78,26 64,36"
              fill="url(#beamSideGrad)"
            />

            {/* Vertical Web Front Face */}
            <polygon
              points="32,36 46,36 46,124 32,124"
              fill="url(#beamFrontGrad)"
              stroke="#0284c7"
              strokeWidth="0.8"
            />
            {/* Vertical Web Right Side Depth */}
            <polygon
              points="46,36 58,28 58,116 46,124"
              fill="url(#beamSideGrad)"
            />

            {/* Bottom Flange Top Face */}
            <polygon
              points="14,124 64,124 78,114 28,114"
              fill="url(#beamTopGrad)"
              opacity="0.9"
            />
            {/* Bottom Flange Front Face */}
            <polygon
              points="14,124 64,124 64,138 14,138"
              fill="url(#beamFrontGrad)"
              stroke="#0284c7"
              strokeWidth="0.8"
            />
            {/* Bottom Flange Right Side Face */}
            <polygon
              points="64,124 78,114 78,128 64,138"
              fill="url(#beamSideGrad)"
            />

            {/* Metallic Specular Highlight Ridge */}
            <line x1="15" y1="25" x2="63" y2="25" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="33" y1="37" x2="33" y2="123" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.7" />
            <line x1="15" y1="125" x2="63" y2="125" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.8" />
          </g>

          {/* Blueprint Drafting Construction Crosshair Accents */}
          <line x1="12" y1="14" x2="6" y2="14" stroke="#0284c7" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="14" y1="12" x2="14" y2="6" stroke="#0284c7" strokeWidth="1.2" strokeOpacity="0.8" />
          <circle cx="14" cy="14" r="1.5" fill="#0284c7" />
          <line x1="84" y1="14" x2="90" y2="14" stroke="#0284c7" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="150" y1="80" x2="156" y2="80" stroke="#0284c7" strokeWidth="1.2" strokeOpacity="0.8" />
        </svg>
      </div>

      {/* Blueprint Architectural Drafting Wordmark Typography */}
      <div className="flex flex-col justify-center leading-none">
        {/* Row 1: "CUSTOM" in Technical Graphite Hatch Typography */}
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display font-black tracking-[0.14em] uppercase ${
              size === 'sm'
                ? 'text-sm sm:text-base'
                : size === 'lg'
                ? 'text-xl sm:text-2xl'
                : size === 'xl'
                ? 'text-2xl sm:text-3xl'
                : 'text-base sm:text-lg'
            } ${isLight ? 'text-white' : 'text-slate-900'}`}
          >
            CUSTOM
          </span>
          <span
            className={`font-mono text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded border tracking-wider ${
              isLight
                ? 'bg-sky-950/80 text-sky-300 border-sky-600/50'
                : 'bg-sky-50 text-sky-700 border-sky-200'
            }`}
          >
            HVHZ
          </span>
        </div>

        {/* Row 2: "FABRICATORS, INC." in Signature Blueprint Sky Blue */}
        <div className="flex items-baseline gap-1 mt-0.5">
          <span
            className={`font-display font-black tracking-[0.10em] uppercase text-sky-600 ${
              size === 'sm'
                ? 'text-xs sm:text-sm'
                : size === 'lg'
                ? 'text-base sm:text-lg'
                : size === 'xl'
                ? 'text-lg sm:text-xl'
                : 'text-sm sm:text-base'
            }`}
          >
            FABRICATORS
          </span>
          <span
            className={`font-display font-bold tracking-wider uppercase text-[10px] sm:text-xs ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            , INC.
          </span>
        </div>

        {/* Sub-label location & heritage (optional on compact views) */}
        {showTagline && size !== 'sm' && (
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`text-[9px] font-mono tracking-widest uppercase font-semibold ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              LAKE WORTH, FL • EST. 1997
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
