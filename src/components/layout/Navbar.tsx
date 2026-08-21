import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, ShieldCheck, MapPin, Calculator, Layers, Sliders, Building2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { BrandLogo } from '../common/BrandLogo';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC key or resize to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Products', href: '#products', icon: Layers, desc: 'Shutters, Gates & Railings' },
    { name: 'CAD Studio', href: '#configurator', icon: Sliders, desc: 'Interactive 3D Configurator' },
    { name: 'Wind Specs', href: '#calculator', icon: Calculator, desc: 'HVHZ Load Calculator' },
    { name: 'Projects', href: '#portfolio', icon: Building2, desc: 'Florida Installations' },
    { name: 'Facility', href: '#facility', icon: MapPin, desc: '24k Sq.Ft. Lake Worth Shop' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2 sm:py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Strict 3-Zone Contract: [Brand Title] - [Nav Links] - [Primary Actions] */}
          <div className="flex items-center justify-between h-11 sm:h-12 gap-2 sm:gap-4">
            
            {/* ZONE 1: Brand Title (Always fits seamlessly on mobile and desktop) */}
            <a
              href="#"
              className="flex items-center shrink min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md py-1"
              aria-label="J.A. Custom Fabricators Home"
            >
              <BrandLogo size="md" showTagline={false} />
            </a>

            {/* ZONE 2: Navigation Links for Desktop */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold tracking-wide uppercase transition-all whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    activeSection === link.href.substring(1)
                      ? 'text-sky-700 bg-sky-50 border border-sky-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* ZONE 3: Action Buttons & Responsive Mobile Trigger */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Desktop Direct Call */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold text-slate-700 hover:text-sky-700 bg-slate-100/90 hover:bg-sky-50 border border-slate-200 rounded-lg whitespace-nowrap shrink-0 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              {/* Request Quote Button - Guaranteed to fit and never overflow on small phones */}
              <button
                onClick={onOpenQuoteModal}
                className="btn-metal-brand inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold tracking-wide text-white rounded-lg cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shadow-sm hover:shadow active:scale-98 transition-transform"
              >
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-200 shrink-0" />
                <span className="hidden xs:inline">Request </span>Quote
              </button>

              {/* Modern Mobile Menu Icon Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-1.5 sm:p-2 text-slate-700 hover:text-sky-700 bg-slate-100 hover:bg-sky-50 active:bg-sky-100 border border-slate-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Modern Slide-out Reveal Mobile Menu (Slide Drawer from Right) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop overlay with blur */}
        <div
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out border-l border-slate-200 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
            <BrandLogo size="sm" showTagline={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="p-4 overflow-y-auto space-y-1.5 flex-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
              Explore Fabrication
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-sky-50 border border-sky-200 text-sky-900 font-bold'
                      : 'hover:bg-slate-100 text-slate-700 font-semibold'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-display tracking-tight leading-none">{link.name}</div>
                      <div className="text-[11px] text-slate-500 font-normal mt-0.5">{link.desc}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              );
            })}

            {/* Quick Contact Box inside Drawer */}
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 text-slate-800 transition-colors"
              >
                <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500 font-bold">Call Shop Direct</div>
                  <div className="text-sm font-mono font-bold text-slate-900">{COMPANY_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono text-slate-600 bg-slate-50/60 rounded-lg border border-slate-200/60">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.city}, {COMPANY_INFO.state}</span>
              </div>
            </div>
          </div>

          {/* Drawer Footer CTA */}
          <div className="p-4 border-t border-slate-200 bg-white space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full btn-metal-brand py-3 px-4 text-sm font-bold text-white rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98 transition-transform"
            >
              <ShieldCheck className="w-4 h-4 text-sky-200" />
              <span>Request Free Stamped Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-slate-400 font-mono">
              FL License #QB48372 • P.E. Signed & Sealed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
