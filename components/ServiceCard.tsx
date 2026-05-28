import React, { useState, useEffect } from 'react';
import { ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, openLightbox }) => {
  const navigate = useNavigate();
  const [featureIndex, setFeatureIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const features = service.detailedFeatures || [];
  const images = service.images || [service.image];

  useEffect(() => {
    if (features.length <= 1) return;
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentFeature = features.length > 0 ? features[featureIndex] : null;
  const currentBgImage = images[bgImageIndex];

  // Specific styles for StructoPro (id '8')
  const isStructo = service.id === '8';
  
  // Specific badges and CTA for ANI (id '9')
  const isANI = service.id === '9';

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 flex flex-col h-full ${isStructo ? 'border-amber-400/40 hover:border-amber-400/70 bg-[#0a1122]' : 'bg-white dark:bg-gray-800 border-primary/10 dark:border-blue-500/20'}`}>
      {/* Image Carousel Header */}
      <div
        className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
        onClick={() => openLightbox(bgImageIndex, images)}
      >
        <img
          key={currentBgImage}
          src={currentBgImage}
          alt={service.title}
          className="w-full h-full object-cover animate-in fade-in duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
        </div>
        
        {/* StructoPro custom overlay over image */}
        {isStructo && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <img src="/structopro-logo.svg" alt="StructoPro Logo" className="h-16 mb-2 drop-shadow-lg" />
          </div>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === bgImageIndex ? (isStructo ? 'w-6 bg-amber-400' : 'w-6 bg-white') : (isStructo ? 'w-1.5 bg-amber-400/40' : 'w-1.5 bg-white/40')}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className={`material-icons ${isStructo ? 'text-amber-400' : 'text-primary dark:text-blue-400'}`}>{service.icon || 'verified_user'}</span>
          <span className={`text-xs font-bold tracking-widest uppercase ${isStructo ? 'text-amber-400' : 'text-primary dark:text-blue-400'}`}>{service.category}</span>
        </div>
        <h3 className={`text-xl font-bold mb-4 ${isStructo ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {service.title}
        </h3>
        
        {/* Dynamic Content Area */}
        <div className="flex-grow flex flex-col mb-4">
          <div className={`rounded-lg p-4 h-full border-l-4 ${isStructo ? 'bg-amber-400/10 border-amber-400' : 'bg-gray-50 dark:bg-gray-900 border-primary dark:border-blue-500'}`}>
            {currentFeature && (
              <div key={featureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <h4 className={`font-bold text-sm uppercase mb-2 ${isStructo ? 'text-amber-400' : 'text-primary dark:text-blue-400'}`}>
                  {currentFeature.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isStructo ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
                  {currentFeature.desc}
                </p>
              </div>
            )}
            {!currentFeature && (
              <p className={`text-sm leading-relaxed ${isStructo ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}>
                {service.description}
              </p>
            )}
          </div>
          
          {/* Text Progress Indicators */}
          {features.length > 1 && (
            <div className="flex gap-1 mt-2 justify-end">
              {features.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-500 ${i === featureIndex ? (isStructo ? 'w-4 bg-amber-400' : 'w-4 bg-primary dark:bg-blue-500') : (isStructo ? 'w-1 bg-amber-400/20' : 'w-1 bg-gray-200 dark:bg-gray-600')}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ANI specific badges */}
        {isANI && (
          <div className="flex gap-2 mb-4 mt-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full border border-gray-200 dark:border-gray-700">Resolución 1361</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full border border-gray-200 dark:border-gray-700">Resolución 716</span>
          </div>
        )}

        <button
          onClick={() => navigate(isStructo ? '/servicios/structopro' : isANI ? '/servicios/gestion-ani' : '/servicios')}
          className={`w-full py-3 rounded-lg font-bold transition-all text-sm uppercase tracking-wide shadow-md ${isStructo ? 'bg-amber-400 text-slate-900 hover:bg-amber-500' : 'bg-primary dark:bg-blue-600 text-white hover:bg-secondary dark:hover:bg-blue-700'}`}
        >
          {isStructo ? 'Conocer soluciones digitales' : isANI ? 'Conocer experiencia normativa' : 'VER DETALLES COMPLETOS'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
