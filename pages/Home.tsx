import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
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
      <div className="relative w-full overflow-hidden group cursor-pointer" onClick={() => openLightbox(0, ["/images/home/knt_infrae_clean.jpg"])}>
        <div className="absolute inset-0 bg-slate-900/80 z-10 group-hover:bg-slate-900/70 transition-colors" />
        <img
          src="/images/home/knt_infrae_clean.jpg"
          alt="Ingeniería civil y consultoría en Duitama, Boyacá"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <div className="relative z-20 flex flex-col justify-center pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 min-h-[90vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 text-left">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-md">
                Ingeniería estructural &bull; Licencias &bull; Tecnología
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Ingeniería estructural, licencias y tecnología para obras de alto impacto
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
