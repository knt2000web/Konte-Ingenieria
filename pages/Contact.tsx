import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ZoomIn } from 'lucide-react';

interface ContactProps {
  openLightbox?: (index: number, images: string[]) => void;
}

const Contact: React.FC<ContactProps> = ({ openLightbox }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="pt-20 pb-12 animate-in fade-in duration-500 bg-bg-light dark:bg-bg-dark">
      {/* High Visibility Hero Header */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md">Contáctenos | KONTE Ingeniería & Consultoría</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Estamos listos para hacer realidad su proyecto de infraestructura en Duitama y Boyacá. <br/>
            <span className="font-bold text-white">Respuesta garantizada en menos de 24 horas.</span>
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        {/* Quick Contact Cards - High Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-b-4 border-orange-500 hover:-translate-y-1 transition-transform">
            <div className="bg-orange-100 dark:bg-orange-900/30 w-14 h-14 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 mx-auto">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Llámenos Ahora</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-1 text-sm">Atención inmediata</p>
            <p className="text-2xl font-bold text-primary dark:text-blue-400 text-center">
              <a href="tel:+573204468049" title="Llamar a KONTE Ingeniería">+57 320 446 8049</a>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-b-4 border-blue-500 hover:-translate-y-1 transition-transform">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Escríbanos</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-1 text-sm">Para cotizaciones y consultas</p>
            <p className="text-lg font-bold text-primary dark:text-blue-400 text-center break-all">
              <a href="mailto:konte2000@gmail.com" title="Enviar correo a KONTE">konte2000@gmail.com</a>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-b-4 border-green-500 hover:-translate-y-1 transition-transform">
            <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4 mx-auto">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Visítenos</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-1 text-sm">Sede Principal Duitama</p>
            <address className="text-lg font-bold text-primary dark:text-blue-400 text-center not-italic">
              Calle 14 # 16 48 Ofc 402<br/>Duitama, Boyacá, Colombia
            </address>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Form Section */}
          <div className="lg:w-2/3 p-8 md:p-12">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300 py-20">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">¡Mensaje Enviado!</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">Gracias por contactar a KONTE. Uno de nuestros ingenieros se pondrá en contacto con usted en breve para asesorarlo en sus proyectos de ingeniería.</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 px-6 py-2 border-2 border-primary text-primary dark:text-blue-400 dark:border-blue-400 font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Envíenos un Mensaje</h2>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">Complete el formulario y le responderemos lo antes posible con una cotización técnica.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Nombre Completo *</label>
                    <input id="name" type="text" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all focus:bg-white dark:focus:bg-gray-600" placeholder="Su nombre" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Teléfono / Celular *</label>
                    <input id="phone" type="tel" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all focus:bg-white dark:focus:bg-gray-600" placeholder="+57 300 000 0000" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Email Corporativo *</label>
                    <input id="email" type="email" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all focus:bg-white dark:focus:bg-gray-600" placeholder="nombre@empresa.com" />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Tipo de Solicitud</label>
                    <select id="type" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all focus:bg-white dark:focus:bg-gray-600">
                      <option>Solicitud de Cotización</option>
                      <option>Consultoría Normativa (ANI)</option>
                      <option>Diseño Estructural/BIM</option>
                      <option>Proveeduría de Ingeniería</option>
                      <option>Otros Servicios</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Mensaje o Requerimiento Técnico *</label>
                  <textarea id="message" rows={5} required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all focus:bg-white dark:focus:bg-gray-600" placeholder="Describa brevemente su proyecto, ubicación o necesidad técnica..."></textarea>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" required id="terms" className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-600" />
                  <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                    He leído y acepto la política de tratamiento de datos personales para fines de contacto comercial.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 text-lg"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : (
                    <>
                      <Send className="w-5 h-5" />
                      ENVIAR SOLICITUD DE CONTACTO
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:w-1/3 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" /> Horario de Atención
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Lunes - Viernes</span>
                    <span className="font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sábados</span>
                    <span className="font-bold">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm text-red-400">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" /> Ubicación en Google Maps
                </h3>
                <div 
                  className="rounded-lg overflow-hidden h-48 bg-gray-800 relative group cursor-pointer"
                  onClick={() => openLightbox && openLightbox(0, ["https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"])}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
                    alt="Mapa de ubicación de KONTE Ingeniería en Duitama, Boyacá"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-lg flex items-center gap-2">
                      <ZoomIn className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-gray-900 dark:text-white">Ver Mapa</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  Visite nuestras oficinas en el Edificio Centro Ejecutivo para una atención personalizada sobre sus requerimientos de ingeniería civil y consultoría.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-800 text-center lg:text-left">
              <p className="text-sm font-bold text-primary mb-2">KONTE Ingeniería & Consultoría</p>
              <p className="text-xs text-gray-500">Comprometidos con la excelencia técnica y la normativa vigente en todo el territorio nacional.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
