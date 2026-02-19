
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    category: 'GESTIÓN NORMATIVA',
    title: 'Licencias de Construcción y Gestión ANI',
    description: 'Expertos en destrabar procesos administrativos ante Curadurías, ANI e INVIAS. Gestión especializada para Permisos de Ocupación de Vía (accesos, carriles de aceleración) y Licenciamiento Urbanístico integral (Licencias de Construcción, Reconocimiento, Demolición y Cerramiento).',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://i.imgur.com/0cakZKT.jpeg',
      'https://i.imgur.com/ZUrsq3i.jpeg',
      'https://i.imgur.com/SKOTGe5.jpeg',
      'https://i.imgur.com/DH3xrOm.jpeg',
      'https://i.imgur.com/kFXSUGb.jpeg',
      'https://i.imgur.com/EOTkdWh.jpeg',
      'https://i.imgur.com/kTUKXXV.jpeg'
    ],
    features: ['Permisos de Ocupación de Vía (ANI / INVIAS)', 'Licencias de Construcción (Obra Nueva, Ampliación)', 'Reconocimiento de Edificaciones y Demolición'],
    icon: 'verified_user'
  },
  {
    id: '3',
    category: 'INGENIERÍA ESPECIALIZADA',
    title: 'Ingeniería y Diseño Especializado',
    description: 'Desarrollamos ingeniería de detalle coordinada para garantizar la viabilidad constructiva y funcional de su proyecto, integrando tecnología BIM y normativa vigente.',
    image: 'https://i.imgur.com/gy1Wtmv.jpeg',
    images: [
      'https://i.imgur.com/gy1Wtmv.jpeg',
      'https://i.imgur.com/kWPgJzL.jpeg',
      'https://i.imgur.com/lWor1n4.jpeg',
      'https://i.imgur.com/ZVY54xM.jpeg',
      'https://i.imgur.com/3N0GclR.jpeg',
      'https://i.imgur.com/2ZkWVha.jpeg',
      'https://i.imgur.com/cGEKJ4Z.jpeg',
      'https://i.imgur.com/cYB6XGF.jpeg',
      'https://i.imgur.com/VmavSSe.jpeg',
      'https://i.imgur.com/h8iXy5P.jpeg',
      'https://i.imgur.com/ih3AnHi.jpeg',
      'https://i.imgur.com/iHcADyk.jpeg',
      'https://i.imgur.com/iOQmB1S.jpeg',
      'https://i.imgur.com/OfgR16d.jpeg',
      'https://i.imgur.com/L4KzsnF.jpeg',
      'https://i.imgur.com/j79yfzb.jpeg',
      'https://i.imgur.com/dcaFJac.jpeg',
      'https://i.imgur.com/8XJn5qg.jpeg',
      'https://i.imgur.com/kkauaER.jpeg',
      'https://i.imgur.com/I4wbTb1.jpeg'
    ],
    features: [
      'Diseño Estructural y Vulnerabilidad',
      'Diseño de Redes Hidrosanitarias',
      'Diseños Eléctricos',
      'Diseños de Redes de Gas',
      'Sistemas Contra Incendio (NSR-10 / NFPA)',
      'Modelado BIM y Visualización 3D'
    ],
    icon: 'layers'
  },
  {
    id: '2',
    category: 'CONSULTORÍA TÉCNICA',
    title: 'Consultoría Técnica y Estudios de Campo',
    description: 'Soporte técnico con equipos de precisión y laboratorios certificados. Realizamos Levantamientos Topográficos de alta precisión (GPS/Magna Sirgas segun IGAC), Estudios de Suelos y Geotecnia para cimentaciones seguras, Peritajes Técnicos de ingeniería forense y Avalúos Comerciales de inmuebles urbanos y rurales.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://i.imgur.com/AoBxnOX.jpeg', 'https://i.imgur.com/Y4aW5ud.jpeg', 'https://i.imgur.com/yF6bs24.jpeg',
      'https://i.imgur.com/taxhIth.jpeg', 'https://i.imgur.com/NwW89IY.jpeg', 'https://i.imgur.com/uC7X6Ip.jpeg',
      'https://i.imgur.com/A9luB5K.jpeg', 'https://i.imgur.com/KcnRNVO.jpeg', 'https://i.imgur.com/aVimjbN.jpeg',
      'https://i.imgur.com/G6tMhRO.jpeg', 'https://i.imgur.com/cnJyQLt.jpeg', 'https://i.imgur.com/61Ym3u6.jpeg',
      'https://i.imgur.com/MCN6VRJ.jpeg', 'https://i.imgur.com/o88oMyn.jpeg', 'https://i.imgur.com/8nomM2N.jpeg',
      'https://i.imgur.com/leAfufm.jpeg', 'https://i.imgur.com/dNygmgh.jpeg', 'https://i.imgur.com/sAImACh.jpeg',
      'https://i.imgur.com/8tWPUKU.jpeg', 'https://i.imgur.com/sZkz0gJ.jpeg', 'https://i.imgur.com/d856eCs.jpeg',
      'https://i.imgur.com/rM45Uyp.jpeg', 'https://i.imgur.com/3A2YnJv.jpeg', 'https://i.imgur.com/frwS0Cl.jpeg',
      'https://i.imgur.com/IoG0eax.jpeg', 'https://i.imgur.com/oEEuzjh.jpeg', 'https://i.imgur.com/On1Xo8U.jpeg',
      'https://i.imgur.com/2MyFD0k.jpeg', 'https://i.imgur.com/8RuyCj3.jpeg', 'https://i.imgur.com/wkxKARV.jpeg',
      'https://i.imgur.com/u1LgYMm.jpeg', 'https://i.imgur.com/wYvqeqd.jpeg', 'https://i.imgur.com/G1UYDsy.jpeg',
      'https://i.imgur.com/dsJxvEV.jpeg', 'https://i.imgur.com/6deAQhD.jpeg', 'https://i.imgur.com/5BN5pvl.jpeg',
      'https://i.imgur.com/W3qdJkA.jpeg', 'https://i.imgur.com/WEK1hoG.jpeg', 'https://i.imgur.com/EqUCW9f.jpeg',
      'https://i.imgur.com/xvGurX4.jpeg', 'https://i.imgur.com/0FwBt0X.jpeg', 'https://i.imgur.com/0equlv2.jpeg',
      'https://i.imgur.com/Lq72UC4.jpeg', 'https://i.imgur.com/Kk2hsKb.jpeg', 'https://i.imgur.com/oK0q2q4.jpeg',
      'https://i.imgur.com/PCXPmCE.jpeg', 'https://i.imgur.com/qQOWA3G.jpeg', 'https://i.imgur.com/7QTqOUT.jpeg',
      'https://i.imgur.com/4KVnX74.jpeg', 'https://i.imgur.com/3zzsymi.jpeg', 'https://i.imgur.com/VDVh0z8.jpeg',
      'https://i.imgur.com/unnoiqc.jpeg', 'https://i.imgur.com/S5eCaJq.jpeg', 'https://i.imgur.com/wpn5nwL.jpeg',
      'https://i.imgur.com/p2XKqyL.jpeg', 'https://i.imgur.com/IiT5XkF.jpeg', 'https://i.imgur.com/2h8uDAb.jpeg',
      'https://i.imgur.com/jrwEiza.jpeg', 'https://i.imgur.com/HPwFaMG.jpeg', 'https://i.imgur.com/Da8qvD5.jpeg',
      'https://i.imgur.com/moPLdon.jpeg', 'https://i.imgur.com/tR8zaiN.jpeg', 'https://i.imgur.com/iqbGmFO.jpeg',
      'https://i.imgur.com/dW9NauN.jpeg', 'https://i.imgur.com/6YdtCbW.jpeg'
    ],
    features: ['Levantamientos Topográficos de Precisión', 'Estudios de Suelos y Geotecnia', 'Peritajes Técnicos y Avalúos Comerciales'],
    icon: 'architecture'
  },
  {
    id: '5',
    category: 'PROPIEDAD HORIZONTAL',
    title: 'Mantenimiento y Gestión de Propiedad Horizontal',
    description: 'Soluciones integrales para la valorización de copropiedades. Especialistas en restauración de fachadas, impermeabilización técnica de cubiertas, obras civiles en zonas comunes y modernización de infraestructuras bajo normativa PH (Ley 675).',
    image: 'https://i.imgur.com/uWQ2lnV.jpeg',
    images: [
      'https://i.imgur.com/uWQ2lnV.jpeg',
      'https://i.imgur.com/VQds1N0.jpeg',
      'https://i.imgur.com/sv5JNpt.jpeg',
      'https://i.imgur.com/VzAhdFh.jpeg',
      'https://i.imgur.com/VQv31Cd.jpeg',
      'https://i.imgur.com/Q5WLYgH.jpeg',
      'https://i.imgur.com/1F6zccP.jpeg',
      'https://i.imgur.com/NXfmcyv.jpeg',
      'https://i.imgur.com/qzumOZg.jpeg',
      'https://i.imgur.com/rpIFIjZ.jpeg',
      'https://i.imgur.com/N6MH44G.jpeg'
    ],
    features: [
      'Mantenimiento y Restauración de Fachadas',
      'Impermeabilización Técnica de Cubiertas',
      'Remodelación de Zonas Comunes y Porterías',
      'Refuerzo Estructural y Paisajismo'
    ],
    icon: 'apartment'
  },
  {
    id: '4',
    category: 'INFRAESTRUCTURA DE SALUD',
    title: 'Diseño y Construcción Hospitalario',
    description: 'Expertos en infraestructura clínica de alta complejidad. Diseñamos entornos que fusionan el cumplimiento normativo riguroso (Res. 3100) con la humanización de espacios, garantizando asepsia y eficiencia.',
    image: 'https://i.imgur.com/2MSg8r8.jpeg',
    images: [
      'https://i.imgur.com/ufW0oT0.jpeg',
      'https://i.imgur.com/2MSg8r8.jpeg',
      'https://i.imgur.com/QdUq7DJ.jpeg',
      'https://i.imgur.com/NMAw6HO.jpeg',
      'https://i.imgur.com/vlqPgoZ.jpeg',
      'https://i.imgur.com/mqpjTwy.jpeg',
      'https://i.imgur.com/wz088yV.jpeg',
      'https://i.imgur.com/cJ2scgB.jpeg'
    ],
    features: ['Habilitación en Salud y Normativa 3100', 'Redes de Gases Medicinales y Aire Acondicionado', 'Arquitectura Humanizada y Funcional'],
    icon: 'local_hospital'
  },
  {
    id: '6',
    category: 'SOLUCIONES ESPECIALIZADAS',
    title: 'KONTE Fuel-Shield',
    description: 'Diagnóstico, limpieza y micro-filtración de tanques de almacenamiento de diésel. Garantizamos la calidad del combustible para flotas modernas, previniendo daños en inyectores y asegurando el cumplimiento de estándares internacionales ISO 4406.',
    image: 'https://i.imgur.com/eZh9AGz.jpeg', 
    images: [
       'https://i.imgur.com/eZh9AGz.jpeg', 
       'https://i.imgur.com/MYOBl48.jpeg',
       'https://i.imgur.com/52vI0Sk.jpeg',
       'https://i.imgur.com/ENyFxia.jpeg',
       'https://i.imgur.com/TalpuBW.jpeg'
    ],
    features: ['Micro-filtración (2 micras)', 'Limpieza de Tanques', 'Certificación ISO 4406'],
    icon: 'water_drop'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '8',
    title: 'EDS El Triángulo',
    location: 'Duitama, Boyacá',
    type: 'Estación de Servicio',
    year: '2021',
    image: 'https://i.imgur.com/JtVDBtW.jpeg',
    images: ['https://i.imgur.com/JtVDBtW.jpeg'],
    status: 'Completed',
    area: '6.013 m²',
    description: 'Prefactibilidad, diseño arquitectónico, estructural e hidráulico completo hasta licencia.',
    slug: 'eds-el-triangulo-duitama',
    seoH1: 'Construcción EDS El Triángulo en Duitama, Boyacá',
    fullDescription: 'Este proyecto representó un desafío integral de ingeniería para la materialización de una Estación de Servicio de 6.013 m² en Duitama. KONTE ejecutó la fase completa de prefactibilidad y diseño, abarcando desde la topografía inicial hasta la ingeniería de detalle de redes hidráulicas y sistemas de contención de hidrocarburos. Se diseñaron estructuras metálicas de grandes luces para el canopy, optimizando el área de maniobra para vehículos pesados. El cumplimiento de la Resolución 1361 de 2012 del Ministerio de Minas y Energía fue el eje central, garantizando distanciamientos de seguridad y especificaciones técnicas en tanques y tuberías. La gestión incluyó la obtención de la Licencia de Construcción y permisos de vertimientos, entregando al cliente un proyecto llave en mano a nivel de consultoría, listo para operar bajo los más altos estándares de seguridad y eficiencia comercial.',
    seoKeywords: 'Estación de Servicio Duitama, Construcción EDS Boyacá, Normativa 1361, Ingeniería Hidráulica EDS, Diseño Estructural Canopy'
  },
  {
    id: '7',
    title: 'EDS Balcones de la Ceiba',
    location: 'Honda, Tolima',
    type: 'Estación de Servicio',
    year: '2023',
    image: 'https://i.imgur.com/pKKUadd.jpeg',
    images: [
      'https://i.imgur.com/pKKUadd.jpeg',
      'https://i.imgur.com/BFPmSmz.jpeg'
    ],
    status: 'Completed',
    area: '10.000 m²',
    description: 'Consultoría de diseño hidráulico, pavimentos, carriles de aceleración y licencia ambiental.',
    slug: 'eds-balcones-ceiba-honda',
    seoH1: 'Diseño y Construcción EDS Balcones de la Ceiba en Honda, Tolima',
    fullDescription: 'Ubicada estratégicamente en el corredor vial nacional en Honda, Tolima, la EDS Balcones de la Ceiba es un complejo de 10.000 m² diseñado para soportar alto tráfico de carga. KONTE lideró la consultoría técnica especializada, enfocándose en el diseño geométrico de carriles de aceleración y desaceleración, cumpliendo rigurosamente con los manuales de la ANI e INVIAS para garantizar la seguridad vial en el acceso. La ingeniería de pavimentos rígidos se calculó para cargas extremas, asegurando durabilidad y bajo mantenimiento. Adicionalmente, se gestionó la Licencia Ambiental integral, diseñando sistemas de tratamiento de aguas aceitosas y manejo de vertimientos que protegen el ecosistema local. Este proyecto es un referente de cómo la ingeniería civil y ambiental convergen para crear infraestructura de servicios sostenible y funcional.',
    seoKeywords: 'EDS Honda Tolima, Carriles de Aceleración ANI, Licencia Ambiental EDS, Pavimentos Rígidos, Diseño Geométrico Vías, Estación de Servicio Tolima'
  },
  {
    id: '10',
    title: 'EDS Guaimaral',
    location: 'Cúcuta, Norte de Santander',
    type: 'Estación de Servicio',
    year: '2019',
    image: 'https://i.imgur.com/oqjq3w2.jpeg',
    images: [
      'https://i.imgur.com/oqjq3w2.jpeg',
      'https://i.imgur.com/LqKO52L.jpeg',
      'https://i.imgur.com/HllvG0L.jpeg',
      'https://i.imgur.com/mYd5Ly0.jpeg'
    ],
    status: 'Completed',
    area: '12.000 m²',
    description: 'Consultoría y construcción de infraestructura de servicio a gran escala.',
    slug: 'eds-guaimaral-cucuta',
    seoH1: 'Mega Estación de Servicio Guaimaral en Cúcuta, Norte de Santander',
    fullDescription: 'La EDS Guaimaral en Cúcuta se erige como una de las infraestructuras de servicio más grandes de la región, con una extensión de 12.000 m². KONTE desarrolló una ingeniería de detalle exhaustiva, priorizando la eficiencia operativa y la seguridad industrial. Se realizó la coordinación BIM de redes complejas de combustible, eléctricas y de datos, eliminando interferencias constructivas. El diseño de drenajes pluviales fue crítico debido a la extensión del área impermeable, implementando sistemas de retención y manejo de escorrentía. La gestión ante planeación municipal fue un éxito rotundo, logrando la aprobación de licencias para un proyecto de alto impacto urbano. La construcción incluyó edificaciones administrativas modernas y zonas de servicios complementarios, consolidando a Guaimaral como un hub de servicios integral en Norte de Santander.',
    seoKeywords: 'EDS Cúcuta, Infraestructura Vial Norte de Santander, Redes Industriales Combustible, Construcción EDS, Coordinación BIM, Drenaje Pluvial'
  },
  {
    id: '11',
    title: 'EDS La Llanerita',
    location: 'Guamo, Tolima',
    type: 'Estación de Servicio',
    year: '2024',
    image: 'https://i.imgur.com/pXQd2kW.jpeg',
    images: [
      'https://i.imgur.com/pXQd2kW.jpeg',
      'https://i.imgur.com/qe9ByLs.jpeg',
      'https://i.imgur.com/Gc84dEi.jpeg',
      'https://i.imgur.com/lWor1n4.jpeg',
      'https://i.imgur.com/MmB2T7E.jpeg',
      'https://i.imgur.com/ZVY54xM.jpeg',
      'https://i.imgur.com/3N0GclR.jpeg',
      'https://i.imgur.com/oESbOUj.jpeg'
    ],
    status: 'In Progress',
    area: '20.000 m²',
    description: 'Mega proyecto de estación de servicio: prefactibilidad, diseño integral y construcción.',
    slug: 'eds-la-llanerita-guamo',
    seoH1: 'Proyecto EDS La Llanerita 4G en Guamo, Tolima',
    fullDescription: 'La EDS La Llanerita es un mega proyecto de infraestructura de 20.000 m² en Guamo, Tolima, diseñado para atender la demanda de corredores viales de cuarta generación (4G). KONTE está a cargo de la consultoría técnica integral, desplegando un equipo multidisciplinario para abarcar todas las fases del proyecto. Desde levantamientos topográficos de alta precisión hasta el diseño de una Planta de Tratamiento de Aguas Residuales (PTAR) propia. El diseño contempla amplias zonas de parqueo para tractomulas, calculadas para resistir cargas dinámicas severas. Se integraron sistemas de protección contra incendios bajo norma NFPA, con red de hidrantes y monitores. La ingeniería hidrológica fue fundamental para garantizar la seguridad del predio ante eventos climáticos. Este proyecto en ejecución representa la vanguardia en diseño de estaciones de servicio en Colombia.',
    seoKeywords: 'Estación de Servicio Guamo, Proyecto 4G Tolima, Parqueaderos Carga Pesada, PTAR EDS, Ingeniería Hidrológica, Sistema Contra Incendios NFPA'
  },
  {
    id: 'hosp-sogamoso',
    title: 'Hospital Regional de Sogamoso',
    location: 'Sogamoso, Boyacá',
    type: 'Infraestructura Hospitalaria',
    year: '2023',
    image: 'https://i.imgur.com/sUx531d.jpeg',
    images: [
      'https://i.imgur.com/sUx531d.jpeg', 'https://i.imgur.com/GewT0iT.jpeg', 'https://i.imgur.com/H2i7p30.jpeg', 'https://i.imgur.com/YOUwhVK.jpeg',
      'https://i.imgur.com/IiFeSS6.jpeg', 'https://i.imgur.com/hpZ854Q.jpeg', 'https://i.imgur.com/sDSMnbi.jpeg', 'https://i.imgur.com/ax6qsg5.jpeg',
      'https://i.imgur.com/T1DUIJU.jpeg', 'https://i.imgur.com/iCLcaji.jpeg', 'https://i.imgur.com/YUryW75.jpeg', 'https://i.imgur.com/PuCXns4.jpeg',
      'https://i.imgur.com/VAB5pSu.jpeg', 'https://i.imgur.com/b5Vqy6O.jpeg', 'https://i.imgur.com/XC1KNH3.jpeg', 'https://i.imgur.com/UeThtyU.jpeg',
      'https://i.imgur.com/EA78jsm.jpeg', 'https://i.imgur.com/d8NExZt.jpeg', 'https://i.imgur.com/IPuwtzr.jpeg', 'https://i.imgur.com/OsQj91z.jpeg',
      'https://i.imgur.com/bD5CeLD.jpeg', 'https://i.imgur.com/V2ldBEc.jpeg', 'https://i.imgur.com/UqyISDP.jpeg', 'https://i.imgur.com/HTM6N17.jpeg',
      'https://i.imgur.com/7eHZ7QY.jpeg', 'https://i.imgur.com/Fw8QeIk.jpeg', 'https://i.imgur.com/tliv7KW.jpeg', 'https://i.imgur.com/HQf1FFx.jpeg',
      'https://i.imgur.com/7xHFIHi.jpeg', 'https://i.imgur.com/58lUwEn.jpeg', 'https://i.imgur.com/CXj12rj.jpeg', 'https://i.imgur.com/G2LbwXe.jpeg',
      'https://i.imgur.com/FQDUs7N.jpeg', 'https://i.imgur.com/bdo0GRV.jpeg', 'https://i.imgur.com/7Iq78j1.jpeg', 'https://i.imgur.com/z6t2Hlx.jpeg',
      'https://i.imgur.com/gih0yMm.jpeg', 'https://i.imgur.com/y6rZ2jm.jpeg', 'https://i.imgur.com/03n7Yyq.jpeg', 'https://i.imgur.com/IFpyVDt.jpeg',
      'https://i.imgur.com/oyFN2CO.jpeg', 'https://i.imgur.com/z6AsHdS.jpeg', 'https://i.imgur.com/jJjAhk4.jpeg', 'https://i.imgur.com/SBIjcnN.jpeg',
      'https://i.imgur.com/ts2M3kZ.jpeg', 'https://i.imgur.com/fgLJcdu.jpeg', 'https://i.imgur.com/B4TNq2R.jpeg', 'https://i.imgur.com/ZVMU7cv.jpeg',
      'https://i.imgur.com/Fvn1CSc.jpeg', 'https://i.imgur.com/ncGmXsp.jpeg', 'https://i.imgur.com/W2JgKSw.jpeg', 'https://i.imgur.com/9SHJB64.jpeg',
      'https://i.imgur.com/ghz3kUX.jpeg', 'https://i.imgur.com/0aG7rr9.jpeg', 'https://i.imgur.com/Dno1Gii.jpeg',
      'https://i.imgur.com/dqOQcTE.jpeg', 'https://i.imgur.com/H7aPnQx.jpeg', 'https://i.imgur.com/WY6QaTP.jpeg', 'https://i.imgur.com/8qdwhY6.jpeg',
      'https://i.imgur.com/knvEgct.jpeg'
    ],
    status: 'Completed',
    description: 'Mejoramiento integral de infraestructura en áreas críticas: UCI Neonatal, Urgencias y Diseño Especializado de Central de Mezclas.',
    slug: 'hospital-regional-sogamoso',
    seoH1: 'Adecuación UCI Neonatal y Urgencias Hospital Regional de Sogamoso',
    fullDescription: 'Este proyecto de alta complejidad en el Hospital Regional de Sogamoso abarcó la intervención integral de áreas críticas bajo estrictos estándares de la Resolución 3100 de 2019. Se realizó el diseño y adecuación de la UCI Neonatal, garantizando condiciones de asepsia, control de aire y redes de gases medicinales certificadas. Adicionalmente, se ejecutó la modernización del servicio de Urgencias y el diseño especializado de la Central de Mezclas, un espacio vital que requiere condiciones de presión diferencial y acabados sanitarios de grado farmacéutico. La obra incluyó reforzamiento de redes eléctricas de respaldo y sistemas de climatización con filtración HEPA, asegurando la operatividad continua y la seguridad del paciente. La intervención de KONTE garantizó que la infraestructura cumpliera con los más altos estándares de habilitación en salud.',
    seoKeywords: 'Infraestructura Hospitalaria Boyacá, Resolución 3100 Salud, Gases Medicinales, Ingeniería Clínica, UCI Neonatal Diseño, Aire Acondicionado Hospitalario'
  },
  {
    id: '14',
    title: 'ESE Hospital Soata',
    location: 'Soata, Boyacá',
    type: 'Seguridad Hospitalaria',
    year: '2023',
    image: 'https://i.imgur.com/VAxJcpF.jpeg',
    images: [
      'https://i.imgur.com/VAxJcpF.jpeg',
      'https://i.imgur.com/3WJfPUd.jpeg',
      'https://i.imgur.com/sw4lujd.jpeg'
    ],
    status: 'Completed',
    description: 'Diseño de red contra incendios pasiva para infraestructura hospitalaria.',
    slug: 'ese-hospital-soata',
    seoH1: 'Red Contra Incendios y Seguridad Humana ESE Hospital San Antonio de Soatá',
    fullDescription: 'Intervención técnica especializada en la ESE Hospital San Antonio de Soatá, Boyacá, enfocada prioritariamente en la seguridad humana y la protección contra incendios. KONTE ejecutó el diseño e implementación de sistemas de protección pasiva, un componente crítico que incluye la compartimentación de áreas con muros resistentes al fuego y la instalación de sellos cortafuego certificados en pasos de instalaciones eléctricas e hidrosanitarias. Se realizó un diagnóstico hidráulico de la red existente y se diseñó la actualización de la red contra incendios activa, asegurando caudal y presión normativa en gabinetes y rociadores. Este proyecto es vital para el proceso de acreditación hospitalaria, cumpliendo a cabalidad con los Títulos J y K de la NSR-10 y estándares NFPA aplicables a instituciones de salud de mediana y alta complejidad.',
    seoKeywords: 'Red Contra Incendios Hospitalaria, Seguridad Humana NSR-10, Hospital Soatá, Protección Pasiva, Sellos Cortafuego, Ingeniería Hospitalaria Boyacá'
  },
  {
    id: '4',
    title: 'Vulnerabilidad Sísmica Edificio Salome',
    location: 'Duitama, Boyacá',
    type: 'Consultoría Sísmica NSR-10',
    year: '2022',
    image: 'https://i.imgur.com/UQ9LLM9.jpeg',
    images: ['https://i.imgur.com/UQ9LLM9.jpeg'],
    status: 'Completed',
    area: '411 m²',
    description: 'Estudio patológico y de vulnerabilidad sísmica según norma NSR-10.',
    slug: 'vulnerabilidad-sismica-edificio-salome',
    seoH1: 'Estudio de Vulnerabilidad Sísmica Edificio Salome en Duitama',
    fullDescription: 'Ejecución de un estudio detallado de vulnerabilidad sísmica para el Edificio Salome en Duitama, Boyacá, con un área construida de 411 m². El proyecto se desarrolló en estricto cumplimiento del Reglamento Colombiano de Construcción Sismo Resistente (NSR-10), títulos A (Requisitos Generales de Diseño y Construcción Sismo Resistente) y B (Cargas). Se realizaron exploraciones de campo destructivas y no destructivas para determinar la calidad de los materiales existentes (concreto y acero), junto con un levantamiento geométrico estructural y análisis patológico de la edificación. Mediante modelación computacional avanzada, se evaluó el desempeño de la estructura ante solicitaciones sísmicas, determinando el índice de sobreesfuerzo y flexibilidad. El entregable final incluyó un diseño de reforzamiento estructural optimizado para garantizar la seguridad de los ocupantes y la estabilidad de la edificación, permitiendo su reconocimiento legal y titulación.',
    seoKeywords: 'Vulnerabilidad Sísmica Duitama, Reforzamiento Estructural NSR-10, Patología Estructural, Ingeniería Sismorresistente, Modelación Estructural, Edificio Salome'
  },
  {
    id: '1',
    title: 'Lavanderías Institucionales y Hospitalarias',
    location: 'Duitama y Tunja, Boyacá',
    type: 'Diseño y Construcción',
    year: '2023',
    image: 'https://i.imgur.com/dcaFJac.jpeg',
    images: [
      'https://i.imgur.com/dcaFJac.jpeg',
      'https://i.imgur.com/pcfy5Zg.jpeg',
      'https://i.imgur.com/FlMGCtq.jpeg',
      'https://i.imgur.com/BnHC9Vr.jpeg'
    ],
    status: 'Completed',
    area: '750 m²',
    description: 'Proyecto integral de diseño y construcción para infraestructura de servicios hospitalarios.',
    slug: 'lavanderias-institucionales-boyaca'
  },
  {
    id: '2',
    title: 'Casa Campestre Conjunto Jischana',
    location: 'Tibasosa, Boyacá',
    type: 'Residencial',
    year: '2023',
    image: 'https://i.imgur.com/QAX4ELC.jpeg',
    images: [
      'https://i.imgur.com/QAX4ELC.jpeg',
      'https://i.imgur.com/xN6jFWk.jpeg',
      'https://i.imgur.com/h8iXy5P.jpeg',
      'https://i.imgur.com/ih3AnHi.jpeg',
      'https://i.imgur.com/iHcADyk.jpeg',
      'https://i.imgur.com/tOr3Tzr.jpeg',
      'https://i.imgur.com/IRHvk8o.jpeg'
    ],
    status: 'Completed',
    area: '250 m²',
    description: 'Diseño arquitectónico y estructural para vivienda campestre de alto perfil.',
    slug: 'casa-campestre-jischana-tibasosa'
  },
  {
    id: '3',
    title: 'Ampliación Comercial Superservicios',
    location: 'Duitama, Boyacá',
    type: 'Comercial',
    year: '2022',
    image: 'https://i.imgur.com/uLK4Y4S.jpeg',
    images: [
      'https://i.imgur.com/uLK4Y4S.jpeg',
      'https://i.imgur.com/D2KoVvl.jpeg',
      'https://i.imgur.com/8XJn5qg.jpeg',
      'https://i.imgur.com/kkauaER.jpeg',
      'https://i.imgur.com/hykH8kS.jpeg',
      'https://i.imgur.com/T5WHinX.jpeg',
      'https://i.imgur.com/12xckUq.jpeg',
      'https://i.imgur.com/oWkEmot.jpeg',
      'https://i.imgur.com/XpCk4GS.jpeg',
      'https://i.imgur.com/kcWZ86D.jpeg',
      'https://i.imgur.com/CCpe0iZ.jpeg',
      'https://i.imgur.com/NKmuVwH.jpeg'
    ],
    status: 'Completed',
    area: '350 m²',
    description: 'Ampliación de infraestructura comercial y reforzamiento estructural.',
    slug: 'ampliacion-comercial-superservicios-duitama'
  },
  {
    id: '16',
    title: 'Infraestructura Clínica y Hospitalaria',
    location: 'Nivel Nacional',
    type: 'Diseño Hospitalario',
    year: '2024',
    image: 'https://i.imgur.com/2MSg8r8.jpeg',
    images: [
      'https://i.imgur.com/ufW0oT0.jpeg',
      'https://i.imgur.com/2MSg8r8.jpeg',
      'https://i.imgur.com/QdUq7DJ.jpeg',
      'https://i.imgur.com/NMAw6HO.jpeg',
      'https://i.imgur.com/vlqPgoZ.jpeg',
      'https://i.imgur.com/mqpjTwy.jpeg',
      'https://i.imgur.com/wz088yV.jpeg',
      'https://i.imgur.com/cJ2scgB.jpeg'
    ],
    status: 'Completed',
    description: 'Diseño, construcción y adecuación de espacios hospitalarios de alta especificación.',
    slug: 'infraestructura-clinica-nacional'
  },
  {
    id: '5',
    title: 'Vulnerabilidad Sísmica Lavandería MULTILAV',
    location: 'Duitama, Boyacá',
    type: 'Consultoría Sísmica NSR-10',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800',
    status: 'Completed',
    area: '325 m²',
    description: 'Evaluación estructural y diseño de reforzamiento para instalaciones industriales.',
    slug: 'vulnerabilidad-multilav-duitama'
  },
  {
    id: '6',
    title: 'Planta MULTILAV Tunja',
    location: 'Tunja, Boyacá',
    type: 'Consultoría Sísmica NSR-10',
    year: '2023',
    image: 'https://i.imgur.com/dcaFJac.jpeg',
    images: [
      'https://i.imgur.com/dcaFJac.jpeg',
      'https://i.imgur.com/pcfy5Zg.jpeg',
      'https://i.imgur.com/FlMGCtq.jpeg',
      'https://i.imgur.com/w8uxuc0.jpeg'
    ],
    status: 'Completed',
    area: '275 m²',
    description: 'Estudio de vulnerabilidad sísmica para planta industrial.',
    slug: 'planta-multilav-tunja'
  },
  {
    id: '9',
    title: 'EDS Pueblito Pepsi',
    location: 'Cúcuta, Norte de Santander',
    type: 'Estación de Servicio',
    year: '2020',
    image: 'https://i.imgur.com/tF7ldJm.jpeg',
    images: [
      'https://i.imgur.com/tF7ldJm.jpeg',
      'https://i.imgur.com/CGbCIaH.jpeg',
      'https://i.imgur.com/h2HwzRx.jpeg',
      'https://i.imgur.com/TW3FG2h.jpeg'
    ],
    status: 'Completed',
    area: '1.550 m²',
    description: 'Gestión integral de licencias y diseño para estación de servicio.',
    slug: 'eds-pueblito-pepsi-cucuta'
  },
  {
    id: '12',
    title: 'Reforzamiento EDS Peña Blanca',
    location: 'Carmen de Apicalá, Tolima',
    type: 'Consultoría Estructural',
    year: '2024',
    image: 'https://i.imgur.com/lgTMxUw.jpeg',
    images: [
      'https://i.imgur.com/lgTMxUw.jpeg',
      'https://i.imgur.com/wCfz0pq.jpeg',
      'https://i.imgur.com/ZjP3RJ9.jpeg',
      'https://i.imgur.com/bGuF8HF.jpeg',
      'https://i.imgur.com/jz8fDRR.jpeg'
    ],
    status: 'In Progress',
    description: 'Consultoría para el reforzamiento estructural de estación existente.',
    slug: 'reforzamiento-eds-pena-blanca'
  },
  {
    id: '13',
    title: 'Red Contra Incendios Superservicios',
    location: 'Boyacá',
    type: 'Seguridad Industrial',
    year: '2025',
    image: 'https://i.imgur.com/LesCiy7.jpeg',
    images: [
      'https://i.imgur.com/LesCiy7.jpeg',
      'https://i.imgur.com/4cWbRVH.jpeg',
      'https://i.imgur.com/EDlxA0j.jpeg',
      'https://i.imgur.com/uweBWCP.jpeg'
    ],
    status: 'Planning',
    description: 'Diseño de red contra incendios activa para instalaciones comerciales.',
    slug: 'red-contra-incendios-superservicios'
  },
  {
    id: '15',
    title: 'Cabaña Campestre Villavicencio',
    location: 'Villavicencio, Meta',
    type: 'Diseño Estructural',
    year: '2024',
    image: 'https://i.imgur.com/5dhwfqQ.jpeg',
    images: [
      'https://i.imgur.com/5dhwfqQ.jpeg',
      'https://i.imgur.com/toiE2QU.jpeg',
      'https://i.imgur.com/eYRhkRE.jpeg',
      'https://i.imgur.com/shPqQQw.jpeg',
      'https://i.imgur.com/sk5gWw8.jpeg'
    ],
    status: 'In Progress',
    description: 'Diseño estructural para vivienda recreacional.',
    slug: 'cabana-campestre-villavicencio'
  }
];
