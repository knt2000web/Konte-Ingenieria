
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Page } from '../types';
import { ArrowRight, CheckCircle, Award, Users, Globe, ZoomIn } from 'lucide-react';

interface HomeProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

// Images for the infinite scroll marquee
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

// Sub-services specific data for animation for Service 3
const SPECIALIZED_SUB_SERVICES = [
  {
    title: "Diseño Estructural y Vulnerabilidad",
    desc: "Análisis y diseño sismo-resistente optimizado según norma NSR-10."
  },
  {
    title: "Diseño de Redes Hidrosanitarias",
    desc: "Redes de suministro, desagües y manejo de aguas lluvias optimizados."
  },
  {
    title: "Diseños Eléctricos y de Gas",
    desc: "Redes de media/baja tensión, cableado estructurado y redes de gas natural/GLP."
  },
  {
    title: "Sistemas Contra Incendio (NFPA)",
    desc: "Diseño hidráulico bajo norma NSR-10 (Títulos J y K) y NFPA. Incluye tanques y redes de rociadores."
  },
  {
    title: "Arquitectura y Urbanismo",
    desc: "Diseño funcional y estético adaptado al entorno."
  },
  {
    title: "Modelado BIM y Visualización 3D",
    desc: "Renders fotorrealistas, recorridos virtuales y coordinación de redes para prever conflictos en obra."
  }
];

// Sub-services specific data for animation for Service 1
const ANI_SUB_SERVICES = [
  {
    title: "Permisos de Ocupación de Vía",
    desc: "Gestión ante ANI, INVIAS y Concesionarios para accesos, carriles de aceleración y obras en faja de retiro."
  },
  {
    title: "Licenciamiento Urbanístico",
    desc: "Trámite integral de Licencias de Construcción, Reconocimiento, Demolición y Cerramiento."
  },
  {
    title: "Gestión ante Curadurías",
    desc: "Asesoría técnica y legal para destrabar procesos y asegurar la viabilidad normativa."
  }
];

// Sub-services specific data for animation for Service 4 (Health)
const HEALTH_SUB_SERVICES = [
  {
    title: "Normativa y Habilitación (Res. 3100)",
    desc: "Diseño riguroso cumpliendo estándares de habilitación en salud para garantizar la seguridad del paciente."
  },
  {
    title: "Redes Especializadas",
    desc: "Gases medicinales, aire acondicionado hospitalario y redes eléctricas de soporte vital."
  },
  {
    title: "Arquitectura Humanizada",
    desc: "Espacios diseñados para el bienestar del paciente y la eficiencia del personal médico."
  }
];

// Sub-services specific data for animation for Service 5 (Propiedad Horizontal)
const PH_SUB_SERVICES = [
  {
    title: "Mantenimiento de Fachadas",
    desc: "Limpieza técnica, pintura y restauración de acabados para valorizar la edificación."
  },
  {
    title: "Impermeabilización de Cubiertas",
    desc: "Sistemas técnicos garantizados para techos y terrazas, previniendo filtraciones críticas."
  },
  {
    title: "Obras Civiles en Zonas Comunes",
    desc: "Reparación y modernización de áreas de alto tráfico, parqueaderos y muros perimetrales."
  },
  {
    title: "Paisajismo y Porterías",
    desc: "Diseño de jardines sostenibles y adecuación de accesos seguros y modernos."
  }
];

// Sub-services specific data for animation for Service 2 (Technical & Topography)
const TECHNICAL_SUB_SERVICES = [
  {
    title: "Levantamientos Topográficos",
    desc: "Alta precisión con GPS y Estación Total, curvas de nivel y georreferenciación Magna Sirgas."
  },
  {
    title: "Estudios de Suelos y Geotecnia",
    desc: "Caracterización del terreno y análisis de capacidad portante para cimentaciones seguras."
  },
  {
    title: "Peritajes Técnicos",
    desc: "Ingeniería forense para determinar causas de fallas y patologías en edificaciones."
  },
  {
    title: "Avalúos Comerciales",
    desc: "Valoración técnica certificada de inmuebles urbanos y rurales."
  }
];

