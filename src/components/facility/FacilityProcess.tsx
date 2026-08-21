import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Factory, Calendar, Sparkles } from 'lucide-react';
import { WORKSHOP_PROCESS_STEPS, COMPANY_INFO } from '../../data/mockData';

interface FacilityProcessProps {
  onOpenQuoteModal: () => void;
}

export const FacilityProcess: React.FC<FacilityProcessProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="facility" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
            <Factory className="w-3.5 h-3.5 text-sky-600" />
            <span>LAKE WORTH, FLORIDA FACILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            <span className="text-metal-lead">24,000 Sq.Ft. Precision Manufacturing</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial 3D LiDAR laser site metrology to high-speed 6kW CNC fiber laser cutting and in-house AAMA 2605 coating, our entire production cycle is executed in-house in Lake Worth, FL.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {WORKSHOP_PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-display font-black text-sky-600">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-[11px] font-mono text-slate-700">
                {step.detailPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-sky-600 shrink-0 mt-0.5" />
                    <span className="leading-tight">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Shop Visit & Consultation CTA Box */}
        <div className="mt-14 bg-gradient-to-r from-sky-900 via-blue-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest">
              Direct Shop Collaboration
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Tour Our Lake Worth Fabrication Plant
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Architects, general contractors, and estate owners are welcome to inspect our 6kW fiber lasers, CNC press brakes, and El Dorado™ woodgrain sublimation line in person at 1230 Wingfield St., Lake Worth, FL.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="btn-metal-brand px-6 py-3.5 rounded-xl text-sm font-bold text-white tracking-wide cursor-pointer shadow-lg whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-sky-200 inline mr-2" />
              <span>Schedule Facility Walkthrough</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
