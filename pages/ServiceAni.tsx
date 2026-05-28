import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface ServiceAniProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceAni: React.FC<ServiceAniProps> = ({ openLightbox }) => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-slate-50 dark:bg-gray-900 pb-20">
      
      {/* Funnel Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0" />
        <div className="absolute inset-0 opacity-20 z-0 mix-blend-overlay" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-sm font-bold tracking-wide uppercase mb-8">
            <AlertTriangle className="w-4 h-4" />
            <span>Evite sanciones y retrasos en su obra</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Gestión normativa experta ante la <span className="text-blue-400">ANI e INVIAS</span> para asegurar su obra
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Destrabamos procesos normativos, gestionamos permisos de acceso a vías nacionales e instalamos redes de servicio cumpliendo estrictamente con la normativa vigente.
          </p>

          <a
            href="https://wa.me/573223879193"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold transition-all shadow-xl hover:shadow-primary/50 text-lg"
          >
            Consultar mi caso por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Qué gestiona KONTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Soluciones Normativas Definitivas</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Nuestro equipo técnico-legal se encarga de todo el ciclo de licenciamiento para que usted se enfoque en construir.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Accesos a Predios", desc: "Permisos para estaciones de servicio, comercios y zonas industriales sobre vías concesionadas." },
            { title: "Instalación de Redes", desc: "Aprobación para cruces y paralelismos de redes eléctricas, acueducto y gas natural." },
            { title: "Obras Especiales", desc: "Gestión de viaductos, pasos peatonales y modificaciones a la infraestructura existente." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
              <FileText className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pasos y Resoluciones */}
      <section className="bg-white dark:bg-slate-800 py-20 border-y border-slate-100 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Proceso de Trámite Seguro</h2>
              <ul className="space-y-6">
                {[
                  "Diagnóstico técnico y normativo del predio.",
                  "Elaboración de planos, memorias y estudios de tránsito.",
                  "Radicación formal ante ANI / INVIAS / Concesionarios.",
                  "Defensa técnica y respuesta a observaciones.",
                  "Obtención de la Resolución de aprobación final."
                ].map((paso, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 pt-1 font-medium">{paso}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-700">
              <ShieldCheck className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Soporte Legal y Normativo</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Nuestros expedientes técnicos se estructuran bajo el estricto cumplimiento de las resoluciones vigentes que rigen el uso del derecho de vía en Colombia.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-slate-800 dark:text-slate-200">Resolución 716 de 2015 (ANI)</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-slate-800 dark:text-slate-200">Resolución 1361 de 2020 (INVIAS)</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-slate-800 dark:text-slate-200">Ley 1228 de 2008</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">¿Listo para destrabar su proyecto?</h2>
        <a
          href="https://wa.me/573223879193"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-xl hover:shadow-green-500/30 text-lg"
        >
          Hablar con un ingeniero experto
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>

    </div>
  );
};

export default ServiceAni;