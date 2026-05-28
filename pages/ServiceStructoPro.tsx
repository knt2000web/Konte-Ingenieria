import React, { useEffect, useState } from 'react';
import {
  MessageCircle, ShieldAlert, Calculator, FileText, Box, Ruler, BarChart3,
  Layers, Zap, ArrowRight, CheckCircle2, ShieldCheck,
  Clock, Download, Laptop, TrendingUp, Activity,
  Users, X, ExternalLink, Grid3X3, Building2,
  TreePine, Package, Wrench, Camera, BrainCircuit,
  Warehouse, ClipboardList, AlertTriangle, Cpu, Settings
} from 'lucide-react';

interface ServiceStructoProProps {
  setPage?: any;
  openLightbox: (index: number, images: string[]) => void;
}

// ─── SVGS nativos de iconos ───────────────────────────────────────
const IconBuilding = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 22V4h12v18M16 10h4v12M8 22h4M8 8h.01M12 8h.01M8 12h.01M12 12h.01M8 16h.01M12 16h.01"/>
  </svg>
);
const IconCircle = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8"/>
  </svg>
);
const IconHBeam = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="12" x2="20" y2="12"/>
    <line x1="4" y1="6" x2="20" y2="6"/>
    <line x1="4" y1="18" x2="20" y2="18"/>
  </svg>
);
const IconPuzzle = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 11v-2a2 2 0 0 0-2-2h-2c0-1.66-1.34-3-3-3S9 5.34 9 7H7a2 2 0 0 0-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v2a2 2 0 0 0 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2a2 2 0 0 0 2-2v-2c1.66 0 3-1.34 3-3s-1.34-3-3-3z"/>
  </svg>
);
const IconRuler = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="8" width="18" height="8" rx="2"/>
    <line x1="7" y1="8" x2="7" y2="12"/>
    <line x1="11" y1="8" x2="11" y2="10"/>
    <line x1="15" y1="8" x2="15" y2="12"/>
  </svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 12 12 17 22 12"/>
    <polyline points="2 17 12 22 22 17"/>
  </svg>
);
const IconAlignCenter = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="7" y1="12" x2="17" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconGrid2 = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/>
    <rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>
  </svg>
);
const IconRows = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="5" width="16" height="5" rx="1"/>
    <rect x="4" y="14" width="16" height="5" rx="1"/>
  </svg>
);
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconWind = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 14h10c1.7 0 3-1.3 3-3s-1.3-3-3-3"/>
    <path d="M4 10h6c1.7 0 3 1.3 3 3s-1.3 3-3 3"/>
    <path d="M4 18h12"/>
  </svg>
);
const IconTriangle = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 4L4 20h16z"/>
    <path d="M12 12v8"/>
    <line x1="8" y1="16" x2="16" y2="16"/>
  </svg>
);
const IconGridLines = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="3" y1="15" x2="21" y2="15"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
    <line x1="15" y1="3" x2="15" y2="21"/>
  </svg>
);
const IconApps = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="4" height="4" rx="1"/><rect x="10" y="4" width="4" height="4" rx="1"/>
    <rect x="16" y="4" width="4" height="4" rx="1"/><rect x="4" y="10" width="4" height="4" rx="1"/>
    <rect x="10" y="10" width="4" height="4" rx="1"/><rect x="16" y="10" width="4" height="4" rx="1"/>
    <rect x="4" y="16" width="4" height="4" rx="1"/><rect x="10" y="16" width="4" height="4" rx="1"/>
    <rect x="16" y="16" width="4" height="4" rx="1"/>
  </svg>
);
const IconDoc = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconTrend = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="4 14 10 8 15 13 20 5"/>
    <line x1="20" y1="5" x2="20" y2="10"/>
    <line x1="20" y1="5" x2="15" y2="5"/>
    <line x1="4" y1="20" x2="20" y2="20"/>
  </svg>
);
const IconMatrix2D = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="4 14 10 8 15 13 20 5"/>
    <line x1="20" y1="5" x2="20" y2="10"/><line x1="20" y1="5" x2="15" y2="5"/>
  </svg>
);
const IconBarChart = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="12" width="4" height="10"/><rect x="9" y="8" width="4" height="14"/>
    <rect x="15" y="4" width="4" height="18"/><line x1="3" y1="22" x2="21" y2="22"/>
  </svg>
);

// ─── COMPLETE MODULE CATALOG ──────────────────────────────────────
interface Module {
  icon: JSX.Element;
  title: string;
  desc: string;
  path: string;
  category: string;
  solves: string;
  verifies: string;
  delivers: string;
  forWho: string;
  tags: string[];
}

