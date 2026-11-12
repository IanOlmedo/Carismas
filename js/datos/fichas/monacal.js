/* Fichas de la familia "monacal". Cada ficha sigue la estructura descripta en CLAUDE.md. */
Object.assign(FICHAS, {

  /* ---------------------------------------------------- BENEDICTINOS */
  benedictinos: {
    familia:"monacal",
    nombre:"Benedictinos",
    latin:"Orden de San Benito · Ordo Sancti Benedicti",
    resumen:"Hace quince siglos, San Benito escribió una Regla breve para monjes que querían buscar a Dios juntos. De ella nació casi toda la vida monástica de Occidente, y con ella buena parte de la cultura de Europa. Su secreto es el equilibrio: oración, trabajo, estudio y una comunidad que se quiere.",
    tarjeta:"La raíz de la vida monástica de Occidente. Oración, trabajo, hospitalidad y la Regla de San Benito.",
    lema:["Pax · Ora et labora","“Paz” es el lema tradicional de los monasterios. “Rezá y trabajá” resume la Regla, aunque la frase no aparece textualmente en ella."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Negro (cogulla)","oklch(0.26 0.01 260)"],["Blanco (toca)","oklch(0.97 0.005 85)"]],
    datos:[
      ["Siglas","O.S.B."],
      ["Fundador","San Benito de Nursia (c. 480 – c. 547)"],
      ["Regla","Regla de San Benito (siglo VI)"],
      ["Organización","Monasterios autónomos unidos en una Confederación"],
      ["Fiesta principal","11 de julio, San Benito, patrono de Europa"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Se los conoce como <strong>Orden de San Benito</strong> (O.S.B.), pero en realidad no es una orden centralizada como los jesuitas o los franciscanos. Cada monasterio es <strong>autónomo</strong>, con su propio [[abad|abad o abadesa]], y los monasterios se agrupan en [[congregacion-monastica|congregaciones monásticas]].</p>
        <p>Desde 1893, por decisión del papa León XIII, esas congregaciones forman la <strong>Confederación Benedictina</strong>, presidida por un Abad Primado que vive en Roma, en el monasterio de San Anselmo.</p>
        <p>La Regla de San Benito también es la base de otras familias que tendrán su propia ficha: los Cistercienses, los Trapenses y los Camaldulenses, entre otros.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Benito de Nursia</strong> nació hacia el año 480 en Nursia (hoy Norcia, en Italia) y murió hacia el 547 en Montecassino. Las fechas son aproximadas: casi todo lo que sabemos de su vida viene del libro II de los <em>Diálogos</em> de San Gregorio Magno, escrito unos cincuenta años después de su muerte.</p>
        <ul class="dots">
          <li><strong>Hacia 529:</strong> funda el monasterio de Montecassino, que se considera la cuna de la orden. ${MK.t}</li>
          <li><strong>Siglo VI:</strong> escribe la [[regla|Regla]], probablemente en Montecassino.</li>
          <li><strong>Santa Escolástica</strong>, su hermana (la tradición dice que melliza), es considerada la madre de las monjas benedictinas. ${MK.t}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <p>Benito vivió en un momento de derrumbe: el Imperio romano de Occidente acababa de caer, había guerras e inseguridad. Mientras todo se venía abajo, propuso algo muy simple y muy firme: una comunidad estable que reza, trabaja y recibe a todos.</p>
        <ol class="timeline">
          <li><span class="y">≈500</span><div class="ev"><b>La cueva de Subiaco</b>Joven estudiante en Roma, deja la ciudad y vive unos tres años como [[ermitano|ermitaño]] en una cueva de Subiaco, hoy el santuario del Sacro Speco.</div></li>
          <li><span class="y">≈529</span><div class="ev"><b>Montecassino</b>Después de fundar varios monasterios en Subiaco, se instala en el monte Cassino. Allí escribe la Regla y allí muere.</div></li>
          <li><span class="y">596</span><div class="ev"><b>Misioneros</b>El papa Gregorio Magno, monje él mismo, envía a San Agustín de Canterbury con monjes a evangelizar Inglaterra.</div></li>
          <li><span class="y">817</span><div class="ev"><b>La Regla para todo el Imperio</b>Bajo Ludovico Pío y San Benito de Aniano, la Regla se impone a los monasterios del Imperio carolingio.</div></li>
          <li><span class="y">910</span><div class="ev"><b>Cluny</b>Nace la abadía de Cluny, en Francia, que llegó a encabezar cientos de monasterios y renovó la Iglesia medieval.</div></li>
          <li><span class="y">1098</span><div class="ev"><b>Císter</b>Un grupo de monjes busca vivir la Regla con más sencillez y funda Cîteaux: nacen los Cistercienses.</div></li>
          <li><span class="y">1893</span><div class="ev"><b>Confederación Benedictina</b>León XIII une a las congregaciones bajo un Abad Primado.</div></li>
          <li><span class="y">1899</span><div class="ev"><b>Llegan a la Argentina</b>El 30 de agosto, monjes de la abadía de Belloc fundan el Niño Dios en Victoria, Entre Ríos: el primer monasterio benedictino de Hispanoamérica.</div></li>
          <li><span class="y">1944</span><div class="ev"><b>Montecassino destruido</b>Un bombardeo de la Segunda Guerra Mundial arrasa la abadía. Se reconstruye después de la guerra.</div></li>
          <li><span class="y">1964</span><div class="ev"><b>Patrono de Europa</b>Pablo VI declara a San Benito patrono principal de Europa.</div></li>
          <li><span class="y">2023</span><div class="ev"><b>Argentinas en el Vaticano</b>Seis monjas de la abadía de Santa Escolástica (Victoria, Buenos Aires) son llamadas a vivir en el monasterio Mater Ecclesiae, en los jardines vaticanos, para rezar por el Papa y la Iglesia.</div></li>
        </ol>
        <p class="note">Las fechas de 1899 y 2023 están verificadas. Las demás son de conocimiento general en la historia de la Iglesia; las del siglo VI son aproximadas por definición.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] benedictino es <strong>buscar a Dios en comunidad</strong>, bajo una Regla y un abad, en un lugar estable. La Regla lo resume en una frase: <strong>no anteponer nada al amor de Cristo</strong> (Regla 4,21).</p>
        <div class="cols">
          <div class="box"><h3>Escucha</h3><p>La primera palabra de la Regla es “Escucha”. Todo empieza por abrir el oído del corazón a Dios, a la Palabra, al abad y a los hermanos.</p></div>
          <div class="box"><h3>Comunidad estable</h3><p>El monje se compromete con un monasterio concreto para toda la vida. No busca a Dios solo, sino con hermanos reales, con sus virtudes y defectos.</p></div>
          <div class="box"><h3>Oración y trabajo</h3><p>La jornada se reparte entre la oración común, la lectura y el trabajo manual o intelectual. Ninguno de los tres se descuida.</p></div>
          <div class="box"><h3>Hospitalidad</h3><p>La Regla pide recibir a todos los huéspedes como a Cristo (Regla 53,1). Por eso casi todo monasterio tiene una [[hospederia|hospedería]].</p></div>
        </div>
        <p style="margin-top:14px">Los monjes hacen tres [[votos|votos]] propios, nombrados en la Regla (capítulo 58): <strong>obediencia</strong>, [[estabilidad|estabilidad]] y [[conversatio|conversión de costumbres]]. La pobreza y la castidad quedan incluidas en este último.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La [[espiritualidad|espiritualidad]] benedictina se reconoce por su <strong>equilibrio</strong>. Benito pide que nada sea excesivo, para que los fuertes tengan algo que desear y los débiles no se desanimen.</p>
        <ul class="dots">
          <li><strong>La Obra de Dios:</strong> así llama la Regla a la [[liturgia-horas|Liturgia de las Horas]] cantada en comunidad varias veces al día. “Nada se anteponga a la Obra de Dios” (Regla 43,3).</li>
          <li><strong>[[lectio|Lectio divina]]:</strong> horas diarias de lectura lenta y orante de la Biblia y de los Padres de la Iglesia.</li>
          <li><strong>Humildad:</strong> el capítulo 7 de la Regla la describe como una escalera de doce peldaños. Es reconocer la verdad sobre uno mismo ante Dios.</li>
          <li><strong>Obediencia y silencio:</strong> como escucha activa, no como sumisión ciega.</li>
          <li><strong>Trabajo:</strong> la Regla dice que la ociosidad es enemiga del alma (48,1). El trabajo también es camino hacia Dios.</li>
          <li><strong>El tiempo ordenado:</strong> la jornada entera tiene un ritmo, y en ese ritmo se aprende a vivir en presencia de Dios.</li>
        </ul>
        <div class="box" style="margin-top:16px">
          <h3>Un día en un monasterio argentino</h3>
          <p>Según una crónica de 2026 sobre la abadía de Los Toldos (Buenos Aires): los monjes se levantan a las 5:20 con las campanas, rezan, leen la Biblia hasta la misa de las 8, trabajan, almuerzan en silencio a las 12:30 escuchando una lectura, por la tarde estudian o trabajan y a las 19 vuelven a rezar con salmos y cantos. ${MK.v}</p>
        </div>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <p>La primera misión del monasterio es <strong>ser lugar de Dios</strong>: un espacio donde se reza todos los días, pase lo que pase afuera. De ahí brotan los demás frutos:</p>
        <ul class="dots">
          <li><strong>Hospitalidad:</strong> retiros, jornadas de oración y acompañamiento espiritual en las hospederías. Es la puerta más abierta para un joven.</li>
          <li><strong>Cultura:</strong> durante la Edad Media los monasterios copiaron y conservaron gran parte de los textos antiguos, cristianos y clásicos, que hoy conocemos. También fueron escuelas, centros agrícolas y de arte.</li>
          <li><strong>Educación:</strong> hay monasterios con colegios. El Niño Dios, en Victoria, tiene una escuela de formación docente y enseña a cientos de alumnos. ${MK.v}</li>
          <li><strong>Trabajo y productos:</strong> los monjes viven de su trabajo: granja, huerta, dulces, artesanías, libros, imprenta.</li>
          <li><strong>Misión:</strong> desde el siglo VI, monjes benedictinos evangelizaron Inglaterra, Alemania y el norte de Europa. Hoy existen congregaciones benedictinas misioneras.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p>El [[habito|hábito]] benedictino es <strong>negro</strong>. Por eso en la Edad Media se los llamaba “monjes negros”, a diferencia de los cistercienses, de hábito blanco.</p>
        <ul class="dots">
          <li><strong>Túnica negra</strong> con cinturón.</li>
          <li><strong>[[escapulario|Escapulario]] negro</strong> con capucha.</li>
          <li><strong>[[cogulla|Cogulla]]:</strong> una prenda amplia, de grandes mangas, que los monjes de votos solemnes usan en el coro.</li>
          <li><strong>Las monjas</strong> usan túnica y escapulario negros, toca blanca y velo negro.</li>
        </ul>
        <p class="note">Algunas congregaciones usan otros colores (por ejemplo, blanco en climas cálidos o en ciertas ramas). Los detalles varían de un monasterio a otro.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>La familia benedictina dio a la Iglesia papas, misioneros, místicas y tres [[doctor|Doctores de la Iglesia]] en esta lista:</p>
        <div class="saints">
          <div class="saint"><b>San Benito de Nursia</b><span class="d">c. 480 – c. 547 · Italia</span><p>Padre de los monjes de Occidente. Escribió la Regla.</p><div class="tags"><span>Patrono de Europa</span></div></div>
          <div class="saint"><b>Santa Escolástica</b><span class="d">c. 480 – c. 547 · Italia</span><p>Hermana de Benito, consagrada a Dios desde joven. Madre de las monjas benedictinas.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>San Gregorio Magno</b><span class="d">c. 540 – 604 · Roma</span><p>Monje que llegó a papa. Escribió la vida de San Benito y envió misioneros a Inglaterra.</p><div class="tags"><span>Doctor</span><span>Papa</span></div></div>
          <div class="saint"><b>San Agustín de Canterbury</b><span class="d">† c. 604 · Inglaterra</span><p>Monje enviado por Gregorio Magno. Primer arzobispo de Canterbury.</p><div class="tags"><span>Misionero</span></div></div>
          <div class="saint"><b>San Beda el Venerable</b><span class="d">c. 673 – 735 · Inglaterra</span><p>Monje, historiador y maestro. Su historia de la Iglesia inglesa sigue siendo una fuente clave.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>San Bonifacio</b><span class="d">c. 675 – 754 · Alemania</span><p>Monje inglés, apóstol de Alemania. Murió mártir en Frisia.</p><div class="tags"><span>Mártir</span><span>Misionero</span></div></div>
          <div class="saint"><b>San Anselmo de Canterbury</b><span class="d">1033 – 1109 · Italia e Inglaterra</span><p>Monje, abad y arzobispo. Filósofo de la fe que busca entender.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>Santa Hildegarda de Bingen</b><span class="d">1098 – 1179 · Alemania</span><p>Abadesa, mística, compositora y estudiosa de la naturaleza. Declarada Doctora en 2012.</p><div class="tags"><span>Doctora</span><span>Música</span></div></div>
          <div class="saint"><b>Santa Gertrudis la Grande</b><span class="d">1256 – c. 1302 · Alemania</span><p>Monja de Helfta, mística del Corazón de Jesús.</p><div class="tags"><span>Mística</span></div></div>
          <div class="saint"><b>Santa Francisca Romana</b><span class="d">1384 – 1440 · Roma</span><p>Esposa y madre que vivió el espíritu benedictino como [[oblato|oblata]]. Patrona de los oblatos.</p><div class="tags"><span>Laica</span><span>Oblata</span></div></div>
          <div class="saint"><b>Beato Columba Marmion</b><span class="d">1858 – 1923 · Irlanda y Bélgica</span><p>Abad de Maredsous. Sus libros sobre Cristo como centro de la vida cristiana fueron muy leídos. Beatificado en 2000.</p><div class="tags"><span>Abad</span></div></div>
        </div>
        <p class="note">Fechas y títulos de conocimiento general; no los verifiqué uno por uno hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como monje o monja</h3><p>Se ingresa a un monasterio concreto, no a la orden en general, porque por la [[estabilidad|estabilidad]] uno se compromete con esa comunidad para siempre.</p></div>
          <div class="box"><h3>Como oblato u oblata</h3><p>Laicos casados o solteros que se vinculan a un monasterio y prometen vivir la Regla en su vida diaria. Ver [[oblato|oblato]].</p></div>
          <div class="box"><h3>Como huésped</h3><p>Cualquiera puede pedir hacer un retiro en una [[hospederia|hospedería]]: rezar con los monjes, compartir silencio y trabajo. Es una gran experiencia para un grupo de jóvenes.</p></div>
          <div class="box"><h3>Con la Regla en casa</h3><p>La Regla es breve y se puede leer en pocas horas. Muchos laicos la usan para ordenar su propia vida de oración y trabajo.</p></div>
        </div>
        <h3 style="font-size:26px;margin-top:24px">El camino hacia la vida monástica</h3>
        <ol class="steps">
          <li><div><strong>Conocer el monasterio.</strong> Visitas, retiros en la hospedería y diálogo con el abad o el maestro de novicios.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong> Unos meses viviendo con la comunidad.</div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Al menos un año. La Regla pide leerle al novicio la Regla entera varias veces, para que sepa a qué se compromete.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]].</strong> Al menos tres años.</div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]].</strong> Obediencia, estabilidad y conversión de costumbres para toda la vida.</div></li>
        </ol>
        <p class="note">Los plazos concretos y los requisitos los fija cada monasterio; hay que consultarlos directamente.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <p>Los monasterios benedictinos argentinos forman parte, junto con otros de la región, de la <strong>Congregación Benedictina del Cono Sur</strong>, creada en 1976. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Monasterios de monjes</h3><p>Abadía del Niño Dios (Victoria, Entre Ríos, 1899) · Abadía de Cristo Rey (El Siambón, Tucumán) · Abadía Santa María de Los Toldos (Buenos Aires, 1948) · Abadía de San Benito (Luján) · Padres Benedictinos (Buenos Aires) · Monasterio Nuestra Señora de la Paz (San Agustín, Córdoba).</p></div>
          <div class="box"><h3>Monasterios de monjas</h3><p>Abadía de Santa Escolástica (Victoria, Buenos Aires, 1941) · Abadía Gaudium Mariae (San Antonio de Arredondo, Córdoba, 1979) · Abadía Nuestra Señora de la Esperanza (Rafaela, Santa Fe) · Monasterio Nuestra Señora del Paraná (Aldea María Luisa, Entre Ríos, 1987) · Monasterio Nuestra Señora de la Fidelidad (San Luis).</p></div>
        </div>
        <p class="note">Lista tomada de la descripción de la Congregación del Cono Sur. Algunos monasterios pudieron cerrar o mudarse; antes de visitar uno, confirmá que siga activo.</p>
        <div class="place">
          <span class="eyebrow">Mendoza</span>
          <h3>Sin monasterio benedictino confirmado</h3>
          <p style="margin-top:8px">No encontré ningún monasterio benedictino activo en Mendoza. ${MK.p} El más cercano en esa lista sería el de monjas de <strong>Nuestra Señora de la Fidelidad, en San Luis</strong>, pero no pude confirmar su situación actual. También puede haber oblatos benedictinos en Mendoza vinculados a monasterios de otras provincias; no encontré datos publicados.</p>
        </div>` }
    ],
    compartir:{
      frases:[
        ["Escucha, hijo, los preceptos del maestro, e inclina el oído de tu corazón.","Regla de San Benito, Prólogo 1"],
        ["No anteponer nada al amor de Cristo.","Regla de San Benito 4,21"],
        ["Todos los huéspedes que llegan sean recibidos como Cristo.","Regla de San Benito 53,1"],
        ["La ociosidad es enemiga del alma.","Regla de San Benito 48,1"]
      ],
      anecdotas:[
        ["La copa que se rompió","Unos monjes que habían elegido a Benito como abad no soportaron su exigencia e intentaron envenenarlo. Cuando él bendijo la copa, se partió. Benito se levantó, los perdonó y se fue. Lo cuenta San Gregorio en los <em>Diálogos</em>. ${MK.t}"],
        ["Pudo más la que amó más","En su último encuentro, Escolástica le pidió a Benito que se quedara a conversar de Dios toda la noche. Él se negó, porque la Regla le pedía volver al monasterio. Ella rezó, y se desató una tormenta tan fuerte que él no pudo irse. San Gregorio comenta que pudo más ella porque amó más. Tres días después ella murió. ${MK.t}"],
        ["Un monasterio argentino que funda otros","El Niño Dios, primer monasterio benedictino de Hispanoamérica, fundó a su vez la abadía de Cristo Rey en Tucumán y un monasterio en Uruguay. ${MK.v}"],
        ["Del monasterio al Vaticano","En 2023 el Papa pidió que seis monjas benedictinas argentinas vivieran en el monasterio donde había pasado sus últimos años Benedicto XVI, para rezar por la Iglesia. ${MK.v}"]
      ],
      preguntas:[
        "La Regla empieza con la palabra “Escucha”. ¿A quién o a qué te cuesta más escuchar con el corazón?",
        "Benito propone un ritmo de oración, trabajo y descanso. ¿Cómo está repartido tu día? ¿Hay lugar para Dios en él?",
        "Recibir a todos como a Cristo: ¿a quién te cuesta más recibir así en tu casa, en tu grupo o en la facultad?",
        "La estabilidad es quedarse y no escapar cuando las cosas se ponen difíciles. ¿En qué lugar o relación Dios te pide hoy estabilidad?"
      ],
      dinamica:"Una mini lectio divina de veinte minutos: leer dos veces en voz alta un pasaje breve del Evangelio, dejar cinco minutos de silencio, que cada uno repita en voz alta una sola palabra o frase que le quedó resonando, y terminar con un salmo rezado a dos coros, como en un monasterio."
    },
    fuentes:[
      ["Wikipedia — Congregación Benedictina del Cono Sur","https://wiki.riteme.site/wiki/Cono-Sur_Congregation"],
      ["Wikipedia — Abadía del Niño Dios","https://en.wikipedia.org/wiki/Abad%C3%ADa_del_Ni%C3%B1o_Dios"],
      ["La Nación (2026) — 24 horas en el monasterio de Los Toldos","https://www.lanacion.com.ar/revista-lugares/24-horas-en-el-monasterio-como-se-vive-entre-monjes-de-semiclausura-salmos-al-amanecer-y-comida-nid19062026/"],
      ["La Nación (2023) — Monjas de Santa Escolástica al monasterio Mater Ecclesiae","https://www.lanacion.com.ar/el-mundo/seis-monjas-argentinas-de-una-famosa-abadia-de-victoria-se-mudaran-al-monasterio-en-el-que-vivio-y-nid13112023/"]
    ]
  },

  /* ---------------------------------------------------- CARTUJOS */
  cartujos: {
    familia:"monacal",
    nombre:"Cartujos",
    latin:"Orden de los Cartujos · Ordo Cartusiensis",
    resumen:"Monjes y monjas que viven casi todo el día solos, en silencio, en una pequeña casa dentro del monasterio, y se juntan para rezar de noche y de día. No predican, no tienen parroquias ni colegios. Su único trabajo es estar con Dios, por todos.",
    tarjeta:"Ermitaños en comunidad. Silencio, soledad y oración nocturna. Hay una cartuja en Córdoba.",
    lema:["Stat crux dum volvitur orbis","“Mientras el mundo gira, la cruz permanece firme.” Lema de la Orden."],
    habito:[["Blanco","oklch(0.97 0.005 85)"],["Crudo (lana)","oklch(0.9 0.02 85)"],["Negro (velo)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","O.Cart."],
      ["Fundador","San Bruno de Colonia (c. 1030 – 1101)"],
      ["Fundación","1084, en el macizo de la Chartreuse (Francia)"],
      ["Casa madre","La Gran Cartuja, cerca de Grenoble"],
      ["Tamaño","21 casas y 272 monjes a fines de 2024"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Su nombre oficial es <strong>Orden de los Cartujos</strong> (O.Cart.). Viene de la <strong>Chartreuse</strong>, el macizo de montañas cerca de Grenoble, en Francia, donde se fundó la primera comunidad. Por eso sus monasterios se llaman <strong>cartujas</strong>.</p>
        <p>Es una de las órdenes más pequeñas y más silenciosas de la Iglesia. A fines de 2024 tenía 21 casas de monjes con 272 miembros, de los cuales 131 eran sacerdotes. ${MK.v} Existen además unas pocas cartujas de monjas, que no están incluidas en esa cifra.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Bruno</strong> nació en Colonia (Alemania) hacia el año 1030. Fue un profesor brillante en la escuela de la catedral de Reims, en Francia. Ya maduro, dejó una carrera prestigiosa para buscar a Dios en soledad.</p>
        <ul class="dots">
          <li><strong>1084:</strong> con seis compañeros se instala en la Chartreuse, con la ayuda de San Hugo, obispo de Grenoble. ${MK.v}</li>
          <li><strong>1090:</strong> el papa Urbano II, que había sido alumno suyo, lo llama a Roma como consejero. Bruno obedece, pero pide volver a la soledad y funda una nueva cartuja en Calabria (sur de Italia), donde muere en 1101.</li>
          <li><strong>Hacia 1127:</strong> Guigo, quinto prior de la Gran Cartuja, pone por escrito las costumbres de la orden. Los cartujos no siguen una regla antigua, sino estos “Estatutos” propios.</li>
          <li><strong>Hacia 1145:</strong> las monjas de Prébayon, en Provenza, se unen a la orden: son las primeras cartujas. ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1084</span><div class="ev"><b>La Chartreuse</b>Bruno y seis compañeros construyen celdas de madera en un valle alto y aislado de los Alpes.</div></li>
          <li><span class="y">1101</span><div class="ev"><b>Muere San Bruno</b>En la cartuja de Calabria, hoy Serra San Bruno.</div></li>
          <li><span class="y">≈1127</span><div class="ev"><b>Las Costumbres de Guigo</b>Primera legislación cartujana escrita.</div></li>
          <li><span class="y">≈1145</span><div class="ev"><b>Las primeras monjas</b>La comunidad de Prébayon adopta la vida cartujana.</div></li>
          <li><span class="y">1535</span><div class="ev"><b>Mártires de Londres</b>Los monjes de la cartuja de Londres se niegan a reconocer a Enrique VIII como cabeza de la Iglesia y son ejecutados.</div></li>
          <li><span class="y">1903</span><div class="ev"><b>Expulsados de su casa</b>Las leyes anticlericales francesas obligan a los monjes a dejar la Gran Cartuja, como ya había pasado en la Revolución. Vuelven en 1940.</div></li>
          <li><span class="y">1998</span><div class="ev"><b>Llegan a la Argentina</b>El 15 de octubre se habita la primera parte de la Cartuja de San José, en Deán Funes, Córdoba.</div></li>
          <li><span class="y">2004</span><div class="ev"><b>Iglesia consagrada</b>El 19 de marzo se completa el edificio y se consagra la iglesia de la cartuja cordobesa.</div></li>
        </ol>
        <p class="note">Las fechas de 1084, 1145, 1998 y 2004 están verificadas. Las otras son de conocimiento general en la historia de la Orden.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] cartujo es <strong>buscar solo a Dios, en la soledad y el silencio</strong>, por amor a Él y a toda la humanidad. Une dos formas de vida que parecen opuestas:</p>
        <div class="cols">
          <div class="box"><h3>Soledad</h3><p>Como [[ermitano|ermitaños]], cada monje vive la mayor parte del día solo, en su [[celda|celda]]: una pequeña casa con oratorio, cuarto de estudio, taller y un jardincito.</p></div>
          <div class="box"><h3>Comunidad</h3><p>Al mismo tiempo, forman una familia: se reúnen en la iglesia para la misa y la oración, y comparten algunas comidas y un paseo semanal.</p></div>
        </div>
        <p style="margin-top:14px">No hacen apostolado exterior: no tienen parroquias, colegios ni predicación. Su servicio a la Iglesia es esconderse con Cristo y rezar por todos. Se suele decir que la Cartuja nunca necesitó reformarse porque nunca se deformó. ${MK.t}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La [[espiritualidad|espiritualidad]] cartujana es una de las más radicales de la Iglesia: es la del desierto, como Juan el Bautista o Jesús en sus cuarenta días.</p>
        <ul class="dots">
          <li><strong>La noche:</strong> la comunidad se levanta cerca de la medianoche para rezar en la iglesia el oficio nocturno, que dura varias horas. Después vuelven a dormir. ${MK.v}</li>
          <li><strong>La celda:</strong> allí rezan las demás horas del oficio, estudian, trabajan, leen y comen los días de semana. ${MK.v}</li>
          <li><strong>El silencio:</strong> no como vacío, sino como espacio para escuchar a Dios.</li>
          <li><strong>La sencillez:</strong> liturgia propia, muy austera; ayuno y abstinencia de carne de por vida.</li>
          <li><strong>El domingo:</strong> comida en común y un rato de conversación fraterna. Una vez por semana hacen un largo paseo juntos por el campo, en el que sí conversan. ${MK.v}</li>
        </ul>
        <p class="note">La abstinencia perpetua de carne y la duración exacta del oficio nocturno son de conocimiento general; no los verifiqué con los Estatutos actuales.</p>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <p>La misión de los cartujos es <strong>la oración y la intercesión ocultas</strong>. No buscan hacerse conocer: casi no reciben visitas ni ofrecen retiros. Creen que una vida entregada solo a Dios es fecunda para toda la Iglesia, aunque nadie la vea.</p>
        <ul class="dots">
          <li><strong>Padres:</strong> monjes sacerdotes que viven la mayor parte del tiempo en la celda.</li>
          <li><strong>[[hermano-converso|Hermanos]]:</strong> pasan más horas en el trabajo manual (cocina, carpintería, campo), que se convierte en su oración.</li>
          <li><strong>Sustento:</strong> viven de su trabajo. La Gran Cartuja es famosa por el licor Chartreuse, que elaboran con una receta de hierbas guardada por los monjes. ${MK.g}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p>El [[habito|hábito]] cartujo es <strong>blanco</strong>, de lana sencilla.</p>
        <ul class="dots">
          <li><strong>Túnica blanca</strong> y cinturón.</li>
          <li><strong>[[cogulla|Cogulla]] blanca</strong> con capucha, cuyos costados están unidos por unas bandas de tela. Es el signo más característico.</li>
          <li><strong>Los hermanos</strong> tienen variantes propias del hábito.</li>
          <li><strong>Las monjas</strong> visten de blanco con velo negro. Conservan un antiguo rito de consagración de vírgenes, en el que reciben signos como la estola, algo único en la Iglesia.</li>
        </ul>
        <p class="note">Los detalles del hábito de los hermanos y del rito de las monjas son de conocimiento general; no los verifiqué con fuentes de la Orden.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>Los cartujos tienen pocos santos canonizados. Se suele explicar que la Orden no promueve causas de canonización de sus monjes, coherente con su vida escondida. ${MK.t}</p>
        <div class="saints">
          <div class="saint"><b>San Bruno</b><span class="d">c. 1030 – 1101 · Alemania, Francia, Italia</span><p>Fundador. Profesor que dejó todo por la soledad con Dios.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Hugo de Grenoble</b><span class="d">1053 – 1132 · Francia</span><p>Obispo que recibió a Bruno y sus compañeros. No era cartujo, pero fue su gran protector.</p><div class="tags"><span>Obispo</span></div></div>
          <div class="saint"><b>San Hugo de Lincoln</b><span class="d">c. 1140 – 1200 · Francia e Inglaterra</span><p>Cartujo que llegó a obispo de Lincoln. Defendió a los pobres y a los judíos perseguidos.</p><div class="tags"><span>Obispo</span></div></div>
          <div class="saint"><b>San Juan Houghton y compañeros</b><span class="d">† 1535 · Inglaterra</span><p>Prior de la cartuja de Londres, martirizado con otros monjes por fidelidad al Papa. Canonizado en 1970.</p><div class="tags"><span>Mártires</span></div></div>
          <div class="saint"><b>Santa Rosalina de Villeneuve</b><span class="d">1263 – 1329 · Francia</span><p>Monja y priora cartuja, venerada por su caridad y vida de oración.</p><div class="tags"><span>Monja</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general. El título exacto de Santa Rosalina (santa o beata según la fuente) conviene verificarlo antes de usarlo en público.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <p>La vida cartujana es para muy pocos y requiere un discernimiento largo y cuidadoso, con buena salud física y psicológica.</p>
        <ol class="steps">
          <li><div><strong>Contacto y visitas.</strong> Se escribe a la cartuja. Suele haber estancias de experiencia de algunas semanas viviendo como los monjes.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong> Varios meses.</div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> En general, dos años.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]].</strong> Varios años antes del compromiso definitivo.</div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]].</strong> Entre la entrada y la profesión definitiva suelen pasar unos siete años.</div></li>
        </ol>
        <p class="note">${MK.p} Las duraciones de cada etapa son aproximadas y de conocimiento general; no pude verificarlas con fuentes de la Orden.</p>
        <div class="cols" style="margin-top:16px">
          <div class="box"><h3>¿Y los laicos?</h3><p>Los cartujos no tienen orden tercera ni ofrecen retiros. Un laico puede unirse a su espíritu rezando en silencio, leyendo sus escritos y buscando momentos de soledad con Dios.</p></div>
          <div class="box"><h3>Para conocerlos</h3><p>El documental <em>El gran silencio</em> (2005), de Philip Gröning, muestra la vida diaria en la Gran Cartuja casi sin palabras. Es una gran puerta de entrada para un grupo.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Córdoba · Deán Funes</span>
          <h3>Cartuja de San José</h3>
          <p style="margin-top:8px">El proyecto empezó en 1997 con el apoyo del Capítulo General de los Cartujos y de la Conferencia Episcopal Argentina. La fundaron cuatro monjes enviados desde la Gran Cartuja. Una primera parte se habitó el 15 de octubre de 1998 y la iglesia se consagró el 19 de marzo de 2004. Está en un lugar apartado llamado Campo de la Trinidad, cerca de Deán Funes. Viven allí más de una docena de monjes. ${MK.v}</p>
          <p class="note">Como toda cartuja, no está pensada para visitas ni retiros. Si alguien siente este llamado, el camino es escribirles.</p>
        </div>
        <div class="place">
          <span class="eyebrow">Mendoza</span>
          <h3>Sin presencia cartuja</h3>
          <p style="margin-top:8px">No hay cartujas en Mendoza. La Cartuja de San José, en Córdoba, es la única que encontré en el país.</p>
        </div>` }
    ],
    compartir:{
      frases:[
        ["Mientras el mundo gira, la cruz permanece firme.","Lema de la Orden de los Cartujos"],
        ["Quédate en silencio delante del Señor y espera en Él.","Salmo 37,7 (traducción libre)"]
      ],
      anecdotas:[
        ["El sueño de las siete estrellas","Según la tradición, la noche antes de que llegaran Bruno y sus seis compañeros, el obispo Hugo de Grenoble soñó con siete estrellas que lo guiaban hacia un lugar desierto en las montañas. Al día siguiente, cuando se presentaron ante él, entendió el sueño y los llevó a la Chartreuse. ${MK.t}"],
        ["El profesor que dejó todo","Bruno era un maestro famoso, con alumnos que llegaron a ser obispos y hasta un papa. Le ofrecieron un arzobispado y lo rechazó. Prefirió la soledad con Dios a una carrera brillante. ${MK.g}"],
        ["Dieciséis años de espera","El director de <em>El gran silencio</em> pidió permiso para filmar en la Gran Cartuja en 1984. Los monjes le respondieron que todavía no estaban listos. Recién lo llamaron años después, a fines de los noventa, y filmó solo, sin luces artificiales ni música agregada. ${MK.g}"],
        ["El cisne de San Hugo","San Hugo de Lincoln tenía un cisne salvaje que lo seguía a todas partes y no dejaba que nadie más se le acercara. Por eso en las imágenes se lo representa con un cisne. ${MK.t}"]
      ],
      preguntas:[
        "¿Cuánto tiempo seguido pasás en silencio en un día común? ¿Qué te pasa cuando no hay ningún ruido?",
        "Los cartujos creen que rezar escondidos sirve a todo el mundo. ¿Creés que la oración que nadie ve tiene valor? ¿Por qué?",
        "“Mientras el mundo gira, la cruz permanece firme.” ¿Qué cosas en tu vida cambian todo el tiempo? ¿Qué es lo firme?",
        "Bruno dejó una carrera brillante para buscar a Dios. ¿Qué lugar ocupa Dios en tus planes de futuro?"
      ],
      dinamica:"Quince minutos de “celda”: cada uno busca un rincón solo, sin celular, con una Biblia abierta en el Salmo 63. Al volver, nadie comenta nada durante un minuto; después cada uno dice cómo vivió el silencio. Si el grupo tiene tiempo, se puede ver un fragmento de <em>El gran silencio</em>."
    },
    fuentes:[
      ["GCatholic — Orden de los Cartujos (datos al 31/12/2024)","https://gcatholic.org/orders/156"],
      ["Monjas Cartujas — Una vida y un mensaje","https://chartreux.org/moniales/wp-content/uploads/2022/05/UNA-VIDA-Y-UN-MENSAJE_ESP-1.pdf"],
      ["Wikipedia — Cartuja de San José (Deán Funes)","https://en.wikipedia.org/wiki/San_Jos%C3%A9_Charterhouse"],
      ["Catholic.net — Orden de la Cartuja","https://es.catholic.net/op/articulos/5210/cat/168/orden-de-la-cartuja.html"]
    ]
  },

  /* ---------------------------------------------------- CISTERCIENSES */
  cistercienses: {
    familia:"monacal",
    nombre:"Cistercienses y Trapenses",
    latin:"Orden Cisterciense · Orden Cisterciense de la Estricta Observancia (OCSO)",
    resumen:"En 1098 un grupo de monjes benedictinos dejó un monasterio rico para volver a vivir la Regla de San Benito con pobreza, silencio y trabajo manual. Con San Bernardo, la reforma se extendió por toda Europa. Siglos después nació una reforma todavía más austera, la de La Trapa: los trapenses. En la Argentina hay una abadía de monjes trapenses en Azul y una de monjas en Hinojo.",
    tarjeta:"Silencio, trabajo manual y sencillez bajo la Regla de San Benito. San Bernardo. Trapenses en Azul e Hinojo.",
    lema:["Ora et labora","Comparten con los benedictinos la Regla de San Benito y su lema."],
    habito:[["Blanco (túnica y cogulla)","oklch(0.97 0.005 85)"],["Negro (escapulario)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","O.Cist. y O.C.S.O."],
      ["Fundadores","Santos Roberto, Alberico y Esteban Harding"],
      ["Fundación","1098, Cîteaux (Francia)"],
      ["Figura central","San Bernardo de Claraval"],
      ["En la Argentina","Azul (monjes, 1958) e Hinojo (monjas, 1973)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre viene de <strong>Cîteaux</strong> (en latín, <em>Cistercium</em>), el lugar de Borgoña donde se fundó el “Nuevo Monasterio”. Hoy existen dos órdenes principales:</p>
        <div class="cols">
          <div class="box"><h3>Orden Cisterciense</h3><p><strong>O.Cist.</strong> La rama de la “común observancia”, con más variedad de estilos y más apostolado exterior.</p></div>
          <div class="box"><h3>Trapenses</h3><p><strong>O.C.S.O.</strong>, Orden Cisterciense de la Estricta Observancia. Nace de la reforma de la abadía de La Trapa y es más austera. Ver [[trapense|trapense]].</p></div>
        </div>
        <p style="margin-top:14px">Ambas pertenecen a la gran familia monástica que sigue la Regla de San Benito.</p>` },

      { id:"fundador", titulo:"Fundadores y año", estado:"g", html:`
        <ul class="dots">
          <li><strong>1098:</strong> San Roberto, abad de Molesmes, sale con unos veinte monjes para fundar un “Nuevo Monasterio” en Cîteaux.</li>
          <li><strong>San Alberico</strong> y luego <strong>San Esteban Harding</strong>, un monje inglés, organizan la vida del nuevo monasterio. Esteban escribe la <em>Carta de Caridad</em>, que une a los monasterios como una familia.</li>
          <li><strong>1113:</strong> llega a Cîteaux un joven noble, <strong>Bernardo</strong>, con unos treinta parientes y amigos. En 1115 funda Claraval y se convierte en el alma de la orden.</li>
          <li><strong>1664:</strong> el abad Armand de Rancé reforma la abadía de La Trapa, origen de los trapenses.</li>
          <li><strong>1892:</strong> se constituye la Orden Cisterciense de la Estricta Observancia.</li>
        </ul>
        <p class="note">Fechas de conocimiento general; no las verifiqué hoy con una fuente puntual.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1098</span><div class="ev"><b>Cîteaux</b>Nace el Nuevo Monasterio.</div></li>
          <li><span class="y">1115</span><div class="ev"><b>Claraval</b>Bernardo funda la abadía de Claraval.</div></li>
          <li><span class="y">1153</span><div class="ev"><b>Muere San Bernardo</b>La orden ya tiene más de 300 abadías.</div></li>
          <li><span class="y">s. XII</span><div class="ev"><b>Agricultura y arquitectura</b>Los cistercienses transforman el campo europeo con nuevas técnicas y crean un estilo arquitectónico sobrio y luminoso.</div></li>
          <li><span class="y">1664</span><div class="ev"><b>La Trapa</b>Reforma de Rancé.</div></li>
          <li><span class="y">1892</span><div class="ev"><b>Trapenses como orden</b>Nace la OCSO.</div></li>
          <li><span class="y">1958</span><div class="ev"><b>Azul</b>Monjes de la abadía de Spencer (Estados Unidos) fundan Nuestra Señora de los Ángeles, en Azul, provincia de Buenos Aires. Es abadía desde 1984. ${MK.v}</div></li>
          <li><span class="y">1973</span><div class="ev"><b>Hinojo</b>Monjas de Vitorchiano (Italia) fundan el Monasterio de la Madre de Cristo, en Hinojo. Es abadía desde 1989. ${MK.v}</div></li>
          <li><span class="y">1996</span><div class="ev"><b>Tibhirine</b>Siete monjes trapenses son secuestrados y asesinados en Argelia. Fueron beatificados en 2018.</div></li>
        </ol>
        <p class="note">Los datos de Azul e Hinojo están verificados; los demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma cisterciense es <strong>vivir la Regla de San Benito con sencillez y autenticidad</strong>, buscando a Dios en el silencio, la oración común, el trabajo manual y el amor fraterno.</p>
        <div class="cols">
          <div class="box"><h3>Sencillez</h3><p>Iglesias sin adornos, liturgia sobria, vida pobre.</p></div>
          <div class="box"><h3>Trabajo manual</h3><p>Los monjes viven del trabajo de sus manos: campo, ganadería, artesanías.</p></div>
          <div class="box"><h3>Silencio</h3><p>Especialmente cuidado por los trapenses.</p></div>
          <div class="box"><h3>Escuela de caridad</h3><p>El monasterio es una “escuela de caridad” donde se aprende a amar a Dios y a los hermanos.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>El amor de Dios:</strong> San Bernardo escribió que la medida de amar a Dios es amarlo sin medida.</li>
          <li><strong>María:</strong> todos los monasterios cistercienses están dedicados a la Virgen.</li>
          <li><strong>La humanidad de Cristo</strong> y el Cantar de los Cantares, que Bernardo comentó en 86 sermones.</li>
          <li><strong>[[lectio|Lectio divina]]</strong> y [[liturgia-horas|Liturgia de las Horas]], comenzando de madrugada.</li>
          <li><strong>[[estabilidad|Estabilidad]]</strong> en un monasterio para toda la vida.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Oración por la Iglesia y el mundo</strong>, su primera misión.</li>
          <li><strong>[[hospederia|Hospedería]]:</strong> en Azul, la hospedería es una de sus tres fuentes de ingreso. ${MK.v}</li>
          <li><strong>Trabajo:</strong> en Azul, agricultura de granos y ganadería, con una pequeña tienda. En Hinojo, las monjas hacen y venden cuadros, chocolates, rosarios e íconos. ${MK.v}</li>
          <li><strong>Productos famosos</strong> en el mundo: cervezas trapenses, quesos, licores.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica blanca</strong> (de lana sin teñir).</li>
          <li><strong>Escapulario negro</strong> con capucha y cinturón de cuero.</li>
          <li><strong>[[cogulla|Cogulla]] blanca</strong> para el coro.</li>
          <li><strong>Las monjas</strong> visten túnica blanca, escapulario negro y velo negro.</li>
        </ul>
        <p>Por el contraste con los benedictinos, de negro, en la Edad Media los cistercienses eran los “monjes blancos”.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Bernardo de Claraval</b><span class="d">1090 – 1153 · Francia</span><p>Abad, predicador, místico. El más influyente monje de su siglo.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>San Esteban Harding</b><span class="d">c. 1060 – 1134 · Inglaterra y Francia</span><p>Abad de Cîteaux, autor de la Carta de Caridad.</p><div class="tags"><span>Cofundador</span></div></div>
          <div class="saint"><b>San Elredo de Rievaulx</b><span class="d">1110 – 1167 · Inglaterra</span><p>Abad que escribió “La amistad espiritual”.</p><div class="tags"><span>Amistad</span></div></div>
          <div class="saint"><b>Santa Lutgarda</b><span class="d">1182 – 1246 · Bélgica</span><p>Monja cisterciense mística, devota del Sagrado Corazón.</p><div class="tags"><span>Mística</span></div></div>
          <div class="saint"><b>San Rafael Arnáiz</b><span class="d">1911 – 1938 · España</span><p>Joven estudiante de arquitectura que entró a la trapa de San Isidro de Dueñas. Enfermo de diabetes, entró y salió del monasterio varias veces. Murió a los 27 años. Canonizado en 2009.</p><div class="tags"><span>Joven</span><span>Trapense</span></div></div>
          <div class="saint"><b>Beatos mártires de Tibhirine</b><span class="d">† 1996 · Argelia</span><p>Siete monjes trapenses que se quedaron junto a la población musulmana en plena guerra. Beatificados en 2018.</p><div class="tags"><span>Mártires</span></div></div>
          <div class="saint"><b>Thomas Merton</b><span class="d">1915 – 1968 · Estados Unidos</span><p>Monje trapense y escritor. Su autobiografía, <em>La montaña de los siete círculos</em>, atrajo a miles de vocaciones.</p><div class="tags"><span>Escritor</span></div></div>
        </div>
        <p class="note">Fechas y títulos de conocimiento general. Thomas Merton no es santo; lo incluyo por su influencia.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Hacer un retiro en la hospedería</strong> de Azul o visitar Hinojo.</div></li>
          <li><div><strong>Diálogo con el abad o la abadesa</strong> y estancias de experiencia.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]]</strong>, en general de dos años.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]]</strong> y luego [[votos-solemnes|profesión solemne]].</div></li>
        </ol>
        <p class="note">Los plazos los fija cada monasterio.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Buenos Aires · Azul</span>
          <h3>Abadía Nuestra Señora de los Ángeles</h3>
          <p style="margin-top:8px">Monjes trapenses. Fundada en 1958 desde la abadía de Spencer (Estados Unidos); priorato autónomo en 1974 y abadía en 1984. Viven de la agricultura, la ganadería, una pequeña tienda y la hospedería. ${MK.v}</p>
        </div>
        <div class="place">
          <span class="eyebrow">Buenos Aires · Hinojo (diócesis de Azul)</span>
          <h3>Monasterio de la Madre de Cristo</h3>
          <p style="margin-top:8px">Monjas trapenses. Fundado el 5 de febrero de 1973 desde el monasterio de Vitorchiano (Italia), con la ayuda de los monjes de Azul; abadía desde 1989. Producen y venden cuadros, chocolates, rosarios e íconos. ${MK.v}</p>
        </div>
        <p class="note">${MK.p} No encontré presencia cisterciense en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["La medida de amar a Dios es amarlo sin medida.","San Bernardo, Tratado sobre el amor de Dios"],
        ["Mira la estrella, invoca a María.","San Bernardo, Homilía sobre el “Missus est”"],
        ["Solo Dios.","San Rafael Arnáiz, lema que repetía"],
        ["Si un día me tocara ser víctima del terrorismo… quisiera que mi comunidad, mi Iglesia, mi familia, recordaran que mi vida estaba entregada a Dios y a este país.","Beato Christian de Chergé, prior de Tibhirine, en su testamento"]
      ],
      anecdotas:[
        ["Treinta que entran juntos","Bernardo no entró solo a Cîteaux: convenció a unos treinta parientes y amigos, incluidos varios hermanos suyos, de entrar con él. Se dice que las madres escondían a sus hijos cuando él predicaba. ${MK.g}"],
        ["El arquitecto que eligió la trapa","Rafael Arnáiz estudiaba arquitectura en Madrid. Entró a la trapa, tuvo que salir por la diabetes, volvió, salió y volvió otra vez, aceptando cada vez un lugar más humilde. Escribió que lo único que importa es Dios. ${MK.g}"],
        ["Monjes que crían toros","Los trapenses de Azul se dedican a la ganadería y se volvieron conocidos por la cría de toros Hereford. ${MK.g}"],
        ["Quedarse","En Tibhirine, los monjes discutieron durante meses si irse de Argelia por el peligro. Decidieron quedarse junto a sus vecinos musulmanes. La película <em>De dioses y hombres</em> (2010) cuenta su historia. ${MK.g}"]
      ],
      preguntas:[
        "Los cistercienses buscaron una vida más simple. ¿Qué te sobra a vos?",
        "Bernardo arrastró a sus amigos hacia Dios. ¿Tus amigos te acercan o te alejan de Él?",
        "Rafael Arnáiz aceptó una enfermedad que le cambió todos los planes. ¿Cómo reaccionás cuando tus planes se rompen?",
        "Los monjes de Tibhirine se quedaron por amor a sus vecinos. ¿Por quién estarías dispuesto a quedarte?"
      ],
      dinamica:"Ver juntos un fragmento de <em>De dioses y hombres</em> (la escena de la cena final) y después compartir en silencio, escribiendo en un papel una palabra que resuma lo que sintió cada uno. Se ponen todos los papeles en el centro y se lee una oración."
    },
    fuentes:[
      ["OCSO — Abadía Nuestra Señora de los Ángeles, Azul","https://www.ocso.org/es/sobre-nosotros/monasterios/azul/"],
      ["OCSO — Monasterio de la Madre de Cristo, Hinojo","https://www.ocso.org/es/sobre-nosotros/monasterios/hinojo/"],
      ["Bichos de Campo — Los monjes trapenses de Azul y los Hereford","https://bichosdecampo.com/el-hermoso-monasterio-que-cria-toros-en-azul-mientras-selecciona-los-mejores-hereford-para-los-monjes-trapenses-el-hermano-ruben-lacon-no-descuida-la-espiritualidad-y-hasta-llega-a-confesar-gente/"]
    ]
  },

  /* ---------------------------------------------------- CAMALDULENSES */
  camaldulenses: {
    familia:"monacal",
    nombre:"Camaldulenses",
    latin:"Congregación Camaldulense de la Orden de San Benito",
    resumen:"San Romualdo, un noble de Ravena que se hizo monje después de ver a su padre matar a un hombre en un duelo, buscó durante toda su vida unir dos formas de vida monástica: la del ermitaño solitario y la del monje en comunidad. Hacia 1012 fundó el Sacro Eremo de Camaldoli, en la Toscana. Hoy son muy pocos, pero su tradición del “triple bien” sigue viva.",
    tarjeta:"Ermitaños y monjes a la vez, bajo la Regla de San Benito. San Romualdo y el Sacro Eremo de Camaldoli.",
    lema:["Siéntate en tu celda como en el paraíso","Primer consejo de la Breve Regla de San Romualdo."],
    habito:[["Blanco","oklch(0.97 0.005 85)"]],
    datos:[
      ["Siglas","O.S.B. Cam."],
      ["Fundador","San Romualdo (c. 950 – 1027)"],
      ["Fundación","Camaldoli, hacia 1012"],
      ["Tamaño","98 miembros y 13 casas (fines de 2024)"],
      ["Fiesta","19 de junio, San Romualdo"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre viene de <strong>Camaldoli</strong>, el lugar de la Toscana donde San Romualdo fundó su ermita principal. Hoy existen dos institutos: ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Congregación Camaldulense</h3><p>O.S.B. Cam., parte de la Confederación Benedictina. A fines de 2024: 98 miembros (54 sacerdotes) y 13 casas. ${MK.v}</p></div>
          <div class="box"><h3>Ermitaños de Monte Corona</h3><p>Rama fundada por el beato Pablo Giustiniani (1476–1528), que vive solo en ermitas. ${MK.v}</p></div>
        </div>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>San Romualdo</strong> nació hacia el año 950 en Ravena, Italia, en una familia noble. Murió en 1027. ${MK.v}</p>
        <ul class="dots">
          <li><strong>Juventud:</strong> según su biógrafo, San Pedro Damián, después de que su padre matara a un pariente en un duelo, Romualdo hizo penitencia en un monasterio y allí se quedó.</li>
          <li><strong>Peregrino reformador:</strong> pasó la vida fundando y reformando ermitas y monasterios en Italia.</li>
          <li><strong>Hacia 1012:</strong> funda el Sacro Eremo de Camaldoli. ${MK.v}</li>
        </ul>
        <p class="note">La fuente consultada da como origen el año 980, por el inicio de su vida monástica; la fundación de Camaldoli se ubica hacia 1012.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">≈980</span><div class="ev"><b>Vida monástica</b>Romualdo entra al monasterio. ${MK.v}</div></li>
          <li><span class="y">≈1012</span><div class="ev"><b>Camaldoli</b>Fundación del Sacro Eremo. ${MK.v}</div></li>
          <li><span class="y">1027</span><div class="ev"><b>Muere Romualdo</b>${MK.v}</div></li>
          <li><span class="y">s. XV</span><div class="ev"><b>Fra Mauro</b>Un monje camaldulense de Murano dibuja uno de los mapas del mundo más famosos de la Edad Media. ${MK.v}</div></li>
          <li><span class="y">1520s</span><div class="ev"><b>Monte Corona</b>Pablo Giustiniani funda la rama de ermitaños.</div></li>
          <li><span class="y">1831</span><div class="ev"><b>Un papa camaldulense</b>Gregorio XVI, monje camaldulense, es elegido papa. ${MK.v}</div></li>
          <li><span class="y">1969</span><div class="ev"><b>Sudamérica</b>Los ermitaños de Monte Corona fundan en Antioquia, Colombia. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`
        <p>El carisma camaldulense une <strong>la soledad del ermitaño y la vida de comunidad</strong>. En la ermita, cada monje vive en su celda para orar en soledad, pero comparten la liturgia diaria y comidas en común. El monasterio está unos kilómetros más abajo. ${MK.v}</p>
        <div class="box" style="margin-top:12px"><h3>El “triple bien”</h3><p>La tradición camaldulense habla de tres bienes: la vida en comunidad (cenobio), la soledad (ermita) y el anuncio del Evangelio, incluso hasta el martirio. ${MK.g}</p></div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La [[celda|celda]]</strong> como paraíso.</li>
          <li><strong>Los Salmos</strong> como oración continua: Romualdo aconseja “seguir el camino de los Salmos”.</li>
          <li><strong>La Regla de San Benito</strong>, compartida con toda la familia benedictina.</li>
          <li><strong>La hospitalidad</strong> y, hoy, el diálogo ecuménico e interreligioso.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Oración y soledad</strong> como primera misión.</li>
          <li><strong>Hospedería</strong> y retiros en algunos monasterios.</li>
          <li><strong>Cultura:</strong> Camaldoli es sede de encuentros de reflexión desde el siglo XX.</li>
          <li><strong>Diálogo:</strong> el camaldulense Bede Griffiths vivió en un ashram cristiano en la India, en diálogo con el hinduismo.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"v", html:`<p>Los monjes de Camaldoli adoptaron el <strong>hábito blanco</strong>, que se volvió característico de esta tradición. ${MK.v}</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Romualdo</b><span class="d">c. 950 – 1027 · Italia</span><p>Fundador.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Bruno de Querfurt</b><span class="d">c. 974 – 1009 · Alemania</span><p>Discípulo de Romualdo, misionero y mártir en Prusia.</p><div class="tags"><span>Mártir</span></div></div>
          <div class="saint"><b>Santos Cinco Hermanos mártires</b><span class="d">† 1003 · Polonia</span><p>Discípulos de Romualdo martirizados en su ermita.</p><div class="tags"><span>Mártires</span></div></div>
          <div class="saint"><b>San Pedro Damián</b><span class="d">1007 – 1072 · Italia</span><p>Biógrafo de Romualdo, monje de tradición camaldulense, cardenal y gran reformador de la Iglesia.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>Beato Pablo Giustiniani</b><span class="d">1476 – 1528 · Venecia</span><p>Fundador de los ermitaños de Monte Corona.</p><div class="tags"><span>Reformador</span></div></div>
        </div>
        <p class="note">Salvo Giustiniani, fechas y títulos de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <p>Desde la Argentina, el camino sería contactar a los monasterios camaldulenses de Brasil o a los ermitaños de Monte Corona en Colombia o Venezuela. ${MK.v}</p>
        <ol class="steps">
          <li><div><strong>Contacto y estancias</strong> en la hospedería.</div></li>
          <li><div><strong>[[postulantado|Postulantado]]</strong> y [[noviciado|noviciado]].</div></li>
          <li><div><strong>Votos</strong> según la Regla de San Benito.</div></li>
        </ol>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <p>El registro de la Orden lista iglesias en Brasil, Italia y Estados Unidos, y no menciona la Argentina. Los ermitaños de Monte Corona tienen casas en Colombia y Venezuela. ${MK.v}</p>
        <p class="note">${MK.p} No encontré presencia camaldulense en la Argentina ni en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["Siéntate en tu celda como en el paraíso. Arroja de tu memoria todo el mundo.","San Romualdo, Breve Regla"],
        ["Vigila tus pensamientos como un buen pescador vigila los peces.","San Romualdo, Breve Regla"],
        ["Sigue el camino de los Salmos y no lo abandones.","San Romualdo, Breve Regla"]
      ],
      anecdotas:[
        ["El duelo del padre","Romualdo era un joven noble que vivía de fiestas y cacerías. Cuando su padre mató a un pariente en un duelo, se fue a un monasterio a hacer penitencia por él. Nunca volvió a la vida anterior. ${MK.g}"],
        ["El mapa de Fra Mauro","En el siglo XV, el camaldulense Fra Mauro dibujó en Murano un enorme mapa del mundo conocido, con África, Asia y Europa. Hoy se conserva en Venecia. ${MK.g}"]
      ],
      preguntas:[
        "¿Tenés un lugar que sea tu “celda”, donde puedas estar a solas con Dios?",
        "Romualdo compara los pensamientos con peces. ¿Qué pensamientos “dejás pasar” y cuáles conviene atrapar?",
        "¿Te cuesta más estar solo o estar con otros? ¿Qué te dice eso?",
        "¿Rezaste alguna vez con los Salmos? ¿Cuál te gustaría conocer?"
      ],
      dinamica:"Veinte minutos de “celda”: cada uno busca un rincón, con un Salmo elegido (por ejemplo, el 139). Lo lee despacio tres veces y anota una frase. Después, el grupo se reúne y cada uno la dice en voz alta, sin comentarla."
    },
    fuentes:[
      ["GCatholic — Congregación Camaldulense (datos 2024)","https://gcatholic.org/orders/075"],
      ["Wikipedia — Camaldolese","https://en.wikipedia.org/wiki/Camaldolese"]
    ]
  },

  /* ---------------------------------------------------- JERÓNIMOS */
  jeronimos: {
    familia:"monacal",
    nombre:"Jerónimos",
    latin:"Ordo Sancti Hieronymi · O.S.H.",
    resumen:"Orden monástica nacida en España en el siglo XIV entre ermitaños que imitaban a San Jerónimo. Llegó a tener monasterios tan famosos como El Escorial y Guadalupe. Casi desapareció en 1835 y hoy sobrevive en un solo monasterio de monjes, en Segovia, además de algunas comunidades de monjas.",
    tarjeta:"Oración, penitencia y alabanza solemne. Una orden española casi extinguida que sigue viva en Segovia.",
    lema:["Oración y penitencia","Así describen las fuentes el ideal de los primeros ermitaños."],
    habito:[["Blanco (túnica)","oklch(0.96 0.01 85)"],["Pardo (escapulario y manto)","oklch(0.45 0.05 60)"]],
    datos:[
      ["Nombre","Orden de San Jerónimo"],
      ["Bula de fundación","15 de octubre de 1373, Aviñón"],
      ["Primer monasterio","Lupiana (Guadalajara, España)"],
      ["Hoy (monjes)","1 monasterio y 5 miembros (fines de 2024)"],
      ["En la Argentina","No tienen presencia"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Se llaman <strong>Orden de San Jerónimo</strong> y firman con la sigla <strong>O.S.H.</strong> Se los conoce como <strong>jerónimos</strong>, por San Jerónimo, el traductor de la Biblia al latín. ${MK.v}</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p>No tienen un único fundador. En el siglo XIV, grupos de [[ermitano|ermitaños]] españoles inspirados en San Jerónimo buscaron una regla para vivir en oración y penitencia. ${MK.v}</p>
        <ul class="dots">
          <li><strong>15 de octubre de 1373:</strong> el Papa, que entonces residía en Aviñón, concede la bula de fundación. Se construye el primer monasterio en Lupiana. ${MK.v}</li>
        </ul>
        <p class="note">Las fuentes de conocimiento general suelen nombrar a Pedro Fernández Pecha entre los primeros ermitaños; no lo verifiqué. GCatholic da como año 1400, quizás por otra etapa de su organización; no sé a qué se debe la diferencia.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1373</span><div class="ev"><b>Fundación</b>Bula papal y monasterio de Lupiana. ${MK.v}</div></li>
          <li><span class="y">1415</span><div class="ev"><b>Expansión</b>Ya son 25 monasterios, entre ellos El Parral, en Segovia. ${MK.v}</div></li>
          <li><span class="y">s. XVI</span><div class="ev"><b>El Escorial</b>Su época de mayor esplendor. Carlos V pasa sus últimos días en el monasterio jerónimo de Yuste. ${MK.g}</div></li>
          <li><span class="y">1835</span><div class="ev"><b>Exclaustración</b>Las leyes españolas expulsan a los monjes de sus monasterios. ${MK.v}</div></li>
          <li><span class="y">1925</span><div class="ev"><b>Restauración</b>Manuel Sanz Domínguez, un laico, logra el apoyo de Pío XI y restaura la orden en El Parral. ${MK.v}</div></li>
          <li><span class="y">1936</span><div class="ev"><b>Martirio</b>Sanz, ya fray Manuel de la Sagrada Familia, es asesinado en Paracuellos. ${MK.v}</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>El Parral</b>Único monasterio de monjes en el mundo. ${MK.v}</div></li>
        </ol>
        <p class="note">El dato de Yuste es de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>Es una orden [[contemplativo|contemplativa]]: su misión es <strong>alabar a Dios</strong> con la oración y la [[liturgia-horas|Liturgia de las Horas]] cantada con solemnidad, en soledad, silencio y penitencia.</p>
        <p class="note">Descripción de conocimiento general.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>San Jerónimo:</strong> amor apasionado por la Palabra de Dios.</li>
          <li><strong>La alabanza:</strong> el canto solemne del oficio divino.</li>
          <li><strong>La penitencia:</strong> vida austera y retirada.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>No tienen apostolado exterior. Rezan por la Iglesia y reciben a quienes buscan silencio en su monasterio.</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Túnica blanca con escapulario y manto pardos.</p><p class="note">Dato de conocimiento general, no verificado.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Jerónimo</b><span class="d">≈ 347 – 420 · Belén</span><p>Patrono. Tradujo la Biblia al latín (la Vulgata). [[doctor|Doctor de la Iglesia]].</p><div class="tags"><span>Patrono</span><span>Doctor</span></div></div>
          <div class="saint"><b>Santa Paula</b><span class="d">347 – 404 · Roma y Belén</span><p>Discípula de Jerónimo; fundó monasterios en Belén.</p><div class="tags"><span>Monjas</span></div></div>
          <div class="saint"><b>Fray Manuel de la Sagrada Familia</b><span class="d">† 1936 · Paracuellos</span><p>Restaurador de la orden en 1925. ${MK.v}</p><div class="tags"><span>Restaurador</span></div></div>
        </div>
        <p class="note">No sé si fray Manuel tiene una causa de beatificación abierta.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como monje</h3><p>Solo en El Parral, Segovia.</p></div>
          <div class="box"><h3>Como monja</h3><p>Hay monasterios de monjas jerónimas en España, como el de San Pablo en Toledo. ${MK.v}</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <p>No tienen presencia en la Argentina. Su única casa de monjes es el <strong>Monasterio de Santa María del Parral</strong>, en Segovia, España. ${MK.v}</p>` }
    ],
    compartir:{
      frases:[
        ["Ignorar las Escrituras es ignorar a Cristo.","San Jerónimo, Comentario a Isaías"],
        ["Ama la ciencia de las Escrituras y no amarás los vicios de la carne.","Atribuida a San Jerónimo"]
      ],
      anecdotas:[
        ["Un laico que salvó una orden","La orden estaba extinguida desde 1835. Un laico, Manuel Sanz, se empeñó en restaurarla, consiguió el apoyo del Papa y en 1925 empezó con un grupo de jóvenes. Él mismo se hizo monje. ${MK.v}"]
      ],
      preguntas:[
        "“Ignorar las Escrituras es ignorar a Cristo.” ¿Cuánto conocés la Biblia?",
        "¿Para qué sirve una orden que solo reza? ¿Sirve de algo rezar?",
        "Una orden con cinco monjes: ¿la vitalidad de algo se mide por el número?"
      ],
      dinamica:"Lectio con San Jerónimo: elegir un pasaje corto del Evangelio, leerlo tres veces en voz alta con silencio entre lectura y lectura, y que cada uno diga una sola palabra que le quedó resonando."
    },
    fuentes:[
      ["GCatholic — Order of Saint Jerome (O.S.H.)","https://gcatholic.org/orders/151"],
      ["El Debate (2025) — El monasterio donde sobrevive el último reducto de una orden medieval","https://www.eldebate.com/espana/castilla-y-leon/20250930/imponente-monasterio-castellano-donde-sobrevive-ultimo-reducto-monjes-orden-medieval-iberica_339295.html"]
    ]
  },

  /* ==================================================== MONACAL: RITO ORIENTAL */
  basilianos: {
    familia:"monacal",
    nombre:"Basilianos",
    latin:"Ordo Sancti Basilii Magni · O.S.B.M.",
    resumen:"Monjes de la Iglesia greco-católica ucraniana, una Iglesia oriental unida al Papa que celebra con su propio [[rito-oriental|rito]]. Viven según la tradición de San Basilio Magno. En la Argentina acompañan desde hace casi un siglo a los inmigrantes ucranianos de Misiones.",
    tarjeta:"Monjes de rito oriental, con la liturgia bizantina. Muy presentes entre los ucranianos de Misiones.",
    lema:["El pan que guardas pertenece al hambriento","San Basilio Magno, homilía sobre la riqueza (atribución tradicional)."],
    habito:[["Negro","oklch(0.2 0.01 260)"]],
    datos:[
      ["Nombre","Orden de San Basilio Magno"],
      ["Raíz","San Basilio Magno (s. IV)"],
      ["Iglesia","Greco-católica ucraniana"],
      ["Provincia argentina","Desde 1948, con sede en Oberá (Misiones)"],
      ["En el país","3 monasterios"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Su nombre es <strong>Orden de San Basilio Magno</strong>, sigla <strong>O.S.B.M.</strong> Se los llama <strong>basilianos</strong>. Pertenecen a la <strong>Iglesia greco-católica ucraniana</strong>, que está en plena comunión con el Papa pero conserva su liturgia, su cultura y su espiritualidad orientales. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p>Su padre espiritual es <strong>San Basilio Magno</strong> (≈ 330 – 379), obispo de Cesarea, en la actual Turquía. Sus reglas para monjes son la base de casi todo el monacato oriental, como la de San Benito lo es en Occidente.</p>
        <p>La orden actual se organizó en <strong>1617</strong>, con el impulso de San Josafat Kuntsevych y del metropolita José Velamin Rutsky.</p>
        <p class="note">Datos de conocimiento general, no verificados en las fuentes de esta ficha.</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">s. IV</span><div class="ev"><b>San Basilio</b>Escribe sus reglas monásticas. ${MK.g}</div></li>
          <li><span class="y">1617</span><div class="ev"><b>Reorganización</b>Nace la orden en su forma actual. ${MK.g}</div></li>
          <li><span class="y">1938</span><div class="ev"><b>Misiones</b>Monjes basilianos desde Apóstoles empiezan a atender a los ucranianos de Oberá. ${MK.v}</div></li>
          <li><span class="y">1948</span><div class="ev"><b>Provincia argentina</b>Se crea la Provincia de la Inmaculada Concepción. ${MK.v}</div></li>
          <li><span class="y">1966</span><div class="ev"><b>Oberá</b>Se erige la parroquia de la Inmaculada Concepción. ${MK.v}</div></li>
          <li><span class="y">2026</span><div class="ev"><b>Jubileo</b>El 2 de agosto, la parroquia celebra 60 años. ${MK.v}</div></li>
        </ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>Vida <strong>monástica oriental</strong>: oración litúrgica, vida común y servicio pastoral a su pueblo. En la diáspora, como en la Argentina, cuidan además la fe y la cultura de las comunidades ucranianas.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La Divina Liturgia</strong> bizantina, cantada.</li>
          <li><strong>Los íconos</strong>, ventanas hacia Dios.</li>
          <li><strong>La caridad concreta</strong> que pedía San Basilio.</li>
          <li><strong>La unidad de la Iglesia</strong>, por la que murió San Josafat.</li>
        </ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Parroquias y capillas en Misiones, y el Colegio San Josafat de Apóstoles. ${MK.v}</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Hábito negro de monje oriental. Los sacerdotes pueden llevar barba, según la tradición oriental.</p><p class="note">Dato de conocimiento general.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Basilio Magno</b><span class="d">≈ 330 – 379 · Capadocia</span><p>Padre del monacato oriental. [[doctor|Doctor de la Iglesia]].</p><div class="tags"><span>Padre</span><span>Doctor</span></div></div>
          <div class="saint"><b>San Josafat Kuntsevych</b><span class="d">† 1623 · Bielorrusia</span><p>Monje basiliano y arzobispo, mártir de la unidad de la Iglesia.</p><div class="tags"><span>Mártir</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general.</p>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como monje</h3><p>A través de la provincia argentina, en Misiones.</p></div>
          <div class="box"><h3>Conociendo el rito</h3><p>Participar de una Divina Liturgia en una parroquia ucraniana es una buena primera experiencia.</p></div>
        </div>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Misiones:</strong> Oberá (sede), Apóstoles, Posadas, San Vicente, Leandro Alem y otras capillas. ${MK.v}</li>
          <li><strong>Buenos Aires:</strong> sede de la eparquía ucraniana Santa María del Patrocinio. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré monjes basilianos en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["El pan que guardas pertenece al hambriento.","Atribuida a San Basilio Magno"],
        ["Que todos sean uno.","Juan 17,21"]
      ],
      anecdotas:[["Seis décadas en la selva misionera","Durante años, los sacerdotes basilianos viajaban cada semana desde Apóstoles hasta el centro de Misiones para atender a las familias ucranianas. ${MK.v}"]],
      preguntas:[
        "¿Sabías que en la Iglesia católica hay distintos ritos? ¿Qué te dice eso de la unidad?",
        "¿Qué cosas “guardás” que podrían ser de otro?",
        "¿Cómo cuidás vos tus raíces y tu historia?"
      ],
      dinamica:"Mirar en silencio un ícono (puede ser una imagen impresa) durante cinco minutos y luego compartir qué detalle llamó la atención de cada uno y qué dice de Dios."
    },
    fuentes:[
      ["OSBM — Province of the Immaculate Conception (Argentina)","https://osbm.info/?p=4134"],
      ["OSBM — Six Decades of Prayer and Service (2026)","https://osbm.info/?p=5320"],
      ["UGCC — Eparchy of Santa María del Patrocinio","https://pdf.ugcc.ua/en/eparchies/eparchy-of-santa-mara-del-patrocinio-in-buenos-aires-38/"]
    ]
  }

});
