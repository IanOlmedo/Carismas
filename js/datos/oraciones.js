/* =========================================================
   ORACIONES (#rezar)
   Los textos están copiados textuales de la fuente que indica `fuente` (índice en ORACION_FUENTES).
   Para sumar una oración: agregarla a ORACIONES con su grupo, su fuente y su estado, y si corresponde
   a un tiempo litúrgico, ponerle `tiempo` ('pascua' o 'no-pascua').
   Cada línea del array `texto` es un renglón. Las líneas que empiezan con "℣ " o "℟ " se muestran
   como versículo y respuesta (lo que dice quien guía y lo que responden todos).
   ========================================================= */
const ORACION_FUENTES = [
  ["Compendio del Catecismo de la Iglesia Católica (2005), Apéndice: Oraciones comunes", "https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_sp.html"],
  ["Juan Pablo II, carta apostólica Rosarium Virginis Mariae (2002)", "https://www.vatican.va/content/john-paul-ii/es/apost_letters/2002/documents/hf_jp-ii_apl_20021016_rosarium-virginis-mariae.html"],
  ["iBreviary: Liturgia de las Horas del día", "https://www.ibreviary.com/m2/breviario.php?lang=es"],
  ["Ciudad Redonda: Evangelio y lecturas de hoy", "https://www.ciudadredonda.org/evangelio-lecturas-hoy/"],
  ["Vatican News: Evangelio y lecturas del día", "https://www.vaticannews.va/es/evangelio-de-hoy.html"]
];

const GRUPOS_ORACION = [
  ["basicas", "Las de todos los días"],
  ["maria", "A la Virgen María"],
  ["espiritu", "A Jesús y al Espíritu Santo"],
  ["otras", "Para otros momentos"]
];

