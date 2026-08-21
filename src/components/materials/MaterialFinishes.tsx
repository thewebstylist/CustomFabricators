import React, { useState } from 'react';
import { Sparkles, Shield, Check, Award } from 'lucide-react';
import { FINISH_OPTIONS } from '../../data/mockData';

export const MaterialFinishes: React.FC = () => {
  const [selectedFinishId, setSelectedFinishId] = useState<string>(FINISH_OPTIONS[0].id);

  const activeFinish = FINISH_OPTIONS.find(f => f.id === selectedFinishId) || FINISH_OPTIONS[0];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>AAMA 2605 ARCHITECTURAL FINISHES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            <span className="text-metal-lead">Marine Alloys & Hyper-Realistic Woodgrains</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered specifically to eliminate coastal salt crusting, UV chalking, and paint blistering along Florida coastlines.
          </p>
        </div>

        {/* Interactive Swatch Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Swatch Selection Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FINISH_OPTIONS.map((finish) => (
              <button
                key={finish.id}
                onClick={() => setSelectedFinishId(finish.id)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border flex flex-col justify-between space-y-3 ${
                  selectedFinishId === finish.id
                    ? 'bg-sky-50 border-sky-500 shadow-md ring-2 ring-sky-200'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-full border border-slate-300 shadow-inner shrink-0"
                      style={{ backgroundColor: finish.previewColor }}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {finish.name.split(' (')[0]}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {finish.category}
                      </span>
                    </div>
                  </div>
                  {selectedFinishId === finish.id && (
                    <Check className="w-4 h-4 text-sky-600 shrink-0" />
                  )}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {finish.description}
                </p>
              </button>
            ))}
          </div>

          {/* Active Swatch Technical Callout Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-md space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-mono font-bold text-slate-700 uppercase">
                Selected Coating Specifications
              </span>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                100% Coastal Marine Grade
              </span>
            </div>

            <div
              className="h-28 rounded-xl border border-slate-300 shadow-inner flex items-center justify-center text-white font-display font-bold text-lg p-4 text-center"
              style={{ backgroundColor: activeFinish.previewColor }}
            >
              <span className="bg-slate-950/60 backdrop-blur-sm px-4 py-1.5 rounded-lg text-sm font-mono shadow">
                {activeFinish.name}
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[10px] block uppercase font-bold">Standard Spec</span>
                <span className="text-slate-900 font-bold text-sm">AAMA 2605 High-Performance Fluoropolymer</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[10px] block uppercase font-bold">Salt Spray Resistance</span>
                <span className="text-sky-700 font-bold text-sm">3,000+ Hours ASTM B117 Tested (Pass)</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <span className="text-slate-500 text-[10px] block uppercase font-bold">Warranty Coverage</span>
                <span className="text-slate-900 font-bold text-sm">{activeFinish.warranty}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {activeFinish.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
