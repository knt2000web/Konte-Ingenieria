import os

def run():
    base_dir = r"C:\Users\cagch\Desktop\konte-ingenieria"
    
    # 1. Fix ServiceStructoPro.tsx
    sp_path = os.path.join(base_dir, "pages", "ServiceStructoPro.tsx")
    with open(sp_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    bad_text = "StructoPro mantiene una tarifa preferencial de lanzamiento para tarifa preferencial de lanzamiento,"
    good_text = "StructoPro mantiene una tarifa preferencial de lanzamiento,"
    content = content.replace(bad_text, good_text)
    
    with open(sp_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    # 2. Create Terminos.tsx
    terminos_code = """import React, { useEffect } from 'react';
import { FileText, Shield, CheckCircle } from 'lucide-react';

const Terminos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <FileText className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Términos de Uso
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Condiciones generales de acceso y uso de nuestras plataformas
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-[#0b1120] p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="flex items-start gap-4 mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/30">
            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 m-0">Alcance y Responsabilidad Profesional</h3>
              <p className="text-gray-700 dark:text-gray-300 m-0">
                El acceso y uso de StructoPro y otras herramientas de KONTE implica la aceptación de sus condiciones de uso, alcance funcional y limitaciones técnicas.
              </p>
            </div>
          </div>

          <h2>1. Naturaleza de la Herramienta</h2>
          <p>
            La plataforma se ofrece estrictamente como una <strong>herramienta de apoyo profesional</strong>. Ningún resultado, plano, memoria de cálculo o presupuesto generado por la aplicación debe considerarse como definitivo sin la revisión pertinente.
          </p>

          <h2>2. Responsabilidad del Usuario</h2>
          <p>
            El software <strong>no es un sustituto de la revisión experta</strong>, la validación normativa ni la responsabilidad técnica del usuario. Es obligación indelegable del ingeniero, arquitecto o profesional a cargo verificar que los resultados obtenidos cumplen con los requerimientos específicos del proyecto y con la normativa legal vigente aplicable a su región.
          </p>

          <h2>3. Propiedad Intelectual</h2>
          <p>
            Todos los derechos de propiedad intelectual sobre la plataforma, incluyendo código fuente, diseño, bases de datos, logotipos y algoritmos son propiedad exclusiva de KONTE Ingeniería. La suscripción otorga una licencia de uso personal, intransferible y no exclusiva mientras se mantenga activa.
          </p>

          <h2>4. Disponibilidad del Servicio</h2>
          <p>
            Si bien nos esforzamos por mantener un 99.9% de tiempo de actividad en nuestros servicios Cloud, la plataforma puede experimentar ventanas de mantenimiento programado o interrupciones imprevistas. KONTE no se hace responsable por retrasos en proyectos derivados de la inaccesibilidad temporal al servicio.
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
            Última actualización: Mayo de 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminos;
"""
    with open(os.path.join(base_dir, "pages", "Terminos.tsx"), "w", encoding="utf-8") as f:
        f.write(terminos_code)

    # 3. Create Privacidad.tsx
    privacidad_code = """import React, { useEffect } from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacidad: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Lock className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Cómo protegemos y gestionamos tu información
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none bg-white dark:bg-[#0b1120] p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="flex items-start gap-4 mb-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800/30">
            <Eye className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 m-0">Transparencia y Seguridad</h3>
              <p className="text-gray-700 dark:text-gray-300 m-0">
                En KONTE Ingeniería nos tomamos muy en serio la privacidad de tus datos de usuario y la confidencialidad de tus proyectos.
              </p>
            </div>
          </div>

          <h2>1. Recopilación de Información</h2>
          <p>
            StructoPro y KONTE Ingeniería recopilan la información suministrada voluntariamente por el usuario durante el proceso de registro, suscripción y uso operativo de la plataforma (nombre, correo electrónico, teléfono, datos de facturación).
          </p>

          <h2>2. Uso de la Información</h2>
          <p>
            Los datos recopilados podrán ser utilizados exclusivamente para:
          </p>
          <ul>
            <li>Fines de contacto y soporte técnico.</li>
            <li>Mejora continua del servicio y personalización de la experiencia.</li>
            <li>Seguimiento comercial y gestión de suscripciones.</li>
            <li>Gestión operativa general de la plataforma.</li>
          </ul>

          <h2>3. Confidencialidad de Proyectos</h2>
          <p>
            Los datos técnicos, memorias, planos y modelos procesados a través de nuestros sistemas Cloud son de estricta propiedad del usuario. KONTE garantiza que <strong>la información no será utilizada para fines ajenos</strong> a la prestación del servicio sin causa justificada o autorización expresa, ni será compartida con terceros para propósitos comerciales.
          </p>

          <h2>4. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal y técnica contra accesos no autorizados, alteración, divulgación o destrucción. Las conexiones utilizan cifrado estándar de la industria (SSL/TLS).
          </p>

          <h2>5. Derechos del Usuario</h2>
          <p>
            Usted tiene derecho a solicitar acceso, rectificación, actualización o eliminación de sus datos personales en cualquier momento, comunicándose a través de nuestros canales de soporte oficiales (contacto@konteingenieria.com).
          </p>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
            Última actualización: Mayo de 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacidad;
"""
    with open(os.path.join(base_dir, "pages", "Privacidad.tsx"), "w", encoding="utf-8") as f:
        f.write(privacidad_code)

    # 4. Update App.tsx
    app_path = os.path.join(base_dir, "App.tsx")
    with open(app_path, "r", encoding="utf-8") as f:
        app_content = f.read()

    # Add imports
    if "import Terminos" not in app_content:
        app_content = app_content.replace(
            "import Contact from './pages/Contact';",
            "import Contact from './pages/Contact';\nimport Terminos from './pages/Terminos';\nimport Privacidad from './pages/Privacidad';"
        )
    # Add routes
    if "<Route path=\"/terminos\"" not in app_content:
        app_content = app_content.replace(
            '<Route path="/contacto" element={<Contact openLightbox={openLightbox} />} />',
            '<Route path="/contacto" element={<Contact openLightbox={openLightbox} />} />\n          <Route path="/terminos" element={<Terminos />} />\n          <Route path="/privacidad" element={<Privacidad />} />'
        )
    with open(app_path, "w", encoding="utf-8") as f:
        f.write(app_content)

    # 5. Update Footer.tsx
    footer_path = os.path.join(base_dir, "components", "Footer.tsx")
    with open(footer_path, "r", encoding="utf-8") as f:
        footer_content = f.read()

    # Replace alert links with Route Links
    import re
    footer_content = re.sub(
        r'<a href="#" onClick=\{\(e\) => \{ e\.preventDefault\(\); window\.alert\(\'Términos de uso:[^\']+\'\); \}\} className="([^"]+)">\s*Términos de Uso\s*</a>',
        r'<Link to="/terminos" className="\1">\n                Términos de Uso\n              </Link>',
        footer_content,
        flags=re.MULTILINE
    )
    footer_content = re.sub(
        r'<a href="#" onClick=\{\(e\) => \{ e\.preventDefault\(\); window\.alert\(\'Política de privacidad:[^\']+\'\); \}\} className="([^"]+)">\s*Política de Privacidad\s*</a>',
        r'<Link to="/privacidad" className="\1">\n                Política de Privacidad\n              </Link>',
        footer_content,
        flags=re.MULTILINE
    )

    with open(footer_path, "w", encoding="utf-8") as f:
        f.write(footer_content)

    print("Fixes applied successfully!")

if __name__ == '__main__':
    run()
