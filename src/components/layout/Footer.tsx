import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { BrandLogo } from '../common/BrandLogo';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info & Address */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="lg" />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              South Florida’s premier architectural metal fabricator. Engineering custom woodgrain aluminum shutters, impact balustrades, estate gates, pergolas, and floating stairs since 1997.
            </p>

            <div className="space-y-2 text-xs font-mono text-slate-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.zip}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone} (Main Shop)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Architectural Solutions */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-white">
              Systems & Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">El Dorado™ Woodgrain Shutters</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Impact Glass Balustrades</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Marine 316L Cable Railings</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Cantilever Estate Gates</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Louvered Pergolas & Canopies</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Floating Mono Staircases</a></li>
            </ul>
          </div>

          {/* Col 4: Engineering & Tools */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-white">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#configurator" className="hover:text-white transition-colors">Interactive 3D CAD Studio</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Florida Wind-Load Tool</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Coastal Project Portfolio</a></li>
              <li><a href="#facility" className="hover:text-white transition-colors">Lake Worth Facility Tour</a></li>
              <li><a href="#engineering" className="hover:text-white transition-colors">P.E. Stamped Drawings</a></li>
            </ul>
          </div>

          {/* Col 5: Certifications & Stamped RFQ */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-white">
              Florida Compliance
            </h4>
            <div className="space-y-2 text-[11px] font-mono text-slate-400">
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                <span className="text-sky-400 font-bold block">FBC 8TH EDITION</span>
                <span>Miami-Dade & Broward HVHZ</span>
              </div>
              <div className="bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                <span className="text-emerald-400 font-bold block">AAMA 2605 COATING</span>
                <span>10-Year Coastal Salt Warranty</span>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full btn-metal-brand py-2.5 rounded-xl text-xs font-bold text-white tracking-wide flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Request Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} J.A. Custom Fabricators, Inc. All rights reserved. Lake Worth, FL.
          </div>
          <div className="flex items-center gap-4">
            <span>DBA South Florida Aluminum</span>
            <span>•</span>
            <span>Florida Licensed & Insured</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
