
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { MapPin, Calendar, Maximize2, ArrowLeft, ZoomIn, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

interface ProjectDetailProps {
  openLightbox: (index: number, images: string[]) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ openLightbox }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Robust search: handle clean slugs, and potential double-path slugs (e.g. 'proyectos/my-slug')
  const project = PROJECTS.find(p => {
    if (!p.slug || !slug) return false;
    const cleanParam = slug.replace(/^proyectos\//, '').replace(/\/$/, '');
    const cleanProjectSlug = p.slug.replace(/^proyectos\//, '').replace(/\/$/, '');
    return cleanProjectSlug === cleanParam;
  });

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-gray-900">Proyecto no encontrado</h1>
        <p className="text-gray-500 mb-6 max-w-md">
          No pudimos encontrar el proyecto solicitado. Es posible que el enlace esté roto o el proyecto haya sido movido.
        </p>
        <div className="bg-gray-100 p-4 rounded text-xs font-mono text-gray-600 mb-6">
           Diagnostic ID: {slug || 'undefined'}
        </div>
        <button 
          onClick={() => navigate('/proyectos')} 
          className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-secondary transition-colors"
        >
          Volver al Portafolio
        </button>
      </div>
    );
  }

  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white animate-in fade-in duration-500">
      <SEO 
        title={`${project.seoH1 || project.title} - ${project.location}`} 
        description={project.fullDescription ? project.fullDescription.substring(0, 160) : project.description || ''} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
            onClick={() => navigate('/proyectos')}
            className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors font-medium group"
        >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" /> Volver al Portafolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Gallery Section */}
            <div className="space-y-4">
                <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] cursor-pointer group bg-gray-100"
                    onClick={() => openLightbox(0, images)}
                >
                    <img 
                        src={images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-black/40 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                </div>

                {images.length > 1 && (
                    <div className="grid grid-cols-4 gap-4">
                        {images.slice(1, 5).map((img, idx) => (
                            <div 
                                key={idx} 
                                className="relative rounded-lg overflow-hidden h-24 cursor-pointer hover:opacity-90 transition-opacity shadow-sm border border-gray-100"
                                onClick={() => openLightbox(idx + 1, images)}
                            >
                                <img src={img} alt={`${project.title} - vista ${idx + 2}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div>
                <span className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                    {project.type}
                </span>
                
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {project.seoH1 || project.title}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">{project.year}</span>
                    </div>
                    {project.area && (
                        <div className="flex items-center gap-2">
                            <Maximize2 className="w-5 h-5 text-primary" />
                            <span className="font-medium">{project.area}</span>
                        </div>
                    )}
                </div>

                <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Descripción del Proyecto</h3>
                    <p>
                        {project.fullDescription || project.description}
                    </p>
                </div>

                {project.seoKeywords && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 font-bold uppercase mb-2">Etiquetas Técnicas:</p>
                        <div className="flex flex-wrap gap-2">
                            {project.seoKeywords.split(',').map((keyword, i) => (
                                <span key={i} className="bg-white px-2 py-1 rounded border border-gray-200 text-xs text-gray-600">
                                    {keyword.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
