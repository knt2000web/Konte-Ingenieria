import React, { useEffect, useState } from 'react';
import { 
  Calculator, FileText, Box, Ruler, BarChart3, 
  Layers, TreePine, Zap, ArrowRight, CheckCircle2,
  ShieldCheck, Clock, Download, Laptop, Briefcase, 
  TrendingUp, Activity, Users, Globe, ChevronDown, ChevronUp,
  MousePointerClick, Settings2, PackageCheck, X, ExternalLink
} from 'lucide-react';

interface ServiceStructoProProps {
  setPage?: any;
  openLightbox: (index: number, images: string[]) => void;
}

// Datos de módulos ampliados para la Ficha de Alcance
const MODULES_DATA = [
  { 
    icon: <Calculator />, title: "Columnas PM", 
    desc: "Diagramas de interacción P-M y flexocompresión.", path: "Columnas_PM",
    solves: "Generación de diagramas de interacción P-M en 3D (Superficie de Bresler) para evaluación de capacidad a flexocompresión biaxial.",
    verifies: "Verificación de esbeltez (efectos de segundo orden kL/r), cuantías y diseño de estribos por confinamiento sísmico según NSR-10 / ACI 318.",
    delivers: "Memoria DOCX detallada y exportación del modelo 3D estructural en IFC.",
    forWho: "Ingenieros estructurales revisores y diseñadores de edificios de concreto reforzado."
  },
  { 
    icon: <Ruler />, title: "Vigas y Losas", 
    desc: "Diseño detallado a flexión y cortante.", path: "Vigas_Losas",
    solves: "Cálculo del acero longitudinal y transversal requerido para vigas rectangulares, vigas T y losas en una dirección.",
    verifies: "Requisitos de ductilidad (DES, DMO, DMI), cortante sísmico Vp, y deflexiones inmediatas/diferidas (Método de Branson).",
    delivers: "Memoria DOCX paso a paso justificando cada ecuación normativa.",
    forWho: "Calculistas que necesitan optimizar el armado y verificar deflexiones de manera rigurosa."
  },
  { 
    icon: <Layers />, title: "Otras Estructuras", 
    desc: "Resolución para elementos no convencionales.", path: "Otras_Estructuras",
    solves: "Diseño de elementos especiales de concreto armado como vigas de acople y ménsulas.",
    verifies: "Modelos de bielas y tirantes y requisitos específicos de cortante por fricción.",
    delivers: "Esquemas de armado y memoria técnica justificativa.",
    forWho: "Especialistas enfrentando configuraciones atípicas en proyectos industriales o comerciales."
  },
  { 
    icon: <TrendingUp />, title: "Presupuesto Pro", 
    desc: "Armado de licitaciones y APU.", path: "1_Presupuesto_APU",
    solves: "Creación de presupuestos de obra con Análisis de Precios Unitarios (APU) basados en bases de mercado actualizadas.",
    verifies: "Desglose estructurado de Materiales, Equipos y Mano de Obra con aplicación automática de A.I.U. e IVA.",
    delivers: "Exportación nativa a Excel (.xlsx) estructurado y listo para presentar en licitaciones.",
    forWho: "Directores de obra, licitadores y contratistas."
  },
  { 
    icon: <Calculator />, title: "Columnas Circulares", 
    desc: "Diseño biaxial para soportes y espirales.", path: "Columnas_Circulares",
    solves: "Evaluación de capacidad de columnas de sección circular para puentes, silos y estructuras arquitectónicas.",
    verifies: "Confinamiento mediante espirales/zunchos y capacidad biaxial bajo cargas combinadas.",
    delivers: "Diagramas de interacción y memoria de diseño.",
    forWho: "Diseñadores de infraestructura vial civil y arquitectónica."
  },
  { 
    icon: <Box />, title: "Zapatas Aisladas", 
    desc: "Dimensionamiento y cimentaciones superficiales.", path: "Zapatas",
    solves: "Dimensionamiento en planta y espesor de cimentaciones superficiales concéntricas y excéntricas.",
    verifies: "Esfuerzos sobre el terreno, diseño a flexión, cortante unidireccional y punzonamiento biaxial.",
    delivers: "Planos de despiece automáticos en formato DXF listos para AutoCAD, con rótulo y cuadro de cantidades.",
    forWho: "Diseñadores de cimentaciones y geotecnistas."
  },
  { 
    icon: <ShieldCheck />, title: "Muros Contención", 
    desc: "Evaluación de estabilidad y presiones.", path: "Muros_Contencion",
    solves: "Diseño geométrico y armado de muros en voladizo (gravedad y cantilever) soportando empujes de suelo.",
    verifies: "Factores de seguridad a volcamiento, deslizamiento y presiones netas bajo teorías de Rankine/Coulomb.",
    delivers: "Memoria justificativa geotécnica y estructural.",
    forWho: "Ingenieros civiles en proyectos de urbanismo e infraestructura."
  },
  { 
    icon: <Zap />, title: "Diseño Sísmico", 
    desc: "Espectros, derivas y FHE.", path: "Diseño_Sismico",
    solves: "Cálculo del Espectro Elástico de Diseño y la Fuerza Horizontal Equivalente (FHE) basal.",
    verifies: "Parámetros de amenaza sísmica local (Aa, Av), control de derivas y efectos P-Delta.",
    delivers: "Curvas espectrales y memorias de parámetros sísmicos base.",
    forWho: "Calculistas que inician el planteamiento global de una estructura."
  },
  { 
    icon: <Activity />, title: "Irregularidades", 
    desc: "Verificación de asimetrías torsionales.", path: "Irregularidades",
    solves: "Evaluación geométrica y de rigidez para clasificar la estructura en planta y elevación.",
    verifies: "Penalización de redundancia sísmica y ajuste del coeficiente de disipación de energía (R).",
    delivers: "Reporte de irregularidades para adjuntar al estudio sísmico.",
    forWho: "Revisores estructurales y calculistas."
  },
  { 
    icon: <BarChart3 />, title: "Dashboard Financiero", 
    desc: "Métricas gerenciales de salud del proyecto.", path: "ERP_Dashboard_Financiero",
    solves: "Consolidación de toda la información de costos de la obra en tiempo real (Materiales, Subcontratos, Planillas).",
    verifies: "Métricas EVM (Earned Value Management), ROI proyectado y CPI/SPI de la obra.",
    delivers: "Tablero ejecutivo interactivo de rentabilidad y alertas tempranas.",
    forWho: "Gerentes de proyecto, inversores y directores de obra."
  }
];

