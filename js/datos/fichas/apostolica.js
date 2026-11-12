/* Fichas de la familia "apostolica". Cada ficha sigue la estructura descripta en CLAUDE.md. */
Object.assign(FICHAS, {

  /* ---------------------------------------------------- SALESIANOS */
  salesianos: {
    familia:"apostolica",
    nombre:"Salesianos",
    latin:"Sociedad de San Francisco de Sales · Familia Salesiana de Don Bosco",
    resumen:"Don Bosco, un cura de pueblo en la Turín industrial del siglo XIX, se encontró con chicos de la calle, presos y aprendices explotados, y decidió darles casa, escuela, parroquia y patio. Su método fue la alegría, la confianza y la cercanía. En Mendoza, los salesianos fundaron la primera escuela de enología del país.",
    tarjeta:"Educación de los jóvenes con alegría y cercanía. Don Bosco, Ceferino Namuncurá, Laura Vicuña. Escuela de enología en Rodeo del Medio.",
    lema:["Da mihi animas, cetera tolle","“Dame almas y llévate lo demás.” Lema de Don Bosco, inspirado en Génesis 14,21."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"],["Gris (salesianas)","oklch(0.55 0.01 260)"]],
    datos:[
      ["Siglas","S.D.B. (salesianos) · F.M.A. (salesianas)"],
      ["Fundador","San Juan Bosco (1815 – 1888)"],
      ["Fundación","1859, en Turín"],
      ["Llegada a Argentina","14 de diciembre de 1875"],
      ["Fiesta principal","31 de enero, San Juan Bosco"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre oficial es <strong>Sociedad de San Francisco de Sales</strong> (S.D.B., “Salesianos de Don Bosco”). Don Bosco eligió como patrono a San Francisco de Sales, obispo conocido por su dulzura y su paciencia, porque así quería que fueran sus educadores.</p>
        <p>Alrededor de ellos creció la <strong>Familia Salesiana</strong>, con más de treinta grupos. Los principales son:</p>
        <div class="cols">
          <div class="box"><h3>Salesianos (S.D.B.)</h3><p>Sacerdotes y [[coadjutor|salesianos coadjutores]] (hermanos laicos consagrados).</p></div>
          <div class="box"><h3>Salesianas (F.M.A.)</h3><p>Las Hijas de María Auxiliadora, fundadas por Don Bosco y Santa María Mazzarello en 1872 para educar a las chicas.</p></div>
          <div class="box"><h3>Salesianos Cooperadores</h3><p>Laicos y sacerdotes diocesanos que viven el carisma de Don Bosco en su familia y su trabajo.</p></div>
          <div class="box"><h3>ADMA y exalumnos</h3><p>La Asociación de María Auxiliadora y las asociaciones de exalumnos de colegios salesianos.</p></div>
        </div>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Juan Bosco</strong> nació el 16 de agosto de 1815 en I Becchi, cerca de Castelnuovo (Piamonte, Italia), en una familia campesina pobre. Su padre murió cuando él tenía dos años y lo crió su madre, Margarita Occhiena, llamada “Mamá Margarita”.</p>
        <ul class="dots">
          <li><strong>A los nueve años</strong> tiene un sueño: unos chicos peleando y diciendo malas palabras; él quiere hacerlos callar a golpes, pero un personaje le dice que los gane con mansedumbre y caridad. Ese sueño marcó toda su vida.</li>
          <li><strong>1841:</strong> es ordenado sacerdote en Turín. Visitando las cárceles, ve a muchos jóvenes presos y decide evitar que lleguen ahí.</li>
          <li><strong>1846:</strong> el [[oratorio|Oratorio]] se instala en Valdocco, un barrio pobre de Turín.</li>
          <li><strong>1859:</strong> funda la Sociedad Salesiana con algunos de sus primeros muchachos, ya jóvenes.</li>
          <li><strong>1872:</strong> con Santa María Mazzarello funda las Hijas de María Auxiliadora.</li>
          <li><strong>31 de enero de 1888:</strong> muere en Turín. Es canonizado en 1934.</li>
        </ul>
        <p class="note">Fechas de conocimiento general en las biografías de Don Bosco; no las verifiqué hoy una por una.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1841</span><div class="ev"><b>El primer chico</b>El 8 de diciembre, en la sacristía de San Francisco de Asís de Turín, Don Bosco conoce a Bartolomé Garelli, un chico de la calle. Ahí empieza el Oratorio.</div></li>
          <li><span class="y">1846</span><div class="ev"><b>Valdocco</b>El Oratorio encuentra casa estable en un cobertizo alquilado. Mamá Margarita se muda para cuidar a los chicos.</div></li>
          <li><span class="y">1859</span><div class="ev"><b>Nace la Sociedad Salesiana</b>Don Bosco reúne a sus primeros colaboradores, casi todos jóvenes del Oratorio.</div></li>
          <li><span class="y">1872</span><div class="ev"><b>Las salesianas</b>Fundación de las Hijas de María Auxiliadora en Mornese.</div></li>
          <li><span class="y">1875</span><div class="ev"><b>Primera expedición misionera: Argentina</b>El 11 de noviembre parten de Italia diez salesianos. Llegan a Buenos Aires el 14 de diciembre. ${MK.v}</div></li>
          <li><span class="y">1879</span><div class="ev"><b>La Patagonia</b>Los salesianos entran en la Patagonia, la región que Don Bosco había visto en sueños.</div></li>
          <li><span class="y">1898</span><div class="ev"><b>Llegan a Mendoza</b>Se instalan en Rodeo del Medio (Maipú). ${MK.v}</div></li>
          <li><span class="y">1901</span><div class="ev"><b>Enología</b>Empiezan las clases de vitivinicultura y enología en la escuela Don Bosco. En abril se filtra el primer vino de misa. ${MK.v}</div></li>
          <li><span class="y">1965</span><div class="ev"><b>Primera facultad de enología</b>En Rodeo del Medio se crea la primera Facultad de Enología de América Latina. ${MK.v}</div></li>
          <li><span class="y">2025</span><div class="ev"><b>150 años</b>La Familia Salesiana celebra los 150 años de la primera expedición misionera, que tuvo como destino la Argentina. ${MK.v}</div></li>
        </ol>
        <p class="note">Las fechas de 1875, 1898, 1901, 1965 y 2025 están verificadas. Las demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] salesiano es la <strong>educación y evangelización de los jóvenes, sobre todo los más pobres</strong>. Don Bosco quería formar “buenos cristianos y honrados ciudadanos”.</p>
        <div class="cols">
          <div class="box"><h3>Razón</h3><p>Explicar, convencer, no imponer. Las normas se entienden.</p></div>
          <div class="box"><h3>Religión</h3><p>La fe como centro: confesión, Eucaristía, devoción a María.</p></div>
          <div class="box"><h3>Amor (amorevolezza)</h3><p>Que los jóvenes no solo sean queridos, sino que se sientan queridos.</p></div>
          <div class="box"><h3>El patio</h3><p>El educador está entre los chicos, juega con ellos, los conoce. Ver [[sistema-preventivo|sistema preventivo]].</p></div>
        </div>
        <p style="margin-top:14px">El criterio de toda obra salesiana es el <strong>[[oratorio|Oratorio]]</strong>: casa que acoge, parroquia que evangeliza, escuela que prepara para la vida y patio para encontrarse como amigos.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Santidad en la alegría:</strong> “Aquí hacemos consistir la santidad en estar muy alegres”, decía Santo Domingo Savio, alumno de Don Bosco.</li>
          <li><strong>Lo cotidiano:</strong> cumplir bien los deberes, estudiar, trabajar y jugar, como camino hacia Dios.</li>
          <li><strong>Eucaristía y confesión:</strong> las dos “columnas” del sueño de Don Bosco que sostienen a la Iglesia.</li>
          <li><strong>María Auxiliadora:</strong> “Ella lo hizo todo”, decía Don Bosco. La fiesta es el 24 de mayo.</li>
          <li><strong>El trabajo y la templanza:</strong> Don Bosco dejó como lema familiar “trabajo y templanza”.</li>
          <li><strong>Los sueños:</strong> Don Bosco contaba sus sueños a los chicos como enseñanzas. Muchos marcaron la historia de la congregación.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Colegios y escuelas técnicas</strong> en todo el mundo.</li>
          <li><strong>Oratorios y centros juveniles:</strong> espacios de encuentro, deporte y fe.</li>
          <li><strong>Formación profesional:</strong> oficios, escuelas agrotécnicas y de enología, como la de Rodeo del Medio. ${MK.v}</li>
          <li><strong>Parroquias</strong>, muchas veces en barrios populares.</li>
          <li><strong>Chicos en situación de calle</strong> y jóvenes en riesgo.</li>
          <li><strong>Misiones:</strong> la primera fue la Argentina; hoy están en más de 130 países. ${MK.g}</li>
          <li><strong>Deporte:</strong> en Argentina, el club San Lorenzo de Almagro nació en 1908 en el oratorio salesiano del padre Lorenzo Massa. ${MK.g}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Salesianos:</strong> no tienen hábito propio. Tradicionalmente usaron la sotana negra de los sacerdotes diocesanos; hoy suelen usar camisa clerical o ropa común.</li>
          <li><strong>Salesianas:</strong> hábito gris o blanco según el clima, con velo, y una medalla de María Auxiliadora. Muchas comunidades hoy usan ropa sencilla con el distintivo de la congregación.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>La Familia Salesiana tiene una gran cantidad de santos jóvenes, y varios están ligados a la Argentina:</p>
        <div class="saints">
          <div class="saint"><b>San Juan Bosco</b><span class="d">1815 – 1888 · Italia</span><p>Fundador. Padre y maestro de la juventud.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Santa María Dominga Mazzarello</b><span class="d">1837 – 1881 · Italia</span><p>Cofundadora de las salesianas. Campesina, alegre y práctica.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>Santo Domingo Savio</b><span class="d">1842 – 1857 · Italia</span><p>Alumno de Don Bosco. Murió a los 14 años. Patrono de los adolescentes.</p><div class="tags"><span>Adolescente</span></div></div>
          <div class="saint"><b>Beato Ceferino Namuncurá</b><span class="d">1886 – 1905 · Patagonia</span><p>Hijo del cacique mapuche Manuel Namuncurá. Alumno salesiano, quería ser sacerdote para su pueblo. Murió en Roma a los 18 años. Beatificado en 2007.</p><div class="tags"><span>Argentino</span><span>Joven</span></div></div>
          <div class="saint"><b>Beata Laura Vicuña</b><span class="d">1891 – 1904 · Chile y Neuquén</span><p>Alumna de las salesianas en Junín de los Andes. Ofreció su vida por la conversión de su madre. Murió a los 12 años. Beatificada en 1988.</p><div class="tags"><span>Niña</span><span>Neuquén</span></div></div>
          <div class="saint"><b>San Artémides Zatti</b><span class="d">1880 – 1951 · Italia y Viedma</span><p>Salesiano coadjutor y enfermero en Viedma. Recorría la ciudad en bicicleta atendiendo a los pobres. Canonizado en 2022.</p><div class="tags"><span>Argentina</span><span>Enfermero</span></div></div>
          <div class="saint"><b>San Luis Orione</b><span class="d">1872 – 1940 · Italia</span><p>Alumno de Don Bosco, fundó la Pequeña Obra de la Divina Providencia (el Cottolengo Don Orione), muy presente en Argentina.</p><div class="tags"><span>Alumno</span></div></div>
          <div class="saint"><b>Beato Miguel Rúa</b><span class="d">1837 – 1910 · Italia</span><p>Primer sucesor de Don Bosco al frente de los salesianos. Beatificado en 1972.</p><div class="tags"><span>Beato</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general; no las verifiqué una por una hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como salesiano</h3><p>Sacerdote o coadjutor. Se empieza con el acompañamiento vocacional de la inspectoría.</p></div>
          <div class="box"><h3>Como salesiana</h3><p>Hijas de María Auxiliadora, con un camino de formación propio.</p></div>
          <div class="box"><h3>Como cooperador</h3><p>Laicos que, después de un tiempo de formación, hacen una promesa de vivir el carisma salesiano.</p></div>
          <div class="box"><h3>Como joven</h3><p>Oratorios, grupos del Movimiento Juvenil Salesiano, voluntariado y animación en colegios y parroquias.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional</strong> y experiencias en oratorios.</div></li>
          <li><div><strong>[[postulantado|Prenoviciado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Un año.</div></li>
          <li><div><strong>[[votos-temporales|Profesión temporal]]</strong>, con estudios y un período de práctica pastoral en una obra (tirocinio).</div></li>
          <li><div><strong>[[votos-solemnes|Profesión perpetua]]</strong>.</div></li>
        </ol>
        <p class="note">Los salesianos hacen votos “perpetuos” (no solemnes, porque son una congregación). Los plazos los fija cada inspectoría.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · Rodeo del Medio, Maipú</span>
          <h3>Escuela Don Bosco de Vitivinicultura</h3>
          <p style="margin-top:8px">Los salesianos llegaron en 1898. En 1901 empezaron allí las clases de vitivinicultura y enología, y en 1965 se creó la primera Facultad de Enología de América Latina. Hoy la casa salesiana tiene escuela, bodega, viñedos y olivares, con formación agrícola y enológica. ${MK.v}</p>
        </div>
        <h3 style="font-size:26px;margin-top:24px">En Argentina</h3>
        <ul class="dots">
          <li><strong>Dos inspectorías:</strong> Argentina Norte “San Artémides Zatti”, con sede en Córdoba (formada en 2010), y Argentina Sur “Beato Ceferino Namuncurá”, con sede en Buenos Aires. ${MK.v}</li>
          <li><strong>Solo la Inspectoría Norte</strong> reúne 36 casas, 113 salesianos, 90 unidades educativas y más de 28.000 personas atendidas. ${MK.v}</li>
          <li><strong>Patagonia:</strong> una de las primeras y más grandes misiones salesianas del mundo.</li>
        </ul>
        <p class="note">${MK.p} No verifiqué qué otras obras salesianas o de salesianas hay en el resto de Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["Basta que sean jóvenes para que yo los ame.","San Juan Bosco"],
        ["Estad alegres, pero que vuestra alegría sea verdadera, la de una conciencia libre de pecado.","San Juan Bosco"],
        ["Aquí hacemos consistir la santidad en estar muy alegres.","Santo Domingo Savio, según Don Bosco"],
        ["Quiero estudiar para ser útil a mi gente.","Ceferino Namuncurá, según sus biógrafos"]
      ],
      anecdotas:[
        ["El sueño de los nueve años","Don Bosco soñó con chicos peleando. Quiso callarlos a golpes, pero un hombre le dijo que no los iba a ganar con golpes sino con mansedumbre y caridad. Después apareció una señora que le mostró cómo esas fieras se convertían en corderos. Él entendió que eso era su vida. ${MK.g}"],
        ["El acróbata","De chico, Juan Bosco aprendió trucos de magia, malabares y equilibrio sobre la cuerda para reunir a los chicos del pueblo. Al terminar el espectáculo, les repetía el sermón de la misa y rezaban juntos. ${MK.g}"],
        ["Un club en el oratorio","Unos chicos jugaban al fútbol en la calle en Almagro, Buenos Aires. El padre Lorenzo Massa, salesiano, les ofreció el patio del oratorio para que no se lastimaran. Así nació San Lorenzo de Almagro. ${MK.g}"],
        ["La bicicleta de Zatti","Artémides Zatti llegó a la Argentina con su familia y se enfermó de tuberculosis. Prometió a la Virgen que, si se curaba, dedicaría su vida a los enfermos. Se curó y durante décadas recorrió Viedma en bicicleta visitando pobres y enfermos. ${MK.g}"]
      ],
      preguntas:[
        "Don Bosco decía que no basta con querer a los jóvenes: ellos tienen que sentirse queridos. ¿Quién te hizo sentir querido de verdad?",
        "¿Quién en tu grupo o en tu escuela está “afuera” y necesita que alguien lo invite al patio?",
        "Domingo Savio decía que la santidad es estar alegres. ¿Tu fe te da alegría? ¿Qué te la quita?",
        "Ceferino quería estudiar para ser útil a su pueblo. ¿Para qué estudiás vos?"
      ],
      dinamica:"Una “tarde de oratorio”: juegos en el patio, un momento breve de reflexión con una de las preguntas, y para cerrar las “buenas noches” salesianas, un mensaje de dos minutos que alguien del grupo prepara para despedir el día."
    },
    fuentes:[
      ["ANS — Rodeo del Medio, centro de excelencia enológica y educación salesiana","https://infoans.org/en/sections/special-reports/item/13955-argentina-rodeo-del-medio-a-center-of-oenological-excellence-and-salesian-education"],
      ["ANS — Inspectoría Argentina Norte “San Artémides Zatti”","https://infoans.org/en/sections/news/item/23697-rmg-sdb-provinces-the-saint-artemide-zatti-province-of-northern-argentina-arn"],
      ["Fides — 150 años de la primera expedición misionera salesiana","https://fides.org/en/news/77070"]
    ]
  },

  /* ---------------------------------------------------- HIJAS DE LA CARIDAD */
  "hijas-caridad": {
    familia:"apostolica",
    nombre:"Hijas de la Caridad",
    latin:"Compañía de las Hijas de la Caridad de San Vicente de Paúl",
    resumen:"San Vicente de Paúl y Santa Luisa de Marillac quisieron mujeres que sirvieran a los pobres en las calles, las casas y los hospitales, no detrás de un muro. “Su monasterio son las casas de los enfermos”, les dijo Vicente. Fueron un modelo nuevo de vida consagrada femenina y abrieron el camino a cientos de congregaciones.",
    tarjeta:"Servir a Cristo en los pobres, en la calle. San Vicente de Paúl, Santa Luisa de Marillac, la Medalla Milagrosa.",
    lema:["La caridad de Cristo crucificado nos apremia","Lema de la Compañía, tomado de 2 Corintios 5,14."],
    habito:[["Azul","oklch(0.5 0.1 255)"],["Blanco (toca)","oklch(0.97 0.005 85)"]],
    datos:[
      ["Siglas","H.C. (D.C. en inglés)"],
      ["Fundadores","San Vicente de Paúl y Santa Luisa de Marillac"],
      ["Fundación","29 de noviembre de 1633, París"],
      ["Forma jurídica","Sociedad de vida apostólica"],
      ["Fiestas","27 de septiembre (San Vicente) y 9 de mayo (Santa Luisa)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Su nombre es <strong>Compañía de las Hijas de la Caridad de San Vicente de Paúl</strong>. No son técnicamente “monjas” ni siquiera religiosas en sentido jurídico: son una [[sociedad-vida-apostolica|sociedad de vida apostólica]]. Hacen [[votos-privados|votos privados]] que renuevan cada año.</p>
        <p>Forman parte de la gran <strong>Familia Vicentina</strong>, que incluye a los Padres Vicentinos (Congregación de la Misión), la Sociedad de San Vicente de Paúl (laicos, fundada por el beato Federico Ozanam), las Voluntarias de la Caridad, la Juventud Mariana Vicenciana y muchas otras ramas.</p>` },

      { id:"fundador", titulo:"Fundadores y año", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>San Vicente de Paúl</h3><p>1581–1660. Hijo de campesinos del sur de Francia, se hizo sacerdote buscando una vida cómoda. El contacto con los pobres del campo lo transformó en el gran apóstol de la caridad de su tiempo.</p></div>
          <div class="box"><h3>Santa Luisa de Marillac</h3><p>1591–1660. Mujer de la nobleza, esposa, madre y viuda, con muchas dudas y angustias interiores. Con Vicente encontró su vocación: formar y guiar a las Hijas de la Caridad.</p></div>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>1617:</strong> Vicente funda en Châtillon las primeras “Cofradías de la Caridad”, grupos de mujeres que ayudaban a los pobres.</li>
          <li><strong>1630:</strong> Margarita Naseau, una joven campesina, se ofrece para servir a los pobres. Es considerada la primera Hija de la Caridad.</li>
          <li><strong>29 de noviembre de 1633:</strong> Luisa recibe en su casa de París a las primeras jóvenes. Es la fecha de fundación.</li>
          <li><strong>1655:</strong> aprobación de la Compañía por el arzobispo de París; en 1668, aprobación papal.</li>
        </ul>
        <p class="note">Fechas de conocimiento general; no las verifiqué hoy con una fuente puntual.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1617</span><div class="ev"><b>Châtillon</b>Vicente organiza a las mujeres del pueblo para atender a una familia enferma. Nacen las Cofradías de la Caridad.</div></li>
          <li><span class="y">1633</span><div class="ev"><b>Fundación</b>Primeras Hijas de la Caridad en la casa de Luisa de Marillac, en París.</div></li>
          <li><span class="y">1638</span><div class="ev"><b>Los niños abandonados</b>Empiezan a recoger a los bebés abandonados en las calles de París.</div></li>
          <li><span class="y">1660</span><div class="ev"><b>Mueren los fundadores</b>Luisa en marzo y Vicente en septiembre.</div></li>
          <li><span class="y">1794</span><div class="ev"><b>Mártires de la Revolución</b>Varias Hijas de la Caridad son ejecutadas en Francia.</div></li>
          <li><span class="y">1830</span><div class="ev"><b>La Medalla Milagrosa</b>La Virgen se aparece a Santa Catalina Labouré, novicia de la Compañía, en la Rue du Bac de París. ${MK.t}</div></li>
          <li><span class="y">s. XIX</span><div class="ev"><b>América</b>Llegan a América y se extienden por hospitales, escuelas y asilos de todo el continente. En 1867 una hermana desde la Argentina fue enviada a fundar en Montevideo, lo que muestra que ya estaban en el país. ${MK.v}</div></li>
        </ol>
        <p class="note">El dato de 1867 está verificado. No encontré la fecha exacta de llegada a la Argentina. Las demás fechas son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] es <strong>servir a Cristo en los pobres, corporal y espiritualmente</strong>, con humildad, sencillez y caridad, las tres virtudes vicentinas.</p>
        <div class="box" style="margin-top:12px">
          <h3>Un modelo nuevo</h3>
          <p>En el siglo XVII las religiosas tenían que vivir en clausura. Vicente encontró una forma de que las Hijas de la Caridad pudieran salir a las calles: no hacerlas religiosas en sentido jurídico. Les decía que su monasterio serían las casas de los enfermos; su celda, una habitación alquilada; su capilla, la iglesia parroquial; su claustro, las calles de la ciudad. ${MK.g}</p>
        </div>
        <p style="margin-top:14px">Los pobres son llamados “nuestros amos y señores”: no son objeto de lástima, sino Cristo mismo a quien se sirve.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Cristo, servidor de los pobres:</strong> el modelo es Jesús que vino a anunciar la Buena Noticia a los pobres.</li>
          <li><strong>Humildad, sencillez y caridad.</strong></li>
          <li><strong>“Dejar a Dios por Dios”:</strong> si a la hora de la oración un pobre te necesita, ir a atenderlo no es dejar a Dios, sino encontrarlo en otro lugar.</li>
          <li><strong>La Providencia:</strong> confianza total en que Dios provee.</li>
          <li><strong>María:</strong> en especial, la Virgen de la Medalla Milagrosa.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Salud:</strong> hospitales, dispensarios, cuidado de enfermos en sus casas.</li>
          <li><strong>Infancia:</strong> hogares, escuelas, jardines para niños pobres.</li>
          <li><strong>Ancianos:</strong> hogares y acompañamiento.</li>
          <li><strong>Personas en situación de calle, migrantes, presos.</strong></li>
          <li><strong>Emergencias:</strong> guerras, epidemias y catástrofes. Fueron enfermeras en muchos frentes de batalla.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Al principio</strong> vestían como las campesinas de la región de París: vestido gris azulado y una toca blanca simple.</li>
          <li><strong>La gran “cornette”:</strong> la famosa toca blanca almidonada con alas se usó hasta 1964. Era tan reconocible que se convirtió en un símbolo.</li>
          <li><strong>Hoy:</strong> hábito azul sencillo con un velo o toca, según el país.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Vicente de Paúl</b><span class="d">1581 – 1660 · Francia</span><p>Fundador. Patrono universal de las obras de caridad.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Santa Luisa de Marillac</b><span class="d">1591 – 1660 · Francia</span><p>Cofundadora. Patrona de los trabajadores sociales.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>Santa Catalina Labouré</b><span class="d">1806 – 1876 · Francia</span><p>Hija de la Caridad que recibió las apariciones de la Medalla Milagrosa. Vivió 46 años en silencio cuidando ancianos.</p><div class="tags"><span>Medalla Milagrosa</span></div></div>
          <div class="saint"><b>Santa Juana Antida Thouret</b><span class="d">1765 – 1826 · Francia</span><p>Fue Hija de la Caridad y luego fundó las Hermanas de la Caridad que llevan su nombre, presentes en Argentina.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>Beato Federico Ozanam</b><span class="d">1813 – 1853 · Francia</span><p>Estudiante universitario que, a los 20 años, fundó la Sociedad de San Vicente de Paúl, de laicos.</p><div class="tags"><span>Joven</span><span>Laico</span></div></div>
          <div class="saint"><b>Beata Rosalía Rendu</b><span class="d">1786 – 1856 · París</span><p>Hija de la Caridad en el barrio pobre de Mouffetard. Acompañó a Ozanam y sus amigos.</p><div class="tags"><span>Beata</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general; no las verifiqué una por una hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como Hija de la Caridad</h3><p>Para mujeres llamadas a servir a los pobres como consagradas. Después de la formación, hacen votos que renuevan cada año.</p></div>
          <div class="box"><h3>Como laico</h3><p>La Sociedad de San Vicente de Paúl, las Voluntarias de la Caridad (AIC) y otras ramas laicales.</p></div>
          <div class="box"><h3>Como joven</h3><p>La Juventud Mariana Vicenciana (JMV) y voluntariados vicentinos.</p></div>
          <div class="box"><h3>Sirviendo hoy</h3><p>Un comedor, un hogar de ancianos o una noche de recorrida con personas en situación de calle son la mejor puerta de entrada.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional</strong> y experiencias de servicio.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>Seminario</strong>, nombre que se da a su noviciado.</div></li>
          <li><div><strong>Primeros votos</strong>, unos años después de la entrada.</div></li>
          <li><div><strong>Renovación anual</strong> de los votos, el 25 de marzo, durante toda la vida.</div></li>
        </ol>
        <p class="note">Las etapas y la renovación anual son de conocimiento general; los tiempos exactos los fija cada provincia.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p>Las Hijas de la Caridad estaban en la Argentina por lo menos desde la década de 1860: en 1867 una hermana fue enviada desde la Argentina a fundar en Montevideo. ${MK.v}</p>
        <p class="note">${MK.p} No encontré información confiable sobre la fecha de llegada, las comunidades actuales en el país ni presencia en Mendoza. Es un dato a completar. Ojo: hay otras congregaciones con nombres parecidos, como las Hermanas de la Caridad de Santa Juana Antida Thouret o las Hijas de María Santísima del Huerto, que son distintas.</p>` }
    ],
    compartir:{
      frases:[
        ["Los pobres son nuestros amos y señores.","San Vicente de Paúl"],
        ["El amor es inventivo hasta el infinito.","San Vicente de Paúl"],
        ["Tengan cuidado de los pobres; sean muy amables con ellos.","Santa Luisa de Marillac, en su lecho de muerte (según la tradición)"],
        ["¡Oh María sin pecado concebida, ruega por nosotros que recurrimos a ti!","Oración de la Medalla Milagrosa"]
      ],
      anecdotas:[
        ["La sopa de Châtillon","Un domingo de 1617, antes de misa, le contaron a Vicente que toda una familia estaba enferma y sin comida. Habló del tema en la homilía. Esa tarde, al ir a visitarlos, encontró el camino lleno de vecinos llevando comida. Entendió que hacía falta organizar la caridad. ${MK.g}"],
        ["Margarita, la primera","Margarita Naseau aprendió a leer sola mientras cuidaba vacas, pidiendo a los que pasaban que le explicaran las letras. Después enseñaba a otras chicas. Murió de peste en 1633 por compartir su cama con una enferma. ${MK.g}"],
        ["El silencio de Catalina","Catalina Labouré recibió las apariciones de la Medalla Milagrosa en 1830, pero durante 46 años nadie salvo su confesor supo que había sido ella. Vivió escondida cuidando ancianos. ${MK.g}"],
        ["Ozanam y la pregunta","Federico Ozanam era estudiante en París. Un compañero le preguntó qué hacían los cristianos por los pobres. En lugar de discutir, reunió a unos amigos y empezaron a visitar familias pobres. Así nació la Sociedad de San Vicente de Paúl. ${MK.g}"]
      ],
      preguntas:[
        "Vicente llama a los pobres “nuestros amos y señores”. ¿Cómo cambia la forma de ayudar si pensás así?",
        "“El amor es inventivo.” ¿Qué podría inventar tu grupo para ayudar a alguien concreto este mes?",
        "Ozanam respondió a una crítica con hechos, no con discusiones. ¿Qué crítica a los cristianos te duele y cómo podrías responderla con tu vida?",
        "¿Dónde está tu “monasterio en la calle”: el lugar donde Dios te espera en los demás?"
      ],
      dinamica:"Una salida de servicio vicentina: preparar entre todos comida o abrigo y salir, acompañados por una parroquia o la Sociedad de San Vicente de Paúl, a encontrarse con personas en situación de calle. Lo central es conversar y escuchar, no solo dar. Al volver, compartir el nombre de alguien que conocieron."
    },
    fuentes:[
      ["Somos Vicencianos — La llegada de las Hijas de la Caridad al continente americano (II)","https://vincentians.com/es/la-llegada-de-las-hijas-de-la-caridad-al-continente-americano-ii/"],
      ["ACI Prensa — El Papa destaca la misión de las Hijas de la Caridad","https://www.aciprensa.com/noticias/91002/el-papa-destaca-la-mision-de-las-hijas-de-la-caridad-de-llevar-el-amor-de-cristo-a-los-pobres"]
    ]
  },

  /* ---------------------------------------------------- DON ORIONE */
  orione: {
    familia:"apostolica",
    nombre:"Don Orione",
    latin:"Pequeña Obra de la Divina Providencia · Familia Orionita",
    resumen:"San Luis Orione, alumno de Don Bosco, quiso ser “el padre de los pobres” y abrir casas para los que nadie quiere recibir: personas con discapacidad severa, ancianos solos, chicos abandonados. Llamó a la Argentina su “segunda patria”. El Cottolengo de Claypole, donde viven más de 400 personas, recibió la visita del papa León XIV el 9 de noviembre de 2026. En Mendoza también hay un hogar orionita.",
    tarjeta:"Caridad con los más pobres y frágiles, confiando en la Providencia. Cottolengos en Claypole y Mendoza.",
    lema:["Instaurare omnia in Christo","“Instaurar todo en Cristo” (Efesios 1,10), lema que Don Orione tomó de San Pío X."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"],["Hermanas: celeste y blanco","oklch(0.82 0.06 230)"]],
    datos:[
      ["Siglas","F.D.P. (Hijos de la Divina Providencia)"],
      ["Fundador","San Luis Orione (1872 – 1940)"],
      ["Aprobación diocesana","1903"],
      ["En la Argentina","Desde 1922 (primera casa en Victoria)"],
      ["Fiesta principal","16 de mayo, San Luis Orione"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>La congregación masculina se llama <strong>Pequeña Obra de la Divina Providencia</strong>, y sus miembros, <strong>Hijos de la Divina Providencia</strong> (F.D.P.). Popularmente se los conoce como “orionitas” o simplemente “Don Orione”. ${MK.v}</p>
        <p>La <strong>Familia Orionita</strong> incluye: ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Sacerdotes y hermanos</h3><p>Hijos de la Divina Providencia, incluidos los antiguos Ermitaños de la Divina Providencia.</p></div>
          <div class="box"><h3>Pequeñas Hermanas Misioneras de la Caridad</h3><p>La rama femenina, fundada en 1915.</p></div>
          <div class="box"><h3>Sacramentinas no videntes</h3><p>Hermanas ciegas dedicadas a la adoración eucarística, una fundación original de Don Orione.</p></div>
          <div class="box"><h3>Laicos</h3><p>Movimiento Laical Orionita, exalumnos y voluntarios.</p></div>
        </div>
        <p class="note">La existencia de las Sacramentinas no videntes es de conocimiento general; ACI Prensa publicó una nota por sus 80 años.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>San Luis Orione</strong> nació el 23 de junio de 1872 en Pontecurone, en el norte de Italia, en una familia pobre. Fue alumno de Don Bosco en Turín. ${MK.v}</p>
        <ul class="dots">
          <li><strong>1893:</strong> todavía seminarista, abre un pequeño colegio en San Bernardino (Tortona) para chicos pobres. ${MK.v}</li>
          <li><strong>1899:</strong> reciben el hábito los primeros Ermitaños de la Divina Providencia. ${MK.v}</li>
          <li><strong>1903:</strong> aprobación diocesana de su obispo. ${MK.v}</li>
          <li><strong>1915:</strong> funda la rama femenina. ${MK.v}</li>
          <li><strong>12 de marzo de 1940:</strong> muere en San Remo. Beatificado en 1980 y canonizado por Juan Pablo II el 16 de mayo de 2004. ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1893</span><div class="ev"><b>Primer colegio</b>En Tortona. ${MK.v}</div></li>
          <li><span class="y">1921</span><div class="ev"><b>Llega a la Argentina</b>El 13 de noviembre, desde Brasil. ${MK.v}</div></li>
          <li><span class="y">1922</span><div class="ev"><b>Primera casa</b>En Victoria, provincia de Buenos Aires, en febrero. En julio vuelve a Italia. ${MK.v}</div></li>
          <li><span class="y">1934</span><div class="ev"><b>Segundo viaje</b>Llega el 24 de septiembre para el Congreso Eucarístico Internacional, en el mismo viaje que el legado papal Eugenio Pacelli, futuro Pío XII. Se queda hasta agosto de 1937. ${MK.v}</div></li>
          <li><span class="y">1935</span><div class="ev"><b>Claypole</b>El 28 de abril se coloca la piedra fundamental del Pequeño Cottolengo Argentino; se inaugura el 21 de mayo de 1936. ${MK.v}</div></li>
          <li><span class="y">1940</span><div class="ev"><b>Muere Don Orione</b>Su corazón se guarda hoy en el santuario de Claypole. ${MK.v}</div></li>
          <li><span class="y">2004</span><div class="ev"><b>Canonización</b>${MK.v}</div></li>
          <li><span class="y">2026</span><div class="ev"><b>Visita de León XIV</b>El 9 de noviembre, en su primera jornada completa en la Argentina, el Papa visita el Cottolengo de Claypole. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma orionita es <strong>llevar a los pobres, a los pequeños y a los que sufren a Cristo y a la Iglesia</strong>, por medio de obras de caridad, en total confianza en la Divina Providencia.</p>
        <div class="cols">
          <div class="box"><h3>Los más frágiles</h3><p>Personas con discapacidad severa, ancianos solos, chicos sin familia: los que nadie quiere recibir.</p></div>
          <div class="box"><h3>La Providencia</h3><p>Don Orione abría obras sin tener el dinero, confiando en que Dios proveería.</p></div>
          <div class="box"><h3>Amor al Papa</h3><p>Fidelidad muy fuerte a la Iglesia y al Papa, un rasgo de la familia orionita.</p></div>
          <div class="box"><h3>Puertas abiertas</h3><p>En la puerta de cada Cottolengo no se pregunta de dónde viene una persona, sino qué dolor tiene.</p></div>
        </div>
        <p class="note">La frase sobre la puerta del Cottolengo es una idea de Don Orione muy citada; no encontré la fuente textual.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Caridad:</strong> “Solo la caridad salvará al mundo”, una de sus frases más conocidas.</li>
          <li><strong>[[cottolengo|Cottolengo]]:</strong> el nombre de sus hogares, en homenaje a San José Benito Cottolengo.</li>
          <li><strong>La Eucaristía, la Virgen y el Papa:</strong> los tres amores de Don Orione, heredados de Don Bosco.</li>
          <li><strong>La alegría</strong> en el servicio.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Cottolengos</strong> para personas con discapacidad. ${MK.v}</li>
          <li><strong>Hogares de ancianos.</strong></li>
          <li><strong>Colegios y escuelas técnicas.</strong></li>
          <li><strong>Parroquias en barrios populares.</strong></li>
          <li><strong>Voluntariado juvenil:</strong> jóvenes que pasan sus vacaciones sirviendo en los hogares. ${MK.v}</li>
          <li><strong>Presencia</strong> en unos treinta países. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Sacerdotes:</strong> sotana negra o camisa clerical.</li>
          <li><strong>Hermanas:</strong> tradicionalmente hábito blanco o celeste con velo, según la comunidad.</li>
        </ul>
        <p class="note">Datos de conocimiento general; varía según la región.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Luis Orione</b><span class="d">1872 – 1940 · Italia y Argentina</span><p>Fundador. Padre de los pobres. Llamó a la Argentina su “segunda patria”. ${MK.v}</p><div class="tags"><span>Fundador</span><span>Argentina</span></div></div>
          <div class="saint"><b>San Juan Bosco</b><span class="d">1815 – 1888 · Italia</span><p>Maestro de Don Orione en su juventud.</p><div class="tags"><span>Maestro</span></div></div>
          <div class="saint"><b>San José Benito Cottolengo</b><span class="d">1786 – 1842 · Italia</span><p>Fundador de la Pequeña Casa de la Divina Providencia en Turín, inspiración del nombre de los cottolengos.</p><div class="tags"><span>Inspirador</span></div></div>
          <div class="saint"><b>Beato Francisco Drzewiecki</b><span class="d">1908 – 1942 · Polonia</span><p>Sacerdote orionita, mártir en Dachau. Beatificado en 1999.</p><div class="tags"><span>Mártir</span></div></div>
        </div>
        <p class="note">Salvo los datos de Don Orione, las fechas son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como religioso o religiosa</h3><p>Sacerdotes, hermanos o Pequeñas Hermanas Misioneras de la Caridad.</p></div>
          <div class="box"><h3>Como voluntario</h3><p>Jóvenes y adultos que acompañan a los residentes de los hogares.</p></div>
          <div class="box"><h3>Como laico orionita</h3><p>Movimiento Laical Orionita.</p></div>
          <div class="box"><h3>Como donante</h3><p>Los hogares dependen mucho de las donaciones. ${MK.v}</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza</span>
          <h3>Cottolengo Don Orione de Mendoza</h3>
          <p style="margin-top:8px">Hogar de la red Don Orione donde viven 24 personas de 34 a 70 años con discapacidad severa; algunas llegaron de chicas y viven allí desde hace décadas. Trabajan unas 27 personas, además de voluntarios. Se sostiene con pagos de obras sociales, que a veces llegan cada tres o cuatro meses, y con donaciones de vecinos y grupos. Datos de octubre de 2026. ${MK.v}</p>
          <p class="note">La nota no da la dirección ni el año de fundación. Puede ser una buena opción de voluntariado para un grupo de jóvenes.</p>
        </div>
        <div class="place">
          <span class="eyebrow">Buenos Aires · Claypole, Almirante Brown</span>
          <h3>Pequeño Cottolengo Argentino Don Orione</h3>
          <p style="margin-top:8px">Inaugurado en 1936. Viven 415 personas con discapacidad. En su santuario se guarda el corazón de San Luis Orione. El 9 de noviembre de 2026 lo visitó el papa León XIV. ${MK.v}</p>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>Primera casa en el país:</strong> Victoria, 1922. ${MK.v}</li>
        </ul>` }
    ],
    compartir:{
      frases:[
        ["Solo la caridad salvará al mundo.","San Luis Orione"],
        ["Hacer el bien a todos, el mal a nadie.","San Luis Orione"],
        ["En la puerta del Pequeño Cottolengo no se le preguntará a quien entre si tiene un nombre, sino solo si tiene un dolor.","Idea de San Luis Orione (paráfrasis)"]
      ],
      anecdotas:[
        ["El alumno de Don Bosco","De adolescente, Luis Orione estudió en el oratorio de Don Bosco en Turín. Se dice que Don Bosco le dijo que siempre serían amigos. ${MK.g}"],
        ["La segunda patria","Don Orione vivió en total unos cuatro años en la Argentina, en dos viajes. La quería tanto que la llamaba su segunda patria. ${MK.v}"],
        ["El Papa en Claypole","En noviembre de 2026, León XIV eligió visitar el Cottolengo de Claypole en su primer día completo en el país. Hubo una visita a uno de los hogares de mayor demanda y cantó Abel Pintos. ${MK.v}"]
      ],
      preguntas:[
        "¿Conocés a alguien con una discapacidad severa? ¿Qué te enseña su vida?",
        "Don Orione abría obras sin tener el dinero. ¿Cuánto confiás en la Providencia en tus decisiones?",
        "¿Quiénes son los que “nadie quiere recibir” en tu ciudad?",
        "“Hacer el bien a todos, el mal a nadie”: ¿qué te cuesta más de esa frase?"
      ],
      dinamica:"Coordinar una visita o una jornada de voluntariado en el Cottolengo Don Orione de Mendoza. Antes, preparar algo para compartir (música, juegos, una merienda) y, al volver, compartir qué rostro de Cristo encontró cada uno."
    },
    fuentes:[
      ["El Sol (2026) — Cómo funciona el Cottolengo Don Orione en Mendoza","https://www.elsol.com.ar/mendoza/como-funciona-el-cottolengo-don-orione-en-mendoza-quienes-viven-alli-y-como-se-sostiene/"],
      ["Perfil (2026) — La historia del Cottolengo Don Orione que visitó León XIV","https://noticias.perfil.com/noticias/informacion-general/la-historia-del-cottolengo-don-orione-que-visito-leon-xiv.phtml"],
      ["Infovaticana (2026) — León XIV visita el Cottolengo de Claypole","https://infovaticana.com/2026/11/09/leon-xiv-cottolengo-don-orione-claypole/"],
      ["ACI Prensa — Biografía de San Luis Orione","https://www.aciprensa.com/recursos/biografia-4304/"]
    ]
  },

  /* ---------------------------------------------------- SAN JUAN DE DIOS */
  "san-juan-de-dios": {
    familia:"apostolica",
    nombre:"Hospitalarios de San Juan de Dios",
    latin:"Orden Hospitalaria de San Juan de Dios",
    resumen:"Un vendedor de libros de Granada, después de una conversión tan fuerte que lo internaron como loco, salió del hospital decidido a cuidar enfermos como él nunca había sido cuidado. Recorría las calles de noche gritando “Hermanos, hagan bien a sí mismos”. Sus seguidores formaron una de las órdenes hospitalarias más grandes del mundo, casi toda integrada por hermanos que no son sacerdotes.",
    tarjeta:"Hospitalidad con los enfermos, en especial los de salud mental. San Juan de Dios. Una orden de hermanos.",
    lema:["Hermanos, hagan bien a sí mismos","Grito con que San Juan de Dios pedía limosna por las calles de Granada."],
    habito:[["Negro","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","O.H."],
      ["Fundador","San Juan de Dios (1495 – 1550)"],
      ["Fundación","1537 (según el registro de la Orden)"],
      ["Tamaño","943 miembros y 161 casas (fines de 2024)"],
      ["Fiesta principal","8 de marzo, San Juan de Dios"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Orden Hospitalaria de San Juan de Dios</strong> (O.H.). En Italia se los llama <em>Fatebenefratelli</em>, por el grito del fundador: “hagan el bien, hermanos”. ${MK.v}</p>
        <p>A fines de 2024 tenía 943 miembros en 161 casas; solo 105 son sacerdotes. ${MK.v} Es decir, es una orden formada sobre todo por <strong>hermanos</strong> que se consagran al cuidado de los enfermos. Ver [[hospitalidad|hospitalidad]].</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Juan de Dios</strong> (Juan Ciudad) nació en 1495 en Montemor-o-Novo, Portugal. De chico llegó a España, fue pastor, soldado y vendedor ambulante de libros.</p>
        <ul class="dots">
          <li><strong>1537:</strong> año que la Orden toma como fundación. ${MK.v}</li>
          <li><strong>1539:</strong> en Granada, escuchando un sermón de San Juan de Ávila, vive una conversión tan intensa que grita y llora por las calles. Lo internan en el Hospital Real con los enfermos mentales, donde ve los malos tratos de la época.</li>
          <li><strong>Al salir</strong> abre su propio hospital en Granada y pide limosna por las noches.</li>
          <li><strong>8 de marzo de 1550:</strong> muere en Granada, de rodillas. Es canonizado en 1690.</li>
          <li><strong>1572:</strong> el papa Pío V aprueba a sus seguidores como orden religiosa.</li>
        </ul>
        <p class="note">El año 1537 está verificado; el resto es de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1539</span><div class="ev"><b>Conversión en Granada</b>Internado como loco, descubre su vocación.</div></li>
          <li><span class="y">1550</span><div class="ev"><b>Muere Juan de Dios</b>Sus compañeros siguen la obra.</div></li>
          <li><span class="y">1572</span><div class="ev"><b>Orden religiosa</b>Aprobada por Pío V.</div></li>
          <li><span class="y">s. XVI</span><div class="ev"><b>América</b>Los hermanos fundan hospitales en todo el continente durante la época colonial.</div></li>
          <li><span class="y">1881</span><div class="ev"><b>Hermanas Hospitalarias</b>San Benito Menni, hermano de la Orden, funda en España las Hermanas Hospitalarias del Sagrado Corazón, dedicadas a la salud mental.</div></li>
          <li><span class="y">1886</span><div class="ev"><b>Patrono de los enfermos</b>León XIII lo nombra patrono de los enfermos y los hospitales, junto con San Camilo.</div></li>
          <li><span class="y">1930</span><div class="ev"><b>Patrono de los enfermeros</b>Pío XI.</div></li>
          <li><span class="y">1971</span><div class="ev"><b>Hermanas Hospitalarias en la Argentina</b>El 3 de diciembre abren su primer centro, el Hogar Nuestra Señora de Belén, para adultos mayores. ${MK.v}</div></li>
        </ol>
        <p class="note">El dato de 1971 está verificado; los demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es la <strong>[[hospitalidad|hospitalidad]]</strong>: acoger y cuidar a los enfermos y necesitados con la misma misericordia de Cristo, el Buen Samaritano.</p>
        <div class="cols">
          <div class="box"><h3>Cuarto voto</h3><p>Los hermanos hacen un voto de hospitalidad: dedicar la vida a los enfermos. Ver [[cuarto-voto|cuarto voto]].</p></div>
          <div class="box"><h3>Salud mental</h3><p>Por la experiencia del fundador, una atención especial a las personas con enfermedad mental.</p></div>
          <div class="box"><h3>La persona entera</h3><p>Cuerpo, mente y espíritu.</p></div>
          <div class="box"><h3>Con laicos</h3><p>Hoy trabajan con decenas de miles de colaboradores laicos en todo el mundo.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Cristo en el enfermo</strong> (Mateo 25,36).</li>
          <li><strong>El Buen Samaritano</strong> (Lucas 10,25-37) como modelo.</li>
          <li><strong>La misericordia</strong> sin condiciones.</li>
          <li><strong>La humildad:</strong> Juan de Dios se consideraba un pecador al que Dios había rescatado.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Hospitales generales y psiquiátricos.</strong></li>
          <li><strong>Centros para personas con discapacidad</strong> y adultos mayores.</li>
          <li><strong>Atención a personas en situación de calle</strong> y migrantes.</li>
          <li><strong>Formación en enfermería</strong> y bioética.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica negra</strong> con escapulario y capucha negros, y cinturón de cuero.</li>
          <li>En el trabajo hospitalario, muchos usan ropa sanitaria con el distintivo de la Orden: una granada coronada por una cruz.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Juan de Dios</b><span class="d">1495 – 1550 · Portugal y España</span><p>Fundador. Patrono de los enfermos, los hospitales, los enfermeros y los bomberos.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Benito Menni</b><span class="d">1841 – 1914 · Italia y España</span><p>Restaurador de la Orden en España y fundador de las Hermanas Hospitalarias. Canonizado en 1999.</p><div class="tags"><span>Restaurador</span></div></div>
          <div class="saint"><b>San Ricardo Pampuri</b><span class="d">1897 – 1930 · Italia</span><p>Médico rural que se hizo hermano de San Juan de Dios. Murió joven. Canonizado en 1989.</p><div class="tags"><span>Médico</span><span>Joven</span></div></div>
          <div class="saint"><b>San Juan Grande</b><span class="d">1546 – 1600 · España</span><p>Hermano que murió contagiado cuidando enfermos de peste en Jerez.</p><div class="tags"><span>Peste</span></div></div>
          <div class="saint"><b>Beatos mártires hospitalarios</b><span class="d">† 1936 · España</span><p>Más de setenta hermanos asesinados durante la Guerra Civil española, beatificados en 1992.</p><div class="tags"><span>Mártires</span></div></div>
        </div>
        <p class="note">Fechas y títulos de conocimiento general; no los verifiqué uno por uno hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como hermano</h3><p>Para varones llamados a consagrarse al cuidado de los enfermos. Muchos estudian enfermería u otras carreras de salud.</p></div>
          <div class="box"><h3>Como hermana</h3><p>En las Hermanas Hospitalarias del Sagrado Corazón, presentes en la Argentina.</p></div>
          <div class="box"><h3>Como colaborador</h3><p>Profesionales de la salud que trabajan en sus centros.</p></div>
          <div class="box"><h3>Como voluntario</h3><p>Acompañamiento de enfermos y adultos mayores.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <ul class="dots">
          <li><strong>Hermanas Hospitalarias del Sagrado Corazón</strong>, de la familia de San Juan de Dios: en la Argentina desde 1971, con el Hogar Nuestra Señora de Belén para adultos mayores (95 camas). ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} El registro mundial de la Orden no lista casas de los Hermanos de San Juan de Dios en la Argentina, y no encontré presencia en Mendoza. La fuente sobre las Hermanas no dice dónde está su hogar.</p>` }
    ],
    compartir:{
      frases:[
        ["Hermanos, hagan bien a sí mismos.","San Juan de Dios"],
        ["El corazón manda.","San Juan de Dios (atribuida)"],
        ["Tengan siempre caridad, porque donde no hay caridad no hay Dios, aunque Dios está en todo lugar.","San Juan de Dios, en sus cartas"]
      ],
      anecdotas:[
        ["Internado como loco","Después de su conversión, Juan gritaba, lloraba y regalaba todo por las calles de Granada. Lo internaron con los enfermos mentales, que en esa época eran encadenados y azotados. Al salir, prometió tratarlos de otra manera. ${MK.g}"],
        ["El incendio del hospital","Cuando se incendió el Hospital Real de Granada, Juan entró varias veces entre las llamas para sacar a los enfermos. Salió sin quemaduras graves, y por eso es patrono de los bomberos. ${MK.t}"],
        ["Murió de rodillas","Juan de Dios murió en 1550 después de tirarse al río Genil para salvar a un joven que se ahogaba. Enfermó de neumonía y murió de rodillas, abrazado a un crucifijo. ${MK.g}"]
      ],
      preguntas:[
        "¿Cómo trata hoy nuestra sociedad a las personas con enfermedades mentales?",
        "Juan de Dios fue tratado como loco. ¿Alguna vez te juzgaron por algo que hacías por amor?",
        "¿Qué significa para vos ser “hospitalario”?",
        "Si estudiás algo relacionado con la salud, ¿cómo te gustaría tratar a tus pacientes?"
      ],
      dinamica:"Leer juntos la parábola del Buen Samaritano (Lucas 10,25-37) y que cada uno identifique a alguien “tirado al costado del camino” en su vida cotidiana. Después, elegir entre todos un gesto concreto de cuidado para esa semana."
    },
    fuentes:[
      ["GCatholic — Orden Hospitalaria de San Juan de Dios (datos 2024)","https://gcatholic.org/orders/129"],
      ["Hermanas Hospitalarias — 50 años en Argentina","https://hospitalarias.org/en/?p=52371"],
      ["Wikipedia — Brothers Hospitallers of Saint John of God","https://en.wikipedia.org/wiki/Brothers_Hospitallers_of_Saint_John_of_God"]
    ]
  },

  /* ---------------------------------------------------- MISIONERAS DE LA CARIDAD */
  "misioneras-caridad": {
    familia:"apostolica",
    nombre:"Misioneras de la Caridad",
    latin:"Congregación de las Misioneras de la Caridad",
    resumen:"Una religiosa que enseñaba en un colegio de Calcuta sintió, en un tren, el llamado a dejar todo para servir a “los más pobres entre los pobres”. Salió a las calles con un sari blanco de bordes azules. Hoy sus hermanas son más de cinco mil en todo el mundo, y en la Argentina tienen varios conventos. En cada capilla hay un crucifijo con dos palabras: “Tengo sed”.",
    tarjeta:"Servicio a los más pobres entre los pobres. Santa Teresa de Calcuta. Sari blanco con bordes azules.",
    lema:["Tengo sed","Palabras de Jesús en la cruz (Juan 19,28), escritas junto al crucifijo de cada capilla."],
    habito:[["Blanco (sari)","oklch(0.97 0.005 85)"],["Bordes azules","oklch(0.52 0.15 255)"]],
    datos:[
      ["Siglas","M.C."],
      ["Fundadora","Santa Teresa de Calcuta (1910 – 1997)"],
      ["Fundación","7 de octubre de 1950"],
      ["Tamaño","5.162 miembros y 754 casas (fines de 2024)"],
      ["Fiesta principal","5 de septiembre, Santa Teresa de Calcuta"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Congregación de las Misioneras de la Caridad</strong> (M.C.). A fines de 2024 tenía 5.162 miembros en 754 casas. ${MK.v}</p>
        <p>La familia incluye también a los Hermanos Misioneros de la Caridad, a los Padres Misioneros de la Caridad, a una rama contemplativa y a los Colaboradores laicos. ${MK.g}</p>` },

      { id:"fundador", titulo:"Fundadora y año", estado:"g", html:`
        <p><strong>Santa Teresa de Calcuta</strong> (Anjezë Gonxhe Bojaxhiu) nació en 1910 en Skopje, en la actual Macedonia del Norte, en una familia albanesa. A los 18 años entró a las Hermanas de Loreto y fue enviada a la India, donde enseñó durante casi veinte años.</p>
        <ul class="dots">
          <li><strong>10 de septiembre de 1946:</strong> en un tren hacia Darjeeling recibe lo que llamó “la llamada dentro de la llamada”: servir a los más pobres entre los pobres.</li>
          <li><strong>1948:</strong> deja el convento, se pone un sari blanco y va a vivir a los barrios pobres de Calcuta.</li>
          <li><strong>7 de octubre de 1950:</strong> la congregación es aprobada en la arquidiócesis de Calcuta. ${MK.v}</li>
          <li><strong>1979:</strong> recibe el Premio Nobel de la Paz.</li>
          <li><strong>5 de septiembre de 1997:</strong> muere en Calcuta. Beatificada en 2003 y canonizada por el papa Francisco el 4 de septiembre de 2016.</li>
        </ul>
        <p class="note">La fecha de fundación está verificada; las demás son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1946</span><div class="ev"><b>El tren a Darjeeling</b>La llamada.</div></li>
          <li><span class="y">1950</span><div class="ev"><b>Fundación</b>En Calcuta. ${MK.v}</div></li>
          <li><span class="y">1952</span><div class="ev"><b>Kalighat</b>Abre Nirmal Hriday, una casa para moribundos, junto a un templo hindú.</div></li>
          <li><span class="y">1965</span><div class="ev"><b>Derecho pontificio</b>Pablo VI la aprueba para toda la Iglesia; empieza la expansión fuera de la India.</div></li>
          <li><span class="y">1979</span><div class="ev"><b>Premio Nobel de la Paz</b></div></li>
          <li><span class="y">1997</span><div class="ev"><b>Muere Madre Teresa</b></div></li>
          <li><span class="y">2016</span><div class="ev"><b>Canonización</b>Santa Teresa de Calcuta.</div></li>
        </ol>
        <p class="note">Salvo 1950, las fechas son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>saciar la sed de Jesús en la cruz</strong> de amor y de almas, sirviendo con todo el corazón y gratuitamente a los más pobres entre los pobres.</p>
        <div class="cols">
          <div class="box"><h3>Cuarto voto</h3><p>Servicio de todo corazón y gratuito a los más pobres. Ver [[cuarto-voto|cuarto voto]].</p></div>
          <div class="box"><h3>Pobreza real</h3><p>Viven con lo mínimo, como las personas a las que sirven.</p></div>
          <div class="box"><h3>Adoración</h3><p>Una hora diaria de adoración eucarística antes del trabajo.</p></div>
          <div class="box"><h3>Gratuidad</h3><p>No aceptan pago por su servicio.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>“Tengo sed”:</strong> en cada capilla, junto al crucifijo. ${MK.v}</li>
          <li><strong>Cristo en el pobre:</strong> “Lo que hicieron con el más pequeño, conmigo lo hicieron” (Mateo 25,40).</li>
          <li><strong>La Eucaristía:</strong> “Si no viéramos a Jesús en la Eucaristía, no podríamos verlo en los pobres”.</li>
          <li><strong>Hacer cosas pequeñas con gran amor.</strong></li>
          <li><strong>La noche oscura:</strong> sus cartas revelaron que Madre Teresa vivió casi cincuenta años de oscuridad interior en la fe, sin dejar de servir.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`
        <ul class="dots">
          <li><strong>Hogares para moribundos, enfermos y personas con discapacidad.</strong> ${MK.v}</li>
          <li><strong>Comedores</strong> y atención a personas en situación de calle.</li>
          <li><strong>Hogares para chicos abandonados.</strong></li>
          <li><strong>Enfermos de lepra, sida y tuberculosis.</strong></li>
          <li><strong>Presencia</strong> en unos 140 países. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Sari blanco con tres franjas azules</strong> en el borde, la ropa de las mujeres más pobres de la India.</li>
          <li><strong>Un crucifijo</strong> prendido en el hombro izquierdo.</li>
          <li><strong>Sandalias.</strong></li>
        </ul>
        <p>Las tres franjas azules suelen interpretarse como los votos, y el azul como el color de la Virgen. ${MK.t}</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>Santa Teresa de Calcuta</b><span class="d">1910 – 1997 · Macedonia e India</span><p>Fundadora. Premio Nobel de la Paz.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>Santa Teresa de Lisieux</b><span class="d">1873 – 1897 · Francia</span><p>Madre Teresa eligió su nombre religioso en honor a ella.</p><div class="tags"><span>Inspiración</span></div></div>
          <div class="saint"><b>Mártires de Yemen</b><span class="d">† 2016 · Adén</span><p>Cuatro Misioneras de la Caridad asesinadas en un hogar de ancianos en Adén, Yemen.</p><div class="tags"><span>Mártires</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como hermana</h3><p>Para mujeres jóvenes llamadas a esta vida de pobreza y servicio.</p></div>
          <div class="box"><h3>Como voluntario</h3><p>Muchas casas aceptan voluntarios. Ir a Calcuta es la experiencia que muchos jóvenes sueñan. ${MK.v}</p></div>
          <div class="box"><h3>Como colaborador</h3><p>Colaboradores de Madre Teresa: laicos que rezan y sirven en su lugar.</p></div>
          <div class="box"><h3>Como varón</h3><p>Hermanos y Padres Misioneros de la Caridad.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>En la Argentina</strong> tenían ocho conventos y unas 50 hermanas, según datos de 2022. ${MK.v}</li>
          <li><strong>Córdoba:</strong> convento en Villa del Rosario. ${MK.v}</li>
          <li><strong>Santa Fe:</strong> capilla Inmaculado Corazón de María, en Frontera. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No pude confirmar si hay una casa de las Misioneras de la Caridad en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["No todos podemos hacer grandes cosas, pero sí cosas pequeñas con gran amor.","Santa Teresa de Calcuta (atribuida)"],
        ["El fruto del silencio es la oración; el fruto de la oración, la fe; el fruto de la fe, el amor; el fruto del amor, el servicio; el fruto del servicio, la paz.","Santa Teresa de Calcuta, “tarjeta de visita”"],
        ["Tengo sed.","Juan 19,28"]
      ],
      anecdotas:[
        ["La llamada en el tren","El 10 de septiembre de 1946, viajando en tren, Madre Teresa sintió que Jesús le pedía dejar el convento para servir a los más pobres. Las Misioneras celebran ese día como el “Día de la Inspiración”. ${MK.g}"],
        ["La tarjeta de visita","Madre Teresa no tenía tarjetas con su nombre. Repartía una tarjeta amarilla con la frase sobre el silencio, la oración, la fe, el amor, el servicio y la paz. ${MK.g}"],
        ["Cincuenta años de oscuridad","Después de su muerte se publicaron cartas en las que contaba que durante décadas no sentía la presencia de Dios. Siguió sirviendo igual, por fe. ${MK.g}"]
      ],
      preguntas:[
        "¿Quiénes son “los más pobres entre los pobres” en Mendoza?",
        "¿Qué cosa pequeña podés hacer hoy con gran amor?",
        "Madre Teresa sirvió aunque no sentía a Dios. ¿Tu fe depende de lo que sentís?",
        "¿Dónde está la “sed” de Jesús en tu vida y a tu alrededor?"
      ],
      dinamica:"Una hora “al estilo Calcuta”: media hora de adoración en silencio y media hora de servicio concreto (ordenar un comedor, visitar un hogar, preparar viandas). Después, compartir cómo se relacionan las dos cosas."
    },
    fuentes:[
      ["GCatholic — Misioneras de la Caridad (datos 2024)","https://gcatholic.org/orders/265"],
      ["Cadena 3 (2022) — Misioneras en Villa del Rosario","https://www.cadena3.com/noticia/viva-la-radio/misioneras-en-villa-del-rosario-viven-y-obran-a-traves-de-teresa-de-calcuta_335386"],
      ["Wikipedia — Missionaries of Charity","https://en.wikipedia.org/wiki/Missionaries_of_Charity"]
    ]
  },

  /* ---------------------------------------------------- VERBO ENCARNADO */
  "verbo-encarnado": {
    familia:"apostolica",
    nombre:"Verbo Encarnado",
    latin:"Instituto del Verbo Encarnado (IVE) · Servidoras del Señor y de la Virgen de Matará (SSVM)",
    resumen:"Una familia religiosa nacida en San Rafael, Mendoza, en 1984, que creció muy rápido y hoy está en más de 25 países con miles de religiosos y religiosas, muchos de ellos misioneros en lugares muy difíciles. Es también una historia dolorosa: en 2026 la Santa Sede confirmó en dos instancias que su fundador cometió abusos sexuales con violencia contra varias personas, y pidió a la congregación purificar y renovar su espiritualidad. Esta ficha intenta contar las dos cosas con verdad.",
    tarjeta:"Familia religiosa nacida en San Rafael, Mendoza (1984), misionera en más de 25 países. En proceso de renovación ordenado por la Santa Sede.",
    lema:["Evangelizar la cultura","Uno de los objetivos que el Instituto se propone: llevar el Evangelio a todas las expresiones de la cultura humana."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"],["Hermanas: azul y gris","oklch(0.45 0.08 250)"]],
    datos:[
      ["Siglas","IVE (varones) · SSVM (mujeres)"],
      ["Origen","1984, diócesis de San Rafael, Mendoza"],
      ["Rama femenina","1988"],
      ["Presencia","Más de 25 países"],
      ["Situación","Gobernado por delegados pontificios desde 2025"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>La familia está formada por dos institutos: el <strong>Instituto del Verbo Encarnado</strong> (IVE), de varones, y las <strong>Servidoras del Señor y de la Virgen de Matará</strong> (SSVM), de mujeres. Ambos son de derecho diocesano: se fundaron en la diócesis de San Rafael y hoy tienen su sede en la diócesis de Velletri-Segni, en Italia. ${MK.v}</p>
        <p>Están presentes en más de 25 países de los cinco continentes. ${MK.v} Un diario sanrafaelino habla de 45 países y más de 3.000 religiosos en toda la familia, contando también a la rama contemplativa y a los laicos. ${MK.v}</p>
        <p class="note">Las cifras no coinciden entre las fuentes: la Santa Sede habla de “más de 25 países” y Diario San Rafael de 45. Puede deberse a que una cuenta solo los institutos y la otra toda la familia.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p>El fundador fue el sacerdote argentino <strong>Carlos Miguel Buela</strong> (Buenos Aires, 1941 – Génova, 2023). ${MK.v}</p>
        <ul class="dots">
          <li><strong>1984:</strong> funda el IVE en la diócesis de San Rafael, con permiso del obispo León Kruk, primero como asociación de fieles. ${MK.v}</li>
          <li><strong>1988:</strong> funda la rama femenina. ${MK.v}</li>
          <li><strong>1994:</strong> es obligado a dejar el cargo de superior y la diócesis de San Rafael. ${MK.v}</li>
          <li><strong>Fines de los noventa:</strong> la Conferencia Episcopal Argentina pide a la Santa Sede suprimir el Instituto; la Santa Sede no lo hace y el Instituto se establece en Italia. ${MK.v}</li>
          <li><strong>2001:</strong> vuelve a ser superior general. ${MK.v}</li>
          <li><strong>2010:</strong> tras denuncias de abuso, es removido y enviado a vivir en una abadía en Francia; en 2016, en un monasterio en España. ${MK.v}</li>
          <li><strong>2023:</strong> muere en Génova. ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1984</span><div class="ev"><b>San Rafael</b>Nace el Instituto. ${MK.v}</div></li>
          <li><span class="y">1988</span><div class="ev"><b>Servidoras</b>Nace la rama femenina. ${MK.v}</div></li>
          <li><span class="y">1994</span><div class="ev"><b>Primer conflicto</b>El fundador debe dejar la diócesis. ${MK.v}</div></li>
          <li><span class="y">1990s</span><div class="ev"><b>Expansión internacional</b>Misiones en Medio Oriente, Asia, África, Europa y América.</div></li>
          <li><span class="y">2010</span><div class="ev"><b>Remoción del fundador</b>${MK.v}</div></li>
          <li><span class="y">2021</span><div class="ev"><b>Primera sentencia</b>Un tribunal vaticano lo declara culpable de abusos contra miembros o ex miembros. ${MK.v}</div></li>
          <li><span class="y">2025</span><div class="ev"><b>Delegados pontificios</b>En enero, la Santa Sede nombra a monseñor José Antonio Satué y a la hermana Clara Echarte para acompañar el gobierno de ambos institutos, después del período del cardenal Santos Abril y Castelló como comisario. ${MK.v}</div></li>
          <li><span class="y">2026</span><div class="ev"><b>Sentencia confirmada</b>El 14 de septiembre se informa a los superiores que el tribunal de apelación confirmó la culpabilidad del fundador, y se pide una profunda renovación. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El Instituto se propone <strong>evangelizar la cultura</strong>, es decir, prolongar la Encarnación de Cristo en todas las realidades humanas: el arte, el pensamiento, la educación, las costumbres de cada pueblo.</p>
        <div class="cols">
          <div class="box"><h3>Misión ad gentes</h3><p>Muchos de sus miembros están en lugares de minoría cristiana o en guerra, como Medio Oriente.</p></div>
          <div class="box"><h3>Formación intelectual</h3><p>Gran peso del estudio de la filosofía y la teología, en especial de Santo Tomás de Aquino.</p></div>
          <div class="box"><h3>Liturgia</h3><p>Importancia de la liturgia, incluidos los ritos orientales en algunas misiones.</p></div>
          <div class="box"><h3>Vida contemplativa</h3><p>Tienen ramas contemplativas de varones y mujeres.</p></div>
        </div>
        <div class="box" style="margin-top:14px"><h3>Lo que pidió la Santa Sede</h3><p>Al confirmar la culpa del fundador, la Santa Sede pidió <strong>reinterpretar, revisar y purificar</strong> la espiritualidad, la formación y el apostolado, y distinguir el don del Espíritu Santo de las faltas personales del fundador. Es decir: el carisma no se da por descartado, pero tiene que ser revisado a fondo. ${MK.v}</p></div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>El misterio de la Encarnación:</strong> Dios que se hace hombre y asume todo lo humano.</li>
          <li><strong>María</strong>, en especial bajo la advocación de la Virgen de Luján y, en la rama femenina, la Virgen de Matará, de Santiago del Estero.</li>
          <li><strong>Santo Tomás de Aquino</strong> como maestro intelectual.</li>
          <li><strong>La disponibilidad misionera</strong> para ir a cualquier lugar.</li>
        </ul>
        <p class="note">Esta descripción es de conocimiento general. Por pedido de la Santa Sede, la espiritualidad del Instituto está en revisión, así que puede cambiar.</p>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Parroquias y misiones</strong> en zonas de frontera de la fe.</li>
          <li><strong>Hogares</strong> para personas con discapacidad, ancianos y chicos.</li>
          <li><strong>Colegios y seminarios.</strong></li>
          <li><strong>Ejercicios espirituales</strong> según San Ignacio.</li>
          <li><strong>Misiones en Irak, Siria, Egipto, Tierra Santa</strong> y otros lugares de cristianos perseguidos, muy conocidas por su permanencia en zonas de guerra.</li>
        </ul>
        <p class="note">Datos de conocimiento general; no los verifiqué uno por uno hoy.</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Varones:</strong> sotana negra.</li>
          <li><strong>Mujeres:</strong> hábito azul oscuro o gris con velo, según la rama y el país.</li>
        </ul>
        <p class="note">Datos de conocimiento general.</p>` },

      { id:"santos", titulo:"Santos y testigos", estado:"g", html:`
        <p>El Instituto no tiene santos propios. Sus miembros toman como modelos a santos de toda la Iglesia, en especial a Santo Tomás de Aquino, San Ignacio de Loyola y a los mártires.</p>
        <div class="box" style="margin-top:12px"><h3>Sobre el fundador</h3><p>Carlos Miguel Buela fue declarado culpable por la Santa Sede, en primera instancia y en apelación, de delitos sexuales cometidos con violencia contra varias personas. Por eso no es presentado aquí como modelo. Las víctimas, en su mayoría ex seminaristas y religiosas, son las primeras que merecen nuestra atención y oración. ${MK.v}</p></div>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <p>El Instituto sigue recibiendo vocaciones, ahora bajo el acompañamiento de los delegados pontificios.</p>
        <div class="box" style="margin-top:12px"><h3>Un consejo prudente</h3><p>Para cualquier joven que piense en ingresar a una comunidad religiosa, y en especial a una que atraviesa un proceso de este tipo, es importante: tener un acompañante espiritual externo a la comunidad, conversar con el obispo o con la vicaría de vida consagrada de su diócesis, informarse con las comunicaciones oficiales de la Santa Sede y no apurar decisiones.</p></div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"g", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · San Rafael</span>
          <h3>Lugar de origen</h3>
          <p style="margin-top:8px">El Instituto nació en la diócesis de San Rafael en 1984. ${MK.v} En San Rafael funcionó su primer seminario, el Seminario Mayor “María, Madre del Verbo Encarnado”.</p>
          <p class="note">${MK.p} El nombre del seminario y su situación actual en San Rafael son de conocimiento general; no encontré fuentes recientes sobre la presencia actual del Instituto en la diócesis.</p>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>Argentina:</strong> además de San Rafael, tiene casas en otras provincias.</li>
        </ul>
        <p class="note">${MK.p} No verifiqué la lista actual de casas en el país.</p>` }
    ],
    compartir:{
      frases:[
        ["Y el Verbo se hizo carne y habitó entre nosotros.","Juan 1,14"],
        ["La verdad los hará libres.","Juan 8,32"],
        ["Si un miembro sufre, todos los miembros sufren con él.","1 Corintios 12,26"]
      ],
      anecdotas:[],
      preguntas:[
        "¿Cómo puede la Iglesia reconocer un don de Dios y, al mismo tiempo, condenar con claridad el mal cometido por quien lo recibió?",
        "¿Qué necesitan las víctimas de abusos de parte de la comunidad cristiana?",
        "¿Qué señales ayudan a reconocer un ambiente sano en un grupo de Iglesia, y cuáles deberían encender una alarma?",
        "¿Por qué es importante tener siempre un acompañante espiritual de confianza fuera del propio grupo?"
      ],
      dinamica:"Este carisma no se presta para una dinámica liviana. Si se trabaja con jóvenes, se recomienda hacerlo con un adulto formado en prevención de abusos, leyendo juntos el comunicado oficial de la Santa Sede y conversando sobre cómo cuidar a las personas en los grupos de Iglesia. Se puede terminar con una oración por las víctimas."
    },
    fuentes:[
      ["Vatican News (2026) — Institutos del Verbo Encarnado: Padre Buela, declarado culpable","https://www.vaticannews.va/es/vaticano/news/2026-09/institutos-del-verbo-encarnado-padre-buela-declarado-culpable.html"],
      ["Diario San Rafael (2026) — El Vaticano ratifica los abusos del fundador","https://diariosanrafael.com.ar/el-vaticano-ratifica-los-abusos-del-fundador-del-verbo-encarnado-y-ordena-una-profunda-renovacion/"],
      ["La Nación (2026) — El Vaticano confirmó que el fundador fue culpable","https://www.lanacion.com.ar/sociedad/el-vaticano-confirmo-que-el-cura-fundador-del-instituto-del-verbo-encarnado-de-mendoza-fue-culpable-nid29092026/"],
      ["Wikipedia — Carlos Miguel Buela","https://en.wikipedia.org/wiki/Carlos_Miguel_Buela"]
    ]
  },

  /* ---------------------------------------------------- PASIONISTAS */
  pasionistas: {
    familia:"apostolica",
    nombre:"Pasionistas",
    latin:"Congregación de la Pasión de Jesucristo",
    resumen:"San Pablo de la Cruz quiso que en el mundo nunca se olvidara la Pasión de Jesús, “la obra más grande del amor de Dios”. Sus religiosos llevan en el pecho un escudo con un corazón y las palabras “Pasión de Jesucristo”. En Buenos Aires atienden la Iglesia de la Santa Cruz, donde en 1977 la dictadura secuestró a las fundadoras de Madres de Plaza de Mayo.",
    tarjeta:"Hacer memoria de la Pasión de Jesús y acompañar a los crucificados de hoy. Iglesia de la Santa Cruz, Buenos Aires.",
    lema:["Jesu XPI Passio","“La Pasión de Jesucristo”, escrito en el corazón del escudo pasionista."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Escudo blanco","oklch(0.97 0.005 85)"]],
    datos:[
      ["Siglas","C.P."],
      ["Fundador","San Pablo de la Cruz (1694 – 1775)"],
      ["Fundación","1720"],
      ["Tamaño","1.764 miembros y 341 casas (fines de 2024)"],
      ["Voto propio","Promover la memoria de la Pasión"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Congregación de la Pasión de Jesucristo</strong> (C.P.). A fines de 2024 tenía 1.764 miembros (1.342 sacerdotes) en 341 casas. ${MK.v}</p>
        <p>La familia pasionista incluye monjas contemplativas, varias congregaciones de hermanas y laicos.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Pablo de la Cruz</strong> (Paolo Francesco Danei) nació en 1694 en Ovada, norte de Italia. ${MK.v}</p>
        <ul class="dots">
          <li><strong>1720:</strong> después de una experiencia de oración, recibe del obispo de Alessandria un hábito negro y escribe la primera Regla durante un retiro de cuarenta días. Es la fecha de fundación. ${MK.v}</li>
          <li><strong>1737:</strong> primer convento en el Monte Argentario, en la Toscana.</li>
          <li><strong>1741:</strong> el papa Benedicto XIV aprueba la Regla.</li>
          <li><strong>1775:</strong> muere en Roma. Canonizado en 1867.</li>
        </ul>
        <p class="note">Salvo 1720, las fechas son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1720</span><div class="ev"><b>Fundación</b>${MK.v}</div></li>
          <li><span class="y">1741</span><div class="ev"><b>Aprobación</b></div></li>
          <li><span class="y">1771</span><div class="ev"><b>Monjas pasionistas</b>Fundación de las monjas contemplativas.</div></li>
          <li><span class="y">s. XIX</span><div class="ev"><b>Expansión</b>Inglaterra, Irlanda, Estados Unidos. Desde Irlanda llegan a la Argentina para atender a los inmigrantes irlandeses.</div></li>
          <li><span class="y">1977</span><div class="ev"><b>La Santa Cruz</b>Del 8 al 10 de diciembre, un operativo de la Marina secuestra a un grupo que se reunía en la Iglesia de la Santa Cruz, parroquia pasionista de Buenos Aires: entre ellos las Madres Azucena Villaflor, María Ponce de Bianco y Esther Ballestrino de Careaga, y las religiosas francesas Alice Domon y Léonie Duquet. Alfredo Astiz se había infiltrado en el grupo. ${MK.v}</div></li>
        </ol>
        <p class="note">El dato de 1977 está verificado. La llegada de los pasionistas irlandeses es de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>mantener viva la memoria de la Pasión de Jesús</strong> y anunciarla como la mayor obra del amor de Dios. Los pasionistas hacen un [[cuarto-voto|cuarto voto]] para promoverla.</p>
        <div class="cols">
          <div class="box"><h3>Memoria de la Pasión</h3><p>Contemplar a Cristo crucificado.</p></div>
          <div class="box"><h3>Los crucificados de hoy</h3><p>Ver la Pasión de Jesús continuada en los que sufren: pobres, enfermos, víctimas.</p></div>
          <div class="box"><h3>Predicación</h3><p>Misiones populares y retiros.</p></div>
          <div class="box"><h3>Soledad y oración</h3><p>Sus casas se llamaban “retiros”, con fuerte vida de oración.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La cruz</strong> como lugar del amor más grande.</li>
          <li><strong>La [[noche-oscura|noche oscura]]:</strong> San Pablo de la Cruz vivió casi cincuenta años de aridez interior.</li>
          <li><strong>María Dolorosa.</strong></li>
          <li><strong>La soledad</strong> y el desierto como lugar del encuentro con Dios.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Misiones populares</strong> y retiros.</li>
          <li><strong>Parroquias</strong>, como la Santa Cruz en Buenos Aires. ${MK.v}</li>
          <li><strong>Acompañamiento de enfermos</strong> y de quienes sufren.</li>
          <li><strong>Justicia, paz y derechos humanos.</strong></li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica negra</strong> con cinturón de cuero y rosario.</li>
          <li><strong>Escudo pasionista</strong> en el pecho: un corazón blanco con una cruz y la inscripción <em>Jesu XPI Passio</em>, y tres clavos.</li>
          <li><strong>Sandalias.</strong></li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Pablo de la Cruz</b><span class="d">1694 – 1775 · Italia</span><p>Fundador. Místico y predicador.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Gabriel de la Dolorosa</b><span class="d">1838 – 1862 · Italia</span><p>Joven alegre y elegante, le gustaba el baile y el teatro. Entró a los pasionistas y murió a los 23 años. Patrono de los jóvenes y de los estudiantes.</p><div class="tags"><span>Joven</span><span>Patrono de los jóvenes</span></div></div>
          <div class="saint"><b>Santa Gema Galgani</b><span class="d">1878 – 1903 · Italia</span><p>Joven laica, mística, muy ligada a los pasionistas, que no pudo ingresar a las monjas por su salud. Murió a los 25 años.</p><div class="tags"><span>Joven</span><span>Laica</span></div></div>
          <div class="saint"><b>Santa María Goretti</b><span class="d">1890 – 1902 · Italia</span><p>Niña mártir de 11 años. Su asesino, arrepentido, terminó como portero de un convento capuchino; la causa la impulsaron pasionistas.</p><div class="tags"><span>Mártir</span></div></div>
          <div class="saint"><b>San Carlos Houben</b><span class="d">1821 – 1893 · Países Bajos e Irlanda</span><p>Pasionista en Dublín, muy buscado como confesor y consejero. Canonizado en 2007.</p><div class="tags"><span>Irlanda</span></div></div>
        </div>
        <p class="note">Fechas y datos de conocimiento general; el vínculo de María Goretti con los pasionistas conviene verificarlo antes de usarlo en público.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como religioso</h3><p>Sacerdote o hermano pasionista.</p></div>
          <div class="box"><h3>Como religiosa</h3><p>Monjas pasionistas o congregaciones de hermanas.</p></div>
          <div class="box"><h3>Como laico</h3><p>Laicos pasionistas.</p></div>
          <div class="box"><h3>Visitando la Santa Cruz</h3><p>Lugar de memoria en Buenos Aires.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Buenos Aires · San Cristóbal</span>
          <h3>Iglesia de la Santa Cruz</h3>
          <p style="margin-top:8px">Parroquia de la congregación pasionista, listada por el registro mundial de la Orden. Lugar de memoria por el secuestro de diciembre de 1977. ${MK.v}</p>
        </div>
        <p class="note">${MK.p} No encontré otras casas pasionistas en el país ni presencia en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["La Pasión de Jesús es la obra más grande y maravillosa del amor de Dios.","San Pablo de la Cruz (idea central)"],
        ["Mi perfección será hacer la voluntad de Dios.","San Gabriel de la Dolorosa (atribuida)"],
        ["Nadie tiene amor más grande que el que da la vida por sus amigos.","Juan 15,13"]
      ],
      anecdotas:[
        ["El joven que bailaba","Francisco Possenti, el futuro San Gabriel, era conocido en su ciudad por su elegancia y por ir a bailes y al teatro. Durante una procesión de la Virgen sintió que ella lo miraba y le decía que ese mundo no era para él. Entró a los pasionistas y murió cuatro años después. ${MK.g}"],
        ["El cuaderno de Santa Cruz","Las Madres de Plaza de Mayo se reunían en la Iglesia de la Santa Cruz para organizar la búsqueda de sus hijos. Allí fueron secuestradas en diciembre de 1977. Hoy la parroquia es un lugar de memoria. ${MK.v}"]
      ],
      preguntas:[
        "¿Dónde ves hoy a Cristo crucificado en la gente?",
        "¿Qué te dice la cruz sobre el amor de Dios por vos?",
        "Las Madres buscaban a sus hijos en una iglesia. ¿Qué lugar debe tener la Iglesia en la defensa de la vida y la dignidad?",
        "San Gabriel cambió de vida joven. ¿Qué “bailes” te distraen de lo esencial?"
      ],
      dinamica:"Un Vía Crucis actualizado: en cada estación, el grupo nombra una situación concreta de sufrimiento en Mendoza o en el país (un hospital, un barrio, un caso de injusticia) y reza por ella."
    },
    fuentes:[
      ["GCatholic — Congregación de la Pasión (datos 2024)","https://gcatholic.org/orders/024"],
      ["Tiempo Argentino — El secuestro de los 12 de la Santa Cruz","https://www.tiempoar.com.ar/ta_article/madres-plaza-mayo-secuestro-12/"]
    ]
  },

  /* ---------------------------------------------------- REDENTORISTAS */
  redentoristas: {
    familia:"apostolica",
    nombre:"Redentoristas",
    latin:"Congregación del Santísimo Redentor",
    resumen:"San Alfonso María de Ligorio era un abogado brillante de Nápoles que perdió un juicio importante y entendió que su vida tenía que ir por otro lado. Se hizo sacerdote y fundó una congregación para anunciar el Evangelio a los campesinos más abandonados. Los redentoristas difundieron por el mundo la imagen de la Virgen del Perpetuo Socorro.",
    tarjeta:"Evangelizar a los más abandonados con la “abundante redención” de Cristo. San Alfonso de Ligorio y la Virgen del Perpetuo Socorro.",
    lema:["Copiosa apud eum redemptio","“En él hay abundante redención” (Salmo 130,7)."],
    habito:[["Negro","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","C.Ss.R."],
      ["Fundador","San Alfonso María de Ligorio (1696 – 1787)"],
      ["Fundación","9 de noviembre de 1732, Scala (Italia)"],
      ["Ícono","Virgen del Perpetuo Socorro"],
      ["Fiesta","1 de agosto, San Alfonso"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre oficial es <strong>Congregación del Santísimo Redentor</strong> (C.Ss.R.). Sus miembros, sacerdotes y hermanos, son conocidos como redentoristas. Existen también monjas redentoristas contemplativas.</p>
        <p class="note">Datos de conocimiento general; no pude consultar el registro de la Congregación.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Alfonso María de Ligorio</strong> nació en 1696 cerca de Nápoles. A los 16 años era doctor en derecho.</p>
        <ul class="dots">
          <li><strong>1723:</strong> pierde un juicio por un error y deja la abogacía.</li>
          <li><strong>1726:</strong> es ordenado sacerdote.</li>
          <li><strong>9 de noviembre de 1732:</strong> en Scala, cerca de Amalfi, funda la congregación para los campesinos pobres de las montañas.</li>
          <li><strong>1749:</strong> aprobación papal.</li>
          <li><strong>1762:</strong> es nombrado obispo.</li>
          <li><strong>1787:</strong> muere a los 90 años. Canonizado en 1839 y declarado Doctor de la Iglesia en 1871; patrono de los moralistas y confesores.</li>
        </ul>
        <p class="note">Fechas de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1732</span><div class="ev"><b>Scala</b>Fundación.</div></li>
          <li><span class="y">1749</span><div class="ev"><b>Aprobación</b></div></li>
          <li><span class="y">1780s</span><div class="ev"><b>Expansión</b>San Clemente María Hofbauer lleva la congregación al norte de los Alpes.</div></li>
          <li><span class="y">1866</span><div class="ev"><b>Perpetuo Socorro</b>El papa Pío IX confía a los redentoristas el ícono de la Virgen del Perpetuo Socorro, con el pedido de “hacerla conocer en todo el mundo”.</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Argentina</b>Atienden, entre otras, la iglesia de Nuestra Señora del Perpetuo Socorro de Rosario. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>anunciar el Evangelio a los más pobres y abandonados</strong>, siguiendo a Cristo Redentor.</p>
        <div class="cols">
          <div class="box"><h3>Misiones populares</h3><p>Ir a los barrios y pueblos para predicar durante días.</p></div>
          <div class="box"><h3>Confesión y misericordia</h3><p>San Alfonso insistía en ser misericordiosos en el confesionario.</p></div>
          <div class="box"><h3>Los abandonados</h3><p>Ir primero a quienes nadie atiende.</p></div>
          <div class="box"><h3>La oración sencilla</h3><p>“El que reza se salva”, decía San Alfonso.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Los tres misterios del amor:</strong> el pesebre, la cruz y la Eucaristía.</li>
          <li><strong>María:</strong> San Alfonso escribió <em>Las glorias de María</em>.</li>
          <li><strong>La Visita al Santísimo:</strong> otro libro suyo muy difundido.</li>
          <li><strong>La música popular:</strong> Alfonso compuso el villancico “Tu scendi dalle stelle”.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Misiones populares.</strong></li>
          <li><strong>Santuarios del Perpetuo Socorro.</strong></li>
          <li><strong>Teología moral:</strong> la Academia Alfonsiana en Roma.</li>
          <li><strong>Medios de comunicación</strong> y publicaciones (Editorial Liguori).</li>
          <li><strong>Parroquias</strong> en barrios populares.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Hábito <strong>negro</strong> con cuello blanco y un rosario en la cintura. Hoy muchos usan camisa clerical.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Alfonso María de Ligorio</b><span class="d">1696 – 1787 · Italia</span><p>Fundador. Patrono de moralistas y confesores.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>San Gerardo Mayela</b><span class="d">1726 – 1755 · Italia</span><p>Hermano redentorista, sastre, muy humilde. Patrono de las embarazadas y los partos.</p><div class="tags"><span>Hermano</span></div></div>
          <div class="saint"><b>San Clemente María Hofbauer</b><span class="d">1751 – 1820 · Austria</span><p>Panadero que llegó a sacerdote; apóstol de Viena.</p><div class="tags"><span>Apóstol de Viena</span></div></div>
          <div class="saint"><b>San Juan Neumann</b><span class="d">1811 – 1860 · Bohemia y EE. UU.</span><p>Redentorista y obispo de Filadelfia, creó el primer sistema de escuelas católicas de Estados Unidos.</p><div class="tags"><span>Obispo</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como religioso</h3><p>Sacerdote o hermano.</p></div>
          <div class="box"><h3>Como laico</h3><p>Laicos redentoristas y misiones juveniles.</p></div>
          <div class="box"><h3>Como monja</h3><p>Monjas redentoristas contemplativas.</p></div>
          <div class="box"><h3>Rezando</h3><p>La novena perpetua a la Virgen del Perpetuo Socorro, cada semana.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <ul class="dots">
          <li><strong>Rosario:</strong> Iglesia Nuestra Señora del Perpetuo Socorro, atendida por los redentoristas. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No verifiqué la fecha de llegada al país ni otras comunidades, ni encontré presencia en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["El que reza se salva; el que no reza se condena.","San Alfonso, Del gran medio de la oración"],
        ["En él hay abundante redención.","Salmo 130,7"],
        ["Ama a Dios y haz lo que quieras… pero ámalo de verdad.","Idea de San Alfonso inspirada en San Agustín (paráfrasis)"]
      ],
      anecdotas:[
        ["El juicio perdido","Alfonso era uno de los mejores abogados de Nápoles. En un juicio importante, por no haber leído bien un documento, perdió el caso. Humillado, se dio cuenta de lo frágil que era su prestigio y empezó a buscar a Dios. ${MK.g}"],
        ["El ícono escondido","El ícono del Perpetuo Socorro estuvo perdido décadas después de que las tropas de Napoleón destruyeran su iglesia en Roma. Un viejo fraile agustino se lo había contado a un monaguillo que, años después, ya redentorista, ayudó a encontrarlo. ${MK.t}"]
      ],
      preguntas:[
        "¿Alguna vez un fracaso te hizo replantear tu camino?",
        "¿Quiénes son los “más abandonados” en tu barrio?",
        "¿Cuál es tu forma de rezar más sencilla?",
        "¿Qué te dice la imagen de la Virgen del Perpetuo Socorro, que sostiene a un Niño asustado?"
      ],
      dinamica:"Mirar juntos el ícono del Perpetuo Socorro y que cada uno describa un detalle (la sandalia que se cae, los ángeles con la cruz y la lanza, la mano de María). Después, explicar el sentido de cada uno y compartir cuál es el miedo que cada uno quiere poner en manos de María."
    },
    fuentes:[
      ["GCatholic — Iglesia Nuestra Señora del Perpetuo Socorro, Rosario","https://gcatholic.org/churches/america-south/42819.htm"]
    ]
  },

  /* ---------------------------------------------------- LA SALLE */
  lasalle: {
    familia:"apostolica",
    nombre:"Hermanos de La Salle",
    latin:"Instituto de los Hermanos de las Escuelas Cristianas",
    resumen:"San Juan Bautista de La Salle, un canónigo rico de Reims, se encontró con maestros pobres y sin formación que enseñaban a chicos de la calle. Terminó dejando su posición para vivir con ellos y fundar una comunidad de hermanos dedicados a la escuela gratuita. Es el patrono de los educadores. En la Argentina, sus colegios tienen más de un siglo.",
    tarjeta:"Educación humana y cristiana de los jóvenes, sobre todo los pobres. San Juan Bautista de La Salle, patrono de los docentes.",
    lema:["Signum fidei","“Signo de fe”. Lema del Instituto, con una estrella en el escudo."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"],["Babero blanco","oklch(0.97 0.005 85)"]],
    datos:[
      ["Siglas","F.S.C."],
      ["Fundador","San Juan Bautista de La Salle (1651 – 1719)"],
      ["Fundación","1680, Reims (Francia)"],
      ["En la Argentina","Colegio La Salle de Buenos Aires desde 1891"],
      ["Fiesta","7 de abril, San Juan Bautista de La Salle"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre oficial es <strong>Instituto de los Hermanos de las Escuelas Cristianas</strong> (F.S.C.). Son <strong>hermanos</strong>, no sacerdotes: el fundador quiso que se dedicaran por completo a la escuela.</p>
        <p>Hoy la “misión lasallana” se comparte con miles de educadores laicos.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Juan Bautista de La Salle</strong> nació en 1651 en Reims, Francia, en una familia noble. A los 27 años era sacerdote y canónigo de la catedral.</p>
        <ul class="dots">
          <li><strong>1679:</strong> conoce a Adrián Nyel, que quería abrir escuelas para chicos pobres, y lo ayuda.</li>
          <li><strong>1680:</strong> empieza a vivir con los maestros. Es la fecha que el Instituto toma como inicio.</li>
          <li><strong>1683:</strong> renuncia a su cargo de canónigo y reparte su fortuna entre los pobres en una época de hambruna.</li>
          <li><strong>1719:</strong> muere en Ruan. Canonizado en 1900; declarado patrono de los educadores en 1950.</li>
        </ul>
        <p class="note">Fechas de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1680</span><div class="ev"><b>Reims</b>Comienzo de la comunidad.</div></li>
          <li><span class="y">1725</span><div class="ev"><b>Aprobación</b>Benedicto XIII aprueba el Instituto.</div></li>
          <li><span class="y">1891</span><div class="ev"><b>Buenos Aires</b>El hermano Jumaélien funda el Colegio La Salle de Buenos Aires. ${MK.v}</div></li>
          <li><span class="y">1904</span><div class="ev"><b>Santa Fe</b>Dos hermanos llegan desde Barcelona y se hacen cargo del colegio Jobson; las clases empiezan en 1905. ${MK.v}</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Distrito Argentina-Paraguay</b>Los colegios lasallanos del país forman un distrito junto con Paraguay. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>la educación humana y cristiana de los jóvenes, especialmente de los pobres</strong>, vivida en comunidad y como ministerio.</p>
        <div class="cols">
          <div class="box"><h3>Fe</h3><p>Ver todo con los ojos de la fe.</p></div>
          <div class="box"><h3>Fraternidad</h3><p>Ser hermanos entre ellos y “hermanos mayores” de los alumnos.</p></div>
          <div class="box"><h3>Servicio</h3><p>La escuela como servicio a los pobres.</p></div>
          <div class="box"><h3>Innovación pedagógica</h3><p>La Salle introdujo la enseñanza en grupos, en lengua materna y la formación de maestros.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La presencia de Dios:</strong> “Acordémonos de que estamos en la santa presencia de Dios”, oración con la que empiezan las clases en los colegios lasallanos.</li>
          <li><strong>El celo:</strong> el ardor por la salvación de los alumnos.</li>
          <li><strong>Juntos y por asociación:</strong> la misión es comunitaria.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Colegios y universidades</strong> en todo el mundo.</li>
          <li><strong>Escuelas para chicos en situación de vulnerabilidad.</strong></li>
          <li><strong>Formación docente.</strong></li>
          <li><strong>Jóvenes lasallanos</strong> con experiencias en las periferias. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Tradicionalmente <strong>sotana negra</strong> con un <strong>babero blanco</strong> (el “rabat”) en el cuello. Hoy muchos hermanos usan ropa común.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Juan Bautista de La Salle</b><span class="d">1651 – 1719 · Francia</span><p>Fundador. Patrono de los educadores.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Miguel Febres Cordero</b><span class="d">1854 – 1910 · Ecuador</span><p>Hermano lasallano, gramático y poeta, primer santo de Ecuador.</p><div class="tags"><span>Sudamericano</span></div></div>
          <div class="saint"><b>San Benildo Romançon</b><span class="d">1805 – 1862 · Francia</span><p>Hermano maestro en un pueblo, santo en lo cotidiano del aula.</p><div class="tags"><span>Maestro</span></div></div>
          <div class="saint"><b>Santos mártires de Turón</b><span class="d">† 1934 · España</span><p>Ocho hermanos lasallanos y un pasionista asesinados en Asturias. Canonizados en 1999.</p><div class="tags"><span>Mártires</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como hermano</h3><p>Para varones llamados a la consagración en la escuela.</p></div>
          <div class="box"><h3>Como educador lasallano</h3><p>Docentes laicos asociados a la misión.</p></div>
          <div class="box"><h3>Como joven</h3><p>Grupos juveniles lasallanos y voluntariado.</p></div>
          <div class="box"><h3>Como docente cristiano</h3><p>La espiritualidad de La Salle sirve a cualquier maestro.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Buenos Aires:</strong> Colegio La Salle, desde 1891. ${MK.v}</li>
          <li><strong>Santa Fe:</strong> Colegio La Salle Jobson, desde 1904–1905. ${MK.v}</li>
          <li><strong>Distrito Argentina-Paraguay</strong> del Instituto. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré colegios lasallanos en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["Acordémonos de que estamos en la santa presencia de Dios.","Oración lasallana"],
        ["Tocad los corazones de los niños.","Idea de San Juan Bautista de La Salle (paráfrasis de sus Meditaciones)"],
        ["Viva Jesús en nuestros corazones. ¡Por siempre!","Saludo lasallano"]
      ],
      anecdotas:[
        ["El canónigo que se fue a vivir con los maestros","Juan Bautista de La Salle tenía una vida cómoda. Cuando invitó a los maestros a vivir en su casa, su familia se escandalizó. Terminó yéndose él a vivir con ellos. ${MK.g}"],
        ["Clases en francés, no en latín","En su época se enseñaba a leer en latín. La Salle decidió que los chicos pobres aprendieran en francés, su propia lengua, para que la escuela les sirviera para la vida. ${MK.g}"]
      ],
      preguntas:[
        "¿Qué docente te marcó para bien? ¿Por qué?",
        "¿Qué significa “estar en la presencia de Dios” mientras estudiás?",
        "Si fueras docente, ¿a qué alumnos te gustaría dedicarte?",
        "¿Cómo podrías ser un “hermano mayor” para alguien más chico?"
      ],
      dinamica:"Cada uno escribe una carta breve de agradecimiento a un docente que le haya marcado la vida, y si es posible, se la hace llegar. Se empieza y se termina con la oración “Acordémonos de que estamos en la santa presencia de Dios”."
    },
    fuentes:[
      ["El Litoral — Misión lasallana en Santa Fe, 120 años","https://www.ellitoral.com/educacion/mision-lasallana-santa-fe-120-anos-educacion-servicio_0_yfALIYoy5a.html"],
      ["Wikipedia — La Salle College (Buenos Aires)","https://kaweah.freedombox.rocks/kiwix/wikipedia_en_all_maxi_2023-10/La_Salle_Buenos_Aires"],
      ["La Salle — Distrito Argentina-Paraguay","https://www.lasalle.org/jovenes-lasalianos-argentinos-con-los-corazones-en-las-periferias-comparten-sus-experiencias-con-el-superior-general/?print=pdf"]
    ]
  },

  /* ---------------------------------------------------- HERMANAS DEL HUERTO */
  huerto: {
    familia:"apostolica",
    nombre:"Hermanas del Huerto",
    latin:"Hijas de María Santísima del Huerto",
    resumen:"Fundadas en 1829 en Chiavari, Italia, por San Antonio María Gianelli, llegaron a la Argentina en 1858 y fueron de las primeras religiosas en trabajar en los hospitales de Buenos Aires: el actual Hospital Rivadavia nació con ellas. Hoy tienen colegios, hogares y hospitales en varias provincias, también en Mendoza.",
    tarjeta:"Caridad en la educación y la salud, con la Virgen del Huerto. En la Argentina desde 1858, con presencia en Mendoza.",
    lema:["Caridad","El fundador quería hermanas dispuestas a “toda obra de caridad”."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Blanco (toca)","oklch(0.97 0.005 85)"]],
    datos:[
      ["Nombre","Hijas de María Santísima del Huerto"],
      ["Fundador","San Antonio María Gianelli (1789 – 1846)"],
      ["Fundación","12 de enero de 1829, Chiavari (Italia)"],
      ["En la Argentina","Desde 1858"],
      ["En el país hoy","39 casas y 214 hermanas"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Su nombre oficial es <strong>Hijas de María Santísima del Huerto</strong>, por una advocación mariana muy querida en Chiavari, la Virgen del Huerto. En la Argentina se las conoce como “las hermanas del Huerto”. ${MK.v}</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>San Antonio María Gianelli</strong> nació en 1789 en Liguria, Italia, en una familia campesina. Fue sacerdote, gran predicador y luego obispo de Bobbio.</p>
        <ul class="dots">
          <li><strong>12 de enero de 1829:</strong> funda la congregación en Chiavari con doce jóvenes. ${MK.v}</li>
          <li><strong>1846:</strong> muere. ${MK.v}</li>
          <li><strong>1853:</strong> reconocimiento diocesano; <strong>1868:</strong> aprobación papal; <strong>1882:</strong> aprobación de las Constituciones. ${MK.v}</li>
          <li><strong>1951:</strong> canonizado.</li>
        </ul>
        <p class="note">La fuente menciona que en 2001 se cumplieron 50 años de su canonización, lo que da 1951.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1829</span><div class="ev"><b>Chiavari</b>Fundación. ${MK.v}</div></li>
          <li><span class="y">1856</span><div class="ev"><b>Montevideo</b>Llegan a América. ${MK.v}</div></li>
          <li><span class="y">1858</span><div class="ev"><b>Buenos Aires</b>Se hacen cargo de un hospital de mujeres, que luego sería el Hospital Rivadavia, y del asilo de mujeres. ${MK.v}</div></li>
          <li><span class="y">1860</span><div class="ev"><b>Casa de Expósitos</b>Para los bebés abandonados. ${MK.v}</div></li>
          <li><span class="y">Después</span><div class="ev"><b>Expansión</b>Colegios en Rosario, Santa Fe, Paraná, Córdoba, Catamarca, Tucumán, Temperley y Esperanza, entre otros. ${MK.v}</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Argentina</b>39 casas y 214 hermanas en Buenos Aires, Entre Ríos, Mendoza, Córdoba, Jujuy, Santa Fe, Salta y Tucumán. ${MK.v}</div></li>
        </ol>
        <p class="note">Las cifras actuales vienen de Wikipedia en español y pueden estar desactualizadas.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es la <strong>caridad</strong> vivida con María, en la educación, la salud y la atención a los más necesitados.</p>
        <div class="cols">
          <div class="box"><h3>Educación</h3><p>Colegios y escuelas especiales.</p></div>
          <div class="box"><h3>Salud</h3><p>Hospitales y cuidado de enfermos.</p></div>
          <div class="box"><h3>Infancia</h3><p>Hogares para chicos.</p></div>
          <div class="box"><h3>Espiritualidad</h3><p>Casas de retiro.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La Virgen del Huerto</strong>, madre de la congregación.</li>
          <li><strong>La caridad</strong> concreta y alegre.</li>
          <li><strong>La humildad</strong> y la disponibilidad para cualquier servicio.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Escuelas, hogares para chicos, hospitales, escuelas especiales y casas de retiro. ${MK.v}</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Hábito tradicional oscuro con toca blanca y velo; hoy muchas hermanas usan un hábito más sencillo.</p><p class="note">Dato de conocimiento general.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Antonio María Gianelli</b><span class="d">1789 – 1846 · Italia</span><p>Fundador, obispo de Bobbio. Canonizado en 1951.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Santa María Crescencia Pérez</b><span class="d">1897 – 1932 · Argentina y Chile</span><p>Hermana del Huerto nacida en San Martín, provincia de Buenos Aires. Murió en Vallenar, Chile, a los 34 años. Beatificada en 2012, es la primera beata de la congregación.</p><div class="tags"><span>Argentina</span><span>Beata</span></div></div>
        </div>
        <p class="note">Los datos de María Crescencia Pérez son de conocimiento general; su título actual (beata) conviene verificarlo.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como hermana</h3><p>Para mujeres llamadas a la caridad en la educación y la salud.</p></div>
          <div class="box"><h3>Como laico</h3><p>Docentes, exalumnos y voluntarios de sus obras.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Argentina:</strong> desde 1858, con 39 casas. ${MK.v}</li>
          <li><strong>Mendoza:</strong> figura entre las provincias donde están presentes. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré cuál es su obra en Mendoza ni la dirección.</p>` }
    ],
    compartir:{
      frases:[
        ["Hagan todo por amor y nada por fuerza.","Idea atribuida a San Antonio María Gianelli (paráfrasis)"],
        ["Estuve enfermo y me visitaron.","Mateo 25,36"]
      ],
      anecdotas:[
        ["El hospital que se volvió el Rivadavia","Cuando llegaron a Buenos Aires en 1858, las hermanas se hicieron cargo de un hospital de mujeres. Con el tiempo, ese hospital se convirtió en el actual Hospital Rivadavia. ${MK.v}"],
        ["Una argentina en Chile","María Crescencia Pérez, hermana del Huerto argentina, murió joven en Chile. Se cuenta que, al exhumar su cuerpo años después, estaba incorrupto. ${MK.t}"]
      ],
      preguntas:[
        "¿Qué obras de caridad de tu ciudad nacieron de religiosas y quizás no lo sabías?",
        "¿Qué significa para vos hacer las cosas “por amor y no por fuerza”?",
        "¿Te ves trabajando en educación o en salud? ¿Por qué?"
      ],
      dinamica:"Investigar en grupo la historia de un hospital, colegio u hogar de Mendoza fundado por religiosas, y preparar una breve presentación para compartir con el resto."
    },
    fuentes:[
      ["Wikipedia — Hijas de María Santísima del Huerto","https://es.wikipedia.org/wiki/Hijas_de_Mar%C3%ADa_Sant%C3%ADsima_del_Huerto"]
    ]
  },

  /* ---------------------------------------------------- VEDRUNA */
  vedruna: {
    familia:"apostolica",
    nombre:"Hermanas Vedruna",
    latin:"Carmelitas de la Caridad de Vedruna",
    resumen:"Santa Joaquina de Vedruna fue esposa, madre de nueve hijos y viuda antes de fundar una congregación. En 1826, en Vic (Cataluña), reunió a las primeras hermanas para educar a chicas pobres y cuidar enfermos. En 2026 la congregación cumple 200 años, y la Argentina fue elegida como una de las sedes de la celebración.",
    tarjeta:"Educación y salud con espíritu carmelitano. Santa Joaquina de Vedruna, madre de familia y fundadora. 200 años en 2026.",
    lema:["Todo por amor","Expresión muy repetida en la tradición vedruna."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Blanco","oklch(0.97 0.005 85)"]],
    datos:[
      ["Siglas","C.C.V."],
      ["Fundadora","Santa Joaquina de Vedruna (1783 – 1854)"],
      ["Fundación","26 de febrero de 1826, Vic (España)"],
      ["Tamaño","1.178 miembros y 117 casas (fines de 2024)"],
      ["Bicentenario","2026"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Carmelitas de la Caridad de Vedruna</strong> (C.C.V.). Unen el espíritu carmelitano, de oración, con la caridad activa. A fines de 2024 eran 1.178 hermanas en 117 casas. ${MK.v}</p>
        <p>Forman parte de la gran familia carmelitana (ver la ficha de los Carmelitas).</p>` },

      { id:"fundador", titulo:"Fundadora y año", estado:"v", html:`
        <p><strong>Santa Joaquina de Vedruna</strong> nació en 1783 en Barcelona. De chica quería ser carmelita descalza, pero se casó a los 16 años con Teodoro de Mas y tuvo nueve hijos. Al quedar viuda, educó a sus hijos y después se consagró a Dios. ${MK.v}</p>
        <ul class="dots">
          <li><strong>26 de febrero de 1826:</strong> funda la congregación en Vic con las primeras compañeras. ${MK.v}</li>
          <li><strong>1854:</strong> muere en Barcelona durante una epidemia de cólera.</li>
          <li><strong>1940:</strong> beatificada por Pío XII; <strong>1959:</strong> canonizada por Juan XXIII. ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1826</span><div class="ev"><b>Vic</b>Fundación. ${MK.v}</div></li>
          <li><span class="y">s. XIX</span><div class="ev"><b>América</b>Después de expandirse por España, fundan casas en la Argentina y Chile. ${MK.v}</div></li>
          <li><span class="y">1959</span><div class="ev"><b>Canonización</b>${MK.v}</div></li>
          <li><span class="y">2026</span><div class="ev"><b>Bicentenario</b>La congregación celebra 200 años, y una ciudad argentina fue elegida como sede continental de la celebración.</div></li>
        </ol>
        <p class="note">El bicentenario en la Argentina se basa en titulares de ACI Prensa que no pude leer completos; no sé qué ciudad fue la sede.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`
        <p>El carisma es <strong>la educación cristiana de la juventud y el cuidado de los enfermos y ancianos</strong>, con un corazón contemplativo. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Educación</h3><p>Colegios y catequesis.</p></div>
          <div class="box"><h3>Salud</h3><p>Hospitales, enfermos y adultos mayores.</p></div>
          <div class="box"><h3>Inclusión social</h3><p>Trabajo con los más excluidos.</p></div>
          <div class="box"><h3>Oración</h3><p>Raíz carmelitana.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Carmelitana:</strong> oración, amistad con Dios, María.</li>
          <li><strong>Laical en su origen:</strong> la fundadora vivió el Evangelio como esposa y madre antes de ser religiosa.</li>
          <li><strong>Sencillez y confianza</strong> en Dios en medio de guerras y epidemias.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Educación cristiana de la juventud en escuelas, catequesis, atención hospitalaria, cuidado de enfermos y ancianos, e inclusión social. ${MK.v}</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Tradicionalmente hábito negro con toca blanca. Hoy muchas hermanas visten ropa sencilla con una cruz.</p><p class="note">Dato de conocimiento general.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>Santa Joaquina de Vedruna</b><span class="d">1783 – 1854 · España</span><p>Esposa, madre de nueve hijos, viuda y fundadora.</p><div class="tags"><span>Fundadora</span><span>Madre</span></div></div>
          <div class="saint"><b>Beatas mártires vedrunas</b><span class="d">† 1936 · España</span><p>Hermanas asesinadas durante la Guerra Civil española, beatificadas.</p><div class="tags"><span>Mártires</span></div></div>
        </div>
        <p class="note">El registro mundial menciona santos y beatos de España; los datos de las mártires son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como hermana</h3><p>Para mujeres llamadas a educar o cuidar con espíritu carmelitano.</p></div>
          <div class="box"><h3>Como laico vedruna</h3><p>Docentes, exalumnos y voluntarios.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <ul class="dots">
          <li><strong>Argentina:</strong> presentes desde el siglo XIX. ${MK.v}</li>
          <li><strong>Bicentenario 2026:</strong> una ciudad argentina fue sede continental.</li>
        </ul>
        <p class="note">${MK.p} No encontré cuáles son sus casas en el país ni si hay presencia en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["Todo por amor, nada por fuerza.","Expresión de la tradición vedruna (atribuida a la fundadora)"],
        ["Mi Dios, que seamos santas.","Atribuida a Santa Joaquina de Vedruna"]
      ],
      anecdotas:[
        ["La novia que quería ser monja","Joaquina quería ser carmelita, pero a los 16 años se casó. Fue esposa y madre durante años y, ya viuda, fundó una congregación. Su vida muestra que Dios puede escribir derecho con renglones que parecen torcidos. ${MK.g}"],
        ["Murió cuidando","Joaquina murió en 1854 durante una epidemia de cólera en Barcelona. ${MK.g}"]
      ],
      preguntas:[
        "Joaquina fue madre antes de ser fundadora. ¿Qué te enseña sobre los caminos de Dios?",
        "¿Cómo se vive la oración en medio del trabajo o el estudio?",
        "¿Qué lugar tienen los ancianos y enfermos en tu vida?"
      ],
      dinamica:"Hacer una línea de tiempo de la vida de Joaquina (esposa, madre, viuda, fundadora) y al lado cada uno dibuja la suya con sus etapas, preguntándose dónde estuvo Dios en cada una."
    },
    fuentes:[
      ["GCatholic — Carmelitas de la Caridad de Vedruna (datos 2024)","https://gcatholic.org/orders/384"],
      ["Wikipedia — Carmelite Sisters of Charity","https://en.wikipedia.org/wiki/Carmelite_Sisters_of_Charity"],
      ["ACI Prensa — Congregación religiosa cumple 200 años y lo celebra en Argentina","https://www.aciprensa.com/noticias/122509/congregacion-religiosa-cumple-200-anos-y-lo-celebra-en-argentina"]
    ]
  },

  /* ---------------------------------------------------- PALOTINOS */
  palotinos: {
    familia:"apostolica",
    nombre:"Palotinos",
    latin:"Sociedad del Apostolado Católico",
    resumen:"San Vicente Pallotti soñó en la Roma del siglo XIX algo que el Concilio Vaticano II diría cien años después: que todos los bautizados, no solo los sacerdotes, son apóstoles. Los palotinos llegaron a la Argentina en el siglo XIX para acompañar a los inmigrantes irlandeses. El 4 de julio de 1976, cinco palotinos fueron asesinados en la parroquia de San Patricio, en Buenos Aires. En 2026 se cumplieron 50 años de aquella masacre.",
    tarjeta:"Todos los bautizados son apóstoles. San Vicente Pallotti. Los mártires palotinos de San Patricio (1976).",
    lema:["Caritas Christi urget nos","“El amor de Cristo nos apremia” (2 Corintios 5,14)."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","S.A.C."],
      ["Fundador","San Vicente Pallotti (1795 – 1850)"],
      ["Origen","Roma, década de 1830"],
      ["En la Argentina","Desde el siglo XIX"],
      ["Mártires","Masacre de San Patricio, 4 de julio de 1976"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre oficial es <strong>Sociedad del Apostolado Católico</strong> (S.A.C.), y sus miembros son los <strong>palotinos</strong>. Son una [[sociedad-vida-apostolica|sociedad de vida apostólica]].</p>
        <p>Forman parte de la <strong>Unión del Apostolado Católico</strong>, que quiere reunir a sacerdotes, religiosos y laicos en la misma misión.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Vicente Pallotti</strong> nació en Roma en 1795. Fue sacerdote, confesor incansable y apóstol de los pobres de la ciudad.</p>
        <ul class="dots">
          <li><strong>Década de 1830:</strong> en Roma, sueña con una organización que involucre a todos los bautizados en la difusión del Evangelio. ${MK.v}</li>
          <li><strong>1850:</strong> muere en Roma.</li>
          <li><strong>1963:</strong> canonizado por Juan XXIII durante el Concilio Vaticano II.</li>
        </ul>
        <p class="note">El año de canonización es de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1830s</span><div class="ev"><b>Roma</b>Nace la familia palotina. ${MK.v}</div></li>
          <li><span class="y">s. XIX</span><div class="ev"><b>Argentina</b>Los palotinos irlandeses empiezan a trabajar en el país. Hasta 1928 la sede de la provincia irlandesa estuvo en la Argentina. ${MK.v}</div></li>
          <li><span class="y">1963</span><div class="ev"><b>Canonización</b>de Vicente Pallotti.</div></li>
          <li><span class="y">1976</span><div class="ev"><b>Masacre de San Patricio</b>El 4 de julio, en la parroquia de San Patricio del barrio de Belgrano, son asesinados los sacerdotes Alfredo Leaden, Alfredo Kelly y Pedro Duffau, y los seminaristas Salvador Barbeito y Emilio Barletti. Testimonios ante la CONADEP atribuyeron el crimen a miembros de la Marina. ${MK.v}</div></li>
          <li><span class="y">2005</span><div class="ev"><b>Causa de beatificación</b>El cardenal Bergoglio autoriza el pedido para iniciarla. ${MK.v}</div></li>
          <li><span class="y">2026</span><div class="ev"><b>50 años</b>Una multitud recordó a los palotinos asesinados. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma palotino es <strong>despertar en todos los bautizados la conciencia de ser apóstoles</strong> y unir fuerzas para la misión.</p>
        <div class="cols">
          <div class="box"><h3>Apostolado universal</h3><p>Todos, laicos y consagrados, son responsables de anunciar el Evangelio.</p></div>
          <div class="box"><h3>Colaboración</h3><p>Unir a sacerdotes, religiosos y laicos.</p></div>
          <div class="box"><h3>Amor de Cristo</h3><p>“El amor de Cristo nos apremia”.</p></div>
          <div class="box"><h3>María, Reina de los Apóstoles</h3><p>Modelo del apostolado, en el Cenáculo con los discípulos.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Dios Amor infinito</strong>, idea central de los escritos de Pallotti.</li>
          <li><strong>María en el Cenáculo</strong>, Reina de los Apóstoles.</li>
          <li><strong>La comunión</strong> entre todas las vocaciones.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Parroquias</strong>, como San Patricio en Belgrano y San Patricio en Mercedes. ${MK.v}</li>
          <li><strong>Colegios</strong> y formación de laicos.</li>
          <li><strong>Misiones</strong> en África, América y Asia.</li>
          <li><strong>Memoria y derechos humanos</strong>, a partir de sus mártires.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Visten como el clero: <strong>sotana negra</strong> o camisa clerical.</p>` },

      { id:"santos", titulo:"Santos y testigos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Vicente Pallotti</b><span class="d">1795 – 1850 · Roma</span><p>Fundador. Precursor del apostolado de los laicos.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Mártires palotinos de San Patricio</b><span class="d">† 4 de julio de 1976 · Buenos Aires</span><p>Alfredo Leaden, Alfredo Kelly, Pedro Duffau, Salvador Barbeito y Emilio Barletti. Su causa de beatificación fue autorizada en 2005. ${MK.v}</p><div class="tags"><span>Argentina</span><span>Mártires</span></div></div>
          <div class="saint"><b>Beato Richard Henkes</b><span class="d">1900 – 1945 · Alemania</span><p>Palotino que murió en Dachau cuidando a enfermos de tifus. Beatificado en 2019.</p><div class="tags"><span>Dachau</span></div></div>
        </div>
        <p class="note">Los datos de Henkes son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como palotino</h3><p>Sacerdote o hermano.</p></div>
          <div class="box"><h3>Como hermana</h3><p>Hermanas palotinas.</p></div>
          <div class="box"><h3>Como laico</h3><p>Unión del Apostolado Católico.</p></div>
          <div class="box"><h3>Haciendo memoria</h3><p>Visitar San Patricio, en Belgrano, donde están las baldosas por la memoria.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Buenos Aires:</strong> parroquia San Patricio, en Belgrano. ${MK.v}</li>
          <li><strong>Mercedes:</strong> parroquia San Patricio, en la arquidiócesis de Mercedes-Luján. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré presencia palotina en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["El amor de Cristo nos apremia.","2 Corintios 5,14"],
        ["Dios, Amor infinito.","Expresión central de San Vicente Pallotti"],
        ["Juntos vivieron, juntos murieron.","Recuerdo de los mártires palotinos (titular de 2026)"]
      ],
      anecdotas:[
        ["Un profeta del laicado","Más de cien años antes del Concilio Vaticano II, Pallotti decía que todos los bautizados son apóstoles. Juan XXIII lo canonizó justamente durante el Concilio. ${MK.g}"],
        ["Mensajes de tiza","Después de la masacre de San Patricio, los asesinos dejaron escritas con tiza frases amenazantes que aludían a un atentado de Montoneros y al Movimiento de Sacerdotes para el Tercer Mundo. ${MK.v}"]
      ],
      preguntas:[
        "¿Te sentís apóstol? ¿Qué significa para vos?",
        "¿Qué podés hacer por el Evangelio sin ser sacerdote ni religioso?",
        "¿Por qué es importante hacer memoria de los mártires de la historia argentina reciente?",
        "“Juntos vivieron, juntos murieron.” ¿Qué te dice esa frase sobre la vida en comunidad?"
      ],
      dinamica:"Preparar una oración por la memoria, la verdad y la justicia: leer los nombres de los cinco palotinos, encender una vela por cada uno y rezar por todas las víctimas de la violencia en la Argentina."
    },
    fuentes:[
      ["Wikipedia — San Patricio Church massacre","https://en.wikipedia.org/wiki/San_Patricio_Church_massacre"],
      ["Irish Pallottines — The Irish Pallottine Fathers and Brothers","https://irishpallottines.org/the-irish-pallottine-fathers-and-brothers"],
      ["ACI Prensa (2026) — Juntos vivieron, juntos murieron: 50 años de los palotinos","https://www.aciprensa.com/noticias/126645/juntos-vivieron-juntos-murieron-una-multitud-recordo-a-los-palotinos-asesinados-hace-50-anos"]
    ]
  },

  /* ---------------------------------------------------- JOSEFINOS DE MURIALDO */
  murialdo: {
    familia:"apostolica",
    nombre:"Josefinos de Murialdo",
    latin:"Congregatio Sancti Ioseph · C.S.I.",
    resumen:"Congregación fundada en Turín en 1873 por San Leonardo Murialdo, amigo de Don Bosco, para educar a los chicos pobres y a los jóvenes trabajadores. En Mendoza tienen una presencia muy fuerte: el Instituto Leonardo Murialdo de Villa Nueva, sus parroquias y el club de los “Canarios”.",
    tarjeta:"Educar a los chicos pobres y a los jóvenes trabajadores, al estilo de San José. Muy presentes en Villa Nueva, Guaymallén.",
    lema:["Hacer y callar","Frase que se atribuye a San Leonardo Murialdo."],
    habito:[["Negro (clerical)","oklch(0.2 0.01 260)"],["Blanco (cuello)","oklch(0.97 0.005 85)"]],
    datos:[
      ["Nombre","Congregación de San José (Josefinos de Murialdo)"],
      ["Fundador","San Leonardo Murialdo (1828 – 1900)"],
      ["Fundación","19 de marzo de 1873, Turín (Italia)"],
      ["En el mundo","462 miembros y 107 casas (fines de 2023)"],
      ["En Mendoza","Villa Nueva (Guaymallén) y otras parroquias"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Su nombre oficial es <strong>[[congregacion|Congregación]] de San José</strong>, y firman con la sigla <strong>C.S.I.</strong> Se los llama <strong>josefinos de Murialdo</strong>, para no confundirlos con otras congregaciones dedicadas a San José. ${MK.v}</p>
        <p>Eligieron a San José como patrono porque fue un trabajador y el que cuidó a Jesús cuando era chico: lo mismo que ellos quieren hacer con los jóvenes.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>San Leonardo Murialdo</strong> nació en Turín en 1828, en una familia acomodada. Estudió en San Sulpicio, en París, y fue sacerdote en la misma ciudad y la misma época que Don Bosco, de quien fue amigo. ${MK.v}</p>
        <ul class="dots">
          <li><strong>Colegio de los Artigianelli:</strong> se hizo cargo de esta obra para chicos pobres y huérfanos que aprendían un oficio. ${MK.v}</li>
          <li><strong>19 de marzo de 1873,</strong> día de San José: funda la congregación. ${MK.v}</li>
          <li><strong>1900:</strong> muere en Turín. ${MK.v}</li>
          <li><strong>1970:</strong> Pablo VI lo canoniza. ${MK.v}</li>
        </ul>
        <p class="note">Que dirigió un tiempo el Oratorio de San Luis, una de las obras de Don Bosco, es un dato de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1866</span><div class="ev"><b>Artigianelli</b>Murialdo toma la dirección del colegio para chicos pobres de Turín. ${MK.g}</div></li>
          <li><span class="y">1873</span><div class="ev"><b>Fundación</b>Nace la Congregación de San José, para dar continuidad a esa obra. ${MK.v}</div></li>
          <li><span class="y">1900</span><div class="ev"><b>Muerte del fundador</b>La congregación sigue creciendo en Italia y luego en América. ${MK.v}</div></li>
          <li><span class="y">≈1940</span><div class="ev"><b>Mendoza</b>Fundan el Hogar del Niño Obrero en Villa Nueva, Guaymallén, para 30 chicos huérfanos. ${MK.v}</div></li>
          <li><span class="y">1945</span><div class="ev"><b>Instituto Leonardo Murialdo</b>El hogar ya se había convertido en un colegio con unos 2.000 alumnos. ${MK.v}</div></li>
          <li><span class="y">1970</span><div class="ev"><b>Canonización</b>Murialdo es declarado santo. ${MK.v}</div></li>
        </ol>
        <p class="note">El año 1866 para los Artigianelli es de conocimiento general; no lo verifiqué en las fuentes de esta ficha.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>educar a los chicos y jóvenes pobres, especialmente a los que trabajan</strong>, como un padre. Murialdo quería formar buenos cristianos y buenos trabajadores al mismo tiempo.</p>
        <div class="cols">
          <div class="box"><h3>Escuela</h3><p>Colegios y escuelas técnicas.</p></div>
          <div class="box"><h3>Oficio</h3><p>Que el chico aprenda a ganarse la vida con dignidad.</p></div>
          <div class="box"><h3>Familia</h3><p>Hogares para chicos sin familia.</p></div>
          <div class="box"><h3>Parroquia</h3><p>Comunidades en barrios populares.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Dios me ama:</strong> Murialdo vivió muy marcado por la experiencia del amor personal y misericordioso de Dios, y la repetía como el centro de su fe.</li>
          <li><strong>San José:</strong> el trabajo humilde, el silencio y el cuidado.</li>
          <li><strong>Hacer y callar:</strong> hacer el bien sin buscar reconocimiento.</li>
          <li><strong>La paternidad:</strong> el educador como un padre que acompaña.</li>
        </ul>
        <p class="note">Descripción de conocimiento general sobre su espiritualidad.</p>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Colegios, escuelas de oficios, hogares, parroquias, oratorios y clubes deportivos. En Mendoza el club fue parte de la obra educativa desde el comienzo.</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>No tienen un hábito propio: los sacerdotes usan la ropa clerical común (camisa con cuello blanco o sotana negra).</p><p class="note">Dato de conocimiento general.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"v", html:`
        <div class="saints">
          <div class="saint"><b>San Leonardo Murialdo</b><span class="d">1828 – 1900 · Turín</span><p>Fundador. Canonizado por Pablo VI en 1970. ${MK.v}</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Juan Bosco</b><span class="d">1815 – 1888 · Turín</span><p>Amigo y compañero de Murialdo en el trabajo con los jóvenes pobres de Turín. Ver la ficha de los <a href="#salesianos">salesianos</a>.</p><div class="tags"><span>Amigo</span></div></div>
          <div class="saint"><b>San José</b><span class="d">Patrono</span><p>Modelo de trabajador y de padre.</p><div class="tags"><span>Patrono</span></div></div>
        </div>
        <p class="note">No sé si hay otros josefinos beatificados; no lo pude verificar.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como josefino</h3><p>Sacerdote o hermano religioso dedicado a los jóvenes.</p></div>
          <div class="box"><h3>Como laico</h3><p>Docentes, catequistas, exalumnos y voluntarios de sus obras.</p></div>
          <div class="box"><h3>En Mendoza</h3><p>Acercarse al Instituto Murialdo o a sus parroquias de Villa Nueva.</p></div>
          <div class="box"><h3>Desde el deporte</h3><p>El club también es un lugar de comunidad.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Buenos Aires:</strong> parroquia Cristo Obrero y San Blas. ${MK.v}</li>
          <li><strong>Mendoza:</strong> parroquias La Purísima y Sagrada Familia, en Villa Nueva, y Nuestra Señora de los Dolores y Tránsito de San José. ${MK.v}</li>
          <li><strong>Instituto Leonardo Murialdo</strong>, en Villa Nueva, Guaymallén. Nació del Hogar del Niño Obrero, en un terreno donado por Lucila Barrionuevo de Bombal. ${MK.v}</li>
          <li><strong>Club Leonardo Murialdo:</strong> antes Club Bombal. Sus equipos son “los Canarios”. Una de sus juveniles ganó en 1950 la Zona Mendoza del Campeonato Evita, y de sus inferiores salieron jugadores que llegaron a Europa, como Puche, Rinaldini y Pieruz. ${MK.v}</li>
        </ul>
        <p class="note">Mendoza Post (2020) describe a la comunidad del Murialdo en Mendoza como muy numerosa. Las parroquias son las que figuran en GCatholic; puede haber otras.</p>` }
    ],
    compartir:{
      frases:[
        ["Hacer y callar.","Atribuida a San Leonardo Murialdo"],
        ["Dios me ama.","Idea central de la espiritualidad de Murialdo"],
        ["Dejen que los niños vengan a mí.","Marcos 10,14"]
      ],
      anecdotas:[
        ["Dos amigos en Turín","Murialdo y Don Bosco trabajaron en la misma ciudad, con el mismo tipo de chicos y en la misma época. En vez de competir, se ayudaron. ${MK.v}"],
        ["De 30 huérfanos a 2.000 alumnos","El Hogar del Niño Obrero de Villa Nueva empezó con 30 chicos. Pocos años después, en 1945, el instituto tenía unos 2.000 alumnos. ${MK.v}"]
      ],
      preguntas:[
        "“Hacer y callar”: ¿te cuesta hacer el bien sin que nadie se entere?",
        "¿Sentís de verdad que Dios te ama a vos, personalmente?",
        "¿Qué chicos de tu barrio necesitarían hoy a alguien como Murialdo?",
        "¿Puede un club de fútbol ser un lugar de evangelización? ¿Cómo?"
      ],
      dinamica:"“Hacer y callar” durante una semana: cada uno elige un gesto concreto de servicio que nadie tiene que saber. En el próximo encuentro no se cuenta qué se hizo, sino cómo se vivió hacerlo en silencio."
    },
    fuentes:[
      ["GCatholic — Congregation of St. Joseph (C.S.I.)","https://gcatholic.org/orders/085"],
      ["Mendoza Post (2020) — A medio siglo de la canonización de Leonardo Murialdo","https://www.mendozapost.com/nota/151278-a-medio-siglo-de-la-canonizacion-de-leonardo-murialdo/"],
      ["Los Andes (2017) — Leonardo Murialdo, de las aulas a los potreros","https://www.losandes.com.ar/leonardo-murialdo-de-las-aulas-a-los-potreros"]
    ]
  },

  /* ---------------------------------------------------- HERMANOS MARISTAS */
  maristas: {
    familia:"apostolica",
    nombre:"Hermanos Maristas",
    latin:"Fratres Maristae a Scholis · F.M.S.",
    resumen:"Congregación de hermanos religiosos (no sacerdotes) fundada en 1817 en Francia por San Marcelino Champagnat para educar a los chicos y jóvenes, sobre todo a los más olvidados. Llegaron a la Argentina en 1903 y fundaron temprano un colegio en Mendoza; de su obra nació también el Marista Rugby Club.",
    tarjeta:"Hermanos educadores con el estilo de María: sencillez, humildad y cercanía. En Mendoza desde comienzos del siglo XX.",
    lema:["Todo a Jesús por María, todo a María para Jesús","Lema marista tradicional."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"],["Blanco (cuello)","oklch(0.97 0.005 85)"]],
    datos:[
      ["Nombre","Hermanitos de María (Hermanos Maristas de la Enseñanza)"],
      ["Fundador","San Marcelino Champagnat (1789 – 1840)"],
      ["Fundación","2 de enero de 1817, La Valla (Francia)"],
      ["En el mundo","2.423 miembros y 485 casas (fines de 2024)"],
      ["En la Argentina","Desde 1903"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El fundador los llamó <strong>Hermanitos de María</strong>. Hoy se los conoce como <strong>Hermanos Maristas</strong> o <strong>Hermanos Maristas de la Enseñanza</strong>, y firman con la sigla <strong>F.M.S.</strong></p>
        <p>Son una congregación de <strong>[[hermano-religioso|hermanos]]</strong>: hacen los [[votos|votos]] religiosos pero no son sacerdotes. Toda su vida está dedicada a educar.</p>
        <p class="note">Nombre y sigla de conocimiento general.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>San Marcelino Champagnat</strong> nació en 1789 en Marlhes, Francia, en plena Revolución Francesa. De chico casi no sabía leer y le costó mucho estudiar para ser sacerdote.</p>
        <ul class="dots">
          <li><strong>1816:</strong> es ordenado sacerdote y enviado como vicario a La Valla. ${MK.g}</li>
          <li><strong>2 de enero de 1817:</strong> funda la congregación en La Valla con dos jóvenes. ${MK.v}</li>
          <li><strong>1840:</strong> muere en el Hermitage, la casa que construyó para los hermanos. ${MK.g}</li>
          <li><strong>1999:</strong> Juan Pablo II lo canoniza. ${MK.g}</li>
        </ul>
        <p class="note">La fecha de fundación está verificada en GCatholic. Los otros datos son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1817</span><div class="ev"><b>La Valla</b>Champagnat reúne a los primeros hermanos para enseñar a los chicos del campo. ${MK.v}</div></li>
          <li><span class="y">1840</span><div class="ev"><b>Muerte del fundador</b>Los hermanos ya eran varios cientos. ${MK.g}</div></li>
          <li><span class="y">1903</span><div class="ev"><b>Argentina</b>El 25 de septiembre llegan a Buenos Aires los primeros 7 hermanos, desde Barcelona. Un mes después llegan otros 7. ${MK.v}</div></li>
          <li><span class="y">1903</span><div class="ev"><b>Primer colegio</b>San Vicente de Paul, una escuela gratuita en Buenos Aires. ${MK.v}</div></li>
          <li><span class="y">1904</span><div class="ev"><b>Luján</b>Colegio en Luján. El hermano Agritius funda los colegios de Luján y de Mendoza. ${MK.v}</div></li>
          <li><span class="y">1961</span><div class="ev"><b>Marista Rugby Club</b>El hermano Primo Brunato lo funda en Mendoza. ${MK.v}</div></li>
        </ol>
        <p class="note">No sé el año exacto de fundación del colegio de Mendoza.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>dar a conocer a Jesús y hacerlo amar</strong> educando a los chicos y jóvenes, sobre todo a los que menos oportunidades tienen. Champagnat lo decía así: para educar a los chicos, hay que amarlos, y amarlos a todos por igual.</p>
        <div class="cols">
          <div class="box"><h3>Educación</h3><p>Colegios de todos los niveles.</p></div>
          <div class="box"><h3>Los olvidados</h3><p>Chicos de lugares pobres o alejados.</p></div>
          <div class="box"><h3>Presencia</h3><p>Estar con los chicos, también en el recreo y en el deporte.</p></div>
          <div class="box"><h3>Con María</h3><p>Educar con su estilo de madre.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Las tres violetas:</strong> humildad, sencillez y modestia. Champagnat las comparaba con esa flor pequeña que perfuma sin hacerse ver.</li>
          <li><strong>María, la Buena Madre:</strong> así la llamaba el fundador.</li>
          <li><strong>La presencia de Dios:</strong> vivir sabiendo que Dios está siempre.</li>
          <li><strong>El espíritu de familia:</strong> los hermanos y los alumnos como una casa.</li>
          <li><strong>El amor al trabajo:</strong> Champagnat construyó con sus propias manos la casa de los hermanos.</li>
        </ul>
        <p class="note">Rasgos de conocimiento general de la espiritualidad marista.</p>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Colegios, escuelas para chicos pobres, centros juveniles, grupos de pastoral, misiones y clubes. Muchos laicos comparten hoy la misión en los colegios.</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Tradicionalmente usaban sotana negra con un cordón y un cuello blanco. Hoy la mayoría viste de civil o con camisa sencilla.</p><p class="note">Dato de conocimiento general.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Marcelino Champagnat</b><span class="d">1789 – 1840 · Francia</span><p>Fundador. Canonizado en 1999.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Mártires maristas de España</b><span class="d">1936 – 1939</span><p>Hermanos asesinados durante la Guerra Civil Española, beatificados en varios grupos.</p><div class="tags"><span>Mártires</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general; no verifiqué cuántos son ni las fechas de cada beatificación.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como hermano</h3><p>Para varones que quieren consagrar la vida a educar, sin ser sacerdotes.</p></div>
          <div class="box"><h3>Como laico marista</h3><p>Docentes, exalumnos y familias que comparten el carisma.</p></div>
          <div class="box"><h3>Jóvenes</h3><p>Grupos de pastoral juvenil en los colegios.</p></div>
          <div class="box"><h3>En Mendoza</h3><p>Acercarse al colegio marista o al club.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Argentina:</strong> desde 1903, con su primer colegio en Buenos Aires y otro en Luján desde 1904. ${MK.v}</li>
          <li><strong>Mendoza:</strong> el hermano Agritius fundó el colegio marista de Mendoza en los primeros años. ${MK.v}</li>
          <li><strong>Marista Rugby Club:</strong> fundado en 1961 por el hermano Primo Brunato; hoy está en La Carrodilla, Luján de Cuyo. ${MK.v}</li>
          <li><strong>San Rafael:</strong> una nota de 2013 menciona un “Colegio San Rafael de los Hermanos Maristas”. ${MK.p}</li>
        </ul>
        <p class="note">No sé cuántos colegios maristas hay hoy en Mendoza ni sus nombres exactos.</p>` }
    ],
    compartir:{
      frases:[
        ["Para educar a los niños, hay que amarlos, y amarlos a todos por igual.","Atribuida a San Marcelino Champagnat"],
        ["Todo a Jesús por María, todo a María para Jesús.","Lema marista"],
        ["No puedo ver a un niño sin desear decirle cuánto lo ama Jesucristo.","Atribuida a San Marcelino Champagnat"]
      ],
      anecdotas:[
        ["El chico moribundo","Champagnat fue a confesar a un chico de 17 años que se estaba muriendo y se dio cuenta de que no sabía nada de Dios. Esa experiencia lo decidió a fundar hermanos que enseñaran a los chicos del campo. ${MK.g}"],
        ["Un albañil fundador","Champagnat trabajó con sus propias manos, con los hermanos, en la construcción del Hermitage, su casa madre. ${MK.g}"]
      ],
      preguntas:[
        "Humildad, sencillez y modestia: ¿cuál te cuesta más?",
        "¿Quién fue para vos un educador que te hizo sentir amado?",
        "¿Qué significa “amarlos a todos por igual” en un grupo donde hay chicos que caen mejor que otros?",
        "¿Cómo podés hacer el bien como una violeta: sin hacerte ver?"
      ],
      dinamica:"Cada uno escribe el nombre de un docente, catequista o entrenador que lo marcó y una frase de agradecimiento. Se reza por ellos, y quien pueda le hace llegar el mensaje esa semana."
    },
    fuentes:[
      ["GCatholic — Marist Brothers of the Schools (F.M.S.)","https://gcatholic.org/orders/231"],
      ["Champagnat.org — Centenary of Marist presence in Argentina","https://champagnat.org/en/publicacoes/centenary-of-marist-presence-argentina/"],
      ["Wikipedia — Marista Rugby Club","https://en.wikipedia.org/wiki/Marista_Rugby_Club"]
    ]
  },

  /* ==================================================== APOSTÓLICA */
  misericordia: {
    familia:"apostolica",
    nombre:"Hermanas de la Misericordia",
    latin:"Sisters of Mercy · R.S.M.",
    resumen:"Congregación fundada en Dublín por Catalina McAuley, una laica que heredó una fortuna y la usó para abrir una casa para mujeres y chicos pobres. Poco después de su muerte, en 1841, las hermanas llegaron a varios países, entre ellos la Argentina, donde trabajaron con la comunidad irlandesa.",
    tarjeta:"Misericordia concreta con las mujeres, los chicos y los pobres. Raíces irlandesas en la Argentina.",
    lema:["Misericordia","El nombre de la casa que abrió Catalina McAuley en 1827."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Blanco (toca)","oklch(0.97 0.005 85)"]],
    datos:[
      ["Nombre","Hermanas de la Misericordia"],
      ["Fundadora","Catalina McAuley (1778 – 1841)"],
      ["Casa de la Misericordia","24 de septiembre de 1827, Dublín"],
      ["Congregación","1831"],
      ["En América","Más de 4.500 hermanas"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Hermanas de la Misericordia</strong> (en inglés, <em>Sisters of Mercy</em>). La primera casa se llamó Casa de la Misericordia porque se inauguró el 24 de septiembre, fiesta de Nuestra Señora de la Merced. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundadora y año", estado:"v", html:`
        <p><strong>Catalina McAuley</strong> nació cerca de Dublín en 1778. Quedó huérfana y vivió con parientes que no la dejaban practicar su fe. En 1824 heredó una gran fortuna de la familia a la que acompañaba. ${MK.v}</p>
        <ul class="dots">
          <li><strong>1827:</strong> abre la Casa de la Misericordia para mujeres y chicos pobres. ${MK.v}</li>
          <li><strong>1830 – 1831:</strong> por consejo de un sacerdote, hace el noviciado con dos compañeras y funda la congregación. ${MK.v}</li>
          <li><strong>1841:</strong> muere; ya hay 150 hermanas y 14 casas. ${MK.v}</li>
        </ul>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1827</span><div class="ev"><b>Dublín</b>Casa de la Misericordia. ${MK.v}</div></li>
          <li><span class="y">1831</span><div class="ev"><b>Congregación</b>${MK.v}</div></li>
          <li><span class="y">1841</span><div class="ev"><b>Expansión</b>Terranova, Nueva Zelanda, Estados Unidos, Argentina y Australia. ${MK.v}</div></li>
          <li><span class="y">≈1856</span><div class="ev"><b>Buenos Aires</b>Con el padre Antonio Fahy construyen una escuela y un hospital para la comunidad irlandesa. ${MK.v}</div></li>
        </ol>
        <p class="note">${MK.p} El año exacto de llegada a la Argentina no lo pude verificar; 1856 es la fecha que suele mencionarse.</p>` },
      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`<p>El <strong>servicio a los pobres</strong>, sobre todo a las mujeres, los chicos y las familias necesitadas, con obras de educación, salud y asistencia. ${MK.v}</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>La misericordia</strong> como forma de vida.</li><li><strong>Contemplación y acción</strong> juntas.</li><li><strong>La hospitalidad</strong> irlandesa.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Colegios, hospitales, hogares, trabajo social y defensa de las mujeres.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Tradicionalmente, hábito negro con toca blanca. Hoy muchas visten de civil.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<div class="saints"><div class="saint"><b>Venerable Catalina McAuley</b><span class="d">1778 – 1841 · Irlanda</span><p>Fundadora. Declarada venerable en 1990.</p><div class="tags"><span>Fundadora</span></div></div></div><p class="note">El título de venerable es conocimiento general.</p>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Como hermana o como asociado laico de la misericordia.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`<p>Trabajaron en Buenos Aires con el padre Fahy, figura central de la comunidad irlandesa. ${MK.v}</p><p class="note">${MK.p} No encontré datos sobre su presencia actual en la Argentina ni en Mendoza. Ojo: hay otras congregaciones con nombres parecidos (por ejemplo, las Hermanas de Nuestra Señora de la Misericordia).</p>` }
    ],
    compartir:{
      frases:[["Felices los misericordiosos, porque obtendrán misericordia.","Mateo 5,7"],["Los pobres necesitan ayuda hoy, no la semana que viene.","Atribuida a Catalina McAuley"]],
      anecdotas:[["Una herencia bien usada","Catalina recibió una fortuna enorme para la época. En vez de guardarla, alquiló una casa en un buen barrio de Dublín y la abrió para las mujeres y los chicos pobres. ${MK.v}"]],
      preguntas:["Si heredaras mucha plata, ¿qué harías?","¿Qué es para vos la misericordia, en concreto?","¿A quién necesitás ayudar hoy y no la semana que viene?"],
      dinamica:"Hacer una lista de las 14 obras de misericordia y que cada uno elija una para practicar esa semana."
    },
    fuentes:[
      ["Catholic.net — Catalina McAuley","https://www.es.catholic.net/op/articulos/6130/cat/171/catalina-mcauley.html"],
      ["Cancillería — 100 años de amistad Argentina–Irlanda","https://cancilleria.gob.ar/userfiles/2017/100_anos_de_amistad_argentina_irlanda.pdf"]
    ]
  },

  "siervas-jesus": {
    familia:"apostolica",
    nombre:"Siervas de Jesús de la Caridad",
    latin:"Siervas de Jesús",
    resumen:"Congregación fundada en Bilbao en 1871 por Santa María Josefa Sancho de Guerra para cuidar a los enfermos y a los pobres, muchas veces en sus propias casas y de noche. Cuando murió la fundadora ya tenían 42 casas y más de mil hermanas.",
    tarjeta:"Cuidar a los enfermos, también en su casa y de noche, viendo en ellos a Jesús.",
    lema:["Ya está todo","Últimas palabras de Santa María Josefa."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Blanco","oklch(0.97 0.005 85)"]],
    datos:[
      ["Nombre","Siervas de Jesús de la Caridad"],
      ["Fundadora","Santa María Josefa Sancho de Guerra (1842 – 1912)"],
      ["Fundación","1871, Bilbao (España)"],
      ["Aprobación pontificia","1886"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`<p><strong>Siervas de Jesús de la Caridad</strong>, conocidas como <strong>Siervas de Jesús</strong>. No confundir con las Siervas de María, de donde salió la fundadora.</p>` },
      { id:"fundador", titulo:"Fundadora y año", estado:"v", html:`
        <p><strong>María Josefa Sancho de Guerra</strong> nació en Vitoria en 1842. Fue religiosa de las Siervas de María, y en <strong>1871</strong> salió para fundar en Bilbao una nueva congregación dedicada al cuidado de los enfermos. ${MK.v}</p>
        <ul class="dots"><li><strong>1874:</strong> aprobación diocesana; <strong>1886:</strong> aprobación pontificia. ${MK.v}</li><li><strong>1912:</strong> muere en Bilbao. ${MK.v}</li><li><strong>1992:</strong> beatificada; <strong>2000:</strong> canonizada, ambas por Juan Pablo II. ${MK.v}</li></ul>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`<ol class="timeline"><li><span class="y">1871</span><div class="ev"><b>Bilbao</b>Fundación. ${MK.v}</div></li><li><span class="y">1886</span><div class="ev"><b>Roma</b>Aprobación pontificia. ${MK.v}</div></li><li><span class="y">1912</span><div class="ev"><b>Expansión</b>42 casas y más de mil hermanas, dentro y fuera de España. ${MK.v}</div></li><li><span class="y">2000</span><div class="ev"><b>Santa</b>Canonización de la fundadora. ${MK.v}</div></li></ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`<p>Formar hermanas <strong>“especialmente para el cuidado de los enfermos y de los pobres”</strong>. ${MK.v}</p><p>Son conocidas por acompañar a los enfermos en sus casas y en hospitales, también de noche. ${MK.g}</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>Jesús en el enfermo</strong>.</li><li><strong>La Eucaristía</strong> como fuerza para servir.</li><li><strong>La disponibilidad</strong> de día y de noche.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Asistencia a enfermos a domicilio, hospitales, residencias de ancianos y cuidados paliativos.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Hábito oscuro con toca; varía según el país.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"v", html:`<div class="saints"><div class="saint"><b>Santa María Josefa Sancho de Guerra</b><span class="d">1842 – 1912 · España</span><p>Fundadora. Canonizada el 1 de octubre de 2000. ${MK.v}</p><div class="tags"><span>Fundadora</span></div></div></div>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Como religiosa dedicada a los enfermos, o como voluntario en sus obras.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`<p>${MK.p} No encontré datos confiables sobre comunidades de las Siervas de Jesús en la Argentina ni en Mendoza. Puede que estén y no figure en la web.</p>` }
    ],
    compartir:{
      frases:[["Ya está todo.","Últimas palabras de Santa María Josefa (1912)"],["Estuve enfermo y me visitaron.","Mateo 25,36"]],
      anecdotas:[["Salir para fundar","María Josefa ya era religiosa, pero sintió que Dios le pedía algo distinto: dedicarse por completo a los enfermos. Dejó su congregación y empezó otra. ${MK.v}"]],
      preguntas:["¿Conocés a alguien enfermo o anciano que esté solo?","¿Qué te cuesta del contacto con el sufrimiento?","¿Qué significa “ya está todo” al final de una vida?"],
      dinamica:"Organizar una visita en grupo a un hogar de ancianos o a un enfermo de la comunidad. Antes, rezar juntos; después, compartir qué sintió cada uno."
    },
    fuentes:[["Catholic.net — Santa María Josefa Sancho de Guerra","https://es.catholic.net/op/articulos/61565/mara-josefa-del-corazn-de-jess-sancho-de-guerra-santa.html"]]
  }

});
