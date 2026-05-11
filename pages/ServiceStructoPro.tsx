import React, { useEffect, useState } from 'react';
import { 
  Calculator, FileText, Box, Ruler, BarChart3, 
  Layers, TreePine, Zap, ArrowRight, CheckCircle2,
  ShieldCheck, Clock, Download, Laptop, Briefcase, 
  TrendingUp, Activity, Users, Globe, ChevronDown, ChevronUp,
  MousePointerClick, Settings2, PackageCheck
} from 'lucide-react';

interface ServiceStructoProProps {
  setPage?: any; // Mantenido por compatibilidad
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceStructoPro: React.FC<ServiceStructoProProps> = ({ openLightbox }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "StructoPro - Plataforma de Cálculo Estructural | KONTE";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Diseña zapatas, muros de contención, columnas y vigas bajo norma NSR-10 y ACI 318. Exporta planos DXF, memorias DOCX y modelos IFC 3D.");
    }
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#071525] via-[#0a1e3a] to-[#0d2647] py-20 overflow-hidden">
        {/* Fondo decorativo SVG */}
        <div className="absolute inset-0 opacity-5"
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a9eff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6 relative z-10">
            <Zap size={16} /> Ingeniería Digital
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            StructoPro
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4 font-normal leading-relaxed">
            Plataforma web de diseño y cálculo estructural para ingenieros que necesitan resultados técnicos confiables, memorias de cálculo claras y planos listos para exportar.
          </p>
          <p className="text-base text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            Automatiza procesos de diseño bajo NSR-10 y ACI 318 desde tu navegador. Genera memorias exhaustivas paso a paso en DOCX, planos en DXF y modelos BIM en IFC listos para revisión técnica.
          </p>
          
          <div className="flex flex-col items-center gap-4 relative z-10 mt-12 pb-6">
            <a 
              href="https://structopro-app.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-[0_0_40px_-5px_rgba(249,115,22,0.4)] active:scale-95"
            >
              ACCEDER A STRUCTOPRO <ArrowRight size={24} />
            </a>
            <span className="text-slate-400 text-sm mt-2">
              Acceso en línea, sin instalación y con flujo de trabajo orientado a productividad profesional.
            </span>
          </div>
        </div>
      </section>

      {/* Franja de Confianza (Trust Strip) - Normativas */}
      <div className="bg-slate-900 border-b border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-6 lg:gap-x-10 items-center">
            
            {/* Destacados Core */}
            <span className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              <CheckCircle2 size={16} className="text-blue-500"/>
              <span className="text-blue-200 font-bold tracking-widest text-xs sm:text-sm">NSR-10 (COL)</span>
            </span>
            <span className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              <CheckCircle2 size={16} className="text-blue-500"/>
              <span className="text-blue-200 font-bold tracking-widest text-xs sm:text-sm">ACI 318 (USA)</span>
            </span>

            {/* Separador Opcional para Desktop */}
            <span className="hidden md:inline-block text-slate-700">|</span>