const ORACIONES = {
  "senal-cruz": { titulo: "Señal de la cruz", grupo: "basicas", fuente: 0, estado: "v",
    texto: ["En el nombre del Padre", "y del Hijo", "y del Espíritu Santo. Amén."] },
  "padre-nuestro": { titulo: "Padre nuestro", grupo: "basicas", fuente: 0, estado: "v",
    nota: "La oración que Jesús mismo enseñó a sus discípulos (Mt 6,9-13; Lc 11,2-4).",
    texto: ["Padre nuestro que estás en el cielo,", "santificado sea tu Nombre;", "venga a nosotros tu Reino;", "hágase tu voluntad", "en la tierra como en el cielo.",
      "Danos hoy", "nuestro pan de cada día;", "perdona nuestras ofensas,", "como también nosotros perdonamos", "a los que nos ofenden;",
      "no nos dejes caer en la tentación,", "y líbranos del mal. Amén."] },
  "ave-maria": { titulo: "Ave María", grupo: "basicas", fuente: 0, estado: "v",
    nota: "La primera parte son las palabras del ángel Gabriel (Lc 1,28) y de santa Isabel (Lc 1,42).",
    texto: ["Dios te salve, María,", "llena eres de gracia;", "el Señor es contigo.", "Bendita Tú eres", "entre todas las mujeres,", "y bendito es el fruto de tu vientre, Jesús.",
      "Santa María, Madre de Dios,", "ruega por nosotros, pecadores,", "ahora y en la hora de nuestra muerte. Amén."] },
  "gloria": { titulo: "Gloria al Padre", grupo: "basicas", fuente: 0, estado: "v",
    texto: ["Gloria al Padre", "y al Hijo", "y al Espíritu Santo.", "Como era en el principio,", "ahora y siempre,", "por los siglos de los siglos. Amén."] },
  "credo": { titulo: "Credo de los Apóstoles", grupo: "basicas", fuente: 0, estado: "v",
    nota: "En el Compendio está en la segunda sección, “La profesión de la fe cristiana”, como Símbolo de los Apóstoles.",
    texto: ["Creo en Dios, Padre Todopoderoso,", "Creador del cielo y de la tierra.", "Creo en Jesucristo, su único Hijo, Nuestro Señor,",
      "que fue concebido por obra y gracia del Espíritu Santo,", "nació de Santa María Virgen,", "padeció bajo el poder de Poncio Pilato,",
      "fue crucificado, muerto y sepultado,", "descendió a los infiernos,", "al tercer día resucitó de entre los muertos,",
      "subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso.", "Desde allí ha de venir a juzgar a vivos y muertos.",
      "Creo en el Espíritu Santo,", "la santa Iglesia católica,", "la comunión de los santos,", "el perdón de los pecados,", "la resurrección de la carne", "y la vida eterna.", "Amén."] },
  "angel-de-dios": { titulo: "Ángel de Dios", grupo: "basicas", fuente: 0, estado: "v",
    texto: ["Ángel de Dios,", "que eres mi custodio,", "pues la bondad divina", "me ha encomendado a ti,", "ilumíname, guárdame, defiéndeme", "y gobiérname.", "Amén."] },

  "angelus": { titulo: "Ángelus", grupo: "maria", fuente: 0, estado: "v", tiempo: "no-pascua",
    nota: "Se reza tradicionalmente a la mañana, al mediodía y a la tarde. Recuerda la Encarnación. En el tiempo de Pascua se reemplaza por el Regina Caeli.",
    texto: ["℣ El ángel del Señor anunció a María.", "℟ Y concibió por obra y gracia del Espíritu Santo.", "Dios te salve, María…",
      "℣ He aquí la esclava del Señor.", "℟ Hágase en mí según tu palabra.", "Dios te salve, María…",
      "℣ Y el Verbo de Dios se hizo carne.", "℟ Y habitó entre nosotros.", "Dios te salve, María…",
      "℣ Ruega por nosotros, Santa Madre de Dios,", "℟ para que seamos dignos de alcanzar las promesas de Jesucristo.",
      "Oremos.", "Infunde, Señor, tu gracia en nuestras almas, para que, los que hemos conocido, por el anuncio del Ángel, la Encarnación de tu Hijo Jesucristo, lleguemos por los méritos de su Pasión y su Cruz, a la gloria de la Resurrección. Por Jesucristo Nuestro Señor. Amén.",
      "Gloria al Padre…"] },
  "regina-caeli": { titulo: "Regina Caeli", grupo: "maria", fuente: 0, estado: "v", tiempo: "pascua",
    nota: "Reemplaza al Ángelus en el tiempo de Pascua, desde el Domingo de Pascua hasta Pentecostés.",
    // En el Compendio la última frase dice "los gozos eterno": se corrige la concordancia.
    texto: ["℣ Reina del cielo alégrate; aleluya.", "℟ Porque el Señor a quien has merecido llevar; aleluya.",
      "℣ Ha resucitado según su palabra; aleluya.", "℟ Ruega al Señor por nosotros; aleluya.",
      "℣ Gózate y alégrate, Virgen María; aleluya.", "℟ Porque verdaderamente ha resucitado el Señor; aleluya.",
      "Oremos.", "Oh Dios, que por la resurrección de tu Hijo, nuestro Señor Jesucristo, has llenado el mundo de alegría, concédenos, por intercesión de su Madre, la Virgen María, llegar a alcanzar los gozos eternos. Por nuestro Señor Jesucristo. Amén."] },
  "salve": { titulo: "Salve", grupo: "maria", fuente: 0, estado: "v",
    texto: ["Dios te salve, Reina", "y Madre de misericordia,", "vida, dulzura y esperanza nuestra;", "Dios te salve.", "A ti llamamos", "los desterrados hijos de Eva;",
      "a ti suspiramos, gimiendo y llorando", "en este valle de lágrimas.", "Ea, pues, Señora, abogada nuestra,", "vuelve a nosotros esos tus ojos misericordiosos;",
      "y después de este destierro,", "muéstranos a Jesús,", "fruto bendito de tu vientre.", "¡Oh, clementísima, oh piadosa,", "oh dulce Virgen María!"] },
  "bajo-tu-amparo": { titulo: "Bajo tu amparo", grupo: "maria", fuente: 0, estado: "v",
    nota: "En el Compendio figura como “Bajo tu protección” (en latín, Sub tuum praesidium).",
    texto: ["Bajo tu amparo nos acogemos,", "Santa Madre de Dios;", "no deseches las súplicas", "que te dirigimos", "en nuestras necesidades;", "antes bien, líbranos siempre", "de todo peligro,", "¡Oh Virgen gloriosa y bendita!"] },
  "acordaos": { titulo: "Acordaos", grupo: "maria", fuente: 0, estado: "v",
    texto: ["Acordaos,", "oh piadosísima Virgen María,", "que jamás se ha oído decir", "que ninguno de los que han acudido", "a tu protección,", "implorando tu asistencia", "y reclamando tu socorro,",
      "haya sido abandonado de ti.", "Animado con esta confianza,", "a ti también acudo, oh Madre,", "Virgen de las vírgenes,", "y aunque gimiendo", "bajo el peso de mis pecados,",
      "me atrevo a comparecer", "ante tu presencia soberana.", "No deseches mis humildes súplicas,", "oh Madre del Verbo divino,", "antes bien, escúchalas", "y acógelas benignamente. Amén."] },

  "alma-de-cristo": { titulo: "Alma de Cristo", grupo: "espiritu", fuente: 0, estado: "v",
    nota: "Muy usada después de comulgar. San Ignacio de Loyola la pone al comienzo de los Ejercicios Espirituales.",
    texto: ["Alma de Cristo, santifícame.", "Cuerpo de Cristo, sálvame.", "Sangre de Cristo, embriágame.", "Agua del costado de Cristo, lávame.", "Pasión de Cristo, confórtame.",
      "¡Oh, buen Jesús!, óyeme.", "Dentro de tus llagas, escóndeme.", "No permitas que me aparte de Ti.", "Del maligno enemigo, defiéndeme.", "En la hora de mi muerte, llámame.",
      "Y mándame ir a Ti.", "Para que con tus santos te alabe.", "Por los siglos de los siglos. Amén."] },
  "ven-espiritu": { titulo: "Ven, Espíritu divino", grupo: "espiritu", fuente: 0, estado: "v",
    nota: "Es la secuencia de la Misa de Pentecostés (Veni, Sancte Spiritus). Sirve para pedir luz antes de discernir una decisión.",
    texto: ["Ven, Espíritu divino,", "manda tu luz desde el cielo.", "Padre amoroso del pobre;", "don, en tus dones espléndido;", "luz que penetra las almas;", "fuente del mayor consuelo.",
      "Ven, dulce huésped del alma,", "descanso de nuestro esfuerzo,", "tregua en el duro trabajo,", "brisa en las horas de fuego,", "gozo que enjuga las lágrimas", "y reconforta en los duelos.",
      "Entra hasta el fondo del alma,", "divina luz, y enriquécenos.", "Mira el vacío del hombre,", "si tú le faltas por dentro;", "mira el poder del pecado,", "cuando no envías tu aliento.",
      "Riega la tierra en sequía,", "sana el corazón enfermo,", "lava las manchas,", "infunde calor de vida en el hielo,", "doma el espíritu indómito,", "guía al que tuerce el sendero.",
      "Reparte tus siete dones,", "según la fe de tus siervos;", "por tu bondad y tu gracia,", "dale al esfuerzo su mérito;", "salva al que busca salvarse", "y danos tu gozo eterno. Amén."] },

  "eterno-reposo": { titulo: "El eterno reposo", grupo: "otras", fuente: 0, estado: "v",
    nota: "Por los difuntos.",
    texto: ["Dale Señor el descanso eterno.", "Brille para él la luz perpetua.", "Descanse en paz. Amén."] },

  /* Partes propias del Rosario (no se listan entre las oraciones sueltas). */
  "oracion-rosario": { titulo: "Oración al terminar el Rosario", grupo: null, fuente: 0, estado: "v",
    texto: ["℣ Ruega por nosotros, Santa Madre de Dios,", "℟ para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.", "Oremos.",
      "Oh Dios, cuyo Hijo por medio de su vida, muerte y resurrección, nos otorgó los premios de la vida eterna, te rogamos que venerando humildemente los misterios del Rosario de la Santísima Virgen María, imitemos lo que contienen y consigamos lo que nos prometen. Por Jesucristo, nuestro Señor. Amén."] },
  "jaculatoria": { titulo: "Jaculatoria", grupo: null, fuente: null, estado: "g",
    nota: "Después del Gloria se suele agregar una jaculatoria, que “varía según las costumbres” (Rosarium Virginis Mariae, 35). Esta es la más difundida, ligada a las apariciones de Fátima (1917); las palabras cambian un poco de un lugar a otro.",
    texto: ["Oh Jesús mío, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, especialmente las más necesitadas de tu misericordia."] }
};

