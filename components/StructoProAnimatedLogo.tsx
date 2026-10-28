import React, { useState } from 'react';

interface StructoProAnimatedLogoProps {
  size?: number; // Tamaño en píxeles (default: 180)
  showText?: boolean;
  className?: string;
}

export const StructoProAnimatedLogo: React.FC<StructoProAnimatedLogoProps> = ({
  size = 180,
  showText = false,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex flex-col items-center justify-center select-none group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Resplandor ambiental de estudio (Glow radial profundo) */}
      <div 
        className="absolute rounded-full pointer-events-none transition-all duration-700 ease-out"
        style={{
          width: size * 1.6,
          height: size * 1.6,
          background: isHovered 
            ? 'radial-gradient(circle, rgba(20, 88, 245, 0.28) 0%, rgba(245, 200, 66, 0.15) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(20, 88, 245, 0.16) 0%, rgba(245, 200, 66, 0.08) 40%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />

      {/* Contenedor del Isotipo con máscara de luz metálica */}
      <div 
        className="relative overflow-hidden transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ 
          width: size, 
          height: size, 
          filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.65))',
          zIndex: 1
        }}
      >
        {/* Barrido de luz especular (Light Sweep / Sheen) */}
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 42%, rgba(255,255,255,0.65) 50%, rgba(245,200,66,0.4) 54%, transparent 65%)',
            transform: isHovered ? 'translateX(180%)' : 'translateX(-150%)',
            transition: 'transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
            mixBlendMode: 'overlay'
          }}
        />

        {/* SVG Maestro Hexagonal Enterprise */}
        <svg 
          viewBox="0 0 140 140" 
          className="w-full h-full overflow-visible"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sp_hex_bg" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0b1e45"/>
              <stop offset="100%" stopColor="#07122a"/>
            </linearGradient>
            <linearGradient id="sp_gold_beam" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffdf70"/>
              <stop offset="45%" stopColor="#f5c842"/>
              <stop offset="100%" stopColor="#c99f24"/>
            </linearGradient>
            <filter id="sp_node_glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f5c842" floodOpacity="0.8"/>
            </filter>
          </defs>

          {/* Base Hexagonal con bisel azul estructural */}
          <polygon 
            points="70,4 127,37 127,103 70,136 13,103 13,37" 
            fill="url(#sp_hex_bg)" 
            stroke="#1e3a8a" 
            strokeWidth="1.8"
            className="transition-colors duration-500 group-hover:stroke-[#3b82f6]"
          />

          {/* Retícula interna de rigidez nodal (Estructural) */}
          <line x1="70" y1="4" x2="70" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <line x1="127" y1="103" x2="70" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <line x1="13" y1="103" x2="70" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

          {/* Viga Continua S Dorada (Acero Estructural de Alta Ductilidad) */}
          <path 
            d="M 94,36 L 56,36 C 41,36 38,48 38,58 C 38,68 49,70 60,70 L 80,70 C 91,70 102,72 102,82 C 102,92 99,104 84,104 L 46,104" 
            fill="none" 
            stroke="url(#sp_gold_beam)" 
            strokeWidth="16" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-all duration-300 group-hover:brightness-110"
          />

          {/* Nodos Estructurales (Juntas Soldadas / Empotradas en Blanco Puro) */}
          <g filter={isHovered ? "url(#sp_node_glow)" : undefined} className="transition-all duration-300">
            <polygon points="94,26 104,36 94,46 84,36" fill="#ffffff"/>
            <polygon points="38,48 48,58 38,68 28,58" fill="#ffffff"/>
            <polygon points="70,60 80,70 70,80 60,70" fill="#ffffff"/>
            <polygon points="102,72 112,82 102,92 92,82" fill="#ffffff"/>
            <polygon points="46,94 56,104 46,114 36,104" fill="#ffffff"/>
          </g>
        </svg>
      </div>

      {/* Sombra de contacto inferior */}
      <div 
        className="rounded-full transition-all duration-500 ease-out"
        style={{
          width: size * 0.8,
          height: 12,
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, transparent 75%)',
          marginTop: -6,
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          opacity: isHovered ? 0.9 : 0.65
        }}
      />

      {/* Texto opcional */}
      {showText && (
        <div className="mt-4 text-center">
          <div className="font-extrabold text-2xl text-white tracking-wider font-['Montserrat']">
            STRUCTO<span className="text-[#f5c842]">PRO</span>
          </div>
          <div className="text-[11px] font-bold text-slate-400 tracking-[0.25em] uppercase mt-1">
            La norma es el límite
          </div>
        </div>
      )}
    </div>
  );
};

export default StructoProAnimatedLogo;
