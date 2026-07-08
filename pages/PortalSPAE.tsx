import React from 'react';

const PortalSPAE: React.FC = () => {
  return (
    <div className="w-full" style={{ height: 'calc(100vh - 80px)' }}>
      <iframe
        src="https://structopro-app.streamlit.app/Registro_y_Seguimiento_ISC_SPAE?embed=true"
        title="Portal SPAE - Sistema de Seguimiento y Apoyo a la Ejecución"
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
        allow="fullscreen"
      />
    </div>
  );
};

export default PortalSPAE;
