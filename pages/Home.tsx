
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Page, Service } from '../types';
import { ArrowRight, CheckCircle, Award, Users, Globe, ZoomIn } from 'lucide-react';

interface HomeProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

// --- CONSTANTS & DATA ---

const SCROLL_IMAGES = [
  'https://i.imgur.com/CzPNg3d.jpeg',
  'https://i.imgur.com/ZZ38mcw.jpeg',
  'https://i.imgur.com/CZQu5sM.jpeg',
  'https://i.imgur.com/lBlvGSZ.jpeg',
  'https://i.imgur.com/NFBT5CW.jpeg',
  'https://i.imgur.com/7KWWM9h.jpeg',
  'https://i.imgur.com/bVuWh08.jpeg',
  'https://i.imgur.com/5EheDic.jpeg',
  'https://i.imgur.com/ENAIe6r.jpeg'
];

// --- SUB-COMPONENT: SERVICE CARD ---
const ServiceCard: React.FC<{ service: Service; openLightbox: (index: number, images: string[]) => void }> = ({ service, openLightbox }) => {
  const navigate = useNavigate();
  // Defensive coding: Ensure features is always an array
  const features = service.detailedFeatures || [];
  const hasReelFeatures = features.length > 0;
  
  const [featIndex, setFeatIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  // Feature Rotation Logic - Optimized dependencies
  useEffect(() => {
    if (!hasReelFeatures) return;
    const interval = setInterval(() => {
      setFeatIndex((prev) => (prev + 1) % features.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [hasReelFeatures, features.length]);

  // Image Rotation Logic - Optimized dependencies (using ID instead of array ref)
  useEffect(() => {
    const imageCount = service.images?.length ?? 0;
    if (imageCount === 0) return;
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % imageCount);
    }, 3500);
    return () => clearInterval(interval);
  }, [service.id]);

  const handleNavigate = () => {
    if (service.id === '1') navigate('/servicios/gestion-ani');
    else if (service.id === '3') navigate('/servicios/ingenieria-especializada'); 
    else if (service.id === '4') navigate('/servicios/infraestructura-hospitalaria'); 
    else if (service.id === '5') navigate('/servicios/propiedad-horizontal');
    else if (service.id === '6') navigate('/servicios/fuel-shield');
    else if (service.id === '2') navigate('/servicios/consultoria-tecnica'); 
    else navigate('/servicios');
  };

  const currentBgImage = service.images && service.images.length > 0 ? service.images[bgIndex] : service.image;
  const isFuelShield = service.id === '6';
  const accentColorClass = isFuelShield ? 'text-orange-600 dark:text-orange-400' : 'text-primary dark:text-blue-400';
  const borderColorClass = isFuelShield ? 'border-orange-500/20' : 'border-primary/10 dark:border-blue-500/20';
  const btnColorClass = isFuelShield ? 'bg-orange-600 hover:bg-orange-700' : 'bg-primary dark:bg-blue-600 hover:bg-secondary dark:hover:bg-blue-700';

  // Render for cards with detailed features (Reel effect)
  if (hasReelFeatures) {
    // Fallback if index gets out of sync or array is empty
    const currentFeature = features[featIndex] || features[0] || { title: service.title, desc: service.description };
    
    return (
      <div className={`bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-visible group hover:shadow-2xl border-2 ${borderColorClass} flex flex-col`}>
        {/* Image Header - Reduced height to h-56 */}
        <div 
          className="h-56 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-t-xl"
          onClick={() => openLightbox(bgIndex, service.images || [service.image])}
        >
          <img 
            src={currentBgImage} 
            alt={service.title}
            className={`w-full h-full ${isFuelShield ? 'object-contain bg-gray-900' : 'object-cover'}`}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-colors duration-300"></div>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
          </div>
          {/* Indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
             {service.images?.map((_, idx) => (
               <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === bgIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
             ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col flex-grow">
           <div className="flex items-center gap-2 mb-3">
             <span className={`material-icons ${accentColorClass}`}>{service.icon || 'layers'}</span>
             <span className={`text-xs font-bold ${accentColorClass} tracking-widest uppercase`}>{service.category}</span>
           </div>
           
           <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
             {service.title}
           </h3>
           
           {/* Text Box */}
           <div className="flex-grow flex flex-col mb-4">
             <div className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 ${isFuelShield ? 'border-orange-500' : 'border-primary dark:border-blue-500'}`}>
                <div>
                  <h4 className={`${isFuelShield ? 'text-orange-700 dark:text-orange-400' : 'text-primary dark:text-blue-400'} font-bold text-sm uppercase mb-2`}>
                     {currentFeature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {currentFeature.desc}
                  </p>
                </div>
             </div>
             {/* Text Progress Bar */}
             <div className="flex gap-1 mt-2 justify-end">
                {features.map((_, i) => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === featIndex ? (isFuelShield ? 'w-4 bg-orange-600' : 'w-4 bg-primary dark:bg-blue-500') : 'w-1 bg-gray-200 dark:bg-gray-600'}`} />
                ))}
             </div>
           </div>

           <button 
             onClick={handleNavigate}
             className={`w-full py-3 ${btnColorClass} text-white rounded-lg font-bold text-sm uppercase tracking-wide shadow-md transition-colors duration-300`}
           >
             VER DETALLES COMPLETOS
           </button>
        </div>
      </div>
    );
  }

  // Standard Render (Fallback for services without detailed features)
  return (
    <div className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl border border-gray-100 dark:border-gray-800 h-full flex flex-col">
      <div className="h-48 overflow-hidden relative cursor-pointer shrink-0" onClick={() => openLightbox(0, [service.image])}>
         <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
         <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
         />
         <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="text-white w-5 h-5 drop-shadow-md" />
         </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'verified'}</span>
          <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
          {service.description}
        </p>
        <button 
           onClick={handleNavigate}
           className="w-full py-3 border border-primary dark:border-blue-500 text-primary dark:text-blue-400 rounded-lg font-bold hover:bg-primary dark:hover:bg-blue-600 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide"
        >
          VER DETALLES COMPLETOS
        </button>
      </div>
    </div>
  );
};

