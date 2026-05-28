import React, { useEffect } from 'react';
import { FileText, Shield, CheckCircle } from 'lucide-react';

const Terminos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <FileText className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Términos de Uso
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Condiciones generales de acceso y uso de nuestras plataformas
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-[#0b1120] p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="flex items-start gap-4 mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 m-0">Alcance y Responsabilidad Profesional</h3>
              <p className="text-gray-700 dark:text-gray-300 m-0">
                El acceso y uso de StructoPro y otras herramientas de KONTE implica la aceptación de sus condiciones de uso, alcance funcional y limitaciones técnicas.
              </p>
            </div>
          </div>

          <h2>1. Naturaleza de la Herramienta</h2>
          <p>
            La plataforma se ofrece estrictamente como una <strong>herramienta de apoyo profesional</strong>. Ningún resultado, plano, memoria de cálculo o presupuesto generado por la aplicación debe considerarse como definitivo sin la revisión pertinente.
          </p>

          <h2>2. Responsabilidad del Usuario</h2>
          <p>
            El software <strong>no es un sustituto de la revisión experta</strong>, la validación normativa ni la responsabilidad técnica del usuario. Es obligación indelegable del ingeniero, arquitecto o profesional a cargo verificar que los resultados obtenidos cumplen con los requerimientos específicos del proyecto y con la normativa legal vigente aplicable a su región.
          </p>

          <h2>3. Propiedad Intelectual</h2>
          <p>
            Todos los derechos de propiedad intelectual sobre la plataforma, incluyendo código fuente, diseño, bases de datos, logotipos y algoritmos son propiedad exclusiva de KONTE Ingeniería. La suscripción otorga una licencia de uso personal, intransferible y no exclusiva mientras se mantenga activa.
          </p>

          <h2>4. Disponibilidad del Servicio</h2>
          <p>
            Si bien nos esforzamos por mantener un 99.9% de tiempo de actividad en nuestros servicios Cloud, la plataforma puede experimentar ventanas de mantenimiento programado o interrupciones imprevistas. KONTE no se hace responsable por retrasos en proyectos derivados de la inaccesibilidad temporal al servicio.
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
            Última actualización: Mayo de 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
