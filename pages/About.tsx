import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { Target, Building2, HardHat, CheckCircle, Truck, Briefcase, Ruler, ArrowRight, ZoomIn, Layers } from 'lucide-react';

interface AboutProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const About: React.FC<AboutProps> = ({ openLightbox }) => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] w-full overflow-hidden group cursor-pointer"
        onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"])}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-primary/80 z-10 group-hover:from-gray-900/80 transition-all" />
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000" 
          alt="Ingeniería y Construcción en Colombia - KONTE" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="text-white w-6 h-6 drop-shadow-md" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              QUIÉNES SOMOS
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
              Construyendo futuro con procesos de altísima calidad, seguridad, confianza y respaldo en proyectos de infraestructura.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro & Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-primary"></span>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">NUESTRA ESENCIA</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              KONTE es una compañía proyectada para construir futuro basados en procesos de altísima calidad en donde nuestro principal objetivo es mejorar el nivel de vida de las personas o instituciones dándoles seguridad, confianza y respaldo en cada obra.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              En la compañía contamos con la colaboración de los más expertos ingenieros para los procesos de construcción, consultoría, proveeduría y todo aquello en lo concerniente a la ingeniería civil y especializada.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
                <h3 className="font-bold text-primary flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5" /> Sector Público
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Más de 15 años de experiencia en saneamiento básico, construcción y ampliación de instituciones hospitalarias, e instalación de infraestructuras públicas.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5" /> Sector Privado
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ejecución de vivienda horizontal, mantenimiento de edificios, impermeabilización de cubiertas y reposición integral de redes sanitarias.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer" onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1000"])}>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1000" 
              alt="Equipo de Ingenieros expertos en KONTE Ingeniería civil" 
              className="rounded-2xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="text-white w-6 h-6 drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl z-20 max-w-xs border-t-4 border-accent hidden md:block">
              <p className="text-gray-800 dark:text-gray-200 italic font-medium">
                "Nuestro principal objetivo es construir, proyectar y crear espacios donde se compartan emociones y se consoliden lazos inquebrantables."
              </p>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className="bg-gray-900 text-white rounded-3xl p-12 mb-20 relative overflow-hidden">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">NUESTRO OBJETIVO ESTRATÉGICO</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Para KONTE, el objetivo central es construir, proyectar y crear espacios que unan. Basamos nuestros procesos en un alto sentido de ética y profesionalismo, contando con el respaldo de los mejores materiales, maquinaria de vanguardia y el mejor equipo humano.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold border border-white/20">Ética Profesional</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold border border-white/20">Maquinaria de Punta</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold border border-white/20">Capital Humano Experto</span>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        {/* ANI & Normativa Callout */}
        <div className="mb-24">
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-8 border-orange-500 dark:border-orange-600 rounded-r-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Expertos en Gestión ANI y Normativa Vial</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-2xl">
                  Logramos tramitar resoluciones en el menor tiempo posible ante la Agencia Nacional de Infraestructura (ANI). Nuestra experiencia nos permite identificar errores comunes y lograr trámites en menos de 1 año.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 font-bold text-xs shadow-sm">
                    RESOLUCIÓN 1361 DE 2012 (Ubicación EDS)
                  </span>
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded border border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 font-bold text-xs shadow-sm">
                    RESOLUCIÓN 716 DE 2015
                  </span>
                </div>
              </div>
              <button 
                onClick={() => navigate('/servicios/gestion-ani')}
                className="px-6 py-3 bg-orange-600 text-white font-bold rounded hover:bg-orange-700 transition-colors shrink-0"
              >
                Ver Detalles Normativos
              </button>
            </div>
          </div>
        </div>

        {/* Servicios Detallados */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Portafolio Integral de Servicios de Ingeniería</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cubrimos todas las áreas dentro de la construcción, reformas y consultoría técnica, garantizando materiales de alta calidad y rapidez en la ejecución.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Movimiento de Suelos',
                icon: Truck,
                items: ['Excavaciones y nivelaciones de precisión', 'Terraplenes y dragados especializados', 'Piletas para tratamiento de aguas residuales', 'Preparación de suelos para naves industriales']
              },
              {
                title: 'Obras Viales y Urbanismo',
                icon: Ruler,
                items: ['Alcantarillas, andenes y bordillos', 'Cunetas de hormigón de alta resistencia', 'Pavimentación en Hormigón y Asfalto', 'Caminos rurales y placa huellas técnicas']
              },
              {
                title: 'Extracción y Limpieza de Terrenos',
                icon: CheckCircle,
                items: ['Extracción técnica de tocones frutales', 'Limpieza y adecuación de cercos', 'Uso de maquinaria pesada especializada']
              },
              {
                title: 'Excavaciones Mecánicas',
                icon: HardHat,
                items: ['Redes subterráneas (Gas y Electricidad)', 'Sistemas de agua potable y alcantarillado', 'Profundidad constante garantizada']
              },
              {
                title: 'Sistematización de Campos',
                icon: Layers,
                items: ['Demoliciones en entornos rurales', 'Desmalezado y limpieza de lotes', 'Terrazas y curvas de nivel para drenaje', 'Relleno técnico de lagunas y pantanos']
              },
              {
                title: 'Obras Complementarias',
                icon: Briefcase,
                items: ['Movimientos de materiales a gran escala', 'Estructuras metálicas y en acero', 'Instalación de drywall y acabados', 'Trámites ante curaduría y planeación']
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow group">
                <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
