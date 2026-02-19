import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ClientDashboard from './pages/ClientDashboard';
import LoginModal from './components/LoginModal';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

// SEO Wrapper Component to handle route-based SEO
const SEOHandler = () => {
  const location = useLocation();
  let title = "Consultoría y Tecnología";
  let description = "Soluciones integrales de ingeniería y construcción.";

  // Basic route matching
  const path = location.pathname;
  if (path === '/') {
    title = "Inicio - Consultoría y Construcción";
    description = "KONTE: Líderes en ingeniería, construcción de estaciones de servicio, consultoría normativa ANI y propiedad horizontal en Colombia.";
  } else if (path === '/nosotros') {
    title = "Nosotros - Experiencia y Equipo";
    description = "Conozca a KONTE. Más de 15 años de experiencia en ingeniería civil, infraestructura hospitalaria y soluciones técnicas especializadas.";
  } else if (path === '/servicios') {
    title = "Servicios de Ingeniería";
    description = "Portafolio de servicios: Gestión normativa ANI, construcción hospitalaria, propiedad horizontal, estudios de suelos y topografía.";
  } else if (path === '/servicios/gestion-ani') {
    title = "Gestión Normativa ANI y Licencias";
    description = "Expertos en permisos de ocupación de vía, trámites ante ANI e INVIAS y licenciamiento urbanístico para estaciones de servicio.";
  } else if (path === '/servicios/propiedad-horizontal') {
    title = "Mantenimiento Propiedad Horizontal";
    description = "Restauración de fachadas, impermeabilización de cubiertas y obras civiles para conjuntos residenciales y edificios.";
  } else if (path === '/servicios/fuel-shield') {
    title = "KONTE Fuel-Shield - Filtración Diésel";
    description = "Diagnóstico y limpieza de tanques de combustible. Micro-filtración y certificación ISO 4406 para protección de motores Euro VI.";
  } else if (path === '/proyectos') {
    title = "Proyectos Realizados";
    description = "Galería de proyectos KONTE: Estaciones de servicio, infraestructura clínica, reforzamiento estructural y obras civiles a nivel nacional.";
  } else if (path === '/contacto') {
    title = "Contáctenos";
    description = "Póngase en contacto con nuestros ingenieros. Cotizaciones y asesoría técnica en Duitama, Boyacá y toda Colombia.";
  } else if (path === '/dashboard') {
    title = "Panel de Cliente";
    description = "Área privada para clientes KONTE. Gestión de proyectos y documentos.";
  }
  // Note: Individual Project SEO is handled inside ProjectDetail component

  // Don't render SEO here if it's a project detail page to avoid overwriting
  if (path.startsWith('/proyectos/')) {
      return null;
  }

  return <SEO title={title} description={description} />;
};

const App: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const location = useLocation();

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
  }, [location.pathname]);

  // Lightbox State
  const [lightboxState, setLightboxState] = useState<{
    images: string[];
    currentIndex: number;
  } | null>(null);

  // Dark Mode Logic
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('konte-theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('konte-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('konte-auth', 'true'); // Persist Login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('konte-auth'); // Clear Persistence
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

  const generalWaLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20deseo%20hablar%20con%20un%20consultor%20sobre%20sus%20servicios%20de%20ingenier%C3%ADa%20y%20construcci%C3%B3n.";

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? 'bg-bg-dark text-gray-100' : 'bg-bg-light text-text-main'} relative`}>
      {/* Inject Dynamic SEO based on current page */}
      <SEOHandler />

      <Navbar 
        onLoginClick={() => setLoginModalOpen(true)}
        isLoggedIn={isLoggedIn}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home openLightbox={openLightbox} />} />
          <Route path="/nosotros" element={<About setPage={() => {}} openLightbox={openLightbox} />} />
          <Route path="/servicios" element={<Services setPage={() => {}} openLightbox={openLightbox} />} />
          <Route path="/servicios/gestion-ani" element={<ServiceAni setPage={() => {}} openLightbox={openLightbox} />} />
          <Route path="/servicios/propiedad-horizontal" element={<ServicePH setPage={() => {}} openLightbox={openLightbox} />} />
          <Route path="/servicios/fuel-shield" element={<ServiceDiesel setPage={() => {}} openLightbox={openLightbox} />} />
          {/* Fallback routes for specific services to main services page */}
          <Route path="/servicios/consultoria-tecnica" element={<Services setPage={() => {}} openLightbox={openLightbox} />} />
          <Route path="/servicios/ingenieria-especializada" element={<Services setPage={() => {}} openLightbox={openLightbox} />} />
          <Route path="/servicios/infraestructura-hospitalaria" element={<Services setPage={() => {}} openLightbox={openLightbox} />} />
          
          <Route path="/proyectos" element={<Projects openLightbox={openLightbox} />} />
          <Route path="/proyectos/:slug" element={<ProjectDetail openLightbox={openLightbox} />} />
          <Route path="/contacto" element={<Contact openLightbox={openLightbox} />} />
          <Route 
             path="/dashboard" 
             element={isLoggedIn ? <ClientDashboard onLogout={handleLogout} /> : <Home openLightbox={openLightbox} />} 
          />
        </Routes>
      </main>

      <Footer />

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