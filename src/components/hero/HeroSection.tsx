import React from 'react';
import { ShieldCheck, Sliders, ArrowRight, Phone, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onNavigateToConfigurator: () => void;
  onNavigateToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onNavigateToConfigurator,
}) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200">
      {/* 1. CINEMATIC VIDEO BACKGROUND (Drone Intro Loop - Strictly Center-Centered) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full min-w-full min-h-full object-cover object-center"
          poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://sterlingcdn.b-cdn.net/democlientcontent/JACustomFabricators-DroneIntro1.mp4"
            type="video/mp4"
          />
        </video>

        {/* Sophisticated Architectural Light Overlay for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70 sm:to-white/60" />
        <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 cad-grid-light opacity-50 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges / Florida Status */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sky-300 shadow-xs text-xs font-mono font-bold text-sky-800">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>FLORIDA BUILDING CODE HVHZ</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700">LAKE WORTH, FL</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/90 backdrop-blur-md border border-emerald-300 text-xs font-mono font-semibold text-emerald-800 shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>P.E. SIGNED & SEALED</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Core Value & Metallic Heading (Streamlined & Punchy) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.12]">
              <span className="text-metal-lead block">
                Custom Architectural Metalworks
              </span>
              <span className="text-metal-blue block text-2xl sm:text-4xl lg:text-5xl mt-1">
                Engineered for Florida Coastal Living.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              From our 24,000 sq.ft. facility in Lake Worth, FL, <strong className="text-slate-950 font-semibold">J.A. Custom Fabricators</strong> builds high-velocity hurricane-rated shutters, railings, estate gates, and architectural stairs engineered to withstand up to 190 MPH winds.
            </p>

            {/* Streamlined Core Highlights (Clean 3-Point Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-mono text-slate-800 font-semibold">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-2 rounded-lg shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Patented El Dorado™ Woodgrain</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-2 rounded-lg shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Miami-Dade TAS 201/202/203</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md border border-slate-200 px-3 py-2 rounded-lg shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>10-Yr Marine Warranty</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onNavigateToConfigurator}
                className="btn-metal-brand inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wide text-white rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all"
              >
                <Sliders className="w-4 h-4 text-sky-200" />
                <span>Open 3D CAD Configurator</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="btn-metal-silver inline-flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-800 rounded-xl cursor-pointer shadow-xs hover:shadow transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Request Stamped Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-3 sm:py-3.5 text-xs font-mono font-bold text-slate-700 hover:text-sky-700 bg-white/80 hover:bg-white border border-slate-200 rounded-xl transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Signature Product Preview */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-lg space-y-3.5">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Featured Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  190 MPH HVHZ
                </span>
              </div>

              {/* Product Visual */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 border border-slate-200 group">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                  alt="El Dorado Woodgrain Aluminum Shutters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-3.5 text-white">
                  <div className="text-[11px] font-mono text-sky-300 uppercase font-bold">
                    Signature Line
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white leading-snug">
                    El Dorado™ Woodgrain Bahama Shutters
                  </div>
                </div>
              </div>

              {/* Compact Quick Specs */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <span className="text-[9px] text-slate-500 block uppercase">Alloy</span>
                  <span className="font-bold text-slate-900">6061-T6 Aluminum</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                  <span className="text-[9px] text-slate-500 block uppercase">Salt Marine Test</span>
                  <span className="font-bold text-sky-700">3,000+ Hrs ASTM</span>
                </div>
              </div>

              <button
                onClick={onNavigateToConfigurator}
                className="w-full btn-metal-brand py-2.5 rounded-lg text-xs font-bold text-white tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Customize in CAD Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Simplified Stats Highlights Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/85 backdrop-blur-md border border-slate-200 p-3 sm:p-4 rounded-xl shadow-xs"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-metal-lead tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-600 mt-0.5 uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
