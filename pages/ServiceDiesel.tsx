
import React from 'react';
import { Page } from '../types';
import { Droplets, AlertTriangle, Search, CheckCircle2, Zap, FileCheck, ShieldCheck, ZoomIn, ArrowRight, Settings } from 'lucide-react';

interface ServiceDieselProps {
  setPage: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceDiesel: React.FC<ServiceDieselProps> = ({ setPage, openLightbox }) => {
  // WhatsApp Link for Fuel-Shield
  const waLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20solicito%20el%20Diagn%C3%B3stico%20Clear%20%26%20Bright%20para%20mi%20EDS.";

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-gray-50 dark:bg-bg-dark">
      {/* 1. Hero Section - KONTE Fuel-Shield */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-gray-50 dark:to-bg-dark pt-32 pb-12 overflow-hidden relative">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 text-orange-400 mb-6 text-sm font-extrabold tracking-widest uppercase animate-in slide-in-from-top-4 duration-700 bg-slate-800/50 px-4 py-2 rounded-full border border-orange-500/30">
              <ShieldCheck className="w-5 h-5" />
              <span>Ingeniería Forense de Hidrocarburos</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl max-w-4xl mx-auto">
              KONTE <span className="text-orange-500">Fuel-Shield</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-8 max-w-3xl mx-auto">
              Blindaje Jurídico e Ingeniería Diésel Euro VI
            </h2>
            
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-4xl mx-auto">
              Detenemos la biocorrosión ácida antes de que destruya sus inyectores Common Rail. <br className="hidden md:block"/>
              <strong className="text-white">No vendemos filtros, vendemos protección de activos y cumplimiento ISO 4406.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2 justify-center"
              >
                <Search className="w-5 h-5" /> SOLICITAR DIAGNÓSTICO
              </a>
              <button 
                  onClick={() => setPage(Page.CONTACT)}
                  className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg backdrop-blur-sm transition-all"
              >
                CONTACTAR INGENIERO
              </button>
            </div>

            {/* LARGE CENTERED INFOGRAPHIC IMAGE */}
            <div className="relative group max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute inset-0 bg-orange-500/20 rounded-2xl blur-3xl group-hover:bg-orange-500/30 transition-all duration-500 -z-10"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700/50 bg-slate-900">
                    <img 
                      src="https://i.imgur.com/eZh9AGz.jpeg" 
                      alt="Infografía Causa y Efecto Diesel" 
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => openLightbox(0, ["https://i.imgur.com/eZh9AGz.jpeg"])}
                    />
                    
                    {/* Overlay Hint */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                       <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                          <ZoomIn className="w-4 h-4" /> Clic para ampliar detalles
                       </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 text-xs mt-3 uppercase tracking-wider font-semibold">
                    Análisis Técnico: Causa, Efecto y Falla Mecánica
                </p>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 mb-20 mt-12">
        
        {/* 2. El Problema Forense - TEXT DETAILS RESTORED */}
        <div className="bg-white dark:bg-bg-dark-card rounded-xl shadow-xl p-8 md:p-12 border-t-8 border-red-600 mb-16">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">La Amenaza Química Invisible</h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-medium">
               La eliminación del azufre en el Diésel de 15 PPM (ULSD) retiró el biocida natural del combustible, dejando el tanque expuesto.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: CAUSA */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-bl-lg text-xs font-bold text-slate-600 dark:text-slate-300">1. CAUSA</div>
                 <div className="bg-red-100 dark:bg-red-900/40 w-16 h-16 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-6 mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">DESPROTECCIÓN</h3>
                 <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4 leading-relaxed">
                   Al reducir el azufre, se elimina la barrera natural contra bacterias. El agua libre (por condensación) crea el hábitat perfecto para microorganismos.
                 </p>
              </div>

              {/* Card 2: EFECTO */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-bl-lg text-xs font-bold text-slate-600 dark:text-slate-300">2. EFECTO</div>
                 <div className="bg-orange-100 dark:bg-orange-900/40 w-16 h-16 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 mx-auto">
                    <Droplets className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">CONTAMINACIÓN (Lodos)</h3>
                 <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4 leading-relaxed">
                   Bacterias y hongos proliferan en la interfase agua-diésel, generando <strong>Ácido Acético</strong> y biomasa muerta (Sludge) que satura filtros.
                 </p>
                 <div className="bg-white dark:bg-black/30 p-2 rounded text-center text-xs font-mono text-orange-800 dark:text-orange-300 border border-orange-200 dark:border-orange-900 font-bold mx-auto w-fit px-4">
                   pH Ácido &lt; 5.5
                 </div>
              </div>

              {/* Card 3: FALLA */}
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-bl-lg text-xs font-bold text-slate-600 dark:text-slate-300">3. CONSECUENCIA</div>
                 <div className="bg-red-100 dark:bg-red-900/40 w-16 h-16 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mb-6 mx-auto">
                    <Settings className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">FALLA MECÁNICA</h3>
                 <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4 leading-relaxed">
                   Sedimentos micrónicos y corrosión obstruyen inyectores de alta presión (2,500 bar), causando reparaciones costosas y paradas de flota.
                 </p>
                 <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded text-center text-xs text-red-700 dark:text-red-300 font-bold border border-red-100 dark:border-red-800">
                    Riesgo Financiero Alto
                 </div>
              </div>
           </div>
        </div>

        {/* 3. La Solución Técnica */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
           <div className="w-full lg:w-1/2">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">DIFERENCIADOR ÉLITE</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Ingeniería de Precisión KONTE</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Implementamos el <strong>Protocolo PRET-24</strong> con tiempos de respuesta inferiores a 4 horas para situaciones críticas.
              </p>
              
              <ul className="space-y-6">
                 <li className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400 mt-1 shrink-0">
                       <Search className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 dark:text-white text-lg">Diagnóstico Forense</h4>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Inspección intrínsecamente segura para identificar picaduras y biopelículas.</p>
                    </div>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400 mt-1 shrink-0">
                       <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 dark:text-white text-lg">Micro-filtración de 2 Micras</h4>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Tecnología de diálisis de combustible que elimina el 99.9% de contaminantes sólidos y agua emulsionada.</p>
                    </div>
                 </li>
                 <li className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400 mt-1 shrink-0">
                       <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 dark:text-white text-lg">Certificación ISO 4406</h4>
                       <p className="text-sm text-gray-600 dark:text-gray-400">Entrega mensual de certificado de limpieza de fluidos como respaldo legal ante reclamaciones.</p>
                    </div>
                 </li>
              </ul>
           </div>
           <div 
             className="w-full lg:w-1/2 h-[500px] relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
             onClick={() => openLightbox(0, ["https://i.imgur.com/MYOBl48.jpeg", "https://i.imgur.com/52vI0Sk.jpeg"])}
           >
              <img 
                src="https://i.imgur.com/MYOBl48.jpeg" 
                alt="Tecnología de Filtración" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                 <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-block mb-2">
                    <span className="text-white font-mono font-bold text-2xl">ISO 4406: 18/16/13</span>
                    <span className="block text-gray-300 text-xs uppercase tracking-wider mt-1">Estándar Objetivo KONTE</span>
                 </div>
                 <p className="text-white text-sm opacity-80">Garantizamos combustible más limpio que el de refinería.</p>
              </div>
           </div>
        </div>

        {/* 4. Tabla de Impacto Financiero */}
        <div className="mb-24">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Análisis de Retorno de Inversión (5 Años)</h2>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold mt-2">
                 ROI Estimado: 411%
              </div>
           </div>
           
           <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-gray-900 text-white">
                       <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider">Concepto de Costo (5 Años)</th>
                       <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider bg-red-900/50">Sin KONTE (Riesgo)</th>
                       <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider bg-green-900/50">Con KONTE (Prevención)</th>
                    </tr>
                 </thead>
                 <tbody className="bg-white dark:bg-bg-dark-card text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                    <tr>
                       <td className="p-4 md:p-6 font-medium">Cambio de Bombas Sumergibles (x2)</td>
                       <td className="p-4 md:p-6 text-red-600 font-bold">$45.000.000</td>
                       <td className="p-4 md:p-6 text-green-600 font-bold">$0</td>
                    </tr>
                    <tr>
                       <td className="p-4 md:p-6 font-medium">Limpieza de Tanques (Correctiva vs Preventiva)</td>
                       <td className="p-4 md:p-6 text-red-600 font-bold">$18.000.000</td>
                       <td className="p-4 md:p-6 text-green-600 font-bold">$8.000.000</td>
                    </tr>
                    <tr>
                       <td className="p-4 md:p-6 font-medium">Reparación Inyectores Flota (Reclamaciones)</td>
                       <td className="p-4 md:p-6 text-red-600 font-bold">$120.000.000</td>
                       <td className="p-4 md:p-6 text-green-600 font-bold">$0</td>
                    </tr>
                     <tr>
                       <td className="p-4 md:p-6 font-medium">Pérdida por Ventas (Paradas Técnicas)</td>
                       <td className="p-4 md:p-6 text-red-600 font-bold">$62.000.000</td>
                       <td className="p-4 md:p-6 text-green-600 font-bold">$0</td>
                    </tr>
                     <tr>
                       <td className="p-4 md:p-6 font-medium">Costo del Servicio KONTE (5 Años)</td>
                       <td className="p-4 md:p-6 text-red-600 font-bold">$0</td>
                       <td className="p-4 md:p-6 text-gray-900 font-bold">$48.000.000</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 font-bold text-lg">
                       <td className="p-4 md:p-6 text-gray-900 dark:text-white">Costo Total Operativo</td>
                       <td className="p-4 md:p-6 text-red-700">$245.000.000</td>
                       <td className="p-4 md:p-6 text-primary">$56.000.000</td>
                    </tr>
                    <tr className="bg-green-50 dark:bg-green-900/30 font-black text-xl border-t-2 border-green-500">
                       <td className="p-4 md:p-6 text-green-800 dark:text-green-400">AHORRO NETO</td>
                       <td className="p-4 md:p-6" colSpan={2}>
                          <div className="flex items-center gap-2 text-green-700 dark:text-green-400 justify-center">
                            <span className="text-2xl">$189.000.000 COP</span>
                          </div>
                       </td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        {/* 5. Niveles de Servicio */}
        <div className="mb-24">
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Planes de Blindaje Técnico</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bronce */}
              <div className="bg-white dark:bg-bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-orange-400"></div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Plan Bronce</h3>
                 <p className="text-sm text-gray-500 mb-6">Mantenimiento Correctivo</p>
                 <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">$8M <span className="text-sm font-normal text-gray-500">/ evento est.</span></div>
                 <ul className="space-y-3 mb-8">
                    <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" /> Micro-filtración puntual</li>
                    <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-orange-400 shrink-0" /> Eliminación de agua libre</li>
                 </ul>
                 <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Solicitar</a>
              </div>

              {/* Plata */}
              <div className="bg-white dark:bg-bg-dark-card rounded-2xl p-8 border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-2xl transition-all relative overflow-hidden transform md:-translate-y-4">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gray-400"></div>
                 <div className="absolute top-4 right-4 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-full uppercase">Recomendado</div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Plan Plata</h3>
                 <p className="text-sm text-gray-500 mb-6">Preventivo Anual</p>
                 <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">$28M <span className="text-sm font-normal text-gray-500">/ anual</span></div>
                 <ul className="space-y-3 mb-8">
                    <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> <strong>Todo lo del Plan Bronce</strong></li>
                    <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Lavado de tanques programado</li>
                    <li className="flex gap-2 text-sm text-gray-600 dark:text-gray-300"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Certificados trimestrales</li>
                 </ul>
                 <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-primary text-white rounded-lg font-bold hover:bg-secondary">Elegir Plan</a>
              </div>

              {/* Oro */}
              <div className="bg-gray-900 text-white rounded-2xl p-8 border border-yellow-500 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
                 <h3 className="text-2xl font-bold mb-2 text-yellow-500">Plan Oro</h3>
                 <p className="text-sm text-gray-400 mb-6">Blindaje Total</p>
                 <div className="text-3xl font-bold text-white mb-6">$100M+ <span className="text-sm font-normal text-gray-400">/ integral</span></div>
                 <ul className="space-y-3 mb-8">
                    <li className="flex gap-2 text-sm"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> <strong>Filtración mensual</strong></li>
                    <li className="flex gap-2 text-sm"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> Certificación ISO 4406 Mensual</li>
                    <li className="flex gap-2 text-sm"><CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" /> Protocolo PRET-24</li>
                 </ul>
                 <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-yellow-600 text-white rounded-lg font-bold hover:bg-yellow-700">Solicitar Blindaje</a>
              </div>
           </div>
        </div>

        {/* 8. Final CTA - Diagnóstico */}
        <div id="diagnostico" className="text-center max-w-4xl mx-auto mb-12">
           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">No espere a que fallen sus inyectores</h2>
           <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
             Ofrecemos una prueba de campo "Clear & Bright" gratuita para nuevos clientes corporativos.
           </p>
           <a 
             href={waLink}
             target="_blank"
             rel="noopener noreferrer"
             className="px-12 py-5 bg-primary text-white text-xl font-bold rounded-full hover:bg-secondary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto justify-center max-w-md"
           >
             AGENDAR DIAGNÓSTICO GRATIS <ArrowRight className="w-6 h-6" />
           </a>
        </div>

        {/* Legal Footer */}
        <div className="text-center border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Validación Técnica y Legal</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Todos los informes y certificaciones son avalados y firmados por ingeniero especialista con Matrícula Profesional No. <span className="font-mono font-bold text-gray-900 dark:text-white">25202-186557 CND</span>. Garantía de respaldo jurídico ante entes de control.
            </p>
        </div>

      </div>
    </div>
  );
};

export default ServiceDiesel;
