import React from 'react';

interface CadViewerCanvasProps {
  productType: 'shutter-bahama' | 'shutter-colonial' | 'railing-cable' | 'railing-glass' | 'gate-cantilever' | 'stairs-mono' | 'canopy-louver';
  widthInches: number;
  heightInches: number;
  finishColor: string;
  finishName?: string;
  louverAngle?: number;
  showDimensions?: boolean;
  showGrid?: boolean;
}

export const CadViewerCanvas: React.FC<CadViewerCanvasProps> = ({
  productType,
  widthInches,
  heightInches,
  finishColor,
  finishName,
  louverAngle = 45,
  showDimensions = true,
  showGrid = true,
}) => {
  // SVG Canvas dimensions
  const canvasWidth = 600;
  const canvasHeight = 440;
  const padding = 65;

  const innerWidth = canvasWidth - padding * 2;
  const innerHeight = canvasHeight - padding * 2;

  // Slat calculation for shutters/railings
  const louverCount = Math.max(6, Math.min(22, Math.round(heightInches / 3.8)));
  const cableCount = Math.max(4, Math.min(10, Math.round(heightInches / 4.2)));

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-900 rounded-2xl border border-slate-700/80 overflow-hidden select-none flex items-center justify-center p-4 shadow-inner">
      {/* Blueprint Grid Watermark */}
      {showGrid && (
        <div className="absolute inset-0 blueprint-grid-light opacity-35 pointer-events-none" />
      )}

      {/* Top Bar Coordinate / Precision HUD */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300 border-b border-slate-700/60 pb-2 pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
          <span className="text-white font-bold tracking-wider uppercase">JACF AUTODESK SOLIDWORKS GENERATOR</span>
          <span className="text-slate-500">|</span>
          <span className="text-sky-300 font-medium">SCALE 1:12</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 font-semibold text-slate-300">
          <span>TOL: ±0.015"</span>
          <span className="text-slate-500">|</span>
          <span className="text-sky-400 font-bold">6061-T6 ALLOY</span>
          <span className="text-slate-500">|</span>
          <span className="text-emerald-400">HVHZ READY</span>
        </div>
      </div>

      {/* SVG CAD Drawing */}
      <svg
        viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
        className="w-full h-full max-h-[360px] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
      >
        <defs>
          {/* Woodgrain / Metallic Pattern Definition */}
          <linearGradient id="primaryFinishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={finishColor} stopOpacity="1" />
            <stop offset="50%" stopColor={finishColor} stopOpacity="0.88" />
            <stop offset="100%" stopColor={finishColor} stopOpacity="0.75" />
          </linearGradient>

          <pattern id="cadHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="8" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.3" />
          </pattern>
        </defs>

        {/* CAD Crosshairs */}
        <g stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="4,4">
          <line x1="20" y1={canvasHeight / 2} x2={canvasWidth - 20} y2={canvasHeight / 2} />
          <line x1={canvasWidth / 2} y1="20" x2={canvasWidth / 2} y2={canvasHeight - 20} />
        </g>

        {/* 1. Bahama Shutter CAD */}
        {productType === 'shutter-bahama' && (
          <g transform={`translate(${padding + 20}, ${padding + 10})`}>
            {/* Top Continuous Hinge & Mounting Bar */}
            <rect x="-10" y="-12" width={innerWidth - 40 + 20} height="12" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
            <circle cx="10" cy="-6" r="2.5" fill="#ffffff" />
            <circle cx={innerWidth - 50} cy="-6" r="2.5" fill="#ffffff" />
            <circle cx={(innerWidth - 40) / 2} cy="-6" r="2.5" fill="#ffffff" />

            {/* Shutter Outer Frame */}
            <rect
              x="0"
              y="0"
              width={innerWidth - 40}
              height={innerHeight - 30}
              rx="3"
              fill="url(#primaryFinishGrad)"
              stroke="#f8fafc"
              strokeWidth="1.8"
            />
            {/* Inner Recess */}
            <rect
              x="16"
              y="16"
              width={innerWidth - 72}
              height={innerHeight - 62}
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1"
              strokeOpacity="0.7"
            />

            {/* Center Vertical Mullion Stile */}
            <rect
              x={(innerWidth - 40) / 2 - 6}
              y="16"
              width="12"
              height={innerHeight - 62}
              fill="url(#primaryFinishGrad)"
              stroke="#94a3b8"
              strokeWidth="0.8"
            />

            {/* Left & Right Louver Slats */}
            {Array.from({ length: louverCount }).map((_, i) => {
              const yPos = 24 + (i * (innerHeight - 80)) / (louverCount - 1);
              return (
                <g key={i}>
                  {/* Left Louver */}
                  <rect
                    x="20"
                    y={yPos}
                    width={(innerWidth - 40) / 2 - 30}
                    height="8"
                    rx="1"
                    fill="url(#primaryFinishGrad)"
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    transform={`rotate(${(louverAngle - 45) * 0.25}, 20, ${yPos})`}
                  />
                  {/* Right Louver */}
                  <rect
                    x={(innerWidth - 40) / 2 + 10}
                    y={yPos}
                    width={(innerWidth - 40) / 2 - 30}
                    height="8"
                    rx="1"
                    fill="url(#primaryFinishGrad)"
                    stroke="#ffffff"
                    strokeWidth="0.6"
                    transform={`rotate(${(louverAngle - 45) * 0.25}, ${(innerWidth - 40) / 2 + 10}, ${yPos})`}
                  />
                </g>
              );
            })}

            {/* Telescoping Bahama Support Arms */}
            <line x1="-15" y1={innerHeight - 30} x2="10" y2={innerHeight - 45} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            <line x1={innerWidth - 25} y1={innerHeight - 30} x2={innerWidth - 50} y2={innerHeight - 45} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {/* 2. Colonial Shutter CAD (Bi-Fold) */}
        {productType === 'shutter-colonial' && (
          <g transform={`translate(${padding + 10}, ${padding + 10})`}>
            {/* Left Leaf */}
            <g transform="translate(0, 0)">
              <rect x="0" y="0" width={(innerWidth - 40) / 2 - 8} height={innerHeight - 30} fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.8" />
              {/* Louvers */}
              {Array.from({ length: louverCount }).map((_, i) => (
                <rect
                  key={i}
                  x="14"
                  y={18 + (i * (innerHeight - 66)) / (louverCount - 1)}
                  width={(innerWidth - 40) / 2 - 36}
                  height="6"
                  fill="#0f172a"
                  stroke="#38bdf8"
                  strokeWidth="0.6"
                />
              ))}
              <path d="M -4 20 L 16 20 L 22 24 L 22 28 L 16 32 L -4 32 Z" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
              <path d={`M -4 ${innerHeight - 55} L 16 ${innerHeight - 55} L 22 ${innerHeight - 51} L 22 ${innerHeight - 47} L 16 ${innerHeight - 43} L -4 ${innerHeight - 43} Z`} fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
            </g>

            {/* Right Leaf */}
            <g transform={`translate(${(innerWidth - 40) / 2 + 8}, 0)`}>
              <rect x="0" y="0" width={(innerWidth - 40) / 2 - 8} height={innerHeight - 30} fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.8" />
              {/* Louvers */}
              {Array.from({ length: louverCount }).map((_, i) => (
                <rect
                  key={i}
                  x="14"
                  y={18 + (i * (innerHeight - 66)) / (louverCount - 1)}
                  width={(innerWidth - 40) / 2 - 36}
                  height="6"
                  fill="#0f172a"
                  stroke="#38bdf8"
                  strokeWidth="0.6"
                />
              ))}
              <path d={`M ${(innerWidth - 40) / 2 - 4} 20 L ${(innerWidth - 40) / 2 - 24} 20 L ${(innerWidth - 40) / 2 - 30} 24 L ${(innerWidth - 40) / 2 - 30} 28 L ${(innerWidth - 40) / 2 - 24} 32 L ${(innerWidth - 40) / 2 - 4} 32 Z`} fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
              <path d={`M ${(innerWidth - 40) / 2 - 4} ${innerHeight - 55} L ${(innerWidth - 40) / 2 - 24} ${innerHeight - 55} L ${(innerWidth - 40) / 2 - 30} ${innerHeight - 51} L ${(innerWidth - 40) / 2 - 30} ${innerHeight - 47} L ${(innerWidth - 40) / 2 - 24} ${innerHeight - 43} L ${(innerWidth - 40) / 2 - 4} ${innerHeight - 43} Z`} fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
            </g>
          </g>
        )}

        {/* 3. Railing Glass CAD */}
        {productType === 'railing-glass' && (
          <g transform={`translate(${padding}, ${padding + 20})`}>
            {/* Concrete Slab Base */}
            <rect x="-15" y={innerHeight - 20} width={innerWidth + 30} height="20" fill="#1e293b" stroke="#475569" strokeWidth="1.2" strokeDasharray="4,2" />
            {/* Base Shoe Channel */}
            <rect x="0" y={innerHeight - 40} width={innerWidth} height="22" fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.5" />
            <line x1="0" y1={innerHeight - 29} x2={innerWidth} y2={innerHeight - 29} stroke="#38bdf8" strokeWidth="1.5" />

            {/* Impact Laminated Glass Panels */}
            <g opacity="0.9">
              <rect x="10" y="30" width={innerWidth / 2 - 18} height={innerHeight - 72} fill="#38bdf8" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="1.8" />
              <rect x={innerWidth / 2 + 8} y="30" width={innerWidth / 2 - 18} height={innerHeight - 72} fill="#38bdf8" fillOpacity="0.22" stroke="#38bdf8" strokeWidth="1.8" />
              {/* Glass Glare Lines */}
              <line x1="30" y1="50" x2="60" y2={innerHeight - 80} stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="30,15" />
              <line x1={innerWidth / 2 + 28} y1="50" x2={innerWidth / 2 + 58} y2={innerHeight - 80} stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.6" strokeDasharray="30,15" />
            </g>

            {/* Minimalist Top Cap Rail */}
            <rect x="0" y="18" width={innerWidth} height="12" fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.5" rx="2" />
          </g>
        )}

        {/* 4. Railing Cable CAD */}
        {productType === 'railing-cable' && (
          <g transform={`translate(${padding}, ${padding + 20})`}>
            {/* Posts */}
            <rect x="0" y="20" width="16" height={innerHeight - 40} fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.5" />
            <rect x={innerWidth / 2 - 8} y="20" width="16" height={innerHeight - 40} fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.5" />
            <rect x={innerWidth - 16} y="20" width="16" height={innerHeight - 40} fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.5" />

            {/* Top Handrail */}
            <rect x="-10" y="10" width={innerWidth + 20} height="14" fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.5" rx="2" />
            {/* Bottom Rail */}
            <rect x="0" y={innerHeight - 25} width={innerWidth} height="8" fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="1.5" />

            {/* Stainless Marine Cable Strands */}
            {Array.from({ length: cableCount }).map((_, i) => {
              const y = 38 + (i * (innerHeight - 70)) / (cableCount - 1);
              return (
                <g key={i}>
                  <line x1="16" y1={y} x2={innerWidth - 16} y2={y} stroke="#cbd5e1" strokeWidth="1.8" />
                  <circle cx="8" cy={y} r="2.5" fill="#38bdf8" />
                  <circle cx={innerWidth - 8} cy={y} r="2.5" fill="#38bdf8" />
                </g>
              );
            })}
          </g>
        )}

        {/* 5. Cantilever Gate CAD */}
        {productType === 'gate-cantilever' && (
          <g transform={`translate(${padding - 20}, ${padding + 25})`}>
            {/* Gate Main Outer Frame */}
            <rect x="0" y="20" width={innerWidth + 30} height={innerHeight - 60} rx="3" fill="none" stroke="url(#primaryFinishGrad)" strokeWidth="3.5" />
            
            {/* Counterbalance Tail Section */}
            <rect x={innerWidth * 0.75} y="20" width={innerWidth * 0.25 + 30} height={innerHeight - 60} fill="url(#cadHatch)" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3,3" />

            {/* Internal Diagonal Engineered Trussing */}
            <line x1="0" y1="20" x2={innerWidth * 0.25} y2={innerHeight - 40} stroke="#38bdf8" strokeWidth="2" />
            <line x1={innerWidth * 0.25} y1={innerHeight - 40} x2={innerWidth * 0.5} y2="20" stroke="#38bdf8" strokeWidth="2" />
            <line x1={innerWidth * 0.5} y1="20" x2={innerWidth * 0.75} y2={innerHeight - 40} stroke="#38bdf8" strokeWidth="2" />
            <line x1={innerWidth * 0.75} y1={innerHeight - 40} x2={innerWidth + 30} y2="20" stroke="#38bdf8" strokeWidth="2" />

            {/* Slat Infill */}
            {Array.from({ length: 14 }).map((_, i) => (
              <line
                key={i}
                x1={15 + i * 22}
                y1="25"
                x2={15 + i * 22}
                y2={innerHeight - 45}
                stroke="#f8fafc"
                strokeWidth="1.2"
                strokeOpacity="0.6"
              />
            ))}

            {/* Heavy Duty Roller Track Assembly */}
            <rect x={innerWidth * 0.65} y={innerHeight - 35} width="60" height="15" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.8" />
            <circle cx={innerWidth * 0.65 + 15} cy={innerHeight - 27} r="5" fill="#38bdf8" />
            <circle cx={innerWidth * 0.65 + 45} cy={innerHeight - 27} r="5" fill="#38bdf8" />

            <rect x={innerWidth * 0.9} y={innerHeight - 35} width="60" height="15" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.8" />
            <circle cx={innerWidth * 0.9 + 15} cy={innerHeight - 27} r="5" fill="#38bdf8" />
            <circle cx={innerWidth * 0.9 + 45} cy={innerHeight - 27} r="5" fill="#38bdf8" />
          </g>
        )}

        {/* 6. Floating Mono-Stringer Stairs CAD */}
        {productType === 'stairs-mono' && (
          <g transform={`translate(${padding}, ${padding + 10})`}>
            {/* Center Spine Beam Diagonal */}
            <path
              d={`M 10 ${innerHeight - 20} L 40 ${innerHeight - 20} L ${innerWidth - 20} 50 L ${innerWidth - 50} 50 Z`}
              fill="url(#primaryFinishGrad)"
              stroke="#f8fafc"
              strokeWidth="2.5"
            />
            {/* Base Anchor Plate */}
            <rect x="-5" y={innerHeight - 20} width="60" height="12" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
            <circle cx="10" cy={innerHeight - 14} r="3" fill="#38bdf8" />
            <circle cx="35" cy={innerHeight - 14} r="3" fill="#38bdf8" />

            {/* Top Anchor Header */}
            <rect x={innerWidth - 65} y="38" width="55" height="12" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
            <circle cx={innerWidth - 45} cy="44" r="3" fill="#38bdf8" />

            {/* Stair Treads and Saddles */}
            {Array.from({ length: 6 }).map((_, i) => {
              const xStep = 30 + (i * (innerWidth - 90)) / 5;
              const yStep = innerHeight - 40 - (i * (innerHeight - 80)) / 5;
              return (
                <g key={i}>
                  <polygon
                    points={`${xStep},${yStep + 10} ${xStep + 25},${yStep + 10} ${xStep + 25},${yStep + 22}`}
                    fill="#1e293b"
                    stroke="#38bdf8"
                    strokeWidth="1"
                  />
                  <rect
                    x={xStep - 15}
                    y={yStep}
                    width="62"
                    height="10"
                    rx="1.5"
                    fill="#38bdf8"
                    fillOpacity="0.85"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                  />
                </g>
              );
            })}
          </g>
        )}

        {/* 7. Canopy / Louvered Pergola CAD */}
        {productType === 'canopy-louver' && (
          <g transform={`translate(${padding}, ${padding + 20})`}>
            {/* Wall Line */}
            <line x1="10" y1="0" x2="10" y2={innerHeight} stroke="#64748b" strokeWidth="3.5" strokeDasharray="6,3" />
            
            {/* Main Cantilever Outrigger Arm */}
            <rect x="10" y={innerHeight / 2 - 10} width={innerWidth - 30} height="16" fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="2" />
            
            {/* Structural Stainless Tie-Rod */}
            <line x1="10" y1="20" x2={innerWidth - 50} y2={innerHeight / 2 - 10} stroke="#38bdf8" strokeWidth="3" />
            <circle cx="10" cy="20" r="4.5" fill="#38bdf8" />
            <circle cx={innerWidth - 50} cy={innerHeight / 2 - 10} r="4.5" fill="#38bdf8" />

            {/* Aerodynamic Shading Blades */}
            {Array.from({ length: 8 }).map((_, i) => {
              const xBlade = 30 + (i * (innerWidth - 90)) / 7;
              return (
                <ellipse
                  key={i}
                  cx={xBlade}
                  cy={innerHeight / 2 - 18}
                  rx="10"
                  ry="4"
                  transform={`rotate(-25, ${xBlade}, ${innerHeight / 2 - 18})`}
                  fill="#38bdf8"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                />
              );
            })}
            
            {/* Front Gutter Fascia */}
            <rect x={innerWidth - 25} y={innerHeight / 2 - 22} width="16" height="32" fill="url(#primaryFinishGrad)" stroke="#f8fafc" strokeWidth="2" />
          </g>
        )}

        {/* Dimension Lines & Overlays */}
        {showDimensions && (
          <g className="font-mono text-[11px]">
            {/* Horizontal Width Dimension */}
            <g stroke="#38bdf8" strokeWidth="1.2">
              <line x1={padding} y1={canvasHeight - 20} x2={canvasWidth - padding} y2={canvasHeight - 20} />
              <line x1={padding} y1={canvasHeight - 26} x2={padding} y2={canvasHeight - 14} />
              <line x1={canvasWidth - padding} y1={canvasHeight - 26} x2={canvasWidth - padding} y2={canvasHeight - 14} />
            </g>
            <rect
              x={canvasWidth / 2 - 48}
              y={canvasHeight - 31}
              width="96"
              height="22"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1"
              rx="4"
            />
            <text
              x={canvasWidth / 2}
              y={canvasHeight - 16}
              fill="#38bdf8"
              textAnchor="middle"
              className="text-[11px] font-mono font-bold"
            >
              W: {widthInches}.000"
            </text>

            {/* Vertical Height Dimension */}
            <g stroke="#38bdf8" strokeWidth="1.2">
              <line x1="25" y1={padding} x2="25" y2={canvasHeight - padding} />
              <line x1="19" y1={padding} x2="31" y2={padding} />
              <line x1="19" y1={canvasHeight - padding} x2="31" y2={canvasHeight - padding} />
            </g>
            <rect
              x="4"
              y={canvasHeight / 2 - 14}
              width="68"
              height="22"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1"
              rx="4"
            />
            <text
              x="38"
              y={canvasHeight / 2 + 1}
              fill="#38bdf8"
              textAnchor="middle"
              className="text-[11px] font-mono font-bold"
            >
              H: {heightInches}.0"
            </text>
          </g>
        )}
      </svg>

      {/* Bottom Technical Indicator Strip */}
      <div className="absolute bottom-2 right-4 text-[11px] font-mono text-slate-300 bg-slate-850/90 px-3 py-1 rounded-md border border-slate-700 pointer-events-none z-10 shadow-sm">
        FINISH: <span className="text-sky-300 font-bold">{finishName || finishColor}</span>
      </div>
    </div>
  );
};