/* Misterios del Rosario. Nombres y días: Compendio (Apéndice, “Rosario”) y Rosarium Virginis Mariae, 38.
   Las citas bíblicas son los pasajes que se usan habitualmente para cada misterio (conocimiento general):
   la carta propone leer el pasaje correspondiente, pero no fija cuál (n. 30). */
const MISTERIOS = {
  gozosos: { nombre: "Misterios gozosos", dias: "lunes y sábado", tono: 85,
    sentido: "La alegría de la Encarnación: Dios se hace uno de nosotros, en la vida escondida de Nazaret.",
    lista: [["La encarnación del Hijo de Dios.", "Lc 1,26-38"], ["La visitación de Nuestra Señora a su prima Santa Isabel.", "Lc 1,39-56"],
      ["El nacimiento del Hijo de Dios.", "Lc 2,1-20"], ["La Presentación de Jesús en el templo.", "Lc 2,22-38"], ["El Niño Jesús perdido y hallado en el templo.", "Lc 2,41-52"]] },
  luminosos: { nombre: "Misterios luminosos", dias: "jueves", tono: 230,
    sentido: "La vida pública de Jesús, cuando anuncia el Reino. Juan Pablo II los agregó en 2002.",
    lista: [["El Bautismo de Jesús en el Jordán.", "Mt 3,13-17"], ["La autorrevelación de Jesús en las bodas de Caná.", "Jn 2,1-12"],
      ["El anuncio del Reino de Dios invitando a la conversión.", "Mc 1,14-15"], ["La Transfiguración.", "Lc 9,28-36"], ["La Institución de la Eucaristía.", "Lc 22,14-20"]] },
  dolorosos: { nombre: "Misterios dolorosos", dias: "martes y viernes", tono: 305,
    sentido: "La Pasión de Jesús, donde se ve hasta dónde llega su amor.",
    lista: [["La Oración de Jesús en el Huerto.", "Lc 22,39-46"], ["La Flagelación del Señor.", "Jn 19,1"], ["La Coronación de espinas.", "Mt 27,27-31"],
      ["Jesús con la Cruz a cuestas camino del Calvario.", "Lc 23,26-32"], ["La Crucifixión y Muerte de Nuestro Señor.", "Lc 23,33-46"]] },
  gloriosos: { nombre: "Misterios gloriosos", dias: "miércoles y domingo", tono: 60,
    sentido: "La Resurrección y la gloria: lo que Dios promete a todos los que lo siguen.",
    lista: [["La Resurrección del Hijo de Dios.", "Lc 24,1-12"], ["La Ascensión del Señor a los Cielos.", "Hch 1,6-11"], ["La Venida del Espíritu Santo sobre los Apóstoles.", "Hch 2,1-13"],
      ["La Asunción de Nuestra Señora a los Cielos.", null], ["La Coronación de la Santísima Virgen como Reina de Cielos y Tierra.", "Ap 12,1"]] }
};
const ORDEN_MISTERIOS = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

