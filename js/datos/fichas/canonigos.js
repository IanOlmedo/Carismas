/* Fichas de la familia "canonigos". Cada ficha sigue la estructura descripta en CLAUDE.md. */
Object.assign(FICHAS, {

  /* ---------------------------------------------------- PREMONSTRATENSES */
  premonstratenses: {
    familia:"canonigos",
    nombre:"Premonstratenses",
    latin:"Orden de los Canónigos Regulares Premonstratenses · Norbertinos",
    resumen:"San Norberto era un clérigo rico y mundano de la corte imperial alemana. Un rayo que casi lo mata lo hizo cambiar de vida. Fundó una comunidad de sacerdotes que vivieran como monjes, con la liturgia en el centro, pero abiertos al pueblo para predicar y atender parroquias. Visten de blanco y por eso se los conoce como “canónigos blancos”.",
    tarjeta:"Sacerdotes en comunidad: liturgia solemne y trabajo pastoral. San Norberto y los “canónigos blancos”.",
    lema:["Ad omne opus bonum parati","“Preparados para toda obra buena.” Lema de la Orden, tomado de 2 Timoteo 3,17."],
    habito:[["Blanco","oklch(0.97 0.005 85)"],["Blanco (muceta)","oklch(0.93 0.01 85)"]],
    datos:[
      ["Siglas","O.Praem."],
      ["Fundador","San Norberto de Xanten (c. 1080 – 1134)"],
      ["Fundación","1120, en Prémontré (Francia)"],
      ["Aprobación","1126, papa Honorio II"],
      ["Fiesta principal","6 de junio, San Norberto"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Orden de los Canónigos Regulares Premonstratenses</strong> (O.Praem.). El nombre viene de <strong>Prémontré</strong>, un valle del norte de Francia, cerca de Laon, donde se fundó la primera comunidad. También se los llama <strong>norbertinos</strong>, por su fundador, y en Inglaterra e Irlanda, <strong>“canónigos blancos”</strong> por su hábito. ${MK.v}</p>
        <p>Son el ejemplo principal de [[canonigos-regulares|canónigos regulares]]: sacerdotes que viven en comunidad bajo la Regla de San Agustín, con votos religiosos, unidos a una iglesia concreta a la que sirven. A sus casas se las llama [[canonia|canonías]] o abadías.</p>
        <p>Tienen también una rama de canonesas (monjas premonstratenses) y laicos asociados, a veces llamados terciarios.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Norberto</strong> nació hacia 1080 en Xanten, en la actual Alemania, en una familia noble. Fue canónigo de la iglesia de Xanten y capellán del emperador Enrique V. Vivía con lujo y sin mucha preocupación por Dios.</p>
        <ul class="dots">
          <li><strong>1115:</strong> durante una tormenta, un rayo cae junto a él y lo tira del caballo. Según sus biógrafos, oyó una voz que le preguntaba de qué huía. Cambia de vida, se hace sacerdote y empieza a predicar como penitente itinerante.</li>
          <li><strong>1120:</strong> con trece compañeros funda la comunidad de Prémontré, con apoyo del obispo de Laon. ${MK.v}</li>
          <li><strong>1126:</strong> el papa Honorio II aprueba la Orden, que ya tenía nueve casas. Ese mismo año Norberto es nombrado arzobispo de Magdeburgo. ${MK.v}</li>
          <li><strong>1134:</strong> muere en Magdeburgo. Es canonizado en 1582. ${MK.v}</li>
        </ul>
        <p class="note">Las fechas de fundación, aprobación y muerte están verificadas. El episodio del rayo viene de las biografías antiguas de Norberto.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <p>En el siglo XI, el papa Gregorio VII impulsó una reforma de la Iglesia. Una de sus ideas fue que los sacerdotes de las catedrales e iglesias importantes vivieran en comunidad, con pobreza y oración común, como los apóstoles. Así nacieron los canónigos regulares. Norberto llevó esa idea a su forma más fuerte.</p>
        <ol class="timeline">
          <li><span class="y">1115</span><div class="ev"><b>La conversión</b>El rayo, la caída del caballo y el cambio de vida.</div></li>
          <li><span class="y">1120</span><div class="ev"><b>Prémontré</b>Norberto y trece compañeros empiezan la vida común en un valle aislado del norte de Francia.</div></li>
          <li><span class="y">1121</span><div class="ev"><b>La primera profesión</b>En Navidad, los primeros compañeros hacen su profesión según la Regla de San Agustín.</div></li>
          <li><span class="y">1126</span><div class="ev"><b>Aprobación</b>Honorio II confirma la Orden. Norberto se va a Magdeburgo como arzobispo y deja la conducción a su discípulo Hugo de Fosses.</div></li>
          <li><span class="y">s. XII–XIII</span><div class="ev"><b>Expansión</b>La Orden se extiende por toda Europa, sobre todo en Alemania, Bélgica, Bohemia, Hungría e Inglaterra, y evangeliza regiones del este europeo.</div></li>
          <li><span class="y">s. XVIII–XIX</span><div class="ev"><b>Supresiones</b>La Revolución Francesa y las leyes contra los conventos en Europa cierran casi todas las abadías. La casa madre de Prémontré nunca se recuperó.</div></li>
          <li><span class="y">s. XIX–XX</span><div class="ev"><b>Resurgimiento</b>La Orden renace desde Bélgica, Austria y Bohemia, y funda casas en Estados Unidos, India, África y Sudamérica.</div></li>
          <li><span class="y">2024</span><div class="ev"><b>Hoy</b>Más de 1.600 miembros en todo el mundo. ${MK.v}</div></li>
        </ol>
        <p class="note">La cifra de 2024 está verificada. Las demás fechas son de conocimiento general en la historia de la Orden.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] premonstratense une dos cosas que en la Edad Media solían ir separadas: la <strong>vida contemplativa en comunidad</strong>, como los monjes, y el <strong>servicio pastoral al pueblo</strong>, como los sacerdotes de parroquia.</p>
        <div class="cols">
          <div class="box"><h3>Liturgia</h3><p>La celebración solemne de la Eucaristía y de la [[liturgia-horas|Liturgia de las Horas]] es el centro de cada día.</p></div>
          <div class="box"><h3>Vida común</h3><p>Como la primera comunidad de Jerusalén: todo en común, un solo corazón. Siguen la Regla de San Agustín.</p></div>
          <div class="box"><h3>Pastoral</h3><p>Desde la abadía atienden parroquias, escuelas y santuarios de la región.</p></div>
          <div class="box"><h3>Estabilidad local</h3><p>Como los benedictinos, cada canónigo pertenece a una canonía concreta, con la que se compromete de por vida.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La Eucaristía:</strong> San Norberto es llamado “apóstol de la Eucaristía”. En Amberes combatió una herejía que negaba la presencia real de Cristo, y suele representarse con una custodia en la mano.</li>
          <li><strong>María:</strong> la tradición dice que la Virgen le mostró a Norberto el hábito blanco que debían usar. ${MK.t}</li>
          <li><strong>La vida apostólica:</strong> imitar a la comunidad de los Hechos de los Apóstoles (2,42-47 y 4,32).</li>
          <li><strong>Penitencia y conversión</strong>, como Norberto después de su caída.</li>
          <li><strong>La belleza de la liturgia</strong> como forma de anunciar a Dios.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Parroquias</strong> alrededor de cada abadía. Es su apostolado más característico.</li>
          <li><strong>Educación:</strong> colegios y universidades, como St. Norbert College en Estados Unidos.</li>
          <li><strong>Cultura:</strong> abadías históricas como Strahov, en Praga, con una de las bibliotecas más famosas de Europa.</li>
          <li><strong>Hospitalidad y retiros.</strong></li>
          <li><strong>Misiones</strong> en India, África y América.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"v", html:`
        <p>El [[habito|hábito]] es <strong>completamente blanco</strong>, de lana sin teñir: por eso se los llama “canónigos blancos”. ${MK.v}</p>
        <ul class="dots">
          <li><strong>Túnica blanca</strong> con cinturón (o fajín) blanco.</li>
          <li><strong>[[escapulario|Escapulario]] blanco.</strong></li>
          <li><strong>Muceta:</strong> una pequeña capa sobre los hombros, que también es blanca; en el coro, en algunas casas, usan además una sobrepelliz (roquete).</li>
          <li><strong>Sombrero o birrete blanco</strong> en algunas tradiciones.</li>
        </ul>
        <p class="note">Los detalles del hábito de coro (muceta, roquete, birrete) son de conocimiento general y varían entre canonías.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Norberto de Xanten</b><span class="d">c. 1080 – 1134 · Alemania y Francia</span><p>Fundador, predicador, arzobispo de Magdeburgo. Apóstol de la Eucaristía.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Hermann José</b><span class="d">c. 1150 – 1241 · Alemania</span><p>Canónigo de Steinfeld. Desde niño le llevaba una manzana a la imagen de la Virgen; místico y poeta mariano.</p><div class="tags"><span>Mariano</span></div></div>
          <div class="saint"><b>San Godofredo de Cappenberg</b><span class="d">c. 1097 – 1127 · Alemania</span><p>Conde riquísimo que entregó su castillo a Norberto para hacerlo abadía y se hizo canónigo. Murió a los 30 años.</p><div class="tags"><span>Joven</span><span>Laico converso</span></div></div>
          <div class="saint"><b>San Isfrido de Ratzeburg</b><span class="d">† 1204 · Alemania</span><p>Canónigo premonstratense y obispo, misionero en el norte de Alemania.</p><div class="tags"><span>Obispo</span></div></div>
          <div class="saint"><b>Beato Hugo de Fosses</b><span class="d">c. 1093 – 1164 · Francia</span><p>Primer discípulo de Norberto y primer abad de Prémontré. Organizó la Orden.</p><div class="tags"><span>Primer abad</span></div></div>
        </div>
        <p class="note">Norberto, Hermann José, Godofredo e Isfrido figuran como santos de la Orden en la fuente consultada. Los demás datos biográficos son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como canónigo</h3><p>Para varones llamados al sacerdocio en comunidad. Se entra a una canonía concreta.</p></div>
          <div class="box"><h3>Como canonesa</h3><p>Para mujeres, en los monasterios de canonesas premonstratenses, de vida más contemplativa.</p></div>
          <div class="box"><h3>Como laico</h3><p>Algunas canonías tienen laicos asociados (terciarios) que se vinculan a su vida y oración.</p></div>
          <div class="box"><h3>Como visitante</h3><p>Participar de la liturgia en una abadía norbertina es la mejor forma de conocer este carisma.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Contacto con una canonía</strong> y visitas.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Se recibe el hábito blanco.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]]</strong> y estudios de filosofía y teología.</div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]]</strong> y ordenación sacerdotal.</div></li>
        </ol>
        <p class="note">Los plazos y requisitos los fija cada canonía.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p>En Sudamérica, la Orden tiene casas en <strong>Brasil y Perú</strong>, según los datos de 2012 de la fuente consultada. La Argentina no aparece en esa lista. ${MK.v}</p>
        <p class="note">${MK.p} No encontré ninguna comunidad premonstratense en la Argentina ni en Mendoza. Puede existir alguna presencia pequeña o reciente que no figure en internet, pero no la pude confirmar. Para un joven argentino interesado, el camino sería contactar a las casas de Brasil o Perú.</p>` }
    ],
    compartir:{
      frases:[
        ["Preparados para toda obra buena.","Lema premonstratense, 2 Timoteo 3,17"],
        ["La multitud de los creyentes tenía un solo corazón y una sola alma.","Hechos 4,32, texto que inspira la vida de los canónigos"],
        ["Apártate del mal y haz el bien; busca la paz y corre tras ella.","Salmo 34,15. Según sus biógrafos, es la respuesta que Norberto recibió cuando preguntó qué quería Dios de él"]
      ],
      anecdotas:[
        ["El rayo","Norberto cabalgaba con un sirviente cuando estalló una tormenta. Un rayo cayó delante de su caballo, que lo tiró al suelo. Tardó un rato en volver en sí. Al recuperarse, preguntó qué quería Dios de él. Su vida cambió desde ese día. ${MK.g}"],
        ["Las manzanas de Hermann","San Hermann José, de chico, le ofrecía una manzana a la imagen de la Virgen con el Niño en una iglesia de Colonia. La tradición cuenta que un día la imagen extendió la mano y la tomó. ${MK.t}"],
        ["El conde que regaló su castillo","Godofredo de Cappenberg era uno de los nobles más ricos de Westfalia. Después de escuchar predicar a Norberto, convirtió su castillo en abadía y se hizo canónigo, a pesar de la oposición de su familia. ${MK.g}"]
      ],
      preguntas:[
        "Norberto vivía con todo resuelto y no pensaba en Dios. ¿Hizo falta un “rayo” en tu vida para que te replantees algo?",
        "Los canónigos unen oración y servicio. ¿Tu fe se alimenta de la oración y se expresa en ayuda concreta? ¿Falta alguna de las dos?",
        "“Un solo corazón y una sola alma.” ¿Cómo sería tu grupo si viviera así?",
        "¿Qué lugar ocupa la misa en tu semana? ¿Qué te ayudaría a vivirla mejor?"
      ],
      dinamica:"Preparar juntos una misa o una adoración eucarística cuidando cada detalle: cantos, lecturas, silencio, flores. Después, compartir cómo cambió la experiencia de rezar cuando se preparó con amor, al estilo de los canónigos."
    },
    fuentes:[
      ["Wikipedia — Premonstratensians","https://en.wikipedia.org/wiki/Premonstratensians"],
      ["Monasterio de Strahov — Historia de la Orden","https://www.strahovskyklaster.cz/en/norbertines/history-of-the-order"],
      ["Papa Francisco — Carta al abad general premonstratense (2021)","https://press.vatican.va/content/francesco/es/letters/2021/documents/papa-francesco_20210606_lettera-abate-premostratensi.pdf"]
    ]
  },

  /* ==================================================== CANÓNIGOS */
  letran: {
    familia:"canonigos",
    nombre:"Canónigos Regulares de Letrán",
    latin:"Canonici Regulares Lateranenses · C.R.L.",
    resumen:"Sacerdotes que viven en comunidad bajo la regla de San Agustín, en la tradición de los canónigos que el Sínodo de Letrán de 1059 organizó. Visten de blanco, como el Papa en su ropa diaria. Tienen dos iglesias en la Argentina: en Rosario y en Buenos Aires.",
    tarjeta:"Vida común de sacerdotes, liturgia y parroquia. Presentes en Rosario y Buenos Aires.",
    lema:["Una sola alma y un solo corazón en Dios","Regla de San Agustín."],
    habito:[["Blanco","oklch(0.97 0.005 85)"]],
    datos:[
      ["Nombre","Canónigos Regulares de la Congregación del Santísimo Salvador de Letrán"],
      ["Raíz","Sínodo de Letrán, 1059"],
      ["Uniones","1254 y 1823"],
      ["En el mundo","182 miembros y 33 casas (fines de 2024)"],
      ["En la Argentina","Rosario y Buenos Aires"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Canónigos Regulares de Letrán</strong>, sigla <strong>C.R.L.</strong> Son [[canonigos-regulares|canónigos regulares]]: sacerdotes que viven en comunidad con votos. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p>No tienen un fundador único. Remontan su origen a las reformas del clero del siglo IV, con San Martín de Tours y San Eusebio de Vercelli, y a la regla de San Agustín. El <strong>Sínodo de Letrán de 1059</strong> organizó y reconoció a estas comunidades. ${MK.v}</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">s. IV</span><div class="ev"><b>Primeras comunidades</b>Clérigos que viven juntos. ${MK.v}</div></li>
          <li><span class="y">1059</span><div class="ev"><b>Sínodo de Letrán</b>Reconocimiento. ${MK.v}</div></li>
          <li><span class="y">1254</span><div class="ev"><b>Unión</b>Con los canónigos de Santa María de Crescenzago. ${MK.v}</div></li>
          <li><span class="y">1823</span><div class="ev"><b>Unión</b>Con la congregación del Santísimo Salvador de Bolonia. ${MK.v}</div></li>
        </ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`<p>Unir la <strong>vida común</strong> de los monjes con el <strong>ministerio sacerdotal</strong>: celebrar la liturgia con solemnidad y servir a los fieles en parroquias.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>San Agustín</strong> y la caridad fraterna.</li><li><strong>La liturgia</strong> como centro de la vida.</li><li><strong>La comunidad</strong> al servicio de la Iglesia local.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Parroquias, liturgia y formación.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"v", html:`<p>Totalmente blanco: sotana, faja, muceta y solideo, igual a lo que usa el Papa a diario. ${MK.v}</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Agustín</b><span class="d">354 – 430</span><p>Autor de la regla.</p><div class="tags"><span>Regla</span></div></div>
          <div class="saint"><b>San Martín de Tours</b><span class="d">s. IV</span><p>Uno de los iniciadores de la vida común del clero.</p><div class="tags"><span>Origen</span></div></div>
        </div>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Para varones llamados al sacerdocio en vida comunitaria. En la Argentina, contactando sus parroquias.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Rosario:</strong> iglesia Nuestra Señora de Pompeya. ${MK.v}</li>
          <li><strong>Buenos Aires:</strong> iglesia Nuestra Señora del Valle. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré presencia en Mendoza.</p>` }
    ],
    compartir:{
      frases:[["¡Qué bueno y agradable es que los hermanos vivan unidos!","Salmo 133,1"],["Vivan unánimes en la casa y tengan una sola alma y un solo corazón en Dios.","Regla de San Agustín"]],
      anecdotas:[],
      preguntas:["¿Qué tiene de difícil vivir en comunidad?","¿Por qué creés que la Iglesia pidió a sus sacerdotes vivir juntos?"],
      dinamica:"Cada uno escribe en un papel una cosa que le cuesta de la convivencia en su casa y una cosa que agradece. Se comparten solo las que agradecen."
    },
    fuentes:[
      ["GCatholic — Canons Regular of the Lateran (C.R.L.)","https://gcatholic.org/orders/077"],
      ["Wikipedia — Canons Regular of the Lateran","https://en.wikipedia.org/wiki/Canons_Regular_of_the_Lateran"]
    ]
  },

  "gran-san-bernardo": {
    familia:"canonigos",
    nombre:"Canónigos del Gran San Bernardo",
    latin:"Congregatio Sanctorum Nicolai et Bernardi Montis Iovis · C.R.B.",
    resumen:"Canónigos que desde hace casi mil años sostienen un hospicio en un paso de los Alpes suizos, a casi 2.500 metros, para socorrer a los viajeros. Son famosos por los perros San Bernardo. Hoy son muy pocos: 27 miembros en 5 casas.",
    tarjeta:"Hospitalidad en la montaña desde el siglo XI. El origen de los perros San Bernardo.",
    lema:["Hospitalidad","El rasgo que define a la congregación desde hace casi mil años."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Blanco (roquete)","oklch(0.97 0.005 85)"]],
    datos:[
      ["Nombre","Congregación hospitalaria del Gran San Bernardo"],
      ["Fundador","San Bernardo de Menthon"],
      ["Fundación","≈ 1050"],
      ["Hoy","27 miembros (23 sacerdotes) y 5 casas (fines de 2024)"],
      ["Dónde","Suiza y Taiwán"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p>Se los llama <strong>Canónigos del Gran San Bernardo</strong>, sigla <strong>C.R.B.</strong>, por el paso alpino donde está su hospicio. Son [[canonigos-regulares|canónigos regulares]]. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`<p><strong>San Bernardo de Menthon</strong> fundó la congregación hacia el año <strong>1050</strong>. ${MK.v} Era arcediano de Aosta y quiso proteger a los peregrinos que cruzaban los Alpes hacia Roma.</p><p class="note">El detalle de Aosta es de conocimiento general.</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">≈1050</span><div class="ev"><b>Hospicio</b>Fundación en el paso del Gran San Bernardo. ${MK.v}</div></li>
          <li><span class="y">s. XVII</span><div class="ev"><b>Los perros</b>Comienzan a usarse perros para rescatar viajeros en la nieve.</div></li>
          <li><span class="y">1949</span><div class="ev"><b>Tíbet</b>El canónigo Mauricio Tornay es asesinado en misión en la frontera china.</div></li>
        </ol>
        <p class="note">Los datos de los perros y de Tornay son de conocimiento general.</p>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`<p><strong>Hospitalidad</strong>: recibir, socorrer y acompañar a quien está de paso, en la montaña y en la vida.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>La acogida</strong> sin preguntar quién es el que llega.</li><li><strong>La montaña</strong> como lugar de encuentro con Dios.</li><li><strong>La vida común</strong> de los canónigos.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Hospicios en los pasos alpinos, parroquias de montaña y acompañamiento espiritual a quienes suben.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Sotana negra con roquete blanco, propio de los canónigos.</p><p class="note">Conocimiento general.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Bernardo de Menthon</b><span class="d">s. XI</span><p>Fundador. Patrono de los montañistas.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Beato Mauricio Tornay</b><span class="d">1910 – 1949</span><p>Canónigo misionero, mártir en el Tíbet.</p><div class="tags"><span>Mártir</span></div></div>
        </div>
        <p class="note">Patronazgo y beatificación son de conocimiento general.</p>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Solo en Suiza. Los peregrinos y montañistas pueden alojarse en el hospicio.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`<p>No tienen presencia en la Argentina. Sus casas están en Suiza y Taiwán. ${MK.v}</p><p class="note">Para Mendoza, tierra de montaña y de cruce de la cordillera, su historia puede ser una linda inspiración para hablar de hospitalidad.</p>` }
    ],
    compartir:{
      frases:[["Fui forastero y me recibieron.","Mateo 25,35"]],
      anecdotas:[["Un perro, un símbolo","Los perros San Bernardo se hicieron famosos por rescatar viajeros perdidos en la nieve. La raza lleva el nombre del hospicio. ${MK.g}"]],
      preguntas:["¿Quién es hoy “el que está de paso” en tu vida?","¿Cómo se puede ser hospitalario en un grupo de jóvenes?","¿Alguna vez alguien te “rescató” cuando estabas perdido?"],
      dinamica:"Pensar en alguien nuevo o solo en el colegio, la facultad o la parroquia, y proponerse invitarlo esa semana a algo concreto."
    },
    fuentes:[["GCatholic — Canons Regular of Great Saint Bernard (C.R.B.)","https://gcatholic.org/orders/182"]]
  },

  cruzios: {
    familia:"canonigos",
    nombre:"Canónigos de la Santa Cruz (Crucíferos)",
    latin:"Ordo Sanctae Crucis · O.S.C.",
    resumen:"Orden de canónigos regulares nacida en Bélgica en el siglo XIII, centrada en la devoción a la Santa Cruz. Tradicionalmente cuidaban enfermos y hospitales. Hoy están en Bélgica, Países Bajos, Estados Unidos, Brasil, el Congo e Indonesia.",
    tarjeta:"Devoción a la Cruz y vida común. Una orden belga del siglo XIII que hoy vive en varios continentes.",
    lema:["En la Cruz está la salvación","Expresión tradicional (conocimiento general)."],
    habito:[["Blanco","oklch(0.97 0.005 85)"],["Negro","oklch(0.2 0.01 260)"],["Cruz roja y blanca","oklch(0.5 0.17 25)"]],
    datos:[
      ["Nombre","Orden de Canónigos Regulares de la Santa Cruz"],
      ["Fundador","Beato Teodoro de Celles"],
      ["Fundación","1210 o 1211, Huy (Bélgica)"],
      ["Aprobación","1248"],
      ["Hoy","356 miembros y 35 casas (fines de 2024)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Orden de la Santa Cruz</strong>, sigla <strong>O.S.C.</strong>; en inglés, <em>Crosiers</em>. Son [[canonigos-regulares|canónigos regulares]]. ${MK.v}</p><p class="note">No confundir con los Canónigos Regulares de la Santa Cruz de Coímbra (O.R.C.), otra orden distinta.</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`<p>El <strong>beato Teodoro de Celles</strong>, canónigo, en Huy (Bélgica). GCatholic da el 14 de septiembre de 1211; Wikipedia dice que la tradición la sitúa en 1210. El papa Inocencio IV confirmó la orden en 1248. ${MK.v}</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1211</span><div class="ev"><b>Huy</b>Fundación. ${MK.v}</div></li>
          <li><span class="y">1248</span><div class="ev"><b>Aprobación</b>Inocencio IV. ${MK.v}</div></li>
          <li><span class="y">≈1800</span><div class="ev"><b>Cierres</b>La Revolución Francesa y las guerras napoleónicas cierran sus monasterios; después la orden renace. ${MK.v}</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Varios continentes</b>Europa, América, África y Asia. ${MK.v}</div></li>
        </ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`<p>La <strong>devoción a la Santa Cruz</strong>, vivida en comunidad, con oración litúrgica y servicio. Históricamente, cuidado de enfermos y hospitales. ${MK.v}</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>La Cruz</strong> como signo de amor y esperanza.</li><li><strong>La regla de San Agustín</strong> y la vida común.</li><li><strong>La hospitalidad</strong>.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Parroquias, retiros, educación y misiones, según el país.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Hábito blanco con escapulario negro y una cruz roja y blanca sobre el pecho.</p><p class="note">${MK.p} Dato de conocimiento general que no pude verificar.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<div class="saints"><div class="saint"><b>Beato Teodoro de Celles</b><span class="d">s. XIII · Bélgica</span><p>Fundador.</p><div class="tags"><span>Fundador</span></div></div></div>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>A través de sus casas en el exterior; no hay comunidades en la Argentina.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`<p>No encontré presencia en la Argentina. En Sudamérica están en Brasil. ${MK.v}</p>` }
    ],
    compartir:{
      frases:[["Lejos de mí gloriarme si no es en la cruz de nuestro Señor Jesucristo.","Gálatas 6,14"]],
      anecdotas:[],
      preguntas:["¿Qué significa para vos la cruz que llevás colgada o que ves en una iglesia?","¿Cuál es tu “cruz” hoy? ¿Cómo la llevás?"],
      dinamica:"Pasar una cruz de mano en mano. Quien la tiene dice en voz alta (o en silencio) una persona que está sufriendo, y el grupo responde: “Señor, acompañala”."
    },
    fuentes:[
      ["GCatholic — Canons Regular of the Order of the Holy Cross","https://www.gcatholic.org/orders/157.htm"],
      ["Wikipedia — Crosiers","https://en.wikipedia.org/wiki/Crosiers"]
    ]
  }

});
