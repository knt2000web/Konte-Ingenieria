import React from 'react';
import { Facebook, Linkedin, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const handleNavigation = (e: React.MouseEvent, page: Page) => {
    e.preventDefault();
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 pr-8">
            <div className="text-3xl font-extrabold text-primary tracking-tighter mb-6 cursor-pointer" onClick={(e) => handleNavigation(e, Page.HOME)}>
              KONTE
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Líderes en consultoría de ingeniería y construcción. Transformamos visiones en infraestructuras tangibles con los más altos estándares de calidad y cumplimiento normativo.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Soluciones</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={(e) => handleNavigation(e, Page.SERVICES)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Consultoría General
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavigation(e, Page.SERVICE_ANI)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Proyectos ANI
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavigation(e, Page.SERVICES)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Ingeniería Vial
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavigation(e, Page.SERVICES)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Construcción
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={(e) => handleNavigation(e, Page.ABOUT)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavigation(e, Page.ABOUT)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Cultura Corporativa
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavigation(e, Page.ABOUT)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Sostenibilidad
                </button>
              </li>
              <li>
                <button onClick={(e) => handleNavigation(e, Page.CONTACT)} className="text-sm text-gray-600 hover:text-primary transition-colors text-left">
                  Trabaja con nosotros
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-gray-600">Calle 14 # 16 48 Ofc 402, Duitama, Boyaca </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-gray-600">+57 (320) 4468049</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-gray-600">konte2000@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © 2024 KONTE Ingeniería. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-primary">Política de Privacidad</a>
            <a href="#" className="text-xs text-gray-500 hover:text-primary">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;