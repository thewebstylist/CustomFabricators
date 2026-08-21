import React, { useState } from 'react';
import { ShieldCheck, Sliders, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../../data/mockData';
import { ProductItem } from '../../types';

interface ProductShowcaseProps {
  onSelectProductForConfigurator: (product: ProductItem) => void;
  onOpenQuoteModalWithProduct: (productName: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onSelectProductForConfigurator,
  onOpenQuoteModalWithProduct,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Metalworks' },
    { id: 'shutters', label: 'El Dorado™ Shutters' },
    { id: 'railings', label: 'Glass & Cable Railings' },
    { id: 'gates', label: 'Estate Gates & Fences' },
    { id: 'canopies', label: 'Louvered Pergolas' },
    { id: 'stairs', label: 'Custom Staircases' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>FLORIDA MANUFACTURED SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            <span className="text-metal-lead">Architectural Fabrication Solutions</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every system is engineered and custom-built in our 24,000 sq.ft. Lake Worth shop using high-yield 6061-T6 aluminum, 316 marine stainless steel, and AAMA 2605 coastal finishes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === cat.id
                  ? 'btn-metal-brand text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Photo */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-sky-800 border border-slate-200 shadow-xs">
                  {product.windRating.split(' (')[0]}
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                  {product.series}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-xl text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-sky-700 font-bold font-mono">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Key Features Bullet Points */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {product.highlightFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProductForConfigurator(product)}
                    className="btn-metal-silver py-2 px-3 rounded-lg text-xs font-bold text-slate-800 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Sliders className="w-3.5 h-3.5 text-sky-600" />
                    <span>3D CAD View</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModalWithProduct(product.name)}
                    className="btn-metal-brand py-2 px-3 rounded-lg text-xs font-bold text-white flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