// --- MAIN HOME COMPONENT ---

const Home: React.FC<HomeProps> = ({ openLightbox }) => {
  const navigate = useNavigate();

  return (
    <div>
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px] overflow-hidden group cursor-pointer" onClick={() => openLightbox(0, ["https://i.imgur.com/gy1Wtmv.jpeg"])}>
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
        <img
          src="https://i.imgur.com/gy1Wtmv.jpeg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=1600";
            e.currentTarget.onerror = null;
          }}
          alt="Ingenieros supervisando obra de construcción de estación de servicio KONTE"
          className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="max-w-3xl text-left">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                Líderes en Infraestructura y EDS
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Consultoría Especializada y Construcción de Estaciones de Servicio
              </h1>
              <p className="text-xl text-gray-100 mb-8 max-w-2xl font-light">
                Expertos en normativa (Res. 1361/716), diseño estructural y ejecución de proyectos de alto impacto a nivel nacional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={() => navigate('/servicios')}
                  className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2 transition-all"
                >
                  NUESTROS SERVICIOS <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigate('/proyectos')}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold flex items-center justify-center transition-all"
                >
                  VER PROYECTOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Stats */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 mb-12">
        <div className="bg-white dark:bg-bg-dark-card rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b-4 border-primary dark:border-blue-500">
          {[
            { icon: Award, label: 'Experiencia', value: '+15 Años' },
            { icon: Users, label: 'Profesionales', value: 'Personal Certificado' },
            { icon: Globe, label: 'Cobertura', value: 'Nivel Nacional' },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full text-primary dark:text-blue-400">
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Strip */}
      <section className="w-full bg-white dark:bg-bg-dark border-b border-gray-100 dark:border-gray-800 py-10 mb-20 overflow-hidden">
        <div className="relative w-full">
            <div className="flex animate-scroll hover:pause">
                {/* Image Set 1 */}
                <div className="flex gap-8 px-4 items-center min-w-max">
                    {SCROLL_IMAGES.map((img, idx) => (
                         <div 
                            key={`s1-${idx}`} 
                            className="relative group/img h-40 w-64 overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer"
                            onClick={() => openLightbox(idx, SCROLL_IMAGES)}
                         >
                             <img 
                               src={img} 
                               alt={`Galería ${idx}`} 
                               className="h-full w-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500" 
                             />
                             <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover/img:opacity-100 transform scale-50 group-hover/img:scale-100 transition-all duration-300 w-8 h-8" />
                             </div>
                         </div>
                    ))}
                </div>
                {/* Image Set 2 (Duplicate for infinity loop) */}
                <div className="flex gap-8 px-4 items-center min-w-max">
                     {SCROLL_IMAGES.map((img, idx) => (
                         <div 
                            key={`s2-${idx}`} 
                            className="relative group/img h-40 w-64 overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer"
                            onClick={() => openLightbox(idx, SCROLL_IMAGES)}
                         >
                             <img 
                               src={img} 
                               alt={`Galería ${idx}`} 
                               className="h-full w-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500" 
                             />
                             <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover/img:opacity-100 transform scale-50 group-hover/img:scale-100 transition-all duration-300 w-8 h-8" />
                             </div>
                         </div>
                    ))}
                </div>
            </div>
        </div>
        <style>{`
            @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-scroll { display: flex; width: max-content; animation: scroll 80s linear infinite; }
            .hover\\:pause:hover { animation-play-state: paused; }
        `}</style>
      </section>

      {/* Services Preview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Servicios de Consultoría y Construcción</h2>
            <div className="h-1 w-20 bg-primary dark:bg-blue-500 rounded-full"></div>
          </div>
          <button 
            onClick={() => navigate('/servicios')}
            className="hidden md:flex items-center text-primary dark:text-blue-400 font-bold hover:text-secondary dark:hover:text-blue-300 transition-colors"
          >
            VER TODOS <ArrowRight className="w-5 h-5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} openLightbox={openLightbox} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover grayscale" alt="Fondo" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir KONTE?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Con años de experiencia en el sector, KONTE se posiciona como su aliado estratégico para navegar la complejidad técnica y regulatoria.
              </p>
              <ul className="space-y-4">
                {['Compromiso con la Calidad ISO', 'Cumplimiento Normativo Riguroso', 'Tecnología de Punta', 'Gestión Transparente'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary dark:text-blue-400 w-6 h-6" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div 
                className="bg-white dark:bg-gray-800 p-2 rounded-lg transform rotate-3 shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"])}
              >
                 <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" className="rounded border border-gray-200 dark:border-gray-700" alt="Obra" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
