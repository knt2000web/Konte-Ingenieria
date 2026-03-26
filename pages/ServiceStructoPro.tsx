import React, { useEffect } from 'react';
import { 
  Calculator, FileText, Box, Ruler, BarChart3, 
  Layers, TreePine, Zap, ArrowRight, CheckCircle2,
  ShieldCheck, Clock, Download, Laptop, Briefcase, 
  TrendingUp, Activity
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
      metaDesc.setAttribute("content", "Diseña zapatas, muros de contención, columnas y vigas bajo norma NSR-10 y ACI 318. Exporta planos DXF y memorias DOCX.");
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
            Automatiza procesos de diseño bajo NSR-10 y ACI 318 desde tu navegador. Genera memorias en DOCX, planos en DXF y resultados listos para revisión técnica, sin instalar software pesado.
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

      {/* Franja de Confianza (Trust Strip) */}
      <div className="bg-slate-900 border-b border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400 font-bold uppercase tracking-widest text-sm md:text-base">
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500"/> NSR-10</span>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-blue-500"/> ACI 318</span>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="flex items-center gap-2"><FileText size={18} className="text-blue-500"/> DOCX + DXF</span>
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
              title: "2. Entregables profesionales",
              desc: "Obtén memorias de cálculo en DOCX y planos en DXF listos para complementar tus entregables, revisiones internas o documentación de proyecto."
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

      {/* Módulos de Cálculo - Grid 23 items */}
      <section className="bg-slate-50 dark:bg-[#0c1322] py-24 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Módulos de trabajo</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              StructoPro integra herramientas para cálculo, verificación y documentación estructural en una sola experiencia de trabajo. Cada módulo está pensado para resolver tareas frecuentes de diseño con más rapidez, orden y consistencia técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Activity />, title: "Cimentaciones Superficiales", desc: "Evaluación de capacidad portante, presiones de contacto y criterios básicos de interacción suelo-estructura." },
              { icon: <Box />, title: "Muros de Contención", desc: "Revisión de estabilidad y dimensionamiento para configuraciones típicas de gravedad y voladizo." },
              { icon: <Ruler />, title: "Vigas y Losas", desc: "Análisis de flexión, cortante, cuantías y chequeos de servicio en elementos de concreto." },
              { icon: <Calculator />, title: "Columnas de Concreto", desc: "Apoyo al diseño a flexocompresión con revisión de comportamiento y relaciones de carga." },
              { icon: <Layers />, title: "Mampostería Estructural", desc: "Herramientas para evaluación y diseño de muros bajo criterios estructurales aplicables." },
              { icon: <BarChart3 />, title: "Análisis de Cargas", desc: "Organización y estimación de cargas gravitacionales y laterales para etapas preliminares o validación." },
              { icon: <TreePine />, title: "Madera Estructural", desc: "Verificación de elementos flexionados, columnas y conexiones en madera aserrada." },
              { icon: <Zap />, title: "Diseño Sísmico Básico", desc: "Generación de espectros elásticos e inelásticos, y evaluación de irregularidades (NSR-10)." },
              { icon: <ShieldCheck />, title: "Tanques de Almacenamiento", desc: "Verificación de muros y losas bajo empujes hidrostáticos." },
              { icon: <Box />, title: "Zapatas Aisladas y Combinadas", desc: "Diseño detallado a punzonamiento, cortante ancho y flexión con planos DXF." },
              { icon: <Layers />, title: "Placas Alveolares", desc: "Verificación de capacidad y deflexiones en losas prefabricadas (Extrusión/Molde)." },
              { icon: <Ruler />, title: "Nudos Viga-Columna", desc: "Comprobación de cortante en la junta para diseño sismo-resistente (DMO/DES)." },
              { icon: <Activity />, title: "Vigas T y L", desc: "Diseño a flexión de secciones con aleta colaborante en placa." },
              { icon: <BarChart3 />, title: "Muros de Cortante (Placas)", desc: "Diseño de elementos de borde y refuerzo del alma para resistencia sísmica lateral." },
              { icon: <TreePine />, title: "Viguetas Metálicas (Deck)", desc: "Diseño en etapa constructiva y final para tableros metálicos colaborantes." },
              { icon: <Calculator />, title: "Empalmes y Ganchos", desc: "Cálculo de longitudes de desarrollo y traslapos requeridos por diámetro (ACI 318)." },
              { icon: <Box />, title: "Escaleras de Concreto", desc: "Análisis longitudinal y diseño a flexión para escaleras ortopoligonales." },
              { icon: <Layers />, title: "Perfiles Metálicos", desc: "Cálculo de propiedades geométricas y axiales de perfiles tubulares, I y canales." },
              { icon: <ShieldCheck />, title: "Acero de Estribos", desc: "Determinación de separación máxima y confinamiento en zonas de alta amenaza." },
              { icon: <Activity />, title: "Losas Macizas", desc: "Cálculo de cuantías en dos direcciones (Coeficientes Marcus o ACI)." },
              { icon: <FileText />, title: "Cuadro de Columnas", desc: "Exportador de planillas de despiece y tabla consolidada en DXF." },
              { icon: <Download />, title: "Cantidades de Obra (APU)", desc: "Estimación volumétrica de concreto y peso de acero derivado del cálculo." },
              { icon: <BarChart3 />, title: "Generador de Cargas de Viento", desc: "Evaluación simplificada de presiones bajo ASCE 7 y NSR-10." },
            ].map((mod, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 flex flex-col p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 hover:shadow-md transition-all group">
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

export default ServiceStructoPro;
