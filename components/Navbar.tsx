import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Menu, X, User, Search, Globe, Phone } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  onLoginClick: () => void;
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, onLoginClick, isLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INICIO', page: Page.HOME },
    { label: 'NOSOTROS', page: Page.ABOUT },
    { label: 'SERVICIOS', page: Page.SERVICES },
    { label: 'PROYECTOS', page: Page.PROJECTS },
    // Contact removed from here to be a button
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3 border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Slogan */}
          <div className="flex flex-col cursor-pointer group" onClick={() => setPage(Page.HOME)}>
            <span className="text-3xl font-extrabold text-primary tracking-tighter leading-none group-hover:text-secondary transition-colors">
              KONTE
            </span>
            <span className="text-[0.6rem] font-bold text-gray-500 tracking-[0.15em] uppercase -mt-0.5 group-hover:text-primary transition-colors">
              Construcción, Consultoría & Tecnología
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setPage(link.page)}
                className={`text-sm font-bold transition-colors ${
                  currentPage === link.page ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Prominent Contact Button */}
            <button 
                onClick={() => setPage(Page.CONTACT)}
                className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
                <Phone className="w-4 h-4 fill-current" />
                CONTÁCTENOS
            </button>
            
            {/* Action Icons */}
            <div className="flex items-center space-x-4 border-l pl-6 border-gray-200">
              <div className="flex items-center text-gray-500 cursor-pointer hover:text-primary text-xs font-medium">
                <Globe className="w-4 h-4 mr-1" />
                <span>ES</span>
              </div>
              <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-primary" />
              <button 
                onClick={isLoggedIn ? () => setPage(Page.DASHBOARD) : onLoginClick}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-secondary transition-all shadow-md hover:shadow-lg"
              >
                <User className="w-4 h-4" />
                {isLoggedIn ? 'MI CUENTA' : 'ACCESO CLIENTES'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setPage(link.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                   currentPage === link.page ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
                onClick={() => {
                  setPage(Page.CONTACT);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-orange-600 bg-orange-50 hover:bg-orange-100"
              >
                CONTÁCTENOS
            </button>
            <div className="border-t border-gray-100 mt-4 pt-4">
               <button 
                onClick={() => {
                  if (isLoggedIn) setPage(Page.DASHBOARD);
                  else onLoginClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-primary text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                {isLoggedIn ? 'IR AL DASHBOARD' : 'ACCESO CLIENTES'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;