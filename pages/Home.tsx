import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle, Award, Users, Globe, ZoomIn, Calculator, FileText, Box, Ruler, BarChart3, Layers, TreePine, Zap, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setPage?: any; // Deprecated
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

// Sub-services labels for ALT text
const SCROLL_LABELS = [
  'Consultoría en Duitama',
  'Construcción de Estación de Servicio Boyacá',
  'Diseño Estructural Ingeniería',
  'Gestión Normativa ANI Colombia',
  'Infraestructura Clínica Sogamoso',
  'Mantenimiento Propiedad Horizontal',
  'Limpieza de Tanques Diésel',
  'Topografía de Precisión',
  'Desarrollo Web para Ingenierías'
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
    desc: "Tecnología de diálisis de combustible que elimina contaminantes sólidos microscópicos que dañan inyectores Euro VI."
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

// Sub-services specific data for Service 7 (Tecnología)
const TECH_SUB_SERVICES = [
  {
    title: "Desarrollo Web y Aplicaciones",
    desc: "Portales corporativos, aplicaciones web y plataformas digitales a medida para su empresa."
  },
  {
    title: "Automatización de Procesos",
    desc: "Digitalización y automatización de flujos de trabajo para aumentar la eficiencia operacional."
  },
  {
    title: "Inteligencia Artificial",
    desc: "Implementación de soluciones de IA para optimizar operaciones y toma de decisiones empresariales."
  },
  {
    title: "Integración de Sistemas",
    desc: "Conexión e integración de plataformas y sistemas empresariales existentes."
  }
];

// Sub-services specific data for Service 8 (StructoPro)
const STRUCTOPRO_SUB_SERVICES = [
  {
    title: "Cimentaciones y Contención",
    desc: "Zapatas aisladas, muros en voladizo (KonteWall) y cálculo de capacidad portante."
  },
  {
    title: "Vigas, Columnas y Escaleras",
    desc: "Diseño flexión/cortante de secciones rectangulares, circulares y diagramas de interacción P-M."
  },
  {
    title: "Diseño Sísmico",
    desc: "Predimensionamiento, cálculo de irregularidades y espectros de diseño elástico."
  },
  {
    title: "Mampostería y Madera",
    desc: "Verificación de muros confinados y sistemas constructivos en madera (NTC)."
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
  
  // State for Tecnología Digital (ID 7)
  const [techDigFeatureIndex, setTechDigFeatureIndex] = useState(0);
  const [techDigBgImageIndex, setTechDigBgImageIndex] = useState(0);

  // State for StructoPro (ID 8)
  const [structoFeatureIndex, setStructoFeatureIndex] = useState(0);
  const [structoBgImageIndex, setStructoBgImageIndex] = useState(0);

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

  const techDigService = SERVICES.find(s => s.id === '7');
  const techDigImagesCount = techDigService?.images?.length || 0;

  const structoService = SERVICES.find(s => s.id === '8');
  const structoImagesCount = structoService?.images?.length || 0;

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
    
    // --- Service 7 (Tecnología Digital) Intervals ---
    const techDigTextInterval = setInterval(() => {
      setTechDigFeatureIndex((prev) => (prev + 1) % TECH_SUB_SERVICES.length);
    }, 4500);

    let techDigImageInterval: ReturnType<typeof setInterval>;
    if (techDigImagesCount > 0) {
      techDigImageInterval = setInterval(() => {
        setTechDigBgImageIndex((prev) => (prev + 1) % techDigImagesCount);
      }, 3500);
    }

    // --- Service 8 (StructoPro) Intervals ---
    const structoTextInterval = setInterval(() => {
      setStructoFeatureIndex((prev) => (prev + 1) % STRUCTOPRO_SUB_SERVICES.length);
    }, 4500);

    let structoImageInterval: ReturnType<typeof setInterval>;
    if (structoImagesCount > 0) {
      structoImageInterval = setInterval(() => {
        setStructoBgImageIndex((prev) => (prev + 1) % structoImagesCount);
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
      clearInterval(techDigTextInterval);
      if (techDigImageInterval) clearInterval(techDigImageInterval);
      clearInterval(structoTextInterval);
      if (structoImageInterval) clearInterval(structoImageInterval);
    };
  }, [specializedImagesCount, aniImagesCount, healthImagesCount, phImagesCount, techImagesCount, fuelImagesCount, techDigImagesCount, structoImagesCount]);

  return (
    
    <div className="animate-in fade-in duration-500 bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Hero Section */}
      <div className="relative w-full overflow-hidden group cursor-pointer" onClick={() => openLightbox(0, ["https://i.imgur.com/gy1Wtmv.jpeg"])}>
        <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors" />
        <img
          src="https://i.imgur.com/gy1Wtmv.jpeg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=1600";
            e.currentTarget.onerror = null;
          }}
          alt="Ingeniería civil y construcción de estaciones de servicio en Duitama, Boyacá"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <div className="relative z-20 flex flex-col justify-center pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 min-h-[90vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 text-left">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-md">
                Ingeniería estructural &bull; Licencias de construcción &bull; NSR-10 &bull; Duitama, Boyacá y Colombia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Licencias de construcción y consultoría estructural en Colombia
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl font-light leading-relaxed">
                Tramitamos licencias de construcción, reconocimiento, ampliación, modificación y demolición desde Duitama para proyectos en Boyacá, Casanare, Cundinamarca, Tolima y el resto del país, con diseño estructural NSR-10, memorias de cálculo, coordinación con arquitectura y acompañamiento completo ante curaduría urbana.
              </p>
              
              <ul className="text-white/90 space-y-3 mb-8 md:mb-12 text-sm md:text-base font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Más de 26 años diseñando estructuras y gestionando licencias de construcción</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Experiencia en proyectos residenciales, comerciales, industriales y estaciones de servicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Entregamos planos, estudios y soportes listos para radicar y responder observaciones</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 md:mt-10 mb-8 md:mb-12" onClick={(e) => e.stopPropagation()}>
                <a
                  href="https://wa.me/573223879193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold transition-all shadow-xl hover:shadow-primary/50 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5 hidden sm:block" />
                  COTIZAR TRÁMITE DE LICENCIA
                </a>
                <a
                  href="#servicios"
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold transition-all flex items-center justify-center"
                >
                  VER SERVICIOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Intro Stats */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-12 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b-4 border-primary dark:border-blue-500 transition-colors duration-300">
          {[
            { icon: Award, label: 'Experiencia', value: '+26 Años' },
            { icon: Users, label: 'Profesionales', value: 'Personal Certificado' },
            { icon: Globe, label: 'Cobertura', value: 'Boyacá y Nacional' },
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
{/* Services Preview */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-0 pb-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Servicios profesionales de ingeniería y licenciamiento</h2>
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
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                  {/* Image Carousel Header */}
                  <div
                    className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    onClick={() => openLightbox(bgImageIndex, service.images || [service.image])}
                  >
                    <img
                      key={currentBgImage} // Key forces re-render for animation
                      src={currentBgImage}
                      alt="Consultoría de Ingeniería Especializada en Duitama"
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
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
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
                      onClick={() => navigate('/servicios')}
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
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                  {/* Image Carousel Header */}
                  <div
                    className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    onClick={() => openLightbox(aniBgImageIndex, service.images || [service.image])}
                  >
                    <img
                      key={currentBgImage}
                      src={currentBgImage}
                      alt="Gestión ANI y Normativa para Estaciones de Servicio"
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
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
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
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                  {/* Image Carousel Header */}
                  <div
                    className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    onClick={() => openLightbox(phBgImageIndex, service.images || [service.image])}
                  >
                    <img
                      key={currentBgImage}
                      src={currentBgImage}
                      alt="Mantenimiento de Propiedad Horizontal en Boyacá"
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
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
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
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                  {/* Image Carousel Header */}
                  <div
                    className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    onClick={() => openLightbox(healthBgImageIndex, service.images || [service.image])}
                  >
                    <img
                      key={currentBgImage}
                      src={currentBgImage}
                      alt="Infraestructura Hospitalaria y Clínica en Colombia"
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
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
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
                      onClick={() => navigate('/servicios')}
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
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                  {/* Image Carousel Header */}
                  <div
                    className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    onClick={() => openLightbox(techBgImageIndex, service.images || [service.image])}
                  >
                    <img
                      key={currentBgImage}
                      src={currentBgImage}
                      alt="Levantamientos Topográficos y Estudios de Suelos Boyacá"
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
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
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
                        {/* For tech service, only show a simple counter since there might be many features? No, keep dots if few */}
                        {TECHNICAL_SUB_SERVICES.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${i === techFeatureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`}
                          />
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => navigate('/servicios')}
                      className="w-full py-3 bg-primary dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-md"
                    >
                      VER DETALLES COMPLETOS
                    </button>
                  </div>
                </div>
              );
            }

            // Logic for Service 6 (Fuel Shield) - REEL CARD
            if (service.id === '6') {
              const currentFeature = FUEL_SHIELD_SUB_SERVICES[fuelFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0
                ? service.images[fuelBgImageIndex]
                : service.image;

              return (
                <div key={service.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-primary/10 dark:border-blue-500/20 flex flex-col h-full">
                  {/* Image Carousel Header */}
                  <div
                    className="h-64 relative overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
                    onClick={() => openLightbox(fuelBgImageIndex, service.images || [service.image])}
                  >
                    <img
                      key={currentBgImage}
                      src={currentBgImage}
                      alt="Filtración de Diésel y Limpieza de Tanques Fuel-Shield"
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
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === fuelBgImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-icons text-primary dark:text-blue-400">{service.icon || 'water_drop'}</span>
                      <span className="text-xs font-bold text-primary dark:text-blue-400 tracking-widest uppercase">{service.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    
                    {/* Dynamic Content Area */}
                    <div className="flex-grow flex flex-col mb-4">
                      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border-l-4 border-primary dark:border-blue-500 h-full">
                        <div key={fuelFeatureIndex} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
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
                        {FUEL_SHIELD_SUB_SERVICES.map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${i === fuelFeatureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200 dark:bg-gray-600'}`}
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

            // Logic for Service 7 (Tecnología) - REEL CARD
            if (service.id === '7') {
              const currentFeature = TECH_SUB_SERVICES[techDigFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0 ? service.images[techDigBgImageIndex] : service.image;

              return (
                <div key={service.id} className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Image Carousel Header */}
                  <div
                    className="relative h-48 overflow-hidden cursor-zoom-in bg-gray-900"
                    onClick={() => openLightbox(techDigBgImageIndex, service.images || [service.image])}
                  >
                    <img
                      src={currentBgImage}
                      alt="Soluciones Tecnológicas y Transformación Digital para Empresas"
                      className="w-full h-full object-cover transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <ZoomIn className="absolute top-3 right-3 w-5 h-5 text-white/70" />
                  </div>
                  {/* Image Indicators */}
                  <div className="flex gap-1 justify-center mt-2">
                    {service.images?.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === techBgImageIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200'}`}
                      />
                    ))}
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-400 mb-1">
                      <span className="material-symbols-outlined text-sm align-middle mr-1">{service.icon || 'computer'}</span>
                      {service.category}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                    
                    {/* Dynamic Content Area */}
                    <div className="flex-grow bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 mb-3 min-h-[100px] flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-primary dark:text-blue-400 mb-1">{currentFeature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{currentFeature.desc}</p>
                    </div>

                    {/* Text Progress Indicators */}
                    <div className="flex gap-1 mt-2 justify-end">
                      {TECH_SUB_SERVICES.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-500 ${i === techFeatureIndex ? 'w-4 bg-primary dark:bg-blue-500' : 'w-1 bg-gray-200'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/servicios/tecnologia')}
                    className="w-full py-3 bg-primary dark:bg-blue-600 text-white rounded-lg font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all text-sm uppercase tracking-wide shadow-md"
                  >
                    VER DETALLES COMPLETOS
                  </button>
                </div>
              );
            }

            // Logic for Service 8 (StructoPro) - REEL CARD
            if (service.id === '8') {
              const currentFeature = STRUCTOPRO_SUB_SERVICES[structoFeatureIndex];
              const currentBgImage = service.images && service.images.length > 0 ? service.images[structoBgImageIndex] : service.image;

              return (
                <div key={service.id} className="group relative rounded-2xl shadow-xl overflow-hidden flex flex-col border-2 border-amber-400/40 hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1 transition-all duration-300" style={{background: 'linear-gradient(145deg, #0f172a 0%, #1e3a5f 60%, #0f172a 100%)'}}>
                  
                  {/* Header with image carousel + navy overlay */}
                  <div
                    className="relative h-44 overflow-hidden cursor-zoom-in"
                    onClick={() => openLightbox(structoBgImageIndex, service.images || [service.image])}
                  >
                    <img
                      src={currentBgImage}
                      alt="Plataforma de cálculo estructural StructoPro"
                      className="w-full h-full object-cover transition-all duration-1000 opacity-30 group-hover:opacity-40"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(15,23,42,0.5), rgba(15,23,42,0.95))'}} />

                    {/* StructoPro Wordmark SVG */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <svg width="160" height="36" viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                        <text x="0" y="28" fontFamily="'Georgia', serif" fontSize="26" fontWeight="700" fill="#F59E0B" letterSpacing="-0.5">Structo</text>
                        <text x="99" y="28" fontFamily="'Georgia', serif" fontSize="26" fontWeight="400" fill="#E2E8F0" letterSpacing="-0.5">Pro</text>
                      </svg>
                      <span className="text-amber-400/80 text-[10px] font-bold tracking-[0.2em] uppercase">Engineering Suite</span>
                    </div>

                    <ZoomIn className="absolute top-3 right-3 w-4 h-4 text-amber-400/60" />
                    {/* Image indicators */}
                    <div className="flex gap-1 absolute bottom-3 w-full justify-center">
                      {service.images?.map((_, idx) => (
                        <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${idx === structoBgImageIndex ? 'w-4 bg-amber-400' : 'w-1 bg-white/20'}`} />
                      ))}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Category badge */}
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-2 flex items-center gap-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                      {service.category}
                    </p>

                    {/* Dynamic feature reel */}
                    <div className="flex-grow rounded-xl p-4 mb-3 min-h-[100px] flex flex-col justify-center border border-amber-400/20" style={{background: 'rgba(245,158,11,0.06)'}}>
                      <h4 className="text-sm font-bold text-amber-300 mb-1">{currentFeature.title}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{currentFeature.desc}</p>
                    </div>

                    {/* Feature dots */}
                    <div className="flex gap-1 mb-4 justify-end">
                      {STRUCTOPRO_SUB_SERVICES.map((_, i) => (
                        <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === structoFeatureIndex ? 'w-4 bg-amber-400' : 'w-1 bg-slate-600'}`} />
                      ))}
                    </div>

                    {/* Product CTA */}
                    <button
                      onClick={() => navigate('/servicios/structopro')}
                      className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                      style={{background: 'linear-gradient(90deg, #d97706, #f59e0b)', color: '#0f172a', boxShadow: '0 4px 20px rgba(245,158,11,0.3)'}}
                    >
                      EXPLORAR MÓDULOS
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            }

            return null; // Fallback
          })}
        </div>
      </section>
      {/* ========== EXPERIENCIA EN LICENCIAS ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="bg-blue-50/50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Experiencia comprobada en licencias de construcción
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Hemos gestionado licencias de construcción, ampliación y reconocimiento para proyectos residenciales, comerciales e industriales en diferentes ciudades del país. Cada trámite se soporta con estudios de suelos, planos estructurales, memorias de cálculo y coordinación técnica con arquitectos y curaduría, cumpliendo la normatividad urbana y la NSR-10.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Vivienda unifamiliar y multifamiliar",
                "Locales comerciales y bodegas",
                "Estaciones de servicio y obras asociadas",
                "Reforzamientos y ampliaciones de edificaciones existentes"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/573223879193"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-primary/50"
              >
                Cuéntanos tu proyecto
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
{/* ========== BANNER STRUCTOPRO ========== */}
      <section className="relative bg-gradient-to-br from-[#071525] 
                          via-[#0a1e3a] to-[#0d2647] 
                          border-y border-blue-700/30 overflow-hidden">
      
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-5"
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a9eff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
      
        <div className="relative max-w-7xl mx-auto px-6 py-16">
      
          {/* Encabezado */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-500/15 
                             border border-blue-500/30 text-blue-300 text-xs 
                             font-bold uppercase tracking-widest px-4 py-2 
                             rounded-full mb-5">
              <Zap size={12} /> Nuevo Servicio Digital
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white 
                           tracking-tight leading-tight">
              Struct<span className="text-blue-400">o</span>Pro
            </h2>
            <p className="text-blue-200 mt-3 text-lg font-medium max-w-2xl mx-auto">
              Plataforma profesional de cálculo estructural en línea
            </p>
            <p className="text-slate-400 mt-2 text-sm max-w-2xl mx-auto">
              Diseña, verifica y exporta elementos estructurales bajo normativa 
              <strong className="text-slate-200"> NSR-10 / ACI 318 / Normas Internacionales</strong>. 
              Sin instalaciones, directamente en tu navegador.
            </p>
          </div>
      
          {/* Grid de módulos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
      
            {[
              { icon: <Layers size={20}/>, titulo: "Zapatas y Cimentación", desc: "Diseño y capacidad portante para zapatas aisladas en DXF" },
              { icon: <Box size={20}/>, titulo: "Muros de Contención", desc: "Kontewall: estabilidad en voladizo con exportación de planos" },
              { icon: <Ruler size={20}/>, titulo: "Columnas PM y Vigas", desc: "Diseño a flexión, cortante y diagramas de interacción" },
              { icon: <Calculator size={20}/>, titulo: "Albañilería Confinada", desc: "Dosificaciones y verificación de muros bajo corte/flexión" },
              { icon: <TreePine size={20}/>, titulo: "Madera Estructuras", desc: "Diseño de marcos en madera aserrada con normativas" },
              { icon: <BarChart3 size={20}/>, titulo: "Análisis Estructural", desc: "Resolución de pórticos 2D/3D y generador paramétrico" },
              { icon: <Zap size={20}/>, titulo: "Diseño Sísmico", desc: "Espectros elásticos, derivas y asimetría de irregularidades" },
              { icon: <FileText size={20}/>, titulo: "APU y Memorias", desc: "Exporta planillas DOCX y análisis de precios unitarios" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 hover:bg-blue-500/10 border 
                                      border-white/10 hover:border-blue-500/40 
                                      rounded-xl p-4 transition-all duration-300 
                                      group cursor-default">
                <div className="text-blue-400 group-hover:text-blue-300 mb-3 
                                transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {item.titulo}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
      
          </div>
      
          {/* Fila inferior: beneficios + botón */}
          <div className="flex flex-col md:flex-row items-center 
                          justify-between gap-8 pt-8 
                          border-t border-white/10">
      
            {/* Checks */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {[
                "Exportación de planos DXF",
                "Memorias de cálculo DOCX",
                "Cantidades APU en tiempo real",
                "Normativa NSR-10 / ACI 318",
                "Visualización 3D interactiva",
                "Sin instalación requerida",
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-slate-300 
                                         text-sm">
                  <CheckCircle2 size={14} className="text-green-400 shrink-0"/>
                  {item}
                </span>
              ))}
            </div>
      
            {/* Botón CTA */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <Link to="/servicios/structopro"
                 className="inline-flex items-center gap-3 bg-orange-500 
                            hover:bg-orange-400 active:scale-95 text-white 
                            font-bold py-4 px-10 rounded-xl text-base 
                            transition-all shadow-2xl shadow-orange-500/25">
                CONOCER STRUCTOPRO
                <ArrowRight size={18}/>
              </Link>
              <span className="text-slate-500 text-xs">
                Acceso gratuito • Sin registro
              </span>
            </div>
      
          </div>
      
        </div>
      </section>
      {/* ======== FIN BANNER STRUCTOPRO ======== */}\n{/* Moving Image Gallery Strip - Interactive */}
      <section className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-10 mb-20 overflow-hidden transition-colors duration-300">
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
                    alt={SCROLL_LABELS[idx] || "Galería de Proyectos KONTE Ingeniería"}
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
                    alt={SCROLL_LABELS[idx] || "Proyectos de Construcción en Boyacá"}
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

      
    </div>
  );
};

export default Home;