/* Por qué se reza así: una explicación breve de cada parte, con el número de Rosarium Virginis Mariae (RVM)
   donde se habla de ella. Las frases entre comillas son textuales de la carta. */
const ROSARIO_PORQUE = {
  inicio: ["Cómo se empieza", "Hay varios modos legítimos de empezar: en algunos lugares con el Credo, “como haciendo de la profesión de fe el fundamento del camino contemplativo” (RVM 37). Las tres Ave María del comienzo, por la fe, la esperanza y la caridad, son una costumbre muy difundida.", "v"],
  misterio: ["El misterio, la Palabra y el silencio", "Se anuncia el misterio, se puede leer el pasaje de la Biblia y se hace un momento de silencio antes de seguir. Así el Rosario no es repetir de memoria, sino “dejar ‘hablar’ a Dios” (RVM 29-31).", "v"],
  "padre-nuestro": ["El Padre nuestro", "Después de mirar a Jesús, el corazón se eleva al Padre. Por eso el Padre nuestro hace que el Rosario, aunque se rece a solas, sea “una experiencia eclesial” (RVM 32).", "v"],
  "ave-maria": ["Las diez Ave María", "La repetición no es para aburrirse: es como el amor, que se dice muchas veces con palabras parecidas (RVM 26). El centro de cada Ave María es el nombre de Jesús (RVM 33).", "v"],
  gloria: ["El Gloria", "Es la meta de toda oración cristiana: la alabanza a la Trinidad. “Es importante que el Gloria, culmen de la contemplación, sea bien resaltado en el Rosario” (RVM 34).", "v"],
  jaculatoria: ["La jaculatoria", "Después del Gloria sigue una breve invocación, “que varía según las costumbres” (RVM 35).", "v"],
  final: ["Cómo se termina", "Se termina rezando por las intenciones del Papa, para abrir la mirada a las necesidades de toda la Iglesia, y muchas veces con la Salve (RVM 37). Las cuentas del rosario empiezan y terminan en el crucifijo, porque todo parte de Cristo y vuelve a Él (RVM 36).", "v"]
};
