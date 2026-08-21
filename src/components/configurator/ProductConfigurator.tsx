import React, { useState } from 'react';
import { Sliders, Download, Check, FileText, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CadViewerCanvas } from '../cad/CadViewerCanvas';
import { FINISH_OPTIONS } from '../../data/mockData';

interface ProductConfiguratorProps {
  onTransferToQuote: (configData: {
    productName: string;
    productCategory: string;
    width: number;
    height: number;
    finish: string;
    alloy: string;
  }) => void;
}

export const ProductConfigurator: React.FC<ProductConfiguratorProps> = ({ onTransferToQuote }) => {
  const [productType, setProductType] = useState<
    'shutter-bahama' | 'shutter-colonial' | 'railing-glass' | 'railing-cable' | 'gate-cantilever' | 'stairs-mono' | 'canopy-louver'
  >('shutter-bahama');

  const [width, setWidth] = useState<number>(48);
  const [height, setHeight] = useState<number>(60);
  const [louverAngle, setLouverAngle] = useState<number>(45);
  const [selectedAlloy, setSelectedAlloy] = useState<string>('6061-T6 Marine Aluminum');
  const [selectedFinish, setSelectedFinish] = useState<string>(FINISH_OPTIONS[0].name);
  const [specGenerated, setSpecGenerated] = useState<boolean>(false);

  const productOptions = [
    {
      id: 'shutter-bahama' as const,
      label: 'El Dorado™ Bahama Shutter',
      category: 'shutters',
      minW: 24,
      maxW: 96,
      minH: 24,
      maxH: 108,
      defaultW: 48,
      defaultH: 60,
      alloyOptions: ['6061-T6 Marine Aluminum', '6063-T6 Architectural'],
      basePsf: 95,
      weightFactor: 2.8,
    },
    {
      id: 'shutter-colonial' as const,
      label: 'El Dorado™ Colonial Shutter',
      category: 'shutters',
      minW: 24,
      maxW: 84,
      minH: 30,
      maxH: 100,
      defaultW: 42,
      defaultH: 66,
      alloyOptions: ['6061-T6 Marine Aluminum', '6063-T6 Architectural'],
      basePsf: 90,
      weightFactor: 3.1,
    },
    {
      id: 'railing-glass' as const,
      label: 'Horizon Glass Balustrade',
      category: 'railings',
      minW: 36,
      maxW: 180,
      minH: 36,
      maxH: 48,
      defaultW: 72,
      defaultH: 42,
      alloyOptions: ['6061-T6 Heavy Base Shoe + SentryGlas®', 'Marine 316L Base Cladding'],
      basePsf: 110,
      weightFactor: 8.5,
    },
    {
      id: 'railing-cable' as const,
      label: 'Marine 316L Cable Railing',
      category: 'railings',
      minW: 36,
      maxW: 240,
      minH: 36,
      maxH: 44,
      defaultW: 96,
      defaultH: 42,
      alloyOptions: ['6061-T6 Posts + 316L Marine Cable', 'All 316L Stainless Steel'],
      basePsf: 75,
      weightFactor: 4.2,
    },
    {
      id: 'gate-cantilever' as const,
      label: 'Cantilever Estate Gate',
      category: 'gates',
      minW: 72,
      maxW: 288,
      minH: 48,
      maxH: 96,
      defaultW: 144,
      defaultH: 72,
      alloyOptions: ['6061-T6 Box Extrusion', 'Heavy Marine Aluminum'],
      basePsf: 80,
      weightFactor: 5.5,
    },
    {
      id: 'stairs-mono' as const,
      label: 'Center-Spine Mono Stair',
      category: 'stairs',
      minW: 36,
      maxW: 60,
      minH: 96,
      maxH: 168,
      defaultW: 42,
      defaultH: 120,
      alloyOptions: ['ASTM A36 Structural Steel', '6061-T6 Heavy Aluminum'],
      basePsf: 150,
      weightFactor: 24.0,
    },
    {
      id: 'canopy-louver' as const,
      label: 'Louvered Pergola Canopy',
      category: 'canopies',
      minW: 48,
      maxW: 240,
      minH: 48,
      maxH: 144,
      defaultW: 96,
      defaultH: 72,
      alloyOptions: ['6005A-T61 Structural Alloy', '6061-T6 Frame'],
      basePsf: 85,
      weightFactor: 6.0,
    },
  ];

  const currentOption = productOptions.find(p => p.id === productType) || productOptions[0];
  const activeFinishObj = FINISH_OPTIONS.find(f => f.name === selectedFinish) || FINISH_OPTIONS[0];

  const handleProductSelect = (id: typeof productType) => {
    setProductType(id);
    const opt = productOptions.find(p => p.id === id);
    if (opt) {
      setWidth(opt.defaultW);
      setHeight(opt.defaultH);
      setSelectedAlloy(opt.alloyOptions[0]);
    }
  };

  const sqFootage = Number(((width * height) / 144).toFixed(2));
  const estimatedWeightLbs = Math.round(sqFootage * currentOption.weightFactor);
  const designPressureRating = Math.min(195, Math.round(currentOption.basePsf * (1 - (width * height) / 50000 + 0.1)));
  const fbcHurricaneCategory = designPressureRating >= 80 ? 'Cat 5 HVHZ (180+ MPH)' : 'Cat 4 (150+ MPH)';

  const handleExportSpec = () => {
    setSpecGenerated(true);
    setTimeout(() => {
      const specContent = `
=====================================================
JACF (J.A. CUSTOM FABRICATORS, INC.)
1230 Wingfield St., Lake Worth, FL 33460 | (561) 585-8854
TECHNICAL CAD SPECIFICATION & DATA SHEET
=====================================================

PRODUCT: ${currentOption.label}
DATE: ${new Date().toLocaleDateString()}
SPEC ID: JACF-CAD-${Math.floor(100000 + Math.random() * 900000)}

--- DIMENSIONS ---
Width: ${width}.000"
Height: ${height}.000"
Calculated Area: ${sqFootage} sq. ft.
Estimated Dry Weight: ${estimatedWeightLbs} lbs

--- MATERIAL & FINISH ---
Alloy: ${selectedAlloy}
Coating System: ${selectedFinish}
Rating: AAMA 2605 10-Yr Coastal Salt & UV Warranty

--- FLORIDA BUILDING CODE COMPLIANCE ---
Design Pressure: +${designPressureRating} PSF / -${Math.round(designPressureRating * 1.15)} PSF
Wind Velocity: ${fbcHurricaneCategory}
Signed & Sealed Calculations available from Angela Fajardo, P.E.
=====================================================
`;
      const blob = new Blob([specContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `JACF-Spec-${productType}-${width}x${height}.txt`;
      link.click();
      URL.revokeObjectURL(url);
    }, 300);
  };

  const handlePushToQuote = () => {
    onTransferToQuote({
      productName: currentOption.label,
      productCategory: currentOption.category,
      width,
      height,
      finish: selectedFinish,
      alloy: selectedAlloy,
    });
  };

  return (
    <section id="configurator" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
            <Sliders className="w-3.5 h-3.5 text-sky-600" />
            <span>INTERACTIVE CAD STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            <span className="text-metal-lead">Customize Dimensions & Architectural Finishes</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your architectural system, adjust custom dimensions, and preview authentic woodgrain & AAMA 2605 powdercoat finishes in real-time.
          </p>
        </div>

        {/* Product Type Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar">
          {productOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleProductSelect(opt.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                productType === opt.id
                  ? 'btn-metal-brand text-white shadow-md'
                  : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* 2-Column Workstation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive CAD Preview & Quick Stats */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-md">
              
              {/* Top CAD Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                    {currentOption.label}
                  </span>
                </div>
                <div className="text-[11px] font-mono font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">
                  {fbcHurricaneCategory}
                </div>
              </div>

              {/* Dynamic CAD Canvas */}
              <CadViewerCanvas
                productType={productType}
                widthInches={width}
                heightInches={height}
                finishColor={activeFinishObj.previewColor}
                finishName={activeFinishObj.name}
                louverAngle={louverAngle}
                showDimensions={true}
                showGrid={true}
              />

              {/* Quick Spec Metrics Bar */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 font-mono text-xs text-center">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[10px] block uppercase font-bold">Total Area</span>
                  <span className="text-slate-900 font-bold text-sm">{sqFootage} SQ.FT</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[10px] block uppercase font-bold">Est. Weight</span>
                  <span className="text-sky-700 font-bold text-sm">~{estimatedWeightLbs} LBS</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 text-[10px] block uppercase font-bold">Design Pressure</span>
                  <span className="text-emerald-700 font-bold text-sm">+{designPressureRating} PSF</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleExportSpec}
                  className="btn-metal-silver inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-800 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-sky-600" />
                  <span>{specGenerated ? 'Spec Sheet Exported!' : 'Export Spec Sheet (.TXT)'}</span>
                </button>

                <button
                  onClick={handlePushToQuote}
                  className="btn-metal-brand inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white tracking-wide cursor-pointer shadow-md"
                >
                  <span>Build Quote For This Design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Customization Sliders & Finishes */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-md space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Dimensions & Finishes
                </h3>
                <span className="text-xs font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-semibold">
                  Lake Worth Shop
                </span>
              </div>

              {/* Width Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <label htmlFor="width-slider" className="text-slate-700 font-bold">
                    Width (Inches)
                  </label>
                  <span className="text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {width}.000" ({(width / 12).toFixed(1)} ft)
                  </span>
                </div>
                <input
                  id="width-slider"
                  type="range"
                  min={currentOption.minW}
                  max={currentOption.maxW}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Min: {currentOption.minW}"</span>
                  <span>Max: {currentOption.maxW}"</span>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <label htmlFor="height-slider" className="text-slate-700 font-bold">
                    Height (Inches)
                  </label>
                  <span className="text-sky-700 font-bold bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {height}.000" ({(height / 12).toFixed(1)} ft)
                  </span>
                </div>
                <input
                  id="height-slider"
                  type="range"
                  min={currentOption.minH}
                  max={currentOption.maxH}
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>Min: {currentOption.minH}"</span>
                  <span>Max: {currentOption.maxH}"</span>
                </div>
              </div>

              {/* Louver Pitch Slider */}
              {(productType === 'shutter-bahama' || productType === 'shutter-colonial') && (
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <label htmlFor="louver-slider" className="text-slate-700 font-bold">
                      Louver Articulation Angle
                    </label>
                    <span className="text-sky-700 font-bold">{louverAngle}° Pitch</span>
                  </div>
                  <input
                    id="louver-slider"
                    type="range"
                    min="15"
                    max="60"
                    value={louverAngle}
                    onChange={(e) => setLouverAngle(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                  />
                </div>
              )}

              {/* Structural Alloy Selection */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="text-xs font-mono text-slate-700 font-bold block">
                  Structural Alloy
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {currentOption.alloyOptions.map((alloy) => (
                    <button
                      key={alloy}
                      onClick={() => setSelectedAlloy(alloy)}
                      className={`px-3 py-2 rounded-lg text-left text-xs font-mono font-semibold transition-all cursor-pointer flex items-center justify-between ${
                        selectedAlloy === alloy
                          ? 'bg-sky-50 border border-sky-400 text-sky-900 shadow-xs'
                          : 'bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>{alloy}</span>
                      {selectedAlloy === alloy && <Check className="w-3.5 h-3.5 text-sky-600" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Marine Coating / Woodgrain Finish Swatches */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono text-slate-700 font-bold">
                    Architectural Finish (AAMA 2605)
                  </label>
                  <span className="text-[10px] font-mono font-bold text-sky-600">10-Yr Coastal Warranty</span>
                </div>

                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                  {FINISH_OPTIONS.map((finish) => (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.name)}
                      className={`p-2 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                        selectedFinish === finish.name
                          ? 'bg-sky-50 border-sky-400 text-slate-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="w-4 h-4 rounded-full border border-slate-300 shrink-0 shadow-inner"
                          style={{ backgroundColor: finish.previewColor }}
                        />
                        <span className="text-[11px] font-bold truncate text-slate-900">{finish.name.split(' (')[0]}</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 font-medium uppercase truncate">{finish.category}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
