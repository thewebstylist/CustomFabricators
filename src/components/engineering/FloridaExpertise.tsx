import React from 'react';
import { ShieldCheck, Award, FileCheck2, CheckCircle2, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

interface FloridaExpertiseProps {
  onOpenQuoteModal: () => void;
}

export const FloridaExpertise: React.FC<FloridaExpertiseProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="engineering" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>FLORIDA PROFESSIONAL ENGINEERING (P.E.)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            <span className="text-metal-lead">HVHZ Code Compliance & Municipal Permitting</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Florida maintains the strictest building codes in the nation. Under lead engineer Angela Fajardo, P.E., our custom fabrications are signed, sealed, and guaranteed to pass municipal plan review.
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Signed & Sealed P.E. Calculations
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We provide full structural package calculations stamped by a Florida Licensed Professional Engineer for all custom railings, canopies, stairs, and shutters, streamlining permitting across Palm Beach, Broward, Miami-Dade, and Monroe counties.
            </p>
            <div className="pt-2 font-mono text-[11px] font-bold text-sky-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>In-House Florida P.E. Stamp</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              TAS 201/202/203 Impact Tested
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our El Dorado™ woodgrain shutters and impact glass railings undergo mandatory Testing Application Standards (TAS) for large missile impact (9-lb 2x4 projectile cannon) and cyclic wind pressures up to 9,000 cycles.
            </p>
            <div className="pt-2 font-mono text-[11px] font-bold text-sky-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Category 5 / 190+ MPH Rated</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              3,000+ Hr Salt-Spray Armor
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              South Florida's oceanfront atmosphere creates severe chloride pitting. We utilize high-yield 6061-T6 and 316L marine stainless with 5-stage zirconium conversion pretreatment and AAMA 2605 fluoropolymers.
            </p>
            <div className="pt-2 font-mono text-[11px] font-bold text-sky-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>ASTM B117 Certified Finish</span>
            </div>
          </div>

        </div>

        {/* Architect & Builder Testimonials */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              Trusted by Premier Florida Architects & Luxury Builders
            </span>
            <span className="text-xs font-mono font-bold text-sky-700">28+ Years of Proven Reliability</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 text-xs font-bold shrink-0">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{t.author}</div>
                    <div className="text-[10px] text-slate-500">{t.role} • {t.firm}</div>
                    <div className="text-[10px] font-mono font-bold text-sky-700 mt-0.5">Project: {t.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
