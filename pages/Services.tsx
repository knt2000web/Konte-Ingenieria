import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, ArrowRight, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceImageCarousel = ({ images, title, openLightbox }: { images: string[], title: string, openLightbox: (index: number, images: string[]) => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div 
      className="relative w-full h-80 md:h-[400px] group cursor-pointer"
      onClick={() => openLightbox(currentIndex, images)}
    >
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} - KONTE Ingeniería - Imagen ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors pointer-events-none"></div>
      
      {/* Zoom Indicator */}
      <div className="absolute top-4 right-4 bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-20">
        <ZoomIn className="text-white w-5 h-5" />
      </div>

      {/* Controls */}
      <button 
        onClick={prev} 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={next} 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-white scale-125 w-4' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ openLightbox }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 pb-12">
      <div className="bg-primary py-20 text-white mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios Profesionales de Ingeniería</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Soluciones integrales de ingeniería y consultoría técnica diseñadas para maximizar el valor, la seguridad y la eficiencia de sus proyectos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gray-100 dark:bg-gray-800">
                  {service.images && service.images.length > 1 ? (
                    <ServiceImageCarousel images={service.images} title={service.title} openLightbox={openLightbox} />
                  ) : (
                    <div 
                      className="cursor-pointer relative group" 
                      onClick={() => openLightbox(0, [service.image])}
                    >
                      <img src={service.image} alt={`${service.title} - Servicios de KONTE Ingeniería`} className="w-full h-80 md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors"></div>
                      <div className="absolute top-4 right-4 bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                        <ZoomIn className="text-white w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">{service.category}</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm mb-8">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">Incluye:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full p-1">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.id === '1' ? (
                  <button 
                    onClick={() => navigate('/servicios/gestion-ani')}
                    className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    VER DETALLES COMPLETOS <ArrowRight className="w-5 h-5" />
                  </button>
                ) : service.id === '5' ? (
                  <button 
                    onClick={() => navigate('/servicios/propiedad-horizontal')}
                    className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                  >
                    VER DETALLES COMPLETOS <ArrowRight className="w-5 h-5" />
                  </button>
                ) : service.id === '6' ? (
                  <button 
                    onClick={() => navigate('/servicios/fuel-shield')}
                    className="w-full md:w-auto px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                  >
                    VER DETALLES COMPLETOS <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button 
                    onClick={() => navigate('/contacto')}
                    className="w-full md:w-auto px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors shadow-sm"
                  >
                    SOLICITAR COTIZACIÓN
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
