import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { CheckCircle2, AlertTriangle, FileText, Clock, Trophy, ShieldCheck, ArrowRight, ChevronRight, ListChecks, ArrowDown, ZoomIn } from 'lucide-react';

interface ServiceAniProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceAni: React.FC<ServiceAniProps> = ({ openLightbox }) => {
  const navigate = useNavigate();
  // WhatsApp Link for EDS Design
  const waLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20busco%20asesor%C3%ADa%20en%20dise%C3%B1o%20y%20normativa%20para%20una%20nueva%20Estaci%C3%B3n%20de%20Servicio.";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Header */}
      <div 
        className="relative h-[500px] w-full overflow-hidden group cursor-pointer"
        onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1465447142348-e9952c393d50?auto=format&fit=crop&q=80&w=2000"])}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10 group-hover:from-primary/80 transition-all" />
        <img 
          src="https://images.unsplash.com/photo-1465447142348-e9952c393d50?auto=format&fit=crop&q=80&w=2000" 
          alt="Infraestructura Vial ANI" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl pointer-events-auto">
              <div className="flex items-center gap-2 text-blue-200 mb-4 text-sm font-bold tracking-wider uppercase">
                <span onClick={() => navigate('/servicios')} className="cursor-pointer hover:text-white transition-colors">Servicios</span>
                <ChevronRight className="w-4 h-4" />
                <span>Gestión Normativa</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Gestión ante la ANI y Entes Gubernamentales
              </h1>
              <p className="text-xl text-blue-100 font-light leading-relaxed max-w-2xl">
                Expertos en destrabar procesos administrativos ante Curadurías, ANI e INVIAS. Transformamos la complejidad normativa en viabilidad para su proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30 mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 border-t-4 border-accent">
          