// Sub-services specific data for animation for Service 6 (Fuel-Shield)
const FUEL_SHIELD_SUB_SERVICES = [
  {
    title: "Diagnóstico Clear & Bright",
    desc: "Pruebas de campo para detección visual inmediata de partículas y agua libre en el diésel."
  },
  {
    title: "Micro-filtración (2 Micras)",
    desc: "Tecnología de diálisis que elimina contaminantes sólidos microscópicos que dañan inyectores Euro VI."
  },
  {
    title: "Limpieza de Tanques",
    desc: "Remoción de lodos (sludge) y biopelículas del fondo del tanque para prevenir obstrucción de filtros."
  },
  {
    title: "Certificación ISO 4406",
    desc: "Análisis de laboratorio y certificado de limpieza de fluidos para respaldo legal y garantía."
  }
];

const Home: React.FC<HomeProps> = ({ openLightbox }) => {
  const navigate = useNavigate();
  // State for Specialized Engineering (ID 3)
  const [featureIndex, setFeatureIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  // State for ANI Projects (ID 1)
  const [aniFeatureIndex, setAniFeatureIndex] = useState(0);
  const [aniBgImageIndex, setAniBgImageIndex] = useState(0);

  // State for Health Infrastructure (ID 4)
  const [healthFeatureIndex, setHealthFeatureIndex] = useState(0);
  const [healthBgImageIndex, setHealthBgImageIndex] = useState(0);
  
  // State for Propiedad Horizontal (ID 5)
  const [phFeatureIndex, setPhFeatureIndex] = useState(0);
  const [phBgImageIndex, setPhBgImageIndex] = useState(0);

  // State for Technical Studies (ID 2)
  const [techFeatureIndex, setTechFeatureIndex] = useState(0);
  const [techBgImageIndex, setTechBgImageIndex] = useState(0);

  // State for Fuel Shield (ID 6)
  const [fuelFeatureIndex, setFuelFeatureIndex] = useState(0);
  const [fuelBgImageIndex, setFuelBgImageIndex] = useState(0);

  // Find the services to get their image counts
  const specializedService = SERVICES.find(s => s.id === '3');
  const specializedImagesCount = specializedService?.images?.length || 0;

  const aniService = SERVICES.find(s => s.id === '1');
  const aniImagesCount = aniService?.images?.length || 0;

  const healthService = SERVICES.find(s => s.id === '4');
  const healthImagesCount = healthService?.images?.length || 0;
  
  const phService = SERVICES.find(s => s.id === '5');
  const phImagesCount = phService?.images?.length || 0;

  const techService = SERVICES.find(s => s.id === '2');
  const techImagesCount = techService?.images?.length || 0;

  const fuelService = SERVICES.find(s => s.id === '6');
  const fuelImagesCount = fuelService?.images?.length || 0;

  useEffect(() => {
    // --- Service 3 Intervals ---
    const textInterval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % SPECIALIZED_SUB_SERVICES.length);
    }, 4500); 

    let imageInterval: ReturnType<typeof setInterval>;
    if (specializedImagesCount > 0) {
      imageInterval = setInterval(() => {
        setBgImageIndex((prev) => (prev + 1) % specializedImagesCount);
      }, 3500);
    }

    // --- Service 1 Intervals ---
    const aniTextInterval = setInterval(() => {
      setAniFeatureIndex((prev) => (prev + 1) % ANI_SUB_SERVICES.length);
    }, 4500);

    let aniImageInterval: ReturnType<typeof setInterval>;
    if (aniImagesCount > 0) {
      aniImageInterval = setInterval(() => {
        setAniBgImageIndex((prev) => (prev + 1) % aniImagesCount);
      }, 3500);
    }

    // --- Service 4 Intervals ---
    const healthTextInterval = setInterval(() => {
      setHealthFeatureIndex((prev) => (prev + 1) % HEALTH_SUB_SERVICES.length);
    }, 4500);

    let healthImageInterval: ReturnType<typeof setInterval>;
    if (healthImagesCount > 0) {
      healthImageInterval = setInterval(() => {
        setHealthBgImageIndex((prev) => (prev + 1) % healthImagesCount);
      }, 3500);
    }
    
    // --- Service 5 (PH) Intervals ---
    const phTextInterval = setInterval(() => {
      setPhFeatureIndex((prev) => (prev + 1) % PH_SUB_SERVICES.length);
    }, 4500);

    let phImageInterval: ReturnType<typeof setInterval>;
    if (phImagesCount > 0) {
      phImageInterval = setInterval(() => {
        setPhBgImageIndex((prev) => (prev + 1) % phImagesCount);
      }, 3500);
    }

    // --- Service 2 Intervals ---
    const techTextInterval = setInterval(() => {
      setTechFeatureIndex((prev) => (prev + 1) % TECHNICAL_SUB_SERVICES.length);
    }, 4500);

    let techImageInterval: ReturnType<typeof setInterval>;
    if (techImagesCount > 0) {
      techImageInterval = setInterval(() => {
        setTechBgImageIndex((prev) => (prev + 1) % techImagesCount);
      }, 3500);
    }

    // --- Service 6 (Fuel) Intervals ---
    const fuelTextInterval = setInterval(() => {
      setFuelFeatureIndex((prev) => (prev + 1) % FUEL_SHIELD_SUB_SERVICES.length);
    }, 4500);

    let fuelImageInterval: ReturnType<typeof setInterval>;
    if (fuelImagesCount > 0) {
      fuelImageInterval = setInterval(() => {
        setFuelBgImageIndex((prev) => (prev + 1) % fuelImagesCount);
      }, 3500);
    }

    return () => {
      clearInterval(textInterval);
      if (imageInterval) clearInterval(imageInterval);
      clearInterval(aniTextInterval);
      if (aniImageInterval) clearInterval(aniImageInterval);
      clearInterval(healthTextInterval);
      if (healthImageInterval) clearInterval(healthImageInterval);
      clearInterval(phTextInterval);
      if (phImageInterval) clearInterval(phImageInterval);
      clearInterval(techTextInterval);
      if (techImageInterval) clearInterval(techImageInterval);
      clearInterval(fuelTextInterval);
      if (fuelImageInterval) clearInterval(fuelImageInterval);
    };
  }, [specializedImagesCount, aniImagesCount, healthImagesCount, phImagesCount, techImagesCount, fuelImagesCount]);

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="relative w-full h-[600px] overflow-hidden group cursor-pointer" onClick={() => openLightbox(0, ["https://i.imgur.com/gy1Wtmv.jpeg"])}>
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors" />
        <img
          src="https://i.imgur.com/gy1Wtmv.jpeg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=1600";
            e.currentTarget.onerror = null; // Prevent infinite loop
          }}
          alt="Ingenieros supervisando obra de construcción de estación de servicio KONTE"
          className="w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
           <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 text-left">
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
                  className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                >
                  NUESTROS SERVICIOS <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => navigate('/proyectos')}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold transition-all flex items-center justify-center"
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

      {/* Moving Image Gallery Strip - Interactive */}
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
                               alt={`Galería de proyecto de construcción y obra civil ${idx}`} 
                               className="h-full w-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500" 
                             />
                             <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover/img:opacity-100 transform scale-50 group-hover/img:scale-100 transition-all duration-300 w-8 h-8 drop-shadow-lg" />
                             </div>
                         </div>
                    ))}
                </div>
                {/* Image Set 2 (Duplicate for infinity) */}
                <div className="flex gap-8 px-4 items-center min-w-max">
                     {SCROLL_IMAGES.map((img, idx) => (
                         <div 
                            key={`s2-${idx}`} 
                            className="relative group/img h-40 w-64 overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer"
                            onClick={() => openLightbox(idx, SCROLL_IMAGES)}
                         >
                             <img 
                               src={img} 
                               alt={`Galería de proyecto de construcción y obra civil ${idx}`} 
                               className="h-full w-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500" 
                             />
                             <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover/img:opacity-100 transform scale-50 group-hover/img:scale-100 transition-all duration-300 w-8 h-8 drop-shadow-lg" />
                             </div>
                         </div>
                    ))}
                </div>
            </div>
        </div>
        
        <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll {
                display: flex;
                width: max-content;
                animation: scroll 80s linear infinite; /* Slower animation for photos */
            }
            .hover\\:pause:hover {
                animation-play-state: paused;
            }
        `}</style>
      </section>

      {/* Services Preview */}
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
          {SERVICES.map((service) => {
            // Logic for Service 3 (Ingeniería Especializada) - REEL CARD
            if (service.id === '3') {
              const currentFeature = SPECIALIZED_SUB_SERVICES[featureIndex];
              const currentBgImage = service.images && service.images.length > 0 
                ? service.images[bgImageIndex] 
                : service.image;

              return (
                <div key={service.id} className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                   {/* Image Carousel Header */}
                   <div 
                      className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                      onClick={() => openLightbox(bgImageIndex, service.images || [service.image])}
                   >
                     <img 
                       key={currentBgImage} // Key forces re-render for animation
                       src={currentBgImage} 
                       alt={`Ingeniería especializada: ${service.title}`}
                       className="w-full h-full object-cover animate-in fade-in duration-700"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
                     </div>
                     
                     {/* Image Indicators */}
                     <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
                        {service.images?.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === bgImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} 
                          />
                        ))}
                     </div>
                   </div>
                   
                   <div className="relative p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'layers'}</span>
                        <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Dynamic Content Area */}
                      <div className="flex-grow flex flex-col mb-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
                            <div key={featureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                              <h4 className="text-primary dark:text-blue-400 font-bold text-sm uppercase mb-2">
                                 {currentFeature.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {currentFeature.desc}
                              </p>
                            </div>
                        </div>
                        {/* Text Progress Indicators */}
                        <div className="flex gap-1 mt-2 justify-end">
                          {SPECIALIZED_SUB_SERVICES.map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1 rounded-full transition-all duration-500 ${i === featureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate('/servicios/ingenieria-especializada')}
                        className="w-full py-3 bg-primary dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-md"
                      >
                        VER DETALLES COMPLETOS
                      </button>
                   </div>
                </div>
              );
            }

            // Logic for Service 1 (ANI) - REEL CARD
            if (service.id === '1') {
              const currentFeature = ANI_SUB_SERVICES[aniFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0 
                ? service.images[aniBgImageIndex] 
                : service.image;

              return (
                <div key={service.id} className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                   {/* Image Carousel Header */}
                   <div 
                      className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                      onClick={() => openLightbox(aniBgImageIndex, service.images || [service.image])}
                   >
                     <img 
                       key={currentBgImage} 
                       src={currentBgImage} 
                       alt={`Gestión normativa ANI: ${service.title}`}
                       className="w-full h-full object-cover animate-in fade-in duration-700" 
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
                     </div>
                     
                     {/* Image Indicators */}
                     <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
                        {service.images?.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === aniBgImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} 
                          />
                        ))}
                     </div>
                   </div>
                   
                   <div className="relative p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'verified_user'}</span>
                        <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Dynamic Content Area */}
                      <div className="flex-grow flex flex-col mb-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
                            <div key={aniFeatureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                              <h4 className="text-primary dark:text-blue-400 font-bold text-sm uppercase mb-2">
                                 {currentFeature.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {currentFeature.desc}
                              </p>
                            </div>
                        </div>
                        {/* Text Progress Indicators */}
                        <div className="flex gap-1 mt-2 justify-end">
                          {ANI_SUB_SERVICES.map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1 rounded-full transition-all duration-500 ${i === aniFeatureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate('/servicios/gestion-ani')}
                        className="w-full py-3 bg-primary dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-md"
                      >
                        VER DETALLES COMPLETOS
                      </button>
                   </div>
                </div>
              );
            }
            
            // Logic for Service 5 (Propiedad Horizontal) - REEL CARD
            if (service.id === '5') {
              const currentFeature = PH_SUB_SERVICES[phFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0 
                ? service.images[phBgImageIndex] 
                : service.image;

              return (
                <div key={service.id} className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                   {/* Image Carousel Header */}
                   <div 
                      className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                      onClick={() => openLightbox(phBgImageIndex, service.images || [service.image])}
                   >
                     <img 
                       key={currentBgImage} 
                       src={currentBgImage} 
                       alt={`Mantenimiento de propiedad horizontal: ${service.title}`}
                       className="w-full h-full object-cover animate-in fade-in duration-700" 
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
                     </div>
                     
                     {/* Image Indicators */}
                     <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
                        {service.images?.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === phBgImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} 
                          />
                        ))}
                     </div>
                   </div>
                   
                   <div className="relative p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'apartment'}</span>
                        <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Dynamic Content Area */}
                      <div className="flex-grow flex flex-col mb-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
                            <div key={phFeatureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                              <h4 className="text-primary dark:text-blue-400 font-bold text-sm uppercase mb-2">
                                 {currentFeature.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {currentFeature.desc}
                              </p>
                            </div>
                        </div>
                        {/* Text Progress Indicators */}
                        <div className="flex gap-1 mt-2 justify-end">
                          {PH_SUB_SERVICES.map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1 rounded-full transition-all duration-500 ${i === phFeatureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate('/servicios/propiedad-horizontal')}
                        className="w-full py-3 bg-primary dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-md"
                      >
                        VER DETALLES COMPLETOS
                      </button>
                   </div>
                </div>
              );
            }

            // Logic for Service 4 (Health) - REEL CARD
            if (service.id === '4') {
              const currentFeature = HEALTH_SUB_SERVICES[healthFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0 
                ? service.images[healthBgImageIndex] 
                : service.image;

              return (
                <div key={service.id} className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                   {/* Image Carousel Header */}
                   <div 
                      className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                      onClick={() => openLightbox(healthBgImageIndex, service.images || [service.image])}
                   >
                     <img 
                       key={currentBgImage} 
                       src={currentBgImage} 
                       alt={`Infraestructura hospitalaria y clínica: ${service.title}`}
                       className="w-full h-full object-cover animate-in fade-in duration-700"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
                     </div>
                     
                     {/* Image Indicators */}
                     <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
                        {service.images?.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === healthBgImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} 
                          />
                        ))}
                     </div>
                   </div>
                   
                   <div className="relative p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'local_hospital'}</span>
                        <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Dynamic Content Area */}
                      <div className="flex-grow flex flex-col mb-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
                            <div key={healthFeatureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                              <h4 className="text-primary dark:text-blue-400 font-bold text-sm uppercase mb-2">
                                 {currentFeature.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {currentFeature.desc}
                              </p>
                            </div>
                        </div>
                        {/* Text Progress Indicators */}
                        <div className="flex gap-1 mt-2 justify-end">
                          {HEALTH_SUB_SERVICES.map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1 rounded-full transition-all duration-500 ${i === healthFeatureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate('/servicios/infraestructura-hospitalaria')}
                        className="w-full py-3 bg-primary dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-md"
                      >
                        VER DETALLES COMPLETOS
                      </button>
                   </div>
                </div>
              );
            }

            // Logic for Service 2 (Technical & Topography) - REEL CARD
            if (service.id === '2') {
              const currentFeature = TECHNICAL_SUB_SERVICES[techFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0 
                ? service.images[techBgImageIndex] 
                : service.image;

              return (
                <div key={service.id} className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                   {/* Image Carousel Header */}
                   <div 
                      className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                      onClick={() => openLightbox(techBgImageIndex, service.images || [service.image])}
                   >
                     <img 
                       key={currentBgImage} 
                       src={currentBgImage} 
                       alt={`Estudios técnicos y topográficos: ${service.title}`}
                       className="w-full h-full object-cover animate-in fade-in duration-700" 
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
                     </div>
                     
                     {/* Image Indicators: SWITCHED TO PROGRESS BAR due to large number of images */}
                     <div className="absolute bottom-3 left-0 right-0 z-10 px-6 pointer-events-none">
                        <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden backdrop-blur-sm">
                           <div 
                              className="h-full bg-white transition-all duration-500 ease-out shadow-sm"
                              style={{ width: `${((techBgImageIndex + 1) / (service.images?.length || 1)) * 100}%` }}
                           />
                        </div>
                     </div>
                   </div>
                   
                   <div className="relative p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'architecture'}</span>
                        <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Dynamic Content Area */}
                      <div className="flex-grow flex flex-col mb-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
                            <div key={techFeatureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                              <h4 className="text-primary dark:text-blue-400 font-bold text-sm uppercase mb-2">
                                 {currentFeature.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {currentFeature.desc}
                              </p>
                            </div>
                        </div>
                        {/* Text Progress Indicators */}
                        <div className="flex gap-1 mt-2 justify-end">
                          {TECHNICAL_SUB_SERVICES.map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1 rounded-full transition-all duration-500 ${i === techFeatureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate('/servicios/consultoria-tecnica')}
                        className="w-full py-3 bg-primary dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-md"
                      >
                        VER DETALLES COMPLETOS
                      </button>
                   </div>
                </div>
              );
            }

            // Logic for Service 6 (Fuel-Shield) - REEL CARD
            if (service.id === '6') {
              const currentFeature = FUEL_SHIELD_SUB_SERVICES[fuelFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0 
                ? service.images[fuelBgImageIndex] 
                : service.image;

              return (
                <div key={service.id} className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-orange-500/20 dark:border-orange-500/20 flex flex-col h-full">
                   {/* Image Carousel Header */}
                   <div 
                      className="h-64 relative overflow-hidden bg-gray-900 cursor-pointer"
                      onClick={() => openLightbox(fuelBgImageIndex, service.images || [service.image])}
                   >
                     <img 
                       key={currentBgImage} 
                       src={currentBgImage} 
                       alt={`Filtración diésel y fuel-shield: ${service.title}`}
                       className="w-full h-full object-contain animate-in fade-in duration-700" 
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/60 transition-all"></div>
                     <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
                     </div>
                     
                     {/* Image Indicators */}
                     <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
                        {service.images?.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === fuelBgImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} 
                          />
                        ))}
                     </div>
                   </div>
                   
                   <div className="relative p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-icons text-orange-600 dark:text-orange-400">{service.icon || 'water_drop'}</span>
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-400 tracking-widest uppercase">{service.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      
                      {/* Dynamic Content Area */}
                      <div className="flex-grow flex flex-col mb-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 dark:border-orange-500 h-full">
                            <div key={fuelFeatureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                              <h4 className="text-orange-700 dark:text-orange-400 font-bold text-sm uppercase mb-2">
                                 {currentFeature.title}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                {currentFeature.desc}
                              </p>
                            </div>
                        </div>
                        {/* Text Progress Indicators */}
                        <div className="flex gap-1 mt-2 justify-end">
                          {FUEL_SHIELD_SUB_SERVICES.map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-1 rounded-full transition-all duration-500 ${i === fuelFeatureIndex ? 'w-4 bg-orange-600 dark:bg-orange-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => navigate('/servicios/fuel-shield')}
                        className="w-full py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition-all text-sm uppercase tracking-wide shadow-md"
                      >
                        VER DETALLES COMPLETOS
                      </button>
                   </div>
                </div>
              );
            }

            // Standard Card Render (For other services)
            return (
              <div key={service.id} className="bg-white dark:bg-bg-dark-card rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                <div 
                  className="h-48 overflow-hidden relative cursor-pointer"
                  onClick={() => openLightbox(0, [service.image])}
                >
                   <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                   <img 
                      src={service.image} 
                      alt={`Servicio de ${service.title} - ${service.category}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="text-white w-5 h-5 drop-shadow-md" />
                   </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'verified'}</span>
                    <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors min-h-[3.5rem]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <button 
                     onClick={() => {
                        // Logic for redirect if applicable, otherwise services page
                        if (service.id === '6') navigate('/servicios/fuel-shield');
                        else navigate('/servicios');
                     }}
                     className="w-full py-3 border border-primary dark:border-blue-500 text-primary dark:text-blue-400 rounded-lg font-bold hover:bg-primary dark:hover:bg-blue-600 hover:text-white transition-all text-sm uppercase tracking-wide"
                  >
                    VER DETALLES COMPLETOS
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover grayscale" alt="Fondo construcción infraestructura" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir KONTE?</h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Con años de experiencia en el sector, KONTE se posiciona como su aliado estratégico para navegar la complejidad técnica y regulatoria de los proyectos de construcción modernos.
              </p>
              <ul className="space-y-4">
                {[
                  'Compromiso con la Calidad ISO',
                  'Cumplimiento Normativo Riguroso',
                  'Tecnología de Punta en Análisis',
                  'Gestión Transparente de Proyectos'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary dark:text-blue-400 w-6 h-6" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div 
                className="bg-white dark:bg-gray-800 p-2 rounded-lg transform rotate-3 shadow-2xl cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"])}
              >
                 <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800" className="rounded border border-gray-200 dark:border-gray-700" alt="Sitio de construcción de obra civil" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ZoomIn className="text-white w-12 h-12 drop-shadow-xl" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
