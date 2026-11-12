/* Fichas de la familia "clerigos". Cada ficha sigue la estructura descripta en CLAUDE.md. */
Object.assign(FICHAS, {

  /* ---------------------------------------------------- JESUITAS */
  jesuitas: {
    familia:"clerigos",
    nombre:"Jesuitas",
    latin:"Compañía de Jesús · Societas Iesu",
    resumen:"Un soldado herido en Pamplona descubrió, leyendo vidas de santos en su cama, que Dios le hablaba a través de lo que sentía en el corazón. De esa experiencia nacieron los Ejercicios Espirituales y la Compañía de Jesús. Misioneros, educadores y científicos, en Argentina dejaron las Misiones guaraníes, la Manzana Jesuítica de Córdoba y al papa Francisco.",
    tarjeta:"Discernimiento, misión y educación. San Ignacio, San Francisco Javier, Mama Antula y el papa Francisco.",
    lema:["Ad maiorem Dei gloriam","“Para mayor gloria de Dios”. Se abrevia A.M.D.G."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"],["Negro (fajín)","oklch(0.26 0.01 260)"]],
    datos:[
      ["Siglas","S.J."],
      ["Fundador","San Ignacio de Loyola (1491 – 1556)"],
      ["Aprobación","27 de septiembre de 1540"],
      ["Voto propio","Cuarto voto de obediencia al Papa en las misiones"],
      ["Fiesta principal","31 de julio, San Ignacio"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre oficial es <strong>Compañía de Jesús</strong> (S.J., del latín <em>Societas Iesu</em>). “Compañía” se refiere a un grupo de compañeros de Jesús, no a una empresa. Son el ejemplo más conocido de [[clerigos-regulares|clérigos regulares]]: sacerdotes y hermanos con votos, pero sin rezo del oficio en coro ni vida monástica, para estar siempre disponibles para la misión.</p>
        <p>Alrededor de ellos hay una gran “familia ignaciana”: congregaciones de religiosas, laicos y movimientos que viven la [[espiritualidad|espiritualidad]] de San Ignacio.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Ignacio de Loyola</strong> (Íñigo López de Loyola) nació en 1491 en el País Vasco, España. Fue cortesano y militar, y le gustaban la fama y las aventuras.</p>
        <ul class="dots">
          <li><strong>1521:</strong> una bala de cañón le destroza la pierna en la defensa de Pamplona. Durante la convalecencia lee una vida de Cristo y vidas de santos, y empieza su conversión.</li>
          <li><strong>1522–1523:</strong> en Manresa vive meses de oración intensa y escribe lo que serán los [[ejercicios|Ejercicios Espirituales]].</li>
          <li><strong>15 de agosto de 1534:</strong> en Montmartre (París) hace votos con seis compañeros de universidad, entre ellos Francisco Javier y Pedro Fabro.</li>
          <li><strong>27 de septiembre de 1540:</strong> el papa Pablo III aprueba la Compañía de Jesús.</li>
          <li><strong>1556:</strong> Ignacio muere en Roma. La Compañía ya tenía alrededor de mil miembros. ${MK.g}</li>
        </ul>
        <p class="note">Fechas de conocimiento general; no las verifiqué hoy con una fuente puntual.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1540</span><div class="ev"><b>Aprobación</b>Pablo III aprueba la Compañía.</div></li>
          <li><span class="y">1542</span><div class="ev"><b>Francisco Javier en Asia</b>Llega a la India; después va a Japón y muere a las puertas de China, en 1552.</div></li>
          <li><span class="y">1548</span><div class="ev"><b>El primer colegio</b>En Mesina (Italia) abren su primer colegio para alumnos laicos. La educación se convierte en una de sus grandes misiones.</div></li>
          <li><span class="y">1585</span><div class="ev"><b>Llegan al actual territorio argentino</b>Los primeros jesuitas entran a la región del Tucumán.</div></li>
          <li><span class="y">1609</span><div class="ev"><b>En Mendoza</b>Abren una escuela en Mendoza. ${MK.v}</div></li>
          <li><span class="y">1609</span><div class="ev"><b>Misiones guaraníes</b>Empiezan las reducciones con los pueblos guaraníes en la actual Misiones, Paraguay y Brasil.</div></li>
          <li><span class="y">1613</span><div class="ev"><b>Córdoba</b>Se funda el Colegio Máximo de Córdoba, origen de la Universidad Nacional de Córdoba, la más antigua del país.</div></li>
          <li><span class="y">1767</span><div class="ev"><b>Expulsión</b>Carlos III expulsa a los jesuitas de los territorios españoles. En Mendoza, su iglesia queda abandonada. ${MK.v}</div></li>
          <li><span class="y">1773</span><div class="ev"><b>Supresión</b>El papa Clemente XIV suprime la Compañía en todo el mundo, bajo presión de las monarquías europeas.</div></li>
          <li><span class="y">1814</span><div class="ev"><b>Restauración</b>Pío VII restablece la Compañía de Jesús.</div></li>
          <li><span class="y">2013</span><div class="ev"><b>El primer papa jesuita</b>El argentino Jorge Mario Bergoglio, jesuita, es elegido papa con el nombre de Francisco. Muere el 21 de abril de 2025.</div></li>
        </ol>
        <p class="note">Las fechas sobre Mendoza (1609 y 1767) están verificadas. Las demás son de conocimiento general; el año de inicio de las reducciones guaraníes varía según la fuente.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] jesuita es <strong>“en todo amar y servir”</strong>, buscando y hallando a Dios en todas las cosas, al servicio de la misión de la Iglesia donde más se necesite.</p>
        <div class="cols">
          <div class="box"><h3>Discernimiento</h3><p>Aprender a reconocer cómo Dios nos mueve por dentro para tomar buenas decisiones. Ver [[discernimiento|discernimiento]].</p></div>
          <div class="box"><h3>Disponibilidad</h3><p>Ir a donde el Papa y la Iglesia necesiten. Por eso hacen un [[cuarto-voto|cuarto voto]] de obediencia especial al Papa en cuanto a las misiones.</p></div>
          <div class="box"><h3>El “más”</h3><p>El [[magis|magis]]: no conformarse, buscar siempre lo que más ayude, para mayor gloria de Dios.</p></div>
          <div class="box"><h3>Contemplativos en la acción</h3><p>Rezar no solo en la capilla, sino en medio del trabajo, el estudio y la misión.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>El corazón de la espiritualidad ignaciana son los <strong>[[ejercicios|Ejercicios Espirituales]]</strong>: un mes (o versiones más breves) de oración guiada para ordenar la vida y elegir según la voluntad de Dios.</p>
        <ul class="dots">
          <li><strong>Contemplación imaginativa:</strong> meterse en las escenas del Evangelio con los sentidos, como un personaje más.</li>
          <li><strong>El [[examen|examen]] diario:</strong> unos minutos cada noche para revisar el día con gratitud y ver dónde estuvo Dios.</li>
          <li><strong>Discernimiento de espíritus:</strong> distinguir lo que trae consolación (paz, alegría profunda) de lo que trae desolación.</li>
          <li><strong>Principio y fundamento:</strong> todo fue creado para que el ser humano alabe, sirva a Dios y se salve; las cosas se usan en la medida en que ayudan a eso.</li>
          <li><strong>Amistad con Cristo:</strong> Ignacio pide conocerlo internamente para más amarlo y seguirlo.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Educación:</strong> colegios y universidades en todo el mundo. En Mendoza, el Colegio San Luis Gonzaga forma parte de las obras de la Compañía desde 2018. ${MK.v}</li>
          <li><strong>Ejercicios espirituales:</strong> casas de retiro y acompañamiento espiritual.</li>
          <li><strong>Misiones y fronteras:</strong> lugares donde la Iglesia no llega fácilmente.</li>
          <li><strong>Justicia social:</strong> servicio a refugiados (Servicio Jesuita a Refugiados) y redes educativas populares como Fe y Alegría.</li>
          <li><strong>Ciencia y cultura:</strong> astronomía (el Observatorio Vaticano está a cargo de jesuitas), filosofía, arte.</li>
          <li><strong>Jóvenes:</strong> movimientos como el Movimiento Eucarístico Juvenil (MEJ) y las Comunidades de Vida Cristiana (CVX).</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p>Los jesuitas <strong>no tienen un hábito propio</strong>. Ignacio quiso que vistieran como los sacerdotes del lugar donde vivían, para no distinguirse y moverse con libertad.</p>
        <ul class="dots">
          <li>Tradicionalmente usaron <strong>sotana negra</strong> con un fajín, que con el tiempo se identificó con ellos.</li>
          <li>Hoy la mayoría usa <strong>camisa clerical</strong> o ropa común, según el país y la misión.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Ignacio de Loyola</b><span class="d">1491 – 1556 · España e Italia</span><p>Fundador. Autor de los Ejercicios Espirituales. Patrono de los ejercicios y de los retiros.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Francisco Javier</b><span class="d">1506 – 1552 · España y Asia</span><p>Misionero en India y Japón. Patrono de las misiones junto con Santa Teresita.</p><div class="tags"><span>Misionero</span></div></div>
          <div class="saint"><b>San Pedro Fabro</b><span class="d">1506 – 1546 · Francia</span><p>Primer compañero de Ignacio, maestro de los Ejercicios. Canonizado en 2013.</p><div class="tags"><span>Primer compañero</span></div></div>
          <div class="saint"><b>San Luis Gonzaga</b><span class="d">1568 – 1591 · Italia</span><p>Joven noble que renunció a su herencia. Murió a los 23 años cuidando enfermos de peste. Patrono de la juventud.</p><div class="tags"><span>Joven</span><span>Patrono de la juventud</span></div></div>
          <div class="saint"><b>San Estanislao de Kostka</b><span class="d">1550 – 1568 · Polonia</span><p>Caminó cientos de kilómetros para entrar a la Compañía. Murió a los 17 años.</p><div class="tags"><span>Joven</span></div></div>
          <div class="saint"><b>San Pedro Claver</b><span class="d">1580 – 1654 · España y Colombia</span><p>En Cartagena de Indias se declaró “esclavo de los esclavos” y sirvió a los africanos esclavizados.</p><div class="tags"><span>Derechos humanos</span></div></div>
          <div class="saint"><b>San Roque González</b><span class="d">1576 – 1628 · Paraguay</span><p>Nacido en Asunción, fundador de reducciones guaraníes, mártir. Canonizado en 1988.</p><div class="tags"><span>Mártir</span><span>Río de la Plata</span></div></div>
          <div class="saint"><b>San Roberto Belarmino</b><span class="d">1542 – 1621 · Italia</span><p>Teólogo y cardenal, escritor de catecismos.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>San Alberto Hurtado</b><span class="d">1901 – 1952 · Chile</span><p>Jesuita chileno, fundador del Hogar de Cristo para los pobres. Canonizado en 2005.</p><div class="tags"><span>Sudamericano</span></div></div>
          <div class="saint"><b>Santa María Antonia de Paz y Figueroa</b><span class="d">1730 – 1799 · Santiago del Estero y Buenos Aires</span><p>Mama Antula: laica consagrada que, tras la expulsión de los jesuitas, recorrió el país a pie organizando Ejercicios Espirituales. Primera santa argentina, canonizada en 2024.</p><div class="tags"><span>Argentina</span><span>Laica ignaciana</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general; no las verifiqué una por una hoy. Mama Antula no fue jesuita, pero es una figura central de la familia ignaciana en Argentina.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como jesuita</h3><p>Sacerdote o hermano. La formación es una de las más largas de la Iglesia: suele durar más de diez años antes de la ordenación.</p></div>
          <div class="box"><h3>Como laico ignaciano</h3><p>Comunidades de Vida Cristiana (CVX), voluntariados y redes de exalumnos.</p></div>
          <div class="box"><h3>Como joven</h3><p>El MEJ, grupos juveniles de colegios jesuitas y experiencias de misión.</p></div>
          <div class="box"><h3>Haciendo los Ejercicios</h3><p>Cualquiera puede hacerlos: en un retiro de fin de semana o en la vida diaria, con un acompañante.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional</strong>, con experiencias de Ejercicios.</div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Dos años, que incluyen los Ejercicios completos de un mes y “experiencias” de servicio.</div></li>
          <li><div><strong>Primeros votos</strong> al terminar el noviciado.</div></li>
          <li><div><strong>Estudios de filosofía, magisterio y teología</strong>, con años de trabajo apostólico.</div></li>
          <li><div><strong>Tercera probación y últimos votos</strong>, varios años después de la ordenación.</div></li>
        </ol>
        <p class="note">Las etapas son de conocimiento general; los tiempos exactos varían según la persona y la provincia.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · Ciudad</span>
          <h3>Colegio San Luis Gonzaga</h3>
          <p style="margin-top:8px">Colegio jesuita desde 2018. Su primaria funciona con ese nombre desde 1926, por lo que cumple 100 años en 2026. Los jesuitas ya habían abierto una escuela en Mendoza en 1609. ${MK.v}</p>
          <p class="addr">Colón 93, Ciudad de Mendoza</p>
        </div>
        <div class="place">
          <span class="eyebrow">Mendoza · Área Fundacional</span>
          <h3>Ruinas de San Francisco</h3>
          <p style="margin-top:8px">Aunque se las conoce por los franciscanos, fueron la iglesia de los jesuitas. Quedó abandonada después de la expulsión de 1767; en 1798 los franciscanos se trasladaron allí. El terremoto de 1861 la dejó en ruinas. ${MK.v}</p>
        </div>
        <h3 style="font-size:26px;margin-top:24px">En Argentina</h3>
        <ul class="dots">
          <li><strong>Córdoba:</strong> la Manzana Jesuítica y las Estancias Jesuíticas son Patrimonio de la Humanidad.</li>
          <li><strong>Misiones:</strong> las ruinas de las reducciones, como San Ignacio Miní, también son Patrimonio de la Humanidad.</li>
          <li><strong>Hoy:</strong> colegios, universidades, parroquias, casas de Ejercicios y obras sociales en varias provincias.</li>
        </ul>
        <p class="note">Los datos de Córdoba y Misiones son de conocimiento general. No llegué a verificar la lista actual de comunidades jesuitas en el país ni si hay casa de Ejercicios jesuita en Mendoza. ${MK.p}</p>` }
    ],
    compartir:{
      frases:[
        ["En todo amar y servir.","San Ignacio de Loyola, Ejercicios Espirituales"],
        ["Tomad, Señor, y recibid toda mi libertad, mi memoria, mi entendimiento y toda mi voluntad.","San Ignacio, oración “Tomad, Señor”"],
        ["No el mucho saber harta y satisface al ánima, sino el sentir y gustar de las cosas internamente.","San Ignacio, Ejercicios Espirituales, anotación 2"],
        ["Contento, Señor, contento.","San Alberto Hurtado"]
      ],
      anecdotas:[
        ["La lectura en la cama","Herido en Pamplona, Ignacio pidió novelas de caballería para pasar el tiempo. En la casa solo había una vida de Cristo y vidas de santos. Notó que, al soñar con hazañas mundanas, se quedaba vacío, y al soñar con imitar a los santos, quedaba en paz. Ahí empezó el discernimiento. ${MK.g}"],
        ["Una pierna mal curada","Ignacio quedó con un hueso salido en la pierna. Por vanidad, para poder usar botas elegantes, pidió que se lo cortaran, sin anestesia. Rengueó toda la vida. ${MK.g}"],
        ["Mama Antula, descalza","Después de la expulsión de los jesuitas, María Antonia de Paz y Figueroa recorrió descalza miles de kilómetros desde Santiago del Estero hasta Buenos Aires organizando Ejercicios Espirituales para miles de personas. ${MK.g}"],
        ["Hasta el final","Luis Gonzaga murió a los 23 años después de cargar en brazos a un enfermo de peste que encontró en la calle de Roma. ${MK.g}"]
      ],
      preguntas:[
        "¿Qué cosas de tu día te dejan paz profunda y cuáles te dejan vacío? ¿Qué te dice eso?",
        "Ignacio cambió de vida durante una convalecencia. ¿Alguna crisis o “herida” tuya terminó abriéndote a algo nuevo?",
        "¿Qué decisión importante tenés por delante? ¿Cómo la estás discerniendo?",
        "El “magis” es buscar el más. ¿En qué te estás conformando con menos de lo que podrías dar?"
      ],
      dinamica:"Hacer juntos el examen ignaciano en cinco pasos, con música suave: agradecer el día, pedir luz, recorrer el día como una película, pedir perdón por lo que faltó y mirar el mañana con esperanza. Diez minutos en silencio y, al final, cada uno comparte una sola cosa por la que da gracias."
    },
    fuentes:[
      ["MDZ (2026) — Cien años del Colegio San Luis Gonzaga","https://www.mdzol.com/estilo/cien-anos-un-colegio-iconico-las-fotos-y-detalles-un-encuentro-especial-n1498440"],
      ["Mendoza Travel — Excavación en las Ruinas de San Francisco","https://mendoza.travel/en/exitosa-excavacion-arqueologica-en-mendoza"]
    ]
  },

  /* ---------------------------------------------------- CAMILOS */
  camilos: {
    familia:"clerigos",
    nombre:"Camilos",
    latin:"Orden de Clérigos Regulares Ministros de los Enfermos",
    resumen:"San Camilo era un soldado jugador y pendenciero hasta que, enfermo, descubrió cómo eran tratados los pacientes en los hospitales de Roma. Fundó una orden para cuidarlos con el corazón de una madre. Su cruz roja en el pecho se volvió un símbolo de quien sirve a los que sufren.",
    tarjeta:"Servicio a los enfermos con amor de madre. La cruz roja de San Camilo de Lelis.",
    lema:["Más corazón en esas manos","Exhortación atribuida a San Camilo a quienes cuidaban enfermos."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Cruz roja","oklch(0.55 0.2 27)"]],
    datos:[
      ["Siglas","M.I."],
      ["Fundador","San Camilo de Lelis (1550 – 1614)"],
      ["Fundación","1582, en Roma"],
      ["Voto propio","Servir a los enfermos aun con riesgo de la vida"],
      ["Fiesta principal","14 de julio, San Camilo"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Su nombre oficial es <strong>Orden de Clérigos Regulares Ministros de los Enfermos</strong>, abreviado M.I. (del latín <em>Ministri Infirmorum</em>). Son [[clerigos-regulares|clérigos regulares]], como los jesuitas, pero dedicados a una misión muy concreta: el cuidado de los enfermos. ${MK.v}</p>
        <p>La “familia camiliana” incluye congregaciones de religiosas, como las Hijas de San Camilo, institutos seculares y laicos.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Camilo de Lelis</strong> nació en 1550 en Bucchianico, Italia. Muy alto y de carácter fuerte, fue soldado mercenario y jugador compulsivo: perdió todo, hasta la camisa.</p>
        <ul class="dots">
          <li><strong>1575:</strong> trabajando como peón en un convento capuchino, una conversación con un fraile lo transforma. Se convierte el 2 de febrero.</li>
          <li><strong>Hospital de Santiago de los Incurables:</strong> internado por una herida en la pierna que nunca se le curó, ve el maltrato a los enfermos y empieza a cuidarlos. Llega a ser administrador del hospital.</li>
          <li><strong>1582:</strong> reúne a los primeros compañeros para cuidar a los enfermos “como una madre a su único hijo enfermo”.</li>
          <li><strong>1584:</strong> es ordenado sacerdote.</li>
          <li><strong>1586:</strong> el papa Sixto V aprueba la comunidad y les concede la cruz roja en la sotana.</li>
          <li><strong>1591:</strong> Gregorio XIV la eleva a orden religiosa.</li>
          <li><strong>1614:</strong> muere en Roma. Es canonizado en 1746.</li>
        </ul>
        <p class="note">Fechas de conocimiento general; no las verifiqué hoy con una fuente puntual.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1575</span><div class="ev"><b>Conversión</b>El soldado jugador decide cambiar de vida.</div></li>
          <li><span class="y">1582</span><div class="ev"><b>Los primeros compañeros</b>Nace la “Compañía de los Ministros de los Enfermos”.</div></li>
          <li><span class="y">1586</span><div class="ev"><b>La cruz roja</b>Sixto V aprueba la comunidad y autoriza la cruz roja en el hábito.</div></li>
          <li><span class="y">1591</span><div class="ev"><b>Orden religiosa</b>Con un cuarto voto: servir a los enfermos aun en peligro de muerte.</div></li>
          <li><span class="y">1600s</span><div class="ev"><b>Mártires de la caridad</b>En las epidemias de peste mueren muchos camilos contagiados mientras cuidaban enfermos.</div></li>
          <li><span class="y">1886</span><div class="ev"><b>Patrono de los enfermos</b>León XIII declara a San Camilo, junto con San Juan de Dios, patrono de los enfermos y los hospitales.</div></li>
          <li><span class="y">1930</span><div class="ev"><b>Patrono de la enfermería</b>Pío XI lo declara patrono de los enfermeros.</div></li>
        </ol>
        <p class="note">Fechas de conocimiento general. Se suele decir que la cruz de los camilos inspiró a la Cruz Roja Internacional; no encontré evidencia firme de esa relación, así que tomalo como una coincidencia simbólica. ${MK.t}</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] camiliano es <strong>servir a Cristo en los enfermos</strong>, con un amor tan concreto y tierno como el de una madre.</p>
        <div class="cols">
          <div class="box"><h3>Cristo en el enfermo</h3><p>“Estuve enfermo y me visitaron” (Mateo 25,36). Cada enfermo es Cristo.</p></div>
          <div class="box"><h3>Cuerpo y alma</h3><p>Cuidar a la persona entera: la higiene, la comida y el remedio, pero también la soledad, el miedo y la fe.</p></div>
          <div class="box"><h3>El cuarto voto</h3><p>Servir a los enfermos aun con riesgo de la propia vida. Ver [[cuarto-voto|cuarto voto]].</p></div>
          <div class="box"><h3>Formar a otros</h3><p>Camilo quiso mejorar la forma de atender en los hospitales. Hoy los camilos forman a profesionales de la salud y agentes de pastoral.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La misericordia hecha gesto:</strong> la oración se vuelve servicio, y el servicio, oración.</li>
          <li><strong>El Crucificado:</strong> según la tradición, en un momento de crisis Camilo oyó al crucifijo animarlo a seguir porque la obra era de Dios. ${MK.t}</li>
          <li><strong>Humanización de la salud:</strong> que nadie sea tratado como un número.</li>
          <li><strong>La propia fragilidad:</strong> Camilo cuidó enfermos toda la vida con una llaga abierta en la pierna. Sirvió desde su propia herida.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Hospitales, clínicas y hogares</strong> para enfermos y ancianos.</li>
          <li><strong>Capellanías hospitalarias</strong> y pastoral de la salud.</li>
          <li><strong>Formación</strong> en bioética, acompañamiento en el duelo y cuidados paliativos.</li>
          <li><strong>Emergencias:</strong> atención en catástrofes y epidemias.</li>
          <li><strong>Misiones</strong> en países pobres, con enfermos de sida, lepra y tuberculosis.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Sotana negra</strong> con una <strong>cruz roja</strong> de tela en el pecho.</li>
          <li>Hoy muchos camilos usan camisa clerical con la cruz roja como distintivo.</li>
          <li>Las religiosas camilianas también llevan la cruz roja en el hábito.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Camilo de Lelis</b><span class="d">1550 – 1614 · Italia</span><p>Fundador. Patrono de los enfermos, los hospitales y los enfermeros.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Santa Josefina Vannini</b><span class="d">1859 – 1911 · Italia</span><p>Cofundadora de las Hijas de San Camilo. Canonizada en 2019.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>Beato Luis Tezza</b><span class="d">1841 – 1923 · Italia y Perú</span><p>Camilo, cofundador de las Hijas de San Camilo. Murió en Lima. Beatificado en 2001.</p><div class="tags"><span>Sudamérica</span></div></div>
          <div class="saint"><b>Beato Enrique Rebuschini</b><span class="d">1860 – 1938 · Italia</span><p>Camilo que vivió el servicio en lo escondido y cotidiano. Beatificado en 1997.</p><div class="tags"><span>Beato</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general; no las verifiqué una por una hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como religioso</h3><p>Sacerdote o hermano. Muchos hermanos camilos son enfermeros o profesionales de la salud.</p></div>
          <div class="box"><h3>Como religiosa</h3><p>En congregaciones camilianas femeninas, como las Hijas de San Camilo.</p></div>
          <div class="box"><h3>Como laico</h3><p>Grupos de laicos camilianos y voluntariados hospitalarios.</p></div>
          <div class="box"><h3>Como joven</h3><p>Visitar enfermos en un hospital o un geriátrico, con un grupo de la parroquia, es vivir este carisma.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional</strong>, con experiencias de servicio a enfermos.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong></div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]]</strong> y formación.</div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]]</strong>, con el cuarto voto.</div></li>
        </ol>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p>La Orden de los Ministros de los Enfermos (Religiosos Camilos) figura en el registro de institutos de vida consagrada de la Secretaría de Culto de la Nación, lo que confirma su presencia en el país. ${MK.v}</p>
        <p class="note">${MK.p} No encontré información confiable sobre dónde están hoy sus comunidades en Argentina ni sobre presencia camiliana en Mendoza. Es un dato a completar.</p>` }
    ],
    compartir:{
      frases:[
        ["Estuve enfermo y me visitaron.","Mateo 25,36"],
        ["Más corazón en esas manos.","Atribuida a San Camilo de Lelis"],
        ["Servir a los enfermos como una madre amorosa sirve a su único hijo enfermo.","Idea central de San Camilo, según sus primeros compañeros"]
      ],
      anecdotas:[
        ["Perdió hasta la camisa","Camilo era tan jugador que, en Nápoles, se jugó todo lo que tenía, incluida la ropa que llevaba puesta. Tuvo que pedir trabajo de peón para sobrevivir, y así llegó al convento donde se convirtió. ${MK.g}"],
        ["Los enfermos primero","Ya fundador, cuando llegaba un enfermo grave, Camilo se arrodillaba junto a la cama, le pedía la bendición y lo atendía como si fuera Cristo mismo. ${MK.g}"],
        ["La herida que no se cerró","La herida en la pierna que lo llevó al hospital nunca se le curó. Camilo pasó toda su vida cuidando a otros con dolor propio. ${MK.g}"]
      ],
      preguntas:[
        "¿Conocés a alguien enfermo o solo que necesite una visita esta semana?",
        "Camilo cambió de vida después de tocar fondo. ¿Creés que Dios puede usar nuestros peores momentos?",
        "¿Qué significa para vos tratar a alguien con “más corazón en las manos”?",
        "Si te dedicaras a la salud, ¿cómo te gustaría que te recordaran los pacientes?"
      ],
      dinamica:"Organizar una visita breve a un geriátrico o a un hospital, con permiso y acompañados por la pastoral de la salud de la parroquia. Antes, rezar juntos Mateo 25,31-46; después, compartir qué rostro de Cristo encontró cada uno."
    },
    fuentes:[
      ["Vatican News — San Camilo de Lelis, fundador de los Clérigos Regulares Ministros de los Enfermos","https://www.vaticannews.va/pt/santo-do-dia/07/14/s--camilo-de-lelis--sacerdote--fundador-dos-clerigos-regulares-m.print.html"],
      ["Secretaría de Culto — Institutos registrados","https://cancilleria.gob.ar/en/ministry-foreign-affairs-international-trade-and-worship/secretariat-worship/institutes-consecrated?page=8"]
    ]
  },

  /* ---------------------------------------------------- ESCOLAPIOS */
  escolapios: {
    familia:"clerigos",
    nombre:"Escolapios",
    latin:"Ordo Clericorum Regularium Pauperum Matris Dei Scholarum Piarum · Sch.P.",
    resumen:"Orden de [[clerigos-regulares|clérigos regulares]] fundada por San José de Calasanz, el santo que en Roma abrió la primera escuela pública y gratuita de Europa para chicos pobres. Su lema es “Piedad y Letras”: fe y estudio juntos. En la Argentina están en Buenos Aires, Córdoba y otras ciudades.",
    tarjeta:"La primera escuela gratuita para los pobres. “Piedad y Letras”: fe y estudio de la mano.",
    lema:["Piedad y Letras","Lema escolapio: educar en la fe y en el saber."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Nombre","Clérigos Regulares Pobres de la Madre de Dios de las Escuelas Pías"],
      ["Fundador","San José de Calasanz (1557 – 1648)"],
      ["Aprobación","25 de marzo de 1617, Roma"],
      ["En el mundo","1.326 miembros (942 sacerdotes) y 225 casas (fines de 2024)"],
      ["En la Argentina","Buenos Aires, Córdoba y otras ciudades"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Su nombre completo es <strong>Clérigos Regulares Pobres de la Madre de Dios de las Escuelas Pías</strong>. Firman con la sigla <strong>Sch.P.</strong> (de <em>Scholae Piae</em>, “Escuelas Pías”). Se los llama <strong>escolapios</strong> o <strong>calasancios</strong>.</p>
        <p>Son [[clerigos-regulares|clérigos regulares]]: sacerdotes que viven en comunidad con votos, dedicados a una misión concreta, que en su caso es la escuela.</p>
        <p class="note">Nombre y sigla de conocimiento general.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San José de Calasanz</strong> nació en 1557 en Peralta de la Sal, Aragón (España). Fue sacerdote y se fue a Roma buscando un cargo eclesiástico. Allí vio a los chicos pobres del barrio del Trastévere vagando por la calle sin ir a la escuela, y cambió de planes.</p>
        <ul class="dots">
          <li><strong>1597:</strong> abre en Roma, junto a la iglesia de Santa Dorotea, una escuela gratuita para chicos pobres, considerada la primera escuela pública y gratuita de Europa.</li>
          <li><strong>25 de marzo de 1617:</strong> la obra es aprobada como congregación. ${MK.v}</li>
          <li><strong>1648:</strong> muere en Roma a los 90 años, después de ver a su orden casi suprimida.</li>
          <li><strong>1767:</strong> canonizado. En 1948 Pío XII lo declaró patrono de las escuelas cristianas populares.</li>
        </ul>
        <p class="note">La fecha de 1617 está verificada en GCatholic; el resto es de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1597</span><div class="ev"><b>Santa Dorotea</b>Primera escuela gratuita para pobres en Roma.</div></li>
          <li><span class="y">1617</span><div class="ev"><b>Aprobación</b>Nace la congregación. ${MK.v}</div></li>
          <li><span class="y">1621</span><div class="ev"><b>Orden</b>Es elevada a orden religiosa.</div></li>
          <li><span class="y">1646</span><div class="ev"><b>Crisis</b>Por conflictos internos y externos, la orden es reducida a una simple asociación. Calasanz, anciano, lo acepta con paciencia.</div></li>
          <li><span class="y">1669</span><div class="ev"><b>Restauración</b>Vuelve a ser una orden religiosa.</div></li>
          <li><span class="y">2010</span><div class="ev"><b>Argentina</b>Se aprueba el estatuto de la Fraternidad Escolapia en el país. ${MK.v}</div></li>
        </ol>
        <p class="note">Las fechas del siglo XVII, salvo 1617, son de conocimiento general. No sé en qué año llegaron los escolapios a la Argentina.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma es <strong>evangelizar educando</strong> a los chicos y jóvenes, sobre todo a los pobres, uniendo fe y cultura: <em>Piedad y Letras</em>. Calasanz estaba convencido de que si se educa bien a un chico desde pequeño, se cambia su vida y se cambia la sociedad.</p>
        <p>Además de los tres votos, los escolapios hacen un <strong>[[cuarto-voto|cuarto voto]]</strong> de dedicarse especialmente a la educación de los chicos.</p>
        <p class="note">El cuarto voto es de conocimiento general.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Los más pequeños:</strong> ver en cada chico a Jesús.</li>
          <li><strong>La paciencia:</strong> Calasanz atravesó la casi destrucción de su obra sin rebelarse.</li>
          <li><strong>La pobreza:</strong> escuelas gratuitas, sostenidas con limosnas.</li>
          <li><strong>María:</strong> la orden lleva su nombre, “Madre de Dios”.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`
        <p>Colegios, parroquias, hogares y centros educativos para chicos de barrios pobres. Junto a los religiosos trabaja la <strong>Fraternidad Escolapia</strong>, formada por laicos que comparten la misión. ${MK.v}</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Sotana negra, propia de los [[clerigos-regulares|clérigos regulares]]. Hoy muchos usan ropa clerical sencilla.</p><p class="note">Dato de conocimiento general.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San José de Calasanz</b><span class="d">1557 – 1648 · España e Italia</span><p>Fundador y patrono de las escuelas cristianas populares.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Pompilio María Pirrotti</b><span class="d">1710 – 1766 · Italia</span><p>Escolapio, predicador y educador.</p><div class="tags"><span>Escolapio</span></div></div>
          <div class="saint"><b>Santa Paula Montal</b><span class="d">1799 – 1889 · España</span><p>Fundó las Escolapias, la rama femenina inspirada en Calasanz, para educar a las chicas.</p><div class="tags"><span>Escolapias</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general, sin verificar en fuentes.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"v", html:`
        <div class="cols">
          <div class="box"><h3>Como escolapio</h3><p>Sacerdote o religioso dedicado a la escuela.</p></div>
          <div class="box"><h3>Fraternidad Escolapia</h3><p>Laicos que comparten el carisma. En la Argentina tiene grupos en Buenos Aires, Córdoba, Rosario, Quimilí y Río Cuarto. ${MK.v}</p></div>
          <div class="box"><h3>Voluntariado</h3><p>El Hogar Calasanz, en Buenos Aires, necesita apoyo. ${MK.v}</p></div>
          <div class="box"><h3>Escolapias</h3><p>Para mujeres, la congregación fundada por Paula Montal.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Buenos Aires:</strong> iglesia San José de Calasanz, Colegio Calasanz y Hogar Calasanz. ${MK.v}</li>
          <li><strong>Córdoba:</strong> Colegio Santo Tomás. ${MK.v}</li>
          <li><strong>Otras ciudades:</strong> grupos de la Fraternidad en Rosario, Quimilí (Santiago del Estero) y Río Cuarto. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré presencia escolapia en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["Si desde la tierna edad el niño es instruido con diligencia en la piedad y las letras, se puede esperar con fundamento un feliz transcurso de toda su vida.","Idea atribuida a San José de Calasanz"],
        ["Piedad y Letras.","Lema escolapio"],
        ["El que recibe a uno de estos niños en mi nombre, me recibe a mí.","Mateo 18,5"]
      ],
      anecdotas:[
        ["Fue a Roma por un cargo y encontró su vocación","Calasanz viajó a Roma buscando un puesto en la Iglesia. Lo que encontró fueron chicos pobres en la calle, y se quedó con ellos el resto de su vida. ${MK.g}"],
        ["Ver caer su obra","Al final de su vida, con casi 90 años, vio cómo su orden era reducida a casi nada. No se rebeló. Veinte años después de su muerte, la orden fue restaurada. ${MK.g}"]
      ],
      preguntas:[
        "¿Qué significa para vos que la fe y el estudio vayan juntos?",
        "¿Qué chicos de tu ciudad no tienen hoy acceso a una buena educación?",
        "Calasanz cambió de planes cuando vio una necesidad. ¿Estás dispuesto a que Dios cambie tus planes?",
        "¿Cómo se vive la paciencia cuando algo que construiste se cae?"
      ],
      dinamica:"Organizar una jornada de apoyo escolar: el grupo se divide para ayudar a chicos del barrio o de la parroquia con sus tareas. Al final, compartir en una frase qué aprendieron ellos de los chicos."
    },
    fuentes:[
      ["GCatholic — Piarists (Sch.P.)","https://gcatholic.org/orders/079"],
      ["Escolapios21 — Frater Argentina (PDF)","https://www.escolapios21.org/wp-content/uploads/2024/07/Frater-Argentina.pdf"]
    ]
  },

  /* ==================================================== CLÉRIGOS REGULARES */
  teatinos: {
    familia:"clerigos",
    nombre:"Teatinos",
    latin:"Ordo Clericorum Regularium · C.R.",
    resumen:"La primera orden de [[clerigos-regulares|clérigos regulares]] de la historia, fundada en Roma en 1524 por San Cayetano y otros tres sacerdotes para reformar la Iglesia empezando por el clero. San Cayetano es, en la Argentina, el santo del pan y del trabajo. Los teatinos están en el país desde 1946.",
    tarjeta:"San Cayetano y la confianza en la Providencia. En la Argentina desde 1946.",
    lema:["Busquen primero el Reino de Dios","Mateo 6,33, centro de la confianza teatina en la Providencia."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Nombre","Orden de Clérigos Regulares (Teatinos)"],
      ["Fundadores","San Cayetano de Thiene, Gian Pietro Carafa y otros dos"],
      ["Fundación","14 de septiembre de 1524, Roma"],
      ["En la Argentina","Desde 1946: Buenos Aires y Corrientes"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p>Su nombre oficial es <strong>Orden de Clérigos Regulares</strong>. “Teatinos” viene de Chieti, ciudad italiana que en latín se llamaba <em>Theate</em>, donde era obispo uno de los fundadores. ${MK.v}</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p>El <strong>14 de septiembre de 1524</strong>, cuatro hombres hicieron su profesión religiosa en Roma: <strong>San Cayetano de Thiene</strong>, <strong>Gian Pietro Carafa</strong> (luego papa Pablo IV), Bonifacio de' Colli y Pablo Consiglieri. Querían reformar la Iglesia “en la cabeza y en los miembros”. ${MK.v}</p>
        <p>San Cayetano murió en 1547. ${MK.v}</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1524</span><div class="ev"><b>Roma</b>Fundación. ${MK.v}</div></li>
          <li><span class="y">1547</span><div class="ev"><b>San Cayetano</b>Muere en Nápoles. ${MK.v}</div></li>
          <li><span class="y">1583</span><div class="ev"><b>Teatinas</b>Úrsula Benincasa funda la rama femenina en Nápoles. ${MK.v}</div></li>
          <li><span class="y">s. XVIII</span><div class="ev"><b>Mama Antula</b>Difunde la devoción a San Cayetano en el actual territorio argentino. ${MK.v}</div></li>
          <li><span class="y">1946</span><div class="ev"><b>Argentina</b>Llegan los primeros teatinos. ${MK.v}</div></li>
          <li><span class="y">2024</span><div class="ev"><b>500 años</b>La orden cumple cinco siglos.</div></li>
        </ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`
        <p>El papa Francisco lo resumió como <strong>“una fraternidad sacerdotal apostólica”</strong>, muy arraigada en la vida espiritual y en la caridad concreta hacia los necesitados. ${MK.v}</p>
        <p>Su rasgo más famoso es la <strong>confianza total en la Providencia</strong>: no pedían limosna ni tenían rentas, sino que esperaban de Dios lo necesario. ${MK.g}</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>La Providencia</strong>: Dios no abandona.</li><li><strong>La reforma</strong> que empieza por uno mismo.</li><li><strong>La liturgia</strong> digna y el amor a la Eucaristía.</li><li><strong>Las obras de misericordia</strong> como forma de evangelizar.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Parroquias, santuarios de San Cayetano y obras de caridad. Su misión no es <em>ad gentes</em> (en tierras de misión), sino con el testimonio y las obras de misericordia, como San Cayetano. ${MK.v}</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Sotana negra de clérigo, sin hábito monástico propio.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"v", html:`
        <div class="saints">
          <div class="saint"><b>San Cayetano de Thiene</b><span class="d">1480 – 1547 · Italia</span><p>Fundador. Su fiesta, el 7 de agosto, se vive en Buenos Aires como la del “patrono del pan y del trabajo”. ${MK.v}</p><div class="tags"><span>Fundador</span><span>Pan y trabajo</span></div></div>
          <div class="saint"><b>Santa Mama Antula</b><span class="d">1730 – 1799 · Santiago del Estero</span><p>María Antonia de Paz y Figueroa. Difundió la devoción a San Cayetano; sus hijas fundaron el colegio y la capilla San Cayetano de Liniers. ${MK.v}</p><div class="tags"><span>Argentina</span></div></div>
          <div class="saint"><b>Venerable Úrsula Benincasa</b><span class="d">1547 – 1618 · Nápoles</span><p>Fundadora de las teatinas. ${MK.v}</p><div class="tags"><span>Teatinas</span></div></div>
        </div>
        <p class="note">Mama Antula fue canonizada en 2024. El año de nacimiento de San Cayetano y el título de Úrsula Benincasa son de conocimiento general.</p>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<div class="cols"><div class="box"><h3>Como teatino</h3><p>Sacerdote en vida común.</p></div><div class="box"><h3>Como devoto</h3><p>La fiesta de San Cayetano, el 7 de agosto, es una gran ocasión para servir en las filas de peregrinos.</p></div></div>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <p>Los teatinos están en la Argentina desde 1946, en <strong>Buenos Aires</strong> y <strong>Corrientes</strong>. ${MK.v}</p>
        <p class="note">${MK.p} No encontré comunidades teatinas en Mendoza, aunque la devoción a San Cayetano es muy fuerte en toda la Argentina.</p>` }
    ],
    compartir:{
      frases:[["Busquen primero el Reino de Dios y su justicia, y todo lo demás se les dará por añadidura.","Mateo 6,33"],["Actualizar el carisma teatino, para responder a los retos actuales desde nuestra identidad.","Objetivo del capítulo general, citado por Francisco (2022)"]],
      anecdotas:[["Una devoción que llegó antes que la orden","La devoción a San Cayetano en la Argentina tenía unos 150 años cuando llegaron los primeros teatinos. La había difundido Mama Antula. ${MK.v}"]],
      preguntas:["¿Confiás en que Dios te va a dar lo que necesitás?","¿Qué le pedirías hoy a San Cayetano para tu familia o tu barrio?","“La reforma empieza por uno mismo”: ¿qué tendrías que cambiar vos?"],
      dinamica:"Organizar una colecta de alimentos no perecederos o útiles para una familia que esté buscando trabajo, como gesto de San Cayetano."
    },
    fuentes:[
      ["Teatinos — Historia de la orden","https://teatinos.org/en/?p=4796"],
      ["Diario de Cuyo (2020) — La devoción por San Cayetano en Argentina","https://www.diariodecuyo.com.ar/noticias/la-devocion-por-san-cayetano-en-argentina-no-tiene-punto-de-comparacion-257806.html"],
      ["Vaticano — Discurso de Francisco a los teatinos (2022)","https://c.vatican.va/content/francesco/es/speeches/2022/january/documents/20220115-teatini.pdf"]
    ]
  },

  barnabitas: {
    familia:"clerigos",
    nombre:"Barnabitas",
    latin:"Clerici Regulares Sancti Pauli · B. / C.R.S.P.",
    resumen:"Clérigos regulares fundados en Milán en 1530 por San Antonio María Zaccaria, con un amor muy grande por San Pablo. Se los llama barnabitas por la iglesia de San Bernabé de Milán. Tienen una iglesia en Buenos Aires.",
    tarjeta:"San Pablo, la Eucaristía y la reforma del pueblo cristiano. Presentes en Buenos Aires.",
    lema:["Ya no vivo yo, es Cristo quien vive en mí","Gálatas 2,20 — la espiritualidad paulina de la orden."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Nombre","Clérigos Regulares de San Pablo"],
      ["Fundadores","San Antonio María Zaccaria y otros dos"],
      ["Fundación","1530, Milán"],
      ["En el mundo","298 miembros y 65 casas (fines de 2024)"],
      ["En la Argentina","Buenos Aires"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p>Su nombre oficial es <strong>Clérigos Regulares de San Pablo</strong>. Se los conoce como <strong>barnabitas</strong>. ${MK.v}</p><p class="note">Que el apodo venga de la iglesia de San Bernabé de Milán es conocimiento general.</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`<p>Los fundaron en <strong>1530</strong> <strong>San Antonio María Zaccaria</strong>, el venerable Bartolomeo Ferrari y Jacopo Antonio Morigia. ${MK.v}</p><p>Zaccaria era médico antes de ser sacerdote y murió muy joven, en 1539. ${MK.g}</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1530</span><div class="ev"><b>Milán</b>Fundación. ${MK.v}</div></li>
          <li><span class="y">1533</span><div class="ev"><b>Aprobación</b>Clemente VII aprueba la orden.</div></li>
          <li><span class="y">1539</span><div class="ev"><b>Zaccaria</b>Muere a los 36 años.</div></li>
        </ol>
        <p class="note">Fechas de 1533 y 1539: conocimiento general.</p>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`<p>Renovar la vida cristiana del pueblo desde la <strong>Palabra de San Pablo</strong>, la <strong>Eucaristía</strong> y la predicación. Zaccaria impulsó las Cuarenta Horas de adoración.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>San Pablo</strong>: ardor apostólico.</li><li><strong>Cristo crucificado</strong>.</li><li><strong>La Eucaristía</strong> y la adoración.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Parroquias, colegios, predicación y misiones.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Sotana negra de clérigo.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<div class="saints"><div class="saint"><b>San Antonio María Zaccaria</b><span class="d">1502 – 1539 · Italia</span><p>Fundador; médico y sacerdote.</p><div class="tags"><span>Fundador</span></div></div><div class="saint"><b>San Pablo</b><span class="d">s. I</span><p>Patrono e inspiración.</p><div class="tags"><span>Patrono</span></div></div></div>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>Para varones llamados al sacerdocio, a través de su comunidad en Buenos Aires.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`<p><strong>Buenos Aires:</strong> iglesia San Antonio María Zaccaria. ${MK.v}</p><p class="note">${MK.p} No encontré presencia en Mendoza.</p>` }
    ],
    compartir:{
      frases:[["Ya no vivo yo, es Cristo quien vive en mí.","Gálatas 2,20"],["El amor de Cristo nos apremia.","2 Corintios 5,14"]],
      anecdotas:[],
      preguntas:["¿Qué carta de San Pablo leíste alguna vez? ¿Qué te quedó?","¿Qué significaría que Cristo “viva en vos”?"],
      dinamica:"Leer en grupo 1 Corintios 13 (el himno al amor) y que cada uno reemplace la palabra “amor” por su propio nombre. ¿Qué frase le cuesta más decir de sí mismo?"
    },
    fuentes:[["GCatholic — Clerics Regular of Saint Paul (Barnabites)","https://gcatholic.org/orders/059"]]
  },

  somascos: {
    familia:"clerigos",
    nombre:"Somascos",
    latin:"Ordo Clericorum Regularium a Somascha · C.R.S.",
    resumen:"Clérigos regulares fundados en 1534 por San Jerónimo Emiliani, un ex soldado veneciano que dedicó su vida a los huérfanos. Toman su nombre del pueblo de Somasca, en Italia. No tienen casas en la Argentina.",
    tarjeta:"Padres de los huérfanos y de los jóvenes abandonados, desde 1534.",
    lema:["Lo que hicieron con el más pequeño, conmigo lo hicieron","Mateo 25,40."],
    habito:[["Negro (sotana)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Nombre","Clérigos Regulares de Somasca"],
      ["Fundador","San Jerónimo Emiliani"],
      ["Fundación","1534"],
      ["En el mundo","545 miembros y 100 casas (fines de 2021)"],
      ["En la Argentina","No tienen presencia"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`<p><strong>Clérigos Regulares de Somasca</strong>, sigla <strong>C.R.S.</strong> ${MK.v} Somasca es el pueblo italiano donde se estableció la primera comunidad.</p><p class="note">El origen del nombre es conocimiento general.</p>` },
      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`<p><strong>San Jerónimo Emiliani</strong> (1486 – 1537) fue un noble y soldado de Venecia. Prisionero de guerra, se convirtió y dedicó su vida a los huérfanos, los enfermos y los pobres. Fundó la orden en <strong>1534</strong>. ${MK.v} Murió contagiado de peste mientras cuidaba enfermos.</p><p class="note">Los datos biográficos son de conocimiento general.</p>` },
      { id:"historia", titulo:"Historia y origen", estado:"g", html:`<ol class="timeline"><li><span class="y">1534</span><div class="ev"><b>Fundación</b>${MK.v}</div></li><li><span class="y">1537</span><div class="ev"><b>Muerte del fundador</b>Por la peste.</div></li><li><span class="y">1928</span><div class="ev"><b>Patrono</b>Pío XI lo declara patrono universal de los huérfanos y la juventud abandonada.</div></li></ol>` },
      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`<p>Ser <strong>padres de los huérfanos</strong> y de los jóvenes sin familia, con hogares, escuelas y parroquias.</p>` },
      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`<ul class="dots"><li><strong>Cristo crucificado</strong>, en quien Jerónimo encontró la libertad.</li><li><strong>La paternidad</strong> espiritual.</li><li><strong>La pobreza</strong> y la confianza en Dios.</li></ul>` },
      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`<p>Hogares para chicos, escuelas, parroquias y centros juveniles.</p>` },
      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Sotana negra de clérigo.</p>` },
      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`<div class="saints"><div class="saint"><b>San Jerónimo Emiliani</b><span class="d">1486 – 1537 · Venecia</span><p>Fundador. Patrono de los huérfanos.</p><div class="tags"><span>Fundador</span></div></div></div>` },
      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`<p>En sus casas de Italia, Brasil, Filipinas, Estados Unidos o Australia, entre otros países.</p>` },
      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`<p>GCatholic no lista iglesias somascas en la Argentina; sí en Brasil. ${MK.v}</p><p class="note">${MK.p} No sé si hay algún religioso somasco trabajando en el país.</p>` }
    ],
    compartir:{
      frases:[["Lo que hicieron con el más pequeño de mis hermanos, conmigo lo hicieron.","Mateo 25,40"]],
      anecdotas:[["De prisionero a padre","Jerónimo estuvo encadenado como prisionero de guerra. Según la tradición, recuperó la libertad después de encomendarse a la Virgen, y desde entonces dejó las cadenas en un altar mariano. ${MK.t}"]],
      preguntas:["¿Qué chicos crecen hoy sin alguien que los cuide?","¿Qué “cadenas” te gustaría que Dios rompiera en tu vida?"],
      dinamica:"Investigar qué hogares de niños existen en la ciudad y pensar en grupo un gesto concreto de ayuda."
    },
    fuentes:[["GCatholic — Clerics Regular of Somasca","https://gcatholic.org/orders/074"]]
  }

});
