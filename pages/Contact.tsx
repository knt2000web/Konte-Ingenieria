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
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" aria-hidden="true"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 transform translate-x-20" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Contáctenos | KONTE Ingeniería & Consultoría
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Estamos listos para hacer realidad su proyecto de infraestructura en Duitama y Boyacá. <br />
            <span className="font-bold text-white">Respuesta garantizada en menos de 24 horas.</span>
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-b-4 border-orange-500 hover:-translate-y-1 transition-transform">
            <div className="bg-orange-100 dark:bg-orange-900/30 w-14 h-14 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 mx-auto">
              <Phone className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Llámenos Ahora</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-1 text-sm">Atención inmediata</p>
            <p className="text-xl font-bold text-primary dark:text-blue-400 text-center">
              <a href="tel:+573204468049" title="Llamar a KONTE Ingeniería" className="hover:underline">+57 320 446 8049</a>
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-b-4 border-primary hover:-translate-y-1 transition-transform">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center text-primary dark:text-blue-400 mb-4 mx-auto">
              <Mail className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Escríbanos</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-1 text-sm">Consultas técnicas</p>
            <p className="text-lg font-bold text-primary dark:text-blue-400 text-center truncate">
              <a href="mailto:konte2000@gmail.com" title="Enviar correo a KONTE" className="hover:underline">konte2000@gmail.com</a>
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border-b-4 border-secondary hover:-translate-y-1 transition-transform">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 w-14 h-14 rounded-full flex items-center justify-center text-secondary dark:text-emerald-400 mb-4 mx-auto">
              <MapPin className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Visítenos</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
              Calle 14 # 16 48 Ofc 402 <br />
              Duitama, Boyacá, Colombia
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Form Section */}
          <section className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            {formStatus === 'success' ? (
              <div className="text-center py-12 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">¡Mensaje Enviado!</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
                  Gracias por contactar a KONTE. Uno de nuestros ingenieros se pondrá en contacto con usted en breve para asesorarlo.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all shadow-lg shadow-primary/30"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Envíenos un Mensaje</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10">
                  Complete el formulario y le responderemos con una cotización técnica o asesoría especializada.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                        Nombre Completo *
                      </label>
                      <input 
                        id="name"
                        type="text" 
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                        Teléfono / Celular *
                      </label>
                      <input 
                        id="phone"
                        type="tel" 
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+57 300 000 0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                      Email Corporativo *
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="nombre@empresa.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                      Tipo de Solicitud
                    </label>
                    <select 
                      id="type"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all cursor-pointer"
                    >
                      <option>Solicitud de Cotización</option>
                      <option>Consultoría Normativa (ANI)</option>
                      <option>Diseño Estructural / BIM</option>
                      <option>Infraestructura Hospitalaria</option>
                      <option>Otros Servicios</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                      Mensaje o Requerimiento Técnico *
                    </label>
                    <textarea 
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Describa brevemente su proyecto o necesidad técnica..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <input 
                      type="checkbox" 
                      required
                      id="terms"
                      className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-gray-300 dark:border-gray-600 cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                      He leído y acepto la política de tratamiento de datos personales para fines de contacto comercial.
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-primary hover:bg-secondary text-white rounded-xl font-bold transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      'Enviando...'
                    ) : (
                      <>
                        ENVIAR SOLICITUD DE CONTACTO
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </section>

          {/* Sidebar Info */}
          <aside className="space-y-8">
            {/* Hours Card */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Horario de Atención</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Lunes - Viernes</span>
                  <span className="font-bold text-gray-900 dark:text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Sábados</span>
                  <span className="font-bold text-gray-900 dark:text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-red-500">
                  <span>Domingos</span>
                  <span className="font-bold">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Nuestra Ubicación</h3>
              <div 
                className="relative rounded-xl overflow-hidden cursor-pointer group mb-4"
                onClick={() => openLightbox && openLightbox(0, ["https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"])}
              >
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  alt="Mapa de ubicación de KONTE Ingeniería en Duitama"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 dark:bg-gray-900/90 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4 text-primary" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">Ver Mapa</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic">
                Visítenos en el Edificio Centro Ejecutivo para una atención personalizada sobre sus requerimientos de ingeniería.
              </p>
            </div>

            {/* Branding Card */}
            <div className="bg-primary p-8 rounded-2xl shadow-xl text-white">
              <h4 className="font-bold text-lg mb-2">KONTE Ingeniería</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Comprometidos con la excelencia técnica y la normativa vigente en todo el territorio nacional. 15 años construyendo confianza.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Contact;
