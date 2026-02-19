import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, MapPin, Calendar, Layout, ZoomIn, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

interface ProjectDetailProps {
  openLightbox: (index: number, images: string[]) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ openLightbox }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Busca el proyecto por el slug de la URL
  const project = PROJECTS.find(p => p.slug === slug);

  // Scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Proyecto no encontrado</h2>
        <button 
          onClick={() => navigate('/proyectos')}
          className="text-primary hover:underline flex items-center justify-center gap-2 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Proyectos
        </button>
      </div>
    );
  }

  // SEO Dinámico
  const pageDescription = project.fullDescription || project.description || '';
  const pageKeywords = project.seoKeywords || `${project.type}, ${project.location}, Construcción, Ingeniería`;
  
  // Mensaje personalizado para WhatsApp
  const waMessage = `Hola KONTE, estoy viendo el proyecto "${project.title}" en su sitio web y me gustaría cotizar un proyecto similar.`;
  const waLink = `https://wa.me/573204468049?text=${encodeURIComponent(waMessage)}`;

  // Imágenes seguras
  const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Meta Tags Dinámicas para Google */}
      <SEO 
        title={`${project.title} | Proyectos KONTE`}
        description={pageDescription.substring(0, 160)}
        keywords={pageKeywords}
        image={project.image}
      />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={project.image} 
          alt={`Fachada de ${project.title}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <button 
            onClick={() => navigate('/proyectos')}
            className="text-white/80 hover:text-white mb-6 flex items-center gap-2 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" /> Volver al Portafolio
          </button>
          
          <span className="bg-primary text-white px-3 py-1 rounded text-sm font-bold tracking-wider w-fit mb-4">
            {project.type.toUpperCase()}
          </span>
          
          {/* H1 Optimizado para SEO */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {project.seoH1 || project.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-gray-200 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {project.location}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {project.year}
            </div>
            {project.area && (
              <div className="flex items-center gap-2">
                <Layout className="w-5 h-5 text-primary" />
                {project.area}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Columna Izquierda: Descripción Técnica */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-primary pl-4">
                Descripción Técnica
              </h2>
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {/* Renderiza la descripción completa con saltos de línea */}
                {(project.fullDescription || project.description || '').split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Visualización de Keywords / Especificaciones */}
            {project.seoKeywords && (
               <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                   <CheckCircle className="w-5 h-5 text-primary" />
                   Especificaciones Clave
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {project.seoKeywords.split(',').map((keyword, idx) => (
                     <span key={idx} className="bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm">
                       {keyword.trim()}
                     </span>
                   ))}
                 </div>
               </div>
            )}
          </div>

          {/* Columna Derecha: Galería */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Layout className="w-5 h-5 text-primary" />
                Galería del Proyecto
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {projectImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-gray-100 dark:bg-gray-700"
                    onClick={() => openLightbox && openLightbox(idx, projectImages)}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} - Vista ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                  </div>
                ))}
              </div>

               <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href={waLink}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full block text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Cotizar Proyecto Similar
                  </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;