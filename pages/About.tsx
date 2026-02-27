// About - Quienes Somos
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
    <main className="animate-in fade-in duration-700">
      

      {/* Hero Section */}
      <section 
        className="relative h-[400px] w-full overflow-hidden group cursor-pointer"
        onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"])}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-primary/80 z-10 group-hover:from-gray-900/80 transition-all" />
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000"
          alt="Ingeniería y Construcción en Colombia - KONTE Ingeniería"
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
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro & Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-primary"></span>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Nuestra Esencia</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Compromiso con la Excelencia en Ingeniería
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              KONTE es una compañía proyectada para construir futuro basados en procesos de altísima calidad en donde nuestro principal objetivo es mejorar el nivel de vida de las personas o instituciones dándoles seguridad, confianza y respaldo en cada obra.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              En la compañía contamos con la colaboración de los más expertos ingenieros para los procesos de construcción, consultoría, proveeduría y todo aquello en lo concerniente a la ingeniería civil y especializada.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <article className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-primary">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Sector Público</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Más de 15 años de experiencia en saneamiento básico, construcción hospitalaria e infraestructura pública.
                </p>
              </article>
              <article className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border-l-4 border-secondary">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Sector Privado</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Vivienda horizontal, mantenimiento industrial, impermeabilización y reposición de redes.
                </p>
              </article>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1000"])}
            >
              <img 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipo de Ingenieros expertos en KONTE Ingeniería civil"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 p-2 rounded-lg backdrop-blur-sm">
                <ZoomIn className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
              <p className="text-white italic font-medium">
                "Nuestro principal objetivo es construir, proyectar y crear espacios donde se compartan emociones."
              </p>
            </div>
          </div>
        </div>

        {/* Objetivo Section */}
        <section className="bg-gray-900 rounded-3xl p-8 md:p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Nuestro Objetivo Estratégico</h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Para KONTE, el objetivo central es construir, proyectar y crear espacios que unan. Basamos nuestros procesos en un alto sentido de ética y profesionalismo, contando con el respaldo de los mejores materiales, maquinaria de vanguardia y el mejor equipo humano.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-white font-bold">Ética Profesional</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-secondary">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-white font-bold">Maquinaria de Punta</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-orange-400">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-white font-bold">Capital Humano Experto</span>
              </div>
            </div>
          </div>
        </section>

        {/* ANI Section Callout */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800/30 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center mb-24">
          <div className="bg-orange-100 dark:bg-orange-900/40 w-20 h-20 rounded-2xl flex items-center justify-center shrink-0">
            <Ruler className="w-10 h-10 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Expertos en Gestión ANI y Normativa Vial</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Logramos tramitar resoluciones en el menor tiempo posible ante la Agencia Nacional de Infraestructura (ANI) e INVIAS.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded text-xs font-bold shadow-sm border border-gray-100 dark:border-gray-700">RESOLUCIÓN 1361 DE 2012</span>
              <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded text-xs font-bold shadow-sm border border-gray-100 dark:border-gray-700">RESOLUCIÓN 716 DE 2015</span>
            </div>
          </div>
          <button 
            onClick={() => navigate('/servicios/gestion-ani')}
            className="px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/20 flex items-center gap-2 group whitespace-nowrap"
          >
            Ver Detalles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Portfolio Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Portafolio Integral de Servicios</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Cubrimos todas las áreas dentro de la construcción y consultoría técnica, garantizando materiales de alta calidad y rapidez en la ejecución.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Movimiento de Suelos',
              icon: Truck,
              items: ['Excavaciones de precisión', 'Terraplenes y dragados', 'Tratamiento de aguas', 'Suelos industriales']
            },
            {
              title: 'Obras Viales y Urbanismo',
              icon: Ruler,
              items: ['Alcantarillas y bordillos', 'Pavimentación técnica', 'Caminos y placa huellas', 'Urbanismo táctico']
            },
            {
              title: 'Adecuación de Terrenos',
              icon: CheckCircle,
              items: ['Limpieza técnica de lotes', 'Extracción de tocones', 'Cercos perimetrales', 'Maquinaria pesada']
            },
            {
              title: 'Excavaciones Mecánicas',
              icon: HardHat,
              items: ['Redes de Gas y Electricidad', 'Sistemas de Acueducto', 'Zanjas especializadas', 'Canalizaciones']
            },
            {
              title: 'Sistematización Rural',
              icon: Layers,
              items: ['Demoliciones técnicas', 'Curvas de nivel', 'Drenajes de campos', 'Relleno de lagunas']
            },
            {
              title: 'Obras Complementarias',
              icon: Briefcase,
              items: ['Estructuras metálicas', 'Acabados y Drywall', 'Trámites ante Planeación', 'Gestión de Curaduría']
            }
          ].map((service, idx) => (
            <article key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
