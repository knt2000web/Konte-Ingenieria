import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { Building, Globe, Shield, MapPin, Target, Users, ArrowRight } from 'lucide-react';

interface AboutProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const About: React.FC<AboutProps> = ({ openLightbox }) => {
  const navigate = useNavigate();

  return (
    <main className="animate-in fade-in duration-700 bg-white dark:bg-gray-900 pb-20">
      
      {/* Editorial Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">Firma Híbrida</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Construcción, consultoría y tecnología desde Boyacá para Colombia.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              KONTE no es una firma tradicional de ingeniería civil. Nacimos en la obra y hemos evolucionado para integrar el diseño estructural riguroso con el desarrollo de soluciones digitales que optimizan el sector técnico industrial.
            </p>
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Sede principal en Duitama. Operación nacional.</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] cursor-pointer group" onClick={() => openLightbox(0, ["/images/home/konte_cafe_clean.jpg"])}>
              <img 
                src="/images/home/konte_cafe_clean.jpg" 
                alt="Directivos KONTE Ingeniería" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Identidad Block */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Tres pilares de autoridad</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Nuestra estructura operativa nos permite acompañar a nuestros clientes en todas las fases de sus proyectos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <Building className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Construcción</h3>
              <p className="text-slate-600 dark:text-slate-300">15+ años ejecutando proyectos de saneamiento, infraestructura hospitalaria y adecuaciones corporativas con rigor técnico.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Consultoría</h3>
              <p className="text-slate-600 dark:text-slate-300">Gestión normativa ante entidades gubernamentales (ANI, Curadurías) y diseño estructural bajo la estricta norma NSR-10.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <Target className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Tecnología</h3>
              <p className="text-slate-600 dark:text-slate-300">Desarrollo in-house de software especializado como StructoPro, optimizando los flujos de trabajo de ingenieros y constructores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria & Cobertura Estratégica */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-primary dark:text-blue-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Despliegue Territorial & Operación Nacional
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cobertura Estratégica de Ingeniería
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mt-3 max-w-3xl leading-relaxed">
            Desde nuestra base central en Boyacá hasta los corredores viales, agroindustriales y de hidrocarburos más exigentes de Colombia, desplegamos ingeniería de precisión, cálculo sismorresistente y gestión técnica in situ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Grid de Departamentos y Alcance Operativo (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Boyacá */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider">Sede Central</span>
                <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold">Base Matriz</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Boyacá (Duitama / Tunja / Sogamoso)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Diseño estructural NSR-10, consultoría de licencias, urbanismo y centro de I+D para el software StructoPro.
              </p>
            </div>

            {/* Meta */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Llanos Orientales</span>
                <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold">En Ejecución</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Meta (Guamal / Villavicencio)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Estaciones de servicio 4G, canopies metálicos de 37 m, accesos viales RN6509, muros de contención y redes técnicas.
              </p>
            </div>

            {/* Santander */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider">Corredor Nororiente</span>
                <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded font-semibold">Región Andina</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Santander (Bucaramanga / San Gil)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Cálculo de estructuras en ladera, adecuaciones industriales y validación normativa para curadurías y entes territoriales.
              </p>
            </div>

            {/* Cundinamarca */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider">Centro del País</span>
                <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded font-semibold">Sabana & Región</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Cundinamarca & Bogotá D.C.</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Cabañas campestres alpinas sismorresistentes, modelado BIM LOD 400 y consultoría técnica de edificaciones complejas.
              </p>
            </div>

            {/* Tolima */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider">Corredor Vial 4G</span>
                <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded font-semibold">Infraestructura</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Tolima (El Guamo / Corredor Neiva)</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Puentes vehiculares modulares Bailey (CCP-14), estaciones de servicio de alto tráfico y cruces de infraestructura.
              </p>
            </div>

            {/* Casanare y Operación Nacional */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-blue-500 transition-all shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider">Sector Agroindustrial</span>
                <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded font-semibold">Nacional</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">Casanare & Proyectos Especiales</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Tanques de almacenamiento industrial (AWWA D103 / NFPA 22), obras hidráulicas y cimentaciones para proyectos en todo el país.
              </p>
            </div>

          </div>

          {/* Columna Derecha: Panel de Autoridad, Métricas y Capacidad de Ejecución (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-7 sm:p-8 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute -right-10 -top-10 w-44 h-44 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30 text-blue-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase block">Capacidad Certificada</span>
                <h3 className="text-lg font-bold text-white">Ingeniería sin Fronteras</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              No somos un contratista tradicional ni un intermediario pasivo. Integramos modelado matricial algorítmico, verificación geotécnica y presencia técnica in situ para desatar nudos normativos y constructivos de alta complejidad.
            </p>

            {/* Matriz de Indicadores de Autoridad */}
            <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <span className="text-gray-400 block text-[10px] uppercase">Experiencia</span>
                <span className="text-lg font-bold text-white">+26 Años</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <span className="text-gray-400 block text-[10px] uppercase">Presencia Activa</span>
                <span className="text-lg font-bold text-blue-400">6 Dptos.</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <span className="text-gray-400 block text-[10px] uppercase">Normativa</span>
                <span className="text-sm font-bold text-white">NSR-10 / CCP-14</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <span className="text-gray-400 block text-[10px] uppercase">Entregables BIM</span>
                <span className="text-sm font-bold text-emerald-400">LOD 400 IFC</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Equipo Directivo KONTE</span>
              </div>
              <a
                href="https://wa.me/573227696769?text=Hola%20KONTE%2C%20quisiera%20consultar%20la%20viabilidad%20y%20cobertura%20de%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors shadow-lg"
              >
                <span>Consultar Proyecto</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>
      
    </main>
  );
};

export default About;
