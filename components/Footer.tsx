import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Twitter, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  setPage?: any; // Mantenido para compatibilidad con App.tsx
}

const Footer: React.FC<FooterProps> = () => {
  const generalWaLink = "https://wa.me/573227696769?text=Hola%20KONTE%2C%20deseo%20cotizar%20un%20tr%C3%A1mite%20de%20licencia%20de%20construcci%C3%B3n.";

  return (
    <footer className="bg-gray-900 border-t border-gray-700 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-8">
            <Link to="/" className="text-3xl font-extrabold text-primary dark:text-blue-400 tracking-tighter mb-6 cursor-pointer block">
              KONTE
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Ingeniería estructural y licencias de construcción en Colombia. Tramitamos licencias, diseñamos estructuras NSR-10 y ejecutamos proyectos desde Duitama, Boyacá para todo el país.
            </p>
            
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-4">Soluciones</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios" className="text-sm font-semibold text-primary dark:text-blue-400 hover:text-secondary dark:hover:text-blue-300 transition-colors text-left">
                  Licencias de Construcción
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left">
                  Consultoría General
                </Link>
              </li>
              <li>
                <Link to="/servicios/construccion-estaciones-servicio" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left">
                  Estaciones de Servicio
                </Link>
              </li>
              <li>
                <Link to="/servicios/gestion-ani" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left">
                  Proyectos ANI
                </Link>
              </li>
              <li>
                <Link to="/servicios/propiedad-horizontal" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left">
                  Propiedad Horizontal
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left">
                  Tanques de Almacenamiento
                </Link>
              </li>
          <li>
            <Link to="/servicios/tecnologia" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left flex items-center gap-1.5">
              <span>Tecnología Digital</span>
            </Link>
          </li>
          <li>
            <Link to="/servicios/structopro" className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors text-left flex items-center gap-1.5 mt-1">
              StructoPro <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded uppercase tracking-wider">Nuevo</span>
            </Link>
          </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/nosotros" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors text-left">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary dark:text-blue-400 shrink-0" />
                <span className="text-sm text-gray-400">Calle 14 # 16 48 Ofc 402, Duitama, Boyaca </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/573227696769" className="text-sm text-white font-bold hover:text-green-400 transition-colors">+57 322 769 6769 <span className="text-xs text-green-400 font-normal tracking-wide">(WhatsApp Principal)</span></a>
                  <a href="tel:+573204468049" className="text-xs text-gray-400 hover:text-white transition-colors">+57 320 446 8049 <span className="font-normal tracking-wide">(Línea alterna)</span></a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary dark:text-blue-400 shrink-0" />
                <a href="mailto:contacto@konteingenieria.com" className="text-sm text-white hover:text-blue-300 transition-colors font-semibold">contacto@konteingenieria.com</a>
              </li>
            </ul>

            {/* Functional WhatsApp Button */}
            <a 
              href={generalWaLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg w-full justify-center md:justify-start transform hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[0.65rem] uppercase tracking-wider opacity-90 mb-0.5">¿Necesitas ayuda?</span>
                <span className="text-sm whitespace-nowrap">Contactar por WhatsApp</span>
              </div>
            </a>

            {/* Acceso Rápido QR KONTE Oficial con Casco */}
            <div className="mt-5 p-3.5 bg-gray-950/80 border border-gray-800 rounded-xl flex items-center gap-3.5 hover:border-gray-700 transition-colors">
              <div className="bg-white p-1 rounded-lg shrink-0 border border-[#f5c842]/40 shadow-sm">
                <img 
                  src="/images/QR_Konte_Oficial_Casco.png" 
                  alt="QR Oficial KONTE Ingeniería con Casco" 
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">
                  KONTE en tu Móvil
                </div>
                <div className="text-[11px] text-[#f5c842] font-semibold mt-0.5">
                  Escanea para contacto directo
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                  Acceso a web oficial y soporte
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left font-medium">
            © KONTE, Todos los Derechos Reservados. Designed By Cesar Giraldo
          </p>
          <div className="flex flex-wrap justify-end gap-x-6 gap-y-2">
            <Link to="/terminos" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                Términos de Uso
              </Link>
            <Link to="/privacidad" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                Política de Privacidad
              </Link>
            <Link to="/servicios/structopro#aviso-legal-structopro" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
