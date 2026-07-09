import React from 'react';
import { ExternalLink } from 'lucide-react';

const PortalSPAE: React.FC = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Portal de Seguimiento <span className="text-blue-600">SPAE</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Sistema Integrado de Registro y Apoyo a la Ejecución de Proyectos. 
            Acceda a la plataforma segura para visualizar el portafolio, gestionar revisiones y generar reportes.
          </p>
        </div>

        <a 
          href="https://structopro-app.streamlit.app/~/+/Registro_y_Seguimiento_ISC_SPAE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
        >
          Ingresar al Portal SPAE
          <ExternalLink className="w-5 h-5" />
        </a>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
          Al hacer clic, será redirigido a nuestra plataforma segura en la nube. 
          Deberá iniciar sesión con su correo autorizado.
        </p>
      </div>
    </div>
  );
};

export default PortalSPAE;
