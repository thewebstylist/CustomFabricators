/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { ProductShowcase } from './components/products/ProductShowcase';
import { ProductConfigurator } from './components/configurator/ProductConfigurator';
import { WindLoadCalculator } from './components/calculator/WindLoadCalculator';
import { ProjectGallery } from './components/portfolio/ProjectGallery';
import { MaterialFinishes } from './components/materials/MaterialFinishes';
import { FloridaExpertise } from './components/engineering/FloridaExpertise';
import { FacilityProcess } from './components/facility/FacilityProcess';
import { Footer } from './components/layout/Footer';
import { QuoteBuilderModal } from './components/quote/QuoteBuilderModal';
import { ProductItem } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);
  const [configDataForQuote, setConfigDataForQuote] = useState<{
    productName: string;
    productCategory: string;
    width: number;
    height: number;
    finish: string;
    alloy: string;
  } | null>(null);
  
  const [activeSection, setActiveSection] = useState('products');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['products', 'configurator', 'calculator', 'portfolio', 'facility'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setConfigDataForQuote(null);
    setIsQuoteModalOpen(true);
  };

  const handleTransferConfigToQuote = (config: {
    productName: string;
    productCategory: string;
    width: number;
    height: number;
    finish: string;
    alloy: string;
  }) => {
    setConfigDataForQuote(config);
    setSelectedProductForQuote(config.productName);
    setIsQuoteModalOpen(true);
  };

  const handleConsultEngineeringFromCalc = (summary: {
    county: string;
    exposure: string;
    height: string;
    windSpeedMph: number;
    requiredPsf: number;
  }) => {
    setSelectedProductForQuote(`Florida ${summary.county} (${summary.windSpeedMph} MPH / ${summary.requiredPsf} PSF Calcs)`);
    setIsQuoteModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* 1. Navigation Top Bar */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main>
        {/* 2. Hero Section with Video Background Loop */}
        <HeroSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onNavigateToConfigurator={() => scrollToSection('configurator')}
          onNavigateToCalculator={() => scrollToSection('calculator')}
        />

        {/* 3. Expanded Product Solutions Showcase */}
        <ProductShowcase
          onSelectProductForConfigurator={(prod: ProductItem) => {
            scrollToSection('configurator');
          }}
          onOpenQuoteModalWithProduct={(prodName: string) => handleOpenQuoteModal(prodName)}
        />

        {/* 4. Streamlined Interactive CAD Studio */}
        <ProductConfigurator
          onTransferToQuote={handleTransferConfigToQuote}
        />

        {/* 5. Florida Hurricane Wind-Load Calculator */}
        <WindLoadCalculator
          onConsultEngineering={handleConsultEngineeringFromCalc}
        />

        {/* 6. Coastal Projects Gallery */}
        <ProjectGallery
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 7. Marine Alloys & Architectural Finishes Explorer */}
        <MaterialFinishes />

        {/* 8. Florida Code Compliance & P.E. Engineering */}
        <FloridaExpertise
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 9. Lake Worth 24,000 Sq.Ft. Facility & 5-Step Process */}
        <FacilityProcess
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      </main>

      {/* Technical Footer */}
      <Footer
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quote & RFQ Builder Modal */}
      <QuoteBuilderModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={selectedProductForQuote}
        initialConfig={configDataForQuote}
      />
    </div>
  );
}
