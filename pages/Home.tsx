import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVICES, PROJECTS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { ArrowRight, CheckCircle, Award, Users, Globe, ZoomIn, Calculator, FileText, Box, Ruler, BarChart3, Layers, TreePine, Zap, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  setPage?: any; // Deprecated
  openLightbox: (index: number, images: string[]) => void;
}

// Images for the infinite scroll marquee
const SCROLL_IMAGES = [
  '/images/projects/puente_bailey_4k.jpg',
  '/images/projects/canopy_guamal_lod400.jpg',
  '/images/projects/cabana_tato_exterior_angular_4k.jpg',
  '/images/projects/tanque_industrial_master.jpg',
  '/images/projects/puente_bailey_monograph.jpg',
  '/images/projects/canopy_guamal_lod400.jpg',
  '/images/projects/cabana_tato_nocturno_glow_4k.jpg',
  '/images/projects/cad_to_bim_composite.jpg',
  '/images/projects/tanque_industrial_vitrificado.jpg'
];

// Sub-services labels for ALT text
const SCROLL_LABELS = [
  'Diseño Estructural Puentes Bailey CCP-14',
  'EDS Guamal - Infraestructura y Accesos Viales',
  'Cabaña Campestre Estilo Suizo NSR-10',
  'Tanques de Almacenamiento Industrial AWWA D103',
  'Monografía Técnica Puentes OpenBIM LOD 400',
  'Canopy Estructuras Metálicas Grandes Luces',
  'Visualización Arquitectónica 3D Fotorrealista',
  'Muros de Contención y Obras de Drenaje 36"',
  'Suministro y Montaje de Tanques Vitrificados'
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
      <div className="relative w-full overflow-hidden group cursor-pointer" onClick={() => openLightbox(0, ["/images/projects/canopy_guamal_lod400.jpg"])}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/35 z-10 transition-colors" />
        <img
          src="/images/projects/canopy_guamal_lod400.jpg"
          alt="Diseño y cálculo estructural de canopy y estaciones de servicio - KONTE"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <div className="relative z-20 flex flex-col justify-center pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 min-h-[90vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 text-left">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-md">
                Ingeniería estructural &bull; Estaciones de servicio &bull; Tecnología
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Ingeniería estructural, estaciones de servicio y tecnología para obras de alto impacto
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
                KONTE es una firma híbrida. Evolucionamos la ingeniería tradicional combinando ejecución en campo, consultoría normativa y desarrollo de software para el sector técnico industrial.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <h3 className="font-bold text-blue-400">26+ Años</h3>
                  <p className="text-sm text-gray-300">De experiencia comprobada</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <h3 className="font-bold text-blue-400">Nacional</h3>
                  <p className="text-sm text-gray-300">Cobertura en todo el país</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <h3 className="font-bold text-blue-400">Firma Híbrida</h3>
                  <p className="text-sm text-gray-300">Construcción y tecnología</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 md:mt-10 mb-8 md:mb-12" onClick={(e) => e.stopPropagation()}>
                <a
                  href="https://wa.me/573227696769"
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

      {/* ── PROYECTOS INSIGNIA 2026 ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 dark:bg-blue-900/30 text-primary dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              Portafolio Técnico 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Proyectos Insignia y Casos de Estudio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2 max-w-2xl">
              Evidencia de nuestra capacidad técnica en infraestructura vial, cálculo sismorresistente y consultoría de gran escala.
            </p>
          </div>
          <button
            onClick={() => navigate('/proyectos')}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:gap-3 transition-all"
          >
            Ver todos los proyectos <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Proyecto 1: Puentes Bailey */}
          <div 
            onClick={() => navigate('/proyectos/diseno-estructural-puentes-bailey')}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col cursor-pointer"
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/images/projects/canopy_guamal_lod400.jpg" 
                alt="Diseño Estructural de Puentes Bailey" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                Norma CCP-14
              </div>
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                Tolima
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-primary dark:text-blue-400 uppercase tracking-widest mb-1">
                Infraestructura Vial
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                Diseño Estructural de Puentes Bailey
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed flex-grow">
                Modelado OpenBIM LOD 400, cálculo sismorresistente bajo norma CCP-14, estribos de concreto y despiece de armaduras para puente de 42 m de luz.
              </p>
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs font-bold text-primary dark:text-blue-400">
                <span>Ver Detalles</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Proyecto 2: EDS Guamal */}
          <div 
            onClick={() => navigate('/proyectos/eds-guamal-infraestructura-vial')}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col cursor-pointer"
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/images/projects/canopy_guamal_lod400.jpg" 
                alt="EDS Guamal Infraestructura" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                En Ejecución
              </div>
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                Guamal, Meta
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
                Estación de Servicio 4G
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                EDS Guamal: Carriles y Muros
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed flex-grow">
                Diseño vial de aceleración LOD 400, muros en voladizo (cantilever) de contención, cruces de drenaje en 36" y canopy de grandes luces.
              </p>
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs font-bold text-primary dark:text-blue-400">
                <span>Ver Detalles</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Proyecto 3: Tanques de Almacenamiento */}
          <div 
            onClick={() => navigate('/servicios')}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col cursor-pointer"
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/images/projects/tanque_industrial_master.jpg" 
                alt="Tanques de Almacenamiento Industrial" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                AWWA D103 / NFPA 22
              </div>
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                Industrial
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-primary dark:text-blue-400 uppercase tracking-widest mb-1">
                Almacenamiento y Fluidos
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                Tanques de Almacenamiento Industrial
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed flex-grow">
                Diseño estructural de losas de fondo NSR-10 y suministro de tanques pernados y vitrificados de 4 a 4.000 m³ para agua potable y redes contra incendio.
              </p>
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs font-bold text-primary dark:text-blue-400">
                <span>Ver Servicios</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Proyecto 4: Cabaña Tato */}
          <div 
            onClick={() => navigate('/proyectos/cabana-campestre-estilo-suizo')}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col cursor-pointer"
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/images/projects/cabana_tato_exterior_angular_4k.jpg" 
                alt="Cabaña Campestre Estilo Suizo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                Arquitectura
              </div>
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-semibold px-2 py-0.5 rounded">
                Campestre
              </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-1">
                Estructuras Especiales
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                Chalet Suizo A-Frame en 3 Niveles
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-4 leading-relaxed flex-grow">
                Diseño arquitectónico y cálculo estructural NSR-10 para chalet de montaña, estructura mixta acero-concreto y cimentación en ladera.
              </p>
              <div className="pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs font-bold text-primary dark:text-blue-400">
                <span>Ver Detalles</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} openLightbox={openLightbox} />
          ))}
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
                href="https://wa.me/573227696769"
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
\n{/* Moving Image Gallery Strip - Interactive */}
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
