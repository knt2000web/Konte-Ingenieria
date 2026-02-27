import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { CheckCircle2, Code, Database, Cpu, Globe, BarChart3, Zap, ArrowRight, ChevronRight, ListChecks, ArrowDown, ZoomIn, Terminal, Layers, Bot } from 'lucide-react';

interface ServiceTechProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceTech: React.FC<ServiceTechProps> = ({ openLightbox }) => {
  const navigate = useNavigate();
  const waLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20me%20interesa%20el%20servicio%20de%20Transformaci%C3%B3n%20Digital%20y%20Desarrollo%20Web.";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div 
        className="relative h-[500px] w-full overflow-hidden group cursor-pointer"
        onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"])}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/60 z-10 group-hover:from-indigo-900/80 transition-all" />
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
          alt="Tecnología y Transformación Digital KONTE" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl pointer-events-auto">
              <div className="flex items-center gap-2 text-purple-200 mb-4 text-sm font-bold tracking-wider uppercase">
                <span onClick={() => navigate('/servicios')} className="cursor-pointer hover:text-white transition-colors">Servicios</span>
                <ChevronRight className="w-4 h-4" />
                <span>Soluciones Digitales</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Tecnología y Transformación Digital
              </h1>
              <p className="text-xl text-purple-100 font-light leading-relaxed max-w-2xl">
                Desarrollo web profesional, ingeniería de datos, automatización con Python y soluciones de IA para llevar su negocio al siguiente nivel.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30 mb-20">
        <div className="bg-slate-800 rounded-xl shadow-xl p-8 md:p-12 border-t-4 border-purple-500">
          
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-2/3">
                <span className="text-purple-600 font-bold tracking-widest text-sm uppercase mb-2 block">1. INTRODUCCIÓN</span>
                <h2 className="text-3xl font-bold text-white mb-6">Soluciones Digitales para la Industria</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  En KONTE combinamos más de 15 años de experiencia en ingeniería con capacidades avanzadas de desarrollo de software, ingeniería de datos y automatización. Creamos soluciones digitales que transforman la forma en que las empresas operan, reduciendo tiempos de procesamiento hasta en un <strong>90%</strong>.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Desde sitios web corporativos de alta calidad hasta pipelines de datos automatizados con Python, nuestro equipo integra la tecnología como herramienta estratégica para la toma de decisiones y el crecimiento empresarial.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-slate-800 p-3 rounded-full shadow-sm">
                    <Zap className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">90%</div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Reducción de Tiempo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-800 p-3 rounded-full shadow-sm">
                    <Code className="w-8 h-8 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">Full-Stack</div>
                    <div className="text-xs text-gray-500 uppercase font-bold">Capacidad Técnica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-purple-600 font-bold tracking-widest text-sm uppercase">2. PORTAFOLIO DIGITAL</span>
              <h2 className="text-3xl font-bold text-white mt-2">Nuestras Soluciones</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mt-4">Cada servicio se adapta a las necesidades específicas de su empresa.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { 
                  title: 'Desarrollo Web Profesional', 
                  icon: Globe, 
                  desc: 'Diseño y desarrollo de sitios web modernos, responsive y optimizados para SEO. Desde landing pages hasta plataformas web completas con React y frameworks modernos.',
                  items: ['Sitios web corporativos', 'Landing pages SEO', 'Aplicaciones web React', 'Diseño responsive'],
                  color: 'from-blue-500 to-blue-600'
                },
                { 
                  title: 'Ingeniería de Datos y ETL', 
                  icon: Database, 
                  desc: 'Pipelines automatizados en Python para extraer, transformar y cargar datos de múltiples fuentes: PDFs, Excel, bases de datos y APIs.',
                  items: ['Pipelines ETL en Python', 'Extracción de PDFs', 'Limpieza de datos', 'Automatización Excel'],
                  color: 'from-green-500 to-green-600'
                },
                { 
                  title: 'Bases de Datos y SQL', 
                  icon: Layers, 
                  desc: 'Diseño, implementación y administración de bases de datos relacionales. Consultas SQL optimizadas, migración y estructuración de datos.',
                  items: ['Diseño de esquemas', 'Consultas SQL avanzadas', 'Migración de datos', 'Optimización de consultas'],
                  color: 'from-orange-500 to-orange-600'
                },
                { 
                  title: 'Automatización con Python', 
                  icon: Terminal, 
                  desc: 'Scripts personalizados para eliminar tareas manuales repetitivas. Automatización de cálculos, reportes, procesamiento de archivos y flujos de trabajo.',
                  items: ['Automatización de reportes', 'Web scraping', 'Procesamiento de archivos', 'Scripts personalizados'],
                  color: 'from-yellow-500 to-yellow-600'
                },
                { 
                  title: 'Integración de IA y Gemini', 
                  icon: Bot, 
                  desc: 'Implementación de soluciones de inteligencia artificial utilizando Google AI Studio y modelos Gemini para gestión documental y asistentes virtuales.',
                  items: ['Chatbots con Gemini', 'Procesamiento con AI Studio', 'Análisis documental inteligente', 'Automatización de flujos'],
                  color: 'from-purple-500 to-purple-600'
                },
                { 
                  title: 'Visualización y Dashboards', 
                  icon: BarChart3, 
                  desc: 'Creación de dashboards interactivos y reportes visuales para la toma de decisiones basada en datos. Transformamos datos crudos en información accionable.',
                  items: ['Dashboards interactivos', 'Visualización de KPIs', 'Reportes automatizados', 'Análisis de métricas'],
                  color: 'from-teal-500 to-teal-600'
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-slate-800 p-6 rounded-xl transition-all duration-300 hover:shadow-xl border border-gray-100 group hover:border-purple-200 hover:-translate-y-1">
                  <div className={`bg-gradient-to-r ${card.color} p-3 rounded-lg inline-block mb-4`}>
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="text-purple-600 font-bold tracking-widest text-sm uppercase">3. STACK TECNOLÓGICO</span>
              <h2 className="text-3xl font-bold text-white mt-2">Tecnologías que Dominamos</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Python', desc: 'Avanzado', icon: '🐍' },
                { name: 'SQL', desc: 'Avanzado', icon: '🗄️' },
                { name: 'React / JS', desc: 'Intermedio', icon: '⚛️' },
                { name: 'Tailwind CSS', desc: 'Avanzado', icon: '🎨' },
                { name: 'Pandas / NumPy', desc: 'Avanzado', icon: '📊' },
                { name: 'Git / GitHub', desc: 'Intermedio', icon: '🔀' },
                { name: 'Google AI Studio', desc: 'Gemini 2.0', icon: '✨' },
                { name: 'BIM / Revit', desc: 'Avanzado', icon: '🏗️' },
              ].map((tech, idx) => (
                <div key={idx} className="bg-slate-900/60 hover:bg-slate-800 p-5 rounded-xl text-center transition-all hover:shadow-md border border-gray-100 group">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h4 className="font-bold text-white">{tech.name}</h4>
                  <p className="text-xs text-purple-600 font-semibold uppercase">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-10">
               <span className="text-purple-600 font-bold tracking-widest text-sm uppercase">4. METODOLOGÍA</span>
               <h2 className="text-3xl font-bold text-white mt-2">Proceso de Trabajo</h2>
            </div>
            
            <div className="relative border-l-4 border-purple-200 ml-4 md:ml-1/2 md:border-l-0">
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-purple-200 -translate-x-1/2"></div>

               {[
                 { fase: 'Fase 1: Descubrimiento', time: 'Semana 1', items: ['Reunión de requisitos y objetivos', 'Análisis de datos y sistemas existentes', 'Definición de alcance técnico', 'Propuesta de arquitectura'] },
                 { fase: 'Fase 2: Diseño y Prototipo', time: 'Semana 2-3', items: ['Wireframes y mockups interactivos', 'Diseño de base de datos', 'Definición de flujos de automatización', 'Aprobación del cliente'] },
                 { fase: 'Fase 3: Desarrollo', time: 'Semana 3-6', items: ['Programación con metodología ágil', 'Desarrollo iterativo con revisiones', 'Integración de APIs y servicios', 'Testing y depuración'] },
                 { fase: 'Fase 4: Entrega y Soporte', time: 'Continuo', items: ['Despliegue en producción', 'Capacitación al equipo del cliente', 'Documentación técnica y de usuario', 'Soporte técnico post-entrega'] }
               ].map((phase, idx) => (
                 <div key={idx} className={`mb-12 relative md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="absolute left-[-22px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-slate-800 border-4 border-purple-500 rounded-full flex items-center justify-center z-10 shadow-sm">
                      <span className="text-purple-600 font-bold text-sm">{idx + 1}</span>
                   </div>
                   
                   <div className="ml-8 md:ml-0 md:w-[45%] bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                     <div className="flex justify-between items-center mb-3">
                       <h4 className="text-lg font-bold text-purple-600">{phase.fase}</h4>
                       <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-bold">{phase.time}</span>
                     </div>
                     <ul className="space-y-2">
                       {phase.items.map((item, i) => (
                         <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                           <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" /> {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                   
                   <div className="hidden md:block md:w-[45%]"></div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white mb-20 relative overflow-hidden">
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                 <span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-2 block">5. CASOS DE USO</span>
                 <h3 className="text-2xl font-bold mb-6">Proyectos Realizados</h3>
                 <ul className="space-y-4">
                   {[
                     { title: 'ANI Scraper — ETL Automatizado', desc: 'Pipeline Python para extraer y estructurar datos de +500 resoluciones legales en PDF, reduciendo tiempo de auditoría de semanas a minutos.' },
                     { title: 'Sitio Web Corporativo KONTE', desc: 'Desarrollo completo del sitio web con React, Tailwind CSS y despliegue en Vercel. Diseño responsive, SEO y modo oscuro.' },
                     { title: 'Dashboard Organizacional', desc: 'Sistema de visualización de datos jerárquicos para una entidad pública con +50 miembros de equipo y múltiples proyectos.' },
                     { title: 'Cálculos Estructurales Automatizados', desc: 'Scripts Python para cálculos geométricos y de cargas de proyectos arquitectónicos con 100% de precisión.' }
                   ].map((item, i) => (
                     <li key={i} className="border-l-2 border-purple-400 pl-4">
                       <h4 className="font-bold text-white text-sm">{item.title}</h4>
                       <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                     </li>
                   ))}
                 </ul>
               </div>
               <div>
                  <span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-2 block">6. POR QUÉ NOSOTROS</span>
                  <h3 className="text-2xl font-bold mb-6">Diferenciales KONTE Tech</h3>
                  <ul className="space-y-4">
                    {[
                      'Ingenieros con visión de negocio, no solo código',
                      'Experiencia real en industria (construcción, salud, energía)',
                      'Automatización que reduce costos operativos >90%',
                      'Stack moderno: Python, React, SQL, Google AI Studio',
                      'Soporte técnico continuo post-entrega',
                      'Integración de modelos Gemini y Vision'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="bg-purple-500 rounded-full p-1 shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-800/10 rounded-lg p-4 mt-6 backdrop-blur-sm border border-white/10">
                    <div className="flex justify-between items-center text-center">
                       <div>
                         <div className="text-2xl font-bold text-white">Python</div>
                         <div className="text-xs text-gray-400">+2 Años</div>
                       </div>
                       <div className="w-px h-8 bg-slate-800/20"></div>
                       <div>
                         <div className="text-2xl font-bold text-white">SQL</div>
                         <div className="text-xs text-gray-400">Avanzado</div>
                       </div>
                       <div className="w-px h-8 bg-slate-800/20"></div>
                       <div>
                         <div className="text-2xl font-bold text-white">React</div>
                         <div className="text-xs text-gray-400">Full-Stack</div>
                       </div>
                    </div>
                  </div>
               </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">7. Próximos Pasos</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'Contactar', desc: 'Cuéntanos tu necesidad' },
                { step: 2, title: 'Diagnóstico', desc: 'Análisis técnico gratis' },
                { step: 3, title: 'Propuesta', desc: 'Alcance y precio fijo' },
                { step: 4, title: 'Desarrollo', desc: 'Ejecución ágil' },
                { step: 5, title: 'Entrega', desc: 'Producto funcionando' },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                   <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-purple-500 text-purple-600 font-bold flex items-center justify-center text-lg mb-3 shadow-md group-hover:bg-purple-600 group-hover:text-white transition-colors z-10">
                     {item.step}
                   </div>
                   {i < 4 && (
                     <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                   )}
                   <h4 className="font-bold text-white text-sm">{item.title}</h4>
                   <p className="text-xs text-gray-500">{item.desc}</p>
                   {i < 4 && (
                     <div className="md:hidden my-2">
                       <ArrowDown className="w-4 h-4 text-gray-300" />
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-purple-50 rounded-2xl p-10 border border-purple-100">
            <h2 className="text-3xl font-bold text-white mb-4">8. ¿Listo para Digitalizar?</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Cuéntenos su proyecto y reciba una cotización personalizada. Diagnóstico técnico inicial sin costo.
            </p>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-purple-600 text-white text-lg font-bold rounded-lg hover:bg-purple-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto justify-center max-w-md"
            >
              SOLICITAR COTIZACIÓN <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-sm text-gray-500 mt-4">Respuesta garantizada en menos de 24 horas.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceTech;
