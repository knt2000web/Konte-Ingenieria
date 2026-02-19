import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search, Globe, Phone, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  currentPage?: any; // Mantenido para compatibilidad temporal
  setPage?: any;     // Mantenido para compatibilidad temporal
  onLoginClick: () => void;
  isLoggedIn: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, isLoggedIn, isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para saber si un link está activo
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { label: 'INICIO', path: '/' },
    { label: 'NOSOTROS', path: '/nosotros' },
    { label: 'SERVICIOS', path: '/servicios' },
    { label: 'PROYECTOS', path: '/proyectos' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg py-2' : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-3 border-b border-gray-100 dark:border-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo con Link real */}
          <Link to="/" className="flex flex-col cursor-pointer group">
            <span className="text-3xl font-extrabold text-primary dark:text-blue-400 tracking-tighter leading-none group-hover:text-secondary dark:group-hover:text-blue-300 transition-colors">
              KONTE
            </span>
            <span className="text-[0.6rem] font-bold text-gray-500 dark:text-gray-400 tracking-[0.15em] uppercase -mt-0.5 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              Construcción, Consultoría & Tecnología
            </span>
          </Link>

          {/* Navegación Escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-bold transition-colors ${
                  isActive(link.path) ? 'text-primary dark:text-blue-400 border-b-2 border-primary dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Botón Contacto */}
            <Link 
                to="/contacto"
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
                <Phone className="w-4 h-4 fill-current" />
                CONTÁCTENOS
            </Link>
            
            {/* Action Icons */}
            <div className="flex items-center space-x-4 border-l pl-6 border-gray-200 dark:border-gray-700">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300 transition-colors"
                aria-label="Alternar modo oscuro"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <div className="flex items-center text-gray-500 dark:text-gray-400 cursor-pointer hover:text-primary dark:hover:text-blue-400 text-xs font-medium">
                <Globe className="w-4 h-4 mr-1" />
                <span>ES</span>
              </div>
              <Search className="w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-primary dark:hover:text-blue-400" />
              
              {isLoggedIn ? (
                 <Link 
                   to="/dashboard"
                   className="flex items-center gap-2 bg-primary dark:bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                 >
                   <User className="w-4 h-4" />
                   MI CUENTA
                 </Link>
              ) : (
                <button 
                  onClick={onLoginClick}
                  className="flex items-center gap-2 bg-primary dark:bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-secondary dark:hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <User className="w-4 h-4" />
                  ACCESO
                </button>
              )}
            </div>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleDarkMode}
                className="p-1 rounded-full text-gray-600 dark:text-gray-300"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 dark:text-gray-300">
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                   isActive(link.path) ? 'bg-primary/10 dark:bg-blue-900/30 text-primary dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30"
              >
                CONTÁCTENOS
            </Link>
            <div className="border-t border-gray-100 dark:border-gray-800 mt-4 pt-4">
               {isLoggedIn ? (
                  <Link 
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full bg-primary dark:bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    IR AL DASHBOARD
                  </Link>
               ) : (
                  <button 
                    onClick={() => {
                      onLoginClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary dark:bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    ACCESO CLIENTES
                  </button>
               )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;