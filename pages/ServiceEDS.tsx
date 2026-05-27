import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldAlert, BookOpen, HardHat, FileCheck, ZoomIn, MessageCircle } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Page } from '../types';

interface ServiceEDSProps {
  setPage?: (page: Page) => void; // Deprecated
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceEDS: React.FC<ServiceEDSProps> = ({ openLightbox }) => {
  // Filter only EDS projects
  const edsProjects = PROJECTS.filter(p => p.type === 'Estación de Servicio');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generalWaLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20deseo%20hablar%20con%20un%20ingeniero%20sobre%20el%20dise%C3%B1o%20o%20construcci%C3%B3n%20de%20una%20Estaci%C3%B3n%20de%20Servicio.";

  return (
    <div className="pt-20 pb-12 animate-in fade-in duration-500 bg-white dark:bg-gray-900 transition-colors">
      
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden group">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://i.imgur.com/pXQd2kW.jpeg"
          alt="Construcción de Estación de Servicio La Llanerita"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block shadow-lg">
                Infraestructura Especializada
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Construcción de Estaciones de Servicio en Colombia
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl font-light">
                Diseño, consultoría normativa y ejecución de obras llave en mano. Garantizamos el cumplimiento estricto de las Resoluciones 1361 y 716 del MME.
              </p>
              <a
                href={generalWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-orange-500/50"
              >
                COTIZAR PROYECTO <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Normatividad y Viabilidad */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cumplimiento Normativo y Viabilidad (MME / ANI)
            </h2>
            <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
              La viabilidad de una Estación de Servicio depende del cumplimiento exacto de la normativa técnica y legal. En KONTE, nos aseguramos de que tu proyecto no tenga bloqueos administrativos ni riesgos operativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border-l-4 border-orange-500">
              <ShieldAlert className="w-12 h-12 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Resoluciones 1361 y 716 (MinMinas)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Diseñamos los planos de la estación aplicando los requerimientos técnicos oficiales vigentes para el almacenamiento, manejo y distribución de combustibles líquidos derivados del petróleo.
              </p>
              <ul className="space-y-2">
                {["Distanciamientos de seguridad y linderos.", "Especificaciones técnicas de tanques subterráneos.", "Sistemas de contención secundaria e interceptores API.", "Zonificación de áreas clasificadas (eléctricas)."].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
              <FileCheck className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Permisos de Ocupación de Vía (ANI / INVIAS)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                La ubicación en corredores viales nacionales requiere diseños geométricos precisos y aprobaciones estrictas. Gestionamos todo el proceso técnico y administrativo.
              </p>
              <ul className="space-y-2">
                {["Diseño geométrico de carriles de aceleración y desaceleración.", "Estudios de Tránsito y Seguridad Vial.", "Gestión de licencias ambientales y vertimientos.", "Trámites ante Curadurías y Planeación municipal."].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos de Estaciones de Servicio (Contexto Técnico) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestra Experiencia en Construcción de EDS
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl text-lg">
              Casos de éxito y evidencia técnica de los proyectos de estaciones de servicio que hemos ejecutado en diferentes regiones de Colombia.
            </p>
          </div>

          <div className="space-y-16">
            {edsProjects.map((project, idx) => (
              <div key={project.id} className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer aspect-video"
                    onClick={() => openLightbox(0, project.images)}
                  >
                    <img 
                      src={project.image} 
                      alt={project.seoH1 || project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 bg-black/40 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <ZoomIn className="text-white w-6 h-6" />
                    </div>
                  </div>
                  {/* Thumbnail strip */}
                  {project.images && project.images.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {project.images.slice(0, 4).map((img, i) => (
                        <div 
                          key={i} 
                          className="h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                          onClick={() => openLightbox(i, project.images)}
                        >
                          <img src={img} alt={`Vista ${i+1} de ${project.title}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                      {project.images.length > 4 && (
                        <div 
                          className="h-16 w-24 flex-shrink-0 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => openLightbox(4, project.images)}
                        >
                          <span className="text-gray-600 dark:text-gray-400 font-bold text-sm">+{project.images.length - 4} fotos</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex gap-3 mb-3">
                    <span className="bg-blue-100 dark:bg-blue-900/40 text-primary dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {project.location}
                    </span>
                    {project.area && (
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {project.area}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.seoH1 || project.title}
                  </h3>
                  
                  <div className="prose prose-gray dark:prose-invert max-w-none mb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    <p>{project.fullDescription || project.description}</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                      <HardHat className="w-4 h-4 text-primary" /> Puntos Técnicos Clave:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {project.seoKeywords?.split(',').map(kw => kw.trim()).join(' • ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">¿Estás planificando construir una Estación de Servicio?</h2>
          <p className="text-blue-100 text-lg mb-8">Nuestro equipo de ingenieros está listo para revisar tus requerimientos, evaluar la viabilidad del predio y asegurar que tu inversión cumpla con toda la normativa en Colombia.</p>
          <a
            href={generalWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
          >
            Hablar con un Especialista <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ServiceEDS;
