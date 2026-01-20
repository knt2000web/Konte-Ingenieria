
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceAni from './pages/ServiceAni';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ClientDashboard from './pages/ClientDashboard';
import LoginModal from './components/LoginModal';
import { Page } from './types';
import { MessageCircle, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Dark Mode Logic
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference on initial load
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('konte-theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('konte-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('konte-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage(Page.DASHBOARD);
  };

  const openLightbox = (src: string) => {
    setLightboxImage(src);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} openLightbox={openLightbox} />;
      case Page.ABOUT:
        return <About setPage={setCurrentPage} openLightbox={openLightbox} />;
      case Page.SERVICES:
        return <Services setPage={setCurrentPage} openLightbox={openLightbox} />;
      case Page.SERVICE_ANI:
        return <ServiceAni setPage={setCurrentPage} openLightbox={openLightbox} />;
      case Page.PROJECTS:
        return <Projects openLightbox={openLightbox} />;
      case Page.CONTACT:
        return <Contact openLightbox={openLightbox} />;
      case Page.DASHBOARD:
        return isLoggedIn ? <ClientDashboard /> : <Home setPage={setCurrentPage} openLightbox={openLightbox} />;
      default:
        return <Home setPage={setCurrentPage} openLightbox={openLightbox} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? 'bg-bg-dark text-gray-100' : 'bg-bg-light text-text-main'} relative`}>
      <Navbar 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        onLoginClick={() => setLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      {/* Global Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 z-50"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Vista completa" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      {/* Persistent Floating Contact Button */}
      <button
        onClick={() => setCurrentPage(Page.CONTACT)}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Necesitas ayuda?
        </span>
      </button>

      {/* Persistent Cookie Banner Style CTA */}
      {!isLoggedIn && (
        <div className="fixed bottom-0 w-full bg-primary text-white p-4 z-30 shadow-lg border-t border-blue-800 animate-in slide-in-from-bottom-full duration-1000 delay-1000 fill-mode-forwards hidden md:block">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs md:text-sm">
            <p className="mb-3 md:mb-0 md:mr-6 text-center md:text-left">
              Utilizamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de privacidad y tratamiento de datos.
              <a href="#" className="underline hover:text-gray-200 ml-1">Más información</a>
            </p>
            <button 
              onClick={(e) => e.currentTarget.parentElement?.parentElement?.remove()}
              className="px-6 py-2 bg-white text-primary rounded font-bold hover:bg-gray-100 transition-colors whitespace-nowrap shadow-sm text-gray-900"
            >
              Acepto
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
