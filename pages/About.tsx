import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { Building, Globe, Shield, MapPin, Target, Users } from 'lucide-react';

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

      {/* Trayectoria & Cobertura */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Cobertura Estratégica</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Nuestra base de operaciones en Duitama nos ha permitido consolidar una fuerte presencia en el centro y oriente del país, ejecutando obras y resolviendo cuellos de botella normativos para las empresas más exigentes.
            </p>
            <ul className="space-y-4">
              {['Boyacá (Sede principal)', 'Casanare', 'Cundinamarca', 'Tolima', 'Operación a nivel nacional para proyectos especiales'].map((region, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-200 font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {region}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            <Globe className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Nuestra Promesa</h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              "Trascendemos el rol tradicional del contratista. Somos una firma de ingeniería dedicada a resolver desafíos técnicos complejos, integrando ejecución impecable, rigor normativo y desarrollo tecnológico."
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-slate-700">
              <Users className="w-6 h-6 text-slate-400" />
              <span className="text-sm font-medium text-slate-300">Equipo Directivo KONTE</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
