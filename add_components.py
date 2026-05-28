import sys

def add_components():
    # 1. Update ServiceStructoPro.tsx
    with open('pages/ServiceStructoPro.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    injection_point = "      </section>\n\n    </div>"
    
    new_blocks = """      </section>

      {/* ── BUZÓN DE SUGERENCIAS ── */}
      <section className="py-16 bg-[#040814] relative border-t border-[#0f1a3a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-b from-[#0b1e45]/50 to-[#07122a]/50 border border-[rgba(20,88,245,0.2)] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#1458f5] opacity-[0.05] blur-[80px]"></div>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1458f5]/10 text-[#1458f5] mb-6 shadow-inner">
              <MessageCircle size={32} />
            </div>
            
            <h2 className="text-3xl font-black text-white mb-4 tracking-tight">Buzón de sugerencias</h2>
            <p className="text-[#f5c842] font-semibold tracking-wide text-sm uppercase mb-4">Tus ideas también construyen StructoPro.</p>
            
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Si identificas una mejora, un ajuste funcional o un módulo que te gustaría ver en futuras versiones, compártenos tu sugerencia.<br/>Queremos que la evolución de la plataforma responda a necesidades reales del ejercicio profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/573223879193?text=Hola,%20tengo%20una%20sugerencia%20para%20mejorar%20StructoPro:" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-6 py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-md">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Por WhatsApp
              </a>
              <a href="https://t.me/konte2000" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#24A1DE]/10 hover:bg-[#24A1DE]/20 border border-[#24A1DE]/30 text-[#24A1DE] px-6 py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-md">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.31-.35-.11l-6.4 4.024-2.76-.86c-.6-.185-.615-.6.125-.89l10.736-4.136c.5-.184.953.11.83.183z"/></svg>
                Por Telegram
              </a>
              <a href="mailto:contacto@konteingenieria.com?subject=Sugerencia%20para%20StructoPro" 
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-md">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                Por Correo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── AVISO LEGAL TÉCNICO ── */}
      <section id="aviso-legal-structopro" className="py-12 bg-[#02050a] border-t border-[#0f1a3a]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="shrink-0 p-3 bg-slate-900 rounded-lg border border-slate-800">
              <ShieldAlert size={24} className="text-slate-400" />
            </div>
            <div>
              <h4 className="text-slate-300 font-bold text-sm uppercase tracking-wider mb-2">Aviso legal y alcance técnico</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-2 text-justify">
                StructoPro es una plataforma de apoyo profesional para análisis, diseño, documentación y gestión técnica. Todo resultado, memoria, plano, reporte o archivo generado debe ser revisado y validado por un profesional competente antes de su uso en proyectos reales, trámites o decisiones técnicas.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">
                El uso de la plataforma no reemplaza el criterio técnico, la verificación normativa específica ni la responsabilidad profesional del usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>"""

    if injection_point in content and "Buzón de sugerencias" not in content:
        content = content.replace(injection_point, new_blocks)
        
        # Ensure MessageCircle and ShieldAlert are imported
        if "MessageCircle" not in content:
            content = content.replace("import {", "import {\n  MessageCircle, ShieldAlert,")
            
        with open('pages/ServiceStructoPro.tsx', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Buzón & Aviso Legal added to ServiceStructoPro.tsx")
    else:
        print("Could not find injection point in ServiceStructoPro or it already exists.")

    # 2. Update Footer.tsx
    with open('components/Footer.tsx', 'r', encoding='utf-8') as f:
        footer_content = f.read()

    import re
    old_footer_links = re.search(r'<div className="flex gap-6">.*?</div>', footer_content, re.DOTALL)
    
    if old_footer_links:
        new_footer_links = """<div className="flex flex-wrap justify-end gap-x-6 gap-y-2">
            <button onClick={() => window.alert('Términos de uso: El acceso y uso de StructoPro implica la aceptación de sus condiciones de uso, alcance funcional y limitaciones técnicas. La plataforma se ofrece como herramienta de apoyo profesional y no como sustituto de la revisión experta, la validación normativa ni la responsabilidad técnica del usuario.')} className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
              Términos de Uso
            </button>
            <button onClick={() => window.alert('Política de privacidad: StructoPro y KONTE Ingeniería podrán utilizar la información suministrada por el usuario para fines de contacto, soporte, mejora del servicio, seguimiento comercial y gestión operativa de la plataforma. La información no será utilizada para fines ajenos a la prestación del servicio sin causa justificada o autorización aplicable.')} className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
              Política de Privacidad
            </button>
            <Link to="/servicios/structopro#aviso-legal-structopro" className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
              Aviso Legal
            </Link>
          </div>"""
        
        footer_content = footer_content.replace(old_footer_links.group(0), new_footer_links)
        with open('components/Footer.tsx', 'w', encoding='utf-8') as f:
            f.write(footer_content)
        print("Legal links added to Footer.tsx")
    else:
        print("Could not find footer links div.")

if __name__ == '__main__':
    add_components()
