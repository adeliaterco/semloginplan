import module1 from '@/assets/module-1.png';
import module2 from '@/assets/module-2.png';
import module3 from '@/assets/module-3.png';
import module4 from '@/assets/module-4.png';
import module5 from '@/assets/module-5.png';
import module6 from '@/assets/module-6.png';
import module7 from '@/assets/module-7.png';
import module8 from '@/assets/module-8.png';
import module9 from '@/assets/module-9.png';
import module10 from '@/assets/module-10.png';
import module11 from '@/assets/module-11.png';
import module12 from '@/assets/module-12.png';
import module13 from '@/assets/module-13.png';
import module14 from '@/assets/module-14.png';
import module15 from '@/assets/module-15.png';
import module16 from '@/assets/module-16.png';

export interface ModuleSection {
  title: string;
  content: string;
}

export interface ModuleQuiz {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  description: string;
  sections: ModuleSection[];
  doList: string[];
  dontList: string[];
  quote: { text: string; author: string };
  quiz: ModuleQuiz[];
  exercise: { title: string; description: string; steps: string[] };
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Introducción: La Ciencia de la Reconquista',
    subtitle: 'Fundamentos científicos del proceso',
    image: module1,
    duration: '20 min',
    description: 'Descubre los principios psicológicos y científicos detrás de la reconquista efectiva.',
    sections: [
      {
        title: 'La Psicología del Apego',
        content: 'Las relaciones se basan en patrones de apego desarrollados desde la infancia. Entender tu estilo de apego y el de tu ex es fundamental para reconectar de manera saludable. Los estudios demuestran que el 70% de las parejas que se reconcilian exitosamente lo hacen cambiando sus patrones de comunicación.'
      },
      {
        title: 'El Ciclo Emocional Post-Ruptura',
        content: 'Después de una ruptura, tanto tú como tu ex pasarán por fases predecibles: shock, negación, negociación, depresión y aceptación. Este programa te guiará para usar cada fase estratégicamente.'
      },
      {
        title: 'Por Qué Funciona Este Método',
        content: 'PLAN A combina psicología conductual, teoría del apego y estrategias de comunicación probadas. No se trata de manipulación, sino de convertirte en la mejor versión de ti mismo.'
      }
    ],
    doList: [
      'Mantén la calma y evita decisiones impulsivas',
      'Documenta tus emociones diariamente',
      'Sigue el programa día a día sin saltar pasos',
      'Confía en el proceso aunque duela'
    ],
    dontList: [
      'No contactes a tu ex durante los primeros 7 días',
      'No stalkes sus redes sociales',
      'No hables mal de ella con amigos mutuos',
      'No intentes dar celos artificialmente'
    ],
    quote: {
      text: 'El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.',
      author: 'Proverbio Chino'
    },
    quiz: [
      {
        question: '¿Cuál es el primer paso más importante después de una ruptura?',
        options: ['Contactar a tu ex inmediatamente', 'Tomarte tiempo para reflexionar', 'Empezar a salir con otras personas', 'Publicar en redes sociales'],
        correctIndex: 1
      },
      {
        question: '¿Qué porcentaje de parejas se reconcilian cambiando sus patrones de comunicación?',
        options: ['30%', '50%', '70%', '90%'],
        correctIndex: 2
      },
      {
        question: '¿En qué se basa el método PLAN A?',
        options: ['Manipulación emocional', 'Psicología conductual y teoría del apego', 'Técnicas de seducción', 'Presión social'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Carta de Intención',
      description: 'Escribe una carta (que NO enviarás) expresando tus sentimientos y objetivos para los próximos 21 días.',
      steps: [
        'Encuentra un lugar tranquilo donde puedas escribir sin interrupciones',
        'Escribe por qué quieres recuperar esta relación',
        'Lista 3 cosas que cambiarías de ti mismo',
        'Describe cómo te ves en 21 días',
        'Guarda la carta y léela al final del programa'
      ]
    }
  },
  {
    id: 2,
    title: 'Modelo Mental del Ganador',
    subtitle: 'Reprograma tu mentalidad',
    image: module2,
    duration: '25 min',
    description: 'Desarrolla la mentalidad necesaria para enfrentar este proceso con fortaleza y claridad.',
    sections: [
      {
        title: 'El Poder de la Mentalidad',
        content: 'Tu mentalidad determina tus acciones. Una mentalidad de escasez te hace actuar desesperadamente, mientras que una mentalidad de abundancia te permite tomar decisiones estratégicas desde la calma.'
      },
      {
        title: 'Desapego con Intención',
        content: 'El desapego no significa que no te importe. Significa que tu felicidad no depende exclusivamente de una persona. Esta es la energía más atractiva que puedes proyectar.'
      },
      {
        title: 'Visualización del Éxito',
        content: 'Los atletas de élite usan la visualización. Tú también puedes visualizar conversaciones exitosas, reencuentros positivos y la relación mejorada que deseas construir.'
      }
    ],
    doList: [
      'Practica afirmaciones positivas cada mañana',
      'Visualiza resultados positivos 5 minutos al día',
      'Enfócate en lo que puedes controlar',
      'Celebra pequeñas victorias'
    ],
    dontList: [
      'No te obsesiones con resultados inmediatos',
      'No te compares con otras relaciones',
      'No permitas pensamientos catastróficos',
      'No busques validación externa constantemente'
    ],
    quote: {
      text: 'No puedes controlar el viento, pero puedes ajustar tus velas.',
      author: 'Thomas S. Monson'
    },
    quiz: [
      {
        question: '¿Qué tipo de mentalidad te hace actuar desesperadamente?',
        options: ['Mentalidad de abundancia', 'Mentalidad de escasez', 'Mentalidad neutral', 'Mentalidad positiva'],
        correctIndex: 1
      },
      {
        question: '¿Qué significa realmente el desapego?',
        options: ['Que no te importa', 'Que tu felicidad no depende de una sola persona', 'Que ya no la amas', 'Que buscas venganza'],
        correctIndex: 1
      },
      {
        question: '¿Cuánto tiempo se recomienda visualizar diariamente?',
        options: ['1 minuto', '5 minutos', '30 minutos', '1 hora'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Mapa de Fortalezas',
      description: 'Identifica y documenta tus fortalezas personales para construir confianza.',
      steps: [
        'Lista 10 cualidades positivas que tienes',
        'Pide a 3 amigos cercanos que te digan 3 cualidades tuyas',
        'Identifica 3 logros de los que estés orgulloso',
        'Escribe cómo estas fortalezas te ayudarán en el proceso',
        'Lee esta lista cada mañana durante una semana'
      ]
    }
  },
  {
    id: 3,
    title: 'Diagnóstico de la Relación',
    subtitle: 'Análisis profundo de qué salió mal',
    image: module3,
    duration: '30 min',
    description: 'Analiza honestamente la relación para identificar patrones y áreas de mejora.',
    sections: [
      {
        title: 'Autopsia de la Relación',
        content: 'Sin culpar a nadie, examina qué funcionaba y qué no. Esto incluye comunicación, intimidad, conflictos, expectativas y compatibilidad de valores.'
      },
      {
        title: 'Tu Rol en la Ruptura',
        content: 'Asumir responsabilidad no es culparte. Es reconocer cómo tus acciones o inacciones contribuyeron a los problemas. Esta honestidad es esencial para el cambio real.'
      },
      {
        title: 'Señales que Ignoraste',
        content: 'A menudo hay señales de alerta que ignoramos. Identificarlas te ayudará a no repetir los mismos errores y a abordar problemas reales en una futura reconciliación.'
      }
    ],
    doList: [
      'Sé brutalmente honesto contigo mismo',
      'Escribe los problemas sin emoción, como un observador externo',
      'Identifica patrones repetitivos',
      'Acepta tu parte de responsabilidad'
    ],
    dontList: [
      'No culpes 100% a tu ex',
      'No te martirices ni asumas toda la culpa',
      'No minimices problemas reales',
      'No idealices la relación pasada'
    ],
    quote: {
      text: 'La primera vez que me engañas, es tu culpa. La segunda vez, es la mía.',
      author: 'Anónimo'
    },
    quiz: [
      {
        question: '¿Qué significa asumir responsabilidad en una ruptura?',
        options: ['Culparte por todo', 'Reconocer cómo contribuiste a los problemas', 'Pedir perdón repetidamente', 'Ignorar tus errores'],
        correctIndex: 1
      },
      {
        question: '¿Por qué es importante identificar señales ignoradas?',
        options: ['Para culpar a tu ex', 'Para no repetir los mismos errores', 'Para justificar la ruptura', 'No es importante'],
        correctIndex: 1
      },
      {
        question: '¿Cómo debes analizar los problemas de la relación?',
        options: ['Con mucha emoción', 'Como un observador externo', 'Culpando a tu ex', 'Ignorándolos'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Línea de Tiempo Relacional',
      description: 'Crea una línea de tiempo visual de tu relación identificando momentos clave.',
      steps: [
        'Dibuja una línea horizontal representando la duración de tu relación',
        'Marca los momentos más felices arriba de la línea',
        'Marca los conflictos y problemas debajo de la línea',
        'Identifica qué causó cada momento negativo',
        'Busca patrones repetitivos en los conflictos'
      ]
    }
  },
  {
    id: 4,
    title: 'Protocolo de Emergencia (72 horas)',
    subtitle: 'Acciones críticas para los primeros 3 días',
    image: module4,
    duration: '15 min',
    description: 'Guía paso a paso para las primeras 72 horas después de una ruptura.',
    sections: [
      {
        title: 'Las Primeras 24 Horas',
        content: 'No hagas nada impulsivo. Silencia notificaciones de tu ex, no publiques en redes, no llames. Llora si necesitas, pero no actúes. Este tiempo es para estabilizarte emocionalmente.'
      },
      {
        title: 'Horas 24-48',
        content: 'Habla con UN amigo de confianza. No con 10 personas. Haz ejercicio físico intenso para liberar endorfinas. Elimina recordatorios visibles pero no borres fotos (las necesitarás después para análisis).'
      },
      {
        title: 'Horas 48-72',
        content: 'Comienza tu plan de mejora personal. Inscríbete en un gimnasio, retoma un hobby abandonado, agenda una cita con un terapeuta si es posible. El movimiento hacia adelante comienza aquí.'
      }
    ],
    doList: [
      'Silencia las notificaciones de tu ex',
      'Habla solo con UNA persona de confianza',
      'Haz ejercicio físico cada día',
      'Duerme aunque sea difícil'
    ],
    dontList: [
      'No envíes mensajes largos explicando tus sentimientos',
      'No llames borracho/a',
      'No publiques indirectas en redes',
      'No tomes decisiones importantes sobre la relación'
    ],
    quote: {
      text: 'Este dolor es temporal. Tu dignidad es permanente.',
      author: 'PLAN A'
    },
    quiz: [
      {
        question: '¿Cuántas personas debes hablar sobre la ruptura inicialmente?',
        options: ['Todas las que puedas', 'Solo una de confianza', 'Ninguna', 'Solo familiares'],
        correctIndex: 1
      },
      {
        question: '¿Qué debes hacer con las fotos de la relación?',
        options: ['Borrarlas inmediatamente', 'Publicarlas en redes', 'Guardarlas para análisis futuro', 'Enviarlas a tu ex'],
        correctIndex: 2
      },
      {
        question: '¿Cuándo debes empezar tu plan de mejora personal?',
        options: ['Inmediatamente', 'En una semana', 'En las horas 48-72', 'Después de un mes'],
        correctIndex: 2
      }
    ],
    exercise: {
      title: 'Kit de Emergencia Emocional',
      description: 'Prepara recursos para momentos de debilidad emocional.',
      steps: [
        'Crea una playlist de canciones que te den energía (no canciones tristes)',
        'Escribe una lista de 5 actividades que puedes hacer cuando sientas ansiedad',
        'Guarda el número de tu persona de confianza en acceso rápido',
        'Prepara una frase de poder que repetirás en momentos difíciles',
        'Identifica un lugar físico donde puedas ir para calmarte'
      ]
    }
  },
  {
    id: 5,
    title: 'Reconstrucción Personal',
    subtitle: 'Conviértete en tu mejor versión',
    image: module5,
    duration: '35 min',
    description: 'Plan completo de autotransformación física, mental y emocional.',
    sections: [
      {
        title: 'Transformación Física',
        content: 'No se trata de impresionar a tu ex. Se trata de liberar endorfinas, ganar confianza y demostrar(te) que puedes comprometerte con objetivos. El ejercicio regular cambia tu química cerebral positivamente.'
      },
      {
        title: 'Crecimiento Intelectual',
        content: 'Lee libros, toma cursos, aprende algo nuevo. Una mente ocupada en crecer tiene menos tiempo para obsesionarse. Además, serás una persona más interesante.'
      },
      {
        title: 'Expansión Social',
        content: 'Reconecta con amigos que descuidaste. Haz nuevas amistades. Únete a grupos o actividades. Tu mundo no puede girar alrededor de una sola persona.'
      }
    ],
    doList: [
      'Ejercicio mínimo 30 minutos diarios',
      'Lee 10 páginas de un libro al día',
      'Contacta a un amigo diferente cada día',
      'Prueba una actividad nueva cada semana'
    ],
    dontList: [
      'No te obsesiones con la apariencia para tu ex',
      'No abandones tu rutina de mejora',
      'No te aísles socialmente',
      'No uses mejoras para presumir en redes'
    ],
    quote: {
      text: 'La mejor venganza es convertirte en quien siempre debiste ser.',
      author: 'Frank Sinatra'
    },
    quiz: [
      {
        question: '¿Cuál es el verdadero propósito de la transformación física?',
        options: ['Impresionar a tu ex', 'Dar celos', 'Ganar confianza y liberar endorfinas', 'Publicar fotos en redes'],
        correctIndex: 2
      },
      {
        question: '¿Cuánto ejercicio mínimo se recomienda diariamente?',
        options: ['10 minutos', '30 minutos', '1 hora', '2 horas'],
        correctIndex: 1
      },
      {
        question: '¿Por qué es importante la expansión social?',
        options: ['Para dar celos', 'Para que tu mundo no gire alrededor de una persona', 'Para encontrar nueva pareja', 'No es importante'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Plan de 21 Días de Mejora',
      description: 'Diseña tu programa personalizado de transformación.',
      steps: [
        'Define 3 objetivos físicos alcanzables en 21 días',
        'Elige un libro que terminarás en este período',
        'Lista 5 amigos con los que reconectarás',
        'Identifica 2 actividades nuevas que probarás',
        'Crea un horario semanal incluyendo todas estas actividades'
      ]
    }
  },
  {
    id: 6,
    title: 'Los 7 Pilares de la Reconquista',
    subtitle: 'Fundamentos esenciales del éxito',
    image: module6,
    duration: '40 min',
    description: 'Los siete principios fundamentales que sostienen una reconquista exitosa.',
    sections: [
      {
        title: 'Pilar 1: Autocontrol',
        content: 'La capacidad de controlar tus impulsos es la base de todo. Sin autocontrol, enviarás mensajes desesperados, llamarás borracho, y destruirás tus posibilidades.'
      },
      {
        title: 'Pilar 2: Paciencia',
        content: 'Las emociones necesitan tiempo para procesar. Forzar el proceso solo genera resistencia. La paciencia estratégica es tu arma más poderosa.'
      },
      {
        title: 'Pilar 3: Autenticidad',
        content: 'Sé genuino. Las tácticas manipulativas pueden funcionar a corto plazo, pero destruyen la confianza a largo plazo. El cambio real es el único camino sostenible.'
      },
      {
        title: 'Pilar 4: Comunicación',
        content: 'Aprende a expresar necesidades sin acusar, a escuchar sin defender, y a validar emociones sin necesariamente estar de acuerdo.'
      },
      {
        title: 'Pilar 5: Valor Propio',
        content: 'Tu valor no depende de si ella vuelve o no. Esta mentalidad, paradójicamente, es la más atractiva que puedes tener.'
      },
      {
        title: 'Pilar 6: Estrategia',
        content: 'Actuar con intención, no con emoción. Cada mensaje, cada encuentro, cada acción debe tener un propósito claro.'
      },
      {
        title: 'Pilar 7: Aceptación',
        content: 'Acepta que el resultado no está garantizado. Esta aceptación te libera de la ansiedad y te permite actuar desde la fortaleza.'
      }
    ],
    doList: [
      'Memoriza y practica los 7 pilares diariamente',
      'Identifica tu pilar más débil y trabaja en él',
      'Usa los pilares como filtro antes de cada acción',
      'Revisa los pilares cuando sientas impulsos'
    ],
    dontList: [
      'No ignores ningún pilar',
      'No sustituyas estrategia por manipulación',
      'No confundas paciencia con pasividad',
      'No pierdas tu valor propio por desesperación'
    ],
    quote: {
      text: 'Un hombre que conquista a otros es fuerte. Un hombre que se conquista a sí mismo es poderoso.',
      author: 'Lao Tse'
    },
    quiz: [
      {
        question: '¿Cuál es el primer pilar de la reconquista?',
        options: ['Comunicación', 'Autocontrol', 'Estrategia', 'Paciencia'],
        correctIndex: 1
      },
      {
        question: '¿Qué pilar te ayuda a evitar actuar por emoción?',
        options: ['Autenticidad', 'Valor Propio', 'Estrategia', 'Aceptación'],
        correctIndex: 2
      },
      {
        question: '¿Por qué es importante el pilar de Aceptación?',
        options: ['Para rendirse', 'Para liberarte de ansiedad y actuar con fortaleza', 'Para ignorar a tu ex', 'No es importante'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Auditoría de Pilares',
      description: 'Evalúa tu fortaleza en cada uno de los 7 pilares.',
      steps: [
        'Puntúa cada pilar del 1 al 10 según tu nivel actual',
        'Identifica los 2 pilares con puntuación más baja',
        'Escribe 3 acciones específicas para mejorar cada pilar débil',
        'Crea un recordatorio diario para practicar estos pilares',
        'Reevalúa tus puntuaciones al final de los 21 días'
      ]
    }
  },
  {
    id: 7,
    title: 'Tipos de Ruptura',
    subtitle: 'Estrategias según tu situación',
    image: module7,
    duration: '30 min',
    description: 'Diferentes rupturas requieren diferentes enfoques. Identifica tu tipo.',
    sections: [
      {
        title: 'Ruptura por Distanciamiento',
        content: 'Cuando la relación murió lentamente por falta de conexión, rutina, o descuido. La estrategia aquí es reencender la chispa mostrando cambio genuino y novedad.'
      },
      {
        title: 'Ruptura por Conflicto',
        content: 'Cuando peleas constantes llevaron al agotamiento emocional. Necesitas demostrar que has desarrollado mejores habilidades de comunicación y manejo de conflictos.'
      },
      {
        title: 'Ruptura por Terceros',
        content: 'Cuando hay otra persona involucrada. Esta es la más compleja y requiere más paciencia. Tu enfoque debe ser completamente en tu mejora, no en competir.'
      },
      {
        title: 'Ruptura por Circunstancias',
        content: 'Distancia, trabajo, familia, timing. A veces el amor existe pero las circunstancias no lo permitían. Evalúa si las circunstancias han cambiado o pueden cambiar.'
      }
    ],
    doList: [
      'Identifica honestamente tu tipo de ruptura',
      'Adapta tu estrategia a tu situación específica',
      'Reconoce si hay factores que no puedes controlar',
      'Enfócate en lo que SÍ puedes cambiar'
    ],
    dontList: [
      'No uses la misma estrategia para todas las rupturas',
      'No compitas directamente con terceros',
      'No ignores problemas de fondo',
      'No fuerces circunstancias que no puedes cambiar'
    ],
    quote: {
      text: 'Conoce a tu enemigo y conócete a ti mismo, y en cien batallas nunca estarás en peligro.',
      author: 'Sun Tzu'
    },
    quiz: [
      {
        question: '¿Cuál es la estrategia para ruptura por distanciamiento?',
        options: ['Competir con terceros', 'Reencender la chispa con cambio y novedad', 'Esperar pasivamente', 'Presionar constantemente'],
        correctIndex: 1
      },
      {
        question: '¿Qué tipo de ruptura es la más compleja?',
        options: ['Por distanciamiento', 'Por conflicto', 'Por terceros', 'Por circunstancias'],
        correctIndex: 2
      },
      {
        question: '¿Qué debes hacer en una ruptura por terceros?',
        options: ['Competir directamente', 'Enfocarte en tu mejora personal', 'Confrontar al tercero', 'Rendirte inmediatamente'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Diagnóstico de Ruptura',
      description: 'Determina tu tipo de ruptura y crea un plan específico.',
      steps: [
        'Lee cada tipo de ruptura y marca cuál se ajusta más a tu situación',
        'Lista las 3 principales causas de tu ruptura específica',
        'Identifica qué factores puedes controlar y cuáles no',
        'Escribe 5 acciones específicas para tu tipo de ruptura',
        'Revisa este plan semanalmente y ajusta según sea necesario'
      ]
    }
  },
  {
    id: 8,
    title: 'Cronograma de 21 Días',
    subtitle: 'Tu hoja de ruta día a día',
    image: module8,
    duration: '25 min',
    description: 'Plan detallado de acciones para cada día del proceso de reconquista.',
    sections: [
      {
        title: 'Semana 1: Estabilización (Días 1-7)',
        content: 'Enfoque total en ti. Cero contacto con tu ex. Establece rutinas de ejercicio, sueño y alimentación. Procesa emociones con ayuda profesional si es necesario. Completa los módulos 1-5.'
      },
      {
        title: 'Semana 2: Transformación (Días 8-14)',
        content: 'Continúa tu mejora personal intensamente. Comienza a aparecer socialmente (eventos, actividades). Contacto mínimo y casual si hay necesidad práctica. Completa módulos 6-10.'
      },
      {
        title: 'Semana 3: Reconexión (Días 15-21)',
        content: 'Inicia contacto estratégico basado en lo aprendido. Propón encuentros casuales. Demuestra tu cambio sin presumir. Evalúa señales y ajusta. Completa módulos 11-16.'
      }
    ],
    doList: [
      'Sigue el cronograma día a día sin saltar etapas',
      'Documenta tu progreso diariamente',
      'Ajusta el plan según tus circunstancias específicas',
      'Celebra cada semana completada'
    ],
    dontList: [
      'No aceleres el proceso por ansiedad',
      'No saltes la semana de cero contacto',
      'No contactes antes del día indicado',
      'No abandones si no ves resultados inmediatos'
    ],
    quote: {
      text: 'Roma no se construyó en un día, pero pusieron ladrillos cada hora.',
      author: 'John Heywood'
    },
    quiz: [
      {
        question: '¿Cuál es el enfoque de la primera semana?',
        options: ['Contactar a tu ex', 'Estabilización personal', 'Reconexión social', 'Proponer citas'],
        correctIndex: 1
      },
      {
        question: '¿En qué semana se inicia el contacto estratégico?',
        options: ['Semana 1', 'Semana 2', 'Semana 3', 'Nunca'],
        correctIndex: 2
      },
      {
        question: '¿Cuántos módulos debes completar en la primera semana?',
        options: ['1-3', '1-5', '6-10', 'Todos'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Calendario Personalizado',
      description: 'Crea tu calendario de 21 días con actividades específicas.',
      steps: [
        'Marca la fecha de inicio de tu programa',
        'Divide 21 días en 3 semanas en tu calendario',
        'Asigna módulos específicos a cada día',
        'Programa actividades de mejora personal',
        'Establece recordatorios diarios para mantener el compromiso'
      ]
    }
  },
  {
    id: 9,
    title: 'Gatillos de Resultados',
    subtitle: 'Acciones que generan respuestas',
    image: module9,
    duration: '35 min',
    description: 'Técnicas probadas para generar interés y respuestas positivas.',
    sections: [
      {
        title: 'El Poder del Silencio',
        content: 'El contacto cero no es castigo ni manipulación. Es dar espacio para que ambos procesen y para que tu ausencia se note. Estudios muestran que la ausencia genuina aumenta el valor percibido.'
      },
      {
        title: 'Presencia Estratégica',
        content: 'Cuando rompas el silencio, hazlo con propósito. Un mensaje casual sobre algo que les conectaba, una referencia a un recuerdo positivo, nunca mensajes de necesidad o reclamo.'
      },
      {
        title: 'El Efecto Espejo',
        content: 'Refleja el nivel de inversión de tu ex. Si ella envía mensajes cortos, tú envías mensajes cortos. Si ella propone verse, tú aceptas pero no ruegues. Equilibrio de poder.'
      }
    ],
    doList: [
      'Usa el silencio como herramienta estratégica',
      'Planifica cada contacto con intención clara',
      'Refleja el nivel de inversión de tu ex',
      'Mantén misterio y evita sobre-explicar'
    ],
    dontList: [
      'No uses el silencio como castigo o manipulación',
      'No envíes mensajes necesitados o suplicantes',
      'No inviertas más que tu ex en la comunicación',
      'No respondas instantáneamente siempre'
    ],
    quote: {
      text: 'Las palabras que no se dicen pueden ser más poderosas que las que se pronuncian.',
      author: 'Anónimo'
    },
    quiz: [
      {
        question: '¿Cuál es el verdadero propósito del contacto cero?',
        options: ['Castigar a tu ex', 'Dar espacio para procesar y aumentar valor percibido', 'Olvidarla', 'Darle celos'],
        correctIndex: 1
      },
      {
        question: '¿Qué es el efecto espejo?',
        options: ['Imitar todo lo que hace tu ex', 'Reflejar el nivel de inversión de tu ex', 'Ignorarla completamente', 'Enviar fotos'],
        correctIndex: 1
      },
      {
        question: '¿Cómo debe ser el primer contacto después del silencio?',
        options: ['Un mensaje largo explicando tus sentimientos', 'Algo casual sobre algo que les conectaba', 'Un reclamo por la ruptura', 'Una declaración de amor'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Banco de Mensajes',
      description: 'Prepara mensajes estratégicos para diferentes escenarios.',
      steps: [
        'Escribe 3 mensajes casuales para romper el silencio',
        'Prepara 2 respuestas para si ella contacta primero',
        'Crea 2 propuestas de encuentro casual',
        'Guarda estos mensajes pero NO los envíes hasta el momento indicado',
        'Revisa y mejora estos mensajes con lo aprendido en los módulos'
      ]
    }
  },
  {
    id: 10,
    title: 'Comunicación Estratégica',
    subtitle: 'Cómo hablar para conectar',
    image: module10,
    duration: '40 min',
    description: 'Técnicas de comunicación efectiva para reconectar emocionalmente.',
    sections: [
      {
        title: 'Escucha Activa',
        content: 'El 80% de la comunicación efectiva es escuchar. Escucha para entender, no para responder. Valida emociones antes de dar tu perspectiva. Haz preguntas que demuestren interés genuino.'
      },
      {
        title: 'Comunicación No Violenta',
        content: 'Expresa observaciones sin juicio, identifica sentimientos, reconoce necesidades, y haz peticiones claras. "Cuando no contestas mis mensajes (observación), me siento ansioso (sentimiento) porque necesito saber que estamos bien (necesidad). ¿Podrías avisarme si necesitas espacio? (petición)"'
      },
      {
        title: 'Timing y Medio',
        content: 'No todo se habla por texto. Temas importantes merecen conversaciones en persona o llamada. No envíes mensajes de noche o cuando estés emocional. El medio y momento son tan importantes como el mensaje.'
      }
    ],
    doList: [
      'Practica la escucha activa en cada conversación',
      'Usa la fórmula de comunicación no violenta',
      'Elige el medio apropiado para cada tema',
      'Espera a estar calmado antes de comunicar'
    ],
    dontList: [
      'No interrumpas para dar tu opinión',
      'No uses acusaciones ("Tú siempre...", "Tú nunca...")',
      'No envíes mensajes importantes por texto',
      'No comuniques cuando estés emocional'
    ],
    quote: {
      text: 'Entre lo que pienso, lo que quiero decir, lo que creo decir, lo que digo, lo que quieres oír, lo que oyes, lo que crees entender, lo que quieres entender y lo que entiendes, hay nueve posibilidades de no entenderse.',
      author: 'Bernard Werber'
    },
    quiz: [
      {
        question: '¿Qué porcentaje de la comunicación efectiva es escuchar?',
        options: ['20%', '50%', '80%', '100%'],
        correctIndex: 2
      },
      {
        question: '¿Cuál es el orden correcto de la comunicación no violenta?',
        options: ['Petición, sentimiento, observación, necesidad', 'Observación, sentimiento, necesidad, petición', 'Sentimiento, observación, petición, necesidad', 'Necesidad, petición, observación, sentimiento'],
        correctIndex: 1
      },
      {
        question: '¿Cuándo NO debes enviar mensajes importantes?',
        options: ['De día', 'Cuando estés calmado', 'Cuando estés emocional o de noche', 'Los fines de semana'],
        correctIndex: 2
      }
    ],
    exercise: {
      title: 'Reescritura de Conflictos',
      description: 'Transforma conflictos pasados usando comunicación efectiva.',
      steps: [
        'Recuerda una discusión que tuvieron',
        'Escribe lo que dijiste originalmente',
        'Reescríbelo usando comunicación no violenta',
        'Identifica cómo podría haber cambiado el resultado',
        'Practica esta nueva forma de comunicar en conversaciones cotidianas'
      ]
    }
  },
  {
    id: 11,
    title: 'Gestión de Expectativas',
    subtitle: 'Prepárate para cualquier resultado',
    image: module11,
    duration: '25 min',
    description: 'Cómo mantener expectativas saludables durante todo el proceso.',
    sections: [
      {
        title: 'El Espectro de Resultados',
        content: 'Hay múltiples resultados posibles: reconciliación completa, amistad, contacto cordial, o separación definitiva. Todos son válidos y todos pueden llevar a tu felicidad si los manejas bien.'
      },
      {
        title: 'Desapego del Resultado',
        content: 'Trabaja para el mejor resultado pero acepta cualquiera. Esta mentalidad reduce tu ansiedad, te hace más atractivo, y te prepara emocionalmente para cualquier escenario.'
      },
      {
        title: 'Señales vs Ilusiones',
        content: 'Aprende a distinguir entre señales reales de interés y lo que quieres ver. Una respuesta amable no es una invitación a volver. Un "me gusta" no significa que te extraña.'
      }
    ],
    doList: [
      'Define qué significa éxito para ti (más allá de "volver")',
      'Prepárate mentalmente para diferentes escenarios',
      'Celebra el progreso independiente del resultado',
      'Mantén tu vida plena con o sin ella'
    ],
    dontList: [
      'No interpretes todo como señal positiva',
      'No pongas tu felicidad en un solo resultado',
      'No ignores señales claras de desinterés',
      'No abandones tu mejora si no funciona'
    ],
    quote: {
      text: 'Espera lo mejor, prepárate para lo peor, acepta lo que venga.',
      author: 'Proverbio'
    },
    quiz: [
      {
        question: '¿Cuántos resultados posibles hay en una reconquista?',
        options: ['Solo dos: volver o no volver', 'Múltiples: reconciliación, amistad, contacto cordial, separación', 'Solo uno: volver', 'Ninguno predecible'],
        correctIndex: 1
      },
      {
        question: '¿Qué significa el desapego del resultado?',
        options: ['No te importa', 'Trabajar para el mejor resultado pero aceptar cualquiera', 'Rendirte', 'Ser indiferente'],
        correctIndex: 1
      },
      {
        question: '¿Un "me gusta" en redes significa que te extraña?',
        options: ['Sí, siempre', 'No necesariamente', 'Sí, es señal clara', 'Nunca'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Plan para Cada Escenario',
      description: 'Prepara un plan para cada resultado posible.',
      steps: [
        'Lista los 4 posibles resultados de tu proceso',
        'Para cada resultado, escribe cómo te sentirías inicialmente',
        'Define 3 acciones positivas para cada escenario',
        'Identifica qué aprenderías de cada resultado',
        'Escribe por qué estarías bien en cualquier caso'
      ]
    }
  },
  {
    id: 12,
    title: 'Reconquista Sostenible',
    subtitle: 'Construir una relación mejor',
    image: module12,
    duration: '35 min',
    description: 'Cómo construir una relación más fuerte si deciden volver.',
    sections: [
      {
        title: 'La Nueva Relación',
        content: 'Si vuelven, no es la misma relación. Es una nueva relación entre dos personas que han crecido. Tratarla como la vieja relación garantiza repetir los mismos errores.'
      },
      {
        title: 'Acuerdos Claros',
        content: 'Antes de volver, establezcan acuerdos claros sobre qué cambió, qué esperan, cómo manejarán conflictos, y qué necesitan el uno del otro. Sin esto, es cuestión de tiempo.'
      },
      {
        title: 'Mantenimiento Continuo',
        content: 'Las relaciones requieren mantenimiento constante. Citas regulares, comunicación abierta, espacios individuales, y revisiones periódicas de cómo van las cosas.'
      }
    ],
    doList: [
      'Trata la reconciliación como una nueva relación',
      'Establece acuerdos claros antes de volver',
      'Mantén las mejoras que hiciste durante los 21 días',
      'Programa "mantenimiento" regular de la relación'
    ],
    dontList: [
      'No asumas que todo volverá a ser como antes',
      'No evites conversaciones difíciles sobre el pasado',
      'No dejes de trabajar en ti mismo',
      'No repitas los mismos patrones problemáticos'
    ],
    quote: {
      text: 'El éxito no es final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.',
      author: 'Winston Churchill'
    },
    quiz: [
      {
        question: '¿Cómo debes tratar la reconciliación?',
        options: ['Como la misma relación de antes', 'Como una nueva relación entre personas que han crecido', 'Ignorando el pasado', 'Sin cambiar nada'],
        correctIndex: 1
      },
      {
        question: '¿Qué debes establecer antes de volver?',
        options: ['Nada, solo volver', 'Acuerdos claros sobre expectativas y cambios', 'Condiciones y ultimátums', 'Secretos'],
        correctIndex: 1
      },
      {
        question: '¿Las relaciones requieren mantenimiento?',
        options: ['No, si hay amor es suficiente', 'Sí, constante y programado', 'Solo al principio', 'Solo cuando hay problemas'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Contrato de Nueva Relación',
      description: 'Borrador de acuerdos para una posible reconciliación.',
      steps: [
        'Lista 5 cosas que necesitas que cambien de la relación anterior',
        'Lista 5 cosas que tú cambiarás',
        'Define cómo manejarán conflictos diferente',
        'Establece rituales de conexión (citas semanales, conversaciones)',
        'Guarda este documento para discutirlo si se da la reconciliación'
      ]
    }
  },
  {
    id: 13,
    title: 'BONO: Plantillas y Scripts',
    subtitle: 'Mensajes listos para usar',
    image: module13,
    duration: '20 min',
    description: 'Colección de plantillas de mensajes para diferentes situaciones.',
    sections: [
      {
        title: 'Primer Contacto',
        content: '"Hey [nombre], vi [algo específico] y me acordé de esa vez que [recuerdo positivo]. Espero que estés bien." — Casual, específico, sin presión.'
      },
      {
        title: 'Respuesta a su Contacto',
        content: '"¡Hola! Qué sorpresa, [reacción genuina a lo que dijo]. Yo estoy [actividad positiva]. ¿Y tú?" — Positivo, sin desesperación, invita a continuar.'
      },
      {
        title: 'Propuesta de Encuentro',
        content: '"Oye, voy a estar en [lugar] el [día] para [actividad]. Si te animas, sería bueno vernos. Sin presión." — Casual, con escape, específico.'
      },
      {
        title: 'Después del Encuentro',
        content: '"La pasé bien hoy. [Detalle específico] fue genial. Cuídate." — Breve, positivo, sin promesas ni expectativas.'
      }
    ],
    doList: [
      'Personaliza cada plantilla a tu situación',
      'Mantén los mensajes cortos y positivos',
      'Incluye siempre un detalle específico',
      'Deja espacio para que ella responda'
    ],
    dontList: [
      'No copies los mensajes literalmente sin adaptar',
      'No envíes mensajes largos o múltiples',
      'No incluyas presión o expectativas',
      'No menciones la relación o ruptura directamente'
    ],
    quote: {
      text: 'Las palabras correctas en el momento correcto abren puertas cerradas.',
      author: 'PLAN A'
    },
    quiz: [
      {
        question: '¿Cómo debe ser un primer mensaje de contacto?',
        options: ['Largo y emocional', 'Casual, específico, sin presión', 'Declaración de amor', 'Preguntando por qué terminaron'],
        correctIndex: 1
      },
      {
        question: '¿Qué debe incluir siempre un mensaje?',
        options: ['Emojis de corazón', 'Un detalle específico', 'Una pregunta sobre la ruptura', 'Una declaración de intenciones'],
        correctIndex: 1
      },
      {
        question: '¿Cómo proponer un encuentro?',
        options: ['Con mucha presión', 'Casual, con escape fácil para ella', 'Ultimátum', 'En un lugar romántico'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Personaliza tus Plantillas',
      description: 'Adapta las plantillas a tu situación específica.',
      steps: [
        'Copia cada plantilla del módulo',
        'Reemplaza los espacios con información real de tu relación',
        'Lee cada mensaje en voz alta para verificar que suene natural',
        'Guarda los mensajes pero NO los envíes hasta el momento indicado',
        'Pide opinión a tu persona de confianza sobre el tono'
      ]
    }
  },
  {
    id: 14,
    title: 'Casos de Estudio',
    subtitle: 'Historias reales de éxito y fracaso',
    image: module14,
    duration: '30 min',
    description: 'Análisis de casos reales para aprender de otros.',
    sections: [
      {
        title: 'Caso 1: Éxito - Marco (28 años)',
        content: 'Ruptura por distanciamiento después de 3 años. Siguió el programa al pie de la letra. Semana 1: cero contacto, gimnasio diario. Semana 2: retomó hobbies, apareció en eventos sociales. Semana 3: mensaje casual sobre un lugar que visitaron juntos. Ella respondió positivamente. Dos meses después, reconciliados con mejor comunicación.'
      },
      {
        title: 'Caso 2: Éxito Diferente - Luis (35 años)',
        content: 'Ruptura por terceros. Siguió el programa enfocándose 100% en sí mismo. No hubo reconciliación, pero su transformación le llevó a conocer a alguien más compatible. Define su experiencia como éxito porque se convirtió en quien quería ser.'
      },
      {
        title: 'Caso 3: Fracaso Instructivo - Daniel (24 años)',
        content: 'Rompió el contacto cero en el día 5 con un mensaje largo emocional. Ella se alejó más. Reinició el programa pero nunca logró mantener la disciplina. Lección: el programa funciona solo si lo sigues.'
      }
    ],
    doList: [
      'Aprende de los éxitos Y de los fracasos',
      'Identifica qué caso se parece más al tuyo',
      'Adopta las estrategias que funcionaron',
      'Evita los errores que causaron fracasos'
    ],
    dontList: [
      'No compares tu situación exactamente con otras',
      'No te desanimes por los fracasos de otros',
      'No asumas que tu resultado será igual',
      'No ignores las lecciones de los errores'
    ],
    quote: {
      text: 'Aprende de los errores ajenos. No vivirás lo suficiente para cometerlos todos tú mismo.',
      author: 'Eleanor Roosevelt'
    },
    quiz: [
      {
        question: '¿Qué hizo Marco diferente que llevó al éxito?',
        options: ['Contactó a su ex inmediatamente', 'Siguió el programa al pie de la letra', 'Dio celos', 'Rogó que volviera'],
        correctIndex: 1
      },
      {
        question: '¿Por qué Luis considera su experiencia un éxito aunque no hubo reconciliación?',
        options: ['Porque encontró a alguien más', 'Porque se vengó', 'Porque se convirtió en quien quería ser', 'Porque su ex se arrepintió'],
        correctIndex: 2
      },
      {
        question: '¿Cuál fue el error fatal de Daniel?',
        options: ['Ir al gimnasio', 'Romper el contacto cero con mensaje emocional', 'No usar redes sociales', 'Esperar demasiado'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Tu Historia de Éxito',
      description: 'Escribe tu futuro caso de estudio.',
      steps: [
        'Escribe un "caso de estudio" de ti mismo como si ya hubiera pasado exitosamente',
        'Incluye qué acciones específicas tomaste',
        'Describe los obstáculos que superaste',
        'Explica qué aprendiste del proceso',
        'Lee esta historia cada mañana como visualización'
      ]
    }
  },
  {
    id: 15,
    title: 'Recursos Adicionales',
    subtitle: 'Herramientas complementarias',
    image: module15,
    duration: '15 min',
    description: 'Libros, podcasts, apps y recursos para profundizar tu desarrollo.',
    sections: [
      {
        title: 'Libros Recomendados',
        content: '1. "Attached" de Amir Levine - Estilos de apego\n2. "No More Mr. Nice Guy" de Robert Glover - Masculinidad sana\n3. "The 5 Love Languages" de Gary Chapman - Lenguajes del amor\n4. "Models" de Mark Manson - Comunicación auténtica\n5. "Atomic Habits" de James Clear - Construcción de hábitos'
      },
      {
        title: 'Podcasts Útiles',
        content: '1. "The Art of Charm" - Habilidades sociales\n2. "Relationship Alive" - Relaciones saludables\n3. "The Mindset Mentor" - Desarrollo personal\n4. "Lex Fridman Podcast" (episodios sobre relaciones) - Perspectivas profundas'
      },
      {
        title: 'Apps de Apoyo',
        content: '1. Headspace/Calm - Meditación y manejo de ansiedad\n2. Daylio - Registro de estado de ánimo\n3. Habitica - Gamificación de hábitos\n4. MyFitnessPal - Seguimiento de ejercicio y nutrición'
      }
    ],
    doList: [
      'Elige al menos un libro para leer durante el programa',
      'Suscríbete a un podcast y escucha episodios relevantes',
      'Descarga una app de meditación',
      'Usa apps de hábitos para mantener consistencia'
    ],
    dontList: [
      'No te sobrecargues con demasiados recursos',
      'No uses recursos como escape en lugar de acción',
      'No busques consejos contradictorios',
      'No dependas solo de recursos externos'
    ],
    quote: {
      text: 'La inversión en conocimiento paga el mejor interés.',
      author: 'Benjamin Franklin'
    },
    quiz: [
      {
        question: '¿Qué libro habla sobre estilos de apego?',
        options: ['No More Mr. Nice Guy', 'Attached', 'Models', 'Atomic Habits'],
        correctIndex: 1
      },
      {
        question: '¿Para qué sirve la app Headspace?',
        options: ['Redes sociales', 'Meditación y manejo de ansiedad', 'Citas', 'Mensajería'],
        correctIndex: 1
      },
      {
        question: '¿Cuál es el riesgo de usar demasiados recursos?',
        options: ['Aprender mucho', 'Sobrecargarte y no actuar', 'Ser más inteligente', 'Ninguno'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Plan de Recursos Personales',
      description: 'Selecciona los recursos que usarás durante el programa.',
      steps: [
        'Elige 1 libro de la lista y consíguelo',
        'Suscríbete a 1 podcast y descarga 3 episodios',
        'Descarga 1 app de meditación y 1 de hábitos',
        'Programa tiempo diario para usar estos recursos',
        'Evalúa cada semana qué recursos te están ayudando más'
      ]
    }
  },
  {
    id: 16,
    title: 'Conclusión: Tu Nueva Vida',
    subtitle: 'El camino hacia adelante',
    image: module16,
    duration: '20 min',
    description: 'Reflexiones finales y preparación para el futuro.',
    sections: [
      {
        title: 'Lo Que Has Logrado',
        content: 'Completaste 21 días de trabajo intenso en ti mismo. Independientemente del resultado con tu ex, ahora eres una persona más fuerte, más consciente, y mejor preparada para cualquier relación.'
      },
      {
        title: 'El Verdadero Objetivo',
        content: 'Desde el día 1, el objetivo real nunca fue solo recuperar a tu ex. Fue convertirte en alguien que merece amor saludable y que puede ofrecerlo. Ese objetivo lo has logrado.'
      },
      {
        title: 'El Camino Sigue',
        content: 'Este no es el final. Los hábitos que construiste, la mentalidad que desarrollaste, y las habilidades que aprendiste son para toda la vida. Sigue practicándolos.'
      }
    ],
    doList: [
      'Celebra tu compromiso de 21 días',
      'Continúa con los hábitos positivos que creaste',
      'Aplica lo aprendido a todas tus relaciones',
      'Sé la persona que te gustaría encontrar'
    ],
    dontList: [
      'No abandones tu crecimiento si el resultado no fue el esperado',
      'No vuelvas a viejos patrones',
      'No dejes que un resultado defina tu valor',
      'No olvides lo que aprendiste'
    ],
    quote: {
      text: 'No se trata de ser el mejor. Se trata de ser mejor que ayer.',
      author: 'PLAN A'
    },
    quiz: [
      {
        question: '¿Cuál era el verdadero objetivo del programa?',
        options: ['Solo recuperar a tu ex', 'Convertirte en alguien que merece amor saludable', 'Dar celos', 'Vengarte'],
        correctIndex: 1
      },
      {
        question: '¿Qué debes hacer con los hábitos que creaste?',
        options: ['Olvidarlos', 'Continuarlos de por vida', 'Solo usarlos si vuelves con tu ex', 'Cambiarlos'],
        correctIndex: 1
      },
      {
        question: '¿Este es el final del proceso?',
        options: ['Sí, terminó todo', 'No, el crecimiento es para toda la vida', 'Solo si no funcionó', 'Depende de tu ex'],
        correctIndex: 1
      }
    ],
    exercise: {
      title: 'Carta a Tu Yo del Día 1',
      description: 'Escribe una carta a la persona que eras cuando empezaste.',
      steps: [
        'Recuerda cómo te sentías el día 1',
        'Escribe lo que has aprendido en estos 21 días',
        'Menciona los cambios que notas en ti mismo',
        'Da consejos a tu yo del pasado',
        'Guarda esta carta y léela en 6 meses'
      ]
    }
  }
];

export const dailyQuestions = [
  "¿Qué es lo más importante que aprendiste hoy sobre ti mismo?",
  "¿Cómo te sientes emocionalmente en este momento?",
  "¿Qué acción tomaste hoy que te acerca a tu mejor versión?",
  "¿Qué pensamientos negativos tuviste hoy y cómo los manejaste?",
  "¿Qué estás agradecido hoy?",
  "¿Qué obstáculo enfrentaste hoy y cómo lo superaste?",
  "¿Cómo practicaste el autocontrol hoy?",
  "¿Qué nuevo hábito positivo estás construyendo?",
  "¿Qué te haría sentir orgulloso de ti mismo mañana?",
  "¿Cómo estás cuidando tu salud física y mental?",
  "¿Qué conversación importante tuviste o evitaste hoy?",
  "¿Qué señal de progreso notaste en ti mismo?",
  "¿Cómo manejaste la tentación de contactar a tu ex?",
  "¿Qué actividad social disfrutaste hoy?",
  "¿Qué libro, podcast o recurso te ayudó hoy?",
  "¿Cómo te ves en una semana?",
  "¿Qué patrón negativo identificaste en ti mismo?",
  "¿Qué fortaleza descubriste que no sabías que tenías?",
  "¿Cómo practicaste la comunicación efectiva hoy?",
  "¿Qué te motiva a seguir adelante?",
  "¿Cómo celebrarás completar este programa?"
];
