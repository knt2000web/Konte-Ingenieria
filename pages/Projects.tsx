
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { MapPin, Calendar, Maximize2, Play, X, ZoomIn } from 'lucide-react';

interface ProjectsProps {
  openLightbox: (index: number, images: string[]) => void;
}

const ProjectCard: React.FC<{ project: Project; openLightbox: (index: number, images: string[]) => void }> = ({ project, openLightbox }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const isDriveVideo = project.video?.includes('drive.google.com');

  // Effect for the Reel behavior on hover
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isHovering && !showVideo && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1200); // Change image every 1.2 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering, showVideo, images.length]);

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
    setShowVideo(false); 
  };

  const handleCardClick = (e: React.MouseEvent) => {
     // If project has slug, navigate to detail page
     if (project.slug && !showVideo) {
         // Defensive: remove any 'proyectos/' prefix that might exist in data or from previous issues
         const cleanSlug = project.slug.replace(/^proyectos\//, '').replace(/\/$/, '');
         navigate(`/proyectos/${cleanSlug}`);
         return;
     }

     // If no slug, just open lightbox
     if (!showVideo) {
        openLightbox(currentImageIndex, images);
     }
  };

  return (
    <div 
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setCurrentImageIndex(0); // Reset to cover image when mouse leaves
      }}
      onClick={handleCardClick}
    >
      <div className="relative h-64 overflow-hidden shrink-0 bg-gray-100">
        
        {showVideo && project.video ? (
          <div className="relative w-full h-full bg-black">
             {/* Close button for video mode */}
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 setShowVideo(false);
               }}
               className="absolute top-2 right-2 z-30 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
               title="Cerrar video"
             >
               <X className="w-4 h-4" />
             </button>

             {isDriveVideo ? (
               <iframe 
                 src={project.video}
                 className="w-full h-full border-0"
                 allow="autoplay; encrypted-media"
                 allowFullScreen
               ></iframe>
             ) : (
               <video 
                 src={project.video} 
                 controls 
                 autoPlay 
                 className="w-full h-full object-cover"
                 onEnded={() => setShowVideo(false)}
               />
             )}
          </div>
        ) : (
          <>
            <img 
              src={images[currentImageIndex]} 
              alt={project.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
            />
            
            {/* Play Button Overlay if video exists */}
            {project.video && (
              <button 
                onClick={(e) => {
                    e.stopPropagation(); // Prevent interfering with hover logic if needed, though mostly visual
                    setShowVideo(true);
                }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
                aria-label="Reproducir Video"
              >
                <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white text-primary">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </button>
            )}
            
            {/* Zoom icon hint or Detail hint */}
            {!project.video && (
               <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/30 p-1.5 rounded-full backdrop-blur-sm">
                      {project.slug ? (
                          <span className="text-white text-xs font-bold px-2">Ver Detalles</span>
                      ) : (
                          <ZoomIn className="w-4 h-4 text-white" />
                      )}
                  </div>
               </div>
            )}

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm z-10">
              {project.status === 'Completed' ? 'Finalizado' : project.status === 'In Progress' ? 'En Ejecución' : 'Planeación'}
            </div>
            
            {project.area && (
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-medium text-white flex items-center gap-1 z-10">
                <Maximize2 className="w-3 h-3" /> {project.area}
              </div>
            )}

            {/* Gradient overlay for better text/dot visibility */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </>
        )}

        {/* Gallery Navigation Dots */}
        {!showVideo && images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20" onClick={(e) => e.stopPropagation()}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => handleDotClick(idx, e)}
                className={`w-2 h-2 rounded-full transition-all shadow-sm ${
                  idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow relative" onClick={(e) => e.stopPropagation()}>
        {/* Loading Bar for Reel Effect */}
        {isHovering && !showVideo && images.length > 1 && (
             <div className="absolute top-0 left-0 h-1 bg-primary animate-[pulse_1.2s_ease-in-out_infinite] w-full" />
        )}

        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{project.type}</div>
        <h3 
            className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight cursor-pointer"
            onClick={handleCardClick}
        >
            {project.title}
        </h3>
        
        {project.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>
        )}
        
        <div className="flex flex-col gap-2 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2">
             <MapPin className="w-4 h-4 text-primary shrink-0" />
             <span className="truncate">{project.location}</span>
          </div>
          <div className="flex items-center gap-2">
             <Calendar className="w-4 h-4 text-primary shrink-0" />
             <span>Año: {project.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ openLightbox }) => {
  return (
    <div className="pt-20 pb-12">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
         <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Portafolio de Proyectos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
              Una muestra de nuestra capacidad técnica y compromiso con la excelencia en consultoría estructural, vulnerabilidad sísmica, estaciones de servicio y construcción.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 max-w-4xl mx-auto text-left">
              <h3 className="text-primary font-bold mb-2 uppercase text-sm tracking-wide">Áreas de Especialización:</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Diseño estructural, digitalización de planos arquitectónicos y estructurales, modelación y presentación fotorrealista en 3D, visitas y asesoría en etapa de construcción. Estudios de vulnerabilidad sísmica (NSR-10) y consultoría integral para estaciones de servicio (Res. 1361/2012 y 716/2015).
              </p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} openLightbox={openLightbox} />
            ))}
         </div>
       </div>
    </div>
  );
};

export default Projects;
