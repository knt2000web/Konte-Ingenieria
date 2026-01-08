import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    category: 'GESTIÓN NORMATIVA',
    title: 'Proyectos ante la ANI y Entes Gubernamentales',
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
    id: '2',
    category: 'CONSULTORÍA TÉCNICA Y ESTUDIOS DE CAMPO',
    title: 'Estudios Técnicos y Topografía',
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
    id: '4',
    category: 'INFRAESTRUCTURA DE SALUD',
    title: 'Diseño y Construcción Hospitalario',
    description: 'Expertos en infraestructura clínica de alta complejidad. Diseñamos entornos que fusionan el cumplimiento normativo riguroso (Res. 3100) con la humanización de espacios, garantizando asepsia, flujos eficientes y confort para pacientes y personal médico.',
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
  }
];

export const PROJECTS: Project[] = [
  // Diseños Estructurales y Construcción
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
    description: 'Proyecto integral de diseño y construcción para infraestructura de servicios hospitalarios.'
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
    description: 'Diseño arquitectónico y estructural para vivienda campestre de alto perfil.'
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
    description: 'Ampliación de infraestructura comercial y reforzamiento estructural.'
  },
  // Proyectos Hospitalarios (Nuevo)
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
    description: 'Diseño, construcción y adecuación de espacios hospitalarios de alta especificación. Quirófanos, salas de recuperación y áreas comunes bajo normativa vigente.'
  },
  // Vulnerabilidad Sísmica
  {
    id: '4',
    title: 'Vulnerabilidad Sísmica y Reconocimiento Edificio Salome',
    location: 'Duitama, Boyacá',
    type: 'Consultoría Sísmica NSR-10',
    year: '2022',
    image: 'https://i.imgur.com/UQ9LLM9.jpeg',
    images: ['https://i.imgur.com/UQ9LLM9.jpeg'],
    status: 'Completed',
    area: '411 m²',
    description: 'Estudio patológico y de vulnerabilidad sísmica según norma NSR-10.'
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
    description: 'Evaluación estructural y diseño de reforzamiento para instalaciones industriales.'
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
    description: 'Estudio de vulnerabilidad sísmica para planta industrial.'
  },
  // Estaciones de Servicio
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
    description: 'Consultoría de diseño hidráulico, pavimentos, carriles de aceleración y licencia ambiental.'
  },
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
    description: 'Prefactibilidad, diseño arquitectónico, estructural e hidráulico completo hasta licencia.'
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
    description: 'Gestión integral de licencias y diseño para estación de servicio.'
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
    description: 'Consultoría y construcción de infraestructura de servicio a gran escala.'
  },
  {
    id: '11',
    title: 'EDS La Llanerita',
    location: 'Guamo, Tolima',
    type: 'Estación de Servicio',
    year: '2024',
    image: 'https://i.imgur.com/lWor1n4.jpeg',
    images: [
      'https://i.imgur.com/lWor1n4.jpeg',
      'https://i.imgur.com/MmB2T7E.jpeg',
      'https://i.imgur.com/ZVY54xM.jpeg',
      'https://i.imgur.com/3N0GclR.jpeg',
      'https://i.imgur.com/oESbOUj.jpeg'
    ],
    status: 'In Progress',
    area: '20.000 m²',
    description: 'Mega proyecto de estación de servicio: prefactibilidad, diseño integral y construcción.'
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
    description: 'Consultoría para el reforzamiento estructural de estación existente.'
  },
  // Redes Contra Incendio
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
    description: 'Diseño de red contra incendios activa para instalaciones comerciales.'
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
    description: 'Diseño de red contra incendios pasiva para infraestructura hospitalaria.'
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
    description: 'Diseño estructural para vivienda recreacional.'
  }
];