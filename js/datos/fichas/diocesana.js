/* Fichas de la familia "diocesana": vocaciones que no son órdenes, congregaciones ni movimientos.
   Las 10 secciones conservan sus id (nombre, fundador, historia…) pero llevan títulos adaptados:
   Nombre · Origen en la Iglesia · Historia · Identidad y sentido · Espiritualidad · Misión y servicio ·
   Vestimenta y signos · Santos y testigos · Cómo es el camino · En Argentina y Mendoza.
   Fuentes principales: Código de Derecho Canónico, Catecismo, Concilio Vaticano II (vatican.va) y
   Arzobispado de Mendoza, consultadas el 12 de noviembre de 2026. */

const CIC = 'https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_';
const CEC = 'https://www.vatican.va/archive/catechism_sp/';
const VAT2 = 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_';
const MZA = 'https://arquimendoza.org.ar/';

Object.assign(FICHAS, {

  /* ==================================================== SACERDOTE DIOCESANO */
  "sacerdote-diocesano": {
    familia:"diocesana",
    nombre:"Sacerdote diocesano",
    latin:"Presbyter dioecesanus · el cura de la parroquia",
    resumen:"Es el cura de tu parroquia: un varón que recibe el sacramento del [[ordenacion|Orden]] y queda unido para siempre a una [[diocesis|diócesis]], con su obispo y los demás sacerdotes. No hace votos como un religioso, pero promete obediencia al obispo y vive el [[celibato|celibato]]. Antes de ser sacerdote es ordenado [[diaconado-transitorio|diácono]].",
    tarjeta:"El cura de la parroquia: ordenado para una diócesis, junto a su obispo. Pasa antes por el diaconado.",
    lema:["Tú eres sacerdote para siempre, a la manera de Melquisedec","Salmo 110,4, citado en la Carta a los Hebreos (5,6)"],
    habito:[["Clériman o sotana negra","oklch(0.22 0.01 260)"],["Alba blanca","oklch(0.96 0.01 90)"],["Estola y casulla del color litúrgico","oklch(0.55 0.11 145)"]],
    datos:[
      ["Sacramento","Orden, en el grado del presbiterado"],
      ["Norma","Código de Derecho Canónico, cánones 1008-1054 y 265-289"],
      ["Depende de","El obispo de su diócesis"],
      ["Edad mínima","25 años para el presbiterado"],
      ["Formación","Seminario: 4 etapas (Ratio de 2016)"],
      ["Estado de vida","Célibe"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre técnico es <strong>[[presbitero|presbítero]]</strong>, del griego <em>presbýteros</em>, “anciano”. En el lenguaje de todos los días le decimos <strong>sacerdote</strong>, <strong>padre</strong> o <strong>cura</strong> (el que tiene la “cura”, el cuidado, de una comunidad). ${MK.g}</p>
        <p>El Catecismo explica que hoy la palabra <em>sacerdos</em> se usa para los obispos y los presbíteros, pero no para los diáconos. ${MK.v}</p>
        <p>Se lo llama <strong>diocesano</strong> o <strong>secular</strong> para distinguirlo del sacerdote religioso (jesuita, franciscano, salesiano…): el diocesano no pertenece a una orden, sino a una diócesis concreta. ${MK.g}</p>` },

      { id:"fundador", titulo:"Origen en la Iglesia", estado:"v", html:`
        <p>No tiene un fundador humano. Según la fe de la Iglesia, el sacramento del Orden fue instituido por Cristo: es <strong>el sacramento gracias al cual la misión confiada a los Apóstoles sigue viva hasta el fin de los tiempos</strong>. ${MK.v}</p>
        <ul class="dots">
          <li><strong>Tres grados:</strong> episcopado, presbiterado y diaconado. ${MK.v}</li>
          <li><strong>Colaboradores del obispo:</strong> según el Concilio Vaticano II, a los presbíteros se les confió, en grado subordinado, la función ministerial de los obispos. ${MK.v}</li>
          <li><strong>Un solo presbiterio:</strong> los sacerdotes de una diócesis forman, con su obispo, una fraternidad sacramental llamada [[presbiterio|presbiterio]] (Presbyterorum ordinis 8). ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">s. I</span><div class="ev"><b>Los Apóstoles imponen las manos</b>Las cartas pastorales del Nuevo Testamento hablan de presbíteros puestos en cada comunidad (por ejemplo, Tito 1,5). ${MK.g}</div></li>
          <li><span class="y">1563</span><div class="ev"><b>Nacen los seminarios</b>El Concilio de Trento pide que cada diócesis tenga un [[seminario|seminario]] para formar a sus sacerdotes. ${MK.g}</div></li>
          <li><span class="y">1859</span><div class="ev"><b>Muere el Cura de Ars</b>San Juan María Vianney, párroco de una aldea francesa, hoy patrono de todos los párrocos. ${MK.v}</div></li>
          <li><span class="y">1965</span><div class="ev"><b>Presbyterorum ordinis</b>El Concilio Vaticano II dedica un decreto a la vida y el ministerio de los presbíteros. ${MK.v}</div></li>
          <li><span class="y">1972</span><div class="ev"><b>Fin de las órdenes menores</b>Pablo VI las reemplaza por los [[ministerios-laicales|ministerios]] de lector y acólito, y suprime el subdiaconado. ${MK.v}</div></li>
          <li><span class="y">2009</span><div class="ev"><b>Año Sacerdotal</b>Benedicto XVI lo convoca a los 150 años de la muerte del Cura de Ars. ${MK.v}</div></li>
          <li><span class="y">2016</span><div class="ev"><b>Brochero y la nueva Ratio</b>El 16 de octubre es canonizado el Cura Brochero; el 8 de diciembre se publica “El don de la vocación presbiteral”, que ordena la formación en los seminarios. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Identidad y sentido", estado:"v", html:`
        <p>Por la ordenación, el sacerdote recibe un <strong>[[caracter-indeleble|carácter]] que no se borra</strong> y la misión de <strong>actuar en la persona de Cristo Cabeza</strong>. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Anunciar</h3><p>Predicar el Evangelio y enseñar la fe.</p></div>
          <div class="box"><h3>Santificar</h3><p>Celebrar la Eucaristía, que es el centro de su ministerio, y los demás sacramentos.</p></div>
          <div class="box"><h3>Apacentar</h3><p>Cuidar a la comunidad como un pastor, en nombre del obispo.</p></div>
        </div>
        <p class="note">Lo propio del sacerdote <em>diocesano</em> es la <strong>pertenencia a una Iglesia concreta</strong>: por la [[incardinacion|incardinación]], queda unido a su diócesis para siempre y no puede ser un clérigo “suelto”. ${MK.v}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>No tiene una escuela espiritual propia, como la ignaciana o la franciscana: su espiritualidad nace del <strong>ministerio mismo</strong> y de la diócesis donde sirve. Muchos sacerdotes diocesanos se alimentan además de algún [[movimiento|movimiento]] o tradición. ${MK.g}</p>
        <ul class="dots">
          <li><strong>La caridad pastoral:</strong> dar la vida por su gente, como el Buen Pastor.</li>
          <li><strong>La Eucaristía diaria</strong> y la [[liturgia-horas|Liturgia de las Horas]], que reza en nombre de toda la Iglesia.</li>
          <li><strong>La fraternidad sacerdotal</strong> con los demás curas del presbiterio.</li>
          <li><strong>El celibato</strong> como signo de entrega total al Reino. El Catecismo lo describe como un signo de la vida nueva, “aceptado con un corazón alegre”. ${MK.v}</li>
        </ul>` },

      { id:"mision", titulo:"Misión y servicio", estado:"g", html:`
        <p>El obispo le encomienda una tarea, que puede cambiar a lo largo de la vida:</p>
        <ul class="dots">
          <li><strong>Párroco o vicario</strong> de una parroquia, con sus capillas, catequesis, Cáritas y grupos.</li>
          <li><strong>Capellán</strong> de hospitales, cárceles, colegios o universidades.</li>
          <li><strong>Formador</strong> en el seminario, o encargado de una pastoral (juvenil, familiar, vocacional).</li>
          <li><strong>Misionero</strong> en otra diócesis o país, si el obispo lo envía.</li>
        </ul>
        <p class="note">Según el Código, los clérigos merecen una retribución adecuada a su oficio para poder vivir. ${MK.v}</p>` },

      { id:"habito", titulo:"Vestimenta y signos", estado:"g", html:`
        <p>No tiene un hábito como los religiosos. El Código pide a los clérigos usar un <strong>traje eclesiástico</strong> según las normas de cada Conferencia Episcopal. En la Argentina suele ser el <strong>clériman</strong> (camisa con cuello blanco) o la <strong>sotana</strong>. ${MK.g}</p>
        <p>En la Misa usa el <strong>alba</strong> blanca, la <strong>estola</strong> colgada del cuello y la <strong>casulla</strong>, del color del tiempo litúrgico. ${MK.g}</p>
        <p class="note">El signo central de la ordenación no es una prenda: es la imposición de las manos del obispo y la oración consecratoria. Después del obispo, también los sacerdotes presentes imponen las manos al ordenando, como signo de unidad del presbiterio. ${MK.v}</p>` },

      { id:"santos", titulo:"Santos y testigos", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San José Gabriel Brochero</b><span class="d">1840 – 1914 · Córdoba, Argentina</span><p>El “Cura gaucho” de Traslasierra: recorría la sierra a lomo de mula, abrió caminos y levantó una casa de ejercicios. Canonizado el 16 de octubre de 2016.</p><div class="tags"><span>Santo</span><span>Argentino</span></div></div>
          <div class="saint"><b>San Juan María Vianney</b><span class="d">1786 – 1859 · Francia</span><p>El Cura de Ars. Pasaba largas horas confesando. Es el patrono de todos los párrocos del mundo.</p><div class="tags"><span>Patrono</span></div></div>
          <div class="saint"><b>San Juan de Ávila</b><span class="d">s. XVI · España</span><p>Sacerdote diocesano, predicador y maestro de sacerdotes. Patrono del clero secular español y doctor de la Iglesia.</p><div class="tags"><span>Doctor</span></div></div>
        </div>
        <p class="note">La canonización de Brochero (2016) y el patronazgo del Cura de Ars están verificados. Las fechas de vida y los datos de San Juan de Ávila son de conocimiento general. ${MK.g}</p>` },

      { id:"formar-parte", titulo:"Cómo es el camino", estado:"v", html:`
        <p>Todo empieza con un <strong>[[discernimiento|discernimiento]]</strong> acompañado, en general por la pastoral vocacional de la diócesis. Después, la formación en el seminario tiene <strong>cuatro etapas</strong>: ${MK.v}</p>
        <ol class="steps">
          <li><div><strong>Etapa [[propedeutico|propedéutica]]</strong>: ordinariamente de uno a dos años, para discernir y empezar la vida de oración.</div></li>
          <li><div><strong>Etapa discipular</strong>: los estudios de filosofía; el seminarista aprende a ser discípulo.</div></li>
          <li><div><strong>Etapa configuradora</strong>: los estudios de teología; se configura con Cristo Pastor. En el camino recibe los ministerios de <strong>lector</strong> y <strong>acólito</strong>.</div></li>
          <li><div><strong>Etapa pastoral o de síntesis vocacional</strong>: incluye la <strong>ordenación como diácono</strong> ([[diaconado-transitorio|diaconado transitorio]]) y un tiempo de servicio en la pastoral antes del sacerdocio.</div></li>
        </ol>
        <div class="cols" style="margin-top:14px">
          <div class="box"><h3>El diaconado, una etapa</h3><p>Puede recibirlo desde los 23 años, terminado el quinto año de estudios. Antes asume públicamente el celibato. Desde ese día ya es [[clerigo|clérigo]] e incardinado en su diócesis. ${MK.v}</p></div>
          <div class="box"><h3>El presbiterado</h3><p>Desde los 25 años y con suficiente madurez, dejando al menos seis meses entre el diaconado y el sacerdocio. ${MK.v}</p></div>
        </div>
        <p class="note">Nadie tiene “derecho” a ser ordenado: quien cree percibir el llamado lo pone en manos del obispo, que es quien llama (Catecismo 1578). ${MK.v}</p>` },

      { id:"presencia", titulo:"En Argentina y Mendoza", estado:"v", html:`
        <p>Cada diócesis argentina tiene sus sacerdotes diocesanos; muchas comparten seminario con otras. ${MK.g}</p>
        <div class="place"><b>Arquidiócesis de Mendoza</b>
          <p>Según el texto del Arzobispado por los 90 años de la diócesis (2024), la Iglesia mendocina sirve con <strong>104 sacerdotes diocesanos</strong> en 73 parroquias y 2 cuasiparroquias. ${MK.v}</p>
          <p>Su seminario es el <strong>Seminario Arquidiocesano “Nuestra Señora del Rosario”</strong>, con una formación de 7 años “organizada en un camino discipular y configurativo”. Allí funciona también un profesorado de filosofía abierto a laicos. ${MK.v}</p>
          <p>Una página del Arzobispado sin fecha habla de <strong>41 seminaristas</strong>; la cifra puede haber cambiado. ${MK.p}</p>
        </div>
        <p>En el sur de la provincia está la <strong>Diócesis de San Rafael</strong>. Su pastoral vocacional contó que en marzo de 2025 un joven de Malargüe empezó su formación para esa diócesis en el seminario de Mendoza. ${MK.v}</p>
        <p class="note">Para empezar un discernimiento, lo más directo es hablar con el cura de tu parroquia o con la Pastoral Vocacional del Arzobispado.</p>` }
    ],
    compartir:{
      frases:[
        ["El Sacerdocio es el amor del corazón de Jesús.","San Juan María Vianney, citado por Benedicto XVI en la carta del Año Sacerdotal (2009)"],
        ["Tú eres sacerdote para siempre, a la manera de Melquisedec.","Salmo 110,4"],
        ["Nadie se arroga para sí mismo este oficio. Al sacramento se es llamado por Dios.","Catecismo de la Iglesia Católica, 1578"]
      ],
      anecdotas:[
        ["Un año para los curas","Benedicto XVI convocó un “Año Sacerdotal” desde el 19 de junio de 2009, a los 150 años de la muerte del Cura de Ars. ${MK.v}"],
        ["El cura y su mula","Brochero recorría las sierras de Córdoba a lomo de mula para llegar a los ranchos más lejanos. Murió ciego y enfermo de lepra, contagiada, según la tradición, por compartir el mate con un leproso. ${MK.g}"]
      ],
      preguntas:[
        "¿Qué cura conocés que te haya marcado? ¿Qué tenía de especial?",
        "¿Por qué te parece que un sacerdote diocesano se “casa” con una diócesis concreta y no con una orden?",
        "Brochero abrió caminos para que la gente llegara a Dios… y también para que llegara el progreso. ¿Qué “caminos” hacen falta hoy en tu barrio?",
        "Si alguien de tu grupo dijera que piensa en el seminario, ¿cómo lo acompañarías?"
      ],
      dinamica:"“Una carta a mi cura”: cada uno escribe en una hoja una carta breve y anónima a un sacerdote que conozca (agradecimiento, una pregunta, algo que le gustaría que supiera). Se leen algunas en voz alta y, si el grupo quiere, se le entregan de verdad."
    },
    fuentes:[
      ["Catecismo de la Iglesia Católica, nn. 1536-1600: el sacramento del Orden", CEC+"p2s2c3a6_sp.html"],
      ["Código de Derecho Canónico, cann. 1008-1009", CIC+"libro4_cann1008-1009_sp.html"],
      ["Código de Derecho Canónico, cann. 1026-1032 (edades y estudios)", CIC+"libro4_cann1026-1032_sp.html"],
      ["Código de Derecho Canónico, cann. 1033-1039 (ministerios y celibato)", CIC+"libro4_cann1033-1039_sp.html"],
      ["Código de Derecho Canónico, cann. 265-272 (incardinación)", CIC+"libro2_cann265-272_sp.html"],
      ["Código de Derecho Canónico, cann. 273-289 (obligaciones de los clérigos)", CIC+"libro2_cann273-289_sp.html"],
      ["Concilio Vaticano II, decreto Presbyterorum ordinis", VAT2+"decree_19651207_presbyterorum-ordinis_sp.html"],
      ["Congregación para el Clero, El don de la vocación presbiteral (Ratio, 2016)","https://www.vatican.va/roman_curia/congregations/cclergy/documents/rc_con_cclergy_doc_20161208_ratio-fundamentalis-institutionis-sacerdotalis_sp.pdf"],
      ["Pablo VI, Ministeria quaedam (1972)","https://www.vatican.va/content/paul-vi/es/motu_proprio/documents/hf_p-vi_motu-proprio_19720815_ministeria-quaedam.html"],
      ["Benedicto XVI, Carta para la convocatoria del Año Sacerdotal (2009)","https://www.vatican.va/content/benedict-xvi/es/letters/2009/documents/hf_ben-xvi_let_20090616_anno-sacerdotale.html"],
      ["Wikipedia — José Gabriel Brochero","https://es.wikipedia.org/wiki/Jos%C3%A9_Gabriel_Brochero"],
      ["Arquidiócesis de Mendoza — La Arquidiócesis", MZA+"arquidiocesis/"],
      ["Arquidiócesis de Mendoza — Institutos arquidiocesanos de formación", MZA+"iii-institutos-arquidiocesanos-de-formacion/"],
      ["Llamados (Pastoral vocacional de San Rafael) — ¡Bienvenido Juan José! (2025)","https://llamados.ar/bienvenido-juan-jose-una-nueva-alegria-para-la-diocesis-de-san-rafael/"]
    ]
  },

  /* ==================================================== DIÁCONO PERMANENTE */
  "diacono-permanente": {
    familia:"diocesana",
    nombre:"Diácono permanente",
    latin:"Diaconus permanens",
    resumen:"Un varón, casado o célibe, que recibe el primer grado del sacramento del [[ordenacion|Orden]] para quedarse [[diacono|diácono]] toda la vida. No es sacerdote: es ordenado “para el servicio” de la Palabra, la liturgia y la caridad. La Iglesia latina lo recuperó con el Concilio Vaticano II.",
    tarjeta:"Ordenado para servir, muchas veces casado y con su trabajo. Restablecido por el Vaticano II.",
    lema:["El Hijo del hombre no vino para ser servido, sino para servir","Marcos 10,45, citado por el Catecismo (1570) para explicar el diaconado"],
    habito:[["Ropa común (no está obligado al traje clerical)","oklch(0.70 0.02 250)"],["Alba blanca","oklch(0.96 0.01 90)"],["Estola cruzada y dalmática","oklch(0.55 0.11 145)"]],
    datos:[
      ["Sacramento","Orden, en el grado del diaconado"],
      ["Norma","Lumen gentium 29; Código, cánones 236, 288 y 1031"],
      ["Depende de","El obispo diocesano"],
      ["Edad mínima","25 años si es célibe; 35 si es casado"],
      ["Requisito si es casado","Consentimiento de la esposa"],
      ["Restablecido","Concilio Vaticano II (1964) y normas de 1967"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p><strong>Diácono</strong> viene del griego <em>diákonos</em>, “servidor”. El Catecismo dice que el diácono queda configurado con Cristo, que se hizo “diácono”, es decir, el servidor de todos. ${MK.v}</p>
        <p>Se llama <strong>permanente</strong> porque se queda en ese grado, a diferencia del seminarista, que es diácono por un tiempo antes de ser sacerdote ([[diaconado-transitorio|diaconado transitorio]]). ${MK.v}</p>` },

      { id:"fundador", titulo:"Origen en la Iglesia", estado:"v", html:`
        <p>Los diáconos aparecen desde el principio: San Pablo saluda a “los obispos y diáconos” de Filipos (Filipenses 1,1) y la primera carta a Timoteo pide cualidades para los diáconos (1 Timoteo 3,8-13). ${MK.g}</p>
        <p>La tradición relaciona su origen con <strong>los Siete</strong> elegidos para atender a las viudas en Jerusalén (Hechos 6), entre ellos San Esteban. ${MK.t}</p>
        <p>El <strong>Concilio Vaticano II</strong> decidió que se podía restablecer “el diaconado como grado propio y permanente de la Jerarquía”, también para varones casados de edad madura, si cada Conferencia Episcopal lo veía oportuno (Lumen gentium 29). ${MK.v}</p>` },

      { id:"historia", titulo:"Historia", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">s. I</span><div class="ev"><b>Los Siete</b>Hechos 6 relata la elección de siete varones para el servicio de las mesas. ${MK.t}</div></li>
          <li><span class="y">s. III</span><div class="ev"><b>Solo el obispo impone las manos</b>La Tradición apostólica de Hipólito lo indica: el diácono queda vinculado al obispo. ${MK.v}</div></li>
          <li><span class="y">258</span><div class="ev"><b>San Lorenzo</b>Diácono de Roma, mártir. ${MK.g}</div></li>
          <li><span class="y">Luego</span><div class="ev"><b>Solo un paso</b>En Occidente, con los siglos, el diaconado queda como etapa previa al sacerdocio; las Iglesias de Oriente lo conservan siempre como grado permanente. ${MK.g}</div></li>
          <li><span class="y">1964</span><div class="ev"><b>Lumen gentium 29</b>El Concilio abre la puerta al diaconado permanente. ${MK.v}</div></li>
          <li><span class="y">1967</span><div class="ev"><b>Sacrum diaconatus ordinem</b>Pablo VI fija las normas generales para restablecerlo (18 de junio). ${MK.v}</div></li>
          <li><span class="y">1983</span><div class="ev"><b>Escuela en Mendoza</b>El 11 de marzo se erige la Escuela de Ministerios Eclesiales “San José”, que forma a los candidatos. ${MK.v}</div></li>
          <li><span class="y">2009</span><div class="ev"><b>Precisión en el Código</b>Benedicto XVI (Omnium in mentem) aclara que los diáconos sirven “en la diaconía de la liturgia, de la palabra y de la caridad” (canon 1009 §3). ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Identidad y sentido", estado:"v", html:`
        <p>El diácono recibe la imposición de las manos <strong>“no en orden al sacerdocio, sino en orden al ministerio”</strong> (Lumen gentium 29). Es [[clerigo|clérigo]], tiene un [[caracter-indeleble|carácter]] imborrable y está unido de manera especial a su obispo. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Diaconía de la Palabra</h3><p>Proclama el Evangelio, predica y enseña.</p></div>
          <div class="box"><h3>Diaconía de la liturgia</h3><p>Bautiza, asiste al altar, distribuye la Eucaristía, asiste y bendice matrimonios, preside exequias.</p></div>
          <div class="box"><h3>Diaconía de la caridad</h3><p>Se entrega a los servicios de la caridad y la administración.</p></div>
        </div>
        <p class="note">No puede celebrar la Misa, confesar ni dar la Unción de los enfermos: eso es propio de los sacerdotes. ${MK.g}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>Su centro es <strong>Cristo Servidor</strong>, el que lava los pies. ${MK.v}</p>
        <ul class="dots">
          <li><strong>Unir el altar y la calle:</strong> lo que celebra en la liturgia lo vive en el servicio a los pobres.</li>
          <li><strong>Doble sacramento:</strong> si está casado, vive juntos el Matrimonio y el Orden. Su familia es parte de su ministerio.</li>
          <li><strong>El trabajo:</strong> muchos siguen con su profesión, y ahí también son diáconos.</li>
          <li><strong>La [[liturgia-horas|Liturgia de las Horas]]</strong>, que reza en nombre de la Iglesia.</li>
        </ul>
        <p class="note">La Arquidiócesis de Mendoza los describe como “signo sacramental de Cristo Siervo, llamados a servir a la Iglesia, servir en la Iglesia y animar el servicio de la Iglesia”. ${MK.v}</p>` },

      { id:"mision", titulo:"Misión y servicio", estado:"g", html:`
        <p>El obispo le confía una tarea según las necesidades de la diócesis y la situación de su familia y su trabajo:</p>
        <ul class="dots">
          <li><strong>En una parroquia o capilla:</strong> celebraciones de la Palabra, bautismos, casamientos, exequias, catequesis.</li>
          <li><strong>En la caridad:</strong> Cáritas, cárceles, hospitales, barrios populares.</li>
          <li><strong>En la administración</strong> de bienes o en oficinas de la curia.</li>
          <li><strong>En la pastoral familiar</strong>, donde su experiencia de casado es una ayuda concreta.</li>
        </ul>` },

      { id:"habito", titulo:"Vestimenta y signos", estado:"v", html:`
        <p>En la liturgia usa el <strong>alba</strong>, la <strong>estola cruzada</strong> en diagonal (del hombro izquierdo al costado derecho) y, en las celebraciones solemnes, la <strong>dalmática</strong>. ${MK.g}</p>
        <p>Fuera de la liturgia, el Código establece que los diáconos permanentes <strong>no están obligados</strong> a usar el traje eclesiástico, salvo que el derecho particular disponga otra cosa (canon 288). ${MK.v}</p>
        <p class="note">En la ordenación, el obispo le entrega el libro de los Evangelios. ${MK.g}</p>` },

      { id:"santos", titulo:"Santos y testigos", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Esteban</b><span class="d">s. I · Jerusalén</span><p>Uno de los Siete y primer mártir cristiano (Hechos 6-7).</p><div class="tags"><span>Protomártir</span></div></div>
          <div class="saint"><b>San Lorenzo</b><span class="d">† 258 · Roma</span><p>Diácono de Roma, encargado de los bienes y de los pobres. Murió mártir.</p><div class="tags"><span>Mártir</span></div></div>
          <div class="saint"><b>San Efrén</b><span class="d">s. IV · Siria</span><p>Diácono, poeta y doctor de la Iglesia. Escribió himnos que se cantan hasta hoy en Oriente.</p><div class="tags"><span>Doctor</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general. San Francisco de Asís también suele ser recordado como diácono. No encontré todavía santos canonizados que hayan sido diáconos permanentes casados en la época moderna.</p>` },

      { id:"formar-parte", titulo:"Cómo es el camino", estado:"v", html:`
        <ol class="steps">
          <li><div><strong>Discernimiento</strong> con el párroco y, si es casado, con su esposa.</div></li>
          <li><div><strong>Formación</strong> según el plan de la Conferencia Episcopal: para los hombres maduros, célibes o casados, un plan de tres años (canon 236).</div></li>
          <li><div><strong>Ministerios de lector y acólito</strong>, ejercidos un tiempo; entre el acolitado y el diaconado tienen que pasar al menos seis meses (canon 1035).</div></li>
          <li><div><strong>Admisión como candidato</strong> con un rito, después de una solicitud escrita y firmada (canon 1034).</div></li>
          <li><div><strong>Ordenación diaconal</strong> por el obispo.</div></li>
        </ol>
        <div class="cols" style="margin-top:14px">
          <div class="box"><h3>Si es célibe</h3><p>Desde los 25 años, y asume públicamente el celibato antes de la ordenación (cánones 1031 y 1037).</p></div>
          <div class="box"><h3>Si es casado</h3><p>Desde los 35 años y <strong>con el consentimiento de su esposa</strong> (canon 1031 §2). Las Conferencias Episcopales pueden pedir más edad.</p></div>
        </div>
        <p class="note">Quien ya recibió el Orden no puede contraer matrimonio después (Catecismo 1580). Por eso, un soltero tiene que discernir antes de la ordenación si su camino es el celibato. ${MK.v}</p>` },

      { id:"presencia", titulo:"En Argentina y Mendoza", estado:"v", html:`
        <div class="place"><b>Arquidiócesis de Mendoza</b>
          <p>El diaconado permanente se estableció en Mendoza durante el pastoreo de Mons. Cándido Rubiolo (1979-1996). La formación está a cargo de la <strong>Escuela de Ministerios Eclesiales “San José”</strong>, erigida el 11 de marzo de 1983, que también forma lectores, acólitos y catequistas. ${MK.v}</p>
          <p>En agosto de 2022, la agencia AICA informó que la arquidiócesis contaba con <strong>68 diáconos permanentes</strong>, que hacen un retiro anual en Lunlunta (Maipú) junto con algunas de sus esposas. ${MK.v}</p>
          <p>El texto del Arzobispado por los 90 años de la diócesis (2024) habla de <strong>84 diáconos</strong>, sin aclarar si son todos permanentes. ${MK.p}</p>
        </div>
        <p class="note">Para una cifra actual, o para empezar el camino, conviene consultar en la Escuela de Ministerios “San José” o en el Arzobispado de Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["El Hijo del hombre no vino para ser servido, sino para servir y dar su vida.","Marcos 10,45"],
        ["Misericordiosos, diligentes, procediendo conforme a la verdad del Señor, que se hizo servidor de todos.","San Policarpo, citado por Lumen gentium 29"],
        ["Yo estoy entre ustedes como el que sirve.","Lucas 22,27"]
      ],
      anecdotas:[
        ["Las manos del obispo","Desde la Tradición apostólica de Hipólito (siglo III), en la ordenación de un diácono solo el obispo impone las manos, para mostrar que el diácono queda vinculado a él. En cambio, en la ordenación de un sacerdote también imponen las manos los otros sacerdotes. ${MK.v}"],
        ["El tesoro de la Iglesia","Se cuenta que, cuando el prefecto de Roma le exigió a San Lorenzo los tesoros de la Iglesia, él se presentó con los pobres y los enfermos: “Estos son los tesoros de la Iglesia”. ${MK.t}"]
      ],
      preguntas:[
        "¿Conocés algún diácono? ¿Qué te llama la atención de su vida?",
        "¿Qué significa que un hombre casado pueda recibir un sacramento para servir? ¿Cómo cambia eso la imagen de la Iglesia?",
        "Lorenzo dijo que los pobres eran el tesoro de la Iglesia. ¿Cuál sería el “tesoro” de tu comunidad?",
        "¿En qué lugares de tu vida podrías ser “diácono”, servidor, aunque no estés ordenado?"
      ],
      dinamica:"“El mapa del servicio”: en un afiche se dibuja el barrio o la parroquia. Cada uno marca con un papelito dónde ve una necesidad (un comedor, un hospital, una familia sola) y quién está sirviendo ahí. Al final se elige una sola necesidad para acompañar como grupo durante un mes."
    },
    fuentes:[
      ["Concilio Vaticano II, Lumen gentium (n. 29)", VAT2+"const_19641121_lumen-gentium_sp.html"],
      ["Catecismo de la Iglesia Católica, nn. 1569-1571, 1579-1580", CEC+"p2s2c3a6_sp.html"],
      ["Código de Derecho Canónico, cann. 1008-1009", CIC+"libro4_cann1008-1009_sp.html"],
      ["Código de Derecho Canónico, cann. 1026-1032", CIC+"libro4_cann1026-1032_sp.html"],
      ["Código de Derecho Canónico, cann. 1033-1039", CIC+"libro4_cann1033-1039_sp.html"],
      ["Código de Derecho Canónico, cann. 232-264 (formación, c. 236)", CIC+"libro2_cann232-264_sp.html"],
      ["Código de Derecho Canónico, cann. 273-289 (c. 288)", CIC+"libro2_cann273-289_sp.html"],
      ["Pablo VI, Sacrum diaconatus ordinem (1967, en inglés)","https://www.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19670618_sacrum-diaconatus.html"],
      ["Pablo VI, Ministeria quaedam (1972)","https://www.vatican.va/content/paul-vi/es/motu_proprio/documents/hf_p-vi_motu-proprio_19720815_ministeria-quaedam.html"],
      ["Arquidiócesis de Mendoza — La Arquidiócesis", MZA+"arquidiocesis/"],
      ["AICA — Los diáconos permanentes de Mendoza tuvieron su retiro anual (2022)","https://aica.org/noticia-los-diaconos-permanentes-de-mendoza-tuvieron-su-retiro-anual"]
    ]
  },

  /* ==================================================== VÍRGENES CONSAGRADAS */
  "virgenes-consagradas": {
    familia:"diocesana",
    nombre:"Vírgenes consagradas",
    latin:"Ordo virginum · Orden de las vírgenes",
    resumen:"Mujeres que se consagran a Dios para toda la vida en manos del obispo diocesano, con un rito solemne, pero sin entrar a un convento: siguen en su casa, su trabajo y su ciudad, al servicio de la diócesis. Es una de las formas de [[vida-consagrada|vida consagrada]] más antiguas, y la Iglesia la recuperó en 1970.",
    tarjeta:"Consagradas por el obispo, en medio del mundo. La forma más antigua, renovada en 1970.",
    lema:["¡Ya viene el esposo, salgan a su encuentro!","Mateo 25,6, de la parábola de las diez vírgenes"],
    habito:[["Sin hábito: ropa común","oklch(0.74 0.03 250)"]],
    datos:[
      ["Norma","Código de Derecho Canónico, canon 604"],
      ["Rito","Consagración de vírgenes (1970)"],
      ["Consagra","El obispo diocesano"],
      ["Edad","Ordinariamente 25 años o más"],
      ["Formación previa","Ordinariamente 2 o 3 años"],
      ["Documento guía","Ecclesiae Sponsae Imago (2018)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>En latín se llama <strong>[[ordo-virginum|Ordo virginum]]</strong>, “orden de las vírgenes”. “Orden” no significa aquí una orden religiosa, sino un grupo reconocido dentro de la Iglesia, como en la antigüedad. ${MK.v}</p>
        <p>El Código dice que esta forma de vida “se asemeja” a la vida consagrada: las vírgenes, “formulando el propósito santo de seguir más de cerca a Cristo, son consagradas a Dios por el Obispo diocesano según el rito litúrgico aprobado”. ${MK.v}</p>` },

      { id:"fundador", titulo:"Origen en la Iglesia", estado:"v", html:`
        <p>Según el Catecismo, <strong>desde los tiempos apostólicos</strong> hubo vírgenes y viudas que decidieron consagrarse a Dios con “una libertad mayor de corazón, de cuerpo y de espíritu” (1 Corintios 7,34-36). ${MK.v}</p>
        <p>A partir del <strong>siglo IV</strong> se entraba al orden de las vírgenes con un rito solemne presidido por el obispo, en la Misa, frente a la comunidad. ${MK.v}</p>
        <p>El Concilio Vaticano II pidió revisar ese rito (Sacrosanctum Concilium 80) y en <strong>1970</strong> se promulgó el nuevo <em>Ordo consecrationis virginum</em>. ${MK.v}</p>` },

      { id:"historia", titulo:"Historia", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">s. I</span><div class="ev"><b>Vírgenes en las comunidades</b>Viven en sus familias y son signo de la novedad cristiana. ${MK.v}</div></li>
          <li><span class="y">s. IV</span><div class="ev"><b>El rito del obispo</b>Hay testimonios en San Ambrosio de Milán. ${MK.v}</div></li>
          <li><span class="y">Luego</span><div class="ev"><b>Al monasterio</b>Con el monacato, la consagración virginal se une a la vida en comunidad y la forma original desaparece de a poco. ${MK.v}</div></li>
          <li><span class="y">1963</span><div class="ev"><b>Sacrosanctum Concilium 80</b>El Concilio pide revisar el rito. ${MK.v}</div></li>
          <li><span class="y">1970</span><div class="ev"><b>Nuevo rito</b>Promulgado el 31 de mayo, en vigor desde el 6 de enero de 1971. ${MK.v}</div></li>
          <li><span class="y">1983</span><div class="ev"><b>Canon 604</b>El Código de Derecho Canónico la reconoce. ${MK.v}</div></li>
          <li><span class="y">2018</span><div class="ev"><b>Ecclesiae Sponsae Imago</b>Instrucción vaticana dedicada al Ordo virginum (8 de junio). ${MK.v}</div></li>
          <li><span class="y">2022</span><div class="ev"><b>Asociaciones</b>Se agrega el canon 604 §3: el obispo, o la Conferencia Episcopal, puede erigir asociaciones de vírgenes. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Identidad y sentido", estado:"v", html:`
        <p>La virgen consagrada vive unos <strong>“desposorios místicos con Jesucristo”</strong> y se entrega al servicio de la Iglesia. Según el rito, es “signo trascendente del amor de la Iglesia hacia Cristo” e imagen de la vida futura (Catecismo 923). ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Esposa</h3><p>Su consagración es nupcial: Cristo es el centro de su afecto.</p></div>
          <div class="box"><h3>Diocesana</h3><p>Está arraigada en su Iglesia local, bajo el cuidado del obispo, y no en un instituto.</p></div>
          <div class="box"><h3>En el mundo</h3><p>Vive sola o con su familia, con su trabajo, en su ambiente.</p></div>
          <div class="box"><h3>Madre</h3><p>Está abierta a una maternidad espiritual hacia los demás.</p></div>
        </div>
        <p class="note">No hace votos como una religiosa: lo que la consagra es el rito celebrado por el obispo. Puede asociarse con otras vírgenes para ayudarse (canon 604 §2). ${MK.v}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"v", html:`
        <ul class="dots">
          <li><strong>La Eucaristía en el centro</strong>, en lo posible todos los días. ${MK.v}</li>
          <li><strong>La [[liturgia-horas|Liturgia de las Horas]]</strong>, sobre todo Laudes y Vísperas, que recibe como compromiso en el rito. ${MK.v}</li>
          <li><strong>El año litúrgico</strong> como “vía maestra”. ${MK.v}</li>
          <li><strong>María, “Virgen de las vírgenes”</strong>, modelo de virginidad, esponsalidad y maternidad. ${MK.v}</li>
          <li><strong>Libertad de espíritu:</strong> puede apoyarse en la espiritualidad de una tercera orden o un movimiento, sin dejar de ser diocesana. ${MK.v}</li>
        </ul>` },

      { id:"mision", titulo:"Misión y servicio", estado:"v", html:`
        <p>No tiene una obra propia. Su misión es <strong>su vida misma</strong>, donde está:</p>
        <ul class="dots">
          <li><strong>El trabajo profesional</strong>, elegido según sus capacidades: es parte de su testimonio. ${MK.v}</li>
          <li><strong>La oración y la penitencia</strong> por la Iglesia y el mundo. ${MK.v}</li>
          <li><strong>El servicio a la diócesis:</strong> catequesis, liturgia, caridad, acompañamiento, según sus dones y lo que acuerde con el obispo. ${MK.g}</li>
          <li><strong>Los pobres y los que sufren</strong>, como predilección propia. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Vestimenta y signos", estado:"v", html:`
        <p><strong>No tiene hábito.</strong> Viste según las costumbres del lugar, con sobriedad. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>El anillo</h3><p>Lo recibe en la consagración y lo lleva siempre, salvo excepciones, como signo de la alianza con Cristo.</p></div>
          <div class="box"><h3>El velo</h3><p>Puede recibirlo en el rito, pero donde las casadas no se cubren la cabeza no lo usa a diario. El obispo puede admitirlo en la liturgia.</p></div>
          <div class="box"><h3>El Oficio divino</h3><p>En el rito recibe la Liturgia de las Horas “como don” y la asume “como compromiso” para toda la vida.</p></div>
        </div>
        <p class="note">Todo esto está en la instrucción Ecclesiae Sponsae Imago (nn. 34 y 38). ${MK.v}</p>` },

      { id:"santos", titulo:"Santos y testigos", estado:"t", html:`
        <div class="saints">
          <div class="saint"><b>Santa Inés</b><span class="d">† s. IV · Roma</span><p>Muy joven, prefirió morir antes que renunciar a su consagración a Cristo.</p><div class="tags"><span>Virgen</span><span>Mártir</span></div></div>
          <div class="saint"><b>Santa Cecilia</b><span class="d">s. III · Roma</span><p>Patrona de la música. Su relato es muy antiguo y en parte legendario.</p><div class="tags"><span>Virgen</span><span>Mártir</span></div></div>
          <div class="saint"><b>Santa Águeda</b><span class="d">s. III · Sicilia</span><p>Virgen y mártir de Catania, nombrada en la plegaria eucarística romana.</p><div class="tags"><span>Virgen</span><span>Mártir</span></div></div>
        </div>
        <p class="note">Las vidas de estas mártires mezclan historia y tradición. ${MK.t} Como el orden se renovó en 1970, todavía no hay santas canonizadas que hayan vivido esta forma moderna. La instrucción de 2018 propone a la Virgen María como modelo. ${MK.v}</p>` },

      { id:"formar-parte", titulo:"Cómo es el camino", estado:"v", html:`
        <ol class="steps">
          <li><div><strong>Primer acercamiento</strong> y diálogo con el obispo o la persona que él delegue.</div></li>
          <li><div><strong>Período propedéutico</strong>, nunca antes de los 18 años, para conocer esta vocación y ser conocida.</div></li>
          <li><div><strong>Formación previa a la consagración</strong>, ordinariamente de <strong>dos o tres años</strong>, con acompañamiento espiritual, oración regular, estudio y vida de servicio.</div></li>
          <li><div><strong>Admisión</strong> por el obispo, que fija con ella la fecha y el lugar.</div></li>
          <li><div><strong>Consagración</strong>, ordinariamente desde los <strong>25 años</strong>.</div></li>
          <li><div><strong>Formación permanente</strong> durante toda la vida.</div></li>
        </ol>
        <p class="note">Se pide haber recibido los sacramentos de iniciación, no haber celebrado nunca nupcias y no haber vivido pública y manifiestamente en un estado contrario a la castidad. La instrucción aclara que la integridad física, aunque importante, no es por sí sola un requisito determinante (Ecclesiae Sponsae Imago 84, 88 y 93). ${MK.v}</p>` },

      { id:"presencia", titulo:"En Argentina y Mendoza", estado:"v", html:`
        <div class="place"><b>Arquidiócesis de Mendoza</b>
          <p>La página de Vida Consagrada del Arzobispado (versión anterior del sitio) lista <strong>11 vírgenes consagradas</strong>, consagradas entre <strong>1976</strong> y <strong>2019</strong>. ${MK.v}</p>
          <p>No encontré si hubo consagraciones después de 2019 ni cuántas son hoy. ${MK.p}</p>
        </div>
        <p>Una entrevista publicada en 2024 por un sitio chileno del Ordo virginum menciona a una virgen consagrada de la Diócesis de San Rafael, en el sur de Mendoza. No lo pude confirmar en una fuente de esa diócesis. ${MK.p}</p>
        <p class="note">Para conocer a alguna o empezar un discernimiento, lo indicado es consultar en la Vicaría para la Vida Consagrada o en el Arzobispado de Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["¡Ya viene el esposo, salgan a su encuentro!","Mateo 25,6"],
        ["La mujer no casada y la virgen se preocupan de las cosas del Señor.","1 Corintios 7,34"],
        ["Consagradas por el Obispo diocesano, asumen un vínculo especial con la Iglesia, a cuyo servicio se dedican, aun permaneciendo en el mundo.","San Juan Pablo II, Vita consecrata 7"]
      ],
      anecdotas:[
        ["Una forma que volvió","Durante siglos la consagración de las vírgenes quedó reservada casi solo a las monjas. Cuando en 1970 se publicó el nuevo rito para mujeres que viven en el mundo, la instrucción de 2018 habla de un “verdadero reflorecimiento” en todos los continentes. ${MK.v}"],
        ["Encuentros en Roma","Las vírgenes consagradas de muchos países se reunieron con San Juan Pablo II en 1995 y con Benedicto XVI en 2008. ${MK.v}"]
      ],
      preguntas:[
        "¿Sabías que una mujer puede consagrarse a Dios sin entrar a un convento? ¿Qué te genera esa idea?",
        "¿Qué significa que alguien elija a Cristo como “esposo”? ¿Cómo lo explicarías a un amigo que no cree?",
        "¿En qué se parece y en qué se diferencia esta vocación de la de una religiosa o de una laica de un instituto secular?",
        "¿Qué lugar ocupa la oración en tu día? ¿Podrías sumar un momento fijo, como Laudes o Vísperas?"
      ],
      dinamica:"“Rezar con la Iglesia”: el grupo reza juntas las Vísperas del día (con una app o un libro de la Liturgia de las Horas). Después se comparte qué salmo o frase tocó a cada uno y se explica que las vírgenes consagradas se comprometen a rezar así todos los días."
    },
    fuentes:[
      ["Código de Derecho Canónico, cann. 573-606 (c. 604)", CIC+"libro2_cann573-606_sp.html"],
      ["Catecismo de la Iglesia Católica, nn. 922-924", CEC+"p123a9p4_sp.html"],
      ["Concilio Vaticano II, Sacrosanctum Concilium (n. 80)", VAT2+"const_19631204_sacrosanctum-concilium_sp.html"],
      ["Congregación para los Institutos de Vida Consagrada, Ecclesiae Sponsae Imago (2018)","https://www.vatican.va/roman_curia/congregations/ccscrlife/documents/rc_con_ccscrlife_doc_20180608_istruzione-ecclesiaesponsaeimago_sp.html"],
      ["San Juan Pablo II, Vita consecrata (n. 7)","https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_25031996_vita-consecrata.html"],
      ["Arquidiócesis de Mendoza — Vírgenes consagradas", MZA+"virgenes-consagradas/"]
    ]
  },

  /* ==================================================== ERMITAÑOS DIOCESANOS */
  "ermitanos-diocesanos": {
    familia:"diocesana",
    nombre:"Ermitaños diocesanos",
    latin:"Vita eremitica · canon 603",
    resumen:"Varones o mujeres que viven en soledad, silencio, oración y penitencia, y que hacen una profesión pública de los consejos evangélicos en manos del obispo diocesano, con una [[regla-de-vida|regla de vida]] aprobada por él. Desde 1983 el Código reconoce esta [[vida-eremitica|vida eremítica]] fuera de las órdenes religiosas.",
    tarjeta:"Solos con Dios, en relación directa con el obispo. Reconocidos por el canon 603.",
    lema:["La llevaré al desierto y le hablaré al corazón","Oseas 2,16 (en algunas Biblias, 2,14)"],
    habito:[["Sin hábito obligatorio (lo acuerda con el obispo)","oklch(0.62 0.03 70)"]],
    datos:[
      ["Norma","Código de Derecho Canónico, canon 603"],
      ["Desde","1983, en el derecho actual"],
      ["Profesión","Consejos evangélicos, con voto u otro vínculo sagrado"],
      ["Ante","El obispo diocesano"],
      ["Regla","Proyecto de vida propio, bajo la dirección del obispo"],
      ["Documento guía","Ponam in deserto viam (2021)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p><strong>[[ermitano|Ermitaño]]</strong> o <strong>eremita</strong> viene del griego <em>éremos</em>, “desierto”. El Código habla de vida “eremítica o anacorética” (anacoreta: el que se retira). ${MK.v}</p>
        <p>Se dice <strong>diocesano</strong> porque no pertenece a una orden: vive su consagración en relación directa con el obispo de su diócesis. ${MK.v}</p>` },

      { id:"fundador", titulo:"Origen en la Iglesia", estado:"v", html:`
        <p>La vida eremítica es tan antigua como el monacato: en los siglos III y IV muchos cristianos se fueron al desierto de Egipto y Siria para buscar a Dios. ${MK.g}</p>
        <p>Lo nuevo es su reconocimiento jurídico. El canon 603 del Código de 1983 dice que, además de los institutos de vida consagrada, la Iglesia reconoce la vida eremítica, “en la cual los fieles, con un apartamiento más estricto del mundo, el silencio de la soledad, la oración asidua y la penitencia, dedican su vida a la alabanza de Dios y salvación del mundo”. ${MK.v}</p>` },

      { id:"historia", titulo:"Historia", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">s. III</span><div class="ev"><b>Los Padres del desierto</b>San Antonio Abad y otros ermitaños en Egipto. ${MK.g}</div></li>
          <li><span class="y">s. VI</span><div class="ev"><b>La Regla de San Benito</b>Estima a los ermitaños, aunque se dedica a la vida en comunidad. ${MK.v}</div></li>
          <li><span class="y">s. XI</span><div class="ev"><b>Florecimiento</b>En los siglos XI y XII nacen órdenes que unen soledad y comunidad, como camaldulenses y cartujos. ${MK.v}</div></li>
          <li><span class="y">1983</span><div class="ev"><b>Canon 603</b>El Código reconoce al ermitaño que profesa en manos del obispo. ${MK.v}</div></li>
          <li><span class="y">1996</span><div class="ev"><b>Vita consecrata 7</b>Menciona a los eremitas “dependientes directamente del Obispo”. ${MK.v}</div></li>
          <li><span class="y">2021</span><div class="ev"><b>Ponam in deserto viam</b>Orientaciones vaticanas sobre la vida eremítica en la Iglesia particular (14 de septiembre). ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Identidad y sentido", estado:"v", html:`
        <p>Según el canon 603 §2, el ermitaño es reconocido como consagrado si cumple <strong>tres condiciones</strong>:</p>
        <ol class="steps">
          <li><div><strong>Profesa públicamente</strong> los tres consejos evangélicos (pobreza, castidad y obediencia), con un voto u otro vínculo sagrado.</div></li>
          <li><div>Lo hace <strong>en manos del obispo diocesano</strong>.</div></li>
          <li><div>Sigue <strong>su forma propia de vida bajo la dirección del obispo</strong>.</div></li>
        </ol>
        <p>El Catecismo dice que el eremita muestra “ese aspecto interior del misterio de la Iglesia que es la intimidad personal con Cristo”: su vida escondida es una “predicación silenciosa”. ${MK.v}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"v", html:`
        <ul class="dots">
          <li><strong>Silencio y soledad</strong>, para estar “con Dios solo”. ${MK.v}</li>
          <li><strong>Oración asidua</strong>: alabanza a Dios e intercesión por toda la humanidad. ${MK.v}</li>
          <li><strong>Penitencia y ayuno</strong>, para recordar que “no sólo de pan vive el hombre” (Vita consecrata 7). ${MK.v}</li>
          <li><strong>El desierto interior</strong>: el Catecismo habla de un llamado a encontrar en el desierto, en el combate espiritual, la gloria del Crucificado. ${MK.v}</li>
        </ul>` },

      { id:"mision", titulo:"Misión y servicio", estado:"v", html:`
        <p>Su misión principal es <strong>rezar</strong>. Su vida recuerda a toda la comunidad “no perder de vista la suprema vocación, que es la de estar siempre con el Señor” (Vita consecrata 7). ${MK.v}</p>
        <ul class="dots">
          <li><strong>El trabajo</strong>, generalmente manual o sencillo, para sostenerse y no depender de nadie. ${MK.g}</li>
          <li><strong>La acogida discreta</strong>: algunos reciben a quien busca oración o consejo, dentro de los límites de su regla. ${MK.g}</li>
          <li><strong>La pertenencia a la diócesis</strong>: no es un “llanero solitario”; su soledad está arraigada en la Iglesia local. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Vestimenta y signos", estado:"v", html:`
        <p><strong>No hay un hábito obligatorio.</strong> Según las orientaciones vaticanas de 2021, si el ermitaño quiere usar un hábito como signo de su consagración, <strong>lo decide de acuerdo con el obispo</strong>. ${MK.v}</p>
        <p>El signo principal es la <strong>ermita</strong> o el lugar retirado donde vive, y su <strong>proyecto de vida</strong> escrito. ${MK.g}</p>` },

      { id:"santos", titulo:"Santos y testigos", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Antonio Abad</b><span class="d">s. III-IV · Egipto</span><p>Padre de los ermitaños. Su vida, escrita por San Atanasio, inspiró a generaciones de monjes.</p><div class="tags"><span>Padre del desierto</span></div></div>
          <div class="saint"><b>San Pablo, primer ermitaño</b><span class="d">s. III-IV · Egipto</span><p>Según la tradición, vivió muchísimos años solo en el desierto.</p><div class="tags"><span>Tradición</span></div></div>
          <div class="saint"><b>San Carlos de Foucauld</b><span class="d">1858 – 1916 · Francia, Argelia</span><p>Ex militar convertido. Vivió como ermitaño en el Sahara, cerca de los tuaregs. Canonizado en 2022.</p><div class="tags"><span>Santo</span></div></div>
        </div>
        <p class="note">Ninguno de ellos fue ermitaño “del canon 603”, que existe desde 1983: son testigos de la tradición eremítica. ${MK.g} La vida de San Pablo ermitaño es más legendaria. ${MK.t}</p>` },

      { id:"formar-parte", titulo:"Cómo es el camino", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Discernimiento largo</strong> con un acompañante espiritual. En la antigüedad ya se pedía un tiempo de prueba junto a un ermitaño con experiencia. ${MK.v}</div></li>
          <li><div><strong>Diálogo con el obispo</strong>, que es quien puede recibir la profesión. ${MK.v}</div></li>
          <li><div><strong>Redacción del proyecto de vida</strong> (<em>ratio vivendi</em>), que expresa “de modo sobrio y esencial” los principios espirituales y normativos de su vocación. ${MK.v}</div></li>
          <li><div><strong>Profesión pública</strong> de los consejos evangélicos en manos del obispo. ${MK.v}</div></li>
        </ol>
        <p class="note">${MK.p} No encontré normas de la Conferencia Episcopal Argentina sobre edades o duración de la formación. Cada obispo puede fijarlas.</p>
        <p class="note">Ojo: vivir solo y rezar mucho no alcanza para ser ermitaño del canon 603. Hace falta el reconocimiento formal del obispo.</p>` },

      { id:"presencia", titulo:"En Argentina y Mendoza", estado:"p", html:`
        <p class="note">${MK.p} No encontré información pública sobre ermitaños diocesanos reconocidos por el canon 603 en la Arquidiócesis de Mendoza ni en la Diócesis de San Rafael. Por la naturaleza escondida de esta vocación, es posible que existan y no estén publicados.</p>
        <p>La traducción castellana de las orientaciones vaticanas <em>Ponam in deserto viam</em> que consulté fue hecha en la Argentina, en una abadía benedictina de Córdoba, y publicada en Cuadernos Monásticos en 2023. ${MK.v}</p>
        <p class="note">Para saber si hay ermitaños diocesanos en Mendoza, lo indicado es consultar en la Vicaría para la Vida Consagrada o en el Arzobispado.</p>` }
    ],
    compartir:{
      frases:[
        ["La llevaré al desierto y le hablaré al corazón.","Oseas 2,16"],
        ["Pondré un camino en el desierto.","Isaías 43,19, título de las orientaciones vaticanas sobre la vida eremítica"],
        ["La vida del eremita es predicación silenciosa de Aquel a quien ha entregado su vida, porque Él es todo para él.","Catecismo de la Iglesia Católica, 921"]
      ],
      anecdotas:[
        ["Una frase del Evangelio","Según su biografía antigua, San Antonio escuchó en misa “Si quieres ser perfecto, vende lo que tienes y dalo a los pobres” y se fue al desierto. ${MK.g}"],
        ["El hermano universal","Carlos de Foucauld quería ser “hermano universal”: vivía solo en el desierto, pero cerca de los tuaregs, a quienes estudió y quiso. ${MK.g}"]
      ],
      preguntas:[
        "¿Cuánto silencio hay en tu día? ¿Te cuesta estar solo y sin pantallas?",
        "¿Para qué sirve, según vos, que alguien viva escondido rezando por los demás?",
        "¿Qué diferencia hay entre aislarse y retirarse para estar con Dios?",
        "¿Qué “desierto” podrías hacer vos esta semana, aunque sea de media hora?"
      ],
      dinamica:"“Diez minutos de desierto”: el grupo apaga los celulares y se queda diez minutos en silencio total, en lo posible al aire libre, con una sola frase para meditar (Oseas 2,16). Después cada uno comparte en una palabra qué le pasó: incomodidad, paz, aburrimiento, encuentro."
    },
    fuentes:[
      ["Código de Derecho Canónico, cann. 573-606 (c. 603)", CIC+"libro2_cann573-606_sp.html"],
      ["Catecismo de la Iglesia Católica, nn. 920-921", CEC+"p123a9p4_sp.html"],
      ["San Juan Pablo II, Vita consecrata (n. 7)","https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_25031996_vita-consecrata.html"],
      ["Congregación para los Institutos de Vida Consagrada, Ponam in deserto viam (2021), trad. en Cuadernos Monásticos 225 (2023)","https://www.surco.org/sites/default/files/cuadmon/ponam_in_deserto_viam.pdf"]
    ]
  },

  /* ==================================================== MATRIMONIO */
  matrimonio: {
    familia:"diocesana",
    nombre:"Matrimonio como vocación",
    latin:"Sacramentum matrimonii",
    resumen:"Un varón y una mujer bautizados que se unen para toda la vida y, al hacerlo, reciben un [[sacramento|sacramento]]: Cristo se queda con ellos. La Iglesia lo ve como una verdadera vocación, un camino de santidad, y llama a la familia [[iglesia-domestica|Iglesia doméstica]].",
    tarjeta:"Una alianza para toda la vida, elevada a sacramento. Camino de santidad para la mayoría.",
    lema:["Lo que Dios ha unido, que no lo separe el hombre","Mateo 19,6"],
    habito:[["Sin vestimenta propia: las alianzas como signo","oklch(0.80 0.10 85)"]],
    datos:[
      ["Sacramento","Matrimonio"],
      ["Norma","Código de Derecho Canónico, cánones 1055-1165"],
      ["Ministros","Los mismos esposos (rito latino)"],
      ["Propiedades","Unidad e indisolubilidad"],
      ["Lo produce","El consentimiento de los novios"],
      ["Documentos clave","Gaudium et spes 48-52; Catecismo 1601-1666"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p><strong>Matrimonio</strong> viene del latín <em>matrimonium</em>, de <em>mater</em>, madre. También se habla de <strong>alianza matrimonial</strong> o <strong>sacramento del Matrimonio</strong>. ${MK.g}</p>
        <p>El Código lo define como “la alianza matrimonial, por la que el varón y la mujer constituyen entre sí un consorcio de toda la vida, ordenado por su misma índole natural al bien de los cónyuges y a la generación y educación de la prole”. ${MK.v}</p>` },

      { id:"fundador", titulo:"Origen en la Iglesia", estado:"v", html:`
        <p>Para la fe católica, el autor del matrimonio es <strong>Dios mismo</strong>: “la íntima comunidad conyugal de vida y amor” fue fundada por el Creador (Gaudium et spes 48). ${MK.v}</p>
        <p>Entre bautizados, Cristo lo <strong>elevó a la dignidad de sacramento</strong>. Por eso, entre dos bautizados no hay matrimonio válido que no sea a la vez sacramento. ${MK.v}</p>
        <p>La Iglesia da mucha importancia a la presencia de Jesús en las <strong>bodas de Caná</strong> (Juan 2): ve allí la confirmación de la bondad del matrimonio. ${MK.v}</p>` },

      { id:"historia", titulo:"Historia", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">Biblia</span><div class="ev"><b>Varón y mujer</b>“Serán una sola carne” (Génesis 2,24). ${MK.v}</div></li>
          <li><span class="y">s. I</span><div class="ev"><b>Un gran misterio</b>San Pablo compara el amor de los esposos con el de Cristo y la Iglesia (Efesios 5,32). ${MK.v}</div></li>
          <li><span class="y">1563</span><div class="ev"><b>Concilio de Trento</b>Afirma que el matrimonio es un verdadero sacramento y pide celebrarlo ante el párroco y testigos. ${MK.g}</div></li>
          <li><span class="y">1965</span><div class="ev"><b>Gaudium et spes</b>El Concilio lo describe como “comunidad de vida y amor”. ${MK.v}</div></li>
          <li><span class="y">1981</span><div class="ev"><b>Familiaris consortio</b>Exhortación de San Juan Pablo II sobre la familia. ${MK.g}</div></li>
          <li><span class="y">2001</span><div class="ev"><b>Primeros esposos beatos</b>Luis y María Beltrame Quattrocchi, beatificados juntos el 21 de octubre. ${MK.v}</div></li>
          <li><span class="y">2015</span><div class="ev"><b>Esposos santos</b>Luis Martin y María Azelia (Celia) Guérin, padres de Santa Teresita, canonizados el 18 de octubre. ${MK.v}</div></li>
          <li><span class="y">2016</span><div class="ev"><b>Amoris laetitia</b>Exhortación del papa Francisco sobre el amor en la familia. ${MK.g}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Identidad y sentido", estado:"v", html:`
        <p>El matrimonio es una <strong>vocación</strong>: el Catecismo dice que “la vocación al matrimonio se inscribe en la naturaleza misma del hombre y de la mujer”, y que los esposos tienen “su carisma propio en el Pueblo de Dios” (Lumen gentium 11). ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Unidad</h3><p>Uno con una: amor exclusivo y fiel.</p></div>
          <div class="box"><h3>Indisolubilidad</h3><p>Para toda la vida: “lo que Dios ha unido…”. Ver [[indisolubilidad|indisolubilidad]].</p></div>
          <div class="box"><h3>Fecundidad</h3><p>Abierto a la vida y a la educación de los hijos, y fecundo también en el servicio a los demás.</p></div>
          <div class="box"><h3>Signo</h3><p>Es signo eficaz de la alianza de Cristo con la Iglesia.</p></div>
        </div>
        <p class="note">En el rito latino, <strong>los ministros del sacramento son los propios esposos</strong>: se lo confieren mutuamente al dar su [[consentimiento|consentimiento]] ante la Iglesia. El sacerdote o diácono es testigo y bendice. En las Iglesias orientales, en cambio, la bendición del sacerdote es necesaria para la validez. ${MK.v}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"v", html:`
        <p>La gracia del sacramento sirve para <strong>perfeccionar el amor</strong> de los esposos y fortalecer su unidad: “se ayudan mutuamente a santificarse en la vida conyugal y en la acogida y educación de los hijos” (Lumen gentium 11). ${MK.v}</p>
        <ul class="dots">
          <li><strong>Cristo se queda con ellos:</strong> les da fuerza para tomar la cruz, levantarse, perdonarse y llevar las cargas del otro (Catecismo 1642). ${MK.v}</li>
          <li><strong>La casa como escuela:</strong> el hogar es “la primera escuela de vida cristiana” (Catecismo 1657). ${MK.v}</li>
          <li><strong>Oración en familia</strong>, Misa del domingo, bendición de la mesa: pequeños gestos que hacen Iglesia. ${MK.g}</li>
        </ul>` },

      { id:"mision", titulo:"Misión y servicio", estado:"v", html:`
        <ul class="dots">
          <li><strong>Los hijos:</strong> los padres son “los primeros anunciadores de la fe” para sus hijos y tienen que cuidar la vocación de cada uno, también la vocación a la vida consagrada (Lumen gentium 11). ${MK.v}</li>
          <li><strong>La sociedad:</strong> “la salvación de la persona y de la sociedad humana y cristiana está estrechamente ligada a la prosperidad de la comunidad conyugal y familiar” (Gaudium et spes 47). ${MK.v}</li>
          <li><strong>Faros de fe:</strong> en un mundo que muchas veces es indiferente, las familias creyentes son “faros de una fe viva” (Catecismo 1656). ${MK.v}</li>
          <li><strong>La comunidad:</strong> muchos matrimonios sirven en la catequesis, la preparación de novios, Cáritas o movimientos como el <a href="#mfc">Movimiento Familiar Cristiano</a>, el <a href="#encuentro-matrimonial">Encuentro Matrimonial</a> o los <a href="#ens">Equipos de Nuestra Señora</a>. ${MK.g}</li>
        </ul>` },

      { id:"habito", titulo:"Vestimenta y signos", estado:"g", html:`
        <p>No hay una vestimenta propia. Los signos del rito son:</p>
        <div class="cols">
          <div class="box"><h3>El consentimiento</h3><p>El “sí, quiero” dicho ante la Iglesia es el corazón del sacramento. ${MK.v}</p></div>
          <div class="box"><h3>Las alianzas</h3><p>Los anillos que se dan como signo de amor y fidelidad.</p></div>
          <div class="box"><h3>Las arras</h3><p>En muchos lugares de habla hispana, monedas que expresan que los bienes se comparten.</p></div>
        </div>
        <p class="note">Las alianzas y las arras son costumbres de conocimiento general; la importancia del consentimiento está en el Código (canon 1057). En el rito latino, el matrimonio entre dos católicos se celebra ordinariamente dentro de la Misa (Catecismo 1621). ${MK.v}</p>` },

      { id:"santos", titulo:"Santos y testigos", estado:"v", html:`
        <div class="saints">
          <div class="saint"><b>Santos Luis Martin y Celia Guérin</b><span class="d">s. XIX · Francia</span><p>Padres de Santa Teresita. Vivieron la fe en el trabajo y la familia; de ese clima surgieron las vocaciones de sus hijas. Canonizados juntos el 18 de octubre de 2015.</p><div class="tags"><span>Santos</span><span>Esposos</span></div></div>
          <div class="saint"><b>Beatos Luis y María Beltrame Quattrocchi</b><span class="d">s. XX · Italia</span><p>Primer matrimonio beatificado juntos, el 21 de octubre de 2001.</p><div class="tags"><span>Beatos</span><span>Esposos</span></div></div>
          <div class="saint"><b>Santa Gianna Beretta Molla</b><span class="d">1922 – 1962 · Italia</span><p>Médica, esposa y madre. Durante su último embarazo eligió cuidar la vida de su hija.</p><div class="tags"><span>Santa</span><span>Madre</span></div></div>
        </div>
        <p class="note">Martin y Beltrame Quattrocchi están verificados en vatican.va y Vatican News. Los datos de Santa Gianna son de conocimiento general. ${MK.g}</p>` },

      { id:"formar-parte", titulo:"Cómo es el camino", estado:"v", html:`
        <ol class="steps">
          <li><div><strong>El noviazgo</strong>, tiempo de conocerse y discernir.</div></li>
          <li><div><strong>La preparación</strong>: el Código pide a los pastores que la comunidad acompañe con catequesis, con una preparación personal de los novios, con una celebración bien vivida y con ayuda después del casamiento (canon 1063). En la práctica suelen ser encuentros o cursos en la parroquia. ${MK.g}</div></li>
          <li><div><strong>La confirmación</strong>: los católicos que todavía no la recibieron deben hacerlo antes, si es posible sin dificultad grave (canon 1065).</div></li>
          <li><div><strong>El expediente matrimonial</strong> en la parroquia, para comprobar que no haya impedimentos.</div></li>
          <li><div><strong>La celebración</strong>, con el consentimiento libre de los dos ante el testigo de la Iglesia.</div></li>
          <li><div><strong>La vida de casados</strong>: la Iglesia sigue acompañando, sobre todo en los primeros años.</div></li>
        </ol>
        <p class="note">Se recomienda confesarse y comulgar antes de casarse (canon 1065 §2). ${MK.v}</p>` },

      { id:"presencia", titulo:"En Argentina y Mendoza", estado:"g", html:`
        <p>La preparación al matrimonio se hace en las parroquias de todo el país. ${MK.g}</p>
        <div class="place"><b>Arquidiócesis de Mendoza</b>
          <p>La arquidiócesis tiene una <strong>Pastoral Familiar</strong>, que el arzobispo menciona entre los espacios arquidiocesanos en su carta de 2024. ${MK.v}</p>
          <p>No encontré el calendario ni la modalidad de los cursos de preparación a nivel diocesano. ${MK.p}</p>
        </div>
        <p class="note">Para casarse por Iglesia, el primer paso es acercarse a la parroquia de uno de los novios, con tiempo (varios meses antes).</p>` }
    ],
    compartir:{
      frases:[
        ["Lo que Dios ha unido, que no lo separe el hombre.","Mateo 19,6"],
        ["Este es un gran misterio: y yo lo refiero a Cristo y a la Iglesia.","Efesios 5,32"],
        ["El hogar es así la primera escuela de vida cristiana y escuela del más rico humanismo.","Catecismo de la Iglesia Católica, 1657"]
      ],
      anecdotas:[
        ["Primero quisieron ser consagrados","Antes de conocerse, Luis Martin pensó en ser monje y Celia Guérin quiso ser religiosa. Ninguno de los dos fue admitido, y terminaron siendo santos como esposos. ${MK.g}"],
        ["Caná","El primer signo de Jesús fue en una boda, a pedido de su Madre. La Iglesia ve ahí la confirmación de la bondad del matrimonio. ${MK.v}"]
      ],
      preguntas:[
        "¿Pensaste alguna vez el matrimonio como una “vocación”, un llamado de Dios, y no solo como una decisión afectiva?",
        "¿Qué matrimonio conocés que te inspire? ¿Qué tiene?",
        "¿Por qué te parece que la Iglesia insiste en el “para siempre”? ¿Qué lo hace posible?",
        "¿Qué podés empezar a vivir ya, en tu noviazgo o tus amistades, que te prepare para un amor fiel?"
      ],
      dinamica:"“Entrevista a un matrimonio”: se invita a una pareja con muchos años de casados. El grupo prepara antes cinco preguntas (cómo se conocieron, una crisis que superaron, qué lugar tiene Dios). Después de la charla, cada uno escribe en una frase qué se lleva."
    },
    fuentes:[
      ["Catecismo de la Iglesia Católica, nn. 1601-1666", CEC+"p2s2c3a7_sp.html"],
      ["Código de Derecho Canónico, cann. 1055-1062", CIC+"libro4_cann1055-1062_sp.html"],
      ["Código de Derecho Canónico, cann. 1063-1072", CIC+"libro4_cann1063-1072_sp.html"],
      ["Concilio Vaticano II, Gaudium et spes (nn. 47-52)", VAT2+"const_19651207_gaudium-et-spes_sp.html"],
      ["Concilio Vaticano II, Lumen gentium (n. 11)", VAT2+"const_19641121_lumen-gentium_sp.html"],
      ["Francisco, Homilía de canonización de Luis Martin y María Azelia Guérin (2015)","https://www.vatican.va/content/francesco/es/homilies/2015/documents/papa-francesco_20151018_omelia-canonizzazioni.html"],
      ["Vatican News — Beatos Luis y María Beltrame Quattrocchi","https://www.vaticannews.va/es/santos/11/25/bb--luis-y-maria-beltrame-quattrocchi--coniugi.html"],
      ["AICA — Carta pastoral sobre el Orden de las Viudas Consagradas (menciona la Pastoral Familiar de Mendoza)","https://aica.org/documento.php?id=1426"]
    ]
  },

  /* ==================================================== VIUDAS CONSAGRADAS */
  "viudas-consagradas": {
    familia:"diocesana",
    nombre:"Viudas consagradas",
    latin:"Ordo viduarum · Orden de las viudas",
    resumen:"Mujeres que, después de la muerte de su esposo, descubren un llamado a pertenecer por completo a Dios y se consagran con un voto de castidad perpetua en manos del obispo diocesano. Siguen en su casa y con su familia, dedicadas a la oración y al servicio de la Iglesia. Mendoza instituyó este [[ordo-viduarum|orden]] en 2024.",
    tarjeta:"Viudas que se consagran a Dios en manos del obispo. Instituido en Mendoza en 2024.",
    lema:["No se apartaba del Templo, sirviendo a Dios noche y día con ayunos y oraciones","Lucas 2,37, sobre la profetisa Ana, viuda"],
    habito:[["Sin hábito: ropa común","oklch(0.70 0.02 280)"]],
    datos:[
      ["Base","Catecismo 922; Vita consecrata 7; canon 605"],
      ["Consagra","El obispo diocesano"],
      ["Compromiso","Voto de castidad perpetua"],
      ["En Mendoza","Instituido el 29 de junio de 2024"],
      ["Edad en Mendoza","50 años (dispensable)"],
      ["Viudez en Mendoza","Al menos 5 años"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>En latín, <strong>[[ordo-viduarum|Ordo viduarum]]</strong>, “orden de las viudas”. Como en el caso de las vírgenes, “orden” no quiere decir orden religiosa, sino un grupo reconocido en la Iglesia local. ${MK.v}</p>
        <p>San Juan Pablo II menciona también la posibilidad de la consagración de los <strong>viudos</strong> (Vita consecrata 7). ${MK.v}</p>` },

      { id:"fundador", titulo:"Origen en la Iglesia", estado:"v", html:`
        <p>El Catecismo dice que <strong>desde los tiempos apostólicos</strong> hubo vírgenes y viudas llamadas a consagrarse a Dios por completo (Catecismo 922). ${MK.v}</p>
        <p>San Juan Pablo II escribió que “hoy vuelve a practicarse también la consagración de las viudas, que se remonta a los tiempos apostólicos (cf. 1 Tim 5,5.9-10; 1 Co 7,8)”: mediante el voto de castidad perpetua, “consagran su condición para dedicarse a la oración y al servicio de la Iglesia” (Vita consecrata 7). ${MK.v}</p>
        <p class="note">No encontré un rito universal publicado por la Santa Sede, como el que existe para las vírgenes. ${MK.g} El arzobispo de Mendoza fundamenta su decisión en el canon 605, que pide a los obispos discernir los nuevos dones de vida consagrada y darles estatutos. ${MK.v}</p>` },

      { id:"historia", titulo:"Historia", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">s. I</span><div class="ev"><b>Ana y las viudas de Pablo</b>La profetisa Ana en el Templo (Lucas 2,36-38) y las indicaciones de 1 Timoteo 5. ${MK.v}</div></li>
          <li><span class="y">s. II</span><div class="ev"><b>Un orden en la Iglesia</b>Entre los siglos II y V, la Tradición apostólica, la Didascalia y otros textos regulan la vida de las viudas consagradas. San Ambrosio escribe <em>De viduis</em> y San Agustín, <em>Sobre el bien de la viudez</em>. ${MK.v}</div></li>
          <li><span class="y">1485</span><div class="ev"><b>Desaparece el rito</b>Según la carta del arzobispo de Mendoza, Inocencio VIII quita del Pontifical Romano la bendición de las viudas. ${MK.v}</div></li>
          <li><span class="y">s. XX</span><div class="ev"><b>Después de las guerras</b>Muchas viudas de las guerras mundiales consagran su viudez a Dios. ${MK.v}</div></li>
          <li><span class="y">1996</span><div class="ev"><b>Vita consecrata 7</b>San Juan Pablo II la reconoce como forma que “vuelve a practicarse”. ${MK.v}</div></li>
          <li><span class="y">2024</span><div class="ev"><b>Mendoza</b>El 29 de junio, el arzobispo instituye el Orden de las viudas consagradas en la arquidiócesis. ${MK.v}</div></li>
        </ol>
        <p class="note">Los datos de los siglos II a XX están tomados de la carta pastoral del arzobispo de Mendoza (2024), que los presenta con sus propias notas.</p>` },

      { id:"carisma", titulo:"Identidad y sentido", estado:"v", html:`
        <p>La consagración de la viuda <strong>no borra su matrimonio</strong>: según la carta pastoral de Mendoza, “los efectos y responsabilidades derivados del matrimonio no cesan”; la viuda y sus hijos siguen siendo una familia. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Amor más fuerte que la muerte</h3><p>Su fidelidad es un signo de que el amor en Cristo no termina.</p></div>
          <div class="box"><h3>Ícono de la ternura de Dios</h3><p>Hace presente el cuidado de Dios por los débiles.</p></div>
          <div class="box"><h3>Modelo de fe y de espera</h3><p>Vive en la esperanza del encuentro con Cristo y con su esposo.</p></div>
          <div class="box"><h3>Diocesana</h3><p>Está “en el corazón de la Iglesia” local, bajo la guía del obispo.</p></div>
        </div>
        <p class="note">Los cuatro rasgos son el “perfil espiritual” que publica el Arzobispado de Mendoza. ${MK.v}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"v", html:`
        <ul class="dots">
          <li><strong>La oración</strong>: alabanza, intercesión y ofrenda de sí, alimentada por la Palabra de Dios. ${MK.v}</li>
          <li><strong>La Eucaristía</strong> y la <strong>[[liturgia-horas|Liturgia de las Horas]]</strong>, “voz de la esposa que habla al esposo”. ${MK.v}</li>
          <li><strong>El duelo vivido en la fe</strong>: la pérdida no se niega ni se olvida el amor compartido, pero se abre a un llamado nuevo. ${MK.v}</li>
          <li><strong>La espera</strong> vigilante del Señor que viene. ${MK.v}</li>
        </ul>` },

      { id:"mision", titulo:"Misión y servicio", estado:"v", html:`
        <p>La viuda consagrada se pone a disposición de las necesidades de su diócesis y de su parroquia “a través de su servicio de oración y caridad”, bajo la guía del obispo. ${MK.v}</p>
        <ul class="dots">
          <li><strong>Su familia</strong>: hijos, nietos, otros parientes.</li>
          <li><strong>La parroquia</strong>: Cáritas, grupos de oración, catequesis, liturgia, misión.</li>
          <li><strong>Los pobres y los que sufren</strong>, con un amor especial.</li>
          <li><strong>El diálogo entre generaciones</strong>: la carta pastoral destaca su aporte a los jóvenes.</li>
        </ul>` },

      { id:"habito", titulo:"Vestimenta y signos", estado:"p", html:`
        <p><strong>No tiene hábito.</strong> Sigue vistiendo como siempre. ${MK.g}</p>
        <p>La consagración se celebra con un <strong>rito litúrgico</strong> presidido por el obispo; el Arzobispado de Mendoza lo llama “Rito litúrgico de la Bendición”. ${MK.v}</p>
        <p class="note">${MK.p} No encontré si en Mendoza el rito incluye la entrega de algún signo, como un anillo o un velo. Conviene consultarlo con el delegado arzobispal.</p>` },

      { id:"santos", titulo:"Santos y testigos", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>La profetisa Ana</b><span class="d">s. I · Jerusalén</span><p>Viuda que servía a Dios en el Templo y reconoció al Niño Jesús (Lucas 2,36-38).</p><div class="tags"><span>Biblia</span></div></div>
          <div class="saint"><b>Santa Mónica</b><span class="d">s. IV · África del Norte</span><p>Madre de San Agustín. Viuda, rezó durante años por la conversión de su hijo.</p><div class="tags"><span>Santa</span><span>Madre</span></div></div>
          <div class="saint"><b>Santa Emma de Gurk</b><span class="d">s. XI · Austria</span><p>Viuda. El arzobispo de Mendoza instituyó el orden en su memoria.</p><div class="tags"><span>Santa</span></div></div>
        </div>
        <p class="note">La carta pastoral de Mendoza nombra también a Santa Brígida de Suecia, Santa Rita de Casia, Santa Francisca Romana, Santa Luisa de Marillac y Santa Juana de Chantal: viudas que después <em>entraron o fundaron</em> órdenes religiosas, algo distinto del Ordo viduarum. ${MK.v} Los datos de Santa Mónica y Santa Emma son de conocimiento general. ${MK.g}</p>` },

      { id:"formar-parte", titulo:"Cómo es el camino", estado:"v", html:`
        <p>En la <strong>Arquidiócesis de Mendoza</strong>, los requisitos publicados son: ${MK.v}</p>
        <ol class="steps">
          <li><div>Estar bautizada y confirmada, y haber tenido un <strong>matrimonio válido</strong>, disuelto por la muerte del esposo.</div></li>
          <li><div><strong>No haber convivido</strong> con otra persona durante la viudez.</div></li>
          <li><div>Recta intención, buena fama y una <strong>preparación adecuada</strong>, con dirección espiritual.</div></li>
          <li><div>Presentar por escrito una <strong>solicitud al arzobispo</strong> y recibir su visto bueno.</div></li>
          <li><div>Tener <strong>50 años</strong> (el arzobispo puede dispensarlo) y que hayan pasado <strong>5 años</strong> desde la muerte del esposo.</div></li>
        </ol>
        <p class="note">Otras diócesis pueden tener requisitos distintos. No todas las viudas que viven con mucha fe están llamadas a esta consagración: se necesita un discernimiento con el obispo y sus colaboradores. ${MK.v}</p>` },

      { id:"presencia", titulo:"En Argentina y Mendoza", estado:"v", html:`
        <div class="place"><b>Arquidiócesis de Mendoza</b>
          <p>El arzobispo instituyó el <strong>Orden de las viudas consagradas</strong> con una carta pastoral del <strong>29 de junio de 2024</strong>, en el marco de los 90 años de la diócesis. ${MK.v}</p>
          <p>Nombró un <strong>delegado episcopal</strong>, con la tarea de armar un equipo para el discernimiento y la formación, y de preparar un estatuto y un reglamento. ${MK.v}</p>
          <p>El Arzobispado tiene una página con el perfil espiritual, los requisitos y un contacto. ${MK.v}</p>
          <p>No encontré cuántas viudas fueron consagradas desde entonces. ${MK.p}</p>
        </div>
        <p>En otras diócesis argentinas no encontré información. ${MK.p}</p>` }
    ],
    compartir:{
      frases:[
        ["No se apartaba del Templo, sirviendo a Dios noche y día con ayunos y oraciones.","Lucas 2,37"],
        ["Estas personas, mediante el voto de castidad perpetua como signo del Reino de Dios, consagran su condición para dedicarse a la oración y al servicio de la Iglesia.","San Juan Pablo II, Vita consecrata 7"],
        ["Son signo de un amor más fuerte que la muerte.","Perfil espiritual de las viudas consagradas, Arzobispado de Mendoza"]
      ],
      anecdotas:[
        ["Una fecha elegida","La carta que instituyó el orden en Mendoza se dio a conocer el 29 de junio de 2024, fiesta de San Pedro y San Pablo y memoria de Santa Emma de Gurk, una viuda santa. ${MK.v}"],
        ["Altar de Dios","San Policarpo y Tertuliano llamaban a las viudas “altar de Dios”, por su oración incesante, según la carta pastoral de Mendoza. ${MK.v}"]
      ],
      preguntas:[
        "¿Conocés alguna viuda que viva la fe de una manera que te inspire?",
        "¿Qué te dice que alguien pueda consagrarse a Dios después de haber estado casado? ¿Hay una edad para la vocación?",
        "“Un amor más fuerte que la muerte”: ¿qué te sugiere esa frase sobre el amor y la fe?",
        "¿Cómo podría tu grupo acompañar a personas que están atravesando un duelo?"
      ],
      dinamica:"“Puentes entre generaciones”: el grupo visita o invita a personas mayores de la parroquia (viudas, viudos, abuelos). Se arman parejas joven-mayor y se conversa con tres preguntas: ¿qué te sostuvo en los momentos difíciles?, ¿qué lugar tuvo Dios?, ¿qué consejo le darías a alguien de mi edad?"
    },
    fuentes:[
      ["Catecismo de la Iglesia Católica, n. 922", CEC+"p123a9p4_sp.html"],
      ["San Juan Pablo II, Vita consecrata (n. 7)","https://www.vatican.va/content/john-paul-ii/es/apost_exhortations/documents/hf_jp-ii_exh_25031996_vita-consecrata.html"],
      ["Código de Derecho Canónico, cann. 573-606 (c. 605)", CIC+"libro2_cann573-606_sp.html"],
      ["AICA — Carta pastoral de Mons. Marcelo Colombo: Institución del Orden de las Viudas Consagradas (2024)","https://aica.org/documento.php?id=1426"],
      ["El Heraldo — El arzobispo de Mendoza instituye el Orden de las Viudas Consagradas (2024)","https://www.elheraldo.com.ar/noticias/interes-general/el-arzobispo-de-mendoza-instituye-el-orden-de-las-viudas-consagradas"],
      ["Arquidiócesis de Mendoza — Orden de viudas consagradas", MZA+"orden-de-viudas-consagradas/"]
    ]
  }

});