const MODULES: Module[] = [
  // ── HORMIGÓN ARMADO
  { icon: <IconBuilding/>, title: "Columnas PM", desc: "Diagramas P-M en 3D (Bresler). Esbeltez, estribos sísmicos y exportación BIM.", path: "Columnas_PM", category: "Hormigón Armado",
    solves: "Genera la superficie de interacción P-M tridimensional (Bresler) para soportes rectangulares bajo flexocompresión biaxial.",
    verifies: "Esbeltez kL/r, magnificación de momentos, diseño de estribos sísmicos (NSR-10 / ACI 318).",
    delivers: "Memoria paso a paso en DOCX + modelo 3D exportable en IFC/BIM.", forWho: "Ingenieros estructurales y calculistas de edificios en concreto.", tags: ["Bresler 3D", "IFC / DOCX"] },
  { icon: <IconCircle/>, title: "Columnas Circulares", desc: "Diseño biaxial de soportes circulares, espirales y zunchos.", path: "Columnas_Circulares", category: "Hormigón Armado",
    solves: "Capacidad biaxial de columnas de sección circular para puentes, silos y estructuras arquitectónicas.",
    verifies: "Confinamiento por espirales/zunchos y capacidad P-M bajo cargas combinadas.",
    delivers: "Diagramas de interacción y memoria técnica.", forWho: "Diseñadores de infraestructura vial y estructuras industriales.", tags: ["Biaxial", "Espirales"] },
  { icon: <IconHBeam/>, title: "Vigas y Losas", desc: "Flexión, cortante sísmico Vp, deflexiones Branson y punzonamiento NSR-10.", path: "Vigas_Losas", category: "Hormigón Armado",
    solves: "Diseño del acero longitudinal y transversal de vigas (rectangular y T) y losas en una dirección.",
    verifies: "Ductilidad DES/DMO/DMI, cortante sísmico Vp y deflexiones (Branson).",
    delivers: "Memoria DOCX detallada por ecuación normativa.", forWho: "Calculistas de edificios residenciales e industriales.", tags: ["Viga T", "Deflexión Branson"] },
  { icon: <IconPuzzle/>, title: "Otras Estructuras", desc: "Vigas de acople, ménsulas y elementos no convencionales.", path: "Otras_Estructuras", category: "Hormigón Armado",
    solves: "Resolución de elementos especiales de concreto armado como vigas de acople y ménsulas cortas.",
    verifies: "Bielas y tirantes y cortante por fricción.",
    delivers: "Esquemas de armado y memoria justificativa.", forWho: "Especialistas en proyectos industriales o comerciales.", tags: ["Bielas", "Ménsulas"] },
  { icon: <IconRuler/>, title: "Predimensionamiento", desc: "Calculadora inicial rápida para vigas, columnas y losas.", path: "Predimensionamiento", category: "Hormigón Armado",
    solves: "Estimaciones iniciales de secciones transversales para facilitar el planteamiento estructural.",
    verifies: "Reglas empíricas de la NSR-10 y ACI 318 para altura de vigas y espesor de losas.",
    delivers: "Tabla comparativa de secciones sugeridas.", forWho: "Calculistas en fase de anteproyecto.", tags: ["NSR-10", "Rápido"] },
  // ── CIMENTACIONES
  { icon: <IconLayers/>, title: "Zapatas Aisladas", desc: "Concéntricas y excéntricas. Punzonamiento y despiece DXF ICONTEC.", path: "Zapatas", category: "Cimentaciones",
    solves: "Dimensionamiento en planta y espesor de cimentaciones superficiales bajo cargas combinadas.",
    verifies: "Esfuerzos sobre terreno, flexión, cortante unidireccional y punzonamiento biaxial.",
    delivers: "Planos DXF de despiece con rótulo ICONTEC + DOCX.", forWho: "Ingenieros de cimentaciones y geotecnistas.", tags: ["Punzonamiento", "DXF"] },
  { icon: <IconAlignCenter/>, title: "Pilotes", desc: "Capacidad portante, diseño a flexocompresión y cortante.", path: "Pilotes", category: "Cimentaciones",
    solves: "Evaluación de la capacidad portante de pilotes en suelos estratificados.",
    verifies: "Flexocompresión y cortante en el fuste, según NSR-10.",
    delivers: "Memoria de diseño y resumen de capacidades.", forWho: "Geotecnistas y calculistas de infraestructura.", tags: ["Portante", "Cortante"] },
  { icon: <IconGrid2/>, title: "Dados y Cabezales", desc: "Encepados sobre 2, 3, 4 y 5 pilotes — bielas y tirantes.", path: "Dados_Encepados", category: "Cimentaciones",
    solves: "Diseño de encepados rígidos para grupos de pilotes por el método de bielas y tirantes.",
    verifies: "Tracción en tirantes y compresión en bielas, NSR-10.",
    delivers: "Memoria y esquema de armado.", forWho: "Calculistas de infraestructura y edificios sobre pilotes.", tags: ["Bielas", "Dados"] },
  { icon: <IconRows/>, title: "Muros Contención", desc: "Estabilidad a volcamiento, deslizamiento y presiones Rankine/Coulomb.", path: "Muros_Contencion", category: "Cimentaciones",
    solves: "Diseño geométrico y estructural de muros en voladizo con empujes de suelo.",
    verifies: "FS a volcamiento y deslizamiento, presiones netas bajo teorías de Rankine/Coulomb.",
    delivers: "Memoria geotécnica y estructural justificativa.", forWho: "Ingenieros civiles en proyectos de urbanismo.", tags: ["Estabilidad", "Rankine"] },
  // ── SISMO Y VIENTO
  { icon: <IconGlobe/>, title: "Diseño Sísmico", desc: "Espectros de diseño, FHE, derivas y parámetros de sitio.", path: "Diseño_Sismico", category: "Sismo & Viento",
    solves: "Cálculo del espectro elástico de diseño y la Fuerza Horizontal Equivalente basal.",
    verifies: "Amenaza sísmica (Aa, Av), control de derivas y efectos P-Delta, NSR-10.",
    delivers: "Curvas espectrales y memoria de parámetros sísmicos.", forWho: "Calculistas en la fase de planteamiento global.", tags: ["FHE", "Derivas"] },
  { icon: <IconWind/>, title: "Carga de Viento", desc: "Presiones sobre SPRFA y revestimiento — método direccional.", path: "Carga_de_Viento", category: "Sismo & Viento",
    solves: "Cálculo de presiones de viento sobre la estructura principal y elementos de cubierta.",
    verifies: "NSR-10 Título B.6 y metodología de coeficientes de presión.",
    delivers: "Tabla de presiones de diseño por zona.", forWho: "Calculistas de edificios industriales y cubiertas.", tags: ["Presiones", "NSR-10 B.6"] },
  { icon: <IconTriangle/>, title: "Irregularidades", desc: "Penalización de redundancia sísmica y ajuste de R.", path: "Irregularidades", category: "Sismo & Viento",
    solves: "Evaluación de irregularidades en planta y elevación para clasificar la estructura.",
    verifies: "Ajuste del coeficiente R y redundancia sísmica, NSR-10 A.3.3.",
    delivers: "Reporte de irregularidades para anexo al estudio sísmico.", forWho: "Revisores estructurales.", tags: ["Torsión", "Ajuste R"] },
  // ── MAMPOSTERÍA Y SISTEMAS ALTERNATIVOS
  { icon: <IconGridLines/>, title: "Mampostería Estructural", desc: "Muros de bloque a corte, flexocompresión y cuantías mínimas.", path: "Mamposteria_Estructural", category: "Mampostería & Alt.",
    solves: "Cálculo de muros en bloque estructural para edificios de baja altura.",
    verifies: "Resistencia a cortante y flexocompresión, cuantías mínimas NSR-10 D.",
    delivers: "Memoria de diseño y especificación de refuerzo.", forWho: "Calculistas de vivienda económica.", tags: ["Bloques", "NSR-10 D"] },
  { icon: <IconApps/>, title: "Mampostería y Morteros", desc: "Dosificación de morteros y cantidades de bloques por m².", path: "Mamposteria_Morteros", category: "Mampostería & Alt.",
    solves: "Dosificación de morteros estándar y estimación de cantidades por metro cuadrado.",
    verifies: "Relaciones agua/cemento y resistencia mínima.",
    delivers: "Tabla de dosificaciones y cantidades.", forWho: "Residentes y jefes de obra.", tags: ["Morteros", "Dosificación"] },
  { icon: <IconGrid2/>, title: "Placa Fácil", desc: "Losas aligeradas Bloquelón y perfilería metálica.", path: "Placa_facil", category: "Mampostería & Alt.",
    solves: "Diseño de losas aligeradas unidireccionales con el sistema Placa Fácil.",
    verifies: "Cargas de servicio, deflexiones y resistencia del perfil de apoyo.",
    delivers: "Esquema de armado y especificaciones del perfil.", forWho: "Calculistas de vivienda masiva.", tags: ["Bloquelón", "Perfiles"] },
  { icon: <IconGrid2/>, title: "Kontewall", desc: "Paneles prefabricados EPS y mallas electrosoldadas (Emmedue).", path: "Kontewall", category: "Mampostería & Alt.",
    solves: "Diseño de paneles prefabricados de poliestireno expandido con mallas electrosoldadas.",
    verifies: "Capacidad a corte, flexión y confinamiento sísmico del panel.",
    delivers: "Memoria y plano de modulación del panel.", forWho: "Constructores de vivienda industrializada.", tags: ["EPS", "Paneles 3D"] },
  { icon: <IconGrid2/>, title: "Madera Estructural", desc: "Pórticos y cubiertas en madera aserrada — NSR-10 Título G.", path: "Madera_Estructuras", category: "Mampostería & Alt.",
    solves: "Diseño de elementos de madera aserrada bajo flexión, compresión y conexiones.",
    verifies: "Capacidades por especie y grado de madera, NSR-10 Título G.",
    delivers: "Memoria y especificaciones de perfil.", forWho: "Especialistas en arquitectura en madera.", tags: ["Madera", "Título G"] },
  { icon: <IconGrid2/>, title: "Estructuras Metálicas", desc: "Propiedades de perfiles de acero y diseño de conexiones.", path: "Estructuras_Metalicas", category: "Mampostería & Alt.",
    solves: "Propiedades geométricas de secciones de acero y diseño de conexiones a momento y cortante.",
    verifies: "AISC LRFD y NSR-10 Título F para conexiones soldadas y empernadas.",
    delivers: "Tabla de propiedades y cálculo de la conexión.", forWho: "Calculistas de naves industriales y pasarelas.", tags: ["AISC", "Conexiones"] },
  // ── PRESUPUESTO
  { icon: <IconDoc/>, title: "Calculadora Materiales", desc: "Estimaciones rápidas de cemento, acero y agregados.", path: "Calculadora_de_Materiales", category: "Presupuesto",
    solves: "Cálculo rápido de consumos de materiales básicos por metro cúbico de concreto.",
    verifies: "Relaciones de mezcla estándar ACI 211.",
    delivers: "Tabla de cantidades estimadas por elemento.", forWho: "Residentes y contratistas en sitio.", tags: ["Dosificación", "Rápido"] },
  { icon: <IconDoc/>, title: "APU Mercado", desc: "Análisis de precios unitarios con base de datos de insumos.", path: "APU_Mercado", category: "Presupuesto",
    solves: "Construcción de APUs actualizados con rendimientos y precios de mercado.",
    verifies: "Cuadrillas, materiales y equipos conforme a estándares sectoriales.",
    delivers: "APU detallado exportable a Excel.", forWho: "Presupuestadores y licitadores.", tags: ["Mercado", "Insumos"] },
  { icon: <IconDoc/>, title: "Presupuesto Pro", desc: "Presupuesto consolidado con A.I.U., IVA y exportación Excel.", path: "1_Presupuesto_APU", category: "Presupuesto",
    solves: "Armado del presupuesto general de la obra con capítulos, A.I.U. e IVA automático.",
    verifies: "Consistencia entre APUs y presupuesto maestro.",
    delivers: "Archivo .xlsx listo para licitación.", forWho: "Directores de obra e ingenieros licitadores.", tags: ["A.I.U.", "Excel .xlsx"] },
  { icon: <IconDoc/>, title: "Cuantificación BIM", desc: "Extracción de cantidades manual e importada desde BIM.", path: "PRE_Cuantificacion", category: "Presupuesto",
    solves: "Consolidación de cantidades de obra desde modelos BIM o entrada manual.", verifies: "Coherencia con el modelo tridimensional.", delivers: "QTO en Excel.", forWho: "Gerentes de proyecto y modeladores BIM.", tags: ["BIM", "QTO"] },
  { icon: <IconDoc/>, title: "Ensamblador APU", desc: "APU personalizados con cuadrillas propias del proyecto.", path: "PRE_Analisis_Precios", category: "Presupuesto",
    solves: "Creación de APU personalizados con cuadrillas y precios del contexto del proyecto.", verifies: "Consistencia interna de rendimientos.", delivers: "APU custom exportable.", forWho: "Presupuestadores senior.", tags: ["Custom", "Cuadrillas"] },
  { icon: <IconDoc/>, title: "Presupuesto Maestro", desc: "Control maestro por capítulos, ítems y márgenes de ganancia.", path: "PRE_Presupuesto_General", category: "Presupuesto",
    solves: "Supervisión integral del presupuesto general de la obra.", verifies: "Márgenes de contribución y utilidad esperada.", delivers: "Dashboard de control presupuestal.", forWho: "Gerentes de empresa constructora.", tags: ["Control Total", "Márgenes"] },
  { icon: <IconDoc/>, title: "Explosión de Insumos", desc: "Consolidado total de compras por materiales, MOD y equipos.", path: "PRE_Explosion_Insumos", category: "Presupuesto",
    solves: "Generación del consolidado global de insumos requeridos para toda la obra.", verifies: "Coherencia con la explosión de APUs.", delivers: "Lista de compras en Excel.", forWho: "Logística y compras de obra.", tags: ["Logística", "Compras"] },
  // ── ANÁLISIS ESTRUCTURAL
  { icon: <IconMatrix2D/>, title: "Análisis 2D", desc: "Solucionador matricial para pórticos planos — M, V y deflexión.", path: "Analisis_Estructural_2D", category: "Análisis Estructural",
    solves: "Análisis matricial de vigas continuas y pórticos planos con cargas arbitrarias.", verifies: "Equilibrio nodal y compatibilidad de deformaciones.", delivers: "Diagramas M, V y deflexión.", forWho: "Calculistas y docentes.", tags: ["Matricial 2D", "Pórticos"] },
  { icon: <IconBarChart/>, title: "Análisis 3D", desc: "Motor espacial con 6 GDL por nodo. Matrices globales y reacciones.", path: "Analisis_Estructural_3D", category: "Análisis Estructural",
    solves: "Análisis matricial espacial de estructuras tridimensionales con 6 GDL/nodo.", verifies: "Matrices de rigidez global y reacciones en apoyos.", delivers: "Tabla de desplazamientos y reacciones.", forWho: "Calculistas avanzados.", tags: ["Espacial 3D", "Matrices"] },
  { icon: <IconGrid2/>, title: "Generador 3D", desc: "Pórticos espaciales paramétricos — definición de mallas de nodos.", path: "Generador_Maestro_3D", category: "Análisis Estructural",
    solves: "Generación interactiva de mallas de nodos para pórticos espaciales 3D.", verifies: "Coherencia de la malla con las condiciones de apoyo.", delivers: "Archivo de nodos y elementos para el solver.", forWho: "Calculistas e investigadores estructurales.", tags: ["Paramétrico", "Mallas"] },
  { icon: <IconGlobe/>, title: "Resistencia Materiales", desc: "Inercias, centroides de secciones compuestas y Círculo de Mohr.", path: "Resistencia_Materiales", category: "Análisis Estructural",
    solves: "Cálculo de propiedades geométricas de secciones compuestas y estados de tensión.", verifies: "Eje neutro, momento de inercia y radios principales (Mohr).", delivers: "Diagrama de Mohr y tabla de propiedades.", forWho: "Estudiantes e ingenieros en formación.", tags: ["Mohr", "Centroides"] },
  { icon: <IconApps/>, title: "Utilidades Comunes", desc: "Conversión de unidades y utilidades matemáticas de ingeniería.", path: "Utilidades_Comunes", category: "Análisis Estructural",
    solves: "Herramientas de apoyo: conversión de unidades, interpolaciones y fórmulas frecuentes.", verifies: "Consistencia dimensional.", delivers: "Resultados numéricos en pantalla.", forWho: "Cualquier profesional del sector.", tags: ["Unidades", "Matemáticas"] },
  // ── GESTIÓN DE OBRA
  { icon: <IconDoc/>, title: "Registro Fotográfico", desc: "Control visual con geolocalización y reportes DOCX.", path: "Registro_Fotografico", category: "Gestión de Obra",
    solves: "Control visual de avance de obra con trazabilidad por fecha y ubicación.", verifies: "Consistencia de la documentación fotográfica por frente de trabajo.", delivers: "Reporte DOCX con fotos y comentarios.", forWho: "Residentes e interventores de obra.", tags: ["Fotos", "DOCX"] },
  { icon: <IconBarChart/>, title: "Estimador BIM 4D/5D", desc: "Cronograma (4D) y costos en el tiempo (5D).", path: "Estimador_4D_5D", category: "Gestión de Obra",
    solves: "Asociación de actividades al cronograma e integración de costos en el tiempo.", verifies: "Coherencia entre cronograma Gantt y presupuesto de actividades.", delivers: "Simulación BIM 4D/5D.", forWho: "Gerentes de proyecto y directores BIM.", tags: ["Cronograma", "BIM 5D"] },
  { icon: <IconGrid2/>, title: "Bitácora IA", desc: "Diario de obra inteligente asistido por IA.", path: "Bitacora_IA", category: "Gestión de Obra",
    solves: "Registro automático del diario de obra y procesamiento de minutas de reunión con IA.", verifies: "Consistencia de actas y compromisos.", delivers: "Actas DOCX estructuradas.", forWho: "Directores y residentes de obra.", tags: ["IA", "Diario de Obra"] },
  { icon: <IconGrid2/>, title: "Inventario y Consumo", desc: "Kardex valorizado, entradas PPP e imputación a frentes.", path: "ERP_Inventario_Materiales", category: "Gestión de Obra",
    solves: "Control de inventario valorizado de materiales de construcción en bodega.", verifies: "Precio Promedio Ponderado (PPP) y consumos por frente.", delivers: "Kardex mensual y alerta de stock mínimo.", forWho: "Jefes de bodega y directores de compras.", tags: ["Kardex", "PPP"] },
  { icon: <IconDoc/>, title: "Actas y Subcontratos", desc: "Cortes de obra, actas de pago y amortizaciones.", path: "ERP_Actas_Subcontratos", category: "Gestión de Obra",
    solves: "Gestión de contratos de subcontratistas, cortes de obra y generación de actas.", verifies: "Amortizaciones de anticipo y retenciones.", delivers: "Actas de pago en DOCX.", forWho: "Directores de obra y coordinadores jurídicos.", tags: ["Actas", "Contratos"] },
  { icon: <IconGrid2/>, title: "Personal y Equipos", desc: "Nómina, jornales, horas extras y reportes de maquinaria.", path: "ERP_Personal_Equipos", category: "Gestión de Obra",
    solves: "Control de nómina diaria de trabajadores y registro de uso de maquinaria.", verifies: "Horas laboradas vs. contratadas, tarifas legales.", delivers: "Reporte semanal de nómina y horas máquina.", forWho: "Directores de recursos humanos y obra.", tags: ["Nómina", "Maquinaria"] },
  { icon: <IconTrend/>, title: "Control de Desviaciones", desc: "EVM, curva S comparativa y análisis de desviaciones.", path: "ERP_Control_Desviaciones", category: "Gestión de Obra",
    solves: "Aplicación del método del Valor Ganado (EVM) para medir el desempeño de la obra.", verifies: "CPI y SPI reales vs. planificados, curva S.", delivers: "Tablero de alertas EVM.", forWho: "Gerentes y patrocinadores de proyecto.", tags: ["EVM", "Curva S"] },
  { icon: <IconTrend/>, title: "Dashboard Financiero", desc: "Consolidación financiera de la obra en tiempo real.", path: "ERP_Dashboard_Financiero", category: "Gestión de Obra",
    solves: "Consolidación de todos los flujos financieros de la obra (costos vs. ingresos).", verifies: "ROI proyectado, CPI/SPI y rentabilidad del contrato.", delivers: "Tablero ejecutivo interactivo.", forWho: "Gerentes de empresa y directores de proyecto.", tags: ["KPIs", "Rentabilidad"] },
];

