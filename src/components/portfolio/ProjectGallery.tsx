import React, { useState } from 'react';
import { ShieldCheck, MapPin, Eye, X, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../../data/mockData';
import { ProjectPortfolio } from '../../types';

interface ProjectGalleryProps {
  onOpenQuoteModal: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectPortfolio | null>(null);

  const categories = ['All', 'Residential Luxury', 'Structural Steel', 'Commercial & Hospitality', 'HVHZ Shutter Systems', 'Architectural Railings'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-mono font-bold text-sky-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>FLORIDA COASTAL INSTALLATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            <span className="text-metal-lead">Featured Coastal Portfolio</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore our architectural metalwork installed in luxury estates, oceanfront villas, and commercial developments across Palm Beach, Miami-Dade, Broward, and Naples.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'btn-metal-brand text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Photo */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden">
                <img
                  src={project.photoUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 text-xs font-bold text-slate-900 shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-sky-600" />
                    <span>View Engineering Details</span>
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-sky-800 border border-slate-200 shadow-xs">
                  {project.windRating.split(' (')[0]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-sky-700 font-bold font-mono">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-center font-mono">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                      <div className="text-[9px] text-slate-500 uppercase">{m.label}</div>
                      <div className="text-[11px] font-bold text-slate-900 truncate">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-sky-700 uppercase flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>{activeModalProject.location}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                {activeModalProject.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-100">
              <img
                src={activeModalProject.photoUrl}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 text-xs font-mono uppercase mb-1">Project Scope & Narrative</h4>
                <p className="leading-relaxed text-slate-600">{activeModalProject.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs font-mono uppercase mb-1">Engineering & Code Resolution</h4>
                <p className="leading-relaxed text-slate-600 bg-sky-50 p-3.5 rounded-xl border border-sky-200 text-xs font-mono">
                  {activeModalProject.engineeringChallenges}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs font-mono uppercase mb-1.5">Materials & Finishes Specified</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.materialsUsed.map((mat, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-mono font-semibold text-slate-800">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="btn-metal-silver px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800"
              >
                Close View
              </button>

              <button
                onClick={() => {
                  setActiveModalProject(null);
                  onOpenQuoteModal();
                }}
                className="btn-metal-brand px-5 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2"
              >
                <span>Request Estimate for Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
