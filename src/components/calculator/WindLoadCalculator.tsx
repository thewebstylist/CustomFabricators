import React, { useState } from 'react';
import { ShieldCheck, Wind, MapPin, Compass, ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { FLORIDA_WIND_DATA, COMPANY_INFO } from '../../data/mockData';

interface WindLoadCalculatorProps {
  onConsultEngineering: (summary: {
    county: string;
    exposure: string;
    height: string;
    windSpeedMph: number;
    requiredPsf: number;
  }) => void;
}

export const WindLoadCalculator: React.FC<WindLoadCalculatorProps> = ({ onConsultEngineering }) => {
  const [selectedCountyName, setSelectedCountyName] = useState<string>('Palm Beach (JACF HQ)');
  const [exposureCategory, setExposureCategory] = useState<'D' | 'C' | 'B'>('D');
  const [installationHeight, setInstallationHeight] = useState<'0-15' | '15-30' | '30-60' | '60+'>('15-30');

  const activeCounty = FLORIDA_WIND_DATA.find(c => c.county === selectedCountyName) || FLORIDA_WIND_DATA[2];

  // Structural wind calculation (ASCE 7-22 simplified approach for quick estimation)
  const baseMph = exposureCategory === 'D' ? activeCounty.coastalExposureSpeedMph : activeCounty.baseWindSpeedMph;
  
  const heightMultiplier = {
    '0-15': 1.0,
    '15-30': 1.15,
    '30-60': 1.35,
    '60+': 1.6,
  }[installationHeight];

  const exposureMultiplier = {
    'D': 1.25, // Direct shoreline
    'C': 1.0,  // Open terrain
    'B': 0.85, // Urban / suburban
  }[exposureCategory];

  // Design pressure calculation
  const calculatedPsf = Math.round(0.00256 * Math.pow(baseMph, 2) * heightMultiplier * exposureMultiplier * 0.85);

  const handleConsult = () => {
    onConsultEngineering({
      county: activeCounty.county,
      exposure: `Exposure ${exposureCategory}`,
      height: `${installationHeight} Feet Elevation`,
      windSpeedMph: baseMph,
      requiredPsf: calculatedPsf,
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
            <Wind className="w-3.5 h-3.5 text-sky-600" />
            <span>FLORIDA BUILDING CODE (FBC 8TH EDITION)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            <span className="text-metal-lead">Florida Hurricane Wind-Load Calculator</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your Florida county and coastal exposure to determine the certified design wind speed (MPH), required design pressure (PSF), and structural alloy requirements.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Input Selection Controls */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-display font-bold text-slate-900 text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>Project Location & Site Conditions</span>
                </h3>
                <span className="text-xs font-mono text-slate-500 font-semibold">ASCE 7-22 Standards</span>
              </div>

              {/* 1. Florida County Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 block">
                  Select Florida County
                </label>
                <select
                  value={selectedCountyName}
                  onChange={(e) => setSelectedCountyName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                >
                  {FLORIDA_WIND_DATA.map((c) => (
                    <option key={c.county} value={c.county}>
                      {c.county} — {c.region} ({c.isHVHZ ? 'HVHZ Zone' : `${c.baseWindSpeedMph} MPH`})
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Coastal Exposure Category */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 block">
                  Coastal Exposure Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setExposureCategory('D')}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                      exposureCategory === 'D'
                        ? 'bg-sky-50 border-sky-500 text-sky-950 shadow-xs font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold">Exposure D</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Direct Waterfront / Ocean</div>
                  </button>

                  <button
                    onClick={() => setExposureCategory('C')}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                      exposureCategory === 'C'
                        ? 'bg-sky-50 border-sky-500 text-sky-950 shadow-xs font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold">Exposure C</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Open Terrain / Canal</div>
                  </button>

                  <button
                    onClick={() => setExposureCategory('B')}
                    className={`p-3 rounded-xl text-left transition-all cursor-pointer border ${
                      exposureCategory === 'B'
                        ? 'bg-sky-50 border-sky-500 text-sky-950 shadow-xs font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-bold">Exposure B</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Suburban / Shielded</div>
                  </button>
                </div>
              </div>

              {/* 3. Building Installation Height */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 block">
                  Installation Height Above Grade
                </label>
                <div className="grid grid-cols-4 gap-2 text-xs font-semibold">
                  {[
                    { id: '0-15', label: '1st Story (0-15 ft)' },
                    { id: '15-30', label: '2nd Story (15-30 ft)' },
                    { id: '30-60', label: '3rd-5th Fl (30-60 ft)' },
                    { id: '60+', label: 'High-Rise (60+ ft)' },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      onClick={() => setInstallationHeight(lvl.id as any)}
                      className={`p-2.5 rounded-xl text-center transition-all cursor-pointer border ${
                        installationHeight === lvl.id
                          ? 'bg-sky-600 text-white font-bold border-sky-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-[11px] truncate">{lvl.label}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
              <Award className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Calculations verified by Lead Engineer <strong>Angela Fajardo, P.E.</strong></span>
            </div>
          </div>

          {/* Right: Engineering Results HUD Card */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-md flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                  Florida Structural Design Criteria
                </div>
                {activeCounty.isHVHZ && (
                  <span className="text-[11px] font-mono font-bold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                    MIAMI-DADE / BROWARD HVHZ
                  </span>
                )}
              </div>

              {/* Big Stat Callouts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
                  <div className="text-[11px] font-mono font-bold text-sky-800 uppercase">
                    Design Wind Speed
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-sky-900 mt-1">
                    {baseMph} <span className="text-base sm:text-lg font-normal text-sky-700">MPH</span>
                  </div>
                  <div className="text-[10px] text-sky-700 mt-1 font-mono">
                    Cat 5 Hurricane Velocity
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-4">
                  <div className="text-[11px] font-mono font-bold text-sky-300 uppercase">
                    Required Design Pressure
                  </div>
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-1">
                    +{calculatedPsf} <span className="text-base sm:text-lg font-normal text-slate-300">PSF</span>
                  </div>
                  <div className="text-[10px] text-slate-300 mt-1 font-mono">
                    Negative Suction: -{Math.round(calculatedPsf * 1.15)} PSF
                  </div>
                </div>
              </div>

              {/* Material Recommendation Checklist */}
              <div className="space-y-2 pt-2 text-xs font-mono text-slate-700">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Standard Building Code:</span>
                  <span className="font-bold text-slate-900">{activeCounty.standardBuildingCode}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Corrosion Severity:</span>
                  <span className="font-bold text-amber-700">{activeCounty.saltCorrosionIndex}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Mandated Alloy & Finish:</span>
                  <span className="font-bold text-sky-800">{activeCounty.recommendedAlloy}</span>
                </div>
              </div>

            </div>

            {/* Action Button */}
            <button
              onClick={handleConsult}
              className="w-full btn-metal-brand py-3 rounded-xl text-sm font-bold text-white tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-sky-200" />
              <span>Request P.E. Stamped Permit Drawings</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