// ─── Agrupación por categoría ─────────────────────────────────────
const CATEGORIES = [...new Set(MODULES.map(m => m.category))];

// ─── HexIcon Wrapper ──────────────────────────────────────────────
const HexIcon = ({ children, gold = true }: { children: React.ReactNode; gold?: boolean }) => (
  <div className={`flex items-center justify-center w-11 h-11 rounded-xl border transition-transform group-hover:scale-110 ${
    gold ? 'bg-[#f5c842]/10 border-[#f5c842]/30 text-[#f5c842]'
         : 'bg-[#1458f5]/10 border-[#1458f5]/30 text-[#1458f5]'
  }`}>
    {children}
  </div>
);

const ServiceStructoPro: React.FC<ServiceStructoProProps> = ({ openLightbox }) => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'StructoPro — Suite de Ingeniería Estructural | KONTE';
  }, []);

  const displayedModules = activeCategory === 'Todos'
    ? MODULES
    : MODULES.filter(m => m.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-[#040814] min-h-screen font-sans">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#090b10] via-[#0b1e45] to-[#07122a] py-20 border-b border-[rgba(245,200,66,0.2)] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.25]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%231458f5'/%3E%3C/svg%3E")`,
            maskImage: 'radial-gradient(circle at center, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 75%)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-[#f5c842]/10 border border-[#f5c842]/30 text-[#f5c842] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(245,200,66,0.15)]">
            <Zap size={14} /> LA NORMA ES EL LÍMITE
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tight mb-5">
            STRUCTO<span className="text-[#f5c842]">PRO</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-3 font-medium leading-relaxed">
            Suite de ingeniería estructural multinorma con control financiero ERP integrado.
          </p>
          <p className="text-sm text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed">
            Diseña bajo 14 normativas. Exporta memorias DOCX, planos DXF y modelos IFC. Controla presupuesto, inventario y contratos desde la misma plataforma en la nube.
          </p>
          <a href="https://structopro-app.streamlit.app" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c99f24] to-[#f5c842] hover:to-[#ffdf70] text-black px-10 py-5 rounded-xl font-black text-lg transition-all shadow-[0_0_40px_rgba(245,200,66,0.4)] active:scale-95">
            ACCEDER A STRUCTOPRO <ArrowRight size={22} />
          </a>
          <p className="text-slate-500 text-xs mt-4">Acceso en línea · Sin instalación · Workspace profesional</p>
        </div>
      </section>

      {/* ── TRUST STRIP — NORMATIVAS ────────────────────────────── */}
      <div className="bg-[#0f1a3a] border-y border-[rgba(20,88,245,0.2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-white text-lg font-bold uppercase tracking-wider mb-2">Normativas Internacionales Soportadas</h3>
          <div className="text-[#f5c842] text-xs font-bold uppercase tracking-widest mb-8">LA NORMA ES EL LÍMITE</div>
          
          <div className="flex flex-wrap justify-center gap-3 items-center max-w-5xl mx-auto">
            {[
              { flag: 'co', label: ' NSR-10 ', highlight: true },
              { flag: 'us', label: ' ACI 318-25 ', highlight: true },
              { flag: 'us', label: ' ACI 318-19 ', highlight: false },
              { flag: 'us', label: ' ACI 318-14 ', highlight: false },
              { flag: 'eu', label: 'UE · Eurocódigo', highlight: false },
              { flag: 'ec', label: 'NEC', highlight: false },
              { flag: 'pe', label: 'E.060', highlight: false },
              { flag: 'mx', label: 'NTC', highlight: false },
              { flag: 've', label: 'COVENIN', highlight: false },
              { flag: 'bo', label: 'NB', highlight: false },
              { flag: 'ar', label: 'CIRSOC', highlight: false },
              { flag: 'cl', label: 'NCh', highlight: false },
              { flag: 'es', label: 'EHE', highlight: false },
              { flag: 'br', label: 'ABNT', highlight: false },
            ].map(n => (
              <span key={n.label}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-wide transition-all ${
                  n.highlight
                    ? 'bg-[#f5c842]/12 border-[#f5c842]/40 text-white shadow-[0_0_12px_rgba(245,200,66,0.12)]'
                    : 'bg-[#0b1e45]/60 border-[rgba(20,88,245,0.3)] text-slate-300 hover:border-[#f5c842]/40 hover:text-white'
                }`}>
                <img src={n.flag === 'eu' ? 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg' : `https://flagpedia.net/data/flags/mini/${n.flag}.png`} alt=""
                  className="h-4 rounded-[2px] shadow-sm" />
                {n.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <div className="bg-[#090b10] py-14 border-b border-[#0b1e45]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: '33', s: '+', l: 'Módulos activos', c: 'text-white' },
            { v: '14', s: '', l: 'Normas soportadas', c: 'text-[#f5c842]' },
            { v: 'ERP', s: '', l: 'Control Financiero', c: 'text-white' },
            { v: '100', s: '%', l: 'Cloud Workspace', c: 'text-[#1458f5]' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className={`text-5xl font-black ${s.c} leading-none`}>{s.v}<span className="text-2xl">{s.s}</span></span>
              <span className="text-xs text-slate-400 mt-2 font-semibold uppercase tracking-widest">{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATÁLOGO COMPLETO DE MÓDULOS ────────────────────────── */}
      <section className="py-24 bg-[#07122a] border-y border-[#0b1e45]" id="modulos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">Catálogo Completo de Soluciones</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              {MODULES.length} módulos en 6 áreas de trabajo. Haz clic en cualquier tarjeta para ver su alcance técnico, normativas y entregables antes de abrir la app.
            </p>
          </div>

          {/* Filtro de categorías */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Todos', ...CATEGORIES].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#f5c842] text-black border-[#f5c842] shadow-[0_0_15px_rgba(245,200,66,0.3)]'
                    : 'bg-transparent text-slate-400 border-[rgba(20,88,245,0.3)] hover:border-[#f5c842]/40 hover:text-white'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedModules.map((mod, i) => (
              <div key={i} onClick={() => setSelectedModule(mod)}
                className="bg-[#090b10] flex flex-col p-5 rounded-xl border border-[rgba(20,88,245,0.25)] hover:border-[#f5c842] hover:shadow-[0_6px_24px_rgba(245,200,66,0.12)] transition-all group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <HexIcon>{mod.icon}</HexIcon>
                  <div>
                    <div className="text-[10px] font-bold text-[#1458f5] uppercase tracking-widest">{mod.category}</div>
                    <h4 className="font-bold text-white text-sm leading-tight">{mod.title}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed flex-grow line-clamp-3">{mod.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                  {mod.tags.map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#1458f5]/10 border border-[rgba(20,88,245,0.2)] text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="text-xs text-[#1458f5] font-bold flex items-center gap-1.5 group-hover:text-[#f5c842] transition-colors">
                  Ver alcance <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL: FICHA DE ALCANCE ─────────────────────────────── */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedModule(null)}>
          <div className="bg-[#0b1e45] border border-[rgba(245,200,66,0.3)] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            onClick={e => e.stopPropagation()}>
            {/* Header */}
            <div className="p-6 flex justify-between items-start bg-gradient-to-r from-[#090b10] to-[#0b1e45] rounded-t-2xl border-b border-[rgba(255,255,255,0.05)]">
              <div className="flex items-center gap-4">
                <HexIcon>{selectedModule.icon}</HexIcon>
                <div>
                  <div className="text-[10px] font-bold text-[#1458f5] tracking-widest uppercase">{selectedModule.category}</div>
                  <h3 className="text-xl font-black text-white">{selectedModule.title}</h3>
                </div>
              </div>
              <button onClick={() => setSelectedModule(null)} className="text-slate-400 hover:text-white bg-white/5 p-2 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
            {/* Body */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="flex items-center gap-2 text-[#f5c842] font-bold uppercase tracking-wider text-xs mb-2">
                  <CheckCircle2 size={15}/> ¿Qué resuelve?
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedModule.solves}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <h4 className="flex items-center gap-2 text-[#1458f5] font-bold uppercase tracking-wider text-xs mb-2">
                    <ShieldCheck size={15}/> ¿Qué verifica?
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedModule.verifies}</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-2">
                    <Download size={15}/> Entregables
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{selectedModule.delivers}</p>
                </div>
              </div>
              <div className="bg-[#090b10] p-4 rounded-xl border border-[rgba(255,255,255,0.04)]">
                <h4 className="flex items-center gap-2 text-slate-400 font-bold uppercase tracking-wider text-xs mb-1.5">
                  <Users size={13}/> Para quién
                </h4>
                <p className="text-slate-400 text-sm">{selectedModule.forWho}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#1458f5]/10 border border-[#1458f5]/20 rounded-full text-[10px] font-bold text-blue-300 uppercase tracking-wider">Cloud Workspace</span>
                <span className="px-3 py-1 bg-[#f5c842]/10 border border-[#f5c842]/20 rounded-full text-[10px] font-bold text-[#f5c842] uppercase tracking-wider">Plan Premium</span>
              </div>
            </div>
            {/* Footer CTAs */}
            <div className="p-5 bg-[#090b10] rounded-b-2xl border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row gap-3">
              <a href={`https://structopro-app.streamlit.app/${selectedModule.path}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#f5c842] hover:bg-[#c99f24] text-black font-black py-3 px-5 rounded-xl transition-colors text-sm">
                Abrir módulo <ExternalLink size={16}/>
              </a>
              <a href={`https://wa.me/573204468049?text=Hola%20KONTE%2C%20quisiera%20un%20ejemplo%20de%20entregable%20del%20módulo%20${encodeURIComponent(selectedModule.title)}.`}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-slate-600 hover:border-slate-400 text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm">
                Solicitar demo documental
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── BENEFICIOS ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#040814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={22}/>, title: "Diseño con criterio normativo", desc: "Memorias trazables alineadas con NSR-10, ACI 318 y 12 normas más.", gold: true },
              { icon: <Download size={22}/>, title: "Entregables BIM completos", desc: "DOCX, DXF con rótulo ICONTEC y modelos 3D en formato IFC abierto.", gold: false },
              { icon: <Laptop size={22}/>, title: "100% cloud, sin instalar", desc: "Corre desde cualquier navegador. Sin licencias de software adicionales.", gold: true },
              { icon: <Clock size={22}/>, title: "Velocidad y rentabilidad", desc: "Reduce el tiempo de cálculo y conecta directamente con el presupuesto.", gold: false },
            ].map((f, i) => (
              <div key={i} className={`p-7 rounded-2xl border transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
                f.gold ? 'border-[rgba(245,200,66,0.2)] bg-[#0b1e45]/40 hover:border-[#f5c842]/50'
                       : 'border-[rgba(20,88,245,0.2)] bg-[#0b1e45]/40 hover:border-[#1458f5]/50'
              }`}>
                <div className="mb-5"><HexIcon gold={f.gold}>{f.icon}</HexIcon></div>
                <h3 className="text-base font-bold text-white mb-3">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#07122a] border-t border-[#0b1e45]" id="pricing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">Planes y opciones de pago</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              Elige el método de pago que mejor se adapte a tu operación. StructoPro mantiene una tarifa de lanzamiento para tarifa preferencial de lanzamiento, con diferentes medios habilitados para facilitar el acceso desde Colombia y otros contextos digitales.
            </p>
          </div>

          <div className="bg-gradient-to-b from-[#0b1e45] to-[#090b10] rounded-2xl p-8 md:p-10 border border-[#f5c842] shadow-[0_0_40px_rgba(245,200,66,0.12)] relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#f5c842] text-black font-black px-5 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-lg">Lanzamiento</div>
            
            <div className="text-center mb-10 border-b border-[#1458f5]/30 pb-10">
              <h3 className="text-2xl font-bold text-[#f5c842] mb-3">Plan Fundadores</h3>
              <div className="text-5xl font-black text-white mb-5">$26.600 <span className="text-xl font-bold text-slate-400">COP/mes</span></div>
              <p className="text-blue-100 text-sm max-w-lg mx-auto leading-relaxed">
                Tarifa preferencial de lanzamiento para la etapa inicial de StructoPro. Las futuras altas podrán ingresar con una tarifa actualizada.
              </p>
            </div>

            <div className="mb-8 text-center">
              <h4 className="text-white font-bold text-lg mb-6">Paga con el método que prefieras</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                
                {/* Mercado Pago */}
                <a href="https://mpago.li/1hbuwpu" target="_blank" rel="noopener noreferrer"
                  className="md:col-span-2 flex items-center gap-4 bg-[#009EE3] hover:bg-[#0085c5] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 group">
                  <div className="bg-white p-1.5 rounded-full shrink-0 w-9 h-9 flex items-center justify-center">
                    <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadopago/logo__small.png" alt="Mercado Pago" className="w-full object-contain" />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="text-[15px]">Pagar con Mercado Pago</div>
                    <div className="text-xs text-blue-100 font-medium">Pago en línea inmediato</div>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                </a>

                {/* Nequi */}
                <a href="https://wa.me/573204468049?text=Hola%2C%20ya%20hice%20el%20pago%20por%20Nequi%20del%20Plan%20Fundadores%20de%20StructoPro." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#1A0E2A] border border-[#E90A6C]/50 hover:bg-[#25153A] hover:border-[#E90A6C] text-white font-bold py-3.5 px-6 rounded-xl transition-all group">
                  <div className="bg-white rounded-lg px-2 py-1 shrink-0 w-14 h-9 flex items-center justify-center shadow-sm">
                    <img src="https://cdn.worldvectorlogo.com/logos/nequi.svg" alt="Nequi" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="text-[15px]">Pagar por Nequi</div>
                    <div className="text-xs text-[#E90A6C] font-medium tracking-wide">320 446 8049</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#E90A6C] transition-all shrink-0" />
                </a>

                {/* Daviplata */}
                <a href="https://wa.me/573204468049?text=Hola%2C%20ya%20hice%20el%20pago%20por%20Daviplata%20del%20Plan%20Fundadores%20de%20StructoPro." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#ED1C24]/10 border border-[#ED1C24]/30 hover:bg-[#ED1C24]/20 hover:border-[#ED1C24]/60 text-white font-bold py-3.5 px-6 rounded-xl transition-all group">
                  <div className="bg-white rounded-lg px-2 py-1 shrink-0 w-14 h-9 flex items-center justify-center shadow-sm">
                    <img src="https://cdn.worldvectorlogo.com/logos/daviplata.svg" alt="Daviplata" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="text-[15px]">Pagar por Daviplata</div>
                    <div className="text-xs text-red-300 font-medium tracking-wide">320 446 8049</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-red-400 transition-all shrink-0" />
                </a>

                {/* PayPal */}
                <a href="https://paypal.me/cagch" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#003087] hover:bg-[#001C53] border border-[#0079C1]/30 hover:border-[#0079C1]/80 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:-translate-y-0.5 group">
                  <div className="bg-white rounded-lg px-2 py-1 shrink-0 w-14 h-9 flex items-center justify-center shadow-sm">
                    <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="text-[15px]">Pagar por PayPal</div>
                    <div className="text-xs text-[#00a6ff] font-medium tracking-wide">@cagch / Cesar Augusto Chaparro</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#00a6ff] transition-all shrink-0" />
                </a>

                {/* Binance */}
                <a href="https://wa.me/573204468049?text=Hola%2C%20quiero%20hacer%20el%20pago%20del%20Plan%20Fundadores%20por%20Binance%20Pay." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#181A20] border border-[#FCD535]/30 hover:border-[#FCD535]/80 hover:bg-[#1f222a] text-white font-bold py-3.5 px-6 rounded-xl transition-all group">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg" alt="Binance" className="w-7 object-contain" />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="text-[15px]">Solicitar pago por Binance</div>
                    <div className="text-xs text-[#FCD535] font-medium">Solicitar pago digital</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#FCD535] transition-all shrink-0" />
                </a>

                {/* Telegram */}
                <a href="https://t.me/konte2000" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#24A1DE]/10 border border-[#24A1DE]/30 hover:bg-[#24A1DE]/20 hover:border-[#24A1DE]/60 text-white font-bold py-3.5 px-6 rounded-xl transition-all group mt-2">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-8 object-contain" />
                  </div>
                  <div className="text-left flex-grow">
                    <div className="text-[15px]">Escribir por Telegram</div>
                    <div className="text-xs text-[#24A1DE] font-medium">Soporte y coordinación</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#24A1DE] transition-all shrink-0" />
                </a>

              </div>
            </div>

            <div className="bg-[#07122a] p-6 rounded-xl border border-blue-900/40 shadow-inner">
              <p className="text-[13px] text-slate-400 leading-relaxed text-center">
                <span className="font-bold text-white block mb-1">Nota Importante:</span> 
                Mercado Pago es el canal principal habilitado para pago en línea. 
                Para pagos mediante Nequi, Daviplata o Binance, recuerda enviar tu comprobante por WhatsApp o Telegram para validar y activar tu acceso.
              </p>
            </div>

          </div>
        </div>
      </section>

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

    </div>
  );
};

export default ServiceStructoPro;
