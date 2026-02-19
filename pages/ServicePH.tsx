
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../types';
import { ChevronRight, ZoomIn, ArrowRight, ShieldCheck, Paintbrush, Hammer, Building, Droplets, Flower2, Clock, Users, CheckCircle2 } from 'lucide-react';

interface ServicePHProps {
  setPage?: (page: Page) => void;
  openLightbox: (index: number, images: string[]) => void;
}

const ServicePH: React.FC<ServicePHProps> = ({ openLightbox }) => {
  const navigate = useNavigate();
  const [fachadaIndex, setFachadaIndex] = useState(0);
  const [impermeabilizacionIndex, setImpermeabilizacionIndex] = useState(0);
  const [zonasComunesIndex, setZonasComunesIndex] = useState(0);
  
  // WhatsApp Link for Structural/Civil works
  const waLink = "https://wa.me/573204468049?text=Hola%20KONTE%2C%20requiero%20consultor%C3%ADa%20t%C3%A9cnica%20para%20un%20proyecto%20de%20Ingenier%C3%ADa%20Estructural%20(NSR-10).";

  const fachadasImages = [
    "https://i.imgur.com/uWQ2lnV.jpeg",
    "https://i.imgur.com/VQds1N0.jpeg",
    "https://i.imgur.com/sv5JNpt.jpeg"
  ];

  const impermeabilizacionImages = [
    "https://i.imgur.com/VzAhdFh.jpeg",
    "https://i.imgur.com/VQv31Cd.jpeg",
    "https://i.imgur.com/Q5WLYgH.jpeg",
    "https://i.imgur.com/1F6zccP.jpeg",
    "https://i.imgur.com/NXfmcyv.jpeg"
  ];

  const zonasComunesImages = [
    "https://i.imgur.com/qzumOZg.jpeg",
    "https://i.imgur.com/rpIFIjZ.jpeg",
    "https://i.imgur.com/N6MH44G.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFachadaIndex((prev) => (prev + 1) % fachadasImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [fachadasImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImpermeabilizacionIndex((prev) => (prev + 1) % impermeabilizacionImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [impermeabilizacionImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setZonasComunesIndex((prev) => (prev + 1) % zonasComunesImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [zonasComunesImages.length]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Header */}
      <div 
        className="relative h-[500px] w-full overflow-hidden group cursor-pointer"
        onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"])}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10 group-hover:from-primary/80 transition-all" />
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Propiedad Horizontal y Edificios" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
        </div>
        
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl pointer-events-auto">
              <div className="flex items-center gap-2 text-blue-200 mb-4 text-sm font-bold tracking-wider uppercase">
                <span onClick={() => navigate('/servicios')} className="cursor-pointer hover:text-white transition-colors">Servicios</span>
                <ChevronRight className="w-4 h-4" />
                <span>Propiedad Horizontal</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Reparaciones Locativas y Mantenimiento Integral en Propiedad Horizontal
              </h1>
              <p className="text-xl text-blue-100 font-light leading-relaxed max-w-2xl">
                Soluciones integrales que garantizan durabilidad, seguridad y bienestar para su copropiedad bajo normatividad vigente.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30 mb-20">
        
        {/* Intro Card */}
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border-t-4 border-accent mb-16">
           <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Gestión Técnica para Copropiedades</h2>
           <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
             Las edificaciones bajo el régimen de propiedad horizontal enfrentan un desgaste acelerado debido al alto tráfico y la exposición constante de sus áreas comunes. En KONTE, entendemos que la conservación de estos espacios no es solo una necesidad estética, sino una obligación legal y técnica para preservar el patrimonio y la seguridad de los copropietarios.
           </p>
           <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
             Ejecutamos proyectos personalizados para edificios residenciales, centros comerciales y complejos industriales, garantizando el cumplimiento de la Ley 675 de 2001 y trabajando en estrecha colaboración con las administraciones y consejos.
           </p>
        </div>

        {/* Section 1: Fachadas */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
           <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                 <div className="bg-blue-100 p-3 rounded-full text-primary">
                    <Paintbrush className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900">Mantenimiento y Restauración de Fachadas: Protección y Valorización</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                La fachada es la piel de su edificio y su primera línea de defensa. La exposición constante a agentes climáticos, contaminación y humedad no solo deteriora la estética, sino que compromete la integridad estructural y la eficiencia térmica de la edificación.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En KONTE, transformamos el mantenimiento preventivo en una inversión estratégica para prolongar la vida útil de su propiedad y potenciar su valor comercial.
              </p>
              
              <h4 className="font-bold text-gray-900 mb-4">¿Por qué elegir a KONTE?</h4>
              <ul className="space-y-4 mb-8">
                 <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">1</div>
                    <div>
                        <span className="font-bold text-gray-900 block">Evaluación Técnica Especializada</span>
                        <span className="text-sm text-gray-600">No aplicamos soluciones genéricas. Analizamos la antigüedad del material y las condiciones ambientales para determinar el método óptimo (hidrolavado, productos biodegradables o técnicas de precisión), garantizando la preservación de la superficie.</span>
                    </div>
                 </li>
                 <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">2</div>
                    <div>
                        <span className="font-bold text-gray-900 block">Seguridad Certificada (Trabajo en Alturas)</span>
                        <span className="text-sm text-gray-600">Cumplimos estrictamente con la normativa legal vigente. Contamos con personal altamente calificado, equipos certificados y permisos de seguridad para garantizar proyectos con cero riesgos.</span>
                    </div>
                 </li>
                 <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">3</div>
                    <div>
                        <span className="font-bold text-gray-900 block">Materiales de Alto Desempeño</span>
                        <span className="text-sm text-gray-600">Utilizamos insumos de primera línea y recubrimientos tecnológicos que ofrecen mayor resistencia a los rayos UV y a la polución, asegurando un acabado estético superior por más tiempo.</span>
                    </div>
                 </li>
                 <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-1">4</div>
                    <div>
                        <span className="font-bold text-gray-900 block">Atención al Detalle</span>
                        <span className="text-sm text-gray-600">Nuestro enfoque combina la capacidad técnica con una ejecución minuciosa. Nos enfocamos en los remates y detalles que garantizan la excelencia en el resultado final.</span>
                    </div>
                 </li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                 <p className="text-sm font-bold text-primary">Nuestras Soluciones Integrales:</p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lavado y Desmanchado Técnico</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Pintura y Recubrimientos</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Impermeabilización de Superficies</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Tratamiento de Patologías</li>
                 </ul>
              </div>
           </div>
           
           {/* Image Carousel / Gallery Trigger Fachadas */}
           <div 
             className="w-full md:w-1/2 h-[600px] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer sticky top-24"
             onClick={() => openLightbox(fachadaIndex, fachadasImages)}
           >
              {fachadasImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === fachadaIndex ? 'opacity-100' : 'opacity-0'} group-hover:scale-105 transition-transform duration-[2000ms]`} 
                  alt={`Mantenimiento de Fachadas ${index + 1}`} 
                />
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                 <p className="text-white font-bold text-lg">Compromiso KONTE: Resultados duraderos que protegen su patrimonio</p>
              </div>
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
              
              {/* Carrusel Indicators */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
                {fachadasImages.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === fachadaIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
           </div>
        </div>

        {/* Section 2: Impermeabilización (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse gap-12 items-start mb-24">
           <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                 <div className="bg-cyan-100 p-3 rounded-full text-cyan-700">
                    <Droplets className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900">Impermeabilización Técnica de Cubiertas y Techos</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En KONTE, ofrecemos soluciones avanzadas en impermeabilización y protección de superficies, diseñadas bajo estándares de alta ingeniería. No solo prevenimos filtraciones; implementamos sistemas integrales que mejoran el aislamiento térmico y acústico, optimizando la eficiencia energética y la habitabilidad de cada inmueble.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Atendemos proyectos de alta complejidad en sectores industriales, comerciales y residenciales, adaptándonos a cubiertas planas e inclinadas, terrazas transitables y zonas verdes (Techos Verdes).
              </p>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm mb-8">
                 <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Nuestro Protocolo de Ejecución con Garantía KONTE</h4>
                 <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0"></div>
                        <span><strong>Diagnóstico y Evaluación:</strong> Análisis técnico de la estructura para identificar patologías y puntos críticos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0"></div>
                        <span><strong>Intervención Estructural:</strong> Reparación de grietas, nivelación y corrección de pendientes para evitar empozamientos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0"></div>
                        <span><strong>Preparación de Superficie:</strong> Alistamiento mecánico y químico para asegurar la máxima adherencia.</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0"></div>
                        <span><strong>Aplicación del Sistema:</strong> Instalación de membranas sintéticas, capas asfálticas o sistemas líquidos de alto desempeño según la necesidad técnica.</span>
                    </li>
                 </ul>
              </div>

              <h4 className="font-bold text-gray-900 mb-4">Beneficios de una Protección Profesional</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="bg-cyan-50 p-3 rounded-lg">
                    <span className="font-bold text-cyan-800 block mb-1">Integridad Estructural</span>
                    <span className="text-xs text-gray-600">Blindaje total contra filtraciones y humedades que comprometen el acero y concreto.</span>
                 </div>
                 <div className="bg-cyan-50 p-3 rounded-lg">
                    <span className="font-bold text-cyan-800 block mb-1">Salud y Habitabilidad</span>
                    <span className="text-xs text-gray-600">Prevención de moho y microorganismos, asegurando ambientes internos óptimos.</span>
                 </div>
                 <div className="bg-cyan-50 p-3 rounded-lg">
                    <span className="font-bold text-cyan-800 block mb-1">Valorización del Activo</span>
                    <span className="text-xs text-gray-600">Incremento de la vida útil de la cubierta y reducción de costos correctivos.</span>
                 </div>
                 <div className="bg-cyan-50 p-3 rounded-lg">
                    <span className="font-bold text-cyan-800 block mb-1">Eficiencia Energética</span>
                    <span className="text-xs text-gray-600">Reducción de la carga térmica, disminuyendo el consumo de energía en climatización.</span>
                 </div>
              </div>
           </div>
           
           {/* Image Carousel / Gallery Trigger Impermeabilizacion */}
           <div 
             className="w-full md:w-1/2 h-[600px] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer sticky top-24"
             onClick={() => openLightbox(impermeabilizacionIndex, impermeabilizacionImages)}
           >
              {impermeabilizacionImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === impermeabilizacionIndex ? 'opacity-100' : 'opacity-0'} group-hover:scale-110 transition-transform duration-[2000ms]`} 
                  alt={`Impermeabilización de Cubiertas ${index + 1}`} 
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                 <p className="text-white font-bold text-lg">KONTE: Ingeniería que protege, soluciones que perduran.</p>
              </div>
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
              
              {/* Carrusel Indicators */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
                {impermeabilizacionImages.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === impermeabilizacionIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
                  />
                ))}
              </div>
           </div>
        </div>

        {/* Section 3: Obras Civiles */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
           <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                 <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <Hammer className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900">Intervenciones Arquitectónicas y Obras en Propiedad Horizontal</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Con el paso del tiempo, las edificaciones requieren intervenciones técnicas que aseguren su estabilidad estructural, funcionalidad y valorización. En KONTE, ejecutamos proyectos de mantenimiento y restauración en edificios y conjuntos residenciales, transformando patologías constructivas en soluciones duraderas bajo el estricto cumplimiento de la normativa vigente.
              </p>
              
              <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Nuestras intervenciones abarcan:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                     <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <Building className="w-5 h-5 text-primary" />
                        <div>
                            <span className="text-sm font-bold block text-gray-900">Restauración de Fachadas</span>
                            <span className="text-xs text-gray-600">Corrección de fisuras, tratamiento de desprendimientos y acabados.</span>
                        </div>
                     </li>
                     <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <Building className="w-5 h-5 text-primary" />
                        <div>
                            <span className="text-sm font-bold block text-gray-900">Refuerzo Estructural</span>
                            <span className="text-xs text-gray-600">Intervención técnica en columnas y elementos portantes comprometidos.</span>
                        </div>
                     </li>
                     <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <Building className="w-5 h-5 text-primary" />
                        <div>
                            <span className="text-sm font-bold block text-gray-900">Obras Civiles en Áreas Comunes</span>
                            <span className="text-xs text-gray-600">Reparación de muros perimetrales, cerramientos y renovación de acabados arquitectónicos.</span>
                        </div>
                     </li>
                     <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <Building className="w-5 h-5 text-primary" />
                        <div>
                            <span className="text-sm font-bold block text-gray-900">Mampostería Especializada</span>
                            <span className="text-xs text-gray-600">Reconstrucción y mantenimiento de muros con altos estándares de calidad.</span>
                        </div>
                     </li>
                  </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                 <h4 className="font-bold text-orange-800 mb-2">Tecnología, Seguridad y Mano de Obra Calificada</h4>
                 <p className="text-sm text-gray-700 mb-4">
                    La ejecución en entornos de Propiedad Horizontal exige una logística impecable para minimizar el impacto en la vida diaria de los residentes. En KONTE, garantizamos la eficiencia operativa mediante:
                 </p>
                 <div className="grid grid-cols-2 gap-2 text-xs font-bold text-gray-800">
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-orange-600" /> Equipo Certificado</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-orange-600" /> Seguridad Industrial</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-orange-600" /> Personal Especializado</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-orange-600" /> Gestión Logística</span>
                 </div>
              </div>
           </div>
           <div 
             className="w-full md:w-1/2 h-[600px] rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer sticky top-24"
             onClick={() => openLightbox(0, ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"])}
           >
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Obras Civiles" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                 <p className="text-white font-bold text-lg">KONTE: Ingeniería responsable para comunidades seguras.</p>
              </div>
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
           </div>
        </div>

        {/* Section 4: Mantenimiento Integral & Modernizacion (Reversed) */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-20 border border-slate-200">
           <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="w-full md:w-1/2 order-2 md:order-1">
                
                {/* Carrusel Zonas Comunes */}
                <div 
                  className="rounded-2xl overflow-hidden shadow-lg h-[600px] relative group cursor-pointer"
                  onClick={() => openLightbox(zonasComunesIndex, zonasComunesImages)}
                >
                    {zonasComunesImages.map((src, index) => (
                        <img 
                          key={index}
                          src={src} 
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === zonasComunesIndex ? 'opacity-100' : 'opacity-0'} group-hover:scale-105 transition-transform duration-[2000ms]`} 
                          alt={`Rehabilitación Zonas Comunes ${index + 1}`} 
                        />
                    ))}
                   <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 text-white backdrop-blur-sm">
                      <div className="font-bold text-xl mb-1">Rehabilitación de Zonas Comunes</div>
                      <div className="text-sm opacity-90">Lobbies, Porterías y Áreas Sociales</div>
                   </div>
                   <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
                   </div>

                    {/* Carrusel Indicators */}
                    <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2">
                        {zonasComunesImages.map((_, idx) => (
                        <div 
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === zonasComunesIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
                        />
                        ))}
                    </div>
                </div>

             </div>
             <div className="w-full md:w-1/2 order-1 md:order-2">
                <div className="flex items-center gap-3 mb-6">
                   <Flower2 className="w-8 h-8 text-green-600" />
                   <h3 className="text-2xl font-bold text-gray-900">Rehabilitación de Zonas Comunes y Sistemas Críticos</h3>
                </div>
                <p className="text-gray-600 mb-6">
                   Las áreas de uso compartido son las más vulnerables al deterioro. Intervenimos de manera oportuna para evitar sobrecostos por daños mayores en plataformas, parqueaderos, zonas de servicio, cerramientos y accesos.
                </p>
                
                <div className="space-y-8">
                   <div>
                       <h4 className="font-bold text-primary flex items-center gap-2 mb-2"><Users className="w-5 h-5" /> Modernización de Recepciones y Porterías</h4>
                       <p className="text-sm text-gray-700 mb-2">Transformamos accesos tradicionales en espacios modernos, seguros y funcionales. Nuestra intervención integral incluye:</p>
                       <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                           <li><strong>Arquitectura de Interiores:</strong> Demolición controlada, ampliación de áreas y acabados de alta gama.</li>
                           <li><strong>Seguridad y Tecnología:</strong> Instalación de ventanalería blindada, sistemas de ingreso automatizado y citofonía.</li>
                           <li><strong>Confort:</strong> Adecuación de salas de espera y mobiliario ergonómico.</li>
                       </ul>
                   </div>

                   <div>
                       <h4 className="font-bold text-primary flex items-center gap-2 mb-2"><Flower2 className="w-5 h-5" /> Ingeniería de Paisajismo y Espacios Verdes</h4>
                       <p className="text-sm text-gray-700 mb-2">El entorno natural es clave para la valorización del inmueble. En KONTE, diseñamos y mantenemos áreas verdes bajo criterios de sostenibilidad:</p>
                       <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                           <li>Construcción de Paisajismo y jardineras en concreto.</li>
                           <li>Instalación de sistemas de riego eficientes.</li>
                           <li>Mantenimiento preventivo, poda y fertilización.</li>
                       </ul>
                   </div>
                </div>
             </div>
           </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary rounded-2xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">El Compromiso KONTE</h2>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                  Ofrecemos soluciones que resuelven los retos de la convivencia y la infraestructura, garantizando que cada peso invertido por la copropiedad se traduzca en durabilidad, seguridad y bienestar.
                </p>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl flex items-center gap-3 mx-auto justify-center max-w-md"
                >
                  SOLICITAR DIAGNÓSTICO <ArrowRight className="w-6 h-6" />
                </a>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ServicePH;
