const fs = require('fs');

let content = fs.readFileSync('pages/Home.tsx', 'utf-8');

// The markers based on actual source code
const p1 = content.indexOf('{/* Hero Section */}');
const p2 = content.indexOf('{/* Intro Stats */}');
const p3 = content.indexOf('{/* ========== BANNER STRUCTOPRO ========== */}');
const p4 = content.indexOf('{/* ======== FIN BANNER STRUCTOPRO ======== */}');
const p5 = content.indexOf('{/* Moving Image Gallery Strip - Interactive */}');
const p6 = content.indexOf('{/* Services Preview */}');
const p7 = content.lastIndexOf('</section>'); // End of Services Preview (or the file)

if ([p1, p2, p3, p4, p5, p6, p7].includes(-1)) {
    console.error("One or more sections could not be found!");
    process.exit(1);
}

// Extract the sections
const headerAndImports = content.substring(0, p1);

// We will overwrite the Hero Section entirely, so we don't need to extract the old one.
// We will overwrite the Intro Stats entirely, to change +15 to +26 and mt-20.

const structoProBanner = content.substring(p3, p4 + '{/* ======== FIN BANNER STRUCTOPRO ======== */}'.length);
const movingGallery = content.substring(p5, p6);

// Services preview ends at the last </section> before the final </div>
const servicesEnd = content.indexOf('</section>', p6) + '</section>'.length;
const servicesPreview = content.substring(p6, servicesEnd);

const footerAndEnd = content.substring(servicesEnd);

// New Hero Section
const newHero = `      {/* Hero Section */}
      <div className="relative w-full overflow-hidden group cursor-pointer" onClick={() => openLightbox(0, ["https://i.imgur.com/gy1Wtmv.jpeg"])}>
        <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors" />
        <img
          src="https://i.imgur.com/gy1Wtmv.jpeg"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1520694478166-daaaaec95b69?auto=format&fit=crop&q=80&w=1600";
            e.currentTarget.onerror = null;
          }}
          alt="Ingeniería civil y construcción de estaciones de servicio en Duitama, Boyacá"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="text-white w-8 h-8 drop-shadow-md" />
        </div>
        <div className="relative z-20 flex flex-col justify-center pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24 min-h-[90vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="max-w-3xl animate-in slide-in-from-bottom-10 duration-700 text-left">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-md">
                Ingeniería estructural &bull; Licencias de construcción &bull; NSR-10 &bull; Duitama, Boyacá y Colombia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Licencias de construcción y consultoría estructural en Colombia
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl font-light leading-relaxed">
                Tramitamos licencias de construcción, reconocimiento, ampliación, modificación y demolición desde Duitama para proyectos en Boyacá, Casanare, Cundinamarca, Tolima y el resto del país, con diseño estructural NSR-10, memorias de cálculo, coordinación con arquitectura y acompañamiento completo ante curaduría urbana.
              </p>
              
              <ul className="text-white/90 space-y-3 mb-8 md:mb-12 text-sm md:text-base font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Más de 26 años diseñando estructuras y gestionando licencias de construcción</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Experiencia en proyectos residenciales, comerciales, industriales y estaciones de servicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Entregamos planos, estudios y soportes listos para radicar y responder observaciones</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 md:mt-10 mb-8 md:mb-12" onClick={(e) => e.stopPropagation()}>
                <a
                  href="https://wa.me/573223879193"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold transition-all shadow-xl hover:shadow-primary/50 flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-5 h-5 hidden sm:block" />
                  COTIZAR TRÁMITE DE LICENCIA
                </a>
                <a
                  href="#servicios"
                  onClick={(e) => { e.preventDefault(); document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-bold transition-all flex items-center justify-center"
                >
                  VER SERVICIOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>\n`;

// New Intro Stats
const newIntroStats = `      {/* Intro Stats */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-12 mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b-4 border-primary dark:border-blue-500 transition-colors duration-300">
          {[
            { icon: Award, label: 'Experiencia', value: '+26 Años' },
            { icon: Users, label: 'Profesionales', value: 'Personal Certificado' },
            { icon: Globe, label: 'Cobertura', value: 'Boyacá y Nacional' },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-full text-primary dark:text-blue-400">
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>\n`;

const newExperienciaBlock = `
      {/* ========== EXPERIENCIA EN LICENCIAS ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="bg-blue-50/50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Experiencia comprobada en licencias de construcción
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Hemos gestionado licencias de construcción, ampliación y reconocimiento para proyectos residenciales, comerciales e industriales en diferentes ciudades del país. Cada trámite se soporta con estudios de suelos, planos estructurales, memorias de cálculo y coordinación técnica con arquitectos y curaduría, cumpliendo la normatividad urbana y la NSR-10.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Vivienda unifamiliar y multifamiliar",
                "Locales comerciales y bodegas",
                "Estaciones de servicio y obras asociadas",
                "Reforzamientos y ampliaciones de edificaciones existentes"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a
                href="https://wa.me/573223879193"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-secondary text-white rounded-lg font-bold transition-all shadow-lg hover:shadow-primary/50"
              >
                Cuéntanos tu proyecto
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
`;

// Modify services preview slightly to remove the bottom margin (mb-24) to mb-0 and add id="servicios"
let modifiedServicesPreview = servicesPreview.replace('mb-24', 'mb-0 pb-16').replace('<section className="max-w-7xl', '<section id="servicios" className="max-w-7xl');

// Final assembly
const finalContent = 
  headerAndImports + 
  newHero + 
  newIntroStats + 
  modifiedServicesPreview + 
  newExperienciaBlock + 
  structoProBanner + '\\n' +
  movingGallery +
  footerAndEnd;

fs.writeFileSync('pages/Home.tsx', finalContent, 'utf-8');
console.log("Home.tsx restructured successfully!");