            {/* Resto de Normas Latam */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-slate-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs items-center">
               <span>NEC (ECU)</span>
               <span className="text-slate-700">•</span>
               <span>E.060 (PER)</span>
               <span className="text-slate-700">•</span>
               <span>NTC (MEX)</span>
               <span className="text-slate-700">•</span>
               <span>COVENIN (VEN)</span>
               <span className="hidden sm:inline-block text-slate-700">•</span>
               <span className="hidden sm:inline-block">NB (BOL)</span>
               <span className="hidden sm:inline-block text-slate-700">•</span>
               <span className="hidden sm:inline-block">CIRSOC (ARG)</span>
            </div>

            {/* Separador */}
            <span className="hidden lg:inline-block text-slate-700">|</span>

            {/* Entregables */}
            <span className="flex items-center gap-1.5 text-slate-300 font-bold uppercase tracking-widest text-xs">
              <FileText size={16} className="text-emerald-500"/> DOCX + DXF + IFC
            </span>

          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-white dark:bg-gray-900 py-14 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "22", suffix: "+", label: "Módulos activos", color: "text-blue-600 dark:text-blue-400" },
              { value: "7",  suffix: "",  label: "Normas soportadas", color: "text-orange-500" },
              { value: "3",  suffix: "",  label: "Formatos de exportación", color: "text-emerald-600 dark:text-emerald-400" },
              { value: "0",  suffix: " instalaciones", label: "100% en la nube", color: "text-purple-600 dark:text-purple-400" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`text-5xl font-black ${s.color} leading-none`}>{s.value}<span className="text-2xl">{s.suffix}</span></span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
              title: "1. Diseño con criterio normativo",
              desc: "Desarrollado para apoyar procesos de cálculo estructural con enfoque en NSR-10 y ACI 318, facilitando memorias trazables y decisiones técnicas mejor documentadas."
            },
            {
              icon: <Download className="w-10 h-10 text-orange-500" />,
              title: "2. Entregables completos y BIM",
              desc: "Obtén memorias de cálculo exhaustivas paso a paso en DOCX, planos de despiece en DXF y modelos 3D en formato IFC listos para integrar en metodologías BIM."
            },
            {
              icon: <Laptop className="w-10 h-10 text-green-600 dark:text-green-400" />,
              title: "3. Trabajo desde la nube",
              desc: "Ejecuta cálculos desde cualquier navegador, sin depender de instalaciones complejas ni equipos especializados para tareas repetitivas de diseño."
            },
            {
              icon: <Clock className="w-10 h-10 text-purple-600 dark:text-purple-400" />,
              title: "4. Más velocidad, menos retrabajo",
              desc: "Reduce tiempo en iteraciones, verificaciones y preparación documental para concentrarte en el criterio ingenieril y la toma de decisiones."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 inline-block rounded-xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">¿Cómo funciona?</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Tres pasos para pasar de los datos del proyecto a entregables profesionales.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-orange-400 opacity-30" />
            {[
              { step: "01", icon: <MousePointerClick className="w-8 h-8" />, color: "bg-blue-600", title: "Selecciona el módulo", desc: "Elige entre 22 módulos de cálculo: zapatas, columnas, vigas, muros, análisis sísmico y más. Cada uno tiene interfaz dedicada." },
              { step: "02", icon: <Settings2 className="w-8 h-8" />, color: "bg-orange-500", title: "Ingresa los parámetros", desc: "Completa las variables del proyecto: geometría, cargas, materiales y coeficientes normativos. La plataforma valida en tiempo real." },
              { step: "03", icon: <PackageCheck className="w-8 h-8" />, color: "bg-emerald-600", title: "Exporta resultados completos", desc: "Descarga memorias detalladas en DOCX, planos 2D en DXF y el modelo 3D en IFC. Todo listo para documentación, revisión BIM o entrega al cliente." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <span className="text-xs font-black text-gray-300 dark:text-gray-600 tracking-widest mb-2">PASO {step.step}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos de Cálculo - Grid 22 items */}
      <section className="bg-slate-50 dark:bg-[#0c1322] py-24 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Módulos de trabajo ({22})</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              StructoPro integra herramientas para cálculo, verificación y documentación estructural en una sola experiencia de trabajo. Cada módulo está pensado para resolver tareas frecuentes de diseño con más rapidez, orden y consistencia técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: <Calculator />, title: "Columnas PM", desc: "Diagramas de interacción P-M y flexocompresión." },
              { icon: <Ruler />, title: "Vigas Losas", desc: "Diseño detallado a flexión y cortante." },
              { icon: <Layers />, title: "Otras Estructuras", desc: "Resolución para elementos no convencionales." },
              { icon: <TrendingUp />, title: "APU Mercado", desc: "Precios Unitarios (APU) con valores de mercado." },
              { icon: <Calculator />, title: "Columnas Circulares", desc: "Diseño biaxial para soportes de sección circular y espirales." },
              { icon: <Box />, title: "Zapatas", desc: "Dimensionamiento y diseño de cimentaciones superficiales." },
              { icon: <ShieldCheck />, title: "Muros Contención", desc: "Evaluación de estabilidad, volcamiento y deslizamiento." },
              { icon: <Layers />, title: "Mampostería y Morteros", desc: "Dosificaciones y mezclas para mampostería no estructural." },
              { icon: <TreePine />, title: "Madera Estructural", desc: "Diseño y revisión de elementos en madera aserrada." },
              { icon: <Zap />, title: "Diseño Sísmico", desc: "Espectros de diseño, derivas y parámetros de sitio NSR-10." },
              { icon: <Layers />, title: "Estructuras Metálicas", desc: "Propiedades geométricas y elementos de acero estructural." },
              { icon: <Activity />, title: "Resistencia de Materiales", desc: "Mecánica, cálculo de inercias y esfuerzos internos." },
              { icon: <Briefcase />, title: "Utilidades Comunes", desc: "Herramientas de conversión, interpolación y cálculo rápido." },
              { icon: <BarChart3 />, title: "Análisis Estructural 2D", desc: "Análisis matricial de fuerzas en pórticos 2D." },
              { icon: <BarChart3 />, title: "Análisis Estructural 3D", desc: "Cálculo global de matrices de rigidez espaciales." },
              { icon: <Globe />, title: "Generador Maestro 3D", desc: "Modelado paramétrico y visualización estructural 3D." },
              { icon: <Box />, title: "Kontewall", desc: "Suite especializada en muros de retención avanzados." },
              { icon: <Calculator />, title: "Konte Calculadora", desc: "Estimación rápida volumétrica y cuantía de materiales." },
              { icon: <Activity />, title: "Viento Simplificado", desc: "Evaluación de empujes de viento sobre fachadas y estructuras." },
              { icon: <Layers />, title: "Albañilería Confinada", desc: "Chequeos integrales de muros estructurales confinados." },
              { icon: <Ruler />, title: "Predimensionamiento", desc: "Reglas rápidas para iteración inicial de vigas y columnas." },
              { icon: <Activity />, title: "Irregularidades", desc: "Verificación de asimetrías torsionales según NSR-10." }
            ].map((mod, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 flex flex-col p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                    {React.cloneElement(mod.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white leading-tight">{mod.title}</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pensado para ingeniería real */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-[#0a1526] rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-8 md:px-16 py-16 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Pensado para ingeniería real</h2>
              <p className="text-lg text-blue-200 leading-relaxed max-w-xl">
                StructoPro no busca reemplazar el criterio del ingeniero; busca potenciarlo. La plataforma acelera cálculos repetitivos, mejora la presentación técnica de resultados y ayuda a estandarizar procesos de diseño en oficinas, consultorías y trabajo independiente.
              </p>
            </div>
            
            <div className="md:w-1/2 flex flex-col gap-6 w-full">
              {[
                { icon: <Users size={24}/>, label: "Para quién es", desc: "Ingenieros civiles, estructurales, consultores, diseñadores y equipos técnicos." },
                { icon: <FileText size={24}/>, label: "Qué genera", desc: "Resultados de cálculo, memorias técnicas y archivos exportables para documentación." },
                { icon: <TrendingUp size={24}/>, label: "Qué mejora", desc: "Tiempo de respuesta, consistencia de entregables y productividad del flujo de diseño." }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex items-start gap-5">
                  <div className="bg-blue-500/20 text-blue-400 p-3 rounded-xl shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
                    <p className="text-blue-100/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Planes diseñados para profesionales</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Comienza gratis o accede a todas las capacidades BIM y entregables exhaustivos con StructoPro Premium.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Básico</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">Para pruebas y proyectos pequeños.</p>
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-6">Gratis</div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Acceso a módulos básicos</li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Cálculos en pantalla</li>
                <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Materiales estándar</li>
                <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500 line-through opacity-50"><CheckCircle2 className="w-5 h-5" /> Memorias DOCX completas</li>
                <li className="flex items-center gap-3 text-gray-400 dark:text-gray-500 line-through opacity-50"><CheckCircle2 className="w-5 h-5" /> Exportación DXF y BIM (IFC)</li>
              </ul>
              <a href="https://structopro-app.streamlit.app" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-4 rounded-xl transition-colors">
                Probar Gratis
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-[#0a1526] to-[#071525] rounded-3xl p-8 border border-blue-500 shadow-2xl shadow-blue-900/20 flex flex-col h-full relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-lg">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <p className="text-blue-200 mb-6">Potencia total para consultoría e ingeniería.</p>
              <div className="text-4xl font-black text-white mb-2">Consultar <span className="text-lg font-normal text-blue-200">/ mes</span></div>
              <p className="text-sm text-blue-300 mb-6 italic">Licencias corporativas disponibles</p>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Acceso a los 22+ módulos avanzados</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Memorias DOCX exhaustivas paso a paso</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Exportación de planos de despiece DXF</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-blue-400" /> Modelos BIM 3D estructurales en IFC</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-blue-400" /> APU con valores de mercado actualizados</li>
              </ul>
              {/* PAYMENT BUTTON / CONTACT BUTTON */}
              <a href="https://wa.me/573204468049?text=Hola%20KONTE%2C%20estoy%20interesado%20en%20adquirir%20la%20licencia%20Premium%20de%20StructoPro." target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/30">
                Adquirir Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
          Convierte horas de trabajo técnico en minutos de producción útil
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Accede a una plataforma creada para agilizar el diseño estructural, reducir tareas repetitivas y fortalecer la calidad de tus entregables profesionales.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a 
            href="https://structopro-app.streamlit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
          >
            INGRESAR A LA PLATAFORMA
            <ArrowRight size={24} />
          </a>
          <span className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mt-2">
            Ideal para profesionales que buscan velocidad, orden documental y mejor experiencia de cálculo en la web.
          </span>
        </div>
      </section>
    </div>
  );
};

const FAQS = [
  { q: "¿StructoPro requiere instalación?", a: "No. Funciona completamente en el navegador web. Solo necesitas conexión a internet. No hay software que instalar ni licencias de sistema operativo." },
  { q: "¿Los resultados cumplen con NSR-10?", a: "StructoPro está desarrollado para apoyar procesos de diseño bajo NSR-10 (Colombia) y ACI 318 (USA). Los módulos incorporan las ecuaciones y factores de la norma vigente. El criterio de aplicación es siempre responsabilidad del ingeniero profesional." },
  { q: "¿Qué formato tienen los archivos exportados?", a: "Las memorias de cálculo se generan de forma exhaustiva paso a paso en formato DOCX (Word). Los planos se exportan en DXF (AutoCAD), y los modelos 3D se exportan en formato abierto IFC (BIM) en la versión Premium." },
  { q: "¿Puedo usar StructoPro desde el celular o tablet?", a: "Sí. La interfaz es responsiva. Sin embargo, para proyectos complejos o uso prolongado se recomienda un monitor de escritorio o portátil para mejor visualización de los módulos de cálculo." },
  { q: "¿Reemplaza a ETABS, SAP2000 o CYPECAD?", a: "No los reemplaza. StructoPro está diseñado para agilizar tareas frecuentes de diseño de elementos individuales (zapatas, columnas, vigas), pre-dimensionamiento y documentación normativa, complementando el flujo de trabajo con paquetes de análisis global." },
  { q: "¿Cómo accedo? ¿Hay costo?", a: "Contamos con una versión Básica gratuita para pruebas. Para exportar memorias completas DOCX, planos DXF y modelos BIM IFC, se requiere una suscripción Premium. Puedes adquirirla contactándonos directamente desde la página." },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#0c1322] border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Preguntas frecuentes</h2>
          <p className="text-gray-500 dark:text-gray-400">Respuestas a las consultas más comunes sobre StructoPro.</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-bold text-gray-900 dark:text-white text-base">{faq.q}</span>
                {open === i ? <ChevronUp className="w-5 h-5 text-blue-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStructoPro;