// Hexagon Icon Wrapper para mantener la identidad de marca
const HexIcon = ({ icon, colorClass = "text-[#f5c842]", bgClass = "bg-[#f5c842]/10", borderClass = "border-[#f5c842]/30" }: any) => (
  <div className={`relative flex items-center justify-center w-12 h-12 ${bgClass} ${colorClass} rounded-xl border ${borderClass} shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl"></div>
    {React.cloneElement(icon, { size: 22 })}
  </div>
);

const ServiceStructoPro: React.FC<ServiceStructoProProps> = ({ openLightbox }) => {
  const [selectedModule, setSelectedModule] = useState<any | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "StructoPro - Plataforma de Cálculo Estructural | KONTE";
  }, []);

  return (
    <div className="pt-24 pb-16 bg-[#040814] min-h-screen transition-colors duration-300 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#090b10] via-[#0b1e45] to-[#07122a] py-20 overflow-hidden border-b border-[rgba(245,200,66,0.2)]">
        {/* Malla Hexagonal de fondo */}
        <div className="absolute inset-0 opacity-10"
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413263' viewBox='0 0 60 103.92304845413263' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.923L0 86.602V51.961L30 34.641l30 17.32v34.641L30 103.923zM30 69.282L15 60.622v-17.32L30 34.641l15 8.66v17.32L30 69.282zM15 25.981L0 17.32V0l15-8.66l15 8.66v17.32L15 25.981zm30 0L30 17.32V0l15-8.66l15 8.66v17.32L45 25.981zM15 77.942L0 69.282V51.961l15-8.66l15 8.66v17.32L15 77.942zm30 0L30 69.282V51.961l15-8.66l15 8.66v17.32L45 77.942z' fill='%23f5c842' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`}} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="inline-flex items-center gap-2 bg-[#f5c842]/10 border border-[#f5c842]/30 text-[#f5c842] text-xs sm:text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6 relative z-10 shadow-[0_0_15px_rgba(245,200,66,0.15)]">
            <Zap size={16} /> LA NORMA ES EL LÍMITE
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 uppercase" style={{fontFamily: "'Cabinet Grotesk', 'Inter', sans-serif"}}>
            STRUCTO<span className="text-[#f5c842]">PRO</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4 font-medium leading-relaxed">
            Ingeniería estructural multinorma con gestión operativa y control financiero integrado.
          </p>
          <p className="text-base text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            La suite definitiva para ingenieros y constructores. Diseña estructuras bajo 14 normativas internacionales, exporta planos BIM/DXF y conecta el presupuesto con el control de obra ERP en tiempo real desde tu navegador.
          </p>
          
          <div className="flex flex-col items-center gap-4 relative z-10 mt-12 pb-6">
            <a 
              href="https://structopro-app.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#c99f24] to-[#f5c842] hover:from-[#f5c842] hover:to-[#ffdf70] text-[#090b10] px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-[0_0_40px_-5px_rgba(245,200,66,0.5)] active:scale-95"
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
      <div className="bg-[#050b14] border-b border-[#0b1e45] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 items-center">
            
            {/* Destacados Core */}
            <span className="flex items-center gap-2 bg-[#f5c842]/10 border border-[#f5c842]/30 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(245,200,66,0.1)]">
              <img src="https://flagpedia.net/data/flags/mini/co.png" alt="Colombia" className="h-3.5 rounded-sm shadow-sm" />
              <span className="text-white font-bold tracking-widest text-sm">NSR-10</span>
            </span>
            <span className="flex items-center gap-2 bg-[#f5c842]/10 border border-[#f5c842]/30 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(245,200,66,0.1)]">
              <img src="https://flagpedia.net/data/flags/mini/us.png" alt="USA" className="h-3.5 rounded-sm shadow-sm" />
              <span className="text-white font-bold tracking-widest text-sm">ACI 318</span>
            </span>

            <span className="hidden md:inline-block text-[#1458f5]">|</span>

            {/* Resto de Normas */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-slate-400 font-semibold uppercase tracking-widest text-xs items-center">
               <span className="flex items-center gap-1.5"><img src="https://flagpedia.net/data/flags/mini/ec.png" alt="Ecuador" className="h-2.5 rounded-sm" /> NEC</span>
               <span className="text-slate-700">•</span>
               <span className="flex items-center gap-1.5"><img src="https://flagpedia.net/data/flags/mini/pe.png" alt="Peru" className="h-2.5 rounded-sm" /> E.060</span>
               <span className="text-slate-700">•</span>
               <span className="flex items-center gap-1.5"><img src="https://flagpedia.net/data/flags/mini/mx.png" alt="Mexico" className="h-2.5 rounded-sm" /> NTC</span>
               <span className="text-slate-700">•</span>
               <span className="flex items-center gap-1.5"><img src="https://flagpedia.net/data/flags/mini/eu.png" alt="UE" className="h-2.5 rounded-sm" /> EN (Eurocódigo)</span>
            </div>

            <span className="hidden lg:inline-block text-[#1458f5]">|</span>

            {/* Entregables */}
            <span className="flex items-center gap-1.5 text-[#f5c842] font-bold uppercase tracking-widest text-xs">
              <FileText size={16}/> DOCX + DXF + IFC
            </span>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-[#090b10] py-14 border-b border-[#0b1e45]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "33", suffix: "+", label: "Módulos activos", color: "text-white" },
              { value: "14", suffix: "", label: "Normas soportadas", color: "text-[#f5c842]" },
              { value: "ERP",  suffix: "",  label: "Control Financiero", color: "text-white" },
              { value: "100",  suffix: "%", label: "Cloud Workspace", color: "text-[#1458f5]" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`text-5xl font-black ${s.color} leading-none`} style={{fontFamily: "'Rajdhani', sans-serif"}}>{s.value}<span className="text-2xl">{s.suffix}</span></span>
                <span className="text-sm text-slate-400 mt-2 font-medium tracking-wide uppercase">{s.label}</span>
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
              icon: <ShieldCheck className="text-[#f5c842]" />,
              title: "Diseño con criterio normativo",
              desc: "Desarrollado para apoyar procesos de cálculo estructural con enfoque en NSR-10 y ACI 318, garantizando memorias trazables."
            },
            {
              icon: <Download className="text-[#1458f5]" />,
              title: "Entregables completos BIM",
              desc: "Obtén memorias paso a paso en DOCX, planos de despiece en DXF y modelos 3D en formato abierto IFC."
            },
            {
              icon: <Laptop className="text-[#f5c842]" />,
              title: "Trabajo desde la nube",
              desc: "Ejecuta cálculos desde cualquier navegador, sin depender de instalaciones complejas ni equipos especializados."
            },
            {
              icon: <Clock className="text-[#1458f5]" />,
              title: "Velocidad y rentabilidad",
              desc: "Reduce el tiempo en iteraciones y enlaza directamente los resultados con el presupuesto y control de obra."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-[#0b1e45]/30 p-8 rounded-2xl border border-[rgba(20,88,245,0.2)] hover:border-[#f5c842]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group">
              <div className="mb-6">
                <HexIcon icon={feature.icon} colorClass={i % 2 === 0 ? "text-[#f5c842]" : "text-[#1458f5]"} bgClass={i % 2 === 0 ? "bg-[#f5c842]/10" : "bg-[#1458f5]/10"} borderClass={i % 2 === 0 ? "border-[#f5c842]/30" : "border-[#1458f5]/30"} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 pr-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Módulos de Cálculo - FICHAS DE ALCANCE */}
      <section className="bg-[#07122a] py-24 border-y border-[#0b1e45]" id="modulos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Catálogo de Soluciones</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Selecciona un módulo para explorar su alcance técnico, normativas aplicadas y tipo de entregables generados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {MODULES_DATA.map((mod, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedModule(mod)}
                className="bg-[#090b10] flex flex-col p-6 rounded-xl border border-[rgba(20,88,245,0.3)] hover:border-[#f5c842] hover:shadow-[0_8px_24px_rgba(245,200,66,0.15)] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-4">
                  <HexIcon icon={mod.icon} colorClass="text-[#f5c842]" bgClass="bg-[#f5c842]/5" borderClass="border-[#f5c842]/20" />
                  <h4 className="font-bold text-white leading-tight text-lg">{mod.title}</h4>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">{mod.desc}</p>
                <div className="text-[#1458f5] text-sm font-bold flex items-center gap-2 group-hover:text-[#f5c842] transition-colors mt-auto">
                  Ver alcance <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal / Ficha de Alcance */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedModule(null)}>
          <div className="bg-[#0b1e45] border border-[rgba(245,200,66,0.3)] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)]" onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="p-6 border-b border-[rgba(255,255,255,0.05)] flex justify-between items-start bg-gradient-to-r from-[#090b10] to-[#0b1e45]">
              <div className="flex items-center gap-4">
                <HexIcon icon={selectedModule.icon} />
                <div>
                  <div className="text-xs font-bold text-[#1458f5] tracking-widest uppercase mb-1">Módulo de Ingeniería</div>
                  <h3 className="text-2xl font-black text-white">{selectedModule.title}</h3>
                </div>
              </div>
              <button onClick={() => setSelectedModule(null)} className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-lg">
                <X size={24} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8 space-y-8">
              <div>
                <h4 className="flex items-center gap-2 font-bold text-[#f5c842] mb-3 uppercase tracking-wider text-sm"><CheckCircle2 size={18}/> ¿Qué resuelve?</h4>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">{selectedModule.solves}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#1458f5] mb-3 uppercase tracking-wider text-sm"><ShieldCheck size={18}/> ¿Qué verifica?</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">{selectedModule.verifies}</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-emerald-400 mb-3 uppercase tracking-wider text-sm"><FileText size={18}/> Entregables</h4>
                  <p className="text-slate-300 leading-relaxed text-sm">{selectedModule.delivers}</p>
                </div>
              </div>

              <div className="bg-[#090b10] p-5 rounded-xl border border-[rgba(255,255,255,0.05)]">
                <h4 className="flex items-center gap-2 font-bold text-white mb-2 uppercase tracking-wider text-xs"><Users size={16} className="text-slate-400"/> Perfil de usuario</h4>
                <p className="text-slate-400 text-sm">{selectedModule.forWho}</p>
              </div>
              
              <div className="flex items-center gap-2 pt-2">
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-300">CLOUD WORKSPACE</span>
                <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-bold text-orange-300">PLAN PREMIUM</span>
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="p-6 bg-[#090b10] border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://structopro-app.streamlit.app/${selectedModule.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#f5c842] hover:bg-[#c99f24] text-black font-bold py-3 px-6 rounded-xl transition-colors shadow-lg"
              >
                Abrir módulo en la App <ExternalLink size={18} />
              </a>
              <a 
                href="https://wa.me/573204468049?text=Hola%20KONTE%2C%20quisiera%20solicitar%20un%20ejemplo%20de%20entregable%20del%20módulo%20estructural."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-slate-600 hover:border-slate-400 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                Solicitar demo documental
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Planes y Precios */}
      <section className="py-24 bg-[#040814] border-t border-[#0b1e45]" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">Planes de Suscripción</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Comienza gratis o accede a todas las capacidades BIM y entregables exhaustivos con StructoPro Premium.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-[#090b10] rounded-3xl p-8 border border-[rgba(20,88,245,0.3)] shadow-sm flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-2">Evaluación Básico</h3>
              <p className="text-slate-400 mb-6 text-sm">Para pruebas de la plataforma y revisiones rápidas.</p>
              <div className="text-4xl font-black text-white mb-6 font-['Rajdhani']">Gratis</div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Acceso a módulos básicos</li>
                <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Cálculos en pantalla</li>
                <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Materiales estándar</li>
                <li className="flex items-center gap-3 text-slate-600 line-through"><CheckCircle2 className="w-5 h-5" /> Memorias DOCX completas</li>
                <li className="flex items-center gap-3 text-slate-600 line-through"><CheckCircle2 className="w-5 h-5" /> Exportación DXF y BIM (IFC)</li>
              </ul>
              <a href="https://structopro-app.streamlit.app" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#0b1e45] hover:bg-[#1458f5] text-white font-bold py-4 rounded-xl transition-colors">
                Ingresar al Workspace
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-[#0b1e45] to-[#090b10] rounded-3xl p-8 border border-[#f5c842] shadow-[0_0_40px_rgba(245,200,66,0.15)] flex flex-col h-full relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5c842] text-black font-bold px-6 py-1.5 rounded-full text-xs uppercase tracking-wider shadow-lg">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold text-[#f5c842] mb-2">Profesional / Premium</h3>
              <p className="text-blue-200 mb-6 text-sm">Potencia total para consultoría e ingeniería estructural.</p>
              <div className="text-4xl font-black text-white mb-2 font-['Rajdhani']">$26.600 <span className="text-lg font-bold text-slate-400 font-sans">COP / mes</span></div>
              <p className="text-xs text-blue-300 mb-6 italic">Facturación recurrente mensual. Cancela cuando quieras.</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-[#f5c842]" /> Acceso a los 33+ módulos avanzados</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-[#f5c842]" /> Descarga ilimitada de Memorias DOCX</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-[#f5c842]" /> Exportación CAD DXF y modelos BIM 3D</li>
                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="w-5 h-5 text-[#f5c842]" /> Acceso a Suite ERP de Control de Obra</li>
              </ul>
              
              {/* PAYMENT BUTTONS */}
              <div className="flex flex-col gap-3 mt-auto">
                <a href="https://mpago.li/1hbuwpu" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#009EE3] hover:bg-[#008ACA] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg border border-[#008ACA]">
                  Suscribirse con Mercado Pago
                </a>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick-subscriptions&business=cagch2000@hotmail.com&item_name=Suscripcion+Premium+StructoPro&a3=6.99&p3=1&t3=M&src=1&sra=1&currency_code=USD" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#003087] hover:bg-[#001c56] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg border border-[#001c56]">
                  Suscribirse con PayPal ($6.99 USD)
                </a>
                <a href="https://wa.me/573204468049?text=Hola%20KONTE%2C%20estoy%20interesado%20en%20adquirir%20la%20licencia%20Premium%20de%20StructoPro." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-bold py-3 rounded-xl transition-colors border border-slate-600">
                  Contactar Asesor Comercial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceStructoPro;
