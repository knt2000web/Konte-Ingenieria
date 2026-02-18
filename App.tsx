
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceAni from './pages/ServiceAni';
import ServicePH from './pages/ServicePH';
import ServiceDiesel from './pages/ServiceDiesel';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ClientDashboard from './pages/ClientDashboard';
import LoginModal from './components/LoginModal';
import { Page } from './types';
import { MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  
  // Initialize Login State from LocalStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('konte-auth') === 'true';
    }
    return false;
  });
  
  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Lightbox State
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    currentIndex: number;
  } | null>(null);

  // Dark Mode Logic
  const [isDarkMode, setIsDarkMode] = useState(() => {
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
    localStorage.setItem('konte-auth', 'true'); // Persist Login
    setCurrentPage(Page.DASHBOARD);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('konte-auth'); // Clear Persistence
    setCurrentPage(Page.HOME);
  };

  const openLightbox = (index: number, images: string[]) => {
    setLightboxState({
      images: images,
      currentIndex: index
    });
  };

  const closeLightbox = () => {
    setLightboxState(null);
  };

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxState) {
      setLightboxState(prev => prev ? ({
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length
      }) : null);
    }
  }, [lightboxState]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxState) {
      setLightboxState(prev => prev ? ({
        ...prev,
        currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
      }) : null);
    }
  }, [lightboxState]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState, nextImage, prevImage]);

  // Helper function to get SEO data based on page
  const getPageSEO = (page: Page) => {
    switch (page) {
      case Page.HOME:
        return { 
          title: "Inicio - Consultoría y Construcción", 
          description: "KONTE: Líderes en ingeniería, construcción de estaciones de servicio, consultoría normativa ANI y propiedad horizontal en Colombia."
        };
      case Page.ABOUT:
        return { 
          title: "Nosotros - Experiencia y Equipo", 
          description: "Conozca a KONTE. Más de 15 años de experiencia en ingeniería civil, infraestructura hospitalaria y soluciones técnicas especializadas."
        };
      case Page.SERVICES:
        return { 
          title: "Servicios de Ingeniería", 
          description: "Portafolio de servicios: Gestión normativa ANI, construcción hospitalaria, propiedad horizontal, estudios de suelos y topografía."
        };
      case Page.SERVICE_ANI:
        return { 
          title: "Gestión Normativa ANI y Licencias", 
          description: "Expertos en permisos de ocupación de vía, trámites ante ANI e INVIAS y licenciamiento urbanístico para estaciones de servicio."
        };
      case Page.SERVICE_PH:
        return { 
          title: "Mantenimiento Propiedad Horizontal", 
          description: "Restauración de fachadas, impermeabilización de cubiertas y obras civiles para conjuntos residenciales y edificios."
        };
      case Page.SERVICE_DIESEL:
        return { 
          title: "KONTE Fuel-Shield - Filtración Diésel", 
          description: "Diagnóstico y limpieza de tanques de combustible. Micro-filtración y certificación ISO 4406 para protección de motores Euro VI."
        };
      case Page.PROJECTS:
        return { 
          title: "Proyectos Realizados", 
          description: "Galería de proyectos KONTE: Estaciones de servicio, infraestructura clínica, reforzamiento estructural y obras civiles a nivel nacional."
        };
      case Page.CONTACT:
        return { 
          title: "Contáctenos", 
          description: "Póngase en contacto con nuestros ingenieros. Cotizaciones y asesoría técnica en Duitama, Boyacá y toda Colombia."
        };
      case Page.DASHBOARD:
        return { 
          title: "Panel de Cliente", 
          description: "Área privada para clientes KONTE. Gestión de proyectos y documentos."
        };
      default:
        return { 
          title: "Consultoría y Tecnología", 
          description: "Soluciones integrales de ingeniería y construcción."
        };
    }
  };

  const seoData = getPageSEO(currentPage);

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
      case Page.SERVICE_PH:
        return <ServicePH setPage={setCurrentPage} openLightbox={openLightbox} />;
      case Page.SERVICE_DIESEL:
        return <ServiceDiesel setPage={setCurrentPage} openLightbox={openLightbox} />;
      case Page.PROJECTS:
        return <Projects openLightbox={openLightbox} />;
      case Page.CONTACT:
        return <Contact openLightbox={openLightbox} />;
      case Page.DASHBOARD:
        return isLoggedIn ? <ClientDashboard onLogout={handleLogout} /> : <Home setPage={setCurrentPage} openLightbox={openLightbox} />;
      default:
        return <Home setPage={setCurrentPage} openLightbox={openLightbox} />;
    }
  };

  const generalWaLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20deseo%20hablar%20con%20un%20consultor%20sobre%20sus%20servicios%20de%20ingenier%C3%ADa%20y%20construcci%C3%B3n.";

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? 'bg-bg-dark text-gray-100' : 'bg-bg-light text-text-main'} relative`}>
      {/* Inject Dynamic SEO based on current page */}
      <SEO title={seoData.title} description={seoData.description} />

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
      {lightboxState && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 z-50"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          {lightboxState.images.length > 1 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 z-50"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {lightboxState.images.length > 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20 z-50"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          <img 
            src={lightboxState.images[lightboxState.currentIndex]} 
            alt={`Vista completa ${lightboxState.currentIndex + 1}`} 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none"
            onClick={(e) => e.stopPropagation()} 
          />

          {lightboxState.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm">
              {lightboxState.currentIndex + 1} / {lightboxState.images.length}
            </div>
          )}
        </div>
      )}

      {/* Persistent Floating Contact Button - Direct WhatsApp Strategy */}
      <a
        href={generalWaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Desea hablar con un consultor?
        </span>
      </a>

      {!isLoggedIn && (
        <div className="fixed bottom-0 w-full bg-primary text-white p-4 z-30 shadow-lg border-t border-blue-800 animate-in slide-in-from-bottom-full duration-1000 delay-1000 fill-mode-forwards hidden md:block">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs md:text-sm">
            <p className="mb-3 md:mb-0 md:mr-6 text-center md:text-left">
              Utilizamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra política de privacidad.
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
