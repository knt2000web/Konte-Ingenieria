import React, { useEffect } from 'react';
import { 
  Calculator, FileText, Box, Ruler, BarChart3, 
  Layers, TreePine, Zap, ArrowRight, CheckCircle2,
  ShieldCheck, Clock, Download, Laptop
} from 'lucide-react';

interface ServiceStructoProProps {
  setPage?: any; // Mantenido por compatibilidad
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceStructoPro: React.FC<ServiceStructoProProps> = ({ openLightbox }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#071525] via-[#0a1e3a] to-[#0d2647] py-20 overflow-hidden">
        {/* Fondo decorativo SVG */}
        <div className="absolute inset-0 opacity-5"
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a9eff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            <Zap size={16} /> Ingeniería Digital
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Struct<span className="text-blue-400">o</span>Pro
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            La suite integral de diseño y cálculo estructural. Generación automática de memorias DOCX y planos DXF bajo normativas internacionales.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://structopro-app.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-orange-500/20 active:scale-95"
            >
              INICIAR APLICACIÓN <ArrowRight size={20} />
            </a>
            <span className="text-slate-400 text-sm">
              Acceso libre y gratuito. No requiere tarjeta de crédito.
            </span>
          </div>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">¿Por qué elegir StructoPro?</h2>
          <div className="h-1 w-24 bg-primary dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
              title: "Cumplimiento Normativo",
              desc: "Diseño riguroso basado en NSR-10 y ACI 318. Memorias paso a paso justificando cada ecuación."
            },
            {
              icon: <Download className="w-10 h-10 text-orange-500" />,
              title: "Exportación Profesional",
              desc: "Descarga instantánea de planos en formato DXF (AutoCAD) y memorias de cálculo en DOCX listos para imprimir."
            },
            {
              icon: <Laptop className="w-10 h-10 text-green-500" />,
              title: "100% en la Nube",
              desc: "Procesa cálculos complejos directamente en tu navegador sin instalar software pesado."
            },
            {
              icon: <Clock className="w-10 h-10 text-purple-500" />,
              title: "Ahorro de Tiempo",
              desc: "Automatiza iteraciones de diseño, permitiéndote tomar decisiones de ingeniería más rápidas."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Módulos de Cálculo */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-20 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Módulos Especializados</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Una plataforma unificada con 17 módulos de ingeniería cubriendo desde geotecnia básica hasta diseño sísmico avanzado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Layers />, title: "1. Cimentaciones Superficiales", desc: "Interacción estática y dinámica superficial." },
              { icon: <Box />, title: "2. Muros de Contención", desc: "Diseño por gravedad y voladizo estructural (Kontewall)." },
              { icon: <Ruler />, title: "3. Vigas y Losas Flexibles", desc: "Flexión, cortante y deflexiones en elementos de placa." },
              { icon: <Calculator />, title: "4. Columnas Concreto", desc: "Diagramas de interacción PM y diseño a flexocompresión." },
              { icon: <TreePine />, title: "5. Mampostería", desc: "Muros confinados y estructurales." },
              { icon: <BarChart3 />, title: "6. Análisis de Cargas", desc: "Avalúo de cargas verticales y horizontales." },
            ].map((mod, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 flex items-start p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 transition-colors">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-4 shrink-0">
                  {mod.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{mod.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://structopro-app.streamlit.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary dark:text-blue-400 font-bold hover:underline">
              Ver los 17 módulos completos <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Lleva tus diseños al siguiente nivel
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Únete a cientos de ingenieros que optimizan su flujo de trabajo con nuestra tecnología de cálculo en la nube.
        </p>
        <a 
          href="https://structopro-app.streamlit.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary hover:bg-secondary dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary/20 active:scale-95"
        >
          COMENZAR AHORA
          <ArrowRight size={24} />
        </a>
      </section>
    </div>
  );
};

export default ServiceStructoPro;
