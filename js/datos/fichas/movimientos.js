/* Fichas de la familia "movimientos". Cada ficha sigue la estructura descripta en CLAUDE.md. */
Object.assign(FICHAS, {

  /* ---------------------------------------------------- SCHOENSTATT */
  schoenstatt: {
    familia:"movimientos",
    nombre:"Schoenstatt",
    latin:"Movimiento Apostólico de Schoenstatt",
    resumen:"En una capillita de un pueblo alemán, en 1914, un joven sacerdote propuso a sus alumnos un pacto con la Virgen: si ellos ponían su esfuerzo, ella haría de ese lugar un lugar de gracia. De ahí nació un movimiento que hoy tiene cientos de santuarios iguales en todo el mundo. En Mendoza hay uno en La Puntilla, y sus jóvenes cruzan la cordillera a pie peregrinando.",
    tarjeta:"Alianza de amor con María y santuarios en todo el mundo. Hay santuario en La Puntilla, Mendoza.",
    lema:["Nada sin ti, nada sin nosotros","Fórmula clásica de la Alianza de Amor: nada sin la Virgen, nada sin nuestro aporte."],
    habito:[["Sin hábito (laicos)","oklch(0.75 0.03 260)"],["Hermanas: gris claro","oklch(0.82 0.01 260)"]],
    datos:[
      ["Fundador","P. José Kentenich (1885 – 1968)"],
      ["Fundación","18 de octubre de 1914"],
      ["Lugar","Schoenstatt, Vallendar (Alemania)"],
      ["Forma","Movimiento con institutos seculares, ligas y federaciones"],
      ["Fecha principal","18 de octubre, día de la Alianza"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre oficial es <strong>Movimiento Apostólico de Schoenstatt</strong>. “Schoenstatt” significa en alemán “lugar hermoso”: es el nombre de un barrio de Vallendar, junto al río Rin, donde está el santuario original.</p>
        <p>Es un [[movimiento|movimiento eclesial]] muy amplio, que reúne en una misma familia espiritual a personas de todos los estados de vida:</p>
        <div class="cols">
          <div class="box"><h3>Institutos seculares</h3><p>Hermanas de María, Padres de Schoenstatt, Hermanos de María y otros: personas totalmente consagradas. Ver [[instituto-secular|instituto secular]].</p></div>
          <div class="box"><h3>Federaciones</h3><p>Laicos y sacerdotes con un compromiso fuerte, que viven en el mundo con su familia y su trabajo.</p></div>
          <div class="box"><h3>Ligas</h3><p>Grupos de jóvenes, matrimonios, madres, señoras, hombres y sacerdotes con un compromiso más sencillo.</p></div>
          <div class="box"><h3>Movimiento popular</h3><p>Peregrinos y quienes participan de la [[virgen-peregrina|Campaña de la Virgen Peregrina]].</p></div>
        </div>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>El Padre José Kentenich</strong> nació en 1885 cerca de Colonia, Alemania. Su infancia fue difícil: su madre, sin poder mantenerlo, lo dejó en un orfanato a los ocho años. Antes de despedirse, lo consagró a la Virgen, y él diría después que María fue su madre y educadora.</p>
        <ul class="dots">
          <li><strong>1910:</strong> es ordenado sacerdote en la Sociedad del Apostolado Católico (palotinos).</li>
          <li><strong>1912:</strong> es nombrado director espiritual de los alumnos del seminario menor palotino de Schoenstatt.</li>
          <li><strong>18 de octubre de 1914:</strong> en una vieja capilla dedicada a San Miguel, propone a sus alumnos sellar una alianza con la Virgen. Es la fecha de fundación.</li>
          <li><strong>1941–1945:</strong> preso por la Gestapo, pasa casi tres años en el campo de concentración de Dachau.</li>
          <li><strong>1951–1965:</strong> por decisión de la Santa Sede vive apartado del Movimiento, en Milwaukee (Estados Unidos). En 1965 es rehabilitado.</li>
          <li><strong>15 de septiembre de 1968:</strong> muere en Schoenstatt, después de celebrar misa en la iglesia de la Santísima Trinidad.</li>
        </ul>
        <p class="note">Fechas de conocimiento general en las biografías del P. Kentenich; no las verifiqué hoy una por una. Su causa de beatificación está abierta.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1914</span><div class="ev"><b>La Alianza de Amor</b>Pocas semanas después del inicio de la Primera Guerra Mundial, Kentenich y un grupo de seminaristas sellan la alianza con María en la capillita.</div></li>
          <li><span class="y">1919</span><div class="ev"><b>Hörde</b>Se funda formalmente la Federación Apostólica: el movimiento sale del seminario.</div></li>
          <li><span class="y">1926</span><div class="ev"><b>Hermanas de María</b>Nace la primera comunidad femenina consagrada del Movimiento.</div></li>
          <li><span class="y">1941</span><div class="ev"><b>Dachau</b>Kentenich es arrestado por los nazis. En el campo de concentración sigue fundando y formando grupos.</div></li>
          <li><span class="y">1943</span><div class="ev"><b>Primer santuario filial</b>En Nueva Helvecia, Uruguay, se construye el primer santuario “hijo” del original. ${MK.v}</div></li>
          <li><span class="y">1952</span><div class="ev"><b>Kentenich en la Argentina</b>El 17 de enero llega a la Argentina. El 20 de enero bendice el Santuario del Padre en Nuevo Schoenstatt, Florencio Varela (Buenos Aires), cuya piedra fundamental se había colocado el 15 de agosto de 1951. ${MK.v}</div></li>
          <li><span class="y">1999</span><div class="ev"><b>Peregrinación por la cordillera</b>Jóvenes de Schoenstatt empiezan a cruzar los Andes a pie desde Mendoza hasta Santiago de Chile. ${MK.v}</div></li>
          <li><span class="y">2014</span><div class="ev"><b>100 años</b>El Movimiento celebra su centenario.</div></li>
        </ol>
        <p class="note">Las fechas de 1943, 1952 y 1999 están verificadas. Las demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] de Schoenstatt es la <strong>[[alianza-amor|Alianza de Amor]] con María</strong>: un pacto personal con la Virgen para que ella eduque a cada uno como un “hombre nuevo” en una “comunidad nueva”.</p>
        <div class="cols">
          <div class="box"><h3>El santuario</h3><p>Cada santuario de Schoenstatt es una réplica de la capillita original. Allí la Virgen regala tres gracias: cobijamiento, transformación y envío apostólico.</p></div>
          <div class="box"><h3>Las contribuciones</h3><p>El [[capital-gracias|Capital de Gracias]]: ofrecer esfuerzos, sacrificios y oraciones como aporte a la alianza.</p></div>
          <div class="box"><h3>Educación</h3><p>Kentenich fue sobre todo un educador. Busca personalidades libres, firmes y profundamente vinculadas a Dios.</p></div>
          <div class="box"><h3>Fe práctica en la Divina Providencia</h3><p>Descubrir lo que Dios quiere a través de los acontecimientos de cada día.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>María, educadora:</strong> la Virgen es llamada <strong>Madre, Reina y Victoriosa Tres Veces Admirable de Schoenstatt</strong>.</li>
          <li><strong>Santidad de la vida diaria:</strong> santificar el trabajo, el estudio, la familia y el descanso.</li>
          <li><strong>El ideal personal:</strong> cada persona tiene una vocación única, que hay que descubrir y cuidar.</li>
          <li><strong>Vínculos:</strong> una persona sana y santa vive bien vinculada a Dios, a las personas, a los lugares y a las ideas.</li>
          <li><strong>El santuario del corazón y el santuario hogar:</strong> la alianza se vive también en el propio corazón y en un rincón de la casa.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Formación de jóvenes y familias:</strong> grupos, campamentos, jornadas y misiones.</li>
          <li><strong>[[virgen-peregrina|Campaña de la Virgen Peregrina]]:</strong> nacida en Brasil, lleva una imagen de la Virgen de casa en casa. Se extendió por todo el mundo y es muy fuerte en la Argentina.</li>
          <li><strong>Misiones juveniles</strong> en pueblos y barrios.</li>
          <li><strong>Peregrinaciones:</strong> como la que cruza la cordillera desde Mendoza. ${MK.v}</li>
          <li><strong>Pastoral matrimonial y educativa:</strong> colegios y escuelas para padres.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Laicos:</strong> no tienen ninguna vestimenta especial.</li>
          <li><strong>Hermanas de María:</strong> usan un hábito sencillo, gris claro o blanco según la región, con velo.</li>
          <li><strong>Padres de Schoenstatt:</strong> visten como sacerdotes diocesanos.</li>
          <li><strong>Signo propio:</strong> muchos llevan la medalla o una imagen de la Virgen de Schoenstatt (la “MTA”, por Mater Ter Admirabilis).</li>
        </ul>
        <p class="note">Los detalles del hábito de las Hermanas de María son de conocimiento general y pueden variar.</p>` },

      { id:"santos", titulo:"Santos y testigos vinculados", estado:"g", html:`
        <p>Schoenstatt es un movimiento joven y todavía no tiene santos canonizados, pero sí varias causas abiertas:</p>
        <div class="saints">
          <div class="saint"><b>Siervo de Dios José Kentenich</b><span class="d">1885 – 1968 · Alemania</span><p>Fundador. Educador, prisionero de Dachau, padre de una gran familia espiritual.</p><div class="tags"><span>Fundador</span><span>Causa abierta</span></div></div>
          <div class="saint"><b>Siervo de Dios José Engling</b><span class="d">1898 – 1918 · Alemania</span><p>Uno de los primeros jóvenes de la Alianza. Murió a los 20 años como soldado en la Primera Guerra. Modelo de los jóvenes de Schoenstatt.</p><div class="tags"><span>Joven</span></div></div>
          <div class="saint"><b>Beato Karl Leisner</b><span class="d">1915 – 1945 · Alemania</span><p>Joven de Schoenstatt, fue ordenado sacerdote en secreto dentro del campo de Dachau. Murió poco después de la liberación. Beatificado en 1996.</p><div class="tags"><span>Beato</span><span>Dachau</span></div></div>
          <div class="saint"><b>Venerable João Luiz Pozzobon</b><span class="d">1904 – 1985 · Brasil</span><p>Diácono y padre de familia. Fundó la Campaña de la Virgen Peregrina y caminó miles de kilómetros llevando la imagen.</p><div class="tags"><span>Laico</span><span>Virgen Peregrina</span></div></div>
          <div class="saint"><b>Venerable Bárbara Kast</b><span class="d">1950 – 1977 · Alemania</span><p>Joven de Schoenstatt que vivió con alegría su fe hasta morir de cáncer a los 26 años.</p><div class="tags"><span>Joven</span></div></div>
        </div>
        <p class="note">Títulos y fechas de conocimiento general; no los verifiqué hoy. El estado de cada causa puede haber avanzado.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Sellar la Alianza</h3><p>Cualquier persona puede, después de una preparación, sellar la Alianza de Amor en un santuario. Es el paso fundamental.</p></div>
          <div class="box"><h3>Como joven</h3><p>Juventud Masculina y Juventud Femenina de Schoenstatt: grupos, campamentos y misiones.</p></div>
          <div class="box"><h3>Como familia</h3><p>Grupos de matrimonios, Liga de Familias, Federación de Familias.</p></div>
          <div class="box"><h3>Como consagrado</h3><p>Padres de Schoenstatt, Hermanas de María, Hermanos de María y otros institutos seculares.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acercarse al santuario</strong> y participar de alguna actividad.</div></li>
          <li><div><strong>Integrarse a un grupo</strong> según la edad o el estado de vida.</div></li>
          <li><div><strong>Prepararse para la Alianza de Amor</strong> con encuentros de formación.</div></li>
          <li><div><strong>Sellar la Alianza</strong> en el santuario.</div></li>
          <li><div><strong>Profundizar el compromiso</strong>, si uno lo desea, en una liga, federación o instituto.</div></li>
        </ol>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · La Puntilla, Luján de Cuyo</span>
          <h3>Santuario de la Madre Tres Veces Admirable</h3>
          <p style="margin-top:8px">Santuario de Schoenstatt en el decanato de Godoy Cruz de la Arquidiócesis de Mendoza, atendido por los Padres de Schoenstatt. Fue templo jubilar en el Jubileo de la Misericordia de 2016. ${MK.v}</p>
          <p class="note">No encontré la dirección exacta publicada ni la fecha de bendición del santuario.</p>
        </div>
        <div class="place">
          <span class="eyebrow">Mendoza · Cordillera</span>
          <h3>Peregrinación a pie a través de los Andes</h3>
          <p style="margin-top:8px">Desde 1999, cada tres o cuatro años, jóvenes de Schoenstatt cruzan la cordillera a pie desde Mendoza hasta el Santuario de Bellavista, en Santiago de Chile, pasando por Potrerillos y el Cristo Redentor. En la séptima edición (2018) participaron 120 jóvenes de Argentina, Chile, Paraguay y Brasil. ${MK.v}</p>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>Nuevo Schoenstatt</strong> (Florencio Varela, Buenos Aires) es el centro del Movimiento en el país, con el Santuario del Padre bendecido por Kentenich en 1952. ${MK.v}</li>
          <li><strong>Hay santuarios</strong> en muchas provincias; por ejemplo, el de Belgrano (Buenos Aires) cumplió 60 años y en San Juan se proyectó uno nuevo. ${MK.g}</li>
          <li><strong>Ya hay un Padre de Schoenstatt mendocino:</strong> la página oficial del Movimiento anunció la ordenación del primero. ${MK.v}</li>
        </ul>
        <p class="note">La página oficial no da en el texto la fecha ni el nombre de ese sacerdote, así que no los incluyo.</p>` }
    ],
    compartir:{
      frases:[
        ["Nada sin ti, nada sin nosotros.","Fórmula de la Alianza de Amor"],
        ["Quiero ser santo.","José Engling, joven de la primera generación de Schoenstatt"],
        ["Bendice, Altísimo, también a mis enemigos.","Beato Karl Leisner, últimas palabras escritas en su diario"],
        ["Cuanto más grande es el sacrificio, más grande es el amor.","Atribuida a José Engling"]
      ],
      anecdotas:[
        ["Una capillita para guardar herramientas","La capilla de San Miguel, en Schoenstatt, estaba casi abandonada y se usaba como depósito de herramientas del jardín. Kentenich y sus alumnos la pidieron para sus reuniones. Hoy hay más de 200 réplicas en todo el mundo. ${MK.g}"],
        ["Sacerdote en Dachau","Karl Leisner, enfermo de tuberculosis, fue ordenado sacerdote en secreto dentro del campo de concentración de Dachau por un obispo francés también prisionero. Pudo celebrar una sola misa. ${MK.g}"],
        ["El cartero de la Virgen","João Pozzobon, un comerciante brasileño, empezó a llevar una imagen de la Virgen de casa en casa en 1950. Caminó durante 35 años, más de 140.000 kilómetros según sus biógrafos. ${MK.g}"],
        ["La cordillera a pie","Los jóvenes de Schoenstatt que cruzan los Andes caminan más de dos semanas, de Mendoza a Santiago, durmiendo en carpa y rezando por el camino. ${MK.v}"]
      ],
      preguntas:[
        "“Nada sin ti, nada sin nosotros.” ¿Qué ponés vos y qué dejás en manos de Dios?",
        "Kentenich habla de un “ideal personal”. ¿Qué rasgo tuyo creés que Dios quiere que desarrolles?",
        "¿Tenés un lugar donde te sentís en casa con Dios? ¿Cómo lo cuidás?",
        "José Engling quería ser santo a los 18 años. ¿Te animás a desearlo vos también?"
      ],
      dinamica:"Armar un “Capital de Gracias” del grupo: durante una semana, cada uno anota en un papelito un pequeño esfuerzo o sacrificio ofrecido por una intención común. Al final, se juntan todos en una caja o jarra y se ofrecen juntos en la misa o frente a una imagen de la Virgen."
    },
    fuentes:[
      ["GCatholic — Santuario de la Madre Tres Veces Admirable, La Puntilla","https://gcatholic.org/churches/america-south/42724"],
      ["Diario de Cuyo (2018) — La peregrinación que cruza la cordillera","https://www.diariodecuyo.com.ar/noticias/la-peregrinacion-que-cruza-la-cordillera-300646.html"],
      ["Schoenstatt.com — Nuevo Schoenstatt, Santuario del Padre","https://schoenstatt.com/new-schoenstatt-argentina-fathers-shrine-a-witness-to-the-cross-and-the-blessed-mothers-victory-part-i/"],
      ["Schoenstatt.com — Primer Padre de Schoenstatt de Mendoza","https://schoenstatt.com/tag/ordenacion-2/"]
    ]
  },

  /* ---------------------------------------------------- FOCOLARES */
  focolares: {
    familia:"movimientos",
    nombre:"Focolares",
    latin:"Movimiento de los Focolares · Obra de María",
    resumen:"En plena Segunda Guerra Mundial, entre bombardeos, una joven maestra de Trento y sus amigas descubrieron que lo único que no se derrumbaba era Dios, que es Amor. Decidieron vivir el Evangelio al pie de la letra y la oración de Jesús: “que todos sean uno”. Hoy el movimiento está en 147 países y tiene en la Argentina una ciudadela entera, la Mariápolis Lía.",
    tarjeta:"La espiritualidad de la unidad: amor recíproco y diálogo. Chiara Lubich. La Mariápolis Lía, en Buenos Aires.",
    lema:["Que todos sean uno","Juan 17,21, el “testamento de Jesús” que inspira todo el movimiento."],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Nombre oficial","Obra de María"],
      ["Fundadora","Sierva de Dios Chiara Lubich (1920 – 2008)"],
      ["Origen","Trento (Italia), durante la Segunda Guerra Mundial"],
      ["Aprobación","1962; Estatutos generales en 1990"],
      ["Presencia","147 países"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Obra de María</strong>, aunque todos lo conocen como <strong>Movimiento de los Focolares</strong>. ${MK.v} “Focolar” viene del italiano <em>focolare</em>, el fuego del hogar: así llamaba la gente de Trento a la casa de las primeras chicas, por el calor de amor que se sentía allí.</p>
        <p>Es un [[movimiento|movimiento eclesial]] con una enorme variedad de miembros: la mayoría son laicos, pero también hay consagrados, sacerdotes y obispos. Participan además cristianos de 350 Iglesias y comunidades distintas, y personas de otras religiones o sin religión que comparten sus valores. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Focolarinos y focolarinas</h3><p>Consagrados que viven en pequeñas comunidades llamadas [[focolar|focolares]], con su trabajo profesional.</p></div>
          <div class="box"><h3>Voluntarios y familias</h3><p>Laicos comprometidos que viven la espiritualidad en su vida diaria.</p></div>
          <div class="box"><h3>Gen</h3><p>Los jóvenes del movimiento: [[gen|Generación Nueva]].</p></div>
          <div class="box"><h3>Ramas sociales</h3><p>Movimiento Humanidad Nueva, Economía de Comunión, Movimiento Político por la Unidad, editorial Ciudad Nueva.</p></div>
        </div>` },

      { id:"fundador", titulo:"Fundadora y año", estado:"g", html:`
        <p><strong>Chiara Lubich</strong> (bautizada Silvia) nació en Trento, Italia, en 1920. Era maestra y quería estudiar filosofía para encontrar la verdad.</p>
        <ul class="dots">
          <li><strong>7 de diciembre de 1943:</strong> se consagra a Dios para siempre. Es la fecha que el movimiento toma como su inicio.</li>
          <li><strong>1944:</strong> durante los bombardeos de Trento, ella y sus compañeras leen el Evangelio en los refugios y deciden vivirlo palabra por palabra.</li>
          <li><strong>1962:</strong> primera aprobación de la Santa Sede. ${MK.v}</li>
          <li><strong>1990:</strong> aprobación de los Estatutos generales como asociación de derecho pontificio. ${MK.v}</li>
          <li><strong>14 de marzo de 2008:</strong> muere en Rocca di Papa, cerca de Roma. Su causa de beatificación se abrió en 2015.</li>
        </ul>
        <p class="note">Las fechas de 1962 y 1990 están verificadas. Las demás son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1943</span><div class="ev"><b>Consagración de Chiara</b>Una joven maestra se entrega a Dios en Trento.</div></li>
          <li><span class="y">1944</span><div class="ev"><b>En los refugios</b>Entre bombas, el pequeño grupo descubre a “Dios Amor” y empieza a vivir el Evangelio. Atienden a los pobres de la ciudad.</div></li>
          <li><span class="y">1949</span><div class="ev"><b>Primera Mariápolis</b>Encuentros de verano en las Dolomitas que reunirán a miles: “ciudad de María”.</div></li>
          <li><span class="y">1957</span><div class="ev"><b>Llega a la Argentina</b>Por medio de un sacerdote que había participado de una Mariápolis en Italia. La primera comunidad nace en Catamarca. ${MK.v}</div></li>
          <li><span class="y">1958</span><div class="ev"><b>Primer viaje a Sudamérica</b>Lía Brunet, Marco Tecilla y Ada Ungaro recorren el continente. ${MK.v}</div></li>
          <li><span class="y">1961</span><div class="ev"><b>Focolares en Buenos Aires</b>Lía Brunet y Vittorio Sabbione abren los primeros focolares estables del país (1961–1962). ${MK.v}</div></li>
          <li><span class="y">1962</span><div class="ev"><b>Aprobación</b>Primera aprobación de la Santa Sede. ${MK.v}</div></li>
          <li><span class="y">1968</span><div class="ev"><b>Mariápolis Lía</b>Nace la ciudadela de O’Higgins, en la provincia de Buenos Aires. ${MK.v}</div></li>
          <li><span class="y">1991</span><div class="ev"><b>Economía de Comunión</b>Chiara la propone en Brasil al ver las favelas de San Pablo: empresas que comparten sus ganancias con los pobres.</div></li>
          <li><span class="y">2008</span><div class="ev"><b>Muere Chiara Lubich</b>El movimiento queda presidido por laicas elegidas, como establecen sus estatutos.</div></li>
        </ol>
        <p class="note">Las fechas de 1957, 1958, 1961, 1962 y 1968 están verificadas. Las demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] focolar es la <strong>unidad</strong>: contribuir a que se cumpla la oración de Jesús, “que todos sean uno” (Juan 17,21), en la familia, en la Iglesia, entre los cristianos, entre las religiones y en toda la sociedad.</p>
        <div class="cols">
          <div class="box"><h3>Dios Amor</h3><p>El descubrimiento fundante: en medio de la guerra, Dios es Amor y nos ama inmensamente.</p></div>
          <div class="box"><h3>Amor recíproco</h3><p>“Ámense unos a otros como yo los he amado.” Vivir el mandamiento nuevo hasta estar dispuestos a dar la vida.</p></div>
          <div class="box"><h3>Jesús en medio</h3><p>“Donde dos o tres están reunidos en mi nombre, allí estoy yo en medio de ellos” (Mateo 18,20).</p></div>
          <div class="box"><h3>Jesús abandonado</h3><p>El grito de Jesús en la cruz, “¿Por qué me has abandonado?”, como clave para abrazar cada dolor y cada división. Ver [[jesus-abandonado|Jesús abandonado]].</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La “espiritualidad de la unidad” es comunitaria: no solo se busca a Dios individualmente, sino juntos.</p>
        <ul class="dots">
          <li><strong>La [[palabra-de-vida|Palabra de Vida]]:</strong> cada mes, una frase del Evangelio comentada para vivirla en lo concreto y compartir las experiencias.</li>
          <li><strong>El “arte de amar”:</strong> amar a todos, amar primero, amar al enemigo, hacerse uno con el otro, ver a Jesús en cada persona.</li>
          <li><strong>El “dado del amor”:</strong> un dado con frases del arte de amar en cada cara, usado con los chicos para vivir un compromiso por día.</li>
          <li><strong>María:</strong> modelo de la Obra, la que dio a Jesús al mundo.</li>
          <li><strong>El diálogo:</strong> con otros cristianos, otras religiones y personas sin fe religiosa.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`
        <ul class="dots">
          <li><strong>Ciudadelas:</strong> 23 pequeñas ciudades en el mundo donde se vive la unidad, como la Mariápolis Lía. ${MK.v}</li>
          <li><strong>Centros Mariápolis</strong> en 35 países, para encuentros y formación. ${MK.v}</li>
          <li><strong>Economía de Comunión:</strong> alrededor de mil empresas que comparten utilidades. ${MK.v}</li>
          <li><strong>Movimiento Político por la Unidad</strong>, para promover la fraternidad en la política. ${MK.v}</li>
          <li><strong>Instituto Universitario Sophia</strong>, en Loppiano (Italia). ${MK.v}</li>
          <li><strong>Diálogo ecuménico e interreligioso.</strong></li>
          <li><strong>Editorial Ciudad Nueva</strong>, que publica también en la Argentina.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p><strong>No tienen hábito.</strong> Tanto los consagrados como los laicos visten ropa común. Los sacerdotes del movimiento usan la vestimenta de su diócesis o congregación.</p>` },

      { id:"santos", titulo:"Santos y testigos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>Sierva de Dios Chiara Lubich</b><span class="d">1920 – 2008 · Italia</span><p>Fundadora. Maestra, escritora y mujer de diálogo. Causa de beatificación abierta en 2015.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>Beata Chiara Luce Badano</b><span class="d">1971 – 1990 · Italia</span><p>Joven gen que vivió con alegría un cáncer de huesos y murió a los 18 años. Beatificada en 2010. Muy querida por los jóvenes.</p><div class="tags"><span>Joven</span><span>Beata</span></div></div>
          <div class="saint"><b>Siervo de Dios Igino Giordani</b><span class="d">1894 – 1980 · Italia</span><p>Escritor, diputado, esposo y padre. Considerado cofundador del movimiento.</p><div class="tags"><span>Laico</span><span>Político</span></div></div>
          <div class="saint"><b>Venerable Pasquale Foresi</b><span class="d">1929 – 2015 · Italia</span><p>Primer focolarino sacerdote, considerado también cofundador.</p><div class="tags"><span>Sacerdote</span></div></div>
          <div class="saint"><b>Lía Brunet</b><span class="d">siglo XX · Italia y Argentina</span><p>Una de las primeras compañeras de Chiara. Fue pionera en Sudamérica y da nombre a la Mariápolis Lía. ${MK.v}</p><div class="tags"><span>Argentina</span><span>Pionera</span></div></div>
        </div>
        <p class="note">Títulos y fechas de conocimiento general, salvo el dato de Lía Brunet. El estado de cada causa puede haber avanzado.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como joven</h3><p>Los Gen (Generación Nueva) y el Movimiento Juvenil por la Unidad. También una “experiencia” de meses en la Mariápolis Lía.</p></div>
          <div class="box"><h3>Como familia</h3><p>Familias Nuevas: grupos y encuentros para matrimonios y familias.</p></div>
          <div class="box"><h3>Como voluntario</h3><p>Laicos que se comprometen a vivir la espiritualidad de la unidad en su ambiente.</p></div>
          <div class="box"><h3>Como focolarino</h3><p>Consagración total, viviendo en un focolar y trabajando en una profesión.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Participar de una Mariápolis</strong> o de un encuentro abierto.</div></li>
          <li><div><strong>Integrarse a un grupo</strong> de la Palabra de Vida.</div></li>
          <li><div><strong>Conocer la Mariápolis Lía</strong> en una visita o en una experiencia de formación.</div></li>
          <li><div><strong>Profundizar el compromiso</strong> según el llamado de cada uno.</div></li>
        </ol>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Buenos Aires · O’Higgins, partido de Junín</span>
          <h3>Mariápolis Lía</h3>
          <p style="margin-top:8px">Ciudadela fundada en 1968 sobre 50 hectáreas donadas por los frailes capuchinos, a 21 km de Junín. Viven más de 200 personas de distintos países. Es un centro de formación juvenil: más de 4.000 jóvenes de todo el mundo pasaron allí un año de experiencia. Se sostiene con el trabajo de sus habitantes (muebles, artesanías, alimentos). ${MK.v}</p>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>Desde 1957</strong> en el país, con la primera comunidad en Catamarca, y focolares estables en Buenos Aires desde 1961–1962. ${MK.v}</li>
          <li><strong>Hay focolares</strong> en las principales ciudades argentinas, según el sitio oficial, que no las nombra. ${MK.v}</li>
          <li><strong>A nivel mundial</strong>, en 2021 el movimiento estaba presidido por Margaret Karram, con el argentino Roberto Almada como copresidente. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No pude confirmar si hay un focolar o una comunidad organizada en Mendoza. La presidencia puede haber cambiado desde 2021.</p>` }
    ],
    compartir:{
      frases:[
        ["Que todos sean uno.","Juan 17,21"],
        ["Si tú lo quieres, Jesús, yo también lo quiero.","Beata Chiara Luce Badano, ante su enfermedad"],
        ["Dios me ama inmensamente.","Chiara Lubich, sobre el descubrimiento que dio origen al movimiento"],
        ["Chau, sé feliz porque yo lo soy.","Beata Chiara Luce Badano, últimas palabras a su madre (según sus biógrafos)"]
      ],
      anecdotas:[
        ["Lo único que no se derrumba","Durante los bombardeos de Trento, Chiara y sus amigas veían cómo se destruían casas, proyectos y sueños. Se preguntaron si había un ideal que ninguna bomba pudiera derribar, y la respuesta fue Dios. ${MK.g}"],
        ["El Evangelio en los refugios","En los refugios antiaéreos solo podían llevar un libro chico: el Evangelio. Lo leían a la luz de una vela y elegían una frase para vivirla ese día. Así nació la Palabra de Vida. ${MK.g}"],
        ["Chiara Luce, luminosa","Chiara Luce Badano era una adolescente que jugaba al tenis, iba a la playa y salía con amigos. A los 17 le diagnosticaron un cáncer muy agresivo. Rechazó la morfina para estar lúcida y ofrecer el dolor. Pidió ser enterrada con un vestido de novia. ${MK.g}"],
        ["Una ciudad en la pampa","En la Mariápolis Lía, en medio del campo bonaerense, conviven jóvenes de decenas de países. Llegan por unos meses o hasta dos años a trabajar, estudiar y vivir en comunidad. ${MK.v}"]
      ],
      preguntas:[
        "Si se derrumbara todo lo que tenés, ¿qué quedaría en pie?",
        "¿Con quién te cuesta “hacerte uno”? ¿Qué paso concreto podés dar?",
        "Jesús prometió estar en medio de dos o tres reunidos en su nombre. ¿Se nota esa presencia en tu grupo?",
        "Chiara Luce dijo “si tú lo quieres, Jesús, yo también”. ¿Hay algo difícil en tu vida que te cueste aceptar así?"
      ],
      dinamica:"Una semana con el “dado del amor”: cada mañana, uno del grupo tira el dado (puede ser casero) y la frase que sale es el compromiso de todos para ese día: amar a todos, amar primero, hacerse uno, amar al enemigo, ver a Jesús en el otro, amarse recíprocamente. Al final de la semana, compartir experiencias concretas."
    },
    fuentes:[
      ["Focolares — Ficha del Movimiento (2021)","https://www.focolare.org/download/118/spagnolo/281890/ficha_movimiento-de-los-focolares_20210215.pdf?lang=it"],
      ["Focolares — Argentina","https://www.focolare.org/es/focolare-worldwide/america-sud/argentina/"],
      ["Focolares — Mariápolis Lía 1968–2018","https://www.focolare.org/en/mariapolis-lia"],
      ["Wikipedia — Mariápolis Lía","https://es.wikipedia.org/wiki/Mari%C3%A1polis_L%C3%ADa"]
    ]
  },

  /* ---------------------------------------------------- RENOVACIÓN CARISMÁTICA */
  "renovacion-carismatica": {
    familia:"movimientos",
    nombre:"Renovación Carismática",
    latin:"Renovación Carismática Católica · RCC",
    resumen:"No tiene fundador ni estatutos: nació en 1967, en un retiro de estudiantes universitarios en Estados Unidos que pidieron vivir un nuevo Pentecostés. Desde entonces se extendió por todo el mundo como una “corriente de gracia” centrada en el Espíritu Santo, la alabanza y los grupos de oración. En Cuyo tiene encuentros regionales y grupos en muchas parroquias.",
    tarjeta:"Corriente de gracia centrada en el Espíritu Santo: alabanza, grupos de oración y carismas. Presente en Cuyo.",
    lema:["Jesús es el Señor","Proclamación central de la Renovación, tomada de 1 Corintios 12,3 y Filipenses 2,11."],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Fundador","No tiene fundador"],
      ["Origen","18 de febrero de 1967, Universidad Duquesne (EE. UU.)"],
      ["Servicio internacional","CHARIS (desde 2019)"],
      ["Forma","Corriente de gracia, sin estatutos ni membresía formal"],
      ["Fiesta principal","Pentecostés"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Se llama <strong>Renovación Carismática Católica</strong> (RCC). No es una orden ni un movimiento en sentido estricto, sino lo que los papas llamaron una <strong>[[corriente-gracia|corriente de gracia]]</strong>: una experiencia que atraviesa parroquias, comunidades y movimientos. ${MK.v}</p>
        <p>No tiene fundador, ni estatutos, ni compromisos especiales para sus miembros. ${MK.v} Se organiza en grupos de oración, comunidades y equipos de servicio diocesanos, nacionales e internacionales.</p>
        <p>Desde 2019, la Santa Sede unificó sus servicios internacionales en <strong>CHARIS</strong> (Catholic Charismatic Renewal International Service).</p>
        <p class="note">La creación de CHARIS en 2019 es de conocimiento general; no la verifiqué hoy con un documento oficial.</p>` },

      { id:"fundador", titulo:"Origen y año", estado:"v", html:`
        <p>La Renovación no tiene fundador humano. Sus miembros dicen que la “fundó” el Espíritu Santo. ${MK.v}</p>
        <ul class="dots">
          <li><strong>18 de febrero de 1967:</strong> unos treinta estudiantes y profesores de la Universidad Duquesne, en Pittsburgh (Estados Unidos), hacen un retiro para profundizar la experiencia del Espíritu Santo, inspirados en la Iglesia primitiva. ${MK.v}</li>
          <li><strong>Poco después:</strong> experiencias similares surgen en la Universidad de Notre Dame y en Michigan. Grupos que nadie había planeado se multiplican. ${MK.v}</li>
          <li><strong>1975:</strong> Pablo VI recibe a miles de carismáticos en Roma, en Pentecostés, y llama a la Renovación una oportunidad para la Iglesia. ${MK.g}</li>
        </ul>
        <p class="note">El contexto: en 1961 Juan XXIII había pedido rezar por “un nuevo Pentecostés” para el Concilio Vaticano II. Muchos carismáticos ven en la Renovación una respuesta a esa oración.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1967</span><div class="ev"><b>El retiro de Duquesne</b>Nace la Renovación Carismática Católica. ${MK.v}</div></li>
          <li><span class="y">1970s</span><div class="ev"><b>Llega a la Argentina</b>Los primeros grupos de oración los inician religiosos trinitarios y jesuitas. ${MK.v}</div></li>
          <li><span class="y">1975</span><div class="ev"><b>Pablo VI</b>Primer gran encuentro internacional en Roma.</div></li>
          <li><span class="y">≈1980</span><div class="ev"><b>Desconfianza inicial</b>El entonces provincial jesuita Jorge Bergoglio pidió prudencia a sus responsables. Años después reconoció que no los soportaba y que pensaba que confundían una celebración con una escuela de samba. ${MK.v}</div></li>
          <li><span class="y">1990s</span><div class="ev"><b>Cercanía</b>Como obispo y arzobispo de Buenos Aires, Bergoglio se acercó y apoyó retiros, formación y encuentros, después de ver el bien que hacían. ${MK.v}</div></li>
          <li><span class="y">2017</span><div class="ev"><b>Jubileo de oro</b>50 años de la Renovación, celebrados en Roma con el papa Francisco.</div></li>
          <li><span class="y">2019</span><div class="ev"><b>CHARIS</b>Un único servicio internacional para toda la Renovación.</div></li>
          <li><span class="y">2026</span><div class="ev"><b>Encuentro de Cuyo en San Rafael</b>El 8 de agosto, grupos de Mendoza, San Juan, San Luis y el sur mendocino se reúnen por primera vez en San Rafael. ${MK.v}</div></li>
        </ol>
        <p class="note">Las fechas de 1967, 1970s, la relación con Bergoglio y 2026 están verificadas. Las de 1975, 2017 y 2019 son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>Su misión es <strong>hacer presente hoy la experiencia de Pentecostés</strong>: que cada bautizado tenga un encuentro personal y vivo con Jesús por la acción del Espíritu Santo. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Efusión del Espíritu</h3><p>Una experiencia de renovación de la gracia del Bautismo y la Confirmación. Ver [[efusion|efusión del Espíritu]].</p></div>
          <div class="box"><h3>Alabanza</h3><p>Oración alegre, con cantos, manos alzadas y espontaneidad.</p></div>
          <div class="box"><h3>Carismas</h3><p>Los dones de 1 Corintios 12: profecía, sanación, lenguas, discernimiento, enseñanza. Ver [[carismas-paulinos|carismas]].</p></div>
          <div class="box"><h3>Evangelización</h3><p>Anunciar a Jesús con entusiasmo, en retiros, asambleas y misiones.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La Trinidad, y en especial el Espíritu Santo</strong>, que revela a Jesús. ${MK.v}</li>
          <li><strong>La Palabra de Dios:</strong> lectura diaria de la Biblia.</li>
          <li><strong>El [[grupo-oracion|grupo de oración]]:</strong> el corazón de la vida carismática. Encuentro semanal con alabanza, Palabra, enseñanza y oración unos por otros.</li>
          <li><strong>La conversión personal:</strong> muchos llegan a la fe adulta a través de un retiro o una asamblea.</li>
          <li><strong>La Eucaristía y María:</strong> la Renovación católica se vive dentro de la vida sacramental de la Iglesia.</li>
          <li><strong>El ecumenismo:</strong> la experiencia carismática es compartida con muchas Iglesias evangélicas, y eso abre al diálogo.</li>
        </ul>
        <div class="box" style="margin-top:14px"><h3>Un equilibrio necesario</h3><p>Los obispos y los papas han valorado mucho la Renovación y, al mismo tiempo, le pidieron cuidar algunas cosas: no buscar experiencias extraordinarias por sí mismas, integrarse en la parroquia y la diócesis, y discernir bien los carismas. Es la misma prudencia que pidió Bergoglio al principio. ${MK.g}</p></div>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Grupos de oración</strong> en parroquias de todo el mundo.</li>
          <li><strong>Seminarios de vida en el Espíritu:</strong> catequesis de varias semanas que preparan para la efusión del Espíritu.</li>
          <li><strong>Retiros, asambleas y encuentros</strong> masivos.</li>
          <li><strong>Ministerios:</strong> música, intercesión, sanación interior, servicio a los enfermos.</li>
          <li><strong>Comunidades de alianza</strong>, donde familias y consagrados viven juntos el carisma.</li>
          <li><strong>Evangelización juvenil:</strong> retiros y grupos para jóvenes.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"v", html:`
        <p><strong>No tienen hábito ni distintivo obligatorio.</strong> La Renovación no tiene membresía formal: participa quien quiere. ${MK.v}</p>` },

      { id:"santos", titulo:"Testigos y figuras", estado:"g", html:`
        <p>Por no tener fundador ni ser una institución, la Renovación no tiene santos “propios”. Estas personas marcaron su historia:</p>
        <div class="saints">
          <div class="saint"><b>Patti Gallagher Mansfield</b><span class="d">nacida en 1946 · Estados Unidos</span><p>Era estudiante en el retiro de Duquesne de 1967 y dio testimonio de él durante décadas.</p><div class="tags"><span>Testigo del origen</span></div></div>
          <div class="saint"><b>Cardenal Léon-Joseph Suenens</b><span class="d">1904 – 1996 · Bélgica</span><p>Uno de los grandes protagonistas del Concilio, acompañó a la Renovación y la ayudó a integrarse en la Iglesia.</p><div class="tags"><span>Cardenal</span></div></div>
          <div class="saint"><b>Cardenal Raniero Cantalamessa</b><span class="d">nacido en 1934 · Italia</span><p>Capuchino, predicador de la Casa Pontificia durante décadas. Vivió la efusión del Espíritu y la explica con profundidad.</p><div class="tags"><span>Predicador</span></div></div>
          <div class="saint"><b>Santa Isabel de la Trinidad, San Juan de la Cruz, San Serafín de Sarov</b><span class="d">· Distintas épocas</span><p>Santos que los carismáticos leen y citan como maestros de la vida en el Espíritu, aunque vivieron antes de la Renovación.</p><div class="tags"><span>Inspiración</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general; no los verifiqué uno por uno hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Ir a un grupo de oración</strong> de la parroquia. Son abiertos y no requieren inscripción.</div></li>
          <li><div><strong>Hacer un Seminario de Vida en el Espíritu</strong>, que dura varias semanas.</div></li>
          <li><div><strong>Recibir la oración por la efusión del Espíritu</strong> al final del seminario.</div></li>
          <li><div><strong>Seguir formándose</strong> en la Palabra y en la vida de la Iglesia.</div></li>
          <li><div><strong>Servir</strong> en algún ministerio del grupo: música, acogida, intercesión.</div></li>
        </ol>
        <p class="note">Recomendación pastoral: elegir un grupo integrado a una parroquia y acompañado por un sacerdote.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Cuyo · San Rafael, Mendoza</span>
          <h3>Encuentro Regional de Cuyo 2026</h3>
          <p style="margin-top:8px">El sábado 8 de agosto de 2026 se realizó por primera vez en San Rafael, en el Centro de Congresos y Exposiciones. Participaron grupos de Mendoza, San Juan, San Luis y del sur mendocino, con delegaciones hasta de Malargüe. La misa de cierre la presidió monseñor Marcelo Mazzitelli. ${MK.v}</p>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>En la Argentina</strong> está presente desde hace más de 50 años, con grupos iniciados por religiosos trinitarios y jesuitas. ${MK.v}</li>
          <li><strong>La Conferencia Episcopal Argentina</strong> la reconoció como “corriente de gracia”. ${MK.v}</li>
          <li><strong>En el mundo</strong>, la Renovación Argentina indica más de 100 millones de católicos en 200 países, y otra fuente católica habla de 72 millones. Las cifras varían mucho según quién cuente. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré una lista pública de los grupos de oración de la ciudad de Mendoza. Lo habitual es preguntar en la propia parroquia.</p>` }
    ],
    compartir:{
      frases:[
        ["Nadie puede decir “Jesús es el Señor” si no es bajo la acción del Espíritu Santo.","1 Corintios 12,3"],
        ["Renueva en nuestro tiempo los prodigios como de un nuevo Pentecostés.","San Juan XXIII, oración por el Concilio Vaticano II"],
        ["Recibirán la fuerza del Espíritu Santo que descenderá sobre ustedes, y serán mis testigos.","Hechos 1,8"]
      ],
      anecdotas:[
        ["El retiro de Duquesne","En febrero de 1967, un grupo de universitarios leyó los Hechos de los Apóstoles y un libro sobre la fe vivida con fuerza. Fueron a un retiro pidiendo al Espíritu Santo lo mismo que los apóstoles. Algunos terminaron la noche rezando, en silencio o alabando, en la capilla. ${MK.v}"],
        ["La escuela de samba","El papa Francisco contó que, de joven jesuita, no soportaba a los carismáticos y decía que confundían una celebración litúrgica con una escuela de samba. Después cambió de opinión al ver el bien que hacían y los apoyó siempre. ${MK.v}"],
        ["Primera vez en San Rafael","En agosto de 2026, grupos de toda la región de Cuyo, incluso de Malargüe, viajaron a San Rafael para su primer encuentro regional allí. ${MK.v}"]
      ],
      preguntas:[
        "¿Qué lugar ocupa el Espíritu Santo en tu oración? ¿Le hablás o solo hablás de él?",
        "Los apóstoles tenían miedo antes de Pentecostés. ¿A qué le tenés miedo vos cuando se trata de hablar de tu fe?",
        "¿Qué don o talento te dio Dios que podrías poner al servicio de tu comunidad?",
        "¿Sabés alabar a Dios, además de pedirle cosas? ¿Por qué cosa podrías alabarlo hoy?"
      ],
      dinamica:"Una “cadena de alabanza”: en ronda, cada uno dice en voz alta una frase breve de alabanza o gratitud a Dios (“Te alabo porque…”), sin pedir nada. Se puede acompañar con una canción y terminar con una oración al Espíritu Santo, como el “Ven, Espíritu Santo”."
    },
    fuentes:[
      ["Catholic.net — Renovación Carismática Católica","https://es.catholic.net/op/articulos/20092/renovacin-carismtica-catlica.html"],
      ["RCC Argentina — Origen","https://rcc-argentina.com.ar/origen-de-rcc/"],
      ["Zenit (2014) — Bergoglio y la Renovación Carismática","https://es.zenit.org/articles/bergoglio-acabo-viendo-en-la-renovacion-carismatica-una-corriente-de-gracia"],
      ["Obispado de San Rafael (2026) — Encuentro Regional de Cuyo","https://obispadodesanrafael.com.ar/noticias/primera-vez-en-san-rafael-la-renovacion-carismatica-reunio-a-cientos-de-fieles-en-un-encuentro-regional"]
    ]
  },

  /* ---------------------------------------------------- CAMINO NEOCATECUMENAL */
  neocatecumenal: {
    familia:"movimientos",
    nombre:"Camino Neocatecumenal",
    latin:"Camino Neocatecumenal · Neocatechumenale Iter",
    resumen:"Un pintor español que buscaba sentido se fue a vivir entre los más pobres de las barracas de Madrid, con una guitarra y una Biblia. Allí, junto a Carmen Hernández, nació un itinerario para redescubrir el Bautismo en pequeñas comunidades parroquiales, como hacían los primeros cristianos antes de bautizarse. Hoy está en todo el mundo.",
    tarjeta:"Itinerario de iniciación cristiana en pequeñas comunidades parroquiales. Kiko Argüello y Carmen Hernández.",
    lema:["Amaos como yo os he amado… en esto conocerán todos que sois mis discípulos","Juan 13,34-35. El amor en la comunidad como signo para el mundo."],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Iniciadores","Kiko Argüello, Carmen Hernández y P. Mario Pezzi"],
      ["Origen","1964, barracas de Palomeras Altas (Madrid)"],
      ["Estatutos","Aprobados en 2002 y definitivamente el 11 de mayo de 2008"],
      ["Forma","Itinerario de formación católica al servicio de los obispos"],
      ["Seminarios","Más de 100 seminarios Redemptoris Mater"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Su nombre es <strong>Camino Neocatecumenal</strong>. Sus estatutos no lo definen como movimiento ni como asociación, sino como un <strong>itinerario de formación católica</strong> que se vive en las parroquias, bajo la autoridad del obispo diocesano. ${MK.v}</p>
        <p>La palabra viene de [[catecumenado|catecumenado]]: el camino de preparación que en la Iglesia primitiva hacían los adultos antes de bautizarse. El Camino propone un “nuevo catecumenado” para quienes ya están bautizados, para redescubrir su Bautismo. Popularmente se los llama “kikos”.</p>` },

      { id:"fundador", titulo:"Iniciadores y año", estado:"v", html:`
        <div class="cols">
          <div class="box"><h3>Kiko Argüello</h3><p>Nacido en 1939 en León, España. Pintor premiado, pasó por una fuerte crisis existencial. Se convirtió y decidió vivir entre los pobres.</p></div>
          <div class="box"><h3>Carmen Hernández</h3><p>1930–2016. Química y teóloga, con una gran formación bíblica y litúrgica. Aportó la dimensión pascual y conciliar del Camino. ${MK.v}</p></div>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>1964:</strong> en las barracas de Palomeras Altas, en las afueras de Madrid, nace la primera comunidad entre gitanos, mendigos y gente muy pobre. ${MK.v}</li>
          <li><strong>1968:</strong> primeras catequesis en Roma; desde allí se extiende a muchas diócesis. ${MK.v}</li>
          <li><strong>2002:</strong> aprobación de los estatutos <em>ad experimentum</em>. ${MK.v}</li>
          <li><strong>11 de mayo de 2008:</strong> aprobación definitiva por el Pontificio Consejo para los Laicos. ${MK.v}</li>
        </ul>
        <p class="note">Al equipo responsable internacional pertenece también el sacerdote italiano Mario Pezzi; después de la muerte de Carmen se sumó María Ascensión Romero (2018). ${MK.v}</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1964</span><div class="ev"><b>Palomeras Altas</b>Kiko vive en una barraca y anuncia el Evangelio a sus vecinos. Nace la primera comunidad. ${MK.v}</div></li>
          <li><span class="y">1968</span><div class="ev"><b>Roma</b>Primeras catequesis en la parroquia de los Mártires Canadienses. ${MK.v}</div></li>
          <li><span class="y">1987</span><div class="ev"><b>Primer seminario</b>Se abre en Roma el primer seminario diocesano misionero <em>Redemptoris Mater</em>.</div></li>
          <li><span class="y">1990</span><div class="ev"><b>Reconocimiento</b>Juan Pablo II lo reconoce como itinerario de formación católica válido para la sociedad y los tiempos actuales.</div></li>
          <li><span class="y">2002</span><div class="ev"><b>Estatutos</b>Primera aprobación. ${MK.v}</div></li>
          <li><span class="y">2008</span><div class="ev"><b>Aprobación definitiva</b>11 de mayo. ${MK.v}</div></li>
          <li><span class="y">2016</span><div class="ev"><b>Muere Carmen Hernández</b>${MK.v}</div></li>
        </ol>
        <p class="note">Las fechas de 1964, 1968, 2002, 2008 y 2016 están verificadas. Las de 1987 y 1990 son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] es <strong>redescubrir la riqueza del Bautismo</strong> a través de un camino gradual, en pequeña comunidad, dentro de la parroquia. Se apoya en lo que el Camino llama un “trípode”:</p>
        <div class="cols">
          <div class="box"><h3>Palabra</h3><p>Celebración semanal de la Palabra de Dios, preparada por turnos por los miembros de la comunidad.</p></div>
          <div class="box"><h3>Liturgia</h3><p>Eucaristía en pequeña comunidad el sábado por la noche, con una forma de celebración propia aprobada por la Santa Sede.</p></div>
          <div class="box"><h3>Comunidad</h3><p>Convivencias mensuales, compartir la vida y crecer juntos en la fe.</p></div>
          <div class="box"><h3>El [[kerygma|kerigma]]</h3><p>Todo comienza con el anuncio: Cristo murió y resucitó por vos, te ama así como sos.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>El misterio pascual:</strong> muerte y resurrección de Cristo como centro de todo. La Vigilia Pascual se celebra durante toda la noche. ${MK.v}</li>
          <li><strong>Gradualidad:</strong> el itinerario tiene etapas (escrutinios, Shemá, traditio, redditio y otras) que pueden llevar muchos años.</li>
          <li><strong>La historia personal:</strong> descubrir a Dios actuando en la propia historia, incluso en el sufrimiento.</li>
          <li><strong>La cruz gloriosa:</strong> aceptar la propia cruz como lugar de encuentro con Cristo.</li>
          <li><strong>La belleza:</strong> iconos, cantos y arte propios, muchos compuestos y pintados por Kiko Argüello.</li>
          <li><strong>La renovación del Bautismo</strong> en la Vigilia Pascual al final del camino. ${MK.v}</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Comunidades parroquiales:</strong> hacia 2007 había unas 20.000 en el mundo, con alrededor de un millón de personas. ${MK.v}</li>
          <li><strong>[[redemptoris-mater|Seminarios Redemptoris Mater]]:</strong> más de cien seminarios diocesanos misioneros. ${MK.v}</li>
          <li><strong>Familias en misión:</strong> familias enteras, a veces con muchos hijos, que se van a vivir a lugares difíciles para anunciar el Evangelio. En 2006 eran más de 500. ${MK.v}</li>
          <li><strong>Misiones populares</strong> en plazas y calles.</li>
          <li><strong>Vocaciones:</strong> el Camino ha dado muchos sacerdotes y religiosas.</li>
        </ul>
        <p class="note">Las cifras son las últimas que encontré y tienen casi veinte años; hoy probablemente son distintas.</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"v", html:`
        <p><strong>No tienen hábito.</strong> Son personas de todas las edades y estados de vida que viven el itinerario en su parroquia. ${MK.v}</p>` },

      { id:"santos", titulo:"Figuras vinculadas", estado:"g", html:`
        <p>El Camino es reciente y no tiene santos canonizados propios.</p>
        <div class="saints">
          <div class="saint"><b>Kiko Argüello</b><span class="d">nacido en 1939 · España</span><p>Iniciador, pintor, compositor de muchos de los cantos del Camino.</p><div class="tags"><span>Iniciador</span></div></div>
          <div class="saint"><b>Sierva de Dios Carmen Hernández</b><span class="d">1930 – 2016 · España</span><p>Coiniciadora. Su causa de beatificación fue abierta en Madrid.</p><div class="tags"><span>Iniciadora</span></div></div>
          <div class="saint"><b>P. Mario Pezzi</b><span class="d">Italia</span><p>Sacerdote, miembro del equipo responsable internacional.</p><div class="tags"><span>Equipo internacional</span></div></div>
        </div>
        <p class="note">La causa de Carmen Hernández es de conocimiento general; no la verifiqué hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Asistir a las catequesis iniciales</strong> que se anuncian en una parroquia donde está el Camino. Suelen durar unas semanas, con dos encuentros por semana.</div></li>
          <li><div><strong>Convivencia final</strong> de fin de semana, donde nace una nueva comunidad.</div></li>
          <li><div><strong>Caminar con la comunidad:</strong> Palabra semanal, Eucaristía del sábado, convivencias mensuales.</div></li>
          <li><div><strong>Pasar las etapas</strong> del itinerario, guiados por catequistas.</div></li>
          <li><div><strong>Renovar el Bautismo</strong> en la Vigilia Pascual al final del camino.</div></li>
        </ol>
        <div class="box" style="margin-top:14px"><h3>Un camino exigente</h3><p>El Camino ha dado muchos frutos de conversión y vocaciones, y la Santa Sede lo aprobó. También ha generado tensiones en algunas parroquias y diócesis, sobre todo cuando se percibió que funcionaba aparte del resto de la comunidad o sin adaptarse a la cultura local. En algunos países los obispos pidieron pausas o correcciones. Conviene conocerlo de cerca y conversar con el párroco antes de empezar. ${MK.v}</p></div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p class="note">${MK.p} No encontré fuentes confiables sobre la llegada del Camino a la Argentina, sus comunidades actuales ni su presencia en Mendoza. Encontré un video testimonial de una familia en misión del Camino en una villa de la Argentina, pero no pude verificar dónde ni cuándo. Es un dato a completar: la forma más directa es preguntar en el Arzobispado o en las parroquias.</p>` }
    ],
    compartir:{
      frases:[
        ["Amaos como yo os he amado; en esto conocerán todos que sois mis discípulos.","Juan 13,34-35"],
        ["Si alguno está en Cristo, es una nueva creación.","2 Corintios 5,17"],
        ["Cristo murió y resucitó por ti.","Síntesis del kerigma, el primer anuncio"]
      ],
      anecdotas:[
        ["Una guitarra y una Biblia","Kiko Argüello, pintor de éxito, se fue a vivir a una barraca entre los más pobres de Madrid con una guitarra, una Biblia y un crucifijo. Pensaba quedarse callado junto a ellos; terminó anunciándoles el Evangelio cuando se lo pidieron. ${MK.g}"],
        ["La Vigilia que dura toda la noche","Las comunidades del Camino celebran la Vigilia Pascual de la noche del Sábado Santo hasta el amanecer del Domingo, como en la Iglesia antigua. ${MK.g}"],
        ["Familias en misión","Hay familias del Camino que dejan su país y se van, con todos sus hijos, a vivir en lugares donde la Iglesia es muy pequeña, solo para estar ahí y dar testimonio. ${MK.v}"]
      ],
      preguntas:[
        "¿Qué sabés de tu propio Bautismo? ¿Cuándo fue, quiénes estaban, qué significa hoy para vos?",
        "¿Dónde ves a Dios actuando en tu historia, incluso en los momentos difíciles?",
        "Los primeros cristianos se preparaban años para bautizarse. ¿Qué te enseña eso sobre tomarte en serio la fe?",
        "¿Tenés una comunidad donde compartir la fe de verdad? Si no, ¿dónde podrías buscarla?"
      ],
      dinamica:"Una “historia de salvación personal”: cada uno dibuja una línea de su vida con cinco momentos importantes, buenos y malos, y escribe al lado dónde estuvo Dios en cada uno. Se comparte en grupos de tres, solo lo que cada uno quiera."
    },
    fuentes:[
      ["Dicasterio para los Laicos — Camino Neocatecumenal","https://www.laityfamilylife.va/content/laityfamilylife/en/associazioni-e-movimenti/repertorio/cammino-neocatecumenale.html"],
      ["Wikipedia — Neocatechumenal Way","https://en.wikipedia.org/wiki/Neocatechumenal_Way"]
    ]
  },

  /* ---------------------------------------------------- COMUNIÓN Y LIBERACIÓN */
  "comunion-liberacion": {
    familia:"movimientos",
    nombre:"Comunión y Liberación",
    latin:"Movimiento Comunión y Liberación · Fraternidad de CL",
    resumen:"Un sacerdote italiano dejó la enseñanza universitaria para dar clases de religión en un liceo de Milán. Quería mostrar a los chicos que el cristianismo responde a las preguntas más grandes del corazón humano. De esa experiencia nació un movimiento que hoy está en unos 90 países y que propone vivir la fe como un encuentro que cambia la vida.",
    tarjeta:"La fe como encuentro que responde al corazón humano. Don Luigi Giussani y la Escuela de comunidad.",
    lema:["El acontecimiento cristiano","Para CL, el cristianismo no es primero una doctrina ni una moral, sino el encuentro con una Presencia: Cristo."],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Fundador","Siervo de Dios Luigi Giussani (1922 – 2005)"],
      ["Origen","1954, Liceo Berchet de Milán"],
      ["Nombre actual","Desde 1969"],
      ["Reconocimiento","11 de febrero de 1982 (Fraternidad de CL)"],
      ["Presencia","Unos 90 países"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Nació en 1954 como <strong>Gioventù Studentesca</strong> (Juventud Estudiantil). El nombre <strong>Comunión y Liberación</strong> apareció en 1969, en un volante de universitarios: expresa la convicción de que la comunión cristiana es la base de una liberación auténtica. ${MK.v}</p>
        <p>La realidad jurídica es la <strong>[[fraternidad-cl|Fraternidad de Comunión y Liberación]]</strong>, reconocida por la Santa Sede como asociación laical de derecho pontificio. Dentro del movimiento existen formas de vida consagrada, como los <strong>[[memores-domini|Memores Domini]]</strong>. ${MK.v}</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>Don Luigi Giussani</strong> nació en 1922 en Desio, cerca de Milán. Fue sacerdote y profesor de teología. ${MK.g}</p>
        <ul class="dots">
          <li><strong>1954:</strong> empieza a enseñar religión en el Liceo Berchet de Milán y funda Gioventù Studentesca. ${MK.v}</li>
          <li><strong>1969:</strong> aparece el nombre Comunión y Liberación. ${MK.v}</li>
          <li><strong>11 de febrero de 1982:</strong> el Pontificio Consejo para los Laicos reconoce la Fraternidad de CL. ${MK.v}</li>
          <li><strong>22 de febrero de 2005:</strong> muere en Milán. ${MK.v} Lo sucede el sacerdote español Julián Carrón. ${MK.v}</li>
          <li><strong>2012:</strong> se abre su causa de beatificación. ${MK.g}</li>
        </ul>
        <p class="note">Que su causa de canonización avanza lo confirma una nota de ACI Prensa sobre la Argentina; el año de apertura es de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1954</span><div class="ev"><b>Liceo Berchet</b>Giussani, que podía seguir una carrera académica, elige dar clases a adolescentes. ${MK.v}</div></li>
          <li><span class="y">1968</span><div class="ev"><b>Crisis</b>En plena revolución estudiantil, muchos jóvenes del movimiento lo abandonan para militar en la política. Giussani insiste en que la respuesta es Cristo, no una ideología.</div></li>
          <li><span class="y">1969</span><div class="ev"><b>Nuevo nombre</b>Comunión y Liberación. ${MK.v}</div></li>
          <li><span class="y">1980</span><div class="ev"><b>Meeting de Rímini</b>Nace el Meeting por la Amistad entre los Pueblos, un festival cultural anual que reúne a cientos de miles de personas. ${MK.v}</div></li>
          <li><span class="y">1982</span><div class="ev"><b>Reconocimiento</b>de la Fraternidad de CL. ${MK.v}</div></li>
          <li><span class="y">2005</span><div class="ev"><b>Muere Giussani</b>Lo sucede Julián Carrón. ${MK.v}</div></li>
          <li><span class="y">2021</span><div class="ev"><b>Cambio de conducción</b>Carrón renuncia y asume Davide Prosperi, en un momento en que la Santa Sede pidió a los movimientos renovar sus autoridades. ${MK.v}</div></li>
        </ol>
        <p class="note">El año de inicio del Meeting de Rímini (1980) y la crisis de 1968 son de conocimiento general; el resto está verificado.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] de CL es mostrar que <strong>el cristianismo es un acontecimiento</strong>: el encuentro con Cristo presente, que responde a las exigencias más profundas del corazón humano.</p>
        <div class="cols">
          <div class="box"><h3>El sentido religioso</h3><p>Todo ser humano tiene un deseo de verdad, belleza, justicia y felicidad. Ese deseo es el punto de partida. Ver [[sentido-religioso|sentido religioso]].</p></div>
          <div class="box"><h3>El encuentro</h3><p>Cristo se encuentra hoy a través de personas concretas que viven de Él: una compañía.</p></div>
          <div class="box"><h3>La razón</h3><p>La fe no anula la razón; la abre. Giussani insistía en verificar la fe en la experiencia.</p></div>
          <div class="box"><h3>La cultura</h3><p>Una fe que no se vuelve cultura no está plenamente vivida. Por eso CL se compromete con la educación, el arte y la sociedad.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La [[escuela-comunidad|Escuela de comunidad]]:</strong> encuentro semanal en el que se lee y se confronta con la propia vida un texto de Giussani o de su sucesor. Es el gesto fundamental del movimiento.</li>
          <li><strong>La Liturgia de las Horas</strong> (en especial el Ángelus y Laudes) rezada también por los laicos.</li>
          <li><strong>La caritativa:</strong> un gesto semanal de servicio gratuito, para aprender a compartir la necesidad del otro.</li>
          <li><strong>El canto y la belleza:</strong> el movimiento tiene una gran tradición de cantos populares, litúrgicos y de muchas culturas.</li>
          <li><strong>La amistad cristiana:</strong> la compañía de quienes se ayudan a vivir la fe.</li>
          <li><strong>Libros clave:</strong> <em>El sentido religioso</em>, <em>Los orígenes de la pretensión cristiana</em> y <em>Por qué la Iglesia</em>, la trilogía de Giussani.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Escuela y universidad:</strong> grupos de estudiantes secundarios y universitarios, el origen del movimiento.</li>
          <li><strong>Meeting de Rímini</strong>, su iniciativa cultural más conocida. ${MK.v}</li>
          <li><strong>Obras educativas y sociales:</strong> escuelas, centros de ayuda, bancos de alimentos (el Banco de Alimentos italiano nació de miembros de CL).</li>
          <li><strong>Misiones</strong> en América Latina, África y Asia.</li>
          <li><strong>Encuentros culturales locales:</strong> en la Argentina, el Encuentro Buenos Aires. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p><strong>No tienen hábito.</strong> Los laicos y también los Memores Domini, que son consagrados, visten ropa común y trabajan en profesiones normales.</p>` },

      { id:"santos", titulo:"Figuras vinculadas", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>Siervo de Dios Luigi Giussani</b><span class="d">1922 – 2005 · Italia</span><p>Fundador. Educador, teólogo y escritor. Su causa de beatificación está en curso.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Julián Carrón</b><span class="d">nacido en 1950 · España</span><p>Sacerdote y teólogo, guió el movimiento entre 2005 y 2021.</p><div class="tags"><span>Sucesor</span></div></div>
          <div class="saint"><b>Davide Prosperi</b><span class="d">Italia</span><p>Laico, profesor universitario. Guía el movimiento desde 2021.</p><div class="tags"><span>Actual guía</span></div></div>
          <div class="saint"><b>Siervo de Dios Enzo Piccinini</b><span class="d">1951 – 1999 · Italia</span><p>Cirujano, esposo y padre, educador de universitarios en Bolonia. Su causa de beatificación está abierta.</p><div class="tags"><span>Laico</span><span>Médico</span></div></div>
        </div>
        <p class="note">Los datos de Carrón y Prosperi están verificados en cuanto a sus períodos; fechas de nacimiento y la causa de Piccinini son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Conocer a alguien del movimiento</strong>: en CL todo empieza por un encuentro con personas.</div></li>
          <li><div><strong>Participar de una Escuela de comunidad</strong>, que es abierta.</div></li>
          <li><div><strong>Sumarse a los gestos:</strong> caritativa, vacaciones comunitarias, encuentros culturales.</div></li>
          <li><div><strong>Inscribirse en la Fraternidad de CL</strong>, si uno quiere un compromiso estable, ya adulto.</div></li>
          <li><div><strong>Vocación especial:</strong> Memores Domini, la Fraternidad de San Carlos Borromeo (sacerdotes) u otras formas.</div></li>
        </ol>
        <div class="cols" style="margin-top:14px">
          <div class="box"><h3>Para estudiantes</h3><p>Gioventù Studentesca (secundarios) y CLU (universitarios).</p></div>
          <div class="box"><h3>Para adultos</h3><p>Escuela de comunidad, Fraternidad y obras.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <ul class="dots">
          <li><strong>En la Argentina</strong> el movimiento está presente y organiza cada año el <strong>Encuentro Buenos Aires</strong>, un festival cultural inspirado en el Meeting de Rímini (hubo edición en 2025). ${MK.v}</li>
          <li><strong>Sitio oficial argentino:</strong> ar.clonline.org, con una sección sobre su historia en el país.</li>
          <li><strong>Investigación:</strong> hay estudios académicos argentinos sobre la llegada de CL al país. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No pude leer el contenido de la historia de CL en Argentina del sitio oficial ni encontré confirmación de una comunidad en Mendoza. Es un dato a completar.</p>` }
    ],
    compartir:{
      frases:[
        ["El cristianismo no es una doctrina, sino un acontecimiento: el encuentro con una Presencia.","Idea central de Luigi Giussani"],
        ["Lo que más necesita el hombre es la certeza de que existe una respuesta a la pregunta sobre el significado de la vida.","Idea de Giussani en El sentido religioso (paráfrasis)"],
        ["El corazón del hombre es un grito de deseo de felicidad.","Idea de Giussani (paráfrasis)"]
      ],
      anecdotas:[
        ["Tres escalones","Giussani contaba que, subiendo los tres escalones de entrada del Liceo Berchet el primer día de clase, sintió el deseo de devolver a esos jóvenes la fe como algo vivo. Por eso dejó la docencia en el seminario para enseñar a adolescentes. ${MK.g}"],
        ["El tren y la pregunta","Giussani contó que la decisión de dedicarse a los jóvenes nació en un viaje en tren, al darse cuenta de que unos estudiantes con los que conversó no sabían casi nada de la fe. ${MK.g}"],
        ["Un banco de alimentos","El Banco de Alimentos de Italia nació de la amistad de un empresario y miembros de CL que se preguntaron qué hacer con la comida que se tiraba. ${MK.g}"]
      ],
      preguntas:[
        "¿Cuáles son las preguntas más grandes que tenés sobre tu vida? ¿Dónde buscás las respuestas?",
        "¿Tu fe es más una lista de reglas o un encuentro con alguien? ¿Cómo se nota?",
        "¿Quién te mostró por primera vez que creer en Jesús podía hacer la vida más plena?",
        "¿La fe tiene que ver con lo que estudiás, con la música que escuchás, con tu trabajo?"
      ],
      dinamica:"Una mini “Escuela de comunidad”: leer juntos un párrafo breve (por ejemplo, el encuentro de Juan y Andrés con Jesús en Juan 1,35-39: “Vengan y lo verán”) y que cada uno cuente un hecho concreto de su vida en el que vio algo parecido. La regla es hablar de experiencias, no de opiniones."
    },
    fuentes:[
      ["Wikipedia — Communion and Liberation","https://en.wikipedia.org/wiki/Communion_and_Liberation"],
      ["ACI Prensa — Encuentro Buenos Aires 2025","https://www.aciprensa.com/noticias/119315/este-fin-de-semana-es-el-encuentro-buenos-aires-2025-del-movimiento-comunion-y-liberacion"],
      ["ACI Prensa — Argentina recuerda a Luigi Giussani","https://www.aciprensa.com/noticias/107413/argentina-recuerda-a-luigi-giussani-de-comunion-y-liberacion-cuya-causa-de-canonizacion-avanza"],
      ["Comunión y Liberación Argentina — Historia","https://ar.clonline.org/es/cl-en-argentina"]
    ]
  },

  /* ---------------------------------------------------- ACCIÓN CATÓLICA */
  "accion-catolica": {
    familia:"movimientos",
    nombre:"Acción Católica",
    latin:"Acción Católica Argentina · ACA",
    resumen:"No nació de un fundador carismático sino del pedido de los papas: que los laicos se organizaran para evangelizar junto a sus obispos, en la parroquia y en la diócesis. En la Argentina existe desde 1931 y por sus grupos pasaron generaciones enteras de chicos, jóvenes y adultos. De la Acción Católica salieron santos como Pier Giorgio Frassati y Gianna Beretta Molla.",
    tarjeta:"Laicos organizados al servicio de la parroquia y la diócesis. Aspirantes, jóvenes y adultos. En Argentina desde 1931.",
    lema:["Instaurar todas las cosas en Cristo","Lema de San Pío X (Efesios 1,10), inspiración de la Acción Católica."],
    habito:[["Sin hábito: insignia","oklch(0.75 0.03 260)"]],
    datos:[
      ["Siglas","ACA (Acción Católica Argentina)"],
      ["Origen","Impulsada por los papas, sobre todo Pío XI"],
      ["En la Argentina","Desde 1931"],
      ["Sectores","Aspirantes (5–12), Jóvenes (13–30), Adultos (30+)"],
      ["Forma","Asociación de laicos diocesana"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p><strong>Acción Católica</strong> es una asociación de laicos presente en muchos países, cada uno con su propia organización. En nuestro país se llama <strong>Acción Católica Argentina</strong> (ACA). ${MK.v}</p>
        <p>Se define como una vocación laical vivida en forma asociada, dentro de una institución de la Iglesia, dedicada a evangelizar la realidad de todos los días. Integrarse a un grupo en cualquier parroquia del país es formar parte de la ACA en esa diócesis. ${MK.v}</p>` },

      { id:"fundador", titulo:"Origen y año", estado:"g", html:`
        <p>La Acción Católica <strong>no tiene un fundador único</strong>. Es fruto del impulso de varios papas que, desde fines del siglo XIX, pidieron a los laicos organizarse para la misión.</p>
        <ul class="dots">
          <li><strong>1867:</strong> en Italia nace la Sociedad de la Juventud Católica, considerada antecedente de la Acción Católica italiana.</li>
          <li><strong>1905:</strong> San Pío X habla de la “acción católica” en la encíclica <em>Il fermo proposito</em>.</li>
          <li><strong>1922 en adelante:</strong> Pío XI la impulsa con fuerza y la define como la participación de los laicos en el apostolado jerárquico de la Iglesia.</li>
          <li><strong>1931:</strong> los obispos argentinos crean la Acción Católica Argentina. En 1961 el Episcopado publicó una carta pastoral por sus 30 años. ${MK.v}</li>
        </ul>
        <p class="note">El año 1931 está respaldado por la carta del Episcopado de 1961 por los “30 años de Acción Católica”. La fecha exacta (se suele dar el 5 de abril) y los datos italianos son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1922</span><div class="ev"><b>Pío XI</b>El “papa de la Acción Católica” la promueve en todo el mundo.</div></li>
          <li><span class="y">1931</span><div class="ev"><b>Acción Católica Argentina</b>Nace en nuestro país, organizada en ramas por edad y sexo. ${MK.v}</div></li>
          <li><span class="y">1934</span><div class="ev"><b>Congreso Eucarístico de Buenos Aires</b>La ACA tuvo un papel central en su organización y en la gran movilización de fieles.</div></li>
          <li><span class="y">≈1950</span><div class="ev"><b>Expansión</b>Grupos en casi todas las parroquias del país; formación de dirigentes laicos que luego participaron en la vida social y política.</div></li>
          <li><span class="y">1965</span><div class="ev"><b>Concilio Vaticano II</b>El decreto <em>Apostolicam actuositatem</em> (n. 20) describe sus cuatro notas características. ${MK.v}</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Renovación</b>La ACA renovó sus autoridades nacionales hasta 2028. ${MK.v}</div></li>
        </ol>
        <p class="note">Las fechas de 1931, 1965 y la renovación de autoridades están verificadas. El papel en el Congreso Eucarístico de 1934 y la expansión posterior son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`
        <p>Su rasgo propio es ser <strong>laicos al servicio de la Iglesia local</strong>: la parroquia y la diócesis, en estrecha relación con los pastores. El Concilio Vaticano II le reconoció cuatro notas: ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>1. Fin apostólico</h3><p>Su objetivo inmediato es el mismo fin apostólico de la Iglesia: evangelizar y santificar.</p></div>
          <div class="box"><h3>2. Conducción laical</h3><p>Los laicos asumen la responsabilidad de dirigir la asociación.</p></div>
          <div class="box"><h3>3. Cuerpo orgánico</h3><p>Los laicos trabajan juntos, organizados.</p></div>
          <div class="box"><h3>4. Bajo la guía de los pastores</h3><p>En comunión con el obispo, que la acompaña de manera especial.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Espiritualidad diocesana:</strong> amar y servir a la Iglesia concreta, la propia parroquia y diócesis.</li>
          <li><strong>La [[militancia|militancia]] cristiana:</strong> comprometerse activamente, no solo “ir a misa”.</li>
          <li><strong>El método “ver, juzgar, actuar”</strong>: mirar la realidad, iluminarla con el Evangelio y actuar.</li>
          <li><strong>La formación:</strong> itinerarios por edad con encuentros semanales.</li>
          <li><strong>La santidad laical:</strong> hacerse santo en la familia, el estudio, el trabajo y la política.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Grupos parroquiales</strong> por edades. ${MK.v}</li>
          <li><strong>Catequesis</strong> y animación de la vida parroquial.</li>
          <li><strong>Misiones</strong> en barrios y pueblos.</li>
          <li><strong>Compromiso social y ciudadano:</strong> formación en doctrina social de la Iglesia.</li>
          <li><strong>Sectores específicos</strong> de pastoral: trabajo, salud, educación, entre otros. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p><strong>No tienen hábito.</strong> Tradicionalmente los miembros reciben una <strong>insignia</strong> de la Acción Católica el día de su compromiso, que se suele hacer el 8 de diciembre, fiesta de la Inmaculada Concepción, patrona de la ACA.</p>
        <p class="note">La costumbre de la insignia y del compromiso el 8 de diciembre es de conocimiento general; puede variar entre diócesis.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>La Acción Católica, en distintos países, dio muchos santos laicos:</p>
        <div class="saints">
          <div class="saint"><b>San Pier Giorgio Frassati</b><span class="d">1901 – 1925 · Italia</span><p>Joven de la Acción Católica y de la FUCI, laico dominico, alpinista y servidor de los pobres. Canonizado en 2025.</p><div class="tags"><span>Joven</span></div></div>
          <div class="saint"><b>Santa Gianna Beretta Molla</b><span class="d">1922 – 1962 · Italia</span><p>Médica y madre, dirigente de la Acción Católica. Dio su vida para que naciera su hija. Canonizada en 2004.</p><div class="tags"><span>Madre</span><span>Médica</span></div></div>
          <div class="saint"><b>Beata Armida Barelli</b><span class="d">1882 – 1952 · Italia</span><p>Presidenta de la Juventud Femenina de Acción Católica italiana (1918–1946). Beatificada en 2022. Tiene su propia ficha en esta enciclopedia. ${MK.v}</p><div class="tags"><span>Dirigente</span></div></div>
          <div class="saint"><b>Beato Alberto Marvelli</b><span class="d">1918 – 1946 · Italia</span><p>Ingeniero, joven de Acción Católica, comprometido con los pobres en la posguerra. Murió a los 28 años. Beatificado en 2004.</p><div class="tags"><span>Joven</span></div></div>
          <div class="saint"><b>Venerable Enrique Shaw</b><span class="d">1921 – 1962 · Argentina</span><p>Empresario argentino, esposo y padre de nueve hijos, militante de la Acción Católica y fundador de la Asociación Cristiana de Dirigentes de Empresa.</p><div class="tags"><span>Argentino</span><span>Empresario</span></div></div>
        </div>
        <p class="note">Salvo Armida Barelli, los datos son de conocimiento general; no los verifiqué hoy. El estado de la causa de Enrique Shaw puede haber avanzado.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"v", html:`
        <p>Se forma parte integrándose a un grupo de la parroquia. Los sectores son: ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Aspirantes</h3><p>De 5 a 12 años.</p></div>
          <div class="box"><h3>Jóvenes</h3><p>De 13 a 30 años.</p></div>
          <div class="box"><h3>Adultos</h3><p>Desde los 30 años.</p></div>
          <div class="box"><h3>Sectores</h3><p>Pastorales específicas según los ambientes.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Preguntar en la parroquia</strong> si hay grupo de Acción Católica.</div></li>
          <li><div><strong>Participar de los encuentros</strong> semanales del grupo de tu edad.</div></li>
          <li><div><strong>Hacer el camino de formación</strong> propuesto para cada etapa.</div></li>
          <li><div><strong>Hacer el compromiso</strong> como miembro de la ACA.</div></li>
          <li><div><strong>Asumir un servicio:</strong> animar un grupo, integrar un consejo parroquial o diocesano.</div></li>
        </ol>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"g", html:`
        <ul class="dots">
          <li><strong>En la Argentina:</strong> organizada en los niveles parroquial, diocesano y nacional, con consejos, comisiones y equipos. ${MK.v}</li>
          <li><strong>Autoridades nacionales</strong> renovadas para el período que llega hasta 2028. ${MK.v}</li>
          <li><strong>Sitio oficial:</strong> accioncatolica.org.ar.</li>
        </ul>
        <p class="note">${MK.p} Como la ACA se organiza por diócesis, lo esperable es que exista en la Arquidiócesis de Mendoza, pero no encontré información pública actual sobre sus grupos o su consejo diocesano. Lo más directo es preguntar en tu parroquia o en el Arzobispado.</p>` }
    ],
    compartir:{
      frases:[
        ["Instaurar todas las cosas en Cristo.","San Pío X, Efesios 1,10"],
        ["Vivir sin fe, sin un patrimonio que defender, sin luchar por la verdad, no es vivir, sino ir tirando.","San Pier Giorgio Frassati"],
        ["Ver, juzgar, actuar.","Método de revisión de vida, muy usado en la Acción Católica"]
      ],
      anecdotas:[
        ["El fundador de la nada","La Acción Católica no tiene una figura fundadora como Francisco o Ignacio. Nació del pedido de los papas a los laicos y de miles de personas comunes que dijeron que sí en su parroquia. ${MK.g}"],
        ["Gianna, médica y madre","Gianna Beretta Molla, dirigente de la Acción Católica, estaba embarazada cuando le detectaron un tumor. Eligió un tratamiento que protegiera la vida de su hija aunque fuera más riesgoso para ella. Murió una semana después del parto. Su hija vivió. ${MK.g}"],
        ["El empresario de los nueve hijos","Enrique Shaw, militante de la Acción Católica, decía que un empresario cristiano tiene que pensar en sus trabajadores como en su familia. Durante su enfermedad, sus obreros donaron sangre para él. ${MK.g}"]
      ],
      preguntas:[
        "¿Qué significa para vos ser “militante” de tu fe?",
        "¿Conocés de verdad tu parroquia? ¿Qué necesita hoy?",
        "Mirá algo que pase en tu barrio: ¿cómo lo ves, cómo lo juzgás con el Evangelio y qué podés hacer?",
        "Los santos de la Acción Católica eran estudiantes, médicos, ingenieros, empresarios. ¿Qué tipo de santo podrías ser vos en tu profesión?"
      ],
      dinamica:"Una “revisión de vida” en tres pasos. Ver: cada uno cuenta un hecho concreto de la semana que le llamó la atención. Juzgar: se elige uno y se lee un pasaje del Evangelio que lo ilumine. Actuar: el grupo decide un compromiso concreto y alcanzable para la semana."
    },
    fuentes:[
      ["Acción Católica Argentina — Qué es la ACA","https://www.accioncatolica.org.ar/wp-content/uploads/2023/08/power-Que-es-la-ACA.pdf"],
      ["Episcopado Argentino — Pastoral colectiva por los 30 años de la Acción Católica (1961)","https://episcopado.org/assetsweb/documentos/11/1961-30AnosAccionCatolica_32.doc"],
      ["ACI Prensa — La Acción Católica Argentina renovó sus autoridades hasta 2028","https://www.aciprensa.com/noticias/116413/en-clave-de-esperanza-la-accion-catolica-argentina-renovo-sus-autoridades-hasta-el-2028"]
    ]
  },

  /* ---------------------------------------------------- EMAÚS */
  emaus: {
    familia:"movimientos",
    nombre:"Emaús",
    latin:"Retiros de Emaús · apostolado parroquial",
    resumen:"Un fin de semana de retiro, separado para hombres y para mujeres, inspirado en los dos discípulos que caminaban tristes hacia Emaús hasta que Jesús resucitado se puso a caminar con ellos. Lo organizan laicos de la parroquia que antes vivieron el mismo retiro. Nació en Miami en 1978 y en Cuyo lo hicieron miles de personas.",
    tarjeta:"Retiro de fin de semana para hombres y mujeres, hecho por laicos de la parroquia. Muy extendido en Cuyo.",
    lema:["¿No ardía nuestro corazón mientras nos hablaba por el camino?","Lucas 24,32"],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Origen","1978, parroquia St. Louis, Miami"],
      ["Impulsora","Myrna Gallagher y un equipo de mujeres"],
      ["En la Argentina","Desde 2006"],
      ["Forma","Apostolado parroquial de laicos, no un movimiento"],
      ["Texto base","Lucas 24,13-35"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Se llama <strong>Retiro de Emaús</strong>, por el pasaje del Evangelio de Lucas (24,13-35) en el que dos discípulos desanimados caminan hacia el pueblo de Emaús y Jesús resucitado los acompaña sin que lo reconozcan, hasta que parte el pan. ${MK.v}</p>
        <p>No es una orden ni, estrictamente, un movimiento: se describe como un <strong>apostolado parroquial</strong> impulsado por laicos. Cada parroquia que lo organiza forma su propio grupo. ${MK.v}</p>
        <p>A quienes hacen el retiro por primera vez se los suele llamar [[caminante|caminantes]], y a quienes lo preparan y sirven, [[servidor-emaus|servidores]].</p>
        <p class="note">Los nombres “caminante” y “servidor” aparecen en los formularios de inscripción de la Arquidiócesis de Miami; el uso puede variar entre parroquias.</p>` },

      { id:"fundador", titulo:"Origen y año", estado:"v", html:`
        <ul class="dots">
          <li><strong>1978:</strong> nace en la parroquia St. Louis, en Miami (Estados Unidos), como retiro para mujeres. Lo propuso Myrna Gallagher, directora de educación religiosa de la parroquia, con un equipo de cinco mujeres. ${MK.v}</li>
          <li><strong>1982:</strong> se adapta para hombres. ${MK.v}</li>
          <li><strong>2006:</strong> primer retiro de hombres en la Argentina, en la Parroquia de Lourdes, en Buenos Aires. ${MK.v}</li>
          <li><strong>2008:</strong> llega a San Juan, autorizado por el arzobispo Alfonso Delgado. ${MK.v}</li>
        </ul>
        <p class="note">Un artículo del Diario de Cuyo ubica el origen en “Saint Louis, Estados Unidos”, probablemente confundiendo el nombre de la parroquia con la ciudad. La fuente más detallada lo sitúa en Miami.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1978</span><div class="ev"><b>Miami</b>Primer retiro, para mujeres. ${MK.v}</div></li>
          <li><span class="y">1982</span><div class="ev"><b>Para hombres</b>El retiro se adapta a varones. ${MK.v}</div></li>
          <li><span class="y">1980s</span><div class="ev"><b>Se extiende</b>Por parroquias hispanas de Estados Unidos, América Latina y España. Personas argentinas que vivían en Miami ayudaron a traerlo al país. ${MK.v}</div></li>
          <li><span class="y">2006</span><div class="ev"><b>Argentina</b>Primer retiro de hombres en la Parroquia de Lourdes, Buenos Aires. ${MK.v}</div></li>
          <li><span class="y">2008</span><div class="ev"><b>San Juan</b>Lo traen dos docentes, Juan Meza y Graciela Quiroga. El primer retiro, en la parroquia de Guadalupe, tuvo 24 participantes. ${MK.v}</div></li>
          <li><span class="y">2019</span><div class="ev"><b>Crecimiento en Cuyo</b>En San Juan ya eran unas 5.000 personas en alrededor de diez parroquias. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El objetivo es un <strong>encuentro personal con Jesús resucitado</strong>, como el de los discípulos de Emaús, a través del testimonio de otros laicos que cuentan cómo Dios actuó en su vida.</p>
        <div class="cols">
          <div class="box"><h3>Testimonio</h3><p>Laicos comunes cuentan su historia de fe, con sus heridas y sus cambios. Es el centro del retiro. ${MK.v}</p></div>
          <div class="box"><h3>Sacramentos</h3><p>Hay sacerdotes para la confesión y la Eucaristía. ${MK.v}</p></div>
          <div class="box"><h3>Apertura</h3><p>Está abierto a todos: practicantes o alejados, casados, separados o divorciados, de cualquier condición. ${MK.v}</p></div>
          <div class="box"><h3>Parroquia</h3><p>El retiro nace de la parroquia y vuelve a ella: quien lo vive se integra a la comunidad.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>El camino de Emaús:</strong> Jesús camina con nosotros aunque no lo reconozcamos, nos explica las Escrituras y se da a conocer en la Eucaristía.</li>
          <li><strong>Misericordia y perdón:</strong> muchos participantes destacan la experiencia del amor y del perdón de Dios.</li>
          <li><strong>Sorpresa:</strong> se acostumbra no contar los detalles del retiro a quienes todavía no lo hicieron, para que cada uno lo viva sin expectativas.</li>
          <li><strong>Servicio:</strong> quien vivió el retiro se ofrece para servir en los siguientes.</li>
        </ul>
        <p class="note">La costumbre de mantener la sorpresa es ampliamente conocida, pero no la encontré en las fuentes que pude leer.</p>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Retiros de fin de semana</strong>, de viernes a domingo, para hombres y para mujeres por separado. ${MK.v}</li>
          <li><strong>Reuniones posteriores</strong> de los grupos de cada parroquia.</li>
          <li><strong>Servicio en la parroquia</strong>: catequesis, liturgia, Cáritas.</li>
          <li><strong>Retiros especiales:</strong> en España se organizaron retiros de Emaús para sacerdotes. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p><strong>No tienen hábito.</strong> En algunos grupos, los servidores usan remeras o distintivos iguales durante el retiro para ser reconocidos.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>Emaús es muy reciente y no tiene santos propios. Su inspiración está en el Evangelio:</p>
        <div class="saints">
          <div class="saint"><b>Cleofás y el otro discípulo</b><span class="d">siglo I · Judea</span><p>Los dos discípulos de Emaús (Lucas 24,18). La tradición identifica a Cleofás como pariente de Jesús.</p><div class="tags"><span>Evangelio</span></div></div>
          <div class="saint"><b>Santa María Magdalena</b><span class="d">siglo I</span><p>Primera testigo de la Resurrección, que anuncia a los discípulos.</p><div class="tags"><span>Testigo</span></div></div>
        </div>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Averiguar en tu parroquia</strong> o en una vecina si organizan retiros de Emaús.</div></li>
          <li><div><strong>Inscribirse</strong> para el retiro de hombres o de mujeres, según corresponda. Suele haber un aporte económico para los gastos.</div></li>
          <li><div><strong>Vivir el fin de semana</strong> de viernes a domingo.</div></li>
          <li><div><strong>Participar de las reuniones</strong> del grupo después del retiro.</div></li>
          <li><div><strong>Servir</strong> en los retiros siguientes.</div></li>
        </ol>
        <div class="box" style="margin-top:14px"><h3>Un cuidado necesario</h3><p>En España se denunciaron intentos de estafa en nombre de los retiros de Emaús. Conviene inscribirse siempre a través de una parroquia conocida. ${MK.v}</p></div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Argentina:</strong> desde 2006, comenzando en Buenos Aires. ${MK.v}</li>
          <li><strong>San Juan:</strong> desde 2008, con unas 5.000 personas en alrededor de diez parroquias según datos de 2019, y la meta de llegar a las 52 parroquias de la provincia. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré información publicada sobre parroquias de Mendoza que organicen retiros de Emaús. Por su crecimiento en Cuyo, es probable que existan; conviene preguntar en las parroquias.</p>` }
    ],
    compartir:{
      frases:[
        ["¿No ardía nuestro corazón mientras nos hablaba por el camino y nos explicaba las Escrituras?","Lucas 24,32"],
        ["Quédate con nosotros, porque ya es tarde y el día se acaba.","Lucas 24,29"],
        ["Lo reconocieron al partir el pan.","Lucas 24,35"]
      ],
      anecdotas:[
        ["Caminando en la dirección equivocada","Los discípulos de Emaús se estaban yendo de Jerusalén, decepcionados. Jesús no los retó: caminó con ellos en la dirección en que iban, los escuchó y después los ayudó a volver. Es la imagen que inspira todo el retiro. ${MK.g}"],
        ["De Miami a San Juan","Dos docentes sanjuaninos trajeron el retiro en 2008. El primero tuvo 24 hombres; diez años después eran miles. ${MK.v}"]
      ],
      preguntas:[
        "¿En qué momento de tu vida caminaste “hacia Emaús”, alejándote desilusionado?",
        "¿Quién caminó con vos en ese momento sin que te dieras cuenta de que Dios estaba ahí?",
        "¿Cuándo “ardió tu corazón” escuchando algo de Dios?",
        "¿Tenés una historia de fe que podrías contarle a otro?"
      ],
      dinamica:"Caminata de Emaús: en parejas, salir a caminar veinte minutos. Uno cuenta un momento difícil de su vida y el otro solo escucha, sin aconsejar. Al volver, leer juntos Lucas 24,13-35 y compartir en el grupo cómo se sintieron al ser escuchados."
    },
    fuentes:[
      ["Infovaticana (2017) — ¿Qué son los retiros de Emaús?","https://infovaticana.com/2017/12/31/los-retiros-emaus/"],
      ["Diario de Cuyo (2019) — Emaús, un retiro espiritual de alto impacto","https://www.diariodecuyo.com.ar/noticias/emaus-un-retiro-espiritual-de-alto-impacto-285218.html"],
      ["ACI Prensa — Retiro de Emaús para sacerdotes","https://www.aciprensa.com/noticias/102190/retiro-de-emaus-para-sacerdotes-participan-mas-de-100-presbiteros-en-espana"],
      ["ACI Prensa — Intento de estafa en nombre de Emaús","https://www.aciprensa.com/noticias/100573/denuncian-un-intento-de-estafa-en-nombre-del-retiro-de-emaus-en-espana"]
    ]
  },

  /* ---------------------------------------------------- CURSILLOS */
  cursillos: {
    familia:"movimientos",
    nombre:"Cursillos de Cristiandad",
    latin:"Movimiento de Cursillos de Cristiandad · MCC",
    resumen:"Nacieron en Mallorca en la década de 1940, cuando un grupo de jóvenes laicos liderados por Eduardo Bonnín buscó la forma de anunciar lo fundamental del cristianismo a quienes estaban lejos de la Iglesia. El método: tres días intensos de charlas, oración y amistad, y después el “cuarto día”, que es el resto de la vida. En la Argentina están desde 1963 y en Cuyo, desde fines de los sesenta.",
    tarjeta:"Tres días para encontrarse con lo fundamental cristiano, y el “cuarto día” para vivirlo. Eduardo Bonnín. En Cuyo desde los años 60.",
    lema:["¡De colores!","Canto y saludo típico de los cursillistas, símbolo de la alegría de la vida en gracia."],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Iniciador","Eduardo Bonnín Aguiló (1917 – 2008)"],
      ["Primer cursillo","7 al 10 de enero de 1949, Mallorca"],
      ["En la Argentina","Desde 1963, por Tucumán"],
      ["Organismo mundial","OMCC, desde 1980"],
      ["Saludo","¡De colores!"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Su nombre es <strong>Movimiento de Cursillos de Cristiandad</strong> (MCC). “Cursillo” significa curso breve: un encuentro de tres días para vivir “lo fundamental cristiano”. Quienes lo hacen se llaman <strong>cursillistas</strong>.</p>
        <p>A nivel mundial se organiza en el <strong>Organismo Mundial de Cursillos de Cristiandad</strong> (OMCC), creado en 1980 y reconocido por la Santa Sede. ${MK.v}</p>` },

      { id:"fundador", titulo:"Iniciador y año", estado:"g", html:`
        <p><strong>Eduardo Bonnín Aguiló</strong> nació en Palma de Mallorca en 1917. Fue un laico, comerciante, muy lector y con gran preocupación por los jóvenes alejados de la fe.</p>
        <ul class="dots">
          <li><strong>Década de 1940:</strong> en el ambiente de la Juventud de Acción Católica de Mallorca, Bonnín y otros jóvenes diseñan el método del cursillo. Algunas fuentes dan 1944 como año de los primeros ensayos. ${MK.v}</li>
          <li><strong>7 al 10 de enero de 1949:</strong> se realiza el cursillo considerado oficialmente el primero, en el monasterio de Sant Honorat, Mallorca. ${MK.v}</li>
          <li><strong>1949 en adelante:</strong> el apoyo del obispo de Mallorca, Juan Hervás, ayuda a extenderlo. ${MK.g}</li>
          <li><strong>2008:</strong> Bonnín muere en Palma. Su causa de beatificación fue abierta.</li>
        </ul>
        <p class="note">Las fuentes no coinciden entre 1944 y 1949 como fecha de inicio. La apertura de la causa de Bonnín es de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1940s</span><div class="ev"><b>Mallorca</b>Jóvenes de Acción Católica preparan una peregrinación a Santiago de Compostela y buscan un método para llegar a los alejados.</div></li>
          <li><span class="y">1949</span><div class="ev"><b>Primer cursillo</b>En Sant Honorat. ${MK.v}</div></li>
          <li><span class="y">1957</span><div class="ev"><b>América</b>Primer cursillo en Estados Unidos (Waco, Texas). ${MK.v}</div></li>
          <li><span class="y">1963</span><div class="ev"><b>Argentina</b>Llega al país por Tucumán. ${MK.v}</div></li>
          <li><span class="y">1960s</span><div class="ev"><b>Mendoza</b>Pocos años después llega a la diócesis de Mendoza; San Juan participaba con cupos en los cursillos mendocinos. ${MK.v}</div></li>
          <li><span class="y">1968</span><div class="ev"><b>San Juan</b>El movimiento se crea en San Juan con el arzobispo José María Sansierra y fray Pablo Ares. ${MK.v}</div></li>
          <li><span class="y">1980</span><div class="ev"><b>Organismo Mundial</b>Nace el OMCC. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>anunciar lo fundamental cristiano</strong> de modo que cada persona descubra que Dios la ama, y llevar esa experiencia a los ambientes donde vive: familia, trabajo, estudio, barrio.</p>
        <div class="cols">
          <div class="box"><h3>Los tres días</h3><p>Un fin de semana con quince charlas llamadas [[rollo|rollos]], dadas por sacerdotes y laicos. ${MK.v}</p></div>
          <div class="box"><h3>El cuarto día</h3><p>El resto de la vida: aplicar lo vivido en lo cotidiano. Ver [[cuarto-dia|cuarto día]]. ${MK.v}</p></div>
          <div class="box"><h3>El grupo</h3><p>Pequeños grupos de amigos que se reúnen para revisar su vida de piedad, estudio y acción. ${MK.v}</p></div>
          <div class="box"><h3>La Ultreya</h3><p>Reunión de grupos donde se comparten experiencias. Ver [[ultreya|Ultreya]].</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Lo fundamental cristiano:</strong> que Dios nos ama en Cristo. Lo demás se ordena desde ahí.</li>
          <li><strong>Piedad, estudio y acción:</strong> el “trípode” de la vida del cursillista.</li>
          <li><strong>La amistad:</strong> Bonnín decía que la amistad es el mejor camino para llevar a Cristo.</li>
          <li><strong>La [[palanca|palanca]]:</strong> oraciones y sacrificios que otros ofrecen por quienes hacen el cursillo.</li>
          <li><strong>La alegría:</strong> el canto “De colores” expresa la vida de gracia.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Cursillos</strong> para hombres y para mujeres (y en algunos lugares, mixtos o para jóvenes).</li>
          <li><strong>Evangelización de ambientes:</strong> que cada cursillista transforme su lugar de trabajo, estudio o vecindario.</li>
          <li><strong>Escuela de dirigentes</strong> para formar a quienes dan los cursillos.</li>
          <li><strong>Ultreyas</strong> periódicas.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p><strong>No tienen hábito.</strong> Muchos cursillistas llevan una pequeña cruz que reciben al terminar el cursillo.</p>
        <p class="note">La costumbre de la cruz es de conocimiento general; varía según los lugares.</p>` },

      { id:"santos", titulo:"Figuras vinculadas", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>Eduardo Bonnín Aguiló</b><span class="d">1917 – 2008 · Mallorca</span><p>Iniciador. Laico que dedicó su vida a anunciar lo fundamental cristiano.</p><div class="tags"><span>Iniciador</span><span>Laico</span></div></div>
          <div class="saint"><b>Mons. Juan Hervás</b><span class="d">1905 – 1982 · España</span><p>Obispo de Mallorca que apoyó y difundió los cursillos.</p><div class="tags"><span>Obispo</span></div></div>
          <div class="saint"><b>Fray Pablo Ares</b><span class="d">· San Juan</span><p>Impulsor de los cursillos en San Juan desde 1968. ${MK.v}</p><div class="tags"><span>Cuyo</span></div></div>
        </div>
        <p class="note">Las fechas de Bonnín y Hervás son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Ser invitado</strong> por un cursillista, que suele acompañar como “padrino”.</div></li>
          <li><div><strong>Hacer el cursillo</strong> de tres días.</div></li>
          <li><div><strong>Integrarse a un grupo</strong> de amigos cursillistas.</div></li>
          <li><div><strong>Participar de las Ultreyas.</strong></div></li>
          <li><div><strong>Servir</strong> en futuros cursillos, después de formarse en la escuela de dirigentes.</div></li>
        </ol>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Argentina:</strong> desde 1963, entrando por Tucumán. ${MK.v}</li>
          <li><strong>Mendoza:</strong> llegaron a la diócesis de Mendoza pocos años después; antes de 1968, San Juan participaba con cinco cupos en los cursillos de Mendoza. ${MK.v}</li>
          <li><strong>San Juan:</strong> movimiento propio desde 1968; celebró sus 50 años en 2018. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré datos actuales sobre los Cursillos en la Arquidiócesis de Mendoza (dónde se hacen, contactos).</p>` }
    ],
    compartir:{
      frases:[
        ["¡De colores!","Saludo cursillista"],
        ["Cristo cuenta contigo.","Frase muy usada al final del cursillo"],
        ["Lo fundamental cristiano es saber que Dios me ama.","Idea central de Eduardo Bonnín (paráfrasis)"]
      ],
      anecdotas:[
        ["Una peregrinación como semilla","Los cursillos nacieron en parte de la preparación de jóvenes mallorquines para una gran peregrinación a Santiago de Compostela. Querían que no fuera solo un viaje, sino un cambio de vida. ${MK.g}"],
        ["Cinco cupos","Antes de tener sus propios cursillos, los sanjuaninos viajaban a Mendoza para hacerlos: les reservaban cinco lugares en cada uno. ${MK.v}"],
        ["El canto de colores","“De colores” era una canción popular española sobre la primavera. Los cursillistas la adoptaron como himno de la alegría de vivir en gracia. ${MK.g}"]
      ],
      preguntas:[
        "Si tuvieras que decir en una frase lo fundamental de ser cristiano, ¿qué dirías?",
        "¿Cuál es tu “ambiente” (curso, trabajo, club, barrio)? ¿Cómo podrías llevar a Cristo ahí?",
        "¿Tenés un grupo de amigos con quienes revisar tu vida de fe?",
        "¿Quién te invitó a vos a la fe? ¿A quién podrías invitar?"
      ],
      dinamica:"Una mini “reunión de grupo” cursillista: cada uno responde brevemente tres preguntas sobre la última semana. Piedad: ¿cuándo me sentí más cerca de Dios? Estudio: ¿qué aprendí de la fe? Acción: ¿a quién acerqué a Cristo? Se termina con un compromiso para la semana."
    },
    fuentes:[
      ["Wikipedia — Cursillo","https://en.wikipedia.org/wiki/Cursillo"],
      ["Diario de Cuyo (2018) — Medio siglo realizando cursillos de cristiandad","https://diariodecuyo.com.ar/sanjuan/Medio-siglo-realizando-cursillos-de-cristiandad-20180421-0027.html"],
      ["Dicasterio para los Laicos — Organismo Mundial de Cursillos","https://www.laityfamilylife.va/content/laityfamilylife/pt/associazioni-e-movimenti/repertorio/organismo-mondiale-dei-cursillos-di-cristianita.html"],
      ["Fundación Eduardo Bonnín","https://fundacioneduardobonnin.org/en/eduardo/the-person-of-eduardo"]
    ]
  },

  /* ---------------------------------------------------- LEGIÓN DE MARÍA */
  "legion-maria": {
    familia:"movimientos",
    nombre:"Legión de María",
    latin:"Legio Mariae",
    resumen:"Un empleado público de Dublín reunió en 1921 a un grupo de mujeres para rezar y visitar enfermos. Organizó el apostolado como un ejército romano, con nombres en latín, pero sus “armas” son el Rosario y la visita casa por casa. Hoy tiene más de diez millones de miembros, y la Argentina es uno de los países donde más legionarios hay.",
    tarjeta:"Laicos que rezan juntos y visitan casas, hospitales y cárceles bajo la guía de María. Frank Duff. Muy numerosa en Argentina.",
    lema:["Por María a Jesús","Síntesis de la espiritualidad de la Legión, inspirada en San Luis María Grignion de Montfort."],
    habito:[["Sin hábito: insignia (tessera)","oklch(0.75 0.03 260)"]],
    datos:[
      ["Fundador","Siervo de Dios Frank Duff (1889 – 1980)"],
      ["Fundación","7 de septiembre de 1921, Dublín"],
      ["Unidad básica","Praesidium (3 a 20 miembros)"],
      ["Miembros","Más de 10 millones en el mundo"],
      ["Gobierno central","Concilium Legionis, en Dublín"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Su nombre latino es <strong>Legio Mariae</strong>, Legión de María. Toma su organización y vocabulario de la antigua legión romana: los grupos, consejos y reuniones tienen nombres en latín. ${MK.v}</p>
        <p>Es una asociación de laicos al servicio de la Iglesia, que trabaja bajo la guía de los párrocos y obispos. Sus miembros son <strong>activos</strong> (participan de las reuniones y hacen el trabajo apostólico) o <strong>auxiliares</strong> (se comprometen a rezar). ${MK.v}</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>Frank Duff</strong> nació en Dublín en 1889. Fue empleado público del Ministerio de Hacienda irlandés y miembro de la Sociedad de San Vicente de Paúl. Leyendo el <em>Tratado de la verdadera devoción a la Santísima Virgen</em>, de San Luis María Grignion de Montfort, descubrió el lugar de María en la vida cristiana.</p>
        <ul class="dots">
          <li><strong>7 de septiembre de 1921:</strong> en Myra House, Francis Street, Dublín, se reúne el primer grupo, con un sacerdote y unas quince mujeres. ${MK.v}</li>
          <li><strong>Primer trabajo:</strong> visitar a enfermos de cáncer en un hospital. ${MK.v}</li>
          <li><strong>1980:</strong> muere en Dublín. Es Siervo de Dios, con causa de beatificación abierta. ${MK.v}</li>
        </ul>
        <p class="note">El número de mujeres del primer grupo y el año de muerte de Duff son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1921</span><div class="ev"><b>Dublín</b>Primera reunión. ${MK.v}</div></li>
          <li><span class="y">1920s</span><div class="ev"><b>Las calles de Monto</b>La Legión se dedica a las mujeres en situación de prostitución del barrio de Monto y abre un refugio para madres solteras. ${MK.v}</div></li>
          <li><span class="y">1936</span><div class="ev"><b>Edel Quinn a África</b>Una joven legionaria enferma de tuberculosis va como enviada a África oriental y funda cientos de grupos. Muere en Nairobi en 1944. ${MK.v}</div></li>
          <li><span class="y">1953</span><div class="ev"><b>Alfie Lambe a Sudamérica</b>Un joven irlandés recorre Colombia, Ecuador, Brasil, Uruguay y la Argentina extendiendo la Legión.</div></li>
          <li><span class="y">1959</span><div class="ev"><b>Muere en Buenos Aires</b>Alfie Lambe muere de cáncer a los 26 años, el 21 de enero. Está enterrado en la Recoleta. ${MK.v}</div></li>
          <li><span class="y">1965</span><div class="ev"><b>Concilio Vaticano II</b>Frank Duff es invitado como observador laico.</div></li>
          <li><span class="y">2021</span><div class="ev"><b>Centenario</b>La Legión celebra 100 años en Dublín. ${MK.v}</div></li>
        </ol>
        <p class="note">El año de llegada de Lambe a Sudamérica (1953) y la presencia de Duff en el Concilio son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>la santificación de sus miembros y el apostolado, unidos a María</strong>, al servicio de la Iglesia.</p>
        <div class="cols">
          <div class="box"><h3>Oración</h3><p>Reunión semanal con el Rosario y las oraciones de la Legión.</p></div>
          <div class="box"><h3>Trabajo apostólico</h3><p>Cada legionario activo hace un trabajo semanal asignado, casi siempre en pareja.</p></div>
          <div class="box"><h3>Obras espirituales de misericordia</h3><p>Más que ayuda material, la Legión lleva compañía, oración y la fe. ${MK.v}</p></div>
          <div class="box"><h3>Visitas</h3><p>A casas, hospitales, geriátricos, cárceles; a los alejados de la Iglesia.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La verdadera devoción a María</strong>, según San Luis María Grignion de Montfort: consagrarse a Jesús por María.</li>
          <li><strong>La [[tessera|Tessera]]:</strong> la oración oficial de la Legión, que cada miembro recita a diario.</li>
          <li><strong>El Manual del Legionario:</strong> el libro que explica todo el espíritu y la organización.</li>
          <li><strong>Humildad y perseverancia:</strong> trabajo constante, semana a semana, sin buscar resultados visibles.</li>
          <li><strong>El Espíritu Santo:</strong> la Legión pone su obra bajo la acción del Espíritu, como María en Pentecostés.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Visitas a hogares</strong> de la parroquia.</li>
          <li><strong>Visitas a hospitales, geriátricos y cárceles.</strong> ${MK.v}</li>
          <li><strong>Catequesis</strong> y preparación para los sacramentos.</li>
          <li><strong>Peregrinatio pro Christo:</strong> misiones de legionarios a lugares necesitados.</li>
          <li><strong>Difusión</strong> del Rosario y de la consagración a María.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p><strong>No tienen hábito.</strong> El símbolo de la Legión es el <strong>[[vexillum|Vexillum]]</strong>, un estandarte inspirado en el de las legiones romanas, con la imagen de la Virgen y una paloma.</p>` },

      { id:"santos", titulo:"Santos y testigos vinculados", estado:"v", html:`
        <div class="saints">
          <div class="saint"><b>Siervo de Dios Frank Duff</b><span class="d">1889 – 1980 · Irlanda</span><p>Fundador. Laico, empleado público, apóstol incansable.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Venerable Edel Quinn</b><span class="d">1907 – 1944 · Irlanda y Kenia</span><p>Enviada de la Legión a África oriental a pesar de la tuberculosis. Su proceso de beatificación está en curso. ${MK.v}</p><div class="tags"><span>Misionera</span><span>Laica</span></div></div>
          <div class="saint"><b>Siervo de Dios Alfie Lambe</b><span class="d">1932 – 1959 · Irlanda y Argentina</span><p>Enviado de la Legión a Sudamérica. Murió en Buenos Aires a los 26 años y está enterrado en la Recoleta. Su causa se abrió en Buenos Aires en 1978. ${MK.v}</p><div class="tags"><span>Joven</span><span>Argentina</span></div></div>
          <div class="saint"><b>San Luis María Grignion de Montfort</b><span class="d">1673 – 1716 · Francia</span><p>Su <em>Tratado de la verdadera devoción</em> inspiró a Frank Duff.</p><div class="tags"><span>Inspirador</span></div></div>
        </div>
        <p class="note">El título “venerable” de Edel Quinn y las fechas de Montfort son de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Buscar un praesidium</strong> en tu parroquia. Ver [[praesidium|praesidium]].</div></li>
          <li><div><strong>Asistir a las reuniones semanales</strong> como miembro a prueba.</div></li>
          <li><div><strong>Período de prueba</strong> de unos tres meses, haciendo el trabajo semanal.</div></li>
          <li><div><strong>Hacer la promesa legionaria</strong> ante el vexillum.</div></li>
          <li><div><strong>O ser miembro auxiliar</strong>, comprometido solo a rezar.</div></li>
        </ol>
        <p class="note">La duración del período de prueba es de conocimiento general y figura en el Manual del Legionario.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Argentina</strong> está entre los cinco países con más legionarios del mundo, con entre 250.000 y 500.000 miembros, junto con Corea del Sur, Filipinas, Brasil y la República Democrática del Congo. ${MK.v}</li>
          <li><strong>Alfie Lambe</strong>, el gran enviado a Sudamérica, murió en Buenos Aires y su causa la lleva la Arquidiócesis de Buenos Aires. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré datos publicados sobre la Legión en Mendoza (curias, praesidia). Por su difusión en el país, es muy probable que haya grupos en parroquias mendocinas; conviene preguntar en la parroquia.</p>` }
    ],
    compartir:{
      frases:[
        ["Por María a Jesús.","Síntesis de la espiritualidad legionaria"],
        ["¿Quién es esta que surge como la aurora, bella como la luna, brillante como el sol, imponente como un ejército en orden de batalla?","Cantar de los Cantares 6,10, texto de la Tessera"],
        ["Hágase en mí según tu palabra.","Lucas 1,38"]
      ],
      anecdotas:[
        ["Un empleado de Hacienda","Frank Duff trabajaba en el Ministerio de Hacienda de Irlanda. No era sacerdote ni religioso, pero fundó una de las asociaciones laicales más grandes del mundo. ${MK.g}"],
        ["Edel en África","Edel Quinn quería ser monja clarisa, pero la tuberculosis se lo impidió. Fue a África como enviada de la Legión y viajó durante ocho años por Kenia, Uganda y Tanzania fundando grupos, hasta su muerte. ${MK.g}"],
        ["Un irlandés en la Recoleta","Alfie Lambe recorrió media Sudamérica con muy pocos recursos. Murió en Buenos Aires a los 26 años y está enterrado en la Recoleta, en la bóveda de los Hermanos Cristianos Irlandeses. ${MK.v}"]
      ],
      preguntas:[
        "La Legión visita a quienes nadie visita. ¿A quién podrías visitar vos esta semana?",
        "¿Qué lugar ocupa María en tu fe? ¿Te ayuda a acercarte a Jesús?",
        "Frank Duff era un trabajador común. ¿Qué podrías hacer por Dios desde tu trabajo o estudio?",
        "¿Sos constante en algo bueno, semana tras semana, aunque no veas resultados?"
      ],
      dinamica:"Organizar en parejas una visita a un vecino mayor, solo o enfermo, avisando antes. Llevar solo compañía y, si la persona quiere, rezar juntos un misterio del Rosario. En la reunión siguiente, cada pareja cuenta brevemente cómo fue, como se hace en un praesidium."
    },
    fuentes:[
      ["Wikipedia — Legion of Mary","https://en.wikipedia.org/wiki/Legion_of_Mary"],
      ["Wikipedia — Alfie Lambe","https://en.wikipedia.org/wiki/Alfie_Lambe"],
      ["Legión de María (Irlanda) — Causa de Alfie Lambe","https://www.legionofmary.ie/causes/profile/alfie-lambe"],
      ["Arquidiócesis de Dublín — Centenario de la Legión de María","https://dublindiocese.ie/?p=40714"]
    ]
  },

  /* ---------------------------------------------------- SANT'EGIDIO */
  santegidio: {
    familia:"movimientos",
    nombre:"Comunidad de Sant’Egidio",
    latin:"Comunidad de Sant’Egidio",
    resumen:"Nació en 1968 en Roma, cuando un estudiante secundario de 18 años, Andrea Riccardi, reunió a unos amigos para leer el Evangelio y llevarlo a la vida en las periferias. Hoy es una comunidad de laicos presente en muchos países, conocida por su oración, su amistad con los pobres y su trabajo por la paz: ayudó a terminar la guerra civil de Mozambique. En la Argentina tiene comunidades en el conurbano bonaerense.",
    tarjeta:"Oración, amistad con los pobres y trabajo por la paz. Andrea Riccardi. Escuelas de la Paz en el conurbano.",
    lema:["Oración, pobres, paz","Las tres palabras con que la Comunidad resume su vida."],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Fundador","Andrea Riccardi (nacido en 1950)"],
      ["Fundación","1968, Roma"],
      ["Nombre","Por la iglesia de Sant’Egidio, en el Trastevere"],
      ["Forma","Asociación pública de laicos"],
      ["En la Argentina","Comunidades en el conurbano y Coronel Pringles"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Se llama <strong>Comunidad de Sant’Egidio</strong> por la pequeña iglesia de San Egidio, en el barrio romano del Trastevere, que se convirtió en su sede en 1973. Es una [[movimiento|asociación de laicos]], reconocida por la Santa Sede.</p>
        <p>Sus miembros no hacen votos ni dejan su vida: estudian o trabajan, y dedican tiempo libre a la oración comunitaria y a la amistad con los pobres.</p>
        <p class="note">Datos de conocimiento general; no los verifiqué hoy.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>Andrea Riccardi</strong> nació en Roma en 1950. En 1968, con 18 años, reunió a compañeros del liceo Virgilio para leer el Evangelio y ponerlo en práctica. Empezaron yendo a las periferias de Roma a dar apoyo escolar a chicos pobres.</p>
        <ul class="dots">
          <li><strong>1968:</strong> nace el grupo, en pleno clima de protestas estudiantiles.</li>
          <li><strong>1973:</strong> se instalan en el ex convento de Sant’Egidio, en el Trastevere.</li>
          <li><strong>1986:</strong> reconocida por el Pontificio Consejo para los Laicos.</li>
          <li><strong>Riccardi</strong> es historiador, profesor universitario y fue ministro en Italia (2011–2013).</li>
        </ul>
        <p class="note">Fechas de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1968</span><div class="ev"><b>Roma</b>Estudiantes que leen el Evangelio y van a las periferias.</div></li>
          <li><span class="y">1973</span><div class="ev"><b>Trastevere</b>Sede en Sant’Egidio.</div></li>
          <li><span class="y">1986</span><div class="ev"><b>Asís</b>Tras la Jornada de oración por la paz convocada por Juan Pablo II, Sant’Egidio continúa cada año los encuentros interreligiosos “en el espíritu de Asís”.</div></li>
          <li><span class="y">1992</span><div class="ev"><b>Paz en Mozambique</b>Después de dos años de negociaciones en su sede, se firma el acuerdo que termina una guerra civil de 16 años y un millón de muertos.</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Argentina</b>Comunidades en Lanús, Laferrere, Almafuerte, Villa Martelli, La Boca, Barracas, Los Ceibos y Coronel Pringles. La de La Boca tiene más de 35 años. ${MK.v}</div></li>
        </ol>
        <p class="note">Los datos argentinos están verificados; los demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Oración</h3><p>Cada tarde, oración comunitaria con la Palabra de Dios en la iglesia. Es el corazón de todo.</p></div>
          <div class="box"><h3>Los pobres</h3><p>No como “beneficiarios”, sino como amigos y parte de la familia de la Comunidad.</p></div>
          <div class="box"><h3>La paz</h3><p>Mediaciones en conflictos, diálogo entre religiones, campañas contra la pena de muerte.</p></div>
          <div class="box"><h3>El Evangelio</h3><p>Comunicarlo con la vida, empezando por los más chicos y los más débiles.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La Palabra de Dios</strong> escuchada cada día en comunidad.</li>
          <li><strong>La amistad</strong> como forma de vivir el Evangelio.</li>
          <li><strong>La gratuidad:</strong> todo el servicio es voluntario.</li>
          <li><strong>La universalidad:</strong> el Evangelio es para todos, también para quienes tienen otra fe.</li>
          <li><strong>Los íconos</strong> y la belleza de la liturgia, con influencia de las Iglesias orientales.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>[[escuela-paz|Escuelas de la Paz]]:</strong> apoyo escolar y educación en valores para chicos de barrios pobres. En la Argentina muchos jóvenes de la Comunidad crecieron en ellas. ${MK.v}</li>
          <li><strong>Ancianos:</strong> visitas, acompañamiento y redes contra la soledad.</li>
          <li><strong>Personas en situación de calle:</strong> cenas y la tradicional Navidad con los pobres.</li>
          <li><strong>Presos y condenados a muerte</strong>, con campañas internacionales.</li>
          <li><strong>Programa DREAM</strong> contra el sida en África.</li>
          <li><strong>Corredores humanitarios</strong> para refugiados.</li>
          <li><strong>Jóvenes por la Paz</strong>: su rama juvenil. En la Argentina ya hubo congresos. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p><strong>No tienen hábito.</strong> Son laicos que visten ropa común.</p>` },

      { id:"santos", titulo:"Testigos vinculados", estado:"g", html:`
        <p>Sant’Egidio no tiene santos propios, pero sí recuerda a muchos “nuevos mártires” y amigos:</p>
        <div class="saints">
          <div class="saint"><b>Andrea Riccardi</b><span class="d">nacido en 1950 · Italia</span><p>Fundador. Historiador.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Floribert Bwana Chui</b><span class="d">1981 – 2007 · Congo</span><p>Joven de la Comunidad, funcionario de aduanas, asesinado por negarse a dejar pasar alimentos en mal estado que iban a la población. Beatificado en 2025.</p><div class="tags"><span>Joven</span><span>Mártir</span></div></div>
          <div class="saint"><b>William Quijano</b><span class="d">1986 – 2009 · El Salvador</span><p>Joven de la Comunidad asesinado por las pandillas por su trabajo en la Escuela de la Paz.</p><div class="tags"><span>Joven</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general; no los verifiqué hoy. Conviene confirmarlos antes de usarlos en público.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Ir a una oración</strong> de la Comunidad.</div></li>
          <li><div><strong>Sumarse a un servicio:</strong> Escuela de la Paz, visitas a ancianos, cenas en la calle.</div></li>
          <li><div><strong>Integrarse a la comunidad</strong> de tu barrio o ciudad.</div></li>
        </ol>
        <p class="note">No hay comunidad confirmada en Mendoza. Las más cercanas están en el conurbano bonaerense.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Conurbano bonaerense y CABA:</strong> Lanús, Laferrere, Almafuerte, Villa Martelli, La Boca, Barracas y Los Ceibos. ${MK.v}</li>
          <li><strong>Provincia de Buenos Aires:</strong> Coronel Pringles. ${MK.v}</li>
          <li><strong>Actividades:</strong> Escuelas de la Paz, Navidad con los pobres (con conciertos solidarios como uno de la Misa Criolla), misas por la paz. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré presencia de Sant’Egidio en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["La paz es posible.","Lema de los encuentros internacionales de Sant’Egidio"],
        ["Los pobres son nuestros amigos.","Idea central de la Comunidad"],
        ["Bienaventurados los que trabajan por la paz, porque serán llamados hijos de Dios.","Mateo 5,9"]
      ],
      anecdotas:[
        ["Un liceo, un Evangelio","Todo empezó con un grupo de chicos de 18 años que se preguntaron qué pasaría si se tomaran el Evangelio en serio. Fueron a las villas de Roma a dar apoyo escolar. ${MK.g}"],
        ["La paz que se firmó en un ex convento","Las negociaciones de paz de Mozambique se hicieron durante más de dos años en la sede de Sant’Egidio. Por eso a la Comunidad se la llamó a veces “la ONU del Trastevere”. ${MK.g}"],
        ["Floribert y los alimentos podridos","Floribert, de 26 años, trabajaba en la aduana de Goma. Le ofrecieron dinero para dejar entrar alimentos en mal estado. Se negó para no envenenar a la gente pobre, y lo mataron. ${MK.g}"]
      ],
      preguntas:[
        "¿Tenés algún amigo pobre, de verdad amigo, no alguien a quien solo ayudás?",
        "¿Dónde hay conflictos a tu alrededor en los que podrías trabajar por la paz?",
        "¿Qué pasaría si tu grupo de amigos se tomara el Evangelio en serio?",
        "Floribert dijo que no a la corrupción, aunque le costó la vida. ¿En qué pequeñas cosas te piden “mirar para otro lado”?"
      ],
      dinamica:"Una “Escuela de la Paz” de un día: el grupo organiza una tarde de juegos y apoyo escolar en un barrio, con permiso de la parroquia o de una organización del lugar. Antes, rezar juntos con un pasaje del Evangelio; después, compartir el nombre de un chico que conocieron."
    },
    fuentes:[
      ["Sant’Egidio — Andrea Riccardi con las comunidades de Argentina","https://www2.santegidio.org/pageID/30284/langID/en/itemID/53937/Andrea-Riccardi-has-met-the-Communities-of-Argentina-in-Buenos-Aires-a-workshop-of-fraternity-in-the-megalopolis.html"],
      ["Sant’Egidio — Jóvenes por la Paz, primer congreso en Argentina","https://archive.santegidio.org/pageID/3/langID/en/itemID/5375/Youth-for-Peace-the-first-congress-in-Argentina.html"],
      ["Sant’Egidio — Concierto de la Misa Criolla en Buenos Aires","https://archive.santegidio.org/pageID/3/langID/en/itemID/153/Buenos-Aires--Benefit-concert-the-Misa-Criolla-to-fund-Christmas-with-the-Poor.html"]
    ]
  },

  /* ---------------------------------------------------- OPUS DEI */
  "opus-dei": {
    familia:"movimientos",
    nombre:"Opus Dei",
    latin:"Prelatura de la Santa Cruz y Opus Dei",
    resumen:"Un sacerdote español, San Josemaría Escrivá, propuso en 1928 un mensaje que entonces sonaba nuevo: cualquier persona puede ser santa en su trabajo y en su vida diaria, sin salir del mundo. El Opus Dei es hoy una prelatura personal de la Iglesia con laicos y sacerdotes en muchos países. Está en la Argentina desde 1950 y en Mendoza desde 1982.",
    tarjeta:"Santidad en el trabajo y la vida ordinaria. San Josemaría Escrivá. En Mendoza desde 1982.",
    lema:["Santificar el trabajo","Santificarse en el trabajo, santificar el trabajo y santificar a los demás con el trabajo."],
    habito:[["Sin hábito","oklch(0.75 0.03 260)"]],
    datos:[
      ["Fundador","San Josemaría Escrivá de Balaguer (1902 – 1975)"],
      ["Fundación","2 de octubre de 1928, Madrid"],
      ["Forma jurídica","Prelatura personal desde el 28 de noviembre de 1982"],
      ["En la Argentina","Desde el 12 de marzo de 1950"],
      ["En Mendoza","Desde 1982"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Prelatura de la Santa Cruz y Opus Dei</strong>. “Opus Dei” significa en latín “Obra de Dios”; sus miembros suelen decir simplemente “la Obra”.</p>
        <p>No es una orden religiosa ni un movimiento en sentido estricto: es una <strong>[[prelatura-personal|prelatura personal]]</strong>, una estructura de la Iglesia creada por Juan Pablo II el 28 de noviembre de 1982 con la constitución <em>Ut sit</em>. ${MK.v}</p>
        <p>La forman laicos (hombres y mujeres, casados y solteros) y sacerdotes. ${MK.v} Los laicos pueden ser [[numerario|numerarios]], agregados o supernumerarios. Los sacerdotes forman la Sociedad Sacerdotal de la Santa Cruz, a la que también pueden adherir sacerdotes diocesanos.</p>
        <p class="note">Las categorías de miembros son de conocimiento general.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Josemaría Escrivá de Balaguer</strong> nació en 1902 en Barbastro, España. Fue ordenado sacerdote en 1925.</p>
        <ul class="dots">
          <li><strong>2 de octubre de 1928:</strong> durante un retiro en Madrid, según contó él mismo, “vio” el Opus Dei. Es la fecha de fundación.</li>
          <li><strong>1930:</strong> comienza la labor con mujeres.</li>
          <li><strong>1943:</strong> nace la Sociedad Sacerdotal de la Santa Cruz.</li>
          <li><strong>26 de junio de 1975:</strong> muere en Roma. Beatificado en 1992 y canonizado por Juan Pablo II el 6 de octubre de 2002.</li>
          <li><strong>1974:</strong> visita la Argentina del 7 al 28 de junio y peregrina a Luján. ${MK.v}</li>
        </ul>
        <p class="note">Salvo la visita a la Argentina, las fechas son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1928</span><div class="ev"><b>Madrid</b>Fundación.</div></li>
          <li><span class="y">1950</span><div class="ev"><b>Argentina</b>El 12 de marzo llegan tres miembros a Ezeiza; empiezan en Rosario, a pedido del cardenal Caggiano. ${MK.v}</div></li>
          <li><span class="y">1974</span><div class="ev"><b>San Josemaría en la Argentina</b>Más de 25.000 personas lo ven o escuchan. ${MK.v}</div></li>
          <li><span class="y">1982</span><div class="ev"><b>Prelatura personal</b>Constitución <em>Ut sit</em>. ${MK.v} Ese mismo año, el Opus Dei llega a Mendoza. ${MK.v}</div></li>
          <li><span class="y">2002</span><div class="ev"><b>Canonización</b>de San Josemaría.</div></li>
          <li><span class="y">2022</span><div class="ev"><b><em>Ad charisma tuendum</em></b>El papa Francisco pasa la prelatura al Dicasterio para el Clero, establece que el prelado no sea obispo, pide un informe anual en vez de cada cinco años y solicita adaptar los estatutos. ${MK.v}</div></li>
          <li><span class="y">2023</span><div class="ev"><b>Congreso extraordinario</b>En Roma, del 12 al 16 de abril, para proponer los cambios en los estatutos. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>la santificación en medio del mundo</strong>, sobre todo a través del trabajo profesional y de los deberes familiares y sociales. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Llamada universal</h3><p>Todos están llamados a la santidad, no solo sacerdotes y religiosos. El Concilio Vaticano II afirmó lo mismo años después.</p></div>
          <div class="box"><h3>El trabajo</h3><p>Hecho con perfección y ofrecido a Dios, es camino de santidad.</p></div>
          <div class="box"><h3>Filiación divina</h3><p>Vivir como hijos de Dios, con confianza y alegría.</p></div>
          <div class="box"><h3>Libertad</h3><p>Cada miembro actúa con libertad y responsabilidad personal en la política y la vida profesional.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Plan de vida:</strong> misa, oración mental, Rosario, lectura espiritual y examen de conciencia diarios.</li>
          <li><strong>Unidad de vida:</strong> no separar la fe del trabajo, la familia o el descanso.</li>
          <li><strong>Las cosas pequeñas</strong> hechas por amor.</li>
          <li><strong>Libros clave:</strong> <em>Camino</em>, <em>Surco</em> y <em>Forja</em>, de San Josemaría.</li>
          <li><strong>Mortificación:</strong> algunos miembros practican penitencias corporales tradicionales, un aspecto que ha generado críticas.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Formación cristiana</strong> en centros, retiros y círculos.</li>
          <li><strong>Obras corporativas:</strong> colegios, universidades (en la Argentina, la Universidad Austral), hospitales y escuelas de oficios.</li>
          <li><strong>Apostolado personal</strong> de cada miembro en su ambiente.</li>
          <li><strong>Cooperadores:</strong> personas, incluso no católicas, que colaboran con sus obras.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p><strong>No tienen hábito.</strong> Los laicos visten como cualquiera; los sacerdotes, como el clero diocesano.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Josemaría Escrivá</b><span class="d">1902 – 1975 · España e Italia</span><p>Fundador. Canonizado en 2002.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Beato Álvaro del Portillo</b><span class="d">1914 – 1994 · España</span><p>Ingeniero, primer prelado del Opus Dei. Beatificado en 2014.</p><div class="tags"><span>Prelado</span></div></div>
          <div class="saint"><b>Beata Guadalupe Ortiz de Landázuri</b><span class="d">1916 – 1975 · España y México</span><p>Química y profesora, primera laica del Opus Dei beatificada (2019).</p><div class="tags"><span>Laica</span><span>Científica</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <ol class="steps">
          <li><div><strong>Participar de actividades de formación</strong> abiertas: retiros, charlas, clases de doctrina.</div></li>
          <li><div><strong>Acompañamiento espiritual</strong> con un sacerdote o un laico de la Obra.</div></li>
          <li><div><strong>Pedir la admisión</strong>, como numerario, agregado o supernumerario (mayores de 16 años para pedirla, con incorporación a partir de los 18).</div></li>
          <li><div><strong>Incorporación temporal</strong> y luego definitiva, con un compromiso contractual con la prelatura.</div></li>
          <li><div><strong>O colaborar como cooperador</strong>, sin ser miembro.</div></li>
        </ol>
        <p class="note">Las edades y etapas son de conocimiento general; no las verifiqué con los estatutos.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza</span>
          <h3>Desde 1982</h3>
          <p style="margin-top:8px">El Opus Dei comenzó su labor estable en Mendoza en 1982. ${MK.v}</p>
          <p class="note">No encontré publicadas las direcciones de sus centros en Mendoza.</p>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>Argentina:</strong> desde 1950, empezando en Rosario. Luego La Plata (1980), Tucumán (1981), Mendoza (1982), Santa Fe (1986), Mar del Plata (1990), Salta y Posadas (1995), San Juan (2003), entre otras. ${MK.v}</li>
        </ul>
        <div class="box" style="margin-top:14px">
          <h3>Una investigación en curso</h3>
          <p>En la Argentina hay una causa judicial federal, abierta en 2023, por denuncias de 43 exnumerarias auxiliares contra cinco ex directivos de la prelatura por presunta explotación laboral y trata. Las denunciantes relatan años de trabajo doméstico sin pago ni horario fijo. Son acusaciones que todavía no fueron probadas en un juicio. El Opus Dei las rechaza y afirma que se manipularon los hechos con fines mediáticos. A noviembre de 2026, el juez no había citado a declarar a los acusados. ${MK.v}</p>
        </div>` }
    ],
    compartir:{
      frases:[
        ["Que busques a Cristo. Que encuentres a Cristo. Que ames a Cristo.","San Josemaría, Camino 382"],
        ["Hay un algo santo, divino, escondido en las situaciones más comunes, que toca a cada uno de vosotros descubrir.","San Josemaría, homilía “Amar al mundo apasionadamente” (1967)"],
        ["Hacedlo todo por Amor.","San Josemaría (atribuida)"]
      ],
      anecdotas:[
        ["Las campanas del 2 de octubre","San Josemaría contó que, en un retiro en Madrid en 1928, mientras sonaban las campanas de una iglesia cercana por la fiesta de los Ángeles Custodios, “vio” lo que Dios quería: el Opus Dei. ${MK.g}"],
        ["36 horas de viaje","Los tres primeros miembros que llegaron a la Argentina en 1950 viajaron 36 horas en avión hasta Ezeiza y empezaron alquilando una casa en Rosario. ${MK.v}"],
        ["La química que creía en la santidad","Guadalupe Ortiz de Landázuri fue de las primeras mujeres de España en estudiar ciencias químicas. Profesora e investigadora, decía que se podía ser santa en un laboratorio. ${MK.g}"]
      ],
      preguntas:[
        "¿Creés que tu estudio o tu trabajo pueden ser camino hacia Dios? ¿Cómo?",
        "¿Hacés bien las cosas pequeñas cuando nadie te ve?",
        "¿Tu fe se nota en tu manera de trabajar o de estudiar?",
        "¿Cómo distinguir entre exigencia sana y presión que daña, en cualquier grupo de Iglesia?"
      ],
      dinamica:"“Ofrecer el día”: cada uno escribe su agenda del día siguiente y, al lado de cada actividad (clase, trabajo, deporte, comida), anota una intención concreta por la que la va a ofrecer. Al otro día se comparte cómo cambió la manera de vivir esas cosas."
    },
    fuentes:[
      ["Opus Dei Argentina — Historia","https://opusdei.org/es-ar/article/historia/"],
      ["Opus Dei — Cronología del camino jurídico reciente","https://opusdei.org/es/article/cronologia-del-camino-juridico-reciente-del-opus-dei/pdf"],
      ["Opus Dei — Ad charisma tuendum: preguntas y respuestas","https://opusdei.org/es/article/ad-charismatuendum-preguntas-respuestas/pdf"],
      ["Infovaticana (2026) — Las 43 exnumerarias auxiliares piden ser recibidas por León XIV","https://infovaticana.com/2026/11/02/ex-numerarias-opus-dei-piden-leon-xiv-recibirlas-argentina/"],
      ["Opus Dei — Preguntas y respuestas sobre la investigación judicial en Argentina","https://opusdei.org/es-ve/article/preguntas-respuestas-investigacion-judicial-argentina/"]
    ]
  },

  /* ---------------------------------------------------- HAKUNA */
  hakuna: {
    familia:"movimientos",
    nombre:"Hakuna",
    latin:"Asociación privada de fieles · Madrid",
    resumen:"Movimiento de jóvenes nacido en 2013, en la Jornada Mundial de la Juventud de Río de Janeiro, alrededor del sacerdote español José Pedro Manglano. Su centro es la adoración al Santísimo en la Hora Santa. Se hizo conocido por su grupo de música, Hakuna Group Music.",
    tarjeta:"Adoración, amistad, formación y servicio, con mucha música. Nacido en la JMJ de Río 2013.",
    lema:["Con toda el alma","Expresión que se repite entre sus miembros (CTEA)."],
    habito:[["Sin hábito","oklch(0.75 0.02 260)"]],
    datos:[
      ["Tipo","Asociación privada de fieles"],
      ["Fundador","José Pedro Manglano (“Don Josepe”), sacerdote"],
      ["Origen","JMJ de Río de Janeiro, 2013"],
      ["Aprobación","2017, arzobispado de Madrid"],
      ["Sede","Las Rozas (Madrid)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"p", html:`
        <p>Se llama <strong>Hakuna</strong>. Sus miembros se llaman entre sí, con humor, <strong>“pringados”</strong>. ${MK.v}</p>
        <p class="note">${MK.p} Un artículo de El Español dice que el nombre se inspira en el “¡hagan lío!” que Francisco dijo a los jóvenes en Río. No lo pude confirmar en otra fuente.</p>` },

      { id:"fundador", titulo:"Origen y año", estado:"v", html:`
        <p><strong>José Pedro Manglano</strong>, conocido como <strong>Don Josepe</strong>, es un sacerdote español, teólogo, escritor y ex profesor de antropología. ${MK.v}</p>
        <ul class="dots">
          <li><strong>2013:</strong> Hakuna nace alrededor de la JMJ de Río de Janeiro, el primer año del pontificado de Francisco. ${MK.v}</li>
          <li><strong>2017:</strong> el cardenal Carlos Osoro, arzobispo de Madrid, lo aprueba como asociación privada de fieles. ${MK.v}</li>
          <li><strong>2020:</strong> Manglano, que era miembro del Opus Dei, deja la Obra. Él aclara que Hakuna no es una continuación del Opus Dei: “De algún modo hay una herencia, pero también hay una novedad de vida”. ${MK.v}</li>
        </ul>
        <p class="note">El Español da 2012 como año de origen, pero la JMJ de Río fue en 2013, que es lo que dice El Independiente.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">2013</span><div class="ev"><b>Río de Janeiro</b>Nacimiento en la JMJ. ${MK.v}</div></li>
          <li><span class="y">2017</span><div class="ev"><b>Madrid</b>Aprobación diocesana. ${MK.v}</div></li>
          <li><span class="y">2019</span><div class="ev"><b>Panamá</b>Participan en la JMJ de Panamá. ${MK.v}</div></li>
          <li><span class="y">2026</span><div class="ev"><b>Música</b>Más de 500.000 oyentes en Spotify, según El Español. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>Hakuna quiere llevar a los jóvenes a un <strong>encuentro personal con Jesús en la Eucaristía</strong>, y desde ahí a la amistad, la formación y el servicio. La música es, en palabras de su fundador, “el fruto”, no la raíz. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Adoración</h3><p>La Hora Santa con música, ante el Santísimo.</p></div>
          <div class="box"><h3>Formación</h3><p>Charlas y retiros.</p></div>
          <div class="box"><h3>Servicio</h3><p>Voluntariados, a los que llaman “compartiriados”.</p></div>
          <div class="box"><h3>Amistad</h3><p>Escapadas, encuentros y viajes en grupo.</p></div>
        </div>
        <p class="note">Las actividades salen de las páginas de Hakuna; su descripción como “carisma” es mía.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La [[adoracion|adoración eucarística]]:</strong> el centro de todo.</li>
          <li><strong>“Todos por todos”:</strong> lo común antes que lo individual.</li>
          <li><strong>Encontrar a Dios en lo ordinario.</strong></li>
          <li><strong>Con toda el alma:</strong> vivir la fe con intensidad y alegría.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Misas, Horas Santas, cursos, retiros, voluntariados en España y en otros países (Filipinas, Burundi, Ecuador, entre otros) y conciertos. ${MK.v}</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>No tienen hábito: son jóvenes laicos con ropa común.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<p>Es un movimiento muy reciente y no tiene santos propios. No encontré un patrono oficial.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Ir a una Hora Santa</h3><p>Es la puerta de entrada habitual.</p></div>
          <div class="box"><h3>Escuchar su música</h3><p>Hakuna Group Music está en las plataformas de música.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p>${MK.p} No encontré información confiable sobre grupos de Hakuna en la Argentina ni en Mendoza. Sus páginas mencionan actividades en España, Panamá, Ecuador, Colombia, Filipinas y Burundi.</p>
        <p class="note">Sus canciones sí se usan en muchos grupos juveniles argentinos, pero eso es una impresión mía, no un dato verificado.</p>` }
    ],
    compartir:{
      frases:[
        ["Hagan lío.","Papa Francisco a los jóvenes argentinos, JMJ Río 2013"],
        ["Un hijo no es la continuación de su padre. De algún modo hay una herencia, pero también hay una novedad de vida.","José Pedro Manglano, 2026"],
        ["Vengan a mí todos los que están afligidos y agobiados, y yo los aliviaré.","Mateo 11,28"]
      ],
      anecdotas:[
        ["La música como fruto","Manglano explica la música con la imagen de un naranjo: no plantaron el árbol para vender naranjas; las naranjas salieron solas. ${MK.v}"]
      ],
      preguntas:[
        "¿Alguna vez estuviste un rato en silencio frente al Santísimo? ¿Qué te pasó?",
        "¿Qué canción te ayuda a rezar?",
        "¿Qué significaría hoy para vos “hacer lío”?"
      ],
      dinamica:"Armar una mini Hora Santa: exposición del Santísimo (o una imagen de Jesús si no hay sacerdote), tres canciones tranquilas, una lectura breve y diez minutos de silencio. Al final, quien quiera comparte una palabra."
    },
    fuentes:[
      ["El Independiente (2026) — Entrevista a José Pedro Manglano","https://www.elindependiente.com/sociedad/2026/06/05/jose-pedro-manglano-fundador-hakuna-no-continuacion-opus-pero-algun-modo-herencia/amp/"],
      ["El Español (2026) — Don Josepe y Hakuna","https://www.elespanol.com/madrid/sociedad/20260606/don-josepe-profesor-dejo-opus-dedicarse-liderar-hakuna-grupo-medio-millon-fieles/1003744275127_0.html"],
      ["Hakuna — Cartas","https://hakuna.org/?p=104"]
    ]
  },

  /* ---------------------------------------------------- MOVIMIENTO FAMILIAR CRISTIANO */
  mfc: {
    familia:"movimientos",
    nombre:"Movimiento Familiar Cristiano",
    latin:"MFC",
    resumen:"Movimiento de laicos que trabaja con matrimonios y familias, nacido en América Latina a mediados del siglo XX con el impulso del pasionista argentino Pedro Richards. Se organiza en pequeños equipos de matrimonios que se reúnen para crecer juntos en la fe.",
    tarjeta:"Matrimonios y familias que se acompañan en equipos. Con raíces argentinas: el padre Pedro Richards.",
    lema:["Primero la familia","Título de una nota de Diario de Cuyo sobre el movimiento."],
    habito:[["Sin hábito","oklch(0.75 0.02 260)"]],
    datos:[
      ["Tipo","Movimiento de laicos"],
      ["Asesor fundador","P. Pedro Richards, C.P. (Buenos Aires, 1911)"],
      ["Primeros equipos","1950 – 1952"],
      ["Destinatarios","Matrimonios, novios, jóvenes, viudos y otros"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p>Se llama <strong>Movimiento Familiar Cristiano</strong>, conocido por la sigla <strong>MFC</strong>. ${MK.v}</p>` },

      { id:"fundador", titulo:"Origen y año", estado:"v", html:`
        <p>El padre <strong>Pedro Richards</strong>, religioso [[pasionista|pasionista]] nacido en Buenos Aires en 1911, es considerado el asesor fundador del MFC en América Latina. Desde 1948 se dedicó al apostolado del hogar. ${MK.v}</p>
        <ul class="dots">
          <li><strong>1950 – 1952:</strong> reuniones de los primeros equipos de matrimonios y retiros anuales de tres días. ${MK.v}</li>
          <li><strong>1957:</strong> en un viaje por América Latina, el movimiento se establece en Ecuador, Bolivia, México y Cuba. ${MK.v}</li>
          <li><strong>1960:</strong> llega a Centroamérica. ${MK.v}</li>
          <li><strong>1966:</strong> se funda en Montevideo el Instituto de Formación Familiar (CIEF). ${MK.v}</li>
        </ul>
        <p class="note">No sé con precisión la fecha ni el lugar exacto de la primera fundación. Es de conocimiento general que el MFC se inspiró en el Christian Family Movement de Estados Unidos; no lo verifiqué.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1948</span><div class="ev"><b>Apostolado del hogar</b>Richards empieza a dedicarse a las familias. ${MK.v}</div></li>
          <li><span class="y">1950</span><div class="ev"><b>Primeros equipos</b>Matrimonios que se reúnen en grupo. ${MK.v}</div></li>
          <li><span class="y">1957</span><div class="ev"><b>Expansión</b>Ecuador, Bolivia, México y Cuba. ${MK.v}</div></li>
          <li><span class="y">1966</span><div class="ev"><b>Montevideo</b>Instituto de Formación Familiar. ${MK.v}</div></li>
          <li><span class="y">2022</span><div class="ev"><b>Documental</b>Se estrena “Que no se apague la antorcha”, sobre su historia de casi 70 años. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`
        <p>Su misión es <strong>conocer, vivir y difundir los valores naturales y sobrenaturales del matrimonio y la familia cristiana</strong>. Defiende la unidad del matrimonio y la vida desde la concepción hasta la muerte natural. ${MK.v}</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La familia como Iglesia doméstica:</strong> el hogar como primer lugar de fe.</li>
          <li><strong>El equipo:</strong> matrimonios que se acompañan, rezan juntos y se ayudan.</li>
          <li><strong>La Sagrada Familia</strong> como modelo.</li>
        </ul>
        <p class="note">Descripción de conocimiento general.</p>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Grupos para matrimonios, novios, jóvenes, viudos, personas separadas fieles a su vínculo y personas solteras, con distintos servicios para cada etapa de la familia. ${MK.v}</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>No tienen hábito: son familias laicas.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>La Sagrada Familia</b><span class="d">Jesús, María y José</span><p>Modelo de toda familia cristiana.</p><div class="tags"><span>Modelo</span></div></div>
          <div class="saint"><b>Santos Luis y Celia Martin</b><span class="d">s. XIX · Francia</span><p>Padres de Santa Teresita, primer matrimonio canonizado juntos (2015). No están vinculados oficialmente al MFC; los sumo como ejemplo de santidad matrimonial.</p><div class="tags"><span>Matrimonio</span></div></div>
        </div>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como matrimonio</h3><p>Sumarse a un equipo de la parroquia o diócesis.</p></div>
          <div class="box"><h3>Como novios</h3><p>Grupos de preparación y acompañamiento.</p></div>
          <div class="box"><h3>Como joven</h3><p>Grupos juveniles del movimiento.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p>El fundador era argentino y el movimiento tiene una larga historia en la región: Diario de Cuyo (San Juan) le dedicó una nota en 2014, cuando cumplía 60 años de trayectoria. ${MK.v}</p>
        <p class="note">${MK.p} No encontré datos publicados sobre equipos del MFC en Mendoza. Conviene preguntar en la Pastoral Familiar del Arzobispado.</p>` }
    ],
    compartir:{
      frases:[
        ["Lo que Dios ha unido, que no lo separe el hombre.","Mateo 19,6"],
        ["El futuro de la humanidad se fragua en la familia.","San Juan Pablo II, Familiaris consortio 86"]
      ],
      anecdotas:[],
      preguntas:[
        "¿Qué aprendiste de la fe en tu casa?",
        "¿Qué familia conocés que sea un ejemplo para vos? ¿Por qué?",
        "¿Cómo te imaginás tu propia familia en el futuro?",
        "¿Qué podés hacer hoy para cuidar a tu familia?"
      ],
      dinamica:"Carta a la familia: cada uno escribe una carta breve a alguien de su casa agradeciendo algo concreto. Se reza por todas las familias del grupo, especialmente las que están pasando un momento difícil."
    },
    fuentes:[
      ["Catholic.net — P. Pedro Richards y el MFC","https://es.catholic.net/imprimir.php?id=22723"],
      ["Catholic.net — Documental “Que no se apague la antorcha”","https://es.catholic.net/op/articulos/79118/cat/161/que-no-se-apague-la-antorcha.html"],
      ["Diario de Cuyo (2014) — Primero la familia","https://www.diariodecuyo.com.ar/noticias/primero-la-familia-686727.html"]
    ]
  },

  /* ==================================================== MOVIMIENTOS DE MATRIMONIOS */
  "encuentro-matrimonial": {
    familia:"movimientos",
    nombre:"Encuentro Matrimonial",
    latin:"Encuentro Matrimonial Mundial",
    resumen:"Movimiento católico que ofrece a los matrimonios un fin de semana para profundizar su relación y su diálogo. Está abierto también a sacerdotes y religiosos. Tiene su propia organización en la Argentina.",
    tarjeta:"Un fin de semana para que los matrimonios vuelvan a encontrarse.",
    lema:["El amor es paciente, es servicial","1 Corintios 13,4."],
    habito:[["Sin hábito","oklch(0.75 0.02 260)"]],
    datos:[
      ["Tipo","Movimiento de matrimonios"],
      ["Iniciador","P. Gabriel Calvo (conocimiento general)"],
      ["Origen","España, década de 1960 (conocimiento general)"],
      ["Formato","Fin de semana"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Encuentro Matrimonial</strong> (en el mundo, Encuentro Matrimonial Mundial). ${MK.v}</p>` },
      { id:"fundador", titulo:"Origen y año", estado:"g", html:`<p>Lo inició en España el sacerdote <strong>Gabriel Calvo</strong> a comienzos de la década de 1960, y desde Estados Unidos se extendió al mundo.</p><p class="note">${MK.p} Dato de conocimiento general; no lo verifiqué en una fuente.</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"g", html:`<p>Del primer fin de semana en España pasó a América y hoy está en muchos países. En la Argentina tiene organización propia.</p>` },
      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`<p>Ayudar a los matrimonios a <strong>profundizar su relación</strong> con un camino de diálogo. ${MK.v}</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>El sacramento del matrimonio</strong> como camino de santidad.</li><li><strong>El diálogo</strong> sincero de la pareja.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Fines de semana para matrimonios, sacerdotes y religiosos. Se recomienda que las parejas tengan más de tres años de vida en común. ${MK.v}</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>No tienen hábito: son matrimonios laicos.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<p>No tienen santos propios. Los santos Luis y Celia Martin son un buen ejemplo de matrimonio santo.</p>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Anotándose en un fin de semana a través de la organización argentina (sitio oficial: ematrimonial.org.ar).</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`<p>Tiene organización en la Argentina. ${MK.v}</p><p class="note">${MK.p} No encontré datos sobre fines de semana en Mendoza.</p>` }
    ],
    compartir:{
      frases:[["El amor es paciente, es servicial; el amor no es envidioso.","1 Corintios 13,4"]],
      anecdotas:[],
      preguntas:["¿Qué matrimonio admirás? ¿Por qué?","¿Qué tiene que ver el diálogo con el amor?","¿Cómo te preparás hoy para la persona con quien quizás compartas tu vida?"],
      dinamica:"Invitar a un matrimonio de la comunidad a contar su historia: cómo se conocieron, una crisis que superaron y qué les ayudó."
    },
    fuentes:[["Catholic.net — Encuentro Matrimonial","https://es.catholic.net/op/articulos/22298/cat/777/encuentro-matrimonial.html"]]
  },

  ens: {
    familia:"movimientos",
    nombre:"Equipos de Nuestra Señora",
    latin:"Équipes Notre-Dame · END",
    resumen:"Movimiento de espiritualidad matrimonial nacido en Francia hacia 1938 con el padre Henri Caffarel. Los matrimonios se reúnen en equipos de cinco a siete parejas con un sacerdote, bajo la protección de María. Está en más de cincuenta países, también en la Argentina.",
    tarjeta:"Equipos de matrimonios que se ayudan a crecer en el amor a Dios y entre ellos.",
    lema:["Donde dos o tres se reúnen en mi nombre","Mateo 18,20."],
    habito:[["Sin hábito","oklch(0.75 0.02 260)"]],
    datos:[
      ["Tipo","Movimiento de matrimonios"],
      ["Iniciador","P. Henri Caffarel (1903 – 1996)"],
      ["Origen","Francia, ≈ 1938"],
      ["Hispanoamérica","Desde 1957 (Colombia)"],
      ["Presencia","Más de 50 países"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Equipos de Nuestra Señora</strong> (en francés, <em>Équipes Notre-Dame</em>). ${MK.v}</p>` },
      { id:"fundador", titulo:"Origen y año", estado:"v", html:`<p>Nacieron en Francia <strong>hacia 1938</strong>. ${MK.v} Los inició el padre <strong>Henri Caffarel</strong>, sacerdote de París, con un grupo de matrimonios que le pidieron ayuda para vivir su fe en pareja. En 1947 se redactó la Carta fundacional.</p><p class="note">El nombre de Caffarel y la Carta de 1947 son de conocimiento general.</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`<ol class="timeline"><li><span class="y">1938</span><div class="ev"><b>París</b>Primeros equipos. ${MK.v}</div></li><li><span class="y">1947</span><div class="ev"><b>Carta</b>Documento fundacional. ${MK.g}</div></li><li><span class="y">1957</span><div class="ev"><b>Colombia</b>Llegan a Hispanoamérica. ${MK.v}</div></li><li><span class="y">2000</span><div class="ev"><b>Hispanoamérica</b>405 equipos en enero. ${MK.v}</div></li></ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`<p>Ayudar a los matrimonios a <strong>crecer en el amor a Dios y al prójimo</strong>, juntos y en equipo. ${MK.v}</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>La oración conyugal</strong> y personal.</li><li><strong>La “sentada”</strong>: un diálogo mensual de la pareja ante Dios.</li><li><strong>María</strong>, Nuestra Señora, como protectora.</li></ul><p class="note">Conocimiento general sobre su método.</p>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Grupos de cinco a siete matrimonios con un sacerdote consejero. ${MK.v}</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>No tienen hábito: son matrimonios laicos.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<div class="saints"><div class="saint"><b>Siervo de Dios Henri Caffarel</b><span class="d">1903 – 1996 · Francia</span><p>Iniciador. Su causa de beatificación está abierta.</p><div class="tags"><span>Fundador</span></div></div></div><p class="note">Conocimiento general.</p>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Para matrimonios casados por la Iglesia, a través de un equipo existente o del sector local.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`<p>Trabajan en la Argentina. ${MK.v}</p><p class="note">${MK.p} No encontré cuántos equipos hay ni si hay en Mendoza.</p>` }
    ],
    compartir:{
      frases:[["Donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos.","Mateo 18,20"]],
      anecdotas:[["Un pedido de matrimonios","Los equipos no nacieron de un plan del sacerdote, sino de matrimonios jóvenes que querían vivir su amor como camino hacia Dios y se lo pidieron. ${MK.g}"]],
      preguntas:["¿Qué te enseñó tu familia sobre rezar juntos?","¿Por qué es importante no vivir la fe solo?"],
      dinamica:"Simular una “sentada”: de a dos, cada uno cuenta durante tres minutos algo que vivió en la semana mientras el otro solo escucha; después se cambia. Terminar con un Avemaría."
    },
    fuentes:[["Catholic.net — Equipos de Nuestra Señora","https://es.catholic.net/op/articulos/22294/cat/777/equipos-de-nuestra-senora.html"]]
  }

});
