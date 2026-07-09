import React from 'react';

const PortalSPAE: React.FC = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <iframe 
        src="https://spae-standalone-afywudedgwmqxj4qgb3qvn.streamlit.app/?embed=true"
        title="Portal SPAE - Konte Ingeniería"
        className="absolute top-0 left-0 w-full border-0"
        style={{ height: 'calc(100% + 45px)' }}
        allowFullScreen
      />
    </div>
  );
};

export default PortalSPAE;
