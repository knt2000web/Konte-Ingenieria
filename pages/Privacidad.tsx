import React, { useEffect } from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacidad: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Cómo protegemos y gestionamos tu información
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-[#0b1120] p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="flex items-start gap-4 mb-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800/30">
            <Eye className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 m-0">Transparencia y Seguridad</h3>
              <p className="text-gray-700 dark:text-gray-300 m-0">
                En KONTE Ingeniería nos tomamos muy en serio la privacidad de tus datos de usuario y la confidencialidad de tus proyectos.
              </p>
            </div>
          </div>

          <h2>1. Recopilación de Información</h2>
          <p>
            StructoPro y KONTE Ingeniería recopilan la información suministrada voluntariamente por el usuario durante el proceso de registro, suscripción y uso operativo de la plataforma (nombre, correo electrónico, teléfono, datos de facturación).
          </p>

          <h2>2. Uso de la Información</h2>
          <p>
            Los datos recopilados podrán ser utilizados exclusivamente para:
          </p>
          <ul>
            <li>Fines de contacto y soporte técnico.</li>
            <li>Mejora continua del servicio y personalización de la experiencia.</li>
            <li>Seguimiento comercial y gestión de suscripciones.</li>
            <li>Gestión operativa general de la plataforma.</li>
          </ul>

          <h2>3. Confidencialidad de Proyectos</h2>
          <p>
            Los datos técnicos, memorias, planos y modelos procesados a través de nuestros sistemas Cloud son de estricta propiedad del usuario. KONTE garantiza que <strong>la información no será utilizada para fines ajenos</strong> a la prestación del servicio sin causa justificada o autorización expresa, ni será compartida con terceros para propósitos comerciales.
          </p>

          <h2>4. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal y técnica contra accesos no autorizados, alteración, divulgación o destrucción. Las conexiones utilizan cifrado estándar de la industria (SSL/TLS).
          </p>

          <h2>5. Derechos del Usuario</h2>
          <p>
            Usted tiene derecho a solicitar acceso, rectificación, actualización o eliminación de sus datos personales en cualquier momento, comunicándose a través de nuestros canales de soporte oficiales (contacto@konteingenieria.com).
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
            Última actualización: Mayo de 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