          {/* 1. Introducción */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-2/3">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">1. INTRODUCCIÓN</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Consultoría Especializada en Infraestructura y Licenciamiento</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Gestión especializada para proyectos que requieren accesos, carriles de aceleración/desaceleración y obras en faja de retiro. Tramitamos permisos ante la ANI, INVIAS, Concesionarios Viales y entes territoriales, asegurando la viabilidad de estaciones de servicio, industrias y desarrollos comerciales.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ofrecemos acompañamiento técnico integral en licenciamiento urbanístico, desde la selección del lote hasta la obtención de la resolución aprobada, cubriendo obra nueva, ampliación, modificación, reconocimiento de edificaciones y demolición.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">95%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Tasa de Aprobación</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">Integral</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase font-bold">Gestión 360°</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Situación Actual */}
          <div className="mb-16">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">2. TRÁMITES Y ALCANCE</span>
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8 border border-orange-100 dark:border-orange-800 flex flex-col md:flex-row gap-8">
              <div className="shrink-0">
                <div className="bg-orange-100 dark:bg-orange-900/40 p-4 rounded-full text-orange-600">
                  <AlertTriangle className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soluciones Integrales de Licenciamiento</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                   Abordamos todos los requerimientos normativos para su proyecto, incluyendo:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Permisos de Ocupación de Vía (ANI / INVIAS)', 
                    'Licencias de Construcción (Obra Nueva/Ampliación)', 
                    'Reconocimiento de edificaciones existentes', 
                    'Licencias de Demolición y Cerramiento'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full shrink-0" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Solución & 5. Servicios */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">3. SOLUCIÓN KONTE</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Nos encargamos de TODO el proceso</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">Desde el diagnóstico inicial y selección del lote hasta la obtención de permisos y resoluciones finales.</p>
            </div>
            
            {/* Tarjetas Resumen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: 'Diagnóstico', icon: FileText, desc: 'Evaluación y análisis completo de viabilidad técnica y normativa.' },
                { title: 'Documentación', icon: ShieldCheck, desc: 'Preparación de planos, estudios y memorias según norma.' },
                { title: 'Gestión', icon: Trophy, desc: 'Trámite completo ante Curadurías, ANI y entes territoriales.' },
              ].map((card, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 p-8 rounded-xl transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700 group text-center md:text-left">
                  <div className="inline-block md:block">
                    <card.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform mx-auto md:mx-0" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Lista Detallada de Servicios Incluidos */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
               <div className="flex items-center gap-3 mb-6">
                 <ListChecks className="text-primary w-6 h-6" />
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide">5. SERVICIOS INCLUIDOS</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                 {[
                   'Permisos de Ocupación de Vía (Nacional y Departamental)',
                   'Licenciamiento Urbanístico Integral',
                   'Licencias de Construcción (Obra Nueva, Ampliación)',
                   'Reconocimiento de edificaciones existentes',
                   'Licencias de Demolición y Cerramiento',
                   'Gestión ante Curadurías y Planeación',
                   'Coordinación con Concesionarias Viales',
                   'Análisis de viabilidad de lote',
                   'Asesoría post-aprobación'
                 ].map((service, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5 shrink-0">
                       <CheckCircle2 className="w-4 h-4 text-green-600" />
                     </div>
                     <span className="text-gray-700 dark:text-gray-300 font-medium">{service}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* 4. Metodología (Timeline) */}
          <div className="mb-20">
            <div className="text-center mb-10">
               <span className="text-primary font-bold tracking-widest text-sm uppercase">4. METODOLOGÍA</span>
               <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Proceso de Gestión</h2>
            </div>
            
            <div className="relative border-l-4 border-primary/20 ml-4 md:ml-1/2 md:border-l-0">
               {/* Vertical line for desktop centered */}
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"></div>

               {[
                 { fase: 'Fase 1: Diagnóstico', time: 'Inicial', items: ['Evaluación normativa del predio', 'Identificación de trámites requeridos', 'Análisis de viabilidad', 'Estrategia de presentación'] },
                 { fase: 'Fase 2: Documentación', time: 'Ejecución', items: ['Levantamientos y planos técnicos', 'Diseño de accesos (si aplica)', 'Estudios complementarios', 'Compilación documental'] },
                 { fase: 'Fase 3: Radicación', time: 'Gestión', items: ['Radicación ante entidad competente', 'Seguimiento al trámite', 'Respuesta a actas de observaciones', 'Gestión administrativa'] },
                 { fase: 'Fase 4: Aprobación', time: 'Cierre', items: ['Obtención de Licencia/Permiso', 'Ejecutoria de actos administrativos', 'Entrega de carpeta final'] }
               ].map((phase, idx) => (
                 <div key={idx} className={`mb-12 relative md:flex items-center justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   {/* Dot */}
                   <div className="absolute left-[-22px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-white dark:bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center z-10 shadow-sm">
                      <span className="text-primary font-bold text-sm">{idx + 1}</span>
                   </div>
                   
                   {/* Content */}
                   <div className="ml-8 md:ml-0 md:w-[45%] bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                     <div className="flex justify-between items-center mb-3">
                       <h4 className="text-lg font-bold text-primary dark:text-blue-400">{phase.fase}</h4>
                       <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-bold">{phase.time}</span>
                     </div>
                     <ul className="space-y-2">
                       {phase.items.map((item, i) => (
                         <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                           <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 shrink-0" /> {item}
                         </li>
                       ))}
                     </ul>
                   </div>
                   
                   {/* Spacer for the other side */}
                   <div className="hidden md:block md:w-[45%]"></div>
                 </div>
               ))}
            </div>
          </div>

          {/* 7. Diferenciales & 6. Casos de Éxito */}
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white mb-20 relative overflow-hidden">
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                 <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">7. POR QUÉ NOSOTROS</span>
                 <h3 className="text-2xl font-bold mb-6">Diferenciales KONTE</h3>
                 <ul className="space-y-4">
                   {[
                     'Experiencia ante ANI, Curadurías e INVIAS',
                     'Conocimiento profundo de normativa vigente',
                     'Capacidad técnica para diseños complejos',
                     'Gestión ágil y transparente',
                     'Acompañamiento hasta la aprobación final'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <div className="bg-green-500 rounded-full p-1 shrink-0">
                         <CheckCircle2 className="w-4 h-4 text-white" />
                       </div>
                       <span className="font-medium text-gray-200 text-sm">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
               <div>
                  <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">6. TRAYECTORIA</span>
                  <h3 className="text-2xl font-bold mb-6">Resultados Comprobados</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Hemos gestionado exitosamente permisos y licencias para proyectos de alta complejidad, incluyendo estaciones de servicio en vías nacionales e instalaciones industriales.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm border border-white/10">
                    <div className="flex justify-between items-center text-center">
                       <div>
                         <div className="text-2xl font-bold text-white">100%</div>
                         <div className="text-xs text-gray-400">Compromiso</div>
                       </div>
                       <div className="w-px h-8 bg-white/20"></div>
                       <div>
                         <div className="text-2xl font-bold text-white">Integral</div>
                         <div className="text-xs text-gray-400">Servicio</div>
                       </div>
                       <div className="w-px h-8 bg-white/20"></div>
                       <div>
                         <div className="text-2xl font-bold text-white">+15</div>
                         <div className="text-xs text-gray-400">Años Exp.</div>
                       </div>
                    </div>
                  </div>
                  <button onClick={() => navigate('/proyectos')} className="text-white border-b border-white hover:text-primary hover:border-primary transition-colors pb-1 text-sm">
                    Ver Proyectos Realizados &rarr;
                  </button>
               </div>
             </div>
             {/* Background decorative */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </div>

          {/* 9. Próximos Pasos (Nuevo) */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">9. Próximos Pasos</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: 1, title: 'Contactar', desc: 'Diagnóstico inicial' },
                { step: 2, title: 'Evaluación', desc: 'Normativa del predio' },
                { step: 3, title: 'Propuesta', desc: 'Alcance y costos' },
                { step: 4, title: 'Acuerdo', desc: 'Inicio de gestión' },
                { step: 5, title: 'Resultado', desc: 'Licencia aprobada' },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                   <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-primary text-primary font-bold flex items-center justify-center text-lg mb-3 shadow-md group-hover:bg-primary group-hover:text-white transition-colors z-10">
                     {item.step}
                   </div>
                   {i < 4 && (
                     <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                   )}
                   <h4 className="font-bold text-gray-900 dark:text-white text-sm">{item.title}</h4>
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

          {/* 8. Inversión & CTA */}
          <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-10 border border-blue-100 dark:border-blue-800">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">8. Inversión</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              La inversión en gestión normativa depende de la ubicación y tipo de trámite. Contáctenos para una evaluación personalizada de su caso.
            </p>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-white text-lg font-bold rounded-lg hover:bg-secondary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto justify-center max-w-md"
            >
              CONTACTAR AHORA <ArrowRight className="w-6 h-6" />
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Respuesta garantizada en menos de 24 horas.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceAni;