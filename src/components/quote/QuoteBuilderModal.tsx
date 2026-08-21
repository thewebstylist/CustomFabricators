import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Phone, Mail, FileText, Send, Building, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../../data/mockData';

interface QuoteBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialConfig?: {
    productName: string;
    productCategory: string;
    width: number;
    height: number;
    finish: string;
    alloy: string;
  } | null;
}

export const QuoteBuilderModal: React.FC<QuoteBuilderModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialConfig,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectLocation: '',
    selectedProduct: initialProduct || PRODUCTS[0].name,
    projectType: 'Commercial Luxury',
    timeline: '3-6 Months',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, selectedProduct: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Quote Request Transmitted
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Lead Engineer Angela Fajardo, P.E. and our Lake Worth estimating team will review your specifications and follow up within 24 business hours.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-metal-brand px-6 py-2.5 rounded-xl text-xs font-bold text-white shadow-md"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-1.5 pr-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                  Lake Worth Shop • Engineering RFQ
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-slate-900">
                Request P.E. Stamped Estimate
              </h2>
              <p className="text-xs text-slate-600">
                Direct quote from our Lake Worth facility. Stamped structural engineering drawings and municipal permitting calculations available.
              </p>
            </div>

            {/* Attached CAD config summary if passed */}
            {initialConfig && (
              <div className="bg-sky-50 border border-sky-200 p-3.5 rounded-xl text-xs font-mono space-y-1 text-slate-800">
                <div className="font-bold text-sky-900 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-sky-600" />
                  <span>CAD SPECIFICATION ATTACHED:</span>
                </div>
                <div className="text-[11px] text-slate-600">
                  {initialConfig.productName} • {initialConfig.width}" W x {initialConfig.height}" H • {initialConfig.finish} ({initialConfig.alloy})
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Richard Henderson"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">
                    Company / Firm (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Coastal Architecture LLC"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="architect@firm.com"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(561) 555-0199"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">
                    Product System
                  </label>
                  <select
                    value={formData.selectedProduct}
                    onChange={(e) => setFormData({ ...formData, selectedProduct: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:border-sky-500"
                  >
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                    <option value="Custom Architectural Package">Custom Architectural Package</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 block">
                    Project Location / Florida County *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Palm Beach / Palm Beach County"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-700 block">
                  Project Notes & Dimensional Details
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Provide approximate opening dimensions, architectural elevations, or specific Florida Building Code requirements..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="text-xs font-mono font-bold text-slate-600 hover:text-sky-700 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call Direct: {COMPANY_INFO.phone}</span>
                </a>

                <button
                  type="submit"
                  className="btn-metal-brand px-6 py-3 rounded-xl text-xs font-bold text-white flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit RFQ to Estimating</span>
                </button>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
