/* Fichas de la familia "seculares". Cada ficha sigue la estructura descripta en CLAUDE.md. */
Object.assign(FICHAS, {

  /* ---------------------------------------------------- MISIONERAS DE LA REALEZA DE CRISTO */
  realeza: {
    familia:"seculares",
    nombre:"Misioneras de la Realeza de Cristo",
    latin:"Instituto Secular de las Misioneras de la Realeza de Cristo",
    resumen:"Mujeres totalmente consagradas a Dios que siguen viviendo en su casa, con su trabajo y su ropa de siempre. Nadie lo nota desde afuera. Fue uno de los primeros institutos seculares de la historia, nacido en Asís en 1919 de la mano de un fraile médico y de una laica de Milán, la beata Armida Barelli.",
    tarjeta:"Consagradas en medio del mundo, sin hábito ni convento. Espiritualidad franciscana. Beata Armida Barelli.",
    lema:["Adveniat regnum tuum","“Venga tu Reino.” Expresa el deseo central del instituto: que Cristo reine en la sociedad."],
    habito:[["Sin hábito: ropa común","oklch(0.75 0.03 260)"]],
    datos:[
      ["Siglas","I.S.M. (S.I.M. en otras lenguas)"],
      ["Fundadores","Fray Agostino Gemelli y beata Armida Barelli"],
      ["Fundación","Noviembre de 1919, en Asís"],
      ["Aprobación","1948 (decreto de alabanza) y 1953 (definitiva)"],
      ["Espiritualidad","Franciscana"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Instituto Secular de las Misioneras de la Realeza de Cristo</strong>. Es un [[instituto-secular|instituto secular]]: sus miembros se consagran a Dios con pobreza, castidad y obediencia, pero <strong>no viven en comunidad ni usan hábito</strong>. Siguen en su casa, su familia y su trabajo. ${MK.v}</p>
        <p>Cambió varias veces de nombre: de 1919 a 1928 se llamó “Familia de Terciarias Franciscanas para promover el Reino Social del Sagrado Corazón”; entre 1928 y 1939 fue la Pía Asociación de Misioneras de la Realeza de Cristo; y en 1948 se convirtió en instituto secular. ${MK.v}</p>
        <p>Hay también ramas masculinas y una de sacerdotes diocesanos, nacidas del mismo tronco. ${MK.v}</p>` },

      { id:"fundador", titulo:"Fundadores y año", estado:"v", html:`
        <div class="cols">
          <div class="box"><h3>Fray Agostino Gemelli</h3><p>Médico y psicólogo, ateo y socialista en su juventud. Se convirtió y se hizo fraile franciscano. Fundó la Universidad Católica del Sagrado Corazón de Milán.</p></div>
          <div class="box"><h3>Beata Armida Barelli</h3><p>1882–1952. Laica de Milán, organizadora incansable. Presidió la Juventud Femenina de la Acción Católica italiana entre 1918 y 1946 y fue clave en la fundación de la Universidad Católica. Beatificada el 30 de abril de 2022. ${MK.v}</p></div>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>Noviembre de 1919:</strong> en Asís, junto a la tumba de San Francisco, doce jóvenes se consagran a Dios para vivir en medio del mundo. ${MK.v}</li>
          <li><strong>12 de julio de 1948:</strong> recibe el decreto de alabanza como instituto secular de derecho pontificio. ${MK.v}</li>
          <li><strong>3 de agosto de 1953:</strong> aprobación definitiva. ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <p>A comienzos del siglo XX, muchas mujeres querían entregarse a Dios por completo, pero también querían estar presentes en la sociedad que cambiaba: en las fábricas, las oficinas, la educación, la política. La Iglesia todavía no tenía una forma reconocida para eso. Las Misioneras de la Realeza fueron de las pioneras.</p>
        <ol class="timeline">
          <li><span class="y">1918</span><div class="ev"><b>Juventud Femenina</b>Armida Barelli asume la presidencia de la Juventud Femenina de Acción Católica. ${MK.v}</div></li>
          <li><span class="y">1919</span><div class="ev"><b>Asís</b>Nace el grupo con doce miembros. ${MK.v}</div></li>
          <li><span class="y">1921</span><div class="ev"><b>Universidad Católica</b>Barelli funda la Sociedad de Amigos de la Universidad Católica, que la sostuvo económicamente. ${MK.v}</div></li>
          <li><span class="y">1928</span><div class="ev"><b>Nuevo nombre</b>Pío XI la llama Pía Asociación de Misioneras de la Realeza de Cristo. ${MK.v}</div></li>
          <li><span class="y">1947</span><div class="ev"><b>Provida Mater Ecclesia</b>Pío XII reconoce oficialmente la nueva forma de vida de los institutos seculares.</div></li>
          <li><span class="y">1948</span><div class="ev"><b>Instituto secular</b>Decreto de alabanza. ${MK.v}</div></li>
          <li><span class="y">1952</span><div class="ev"><b>Muere Armida Barelli</b>El 15 de agosto. ${MK.v}</div></li>
          <li><span class="y">2022</span><div class="ev"><b>Beatificación</b>Armida Barelli es beatificada en Milán. ${MK.v}</div></li>
        </ol>
        <p class="note">A comienzos del siglo XXI el instituto tenía más de 3.000 miembros en 20 países, según la enciclopedia consultada. No encontré una cifra más reciente.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`
        <p>El [[carisma|carisma]] es <strong>consagrarse a Dios para que Cristo reine en la sociedad</strong>, desde adentro de ella: como levadura en la masa. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Castidad</h3><p>Vivida como elección positiva, para servir a los demás con más libertad.</p></div>
          <div class="box"><h3>Pobreza</h3><p>Usar bien los bienes, compartirlos y no usar a las personas para fines propios.</p></div>
          <div class="box"><h3>Obediencia</h3><p>Fidelidad a la propia vocación, búsqueda de la voluntad de Dios e iniciativa para el Reino.</p></div>
          <div class="box"><h3>Sin comunidad visible</h3><p>No viven juntas: el instituto las une por la formación, los encuentros y la oración, pero cada una está en su lugar de vida.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La [[espiritualidad|espiritualidad]] es <strong>franciscana</strong>: Jesucristo, el Verbo hecho carne, es maestro, modelo y fuerza. ${MK.v}</p>
        <ul class="dots">
          <li><strong>La Realeza de Cristo:</strong> no un poder que domina, sino el reino del amor, la justicia y la paz.</li>
          <li><strong>La secularidad:</strong> el mundo no es enemigo; es el lugar donde Dios quiere ser encontrado y servido.</li>
          <li><strong>Sencillez y alegría</strong> al estilo de San Francisco.</li>
          <li><strong>Discreción:</strong> la consagración no se muestra hacia afuera. Lo que se ve es el modo de trabajar, de tratar a los demás, de comprometerse.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <p>No tienen obras propias como colegios u hospitales. Su misión es <strong>la vida de cada una</strong>:</p>
        <ul class="dots">
          <li><strong>El trabajo profesional:</strong> docentes, médicas, abogadas, empleadas, obreras. Allí viven el Evangelio.</li>
          <li><strong>La familia y el barrio:</strong> cuidar a padres ancianos, acompañar a vecinos.</li>
          <li><strong>La parroquia y la diócesis:</strong> catequesis, Acción Católica, pastoral.</li>
          <li><strong>La sociedad:</strong> sindicatos, política, cultura, voluntariado.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"v", html:`
        <p><strong>No tienen hábito.</strong> Visten como cualquier persona de su edad y profesión. Es parte esencial de su vocación: estar en el mundo sin distinguirse. ${MK.v}</p>
        <p class="note">Por eso es muy probable que conozcas a alguien consagrada en un instituto secular sin saberlo.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>Beata Armida Barelli</b><span class="d">1882 – 1952 · Italia</span><p>Cofundadora. Laica, organizadora de miles de jóvenes y pionera de la participación de las mujeres en la Iglesia. Beatificada en 2022.</p><div class="tags"><span>Beata</span><span>Laica</span></div></div>
          <div class="saint"><b>Fray Agostino Gemelli</b><span class="d">1878 – 1959 · Italia</span><p>Cofundador. Médico, psicólogo, franciscano y fundador de una universidad.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Francisco de Asís</b><span class="d">1181/82 – 1226 · Italia</span><p>Padre espiritual del instituto, nacido junto a su tumba.</p><div class="tags"><span>Inspirador</span></div></div>
        </div>
        <p class="note">Las fechas de Armida Barelli están verificadas; las de Gemelli son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <p>Pueden ingresar mujeres solteras que sientan el llamado a consagrarse a Dios sin dejar su vida en el mundo.</p>
        <ol class="steps">
          <li><div><strong>Contacto y discernimiento</strong> con una responsable del instituto.</div></li>
          <li><div><strong>Período de prueba</strong> en el que se conoce la vida del instituto.</div></li>
          <li><div><strong>Formación inicial</strong> con encuentros, retiros y acompañamiento personal, mientras se sigue trabajando y viviendo en casa.</div></li>
          <li><div><strong>Consagración temporal</strong>, renovada por algunos años.</div></li>
          <li><div><strong>Consagración definitiva.</strong></div></li>
        </ol>
        <p class="note">${MK.p} Las etapas son las habituales en los institutos seculares; no encontré su duración en las fuentes del instituto.</p>
        <div class="box" style="margin-top:14px"><h3>¿Por qué esta ficha importa?</h3><p>Muchos jóvenes creen que consagrarse a Dios significa necesariamente un convento. Los institutos seculares muestran otra posibilidad: una entrega total, en medio de la vida de todos los días.</p></div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p>El instituto está presente en Italia, el resto de Europa, América y África. ${MK.v}</p>
        <p class="note">${MK.p} No encontré confirmación de comunidades o miembros en la Argentina ni en Mendoza. Por la naturaleza discreta de los institutos seculares, es posible que existan y no estén publicados. Para saber qué institutos seculares hay en Mendoza, lo más directo es consultar en la Vicaría para la Vida Consagrada del Arzobispado.</p>` }
    ],
    compartir:{
      frases:[
        ["Venga tu Reino.","Mateo 6,10, deseo central del instituto"],
        ["El Reino de los Cielos se parece a la levadura que una mujer mezcla con harina, hasta que fermenta toda la masa.","Mateo 13,33, imagen de los institutos seculares"],
        ["Ustedes son la sal de la tierra… ustedes son la luz del mundo.","Mateo 5,13-14"]
      ],
      anecdotas:[
        ["Doce en Asís","En noviembre de 1919, doce jóvenes se reunieron en Asís, junto a la tumba de San Francisco, y se consagraron a Dios para vivir en medio del mundo. Fue el inicio del instituto. ${MK.v}"],
        ["El ateo que fundó una universidad católica","Agostino Gemelli fue de joven un médico socialista y ateo. Se convirtió, se hizo franciscano y terminó fundando, con Armida Barelli, la Universidad Católica del Sagrado Corazón de Milán. ${MK.g}"],
        ["La “hermana mayor” de miles","Armida Barelli recorrió Italia organizando grupos de chicas de la Acción Católica. Las jóvenes la llamaban “la Sorella Maggiore”, la hermana mayor. ${MK.g}"]
      ],
      preguntas:[
        "¿Te imaginaste alguna vez que alguien pueda estar totalmente consagrado a Dios y seguir con su trabajo, su casa y su ropa de siempre?",
        "¿Qué significa para vos ser “levadura en la masa” en tu facultad, tu trabajo o tu grupo de amigos?",
        "“Venga tu Reino”: ¿en qué rincón concreto de la sociedad te gustaría que se notara más el Evangelio?",
        "Armida Barelli era una laica que transformó la Iglesia de su país. ¿Qué podés hacer vos como laico?"
      ],
      dinamica:"“Levadura en la masa”: cada uno elige un ambiente donde pasa mucho tiempo (facultad, trabajo, club, redes) y escribe un gesto concreto, discreto y semanal con el que va a llevar el Evangelio ahí. Se comparte en parejas y se revisa al mes siguiente."
    },
    fuentes:[
      ["Misioneras de la Realeza de Cristo — Quiénes somos","https://www.laiciconsacrati-regalita.org/wp-content/uploads/pdf/chisiamo_spagnolo_QUIENESSOMOS.pdf"],
      ["Encyclopedia.com — Missionaries of the Kingship of Christ","https://encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/missionaries-kingship-christ"],
      ["Wikipedia — Armida Barelli","https://en.wikipedia.org/wiki/Armida_Barelli"]
    ]
  },

  /* ==================================================== INSTITUTOS SECULARES */
  vdb: {
    familia:"seculares",
    nombre:"Voluntarias de Don Bosco",
    latin:"Instituto Secular Voluntarias de Don Bosco · VDB",
    resumen:"Mujeres consagradas que viven en medio del mundo, en su trabajo y su familia, con el espíritu de Don Bosco. Las inició en 1917 el beato Felipe Rinaldi, tercer sucesor de Don Bosco. Son [[instituto-secular|instituto secular]] de derecho pontificio desde 1978.",
    tarjeta:"Consagradas en el mundo con el estilo salesiano. Desde 1917.",
    lema:["En el mundo, sin ser del mundo","Juan 17, la clave de todo instituto secular."],
    habito:[["Sin hábito","oklch(0.75 0.02 260)"]],
    datos:[
      ["Tipo","Instituto secular femenino"],
      ["Fundador","Beato Felipe Rinaldi (1856 – 1931)"],
      ["Inicio","1917, Turín"],
      ["Primeras consagradas","1919, siete jóvenes"],
      ["Aprobación pontificia","1978"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Voluntarias de Don Bosco</strong>, sigla <strong>VDB</strong>. Forman parte de la Familia Salesiana. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`<p>El <strong>beato Felipe Rinaldi</strong>, tercer sucesor de Don Bosco, comenzó en <strong>1917</strong> el primer grupo de mujeres laicas consagradas. ${MK.v}</p><p class="note">Su beatificación (1990) es de conocimiento general.</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`<ol class="timeline"><li><span class="y">1917</span><div class="ev"><b>Turín</b>Primer grupo. ${MK.v}</div></li><li><span class="y">1919</span><div class="ev"><b>Consagración</b>Siete jóvenes. ${MK.v}</div></li><li><span class="y">1978</span><div class="ev"><b>Aprobación</b>Instituto secular de derecho pontificio. ${MK.v}</div></li><li><span class="y">2017</span><div class="ev"><b>Centenario</b>${MK.g}</div></li></ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`<p>Vivir la <strong>consagración total a Dios</strong> en la vida cotidiana —trabajo, familia, barrio— con el <strong>espíritu salesiano</strong>: alegría, cercanía con los jóvenes y confianza en María Auxiliadora.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>Don Bosco</strong> y el [[sistema-preventivo|sistema preventivo]].</li><li><strong>La secularidad</strong>: ser fermento desde adentro.</li><li><strong>La discreción</strong>: no se distinguen por fuera.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>No tienen obras propias: su misión es su profesión y su vida diaria, donde sea que estén.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>No usan hábito: visten como cualquier mujer de su entorno.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<div class="saints"><div class="saint"><b>Beato Felipe Rinaldi</b><span class="d">1856 – 1931 · Italia</span><p>Fundador.</p><div class="tags"><span>Fundador</span></div></div><div class="saint"><b>San Juan Bosco</b><span class="d">1815 – 1888</span><p>Padre espiritual. Ver <a href="#salesianos">salesianos</a>.</p><div class="tags"><span>Padre</span></div></div></div>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Para mujeres que se sienten llamadas a consagrarse sin dejar su trabajo ni su vida laical. Se puede preguntar en cualquier obra salesiana.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`<p>${MK.p} No encontré datos publicados sobre las VDB en la Argentina. Por la fuerte presencia salesiana en el país es probable que existan, pero no lo pude confirmar.</p>` }
    ],
    compartir:{
      frases:[["No te pido que los saques del mundo, sino que los preserves del mal.","Juan 17,15"],["Ustedes son la sal de la tierra.","Mateo 5,13"]],
      anecdotas:[],
      preguntas:["¿Se puede ser santo sin dejar el trabajo ni la familia?","¿Qué significa ser “sal” en tu facultad o tu trabajo?"],
      dinamica:"Cada uno piensa en un lugar cotidiano (aula, oficina, colectivo) y propone un gesto discreto para ser “sal” allí durante la semana."
    },
    fuentes:[["Volontarie Don Bosco — Historia","https://www.volontariedonbosco.org/en/?p=173"]]
  },

  "hermanas-maria": {
    familia:"seculares",
    nombre:"Hermanas de María de Schoenstatt",
    latin:"Instituto Secular de las Hermanas de María de Schoenstatt",
    resumen:"Instituto secular fundado en Alemania el 1 de octubre de 1926 por el padre José Kentenich, dentro de la Obra de Schoenstatt. En 2026 cumplen cien años. En la Argentina tienen su casa provincial en Nuevo Schoenstatt, Florencio Varela.",
    tarjeta:"Consagradas marianas de Schoenstatt. Cien años en 2026.",
    lema:["Nada sin ti, nada sin nosotros","Lema de la Alianza de Amor de Schoenstatt (ver la ficha del movimiento)."],
    habito:[["Uniforme o ropa de calle","oklch(0.75 0.02 260)"]],
    datos:[
      ["Tipo","Instituto secular femenino"],
      ["Fundador","P. José Kentenich"],
      ["Fundación","1 de octubre de 1926, Alemania"],
      ["Provincia","Nazaret: Argentina, Paraguay y Uruguay"],
      ["Casa provincial","Nuevo Schoenstatt, Florencio Varela"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Instituto Secular de las Hermanas de María de Schoenstatt</strong>. Son una de las comunidades consagradas de la Obra de <a href="#schoenstatt">Schoenstatt</a>. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`<p>El padre <strong>José Kentenich</strong> las fundó el <strong>1 de octubre de 1926</strong>, cuando 18 jóvenes se ofrecieron para la obra. ${MK.v}</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`<ol class="timeline"><li><span class="y">1926</span><div class="ev"><b>Alemania</b>Fundación. ${MK.v}</div></li><li><span class="y">1947</span><div class="ev"><b>Luján</b>El 9 de junio, Kentenich visita por primera vez el santuario de Luján. ${MK.v}</div></li><li><span class="y">1949</span><div class="ev"><b>Estados Unidos</b>Llegan las primeras hermanas. ${MK.v}</div></li><li><span class="y">2026</span><div class="ev"><b>Centenario</b>El 11 de abril, unas 70 hermanas peregrinan a Luján. ${MK.v}</div></li></ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`<p>Ser <strong>imagen viva de María</strong> en el mundo: consagradas a Dios, al servicio de la Obra de Schoenstatt y de la Iglesia.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li>La [[alianza-amor|Alianza de Amor]] con María.</li><li>El [[capital-gracias|capital de gracias]].</li><li>El Santuario como hogar.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Trabajan en una gran variedad de ocupaciones y profesiones; muchas acompañan santuarios y centros de Schoenstatt. ${MK.v}</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"v", html:`<p>Pueden usar uniforme o ropa de calle, y vivir en comunidad o solas. ${MK.v}</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<div class="saints"><div class="saint"><b>Siervo de Dios José Kentenich</b><span class="d">1885 – 1968</span><p>Fundador. Su causa de beatificación está abierta.</p><div class="tags"><span>Fundador</span></div></div><div class="saint"><b>Venerable Hna. Emilie Engel</b><span class="d">1893 – 1955 · Alemania</span><p>Una de las primeras Hermanas de María.</p><div class="tags"><span>Hermana de María</span></div></div></div><p class="note">Datos de conocimiento general.</p>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Para mujeres que conocen Schoenstatt y sienten el llamado a la consagración. El primer paso es acercarse a un santuario.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`<ul class="dots"><li><strong>Provincia Nazaret</strong>, con casa provincial en Nuevo Schoenstatt, Florencio Varela. ${MK.v}</li><li><strong>Centros en Buenos Aires.</strong> ${MK.v}</li></ul><p class="note">${MK.p} No sé si hay Hermanas de María viviendo en Mendoza. Ver la ficha de <a href="#schoenstatt">Schoenstatt</a> para el movimiento en la provincia.</p>` }
    ],
    compartir:{
      frases:[["Nuestros santuarios deben dar vida a los santuarios nacionales de los distintos países.","P. José Kentenich en Luján, 9 de junio de 1947 (traducción)"],["Hagan lo que él les diga.","Juan 2,5"]],
      anecdotas:[["Un manto nuevo para la Peregrina","En el centenario, las hermanas regalaron un vestido nuevo a la imagen de la Virgen Peregrina, bordado por las carmelitas que viven junto al santuario de Luján. ${MK.v}"]],
      preguntas:["¿Qué rasgo de María te gustaría que se notara en vos?","¿Qué significa consagrarse “en el mundo”?"],
      dinamica:"Escribir una carta breve a María contándole algo de la propia vida y dejarla a sus pies en un santuario o en la parroquia."
    },
    fuentes:[
      ["Schoenstatt.com (2026) — Peregrinación a Luján en el centenario","https://schoenstatt.com/?p=69620"],
      ["Catholic.net — Instituto Secular de las Hermanas de María","https://es.catholic.net/op/articulos/20085/cat/769/instituto-secular-de-las-hermanas-marianas-de-schoenstatt.html"]
    ]
  },

  cruzadas: {
    familia:"seculares",
    nombre:"Cruzadas de Santa María",
    latin:"Instituto Secular Cruzadas de Santa María",
    resumen:"Instituto secular de mujeres fundado en España por el jesuita venezolano Tomás Morales, apóstol de los jóvenes trabajadores. Forma parte de una familia que incluye a los Cruzados de Santa María y a un movimiento juvenil. El fundador fue declarado venerable en 2017.",
    tarjeta:"Laicas consagradas en el mundo, con fuerte acento en la formación de jóvenes.",
    lema:["Hágase en mí según tu palabra","Lucas 1,38 — María, modelo de entrega."],
    habito:[["Sin hábito","oklch(0.75 0.02 260)"]],
    datos:[
      ["Tipo","Instituto secular femenino"],
      ["Fundador","Venerable Tomás Morales, S.J. (1908 – 1994)"],
      ["Inicio","1959"],
      ["Pía unión","1965"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Cruzadas de Santa María</strong>. Existe también la rama masculina, los <strong>Cruzados de Santa María</strong>. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`<p><strong>Tomás Morales Pérez</strong> nació en Macuto (Venezuela) en 1908, entró a la Compañía de Jesús en 1932 y fue ordenado sacerdote en 1942. En 1946 fundó el Hogar del Empleado, en Madrid. ${MK.v}</p><ul class="dots"><li><strong>1959:</strong> Cruzadas de Santa María. ${MK.v}</li><li><strong>1965:</strong> Pía Unión. ${MK.v}</li><li><strong>1994:</strong> muere en Alcalá de Henares. ${MK.v}</li><li><strong>2017:</strong> declarado venerable. ${MK.v}</li></ul>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`<ol class="timeline"><li><span class="y">1946</span><div class="ev"><b>Hogar del Empleado</b>Apostolado con trabajadores. ${MK.v}</div></li><li><span class="y">1959</span><div class="ev"><b>Cruzadas</b>${MK.v}</div></li><li><span class="y">1965</span><div class="ev"><b>Pía unión</b>${MK.v}</div></li><li><span class="y">2017</span><div class="ev"><b>Venerable</b>Francisco reconoce sus virtudes heroicas. ${MK.v}</div></li></ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`<p>Laicas <strong>consagradas en medio del mundo</strong>, que se dedican especialmente a la <strong>formación de jóvenes</strong> para que sean apóstoles en su ambiente.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>Los [[ejercicios|Ejercicios Espirituales]]</strong> de San Ignacio.</li><li><strong>María</strong> como modelo.</li><li><strong>La audacia apostólica</strong> de los laicos.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Colegios, residencias universitarias, campamentos y grupos juveniles.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>No usan hábito.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"v", html:`<div class="saints"><div class="saint"><b>Venerable Tomás Morales</b><span class="d">1908 – 1994</span><p>Fundador. Venerable desde el 8 de noviembre de 2017. ${MK.v}</p><div class="tags"><span>Fundador</span></div></div><div class="saint"><b>San Ignacio de Loyola</b><span class="d">1491 – 1556</span><p>Padre espiritual. Ver <a href="#jesuitas">jesuitas</a>.</p><div class="tags"><span>Espiritualidad</span></div></div></div>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>A través de sus grupos juveniles y colegios, principalmente en España.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`<p>${MK.p} No encontré datos sobre presencia en la Argentina.</p>` }
    ],
    compartir:{
      frases:[["Hágase en mí según tu palabra.","Lucas 1,38"]],
      anecdotas:[],
      preguntas:["¿Qué jóvenes necesitan hoy a alguien que los forme y los acompañe?","¿Te animás a ser apóstol en tu propio ambiente?"],
      dinamica:"Cada uno escribe el nombre de un amigo que no conoce a Dios y se compromete a rezar por él cada día de la semana."
    },
    fuentes:[["Wikipedia — Tomás Morales Pérez","https://en.wikipedia.org/wiki/Tom%C3%A1s_Morales_P%C3%A9rez"]]
  }

});
