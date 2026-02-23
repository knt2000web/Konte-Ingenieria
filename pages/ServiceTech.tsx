import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ZoomIn, ArrowRight, ShieldCheck, Cpu, Code, Database, Share2, Rocket, Users, CheckCircle2, Layout, Settings, Binary } from 'lucide-react';

interface ServiceTechProps {
  openLightbox: (index: number, images: string[]) => void;
}

const ServiceTech: React.FC<ServiceTechProps> = ({ openLightbox }) => {
  const navigate = useNavigate();
  const [webIndex, setWebIndex] = useState(0);
  const [autoIndex, setAutoIndex] = useState(0);
  const [iaIndex, setIaIndex] = useState(0);

  const waLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20requiero%20consultoría%20sobre%20sus%20servicios%20de%20Tecnología%20Digital.";

  const webImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  ];

  const autoImages = [
    "https://images.unsplash.com/photo-1518433278981-16faeff81682?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWebIndex((prev) => (prev + 1) % webImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [webImages.length]);

  return (
    <div className="bg-bg-light dark:bg-bg-dark text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Tecnología" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tecnología Digital</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Transformación digital y soluciones tecnológicas a medida para su empresa.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Desarrollo Web y Apps</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Creamos plataformas digitales robustas, escalables y orientadas a resultados. Desde portales corporativos hasta aplicaciones complejas.
            </p>
            <ul className="space-y-4">
              {[
                "Diseño UI/UX centrado en el usuario",
                "Desarrollo Full-stack (React, Node.js)",
                "Optimización SEO y rendimiento",
                "Arquitecturas en la nube"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
            <img src={webImages[webIndex]} className="w-full h-full object-cover transition-all duration-1000" alt="Web Development" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 md:flex-row-reverse">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-6">Automatización de Procesos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Digitalizamos y automatizamos flujos de trabajo para eliminar cuellos de botella y aumentar la productividad operacional.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Rocket, title: "Agilidad", desc: "Reducción de tiempos" },
                { icon: Binary, title: "Precisión", desc: "Menos errores" },
                { icon: Database, title: "Datos", desc: "Control total" },
                { icon: Settings, title: "Escala", desc: "Crecimiento" }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <item.icon className="text-primary mb-2 w-6 h-6" />
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:order-1">
            <img src={autoImages[autoIndex]} className="w-full h-full object-cover transition-all duration-1000" alt="Automation" />
          </div>
        </div>

        <div className="bg-primary rounded-3xl p-8 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Impulse su empresa hoy</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Consulte con nuestros expertos cómo la tecnología puede transformar su modelo de negocio.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
            SOLICITAR ASESORÍA TÉCNICA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceTech;
