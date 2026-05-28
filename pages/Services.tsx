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
      {/* Navigation Arrows */}
      <button 
        onClick={prev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/90 text-white hover:text-slate-900 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
        title="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button 
        onClick={next} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/90 text-white hover:text-slate-900 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
        title="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Minimal Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/80 w-1.5'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ openLightbox }) => {
  const navigate = useNavigate();

  return (
    <main className="pt-20 pb-12 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Catálogo de Servicios</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">Especialidades <span className="text-primary">Técnicas</span></h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Soluciones integrales de ingeniería y consultoría técnica diseñadas para maximizar el valor, la seguridad y la eficiencia de sus proyectos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900">
        <div className="space-y-16">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-[55%]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-slate-50 dark:bg-slate-800/50 aspect-[4/3] lg:aspect-auto border border-slate-100 dark:border-slate-800 lg:h-[450px]">
                  {service.images && service.images.length > 1 ? (
                    <ServiceImageCarousel images={service.images} title={service.title} openLightbox={openLightbox} />
                  ) : (
                    <div 
                      className="cursor-pointer relative group" 
                      onClick={() => openLightbox(0, [service.image])}
                    >
                      <img src={service.image} alt={`${service.title} - Servicios de KONTE Ingeniería`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors"></div>
                      <div className="absolute top-4 right-4 bg-black/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                        <ZoomIn className="text-white w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-flex items-center bg-blue-50/50 dark:bg-blue-900/20 text-primary dark:text-blue-400 border border-blue-100 dark:border-blue-800/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                    {service.category}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight">{service.title}</h2>
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

                {['1', '5', '6', '7', '8', '9'].includes(service.id) ? (
                  <button 
                    onClick={() => {
                      const paths: Record<string, string> = {
                        '1': '/servicios/gestion-ani',
                        '5': '/servicios/propiedad-horizontal',
                        '6': '/servicios/fuel-shield',
                        '7': '/servicios/tecnologia',
                        '8': '/servicios/structopro',
                        '9': '/servicios/construccion-estaciones-servicio'
                      };
                      navigate(paths[service.id]);
                    }}
                    className="inline-flex w-full md:w-auto px-8 py-3.5 bg-primary dark:bg-blue-600 text-white text-sm font-bold tracking-wide rounded-xl hover:bg-secondary dark:hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 items-center justify-center gap-2 group/cta"
                  >
                    {service.id === '8' ? 'EXPLORAR PLATAFORMA' : 'CONOCER MÁS DETALLES'} 
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button 
                    onClick={() => navigate('/contacto')}
                    className="inline-flex w-full md:w-auto px-8 py-3.5 border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-bold tracking-wide rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all items-center justify-center shadow-sm group/btn"
                  >
                    SOLICITAR COTIZACIÓN
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-2 transition-all" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
