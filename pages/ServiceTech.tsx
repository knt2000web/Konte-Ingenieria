import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ZoomIn, ArrowRight, ShieldCheck, Cpu, Code, Database, Share2, Rocket, Users, CheckCircle2, Layout, Settings, Binary, MessageCircle, Search } from 'lucide-react';

interface ServiceTechProps {
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceTech: React.FC<ServiceTechProps> = ({ openLightbox }) => {
  const navigate = useNavigate();
  const [webIndex, setWebIndex] = useState(0);

  const waLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20requiero%20consultoría%20sobre%20sus%20servicios%20de%20Tecnología%20Digital.";

  const webImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWebIndex((prev) => (prev + 1) % webImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [webImages.length]);

  return (
    <div className="bg-white dark:bg-bg-dark text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Tecnología" 
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-4">
            <nav className="flex items-center space-x-2 text-sm text-blue-100/80">
              <span onClick={() => navigate('/')} className="cursor-pointer hover:text-white transition-colors text-white/80">Inicio</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <span onClick={() => navigate('/servicios')} className="cursor-pointer hover:text-white transition-colors text-white/80">Servicios</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <span className="text-white font-medium">Tecnología Digital</span>
            </nav>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tecnología Digital</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Transformación digital y soluciones tecnológicas a medida para su empresa.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 text-left">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-blue-400">Desarrollo Web y Apps de Alto Impacto</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              En KONTE, no solo escribimos código; construimos herramientas estratégicas que impulsan el crecimiento de su negocio. Desarrollamos plataformas digitales robustas, escalables y orientadas a resultados, desde portales corporativos hasta aplicaciones empresariales complejas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Layout, text: "Diseño UI/UX centrado en el usuario" },
                { icon: Code, text: "Desarrollo Full-stack moderno" },
                { icon: Search, text: "Optimización SEO y rendimiento" },
                { icon: Cpu, text: "Arquitecturas en la nube" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <item.icon className="w-5 h-5 text-primary dark:text-blue-400 shrink-0" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                src={webImages[webIndex]} 
                className="w-full h-[450px] object-cover transition-opacity duration-1000"
                alt="Web Development" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl hidden lg:block shadow-xl z-10 border border-white/20">
              <div className="text-3xl font-bold mb-1">+15 Años</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">De Experiencia Técnica</div>
            </div>
          </div>
        </div>

        {/* Automation Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-16 mb-24 border border-gray-100 dark:border-gray-700/50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Automatización de Procesos Operativos</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Digitalizamos y automatizamos flujos de trabajo críticos para eliminar cuellos de botella y aumentar la productividad operacional de su organización.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Rocket, title: "Agilidad", desc: "Reducción drástica de tiempos de ejecución." },
              { icon: Binary, title: "Precisión", desc: "Eliminación de errores humanos en procesos repetitivos." },
              { icon: Database, title: "Control", desc: "Centralización de datos para toma de decisiones." },
              { icon: Settings, title: "Escala", desc: "Capacidad para crecer sin aumentar costos fijos." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Grid Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="md:col-span-2 bg-primary text-white p-10 md:p-16 rounded-3xl relative overflow-hidden flex flex-col justify-center shadow-xl">
             <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-6">Infraestructura y Seguridad Digital</h3>
               <p className="text-lg text-blue-100 mb-8 max-w-xl">
                 Implementamos arquitecturas de red seguras y sistemas de respaldo de datos que garantizan la continuidad de su negocio ante cualquier eventualidad técnica.
               </p>
               <div className="flex flex-wrap gap-4">
                 <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">Protección de Datos</span>
                 <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">VPN Empresarial</span>
                 <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">Nube Híbrida</span>
               </div>
             </div>
             <ShieldCheck className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 rotate-12" />
          </div>
          <div className="bg-white dark:bg-gray-800 p-10 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg flex flex-col items-center text-center justify-center">
             <Users className="w-16 h-16 text-primary dark:text-blue-400 mb-6" />
             <h3 className="text-2xl font-bold mb-4">Soporte Estratégico</h3>
             <p className="text-gray-600 dark:text-gray-400">Acompañamiento constante por especialistas certificados en Boyacá y toda Colombia.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-[2rem] overflow-hidden bg-primary py-20 px-8 text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Listo para dar el salto tecnológico?</h2>
            <p className="text-xl text-blue-100 mb-12">
              Consulte con nuestros ingenieros cómo las soluciones de KONTE pueden transformar su modelo de negocio y optimizar su rentabilidad.
            </p>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 bg-white text-primary px-12 py-5 rounded-full font-extrabold text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-7 h-7" />
              <span>SOLICITAR ASESORÍA TÉCNICA</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTech;
