/* Fichas de la familia "mendicante". Cada ficha sigue la estructura descripta en CLAUDE.md. */
Object.assign(FICHAS, {

  carmelitas: {
    familia:"mendicante",
    nombre:"Carmelitas",
    latin:"Orden de los Hermanos de la Bienaventurada Virgen María del Monte Carmelo",
    resumen:"Nacieron como ermitaños en el Monte Carmelo, la montaña del profeta Elías. Ocho siglos después siguen enseñando a la Iglesia a rezar: su gran tema es la amistad con Dios en el silencio del corazón.",
    tarjeta:"Ermitaños del Monte Carmelo, orantes y marianos. Santa Teresa, San Juan de la Cruz, Santa Teresita.",
    lema:["Me consume el celo por el Señor, Dios de los ejércitos.","Lema del escudo carmelita, tomado de 1 Reyes 19,10 (palabras de Elías)."],
    habito:[["Castaño","oklch(0.42 0.06 55)"],["Blanco (capa)","oklch(0.97 0.005 85)"],["Negro (velo)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","O.Carm. y O.C.D."],
      ["Regla","San Alberto de Jerusalén (1206–1214)"],
      ["Ramas","Frailes, monjas y laicos"],
      ["Fiesta principal","16 de julio, Virgen del Carmen"],
      ["Padres espirituales","El profeta Elías y la Virgen María"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Orden de los Hermanos de la Bienaventurada Virgen María del Monte Carmelo</strong>. Hoy “los Carmelitas” son, en realidad, una familia con dos grandes ramas que comparten la misma [[regla|Regla]]:</p>
        <div class="cols">
          <div class="box"><h3>Antigua Observancia</h3><p><strong>O.Carm.</strong> La rama original, que popularmente se llamó “calzados”. Ver [[antigua-observancia|Antigua Observancia]].</p></div>
          <div class="box"><h3>Carmelitas Descalzos</h3><p><strong>O.C.D.</strong> La rama nacida de la reforma de Santa Teresa de Jesús y San Juan de la Cruz en el siglo XVI. Ver [[descalzos|Descalzos]].</p></div>
        </div>
        <p style="margin-top:14px">Alrededor de ellas creció una “familia carmelitana” de congregaciones de vida activa que se inspiran en este [[carisma|carisma]], como las Carmelitas de la Caridad (Vedruna) o las Carmelitas Misioneras Teresianas, presentes en Argentina.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p><strong>No tienen un fundador único</strong>, y eso es parte de su identidad. Los primeros carmelitas fueron un grupo de ermitaños latinos que, hacia fines del siglo XII o comienzos del XIII, se instalaron junto a una fuente en el Monte Carmelo, en Tierra Santa. Se consideran hijos espirituales del <strong>profeta Elías</strong> y de la <strong>Virgen María</strong>.</p>
        <ul class="dots">
          <li><strong>San Alberto, patriarca de Jerusalén</strong>, les escribió una “fórmula de vida” entre 1206 y 1214. Se la suele fechar en 1209. Un ermitaño llamado solo “hermano B.” la pidió; la tradición lo identifica como San Brocardo. ${MK.t}</li>
          <li><strong>30 de enero de 1226:</strong> el papa Honorio III la reconoció con la bula <em>Ut vivendi normam</em>. <strong>En 2026 se cumplen 800 años</strong> de ese primer reconocimiento. ${MK.v}</li>
          <li><strong>1 de octubre de 1247:</strong> el papa Inocencio IV la aprobó definitivamente como Regla, adaptada a la vida de [[fraile|frailes]] en las ciudades. ${MK.v}</li>
          <li><strong>Rama descalza:</strong> Santa Teresa de Jesús (desde 1562) y San Juan de la Cruz (desde 1568) son reconocidos como madre y padre de los Carmelitas Descalzos. ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <p>El Monte Carmelo está en el actual Israel, frente al Mediterráneo. Allí, según el Primer Libro de los Reyes (capítulo 18), Elías enfrentó a los profetas de Baal y defendió la fe en el único Dios. Siglos después, los ermitaños eligieron ese lugar para vivir en oración, imitando a Elías.</p>
        <ol class="timeline">
          <li><span class="y">≈1200</span><div class="ev"><b>Ermitaños en el Monte Carmelo</b>Viven en celdas separadas, junto a la “fuente de Elías”, con una pequeña capilla dedicada a María.</div></li>
          <li><span class="y">1209</span><div class="ev"><b>La fórmula de vida</b>San Alberto de Jerusalén les escribe la Regla (fecha tradicional; el rango seguro es 1206–1214).</div></li>
          <li><span class="y">1226</span><div class="ev"><b>Primer reconocimiento papal</b>Honorio III, bula <em>Ut vivendi normam</em>.</div></li>
          <li><span class="y">1247</span><div class="ev"><b>De ermitaños a frailes</b>El avance musulmán los obliga a emigrar a Europa. Inocencio IV adapta la Regla a la vida [[mendicante|mendicante]] en las ciudades.</div></li>
          <li><span class="y">1291</span><div class="ev"><b>Fin de la presencia en Tierra Santa</b>Con la caída de Acre se pierden los últimos conventos de Palestina.</div></li>
          <li><span class="y">1452</span><div class="ev"><b>Monjas y laicos</b>Se formaliza la rama de monjas carmelitas y la de laicos, impulsadas por el beato Juan Soreth.</div></li>
          <li><span class="y">1562</span><div class="ev"><b>La reforma de Teresa</b>El 24 de agosto Santa Teresa abre el monasterio de San José de Ávila, con vida más pobre, más silenciosa y comunidades pequeñas.</div></li>
          <li><span class="y">1568</span><div class="ev"><b>Los primeros frailes descalzos</b>En noviembre, en Duruelo, San Juan de la Cruz y Antonio de Jesús inician la reforma masculina.</div></li>
          <li><span class="y">1577</span><div class="ev"><b>Prisión de Juan de la Cruz</b>Frailes opuestos a la reforma lo encierran en Toledo. En esa celda compone gran parte del “Cántico espiritual”. Escapa en 1578.</div></li>
          <li><span class="y">1593</span><div class="ev"><b>Dos órdenes</b>Los Descalzos se convierten en una orden independiente, con su propio superior general.</div></li>
          <li><span class="y">1628</span><div class="ev"><b>Llegan a lo que hoy es Argentina</b>Se funda el monasterio de San José de las Carmelitas Descalzas en Córdoba.</div></li>
          <li><span class="y">1899</span><div class="ev"><b>Los frailes descalzos en Argentina</b>El 10 de febrero desembarcan en Buenos Aires tres frailes enviados desde Castilla.</div></li>
          <li><span class="y">2026</span><div class="ev"><b>800 años</b>La familia carmelitana celebra el aniversario de <em>Ut vivendi normam</em>.</div></li>
        </ol>
        <p class="note">Fechas de 1226, 1247, 1562, 1568, 1628, 1899 y 2026 verificadas en fuentes de la Orden y de prensa. Las de 1291, 1452, 1577 y 1593 son de conocimiento general en la historia de la Orden; no las verifiqué hoy con una fuente puntual.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>La Regla resume todo en una frase: vivir <strong>[[obsequio|“en obsequio de Jesucristo”]]</strong> y servirle con corazón puro y buena conciencia. De ahí nacen tres rasgos que todos los carmelitas reconocen como propios:</p>
        <div class="cols">
          <div class="box"><h3>Oración</h3><p>El centro de todo. La Regla pide permanecer en la celda “meditando día y noche la ley del Señor y velando en oración”. Es una orden [[contemplativo|contemplativa]] en su raíz, aun cuando sus frailes hagan apostolado.</p></div>
          <div class="box"><h3>Fraternidad</h3><p>La oración no aísla: se vive en comunidad, compartiendo bienes, mesa y Eucaristía diaria.</p></div>
          <div class="box"><h3>Elías: el profeta</h3><p>Vivir en presencia de Dios (“Vive el Señor, en cuya presencia estoy”, 1 Re 17,1) y arder de celo por Él. Elías también enseña a buscar a Dios en el silencio: no estaba en el huracán sino en una brisa suave (1 Re 19,12).</p></div>
          <div class="box"><h3>María: la hermana y madre</h3><p>Los carmelitas se llaman “hermanos de la Virgen María”. Ella es el modelo de quien escucha la Palabra y la guarda en el corazón.</p></div>
        </div>
        <p style="margin-top:14px">En la rama teresiana el acento está en la oración como <strong>amistad con Dios</strong>: Santa Teresa la definió como “tratar de amistad, estando muchas veces tratando a solas con quien sabemos nos ama” (<em>Libro de la Vida</em> 8,5).</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La [[espiritualidad|espiritualidad]] carmelitana es un camino hacia la unión con Dios por el amor. Cada uno de sus grandes santos le aportó una “puerta de entrada”:</p>
        <ul class="dots">
          <li><strong>Santa Teresa de Jesús:</strong> la oración como trato de amigos; el alma como un castillo con siete [[moradas|moradas]] donde Dios habita en el centro; “sólo Dios basta”.</li>
          <li><strong>San Juan de la Cruz:</strong> el camino de la “nada” para llegar al “todo”; la [[noche-oscura|noche oscura]] como purificación que lleva al amor; la poesía como lenguaje de lo que no se puede explicar.</li>
          <li><strong>Santa Teresita del Niño Jesús:</strong> el [[caminito|caminito]] de la confianza y del amor en las cosas pequeñas. Es la puerta más cercana para empezar.</li>
          <li><strong>Santa Isabel de la Trinidad:</strong> Dios vive dentro de nosotros; la vida como “alabanza de su gloria”.</li>
          <li><strong>Santa Teresa Benedicta de la Cruz (Edith Stein):</strong> la búsqueda de la verdad lleva a Cristo, y la cruz abrazada con amor es fecunda.</li>
        </ul>
        <p style="margin-top:14px">Elementos concretos de la vida diaria: dos horas de oración mental al día en los monasterios teresianos, la [[liturgia-horas|Liturgia de las Horas]], silencio, soledad, lectura de la Palabra, devoción mariana y el uso del [[escapulario|escapulario]].</p>
        <p class="note">Lo de las dos horas diarias de oración mental es una práctica conocida de la tradición teresiana; puede variar entre comunidades y no lo verifiqué con las constituciones actuales.</p>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <p>La misión del Carmelo es, ante todo, <strong>orar por la Iglesia y por el mundo</strong>, y enseñar a otros a orar. Cada rama lo vive de manera distinta:</p>
        <ul class="dots">
          <li><strong>Monjas:</strong> vida [[contemplativo|contemplativa]] en [[clausura|clausura]], intercediendo por todos. Se sostienen con su trabajo: hostias, ropa litúrgica, dulces, rosarios. Santa Teresita lo explicó así: en el corazón de la Iglesia, ser el amor.</li>
          <li><strong>Frailes:</strong> parroquias, santuarios, casas de retiro, dirección espiritual, predicación, enseñanza universitaria de espiritualidad y misiones.</li>
          <li><strong>Laicos:</strong> llevan la oración a la familia, al trabajo y a la parroquia. Dan charlas y grupos de oración y de lectura de los santos del Carmelo.</li>
          <li><strong>Congregaciones carmelitanas de vida activa:</strong> colegios, hospitales y obras sociales con espíritu orante.</li>
        </ul>
        <p style="margin-top:14px">Un dato llamativo: Santa Teresita, que nunca salió de su monasterio, es <strong>patrona universal de las misiones</strong> desde 1927. La oración es misión.</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p>El [[habito|hábito]] carmelita es de color <strong>castaño</strong> (marrón), con tres piezas que lo distinguen:</p>
        <ul class="dots">
          <li><strong>Túnica castaña</strong> con cinturón de cuero.</li>
          <li><strong>[[escapulario|Escapulario]] castaño</strong>, la pieza más característica: dos franjas de tela sobre pecho y espalda.</li>
          <li><strong>Capa blanca</strong> para las celebraciones. Por ella en la Inglaterra medieval los llamaban “frailes blancos”.</li>
          <li><strong>Las monjas</strong> usan además toca blanca y velo negro las profesas (blanco las novicias).</li>
          <li><strong>Los descalzos</strong> usan sandalias en vez de zapatos, de ahí su nombre.</li>
        </ul>
        <div class="box" style="margin-top:16px">
          <h3>El escapulario de la Virgen del Carmen</h3>
          <p>Según una tradición muy difundida, la Virgen se le apareció a San Simón Stock, superior de la Orden, en 1251, y le entregó el escapulario como signo de su protección. ${MK.t} Los historiadores discuten la fecha y los detalles porque los relatos escritos son posteriores, pero la Iglesia reconoce el escapulario como un sacramental: un signo de pertenencia a María y de compromiso de vida cristiana, no un amuleto. Cualquier laico puede recibirlo de manos de un sacerdote.</p>
        </div>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>El Carmelo tiene tres [[doctor|Doctores de la Iglesia]] y una enorme lista de santos. Estos son algunos de los más importantes:</p>
        <div class="saints">
          <div class="saint"><b>Santa Teresa de Jesús</b><span class="d">1515 – 1582 · España</span><p>Mística, escritora y reformadora. Fundó 17 monasterios de monjas. Escribió <em>Libro de la Vida</em>, <em>Camino de perfección</em> y <em>Las Moradas</em>.</p><div class="tags"><span>Doctora (1970)</span><span>Fundadora OCD</span></div></div>
          <div class="saint"><b>San Juan de la Cruz</b><span class="d">1542 – 1591 · España</span><p>Poeta y místico, cofundador de los frailes descalzos. <em>Cántico espiritual</em>, <em>Noche oscura</em>, <em>Llama de amor viva</em>.</p><div class="tags"><span>Doctor (1926)</span></div></div>
          <div class="saint"><b>Santa Teresa del Niño Jesús</b><span class="d">1873 – 1897 · Francia</span><p>Murió a los 24 años en el Carmelo de Lisieux. Su autobiografía, <em>Historia de un alma</em>, recorrió el mundo.</p><div class="tags"><span>Doctora (1997)</span><span>Patrona de las misiones</span></div></div>
          <div class="saint"><b>Santa Teresa de los Andes</b><span class="d">1900 – 1920 · Chile</span><p>Juana Fernández Solar. Primera santa chilena, carmelita descalza en Los Andes, del otro lado de la cordillera mendocina. Canonizada en 1993.</p><div class="tags"><span>Joven</span><span>Sudamericana</span></div></div>
          <div class="saint"><b>Santa Teresa Benedicta de la Cruz</b><span class="d">1891 – 1942 · Alemania</span><p>Edith Stein: filósofa judía, convertida, carmelita. Murió en Auschwitz. Canonizada en 1998.</p><div class="tags"><span>Mártir</span><span>Copatrona de Europa</span></div></div>
          <div class="saint"><b>Santa Isabel de la Trinidad</b><span class="d">1880 – 1906 · Francia</span><p>Carmelita de Dijon, enamorada de la presencia de la Trinidad en el alma. Canonizada en 2016.</p><div class="tags"><span>Mística</span></div></div>
          <div class="saint"><b>San Tito Brandsma</b><span class="d">1881 – 1942 · Países Bajos</span><p>Fraile O.Carm., periodista y profesor. Se opuso a la propaganda nazi y murió en Dachau. Canonizado en 2022.</p><div class="tags"><span>Mártir</span><span>Patrono de periodistas</span></div></div>
          <div class="saint"><b>Mártires de Compiègne</b><span class="d">† 1794 · Francia</span><p>Dieciséis carmelitas guillotinadas en la Revolución Francesa, cantando camino al cadalso. Canonizadas en 2024.</p><div class="tags"><span>Mártires</span></div></div>
          <div class="saint"><b>Santa María Magdalena de Pazzi</b><span class="d">1566 – 1607 · Italia</span><p>Mística carmelita de Florencia, de la rama de la Antigua Observancia.</p><div class="tags"><span>O.Carm.</span></div></div>
          <div class="saint"><b>Santa María de Jesús Crucificado</b><span class="d">1846 – 1878 · Galilea</span><p>Mariam Baouardy, “la pequeña árabe”, carmelita descalza nacida en Tierra Santa. Canonizada en 2015.</p><div class="tags"><span>Tierra Santa</span></div></div>
          <div class="saint"><b>San Rafael Kalinowski</b><span class="d">1835 – 1907 · Polonia</span><p>Ingeniero y militar, preso en Siberia, luego carmelita descalzo y gran confesor. Canonizado en 1991.</p><div class="tags"><span>Converso</span></div></div>
          <div class="saint"><b>San Simón Stock</b><span class="d">siglo XIII · Inglaterra</span><p>Superior general de la Orden en el período de su llegada a Europa. Ligado a la tradición del escapulario.</p><div class="tags"><span>O.Carm.</span></div></div>
        </div>
        <p class="note">Fechas de vida y de canonización de conocimiento general; no las verifiqué hoy una por una. Si querés usarlas en una charla, avisame y las chequeo.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <p>Hay más de una forma de “ser carmelita”. Depende del llamado de cada uno:</p>
        <div class="cols">
          <div class="box"><h3>Como monja</h3><p>Para mujeres que sienten el llamado a la vida [[contemplativo|contemplativa]] en [[clausura|clausura]]. Se empieza conociendo un monasterio, en visitas y diálogo con la priora.</p></div>
          <div class="box"><h3>Como fraile</h3><p>Para varones, como sacerdotes o como hermanos no sacerdotes. Se empieza contactando a la comunidad o al promotor vocacional de la [[provincia|provincia]].</p></div>
          <div class="box"><h3>Como laico</h3><p>Casados o solteros pueden integrarse a la [[ocds|Orden Seglar de Carmelitas Descalzos]] o a los Laicos Carmelitas de la Antigua Observancia. Hay varios años de formación y luego una promesa.</p></div>
          <div class="box"><h3>Con el escapulario</h3><p>Cualquier bautizado puede recibir el [[escapulario|escapulario]] y unirse espiritualmente a la familia carmelitana, rezando y viviendo su espíritu.</p></div>
        </div>
        <h3 style="font-size:26px;margin-top:24px">El camino habitual hacia la vida religiosa</h3>
        <ol class="steps">
          <li><div><strong>Discernimiento y contacto.</strong> Acompañamiento espiritual, visitas, convivencias o retiros vocacionales.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong> Se vive con la comunidad un tiempo (en general meses) para conocerse mutuamente.</div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Se recibe el hábito. Por derecho dura al menos doce meses.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]].</strong> Primera [[profesion|profesión]] por al menos tres años.</div></li>
          <li><div><strong>[[votos-solemnes|Votos solemnes]].</strong> El compromiso para toda la vida.</div></li>
        </ol>
        <p class="note">Los plazos mínimos del noviciado y de los votos temporales vienen del Código de Derecho Canónico. Las duraciones concretas, las edades de ingreso y los requisitos los fija cada comunidad; hay que consultarlos directamente.</p>
        <p style="margin-top:14px"><strong>Un primer paso sencillo para un joven:</strong> leer <em>Historia de un alma</em> de Santa Teresita, ir a misa a un Carmelo y conversar con un sacerdote o director espiritual sobre lo que despierta.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · Luján de Cuyo</span>
          <h3>Carmelo del Espíritu Santo y María Madre de la Iglesia</h3>
          <p style="margin-top:8px">Monasterio de monjas Carmelitas Descalzas en Mayor Drummond. Están en Mendoza desde <strong>mayo de 1981</strong>. Según una nota de 2021, eran 15 hermanas y vendían en el monasterio alfajores, dulces, rosarios, escapularios y ropa litúrgica hecha por ellas. ${MK.v}</p>
          <p class="addr">Terrada 4548, Mayor Drummond, Luján de Cuyo</p>
          <p class="note">Datos de 2021 (diario Los Andes). La cantidad de hermanas y los horarios pueden haber cambiado; conviene confirmarlos con el monasterio.</p>
        </div>
        <div class="place">
          <span class="eyebrow">Mendoza · Historia</span>
          <h3>La Virgen del Carmen de Cuyo</h3>
          <p style="margin-top:8px">El <strong>5 de enero de 1817</strong>, antes del Cruce de los Andes, San Martín proclamó a la Virgen del Carmen de Cuyo patrona y generala del Ejército de los Andes y le entregó su bastón de mando. La imagen se venera en la Basílica de San Francisco de Mendoza. Desde la Ley provincial 8557, el 5 de enero es el Día de la Bandera de Mendoza. ${MK.v}</p>
          <p class="note">Es una devoción carmelitana muy mendocina, pero no una comunidad de la Orden. En Uspallata también hay una parroquia dedicada a Nuestra Señora del Carmen de Cuyo.</p>
        </div>
        <h3 style="font-size:26px;margin-top:24px">En Argentina</h3>
        <ul class="dots">
          <li><strong>Monjas Carmelitas Descalzas:</strong> su presencia empieza en Córdoba en 1628. Hay monasterios, entre otros lugares, en Córdoba, Alta Gracia, Buenos Aires, Salta, La Plata, Nogoyá, Santa Rosa (La Pampa) y Neuquén. En 2022, según el sitio de los frailes citado por La Nación, eran 33 casas en el país. ${MK.v}</li>
          <li><strong>Frailes Carmelitas Descalzos:</strong> llegaron a Buenos Aires el 10 de febrero de 1899. ${MK.v}</li>
          <li><strong>Carmelitas de la Antigua Observancia (O.Carm.):</strong> presentes desde 1920. Su comunidad está en la zona de Lomas de Zamora (Parroquia Nuestra Señora del Carmen). ${MK.v}</li>
          <li><strong>Congregaciones de la familia carmelitana:</strong> por ejemplo, las Hermanas Carmelitas de la Caridad Vedruna y las Carmelitas Misioneras Teresianas. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré información confiable sobre comunidades de frailes carmelitas ni grupos de la Orden Seglar (OCDS) en Mendoza. Puede que existan y no estén publicados en la web: preguntar en el Carmelo de Luján de Cuyo sería la forma más directa de saberlo.</p>` }
    ],
    compartir:{
      frases:[
        ["Nada te turbe, nada te espante, todo se pasa, Dios no se muda. La paciencia todo lo alcanza. Quien a Dios tiene nada le falta. Sólo Dios basta.","Santa Teresa de Jesús, hallado en su breviario"],
        ["A la tarde te examinarán en el amor.","San Juan de la Cruz, Dichos de luz y amor"],
        ["En el corazón de la Iglesia, mi Madre, yo seré el amor.","Santa Teresa del Niño Jesús, Historia de un alma (Manuscrito B)"],
        ["No os pido más de que le miréis.","Santa Teresa de Jesús, Camino de perfección 26,3"]
      ],
      anecdotas:[
        ["Teresa quería ser mártir a los siete años","Cuenta ella misma en el <em>Libro de la Vida</em> que, de chica, leía vidas de santos con su hermano Rodrigo. Se entusiasmaron tanto que se escaparon de casa rumbo a “tierra de moros” para morir mártires y ganar el cielo enseguida. Un tío los encontró en el camino y los devolvió a casa. Esa pasión, ya madura, la convirtió en reformadora."],
        ["La noche que no existió","Santa Teresa murió la noche del 4 de octubre de 1582. Justo esa noche entraba en vigor el calendario gregoriano, y el día siguiente pasó a ser el 15 de octubre. Por eso su fiesta se celebra el 15."],
        ["Teresita le habló al Papa","A los 14 años, en una audiencia en Roma, se arrodilló ante León XIII y le pidió permiso para entrar al Carmelo a los 15, aunque le habían dicho que no hablara. El Papa le respondió que entraría si era la voluntad de Dios. Entró meses después."],
        ["Una fuga con sábanas","San Juan de la Cruz pasó unos nueve meses preso en una celda diminuta en Toledo. En agosto de 1578 escapó de noche, descolgándose por una ventana con tiras de mantas. Llevaba consigo poemas que hoy son cumbre de la lengua española."]
      ],
      preguntas:[
        "Santa Teresa decía que rezar es “tratar de amistad” con Dios. ¿Cómo cambiaría tu oración si la pensaras como una charla con un amigo que te quiere?",
        "Elías no encontró a Dios en el huracán ni en el terremoto, sino en una brisa suave. ¿Dónde hay un rato de silencio en tu día?",
        "Teresita buscó la santidad en lo pequeño. ¿Qué cosa chica de esta semana podés hacer con mucho amor?",
        "Edith Stein buscó la verdad con la razón y la encontró en Cristo. ¿Qué preguntas tuyas sobre la fe te gustaría animarte a investigar?"
      ],
      dinamica:"Diez minutos “mirándolo”: en silencio, frente al Santísimo o a una imagen de Jesús, sin decir nada; solo dejarse mirar. Después, compartir en una palabra cómo fue la experiencia. Está inspirada en el consejo de Santa Teresa en <em>Camino de perfección</em>."
    },
    fuentes:[
      ["Orden del Carmen (O.Carm.) — Carta por los 800 años de Ut vivendi normam","https://ocarm.org/es/general-council/2616-es-800-anos-carta-cinco-momentos-de-oracion-y-reflexion"],
      ["Orden del Carmen (O.Carm.) — La Regla de San Alberto","https://ocarm.org/en/our-way-of-life/carmelite-rule-of-st-albert"],
      ["Carmelitas Descalzos — 125 años de la llegada a Argentina","https://www.carmelitaniscalzi.com/en/?p=320514"],
      ["O.Carm. — Presencia en Argentina","https://www.ocarm.org/es/item/5375-argentina-provincia-acv"],
      ["Los Andes (2021) — Carmelitas descalzas de Mendoza","https://www.losandes.com.ar/sociedad/carmelitas-descalzas-de-mendoza-quienes-son-y-como-viven-las-15-monjas-que-solo-salen-para-votar"],
      ["Gobierno de Mendoza — Día de la Bandera Provincial y Virgen del Carmen de Cuyo","https://www.mendoza.gov.ar/prensa/se-conmemoro-el-dia-de-la-bandera-provincial/"],
      ["La Nación (2022) — Monasterios carmelitas en Argentina","https://www.lanacion.com.ar/sociedad/como-es-la-vida-de-las-monjas-de-clausura-saltenas-que-denunciaron-al-arzobispo-por-violencia-de-nid02052022/"],
      ["ACI Prensa — La Orden Carmelita","https://www.aciprensa.com/recursos/la-orden-carmelita-1051/"]
    ]
  },

  /* ---------------------------------------------------- FRANCISCANOS */
  franciscanos: {
    familia:"mendicante",
    nombre:"Franciscanos",
    latin:"Familia Franciscana · Orden de Frailes Menores, Clarisas y Orden Franciscana Seglar",
    resumen:"Un joven rico de Asís lo dejó todo para seguir a Jesús pobre y crucificado, y llamó hermanos a todos: a los leprosos, al sol, al lobo y a la muerte. Ocho siglos después, su familia es una de las más grandes de la Iglesia. En 2026 se cumplen 800 años de su muerte.",
    tarjeta:"Pobreza alegre, fraternidad y paz. San Francisco, Santa Clara, San Antonio y el Padre Pío.",
    lema:["Paz y Bien","Saludo franciscano tradicional. Francisco cuenta en su Testamento que el Señor le reveló que saludara deseando la paz."],
    habito:[["Marrón","oklch(0.42 0.06 55)"],["Gris (antiguo)","oklch(0.55 0.01 260)"],["Blanco (cordón)","oklch(0.95 0.01 85)"]],
    datos:[
      ["Siglas","O.F.M. · O.F.M. Conv. · O.F.M. Cap. · O.S.C. · O.F.S."],
      ["Fundador","San Francisco de Asís (1181/82 – 1226)"],
      ["Regla","Regla bulada, aprobada en 1223"],
      ["Ramas","Frailes, clarisas, congregaciones y laicos"],
      ["Fiesta principal","4 de octubre, San Francisco de Asís"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Más que una orden, es una <strong>familia</strong>. Francisco llamó a sus seguidores <strong>“hermanos menores”</strong>: hermanos porque son iguales entre sí, y menores porque eligen el último lugar.</p>
        <div class="cols">
          <div class="box"><h3>Primera Orden: los frailes</h3><p>Hoy son tres ramas: <strong>Frailes Menores</strong> (O.F.M.), <strong>Frailes Menores Conventuales</strong> (O.F.M. Conv.) y <strong>Frailes Menores [[capuchinos|Capuchinos]]</strong> (O.F.M. Cap.).</p></div>
          <div class="box"><h3>Segunda Orden: las clarisas</h3><p>Las monjas fundadas por Santa Clara, de vida [[contemplativo|contemplativa]] en [[clausura|clausura]] (O.S.C.). Incluye a las [[clarisas|Clarisas Capuchinas]].</p></div>
          <div class="box"><h3>Tercera Orden</h3><p>La [[ofs|Orden Franciscana Seglar]] (laicos) y la Tercera Orden Regular, de la que nacieron cientos de congregaciones de hermanas y hermanos franciscanos.</p></div>
          <div class="box"><h3>Para jóvenes</h3><p>La [[jufra|Juventud Franciscana]] (JUFRA) reúne a jóvenes que quieren vivir el Evangelio al estilo de Francisco.</p></div>
        </div>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Francisco de Asís</strong> nació en Asís, Italia, en 1181 o 1182, hijo de Pedro Bernardone, un rico comerciante de telas. De joven soñaba con ser caballero y era el alma de las fiestas. Una enfermedad, una prisión de guerra y el encuentro con un leproso lo cambiaron por completo.</p>
        <ul class="dots">
          <li><strong>1209:</strong> con sus primeros compañeros viaja a Roma y el papa Inocencio III aprueba de palabra su forma de vida.</li>
          <li><strong>1212:</strong> <strong>Santa Clara</strong>, una joven noble de Asís, deja su casa de noche para seguir a Francisco. Así nace la Segunda Orden.</li>
          <li><strong>1223:</strong> el papa Honorio III aprueba la Regla definitiva con una bula. Por eso se la llama “Regla bulada”.</li>
          <li><strong>1226:</strong> Francisco muere en la noche del 3 de octubre, en la Porciúncula, junto a Asís. <strong>En 2026 se cumplen 800 años.</strong></li>
        </ul>
        <p class="note">Fechas de conocimiento general en las biografías de San Francisco; no las verifiqué hoy con una fuente puntual.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1205</span><div class="ev"><b>“Reparar mi casa”</b>Rezando ante el crucifijo de San Damián, Francisco escucha: “Francisco, ve y repara mi casa”. Primero arregla iglesias con sus manos; después entiende que se trata de la Iglesia entera.</div></li>
          <li><span class="y">1206</span><div class="ev"><b>Desnudo ante el obispo</b>Ante el juicio de su padre, devuelve todo, hasta la ropa, y dice que desde ahora su único padre es el del cielo.</div></li>
          <li><span class="y">1209</span><div class="ev"><b>Aprobación oral</b>Inocencio III aprueba la primera forma de vida de los hermanos.</div></li>
          <li><span class="y">1212</span><div class="ev"><b>Santa Clara</b>Clara se consagra en la Porciúncula y luego se establece en San Damián.</div></li>
          <li><span class="y">1219</span><div class="ev"><b>Ante el sultán</b>En plena Cruzada, Francisco cruza las líneas y habla de Cristo con el sultán al-Malik al-Kamil en Egipto.</div></li>
          <li><span class="y">1223</span><div class="ev"><b>Regla y pesebre</b>Se aprueba la Regla definitiva. En Navidad, en Greccio, Francisco arma el primer pesebre viviente.</div></li>
          <li><span class="y">1224</span><div class="ev"><b>Los estigmas</b>En el monte Alverna recibe en su cuerpo las llagas de Cristo.</div></li>
          <li><span class="y">1225</span><div class="ev"><b>El Cántico de las criaturas</b>Enfermo y casi ciego, compone el canto del “hermano sol” y la “hermana luna”.</div></li>
          <li><span class="y">1226</span><div class="ev"><b>La hermana muerte</b>Muere el 3 de octubre. Es canonizado en 1228.</div></li>
          <li><span class="y">1517</span><div class="ev"><b>Primera separación</b>Los frailes se dividen en Observantes y Conventuales.</div></li>
          <li><span class="y">1528</span><div class="ev"><b>Los Capuchinos</b>Nace una reforma que busca volver a la pobreza y la oración de los orígenes.</div></li>
          <li><span class="y">1897</span><div class="ev"><b>Unión</b>León XIII une a los grupos observantes en la Orden de Frailes Menores tal como hoy la conocemos.</div></li>
          <li><span class="y">2015</span><div class="ev"><b>Laudato si’</b>El papa Francisco, que eligió su nombre por el santo de Asís, titula su encíclica sobre el cuidado de la casa común con las palabras del Cántico de las criaturas.</div></li>
        </ol>
        <p class="note">Fechas de conocimiento general en la historia franciscana; no las verifiqué hoy una por una.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>La Regla empieza diciendo que la vida de los hermanos es <strong>observar el santo Evangelio de nuestro Señor Jesucristo</strong>, viviendo en obediencia, sin nada propio y en castidad. Ese es el [[carisma|carisma]]: tomar el Evangelio al pie de la letra.</p>
        <div class="cols">
          <div class="box"><h3>Pobreza</h3><p>“La dama Pobreza”: no tener nada propio para ser libre y confiar en Dios. No es tristeza: Francisco era la persona más alegre de Asís.</p></div>
          <div class="box"><h3>Fraternidad</h3><p>Todos son hermanos: los frailes entre sí, los pobres, los enemigos y toda la creación.</p></div>
          <div class="box"><h3>Minoridad</h3><p>Ser “menores”: elegir el último lugar, servir, no dominar.</p></div>
          <div class="box"><h3>Paz</h3><p>Francisco fue un hombre de paz y reconciliación, incluso en medio de guerras y cruzadas.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La [[espiritualidad|espiritualidad]] franciscana está centrada en <strong>Cristo pobre y crucificado</strong> y en la <strong>humanidad de Dios</strong>, que se hizo pequeño.</p>
        <ul class="dots">
          <li><strong>El pesebre, la cruz y la Eucaristía:</strong> los tres lugares donde Dios se hace más humilde. Por eso Francisco los amaba tanto.</li>
          <li><strong>La creación como hermana:</strong> todo lo creado habla de Dios y es motivo de alabanza. San Francisco es patrono de la ecología desde 1979.</li>
          <li><strong>La alegría:</strong> la “perfecta alegría” no depende del éxito, sino de unirse a Cristo aun en el rechazo.</li>
          <li><strong>La predicación sencilla:</strong> hablar de Dios con palabras simples y, sobre todo, con la vida.</li>
          <li><strong>El [[tau|Tau]]:</strong> la letra griega en forma de cruz que Francisco usaba para firmar y bendecir.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <p>Los franciscanos están donde está la gente, sobre todo los más pobres:</p>
        <ul class="dots">
          <li><strong>Parroquias, santuarios y conventos</strong> abiertos al pueblo.</li>
          <li><strong>Misiones:</strong> los franciscanos fueron de los primeros evangelizadores de América, también en el actual territorio argentino.</li>
          <li><strong>Los pobres y excluidos:</strong> comedores, hogares, acompañamiento de enfermos y presos.</li>
          <li><strong>Custodia de Tierra Santa:</strong> desde el siglo XIV cuidan los santuarios de los lugares de Jesús.</li>
          <li><strong>Justicia, paz e integridad de la creación:</strong> una línea de trabajo propia de la familia franciscana.</li>
          <li><strong>Clarisas:</strong> oración y vida escondida, sosteniendo a la Iglesia desde la clausura.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <p>Francisco eligió una túnica en forma de cruz, del color de la tela más barata de su tiempo, atada con una cuerda.</p>
        <ul class="dots">
          <li><strong>Túnica marrón</strong> con capucha en la mayoría de los frailes menores. Los conventuales usan, según el lugar, negro o gris.</li>
          <li><strong>[[cordon|Cordón]] blanco</strong> con tres nudos: pobreza, castidad y obediencia.</li>
          <li><strong>Sandalias</strong>, signo de sencillez.</li>
          <li><strong>Capuchinos:</strong> capucha larga y puntiaguda unida al hábito (de ahí su nombre) y, tradicionalmente, barba.</li>
          <li><strong>Clarisas:</strong> hábito marrón, cordón, toca blanca y velo negro.</li>
          <li><strong>Laicos de la Orden Franciscana Seglar:</strong> no usan hábito; suelen llevar el Tau como signo.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>La familia franciscana tiene una cantidad enorme de santos. Algunos de los más conocidos:</p>
        <div class="saints">
          <div class="saint"><b>San Francisco de Asís</b><span class="d">1181/82 – 1226 · Italia</span><p>Fundador. Pobre, alegre, hermano de todos. Patrono de Italia y de la ecología.</p><div class="tags"><span>Fundador</span><span>Estigmas</span></div></div>
          <div class="saint"><b>Santa Clara de Asís</b><span class="d">1193/94 – 1253 · Italia</span><p>Fundadora de las clarisas. Primera mujer en escribir una regla para mujeres aprobada por un papa.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>San Antonio de Padua</b><span class="d">1195 – 1231 · Portugal e Italia</span><p>Nació en Lisboa. Predicador extraordinario y uno de los santos más queridos del mundo.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>San Buenaventura</b><span class="d">1217/21 – 1274 · Italia</span><p>Teólogo y ministro general. Escribió la biografía oficial de Francisco.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>Santa Isabel de Hungría</b><span class="d">1207 – 1231 · Hungría y Alemania</span><p>Princesa, esposa y madre que gastó su vida en los pobres. Patrona de la Tercera Orden.</p><div class="tags"><span>Laica</span></div></div>
          <div class="saint"><b>San Francisco Solano</b><span class="d">1549 – 1610 · España, Tucumán y Lima</span><p>Misionero en el antiguo Tucumán, que incluía buena parte del actual norte argentino. Recorría pueblos con su violín.</p><div class="tags"><span>Misionero</span><span>Argentina</span></div></div>
          <div class="saint"><b>San Maximiliano Kolbe</b><span class="d">1894 – 1941 · Polonia</span><p>Fraile conventual. En Auschwitz ofreció su vida en lugar de un padre de familia condenado a morir de hambre.</p><div class="tags"><span>Mártir</span></div></div>
          <div class="saint"><b>San Pío de Pietrelcina</b><span class="d">1887 – 1968 · Italia</span><p>El Padre Pío, capuchino. Confesor incansable y estigmatizado. Canonizado en 2002.</p><div class="tags"><span>Capuchino</span></div></div>
          <div class="saint"><b>San Lorenzo de Brindis</b><span class="d">1559 – 1619 · Italia</span><p>Capuchino, predicador y políglota.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>Beato Mamerto Esquiú</b><span class="d">1826 – 1883 · Catamarca</span><p>Fraile franciscano argentino, obispo de Córdoba. Famoso por su sermón sobre la Constitución de 1853. Beatificado en 2021.</p><div class="tags"><span>Argentino</span><span>Beato</span></div></div>
        </div>
        <p class="note">Fechas y títulos de conocimiento general; no los verifiqué uno por uno hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano laico, en alguna de las tres ramas. Se empieza contactando al animador vocacional de la [[provincia|provincia]].</p></div>
          <div class="box"><h3>Como clarisa</h3><p>Para mujeres llamadas a la vida contemplativa. Se empieza visitando un monasterio de clarisas.</p></div>
          <div class="box"><h3>Como hermana o hermano de vida activa</h3><p>Hay muchísimas congregaciones franciscanas dedicadas a la educación, la salud y las misiones.</p></div>
          <div class="box"><h3>Como laico</h3><p>La [[ofs|Orden Franciscana Seglar]] para adultos (con formación y una profesión de vida) y la [[jufra|JUFRA]] para jóvenes.</p></div>
        </div>
        <h3 style="font-size:26px;margin-top:24px">El camino hacia la vida religiosa</h3>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional.</strong> Encuentros, convivencias y misiones con los frailes.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong> Vida con la comunidad y estudio.</div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Un año en el que se recibe el hábito.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]].</strong> Al menos tres años, con estudios.</div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]].</strong> Y, para quienes son llamados, la ordenación sacerdotal.</div></li>
        </ol>
        <p class="note">Los plazos y requisitos concretos los fija cada rama y cada provincia; hay que consultarlos directamente.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · Ciudad</span>
          <h3>Basílica de San Francisco</h3>
          <p style="margin-top:8px">Es la sede de los franciscanos en Mendoza, a cargo de frailes de la Provincia Franciscana de la Asunción. El templo actual se construyó entre 1873 y 1875 y es Monumento Histórico Nacional desde 1928. Guarda la imagen de la <strong>Virgen del Carmen de Cuyo</strong>, generala del Ejército de los Andes, un bastón de mando de San Martín y los restos de su hija Merceditas, su yerno y su nieta. ${MK.v}</p>
          <p class="addr">Av. España 1418, Ciudad de Mendoza</p>
          <p class="note">En febrero de 2026 la prensa informó un deterioro serio del edificio y que los frailes a cargo iban a ser trasladados, sin saberse aún quién los reemplazaría. Conviene confirmar la situación actual.</p>
        </div>
        <h3 style="font-size:26px;margin-top:24px">En Argentina</h3>
        <ul class="dots">
          <li><strong>Frailes Menores (O.F.M.):</strong> varias provincias registradas en la Secretaría de Culto, entre ellas la de la Asunción de la Santísima Virgen del Río de la Plata, la de San Miguel, la de la Inmaculada Concepción y la Viceprovincia San Francisco Solano. ${MK.v}</li>
          <li><strong>Capuchinos</strong> y <strong>Conventuales</strong> (Provincia Rioplatense San Antonio de Padua) también están presentes. ${MK.v}</li>
          <li><strong>Clarisas</strong> y numerosas congregaciones franciscanas de vida activa en todo el país.</li>
          <li><strong>Fray Luis Beltrán:</strong> fraile franciscano que en Mendoza dirigió la maestranza del Ejército de los Andes, donde se fabricaron armas, uniformes y equipos para el Cruce. ${MK.g}</li>
        </ul>
        <p class="note">${MK.p} No encontré información confiable sobre monasterios de clarisas, capuchinos ni grupos de JUFRA u OFS en Mendoza. Preguntar en la Basílica de San Francisco es la forma más directa de saberlo.</p>` }
    ],
    compartir:{
      frases:[
        ["Señor, hazme un instrumento de tu paz.","Oración de la paz, atribuida a San Francisco (su autoría no es de él: apareció en 1912)"],
        ["Loado seas, mi Señor, con todas tus criaturas, especialmente el señor hermano sol.","San Francisco, Cántico de las criaturas"],
        ["Comenzad, hermanos, a servir al Señor Dios, porque hasta ahora poco o nada hemos hecho.","San Francisco, según sus primeros biógrafos"],
        ["Vete segura, porque llevas buena compañía.","Santa Clara, a su propia alma antes de morir, según el proceso de canonización"]
      ],
      anecdotas:[
        ["El beso al leproso","A Francisco le daban asco los leprosos. Un día, cabalgando cerca de Asís, se cruzó con uno, se bajó del caballo y lo besó. En su Testamento cuenta que lo que antes le parecía amargo se le convirtió en dulzura del alma y del cuerpo. ${MK.g}"],
        ["El primer pesebre","En la Navidad de 1223, en Greccio, Francisco pidió preparar un pesebre con un buey y un burro de verdad, para ver con sus ojos la pobreza en que nació Jesús. De ahí viene la costumbre de armar el pesebre. ${MK.g}"],
        ["El lobo de Gubbio","Las <em>Florecillas</em> cuentan que un lobo aterrorizaba la ciudad de Gubbio. Francisco fue a su encuentro, lo llamó “hermano lobo” e hizo un pacto: la gente lo alimentaría y él no atacaría más. ${MK.t}"],
        ["La huida de Clara","La noche del Domingo de Ramos de 1212, Clara, de 18 años, salió de su casa por una puerta secundaria y fue hasta la Porciúncula, donde los frailes la esperaban con antorchas. Allí Francisco le cortó el cabello en signo de consagración. ${MK.g}"]
      ],
      preguntas:[
        "Francisco llamó “hermanos” incluso al sol y a la muerte. ¿A quién te cuesta ver como hermano o hermana?",
        "¿Cuál es tu “leproso”: eso o esa persona que te cuesta abrazar y que quizás es el lugar donde Dios te espera?",
        "Francisco devolvió todo, hasta la ropa. ¿De qué cosas te costaría desprenderte para ser más libre?",
        "¿Cómo cuidás la creación en lo cotidiano: el agua, la comida, la basura, los animales?"
      ],
      dinamica:"Rezar juntos el Cántico de las criaturas al aire libre. Después, que cada uno escriba una estrofa propia empezando con “Loado seas, mi Señor, por…” con algo concreto de su vida o de Mendoza: la cordillera, la nieve, el Zonda, las acequias."
    },
    fuentes:[
      ["Los Andes (2026) — Estado de la Basílica de San Francisco de Mendoza","https://www.losandes.com.ar/sociedad/las-fotos-que-muestran-el-deplorable-estado-la-basilica-donde-reposan-los-restos-la-familia-san-martin-n5981812"],
      ["GCatholic — Basílica de San Francisco, Mendoza","https://gcatholic.org/churches/southamerica/0459.htm"],
      ["Secretaría de Culto — Institutos de vida consagrada registrados","https://cancilleria.gob.ar/en/ministry-foreign-affairs-international-trade-and-worship/secretariat-worship/institutes-consecrated?page=8"]
    ]
  },

  /* ---------------------------------------------------- DOMINICOS */
  dominicos: {
    familia:"mendicante",
    nombre:"Dominicos",
    latin:"Orden de Predicadores · Ordo Praedicatorum",
    resumen:"Santo Domingo fundó una orden para predicar el Evangelio con la palabra, el estudio y la vida pobre. Su lema es una sola palabra: Verdad. De sus filas salieron Santo Tomás de Aquino, Santa Catalina de Siena, Santa Rosa de Lima y el joven Pier Giorgio Frassati. Están en Mendoza desde el siglo XVI.",
    tarjeta:"Predicadores de la Verdad: estudio, oración y misión. Presentes en Mendoza desde el siglo XVI.",
    lema:["Veritas","“Verdad”. Otro lema clásico es: alabar, bendecir, predicar."],
    habito:[["Blanco","oklch(0.97 0.005 85)"],["Negro (capa)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","O.P."],
      ["Fundador","Santo Domingo de Guzmán (c. 1170 – 1221)"],
      ["Aprobación","22 de diciembre de 1216"],
      ["Ramas","Frailes, monjas, hermanas, laicos y jóvenes"],
      ["Fiesta principal","8 de agosto, Santo Domingo"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>El nombre oficial es <strong>Orden de Predicadores</strong> (O.P.). Fue la primera orden de la historia que llevó la predicación en su propio nombre. Popularmente se los llama dominicos, por su fundador.</p>
        <p>La “familia dominicana” incluye:</p>
        <ul class="dots">
          <li><strong>Frailes</strong>, sacerdotes y hermanos cooperadores.</li>
          <li><strong>Monjas</strong> de vida [[contemplativo|contemplativa]]. Son la rama más antigua: existieron antes que los frailes.</li>
          <li><strong>Hermanas de vida apostólica:</strong> muchas [[congregacion|congregaciones]] dedicadas a la educación y la salud.</li>
          <li><strong>[[fraternidad-laical|Fraternidades laicales]]</strong> y fraternidades sacerdotales.</li>
          <li><strong>Movimiento Juvenil Dominicano</strong>, para jóvenes.</li>
        </ul>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>Santo Domingo de Guzmán</strong> nació hacia 1170 en Caleruega, Castilla (España). Fue canónigo de la catedral de Osma. En un viaje por el sur de Francia descubrió que mucha gente había abandonado la fe porque los predicadores católicos vivían con lujo y no sabían explicar el Evangelio.</p>
        <ul class="dots">
          <li><strong>1206–1207:</strong> funda en Prouille un monasterio para mujeres convertidas: las primeras monjas dominicas.</li>
          <li><strong>1215:</strong> en Toulouse reúne a los primeros frailes predicadores.</li>
          <li><strong>22 de diciembre de 1216:</strong> el papa Honorio III aprueba la Orden.</li>
          <li><strong>1217:</strong> Domingo dispersa a sus pocos frailes por Europa, hacia París, Bolonia y España. “El trigo amontonado se pudre”, dicen que explicó. ${MK.t}</li>
          <li><strong>6 de agosto de 1221:</strong> muere en Bolonia. Es canonizado en 1234.</li>
        </ul>
        <p class="note">Fechas de conocimiento general; no las verifiqué hoy con una fuente puntual.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1216</span><div class="ev"><b>Aprobación</b>Honorio III confirma la Orden de Predicadores.</div></li>
          <li><span class="y">1221</span><div class="ev"><b>Muere Domingo</b>Deja una orden ya extendida por media Europa, con estructura democrática: los superiores se eligen y los capítulos deciden.</div></li>
          <li><span class="y">1274</span><div class="ev"><b>Muere Santo Tomás de Aquino</b>Su <em>Suma Teológica</em> marcará el pensamiento de la Iglesia durante siglos.</div></li>
          <li><span class="y">1380</span><div class="ev"><b>Muere Santa Catalina de Siena</b>Laica dominica que convenció al Papa de volver de Aviñón a Roma.</div></li>
          <li><span class="y">1511</span><div class="ev"><b>El sermón de Montesinos</b>En La Española, el dominico Antonio de Montesinos denuncia los abusos contra los indígenas: “¿Estos no son hombres?”. Inspiró la lucha de Bartolomé de las Casas.</div></li>
          <li><span class="y">1588</span><div class="ev"><b>En Mendoza</b>Se establece la primera comunidad dominica en Mendoza, llegada desde Chile. El Arzobispado da como fecha 1592. ${MK.v}</div></li>
          <li><span class="y">1816</span><div class="ev"><b>El Ejército de los Andes</b>El convento de Mendoza es requisado para el ejército de San Martín. ${MK.v}</div></li>
          <li><span class="y">1861</span><div class="ev"><b>El terremoto</b>El gran terremoto de Mendoza destruye iglesia y convento. ${MK.v}</div></li>
          <li><span class="y">1960</span><div class="ev"><b>La iglesia actual</b>Se termina la actual iglesia, hoy basílica de Nuestra Señora del Rosario, empezada en 1946. ${MK.v}</div></li>
          <li><span class="y">2025</span><div class="ev"><b>Congreso en Mendoza</b>Mendoza es sede del IV Congreso Internacional de Historia de la Orden de Predicadores en América (28 al 30 de mayo). ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] dominico es la <strong>predicación para la salvación de las almas</strong>. Santo Tomás de Aquino lo resumió en una fórmula famosa: <strong>contemplar y dar a otros lo contemplado</strong>.</p>
        <div class="cols">
          <div class="box"><h3>Oración</h3><p>No se puede predicar lo que no se rezó. La Liturgia de las Horas en comunidad sostiene todo.</p></div>
          <div class="box"><h3>Estudio</h3><p>El estudio es parte de la vida religiosa, no un agregado. Por eso los dominicos dieron grandes teólogos y universidades.</p></div>
          <div class="box"><h3>Vida común</h3><p>Fraternidad con una estructura muy participativa: los frailes eligen a sus superiores y deciden en capítulo.</p></div>
          <div class="box"><h3>Predicación</h3><p>En el púlpito, en el aula, en la calle, en los medios. Siempre al servicio de la Verdad, que es Cristo.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La [[espiritualidad|espiritualidad]] dominica une fe y razón, corazón e inteligencia.</p>
        <ul class="dots">
          <li><strong>La Verdad:</strong> buscarla con pasión, porque Dios es la Verdad.</li>
          <li><strong>La misericordia:</strong> Domingo lloraba de noche preguntando qué sería de los pecadores. Predicar es un acto de compasión.</li>
          <li><strong>María y el Rosario:</strong> los dominicos difundieron el Rosario por todo el mundo. Según la tradición, la Virgen se lo entregó a Santo Domingo. ${MK.t}</li>
          <li><strong>Los nueve modos de orar de Santo Domingo:</strong> un antiguo texto describe cómo rezaba con todo el cuerpo: de pie, de rodillas, postrado, con los brazos en cruz.</li>
          <li><strong>La alegría:</strong> sus compañeros lo recordaban alegre de día con los hermanos y en oración de noche con Dios.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Predicación:</strong> misiones, retiros, catequesis, medios de comunicación.</li>
          <li><strong>Educación y universidades:</strong> desde la Edad Media. En Argentina, la Universidad del Norte Santo Tomás de Aquino (UNSTA), en Tucumán, está vinculada a la Orden.</li>
          <li><strong>Teología y filosofía:</strong> centros de estudio en todo el mundo, como la Universidad Pontificia Santo Tomás (Angelicum) en Roma.</li>
          <li><strong>Derechos humanos:</strong> desde Montesinos y Las Casas, defensa de la dignidad de los pueblos.</li>
          <li><strong>Parroquias y basílicas</strong>, muchas dedicadas a la Virgen del Rosario.</li>
          <li><strong>En Mendoza:</strong> atienden el Colegio Santo Tomás de Aquino y la Basílica de Nuestra Señora del Rosario. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica blanca</strong> con cinturón de cuero, del que cuelga un rosario.</li>
          <li><strong>[[escapulario|Escapulario]] blanco</strong> y capucha blanca.</li>
          <li><strong>Capa negra con capucha</strong>, para la predicación y ciertas celebraciones. Por esa combinación los ingleses los llamaban “frailes negros”.</li>
          <li><strong>Monjas:</strong> hábito blanco, velo negro.</li>
        </ul>
        <p style="margin-top:12px">El blanco suele explicarse como signo de pureza y el negro como signo de penitencia. Un juego de palabras medieval los llamaba <em>Domini canes</em>, “perros del Señor”, y por eso en el arte aparece un perro con una antorcha en la boca. ${MK.t}</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <p>La Orden tiene dos [[doctor|Doctores de la Iglesia]] y la primera santa de América:</p>
        <div class="saints">
          <div class="saint"><b>Santo Domingo de Guzmán</b><span class="d">c. 1170 – 1221 · España</span><p>Fundador. Predicador incansable, compasivo y alegre.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Santo Tomás de Aquino</b><span class="d">1225 – 1274 · Italia</span><p>Teólogo y filósofo. Escribió la <em>Suma Teológica</em>. Patrono de estudiantes y universidades.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>San Alberto Magno</b><span class="d">c. 1200 – 1280 · Alemania</span><p>Maestro de Tomás. Teólogo y científico. Patrono de los científicos.</p><div class="tags"><span>Doctor</span></div></div>
          <div class="saint"><b>Santa Catalina de Siena</b><span class="d">1347 – 1380 · Italia</span><p>Laica dominica, mística y consejera de papas. Copatrona de Europa.</p><div class="tags"><span>Doctora</span><span>Laica</span></div></div>
          <div class="saint"><b>Santa Rosa de Lima</b><span class="d">1586 – 1617 · Perú</span><p>Laica dominica. Primera santa de América. Patrona de América y de las Filipinas.</p><div class="tags"><span>Primera santa de América</span></div></div>
          <div class="saint"><b>San Martín de Porres</b><span class="d">1579 – 1639 · Perú</span><p>Hermano dominico, hijo de un español y una mujer afrodescendiente. Servía a pobres, enfermos y animales.</p><div class="tags"><span>Hermano</span></div></div>
          <div class="saint"><b>San Juan Macías</b><span class="d">1585 – 1645 · España y Perú</span><p>Hermano portero del convento de Lima, amigo de Martín de Porres.</p><div class="tags"><span>Hermano</span></div></div>
          <div class="saint"><b>San Vicente Ferrer</b><span class="d">1350 – 1419 · España</span><p>Gran predicador que recorrió Europa.</p><div class="tags"><span>Predicador</span></div></div>
          <div class="saint"><b>San Pío V</b><span class="d">1504 – 1572 · Italia</span><p>Dominico que llegó a papa. Desde él, los papas visten de blanco. ${MK.t}</p><div class="tags"><span>Papa</span></div></div>
          <div class="saint"><b>Beato Fra Angélico</b><span class="d">c. 1395 – 1455 · Italia</span><p>Fraile pintor del Renacimiento. Patrono de los artistas.</p><div class="tags"><span>Artista</span></div></div>
          <div class="saint"><b>San Pier Giorgio Frassati</b><span class="d">1901 – 1925 · Italia</span><p>Joven laico dominico de Turín, alpinista, estudiante, servidor de los pobres. Murió a los 24 años. Canonizado en 2025.</p><div class="tags"><span>Joven</span><span>Laico</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general; no las verifiqué una por una hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano cooperador. La formación incluye varios años de filosofía y teología.</p></div>
          <div class="box"><h3>Como monja o hermana</h3><p>En un monasterio contemplativo o en una congregación de hermanas dominicas de vida activa.</p></div>
          <div class="box"><h3>Como laico</h3><p>Las [[fraternidad-laical|fraternidades laicales]] reúnen a laicos que hacen promesa de vivir el carisma dominicano.</p></div>
          <div class="box"><h3>Como joven</h3><p>El Movimiento Juvenil Dominicano y las actividades de colegios y parroquias dominicas.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional.</strong> Conocer una comunidad, participar de su vida.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Un año.</div></li>
          <li><div><strong>[[votos-temporales|Profesión simple]].</strong> Con estudios institucionales.</div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]].</strong> Los dominicos hacen un solo voto, el de obediencia, que incluye los demás.</div></li>
        </ol>
        <p class="note">Que los dominicos profesan solo el voto de obediencia es un rasgo conocido de la Orden; los plazos concretos los fija cada provincia.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · Ciudad</span>
          <h3>Convento Santo Domingo en Soriano y Basílica Nuestra Señora del Rosario</h3>
          <p style="margin-top:8px">Los dominicos están en Mendoza desde fines del siglo XVI. El convento ocupa la manzana entre Beltrán, Salta, Chacabuco y José Federico Moreno, terreno asignado en 1562. La comunidad atiende el Colegio Santo Tomás de Aquino y la basílica, abierta a todos. ${MK.v}</p>
          <p class="addr">Salta 2107, Ciudad de Mendoza</p>
          <p class="note">Hay dos fechas de llegada: el diario Memo habla de una primera comunidad en 1588 y el Arzobispado de Mendoza indica 1592. Según Memo, viven siete frailes y hay misas de martes a viernes a las 8, todos los días a las 19 y los domingos a las 11 y 19; no encontré la fecha de esa nota, así que conviene confirmar horarios.</p>
        </div>
        <h3 style="font-size:26px;margin-top:24px">En Argentina</h3>
        <ul class="dots">
          <li><strong>Frailes:</strong> presentes desde la época colonial en el actual territorio argentino. La provincia argentina celebró un jubileo bajo el nombre de Provincia de San Agustín. ${MK.p}</li>
          <li><strong>Monjas:</strong> el monasterio de Santa Catalina de Siena de Córdoba (1613) es considerado el primer monasterio de monjas del actual territorio argentino. ${MK.g}</li>
          <li><strong>Hermanas:</strong> varias congregaciones, entre ellas las Hermanas Dominicas de Santa Catalina de Siena. ${MK.v}</li>
          <li><strong>Universidad:</strong> UNSTA, en Tucumán.</li>
        </ul>` }
    ],
    compartir:{
      frases:[
        ["Contemplar y dar a otros lo contemplado.","Santo Tomás de Aquino, Suma Teológica"],
        ["Si sois lo que debéis ser, prenderéis fuego al mundo entero.","Santa Catalina de Siena"],
        ["Vivir sin fe, sin un patrimonio que defender, sin luchar por la verdad, no es vivir, sino ir tirando.","San Pier Giorgio Frassati"],
        ["Verso l’alto: ¡hacia lo alto!","San Pier Giorgio Frassati, escrito en una foto de su última escalada"]
      ],
      anecdotas:[
        ["Los libros vendidos","Siendo estudiante en Palencia, durante una hambruna, Domingo vendió sus libros, que valían una fortuna, para alimentar a los pobres. Dijo que no podía estudiar sobre pieles muertas mientras hombres vivos morían de hambre. ${MK.g}"],
        ["El buey mudo","Tomás de Aquino era grande y callado, y sus compañeros lo apodaron “el buey mudo”. Su maestro Alberto Magno les respondió que los mugidos de ese buey se iban a oír en el mundo entero. ${MK.g}"],
        ["Todo lo que escribí es paja","Hacia el final de su vida, después de una experiencia profunda en la misa, Tomás dejó de escribir. Dijo que todo lo que había escrito le parecía paja comparado con lo que había visto. ${MK.g}"],
        ["El joven del “hacia lo alto”","Pier Giorgio Frassati era de familia rica, pero daba su dinero a los pobres y hasta su boleto de tranvía. Cuando murió a los 24 años, su familia se sorprendió al ver a cientos de pobres en el funeral. ${MK.g}"]
      ],
      preguntas:[
        "Tomás dice que hay que contemplar para poder dar. ¿Qué lugar tiene la oración en lo que hacés por los demás?",
        "¿Qué preguntas sobre la fe te gustaría estudiar a fondo? ¿Te animás a buscar respuestas en serio?",
        "Domingo vendió sus libros para alimentar a los pobres. ¿Qué tenés de valor que podrías poner al servicio de otros?",
        "Frassati escribió “hacia lo alto”. ¿Cuál es la montaña que te toca subir este año?"
      ],
      dinamica:"Rezar un misterio del Rosario a la manera dominica: antes de cada Avemaría, uno del grupo lee una frase breve del Evangelio de ese misterio. Al final, cada uno comparte en una oración qué le “predicó” ese misterio."
    },
    fuentes:[
      ["Arzobispado de Mendoza — Dominicos OP","https://arquimendoza.org.ar/dominicos-op/"],
      ["Memo — Santo Domingo, una iglesia presente desde los inicios de Mendoza","https://www.memo.com.ar/cultura/sabado-santo-domingo-una-iglesia-con-sacerdotes-presentes-desde-los-inicios-de-mendoza-160/"],
      ["UNSTA — Congreso de Historia OP, Mendoza 2025","https://www.unsta.edu.ar/congreso-op/wp-content/uploads/sites/38/2025/02/2o-circular-Congreso-OP-Mendoza-2025-4-1.pdf"],
      ["Frailes Dominicos de Argentina","https://www.op.org.ar/"],
      ["Secretaría de Culto — Institutos registrados","https://cancilleria.gob.ar/es/ministerio-de-relaciones-exteriores-comercio-internacional-y-culto/secretaria-de-culto/institutos-de?page=1"]
    ]
  },

  /* ---------------------------------------------------- AGUSTINOS */
  agustinos: {
    familia:"mendicante",
    nombre:"Agustinos",
    latin:"Orden de San Agustín · Ordo Sancti Augustini",
    resumen:"Inspirados en San Agustín, el gran buscador de Dios que se convirtió a los 32 años, los agustinos viven en comunidad con un solo corazón orientado hacia Dios. Es la orden del papa León XIV, que visitó varias veces a la comunidad agustina de Mendoza.",
    tarjeta:"Interioridad, comunidad y búsqueda de la verdad. San Agustín, Santa Mónica, Santa Rita. La orden de León XIV.",
    lema:["Un alma sola y un solo corazón hacia Dios.","Regla de San Agustín, capítulo 1, inspirada en Hechos 4,32."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Negro (cinturón de cuero)","oklch(0.28 0.02 50)"]],
    datos:[
      ["Siglas","O.S.A."],
      ["Inspirador","San Agustín de Hipona (354 – 430)"],
      ["Fundación como orden","1244 y Gran Unión de 1256"],
      ["Presencia","Más de 40 países"],
      ["Fiesta principal","28 de agosto, San Agustín"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Orden de San Agustín</strong> (O.S.A.). Durante siglos se llamaron “Ermitaños de San Agustín”, porque nacieron de la unión de grupos de ermitaños de Italia. Hoy están presentes en más de 40 países. ${MK.v}</p>
        <p>La gran familia agustiniana incluye otras ramas que siguen la misma Regla:</p>
        <ul class="dots">
          <li><strong>[[agustinos-recoletos|Agustinos Recoletos]]</strong> (O.A.R.), nacidos de una reforma española en 1588.</li>
          <li><strong>Agustinos Descalzos</strong> (O.A.D.).</li>
          <li><strong>Monjas agustinas</strong> contemplativas y muchas congregaciones de hermanas agustinas.</li>
          <li><strong>Laicos agustinos</strong>, en fraternidades vinculadas a las comunidades.</li>
        </ul>
        <p>La Regla de San Agustín también es la base de órdenes muy distintas, como los Dominicos, los Mercedarios, los Premonstratenses y los Servitas.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p>San Agustín <strong>no fundó la orden</strong> tal como hoy existe, pero es su padre espiritual. Escribió una [[regla|Regla]] para comunidades de su tiempo, y siglos después la Iglesia unió bajo esa Regla a varios grupos de ermitaños.</p>
        <ul class="dots">
          <li><strong>354:</strong> Agustín nace en Tagaste, en el norte de África (hoy Argelia), hijo de Santa Mónica.</li>
          <li><strong>387:</strong> es bautizado por San Ambrosio en Milán, en la Vigilia Pascual.</li>
          <li><strong>395/396:</strong> es consagrado obispo de Hipona. Muere allí en 430.</li>
          <li><strong>1244:</strong> por iniciativa del papa Inocencio IV se unen ermitaños de la Toscana bajo la Regla de San Agustín. ${MK.v}</li>
          <li><strong>1256:</strong> el papa Alejandro IV amplía la unión a ermitaños de otras regiones (la “Gran Unión”) y la orden se consolida como mendicante. ${MK.v}</li>
        </ul>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">386</span><div class="ev"><b>“Toma y lee”</b>En un jardín de Milán, angustiado, Agustín oye una voz infantil que canta “toma y lee”. Abre la Biblia en Romanos 13 y se convierte.</div></li>
          <li><span class="y">397</span><div class="ev"><b>Las Confesiones</b>Hacia esos años escribe su autobiografía en forma de oración, uno de los libros más leídos de la historia.</div></li>
          <li><span class="y">430</span><div class="ev"><b>Muere Agustín</b>En Hipona, mientras los vándalos sitian la ciudad.</div></li>
          <li><span class="y">1244</span><div class="ev"><b>Primera unión</b>Ermitaños de la Toscana se unen bajo la Regla de San Agustín.</div></li>
          <li><span class="y">1256</span><div class="ev"><b>La Gran Unión</b>Alejandro IV consolida la orden de Ermitaños de San Agustín.</div></li>
          <li><span class="y">1505</span><div class="ev"><b>Lutero</b>Martín Lutero entra como fraile agustino en Erfurt. Años después inicia la Reforma protestante y deja la orden.</div></li>
          <li><span class="y">1533</span><div class="ev"><b>América</b>Los primeros agustinos llegan a México. Desde allí y desde Perú se extienden por el continente y hasta Filipinas.</div></li>
          <li><span class="y">1866</span><div class="ev"><b>Mendel</b>El fraile agustino Gregor Mendel publica sus experimentos con arvejas, base de la genética moderna.</div></li>
          <li><span class="y">2025</span><div class="ev"><b>Un papa agustino</b>El 8 de mayo, el cardenal Robert Francis Prevost, agustino, prior general de la orden entre 2001 y 2013 y misionero en Perú, es elegido papa como León XIV. ${MK.v}</div></li>
        </ol>
        <p class="note">Las fechas de 1244, 1256 y 2025 están verificadas. Las demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] agustino es la <strong>comunidad de hermanos que buscan juntos a Dios</strong>. La Regla empieza diciendo que el motivo por el que se reúnen es vivir en unanimidad, con una sola alma y un solo corazón orientados hacia Dios.</p>
        <div class="cols">
          <div class="box"><h3>Interioridad</h3><p>Dios está más adentro de nosotros que lo más íntimo nuestro. Ver [[interioridad|interioridad]].</p></div>
          <div class="box"><h3>Comunidad</h3><p>La amistad y la vida en común son camino hacia Dios. Todo se comparte.</p></div>
          <div class="box"><h3>Búsqueda de la verdad</h3><p>Agustín buscó la verdad en la filosofía y en distintas corrientes hasta encontrarla en Cristo. Los agustinos valoran el estudio y el diálogo.</p></div>
          <div class="box"><h3>Servicio a la Iglesia</h3><p>Disponibles para lo que la Iglesia necesite: parroquias, colegios, misiones.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <p>La [[espiritualidad|espiritualidad]] agustiniana es la del <strong>corazón inquieto</strong>. Agustín escribió al comienzo de las <em>Confesiones</em> que el corazón humano está inquieto hasta que descansa en Dios.</p>
        <ul class="dots">
          <li><strong>El amor como motor:</strong> “Amá y hacé lo que quieras” resume que todo debe nacer del amor verdadero.</li>
          <li><strong>La amistad:</strong> Agustín vivió siempre rodeado de amigos y vio en la amistad un camino hacia Dios.</li>
          <li><strong>La gracia:</strong> todo es don de Dios. Por eso es un gran maestro de la humildad.</li>
          <li><strong>La Palabra y la liturgia:</strong> predicador incansable, comentó los Salmos y el Evangelio de Juan.</li>
          <li><strong>El símbolo:</strong> un corazón en llamas atravesado por una flecha, sobre un libro: el amor herido por la Palabra de Dios.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Educación:</strong> colegios y universidades en todo el mundo.</li>
          <li><strong>Parroquias</strong>, muchas veces en barrios populares.</li>
          <li><strong>Misiones:</strong> América, Asia y África. León XIV fue misionero en el norte de Perú. ${MK.v}</li>
          <li><strong>Estudio e investigación:</strong> teología, filosofía y también ciencias.</li>
          <li><strong>En Mendoza:</strong> la comunidad agustina atiende la Parroquia San Agustín y un colegio. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica negra</strong> con capucha y esclavina (una pequeña capa sobre los hombros).</li>
          <li><strong>Cinturón de cuero negro.</strong> Según una tradición, Santa Mónica recibió de la Virgen un cinturón como signo de consuelo. ${MK.t}</li>
          <li><strong>En climas cálidos</strong> algunas comunidades usan hábito blanco.</li>
          <li><strong>Recoletos:</strong> también hábito negro con cinturón de cuero.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Agustín de Hipona</b><span class="d">354 – 430 · Norte de África</span><p>Filósofo, obispo y uno de los más grandes pensadores cristianos. Escribió <em>Confesiones</em> y <em>La ciudad de Dios</em>.</p><div class="tags"><span>Doctor</span><span>Padre</span></div></div>
          <div class="saint"><b>Santa Mónica</b><span class="d">c. 332 – 387 · Norte de África e Italia</span><p>Madre de Agustín. Rezó por su conversión durante años. Patrona de las madres.</p><div class="tags"><span>Madre</span></div></div>
          <div class="saint"><b>San Nicolás de Tolentino</b><span class="d">1245 – 1305 · Italia</span><p>Fraile agustino, predicador y servidor de los pobres y enfermos.</p><div class="tags"><span>Fraile</span></div></div>
          <div class="saint"><b>Santa Rita de Cascia</b><span class="d">1381 – 1457 · Italia</span><p>Esposa, viuda, madre y luego monja agustina. Patrona de las causas imposibles.</p><div class="tags"><span>Monja</span><span>Causas imposibles</span></div></div>
          <div class="saint"><b>Santo Tomás de Villanueva</b><span class="d">1486 – 1555 · España</span><p>Agustino y arzobispo de Valencia, conocido como “el limosnero”.</p><div class="tags"><span>Obispo</span></div></div>
          <div class="saint"><b>San Alonso de Orozco</b><span class="d">1500 – 1591 · España</span><p>Agustino predicador de la corte, escritor místico. Canonizado en 2002.</p><div class="tags"><span>Escritor</span></div></div>
          <div class="saint"><b>San Ezequiel Moreno</b><span class="d">1848 – 1906 · España, Filipinas y Colombia</span><p>Agustino recoleto, misionero y obispo de Pasto. Canonizado en 1992.</p><div class="tags"><span>Recoleto</span><span>Misionero</span></div></div>
          <div class="saint"><b>Santa Magdalena de Nagasaki</b><span class="d">1611 – 1634 · Japón</span><p>Joven terciaria agustina recoleta, mártir en Japón. Canonizada en 1987.</p><div class="tags"><span>Joven</span><span>Mártir</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general; no las verifiqué una por una hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano. Se empieza conociendo una comunidad agustina y su pastoral vocacional.</p></div>
          <div class="box"><h3>Como monja o hermana</h3><p>Monasterios de agustinas contemplativas o congregaciones de vida activa.</p></div>
          <div class="box"><h3>Como laico</h3><p>Fraternidades seglares agustinianas y grupos juveniles en colegios y parroquias de la orden.</p></div>
          <div class="box"><h3>Leyendo a Agustín</h3><p>Las <em>Confesiones</em> son la mejor puerta de entrada. Se pueden leer de a un libro (capítulo) por semana en grupo.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional</strong> y experiencias de vida comunitaria.</div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Un año.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]]</strong> y estudios.</div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]].</strong></div></li>
        </ol>
        <p class="note">Plazos y requisitos según cada provincia; hay que consultarlos directamente.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · Barrio Bombal</span>
          <h3>Parroquia San Agustín</h3>
          <p style="margin-top:8px">Comunidad agustina que atiende la parroquia y un colegio. Robert Prevost, hoy León XIV, la visitaba regularmente cuando era prior general de la orden y compartía estudio, conversación y comidas con los jóvenes en formación. Así lo contó en 2025 el párroco, fray Julio Ríos, que era uno de ellos. ${MK.v}</p>
          <p class="addr">Hipólito Yrigoyen y 9 de Julio, Ciudad de Mendoza</p>
        </div>
        <h3 style="font-size:26px;margin-top:24px">En Argentina</h3>
        <ul class="dots">
          <li><strong>Agustinos (O.S.A.):</strong> además de Mendoza, tienen otras comunidades en el país que no llegué a verificar. ${MK.p}</li>
          <li><strong>Agustinos Recoletos:</strong> presentes en la Ciudad de Buenos Aires (Parroquia Nuestra Señora de la Consolación, una comunidad centenaria), en Santa Fe (Parroquia San José, con escuela) y en Rosario (Nuestra Señora de Luján). ${MK.v}</li>
        </ul>` }
    ],
    compartir:{
      frases:[
        ["Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.","San Agustín, Confesiones I,1"],
        ["¡Tarde te amé, hermosura tan antigua y tan nueva, tarde te amé!","San Agustín, Confesiones X,27"],
        ["Ama y haz lo que quieras.","San Agustín, Comentario a la primera carta de San Juan 7,8"],
        ["No vayas fuera, vuelve a ti mismo: en el hombre interior habita la verdad.","San Agustín, La verdadera religión 39,72"]
      ],
      anecdotas:[
        ["Las peras robadas","En las <em>Confesiones</em>, Agustín cuenta que de adolescente robó peras con sus amigos, no por hambre, sino por el gusto de hacer algo prohibido en grupo. Las tiraron a los cerdos. Ese recuerdo le sirvió para pensar por qué hacemos el mal. ${MK.g}"],
        ["El hijo de tantas lágrimas","Mónica lloró y rezó por su hijo durante años. Un obispo la consoló diciéndole que no podía perderse el hijo de tantas lágrimas. Agustín lo cuenta en las <em>Confesiones</em>. ${MK.g}"],
        ["El niño y el mar","Una tradición cuenta que Agustín, paseando por la playa mientras pensaba en la Trinidad, vio a un niño que quería meter el mar en un pocito con un balde. Cuando le dijo que era imposible, el niño respondió que más imposible era encerrar el misterio de Dios en una cabeza humana. ${MK.t}"],
        ["El papa que pasó por Mendoza","Antes de ser papa, León XIV visitaba la comunidad agustina de Mendoza. El párroco de San Agustín lo recordó como un hombre sencillo, humilde y muy bueno. ${MK.v}"]
      ],
      preguntas:[
        "Agustín buscó a Dios en muchos lugares antes de encontrarlo. ¿Qué cosas llenan tu inquietud? ¿Te llenan de verdad?",
        "“Tarde te amé.” ¿Hay algo que sentís que estás dejando para más adelante en tu relación con Dios?",
        "Mónica no dejó de rezar por su hijo. ¿Por quién rezás con perseverancia?",
        "Agustín vivió la fe con amigos. ¿Tus amistades te acercan a Dios? ¿Vos acercás a tus amigos a Dios?"
      ],
      dinamica:"Escribir una “mini confesión” al estilo de Agustín: una carta breve a Dios contando un momento de tu vida en que lo buscaste sin saberlo. No se comparte el texto; al final, cada uno dice en voz alta una sola frase de agradecimiento."
    },
    fuentes:[
      ["Memo (2025) — Las visitas del nuevo Papa a Mendoza","https://www.memo.com.ar/poder/prevost-san-agustin-mendoza/"],
      ["Los Andes (2025) — Las visitas del papa León XIV a una parroquia de Mendoza","https://www.losandes.com.ar/sociedad/las-visitas-del-papa-leon-xiv-una-parroquia-mendoza-es-sencillisimo-humilde-un-hombre-muy-bueno-n5947669"],
      ["Diario de Cuyo (2025) — Quiénes son los agustinos","https://www.diariodecuyo.com.ar/mundo/quienes-son-los-agustinos-la-orden-del-nuevo-papa-una-comunidad-mendicante-con-vocacion-misionera-1728888.html"],
      ["Agustinos Recoletos — Argentina","https://agustinosrecoletos.com/tag/argentina/?lang=en"]
    ]
  },

  /* ---------------------------------------------------- MERCEDARIOS */
  mercedarios: {
    familia:"mendicante",
    nombre:"Mercedarios",
    latin:"Orden de la Bienaventurada Virgen María de la Merced",
    resumen:"Nacieron en la Barcelona del siglo XIII para rescatar a cristianos cautivos, y estaban dispuestos a quedarse ellos mismos como rehenes si hacía falta. Hoy siguen buscando a los cautivos de nuestro tiempo, sobre todo en las cárceles. Su Virgen, la de la Merced, es Generala del Ejército Argentino.",
    tarjeta:"Redentores de cautivos, con un cuarto voto: dar la vida por los demás. Presentes en Mendoza.",
    lema:["Redimir cautivos","Su misión desde la fundación: liberar a quienes están privados de libertad."],
    habito:[["Blanco","oklch(0.97 0.005 85)"],["Escudo (rojo y oro)","oklch(0.55 0.17 30)"]],
    datos:[
      ["Siglas","O. de M."],
      ["Fundador","San Pedro Nolasco (c. 1180 – 1245)"],
      ["Fundación","Barcelona, 1218 (fecha tradicional)"],
      ["Voto propio","Cuarto voto de redención"],
      ["Fiesta principal","24 de septiembre, Virgen de la Merced"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"g", html:`
        <p>Su nombre oficial es <strong>Orden de la Bienaventurada Virgen María de la Merced</strong> (O. de M.). “Merced” significa misericordia, gracia, favor: la Virgen de la Merced es la que obtiene la libertad.</p>
        <p>La familia mercedaria incluye frailes, monjas contemplativas, varias congregaciones de hermanas mercedarias y laicos.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Pedro Nolasco</strong> fue un comerciante, probablemente nacido en el sur de Francia, que vivía en Barcelona. Conmovido por los miles de cristianos capturados en el Mediterráneo y llevados al norte de África, empezó a usar su fortuna para pagar rescates.</p>
        <ul class="dots">
          <li><strong>1218:</strong> funda la orden en Barcelona, con el apoyo del rey Jaime I de Aragón y de San Raimundo de Peñafort. La tradición fija la fecha el 10 de agosto. ${MK.t}</li>
          <li><strong>1235:</strong> el papa Gregorio IX aprueba la orden bajo la Regla de San Agustín.</li>
          <li><strong>1245:</strong> muere Pedro Nolasco en Barcelona (algunas fuentes dan 1256). Es canonizado en 1628.</li>
        </ul>
        <p class="note">Fechas de conocimiento general; hay discusiones históricas sobre los primeros años de la orden.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1218</span><div class="ev"><b>Fundación en Barcelona</b>Según la tradición, la Virgen se apareció la misma noche a Pedro Nolasco, a Raimundo de Peñafort y al rey Jaime I, pidiendo una orden para liberar cautivos. ${MK.t}</div></li>
          <li><span class="y">1235</span><div class="ev"><b>Aprobación papal</b>Gregorio IX aprueba la orden.</div></li>
          <li><span class="y">1317</span><div class="ev"><b>Una orden de sacerdotes</b>Al principio la mayoría eran laicos, incluso caballeros. Desde este año los superiores pasan a ser sacerdotes.</div></li>
          <li><span class="y">s. XVI</span><div class="ev"><b>América</b>Los mercedarios llegan con la conquista y fundan conventos en todo el continente, también en el actual territorio argentino.</div></li>
          <li><span class="y">1812</span><div class="ev"><b>La Generala</b>Después de la Batalla de Tucumán, el 24 de septiembre, día de la Virgen de la Merced, Manuel Belgrano le entrega su bastón de mando. Es reconocida como Generala del Ejército. ${MK.v}</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Nuevas cautividades</b>La orden trabaja en cárceles, con víctimas de trata, migrantes y personas atrapadas en adicciones.</div></li>
        </ol>
        <p class="note">El bastón de Belgrano está verificado; las demás fechas son de conocimiento general en la historia de la orden.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El [[carisma|carisma]] mercedario es la <strong>redención de los cautivos</strong>: visitar, consolar y liberar a los cristianos en peligro de perder la fe por estar privados de libertad.</p>
        <div class="box" style="margin-top:12px">
          <h3>El cuarto voto</h3>
          <p>Además de pobreza, castidad y obediencia, los mercedarios hacen un [[cuarto-voto|cuarto voto]]: estar dispuestos a quedarse como rehenes, y hasta dar la vida, si eso es necesario para liberar a un cautivo en peligro. Es una forma muy concreta de vivir las palabras de Jesús: “No hay amor más grande que dar la vida por los amigos” (Juan 15,13).</p>
        </div>
        <p style="margin-top:14px">Hoy esos “cautivos” son los presos, las víctimas de trata, los perseguidos por su fe, quienes sufren adicciones y todos los que viven alguna forma de esclavitud.</p>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Cristo Redentor:</strong> el que vino a dar libertad a los cautivos (Lucas 4,18).</li>
          <li><strong>María de la Merced:</strong> madre de misericordia, modelo de quien se compromete con los que sufren.</li>
          <li><strong>La misericordia concreta:</strong> no solo sentir compasión, sino poner el cuerpo y los recursos.</li>
          <li><strong>La Regla de San Agustín:</strong> vida común, un solo corazón.</li>
          <li><strong>La [[redencion|redención]]</strong> como centro: la fe se defiende liberando a las personas.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Pastoral carcelaria:</strong> capellanías, acompañamiento de presos y de sus familias, reinserción.</li>
          <li><strong>Parroquias y santuarios</strong> dedicados a la Virgen de la Merced.</li>
          <li><strong>Educación:</strong> colegios mercedarios.</li>
          <li><strong>Migrantes, víctimas de trata y adicciones.</strong></li>
          <li><strong>Misiones</strong> en América, África y Asia.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica, escapulario y capa blancos.</strong></li>
          <li><strong>El escudo</strong> en el pecho: la cruz blanca de la catedral de Barcelona sobre fondo rojo, encima de las barras rojas y doradas de la Corona de Aragón, recuerdo de sus orígenes.</li>
          <li><strong>Cinturón de cuero</strong>, del que suele colgar el rosario.</li>
          <li><strong>Las hermanas mercedarias</strong> llevan también el escudo de la orden.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Pedro Nolasco</b><span class="d">c. 1180 – 1245 · Francia y Barcelona</span><p>Fundador. Comerciante que gastó su fortuna en rescatar cautivos.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Ramón Nonato</b><span class="d">c. 1204 – 1240 · Cataluña</span><p>Se ofreció como rehén en Argel. Patrono de las embarazadas y los partos.</p><div class="tags"><span>Rehén</span></div></div>
          <div class="saint"><b>Santa María de Cervelló</b><span class="d">c. 1230 – 1290 · Barcelona</span><p>Primera monja mercedaria. Rezaba por los frailes que navegaban hacia África.</p><div class="tags"><span>Monja</span></div></div>
          <div class="saint"><b>San Pedro Armengol</b><span class="d">c. 1238 – 1304 · Cataluña</span><p>Joven que llevó una vida desordenada, se convirtió, entró a la orden y se ofreció como rehén.</p><div class="tags"><span>Converso</span></div></div>
          <div class="saint"><b>San Serapio</b><span class="d">† 1240 · Argel</span><p>Mercedario inglés, mártir mientras estaba como rehén.</p><div class="tags"><span>Mártir</span></div></div>
          <div class="saint"><b>San Raimundo de Peñafort</b><span class="d">c. 1175 – 1275 · Cataluña</span><p>Dominico, gran jurista. Ayudó a fundar la orden y a redactar sus primeras normas.</p><div class="tags"><span>Cofundador</span><span>Dominico</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general y en varios casos aproximadas.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano, con los cuatro votos.</p></div>
          <div class="box"><h3>Como monja o hermana</h3><p>Monasterios contemplativos o congregaciones de hermanas mercedarias.</p></div>
          <div class="box"><h3>Como laico</h3><p>Laicos mercedarios y voluntariado en pastoral carcelaria.</p></div>
          <div class="box"><h3>Como joven</h3><p>Visitar una cárcel con un grupo de pastoral es, quizás, la mejor manera de entender este carisma.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional.</strong></div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong> Un año.</div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]].</strong></div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]]</strong>, con el cuarto voto.</div></li>
        </ol>
        <p class="note">Plazos y requisitos según la provincia; hay que consultarlos directamente.</p>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <div class="place">
          <span class="eyebrow">Mendoza · Ciudad</span>
          <h3>Iglesia Nuestra Señora de la Merced</h3>
          <p style="margin-top:8px">Según el Arzobispado de Mendoza, pertenece a los Padres Mercedarios y está en la jurisdicción de la Parroquia Nuestra Señora de Loreto. ${MK.v}</p>
          <p class="addr">Montecaseros 1647, Ciudad de Mendoza</p>
          <p class="note">En Maipú también hay una iglesia dedicada a Nuestra Señora de la Merced; no confirmé si está a cargo de la orden.</p>
        </div>
        <div class="place">
          <span class="eyebrow">Tucumán</span>
          <h3>Basílica de Nuestra Señora de la Merced</h3>
          <p style="margin-top:8px">Allí se venera la imagen a la que Belgrano entregó su bastón de mando después de la Batalla de Tucumán. Se la considera del siglo XVI y es patrona de la provincia. El bastón original, de marfil con empuñadura de oro, se guarda y se usa una réplica desde 2007. ${MK.v}</p>
        </div>
        <ul class="dots" style="margin-top:14px">
          <li><strong>Frailes mercedarios:</strong> presentes en el actual territorio argentino desde la época colonial y organizados hoy en una provincia argentina con centros de espiritualidad. No llegué a verificar la lista actual de comunidades. ${MK.p}</li>
        </ul>` }
    ],
    compartir:{
      frases:[
        ["No hay amor más grande que dar la vida por los amigos.","Juan 15,13, texto que inspira el cuarto voto"],
        ["El Espíritu del Señor está sobre mí… me envió a anunciar la liberación a los cautivos.","Lucas 4,18"],
        ["Estuve preso y me vinieron a ver.","Mateo 25,36"]
      ],
      anecdotas:[
        ["El candado en los labios","La tradición cuenta que San Ramón Nonato, rehén en Argel, seguía predicando a los presos. Para callarlo, sus captores le perforaron los labios y se los cerraron con un candado. Por eso en las imágenes aparece con un candado en la boca. ${MK.t}"],
        ["El bastón de mimbre","Después de la Batalla de Tucumán, Belgrano entregó a la Virgen de la Merced un bastón de mando sencillo, de paja o mimbre. Después le pareció poco digno y le envió uno de marfil con empuñadura de oro. ${MK.v}"],
        ["El comerciante que rescataba","Antes de fundar la orden, Pedro Nolasco usaba su dinero de comerciante para pagar rescates. Cuando se le acabó la fortuna, buscó compañeros y pidió limosna para seguir liberando cautivos. ${MK.g}"],
        ["El autor de Don Juan","Tirso de Molina, el dramaturgo del Siglo de Oro que creó el personaje de Don Juan, era fraile mercedario. ${MK.g}"]
      ],
      preguntas:[
        "¿Quiénes son hoy los “cautivos” cerca tuyo: en tu barrio, tu escuela, tu familia, tus redes?",
        "¿Hay algo que te tenga atado o cautivo a vos: una adicción, un miedo, una herida?",
        "El cuarto voto es estar dispuesto a cambiar de lugar con el que sufre. ¿Hasta dónde llegaría tu compromiso por un amigo?",
        "¿Alguna vez pensaste en visitar a alguien que está preso? ¿Qué te da miedo y qué te atrae de eso?"
      ],
      dinamica:"Escribir cartas anónimas de esperanza para personas privadas de libertad y hacerlas llegar a través de la pastoral carcelaria de la diócesis o de los mercedarios. Antes de escribir, leer juntos Mateo 25,31-46."
    },
    fuentes:[
      ["Arzobispado de Mendoza — Nuestra Señora de la Merced","https://arquimendoza.org.ar/nuestra-senora-de-la-merced-mendoza/"],
      ["La Gaceta — Lo que no sabías sobre la imagen de la Virgen de La Merced","https://www.lagaceta.com.ar/nota/912292/actualidad/lo-no-sabias-sobre-imagen-virgen-merced.html"],
      ["Orden de la Merced en Argentina — Centros de espiritualidad","https://merced.org.ar/centros-de-espiritualidad/"]
    ]
  },

  /* ---------------------------------------------------- TRINITARIOS */
  trinitarios: {
    familia:"mendicante",
    nombre:"Trinitarios",
    latin:"Orden de la Santísima Trinidad y de los Cautivos",
    resumen:"Fundada en 1198, es una de las órdenes más antiguas dedicadas a liberar cautivos, incluso antes que los mercedarios. Sus frailes rescataron a miles de cristianos presos en el norte de África, entre ellos a Miguel de Cervantes. Hoy trabajan con presos, perseguidos por su fe y víctimas de nuevas esclavitudes, y en la Argentina ayudaron a iniciar los primeros grupos de oración carismáticos.",
    tarjeta:"Gloria a la Trinidad y liberación de los cautivos. Rescataron a Cervantes. Hábito blanco con cruz roja y azul.",
    lema:["Gloria a ti, Trinidad, y a los cautivos libertad","Lema tradicional de la Orden."],
    habito:[["Blanco","oklch(0.97 0.005 85)"],["Cruz roja","oklch(0.55 0.2 27)"],["Cruz azul","oklch(0.48 0.14 260)"]],
    datos:[
      ["Siglas","O.SS.T."],
      ["Fundador","San Juan de Mata (c. 1154 – 1213)"],
      ["Aprobación","17 de diciembre de 1198, Inocencio III"],
      ["Tamaño","547 miembros y 109 casas (fines de 2024)"],
      ["Fiesta principal","Santísima Trinidad"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Orden de la Santísima Trinidad y de los Cautivos</strong> (O.SS.T.). Une en el mismo nombre las dos cosas que la definen: la alabanza a Dios Trinidad y la liberación de los que están presos. ${MK.v}</p>
        <p>A fines de 2024 tenía 547 miembros (386 sacerdotes) en 109 casas. ${MK.v} La familia trinitaria incluye monjas contemplativas, varias congregaciones de hermanas trinitarias y laicos.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Juan de Mata</strong> nació hacia 1154 en Provenza (Francia) y estudió teología en París. Según la tradición, durante su primera misa tuvo una visión de Cristo sosteniendo a dos cautivos, uno cristiano y otro musulmán, con las cadenas rotas. ${MK.t}</p>
        <ul class="dots">
          <li><strong>Cerfroid:</strong> se retira con el ermitaño <strong>San Félix de Valois</strong> en un bosque del norte de Francia, donde nace la primera comunidad.</li>
          <li><strong>17 de diciembre de 1198:</strong> el papa Inocencio III aprueba la Orden y su Regla. ${MK.v}</li>
          <li><strong>1213:</strong> Juan de Mata muere en Roma.</li>
        </ul>
        <p class="note">La fecha de aprobación está verificada. Las demás, y la participación de Félix de Valois (cuya existencia histórica discuten algunos historiadores), son de conocimiento general o tradición.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1198</span><div class="ev"><b>Aprobación</b>Inocencio III aprueba la Orden. ${MK.v}</div></li>
          <li><span class="y">s. XIII</span><div class="ev"><b>Redenciones</b>Los frailes viajan al norte de África con dinero reunido en Europa para pagar rescates.</div></li>
          <li><span class="y">1580</span><div class="ev"><b>Cervantes libre</b>El trinitario fray Juan Gil paga el rescate de Miguel de Cervantes, que llevaba cinco años cautivo en Argel.</div></li>
          <li><span class="y">1599</span><div class="ev"><b>Los descalzos</b>San Juan Bautista de la Concepción inicia la reforma de los Trinitarios Descalzos en España.</div></li>
          <li><span class="y">s. XIX</span><div class="ev"><b>Casi desaparece</b>Las leyes anticlericales europeas reducen la Orden a muy pocas casas. Sobrevive la rama descalza, que es la actual.</div></li>
          <li><span class="y">1970s</span><div class="ev"><b>Argentina</b>Religiosos trinitarios y jesuitas inician los primeros grupos de oración carismáticos del país. ${MK.v}</div></li>
        </ol>
        <p class="note">Los datos de 1198 y de los grupos carismáticos están verificados; los demás son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma trinitario une <strong>contemplación de la Trinidad</strong> y <strong>servicio de liberación</strong>. Si Dios es comunión de amor, todo lo que encadena a una persona contradice ese amor.</p>
        <div class="cols">
          <div class="box"><h3>Gloria a la Trinidad</h3><p>Toda la vida, la oración y las obras se dedican a la Santísima Trinidad.</p></div>
          <div class="box"><h3>Redención de cautivos</h3><p>Históricamente, pagar rescates. Hoy, acompañar a presos, perseguidos y víctimas de esclavitudes modernas.</p></div>
          <div class="box"><h3>La “tercera parte”</h3><p>La Regla original pedía destinar un tercio de los bienes a rescatar cautivos. ${MK.g}</p></div>
          <div class="box"><h3>Misericordia</h3><p>Cristo Redentor que libera es el modelo de todo servicio.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La Trinidad</strong> como misterio central y fuente de toda la vida.</li>
          <li><strong>Cristo Redentor</strong>, que vino a dar libertad a los cautivos (Lucas 4,18).</li>
          <li><strong>La Virgen del Buen Remedio</strong>, patrona de la Orden.</li>
          <li><strong>La comunidad fraterna</strong> como imagen de la comunión trinitaria.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Pastoral penitenciaria:</strong> capellanías y acompañamiento de presos y de sus familias.</li>
          <li><strong>Cristianos perseguidos:</strong> la Solidaridad Internacional Trinitaria trabaja por la libertad religiosa.</li>
          <li><strong>Migrantes y víctimas de trata.</strong></li>
          <li><strong>Parroquias y educación.</strong></li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica blanca</strong> con escapulario blanco.</li>
          <li><strong>Cruz con el brazo vertical rojo y el horizontal azul</strong>, sobre el escapulario. Los tres colores se interpretan como la Trinidad: el blanco, el Padre; el azul, el Hijo; el rojo, el Espíritu Santo. ${MK.t}</li>
          <li><strong>Capa negra</strong> en algunas celebraciones.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Juan de Mata</b><span class="d">c. 1154 – 1213 · Francia e Italia</span><p>Fundador.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>San Félix de Valois</b><span class="d">c. 1127 – 1212 · Francia</span><p>Ermitaño, considerado cofundador por la tradición.</p><div class="tags"><span>Cofundador</span></div></div>
          <div class="saint"><b>San Juan Bautista de la Concepción</b><span class="d">1561 – 1613 · España</span><p>Reformador, padre de los Trinitarios Descalzos. Canonizado en 1975.</p><div class="tags"><span>Reformador</span></div></div>
          <div class="saint"><b>San Miguel de los Santos</b><span class="d">1591 – 1625 · España</span><p>Trinitario descalzo, místico, de profunda devoción eucarística.</p><div class="tags"><span>Místico</span></div></div>
          <div class="saint"><b>San Simón de Rojas</b><span class="d">1552 – 1624 · España</span><p>Trinitario, confesor de reyes y gran devoto de María. Canonizado en 1988.</p><div class="tags"><span>Mariano</span></div></div>
          <div class="saint"><b>Beata Isabel Canori Mora</b><span class="d">1774 – 1825 · Roma</span><p>Esposa y madre que sufrió la infidelidad de su marido y rezó por su conversión. Laica trinitaria. Beatificada en 1994.</p><div class="tags"><span>Laica</span><span>Madre</span></div></div>
        </div>
        <p class="note">Fechas y títulos de conocimiento general; no los verifiqué uno por uno hoy.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano, en una comunidad trinitaria.</p></div>
          <div class="box"><h3>Como monja o hermana</h3><p>Monjas trinitarias de clausura o congregaciones de hermanas trinitarias.</p></div>
          <div class="box"><h3>Como laico</h3><p>Laicos trinitarios y voluntariado con presos o perseguidos.</p></div>
          <div class="box"><h3>Como joven</h3><p>Pastoral penitenciaria y campañas por los cristianos perseguidos.</p></div>
        </div>
        <ol class="steps">
          <li><div><strong>Acompañamiento vocacional.</strong></div></li>
          <li><div><strong>[[postulantado|Postulantado]].</strong></div></li>
          <li><div><strong>[[noviciado|Noviciado]].</strong></div></li>
          <li><div><strong>[[votos-temporales|Votos temporales]].</strong></div></li>
          <li><div><strong>[[votos-solemnes|Profesión solemne]].</strong></div></li>
        </ol>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Buenos Aires:</strong> el registro mundial de la Orden lista la Iglesia Santísima Trinidad, en la Ciudad de Buenos Aires. ${MK.v}</li>
          <li><strong>Historia reciente:</strong> los trinitarios estuvieron entre los primeros en impulsar los grupos de oración carismáticos en la Argentina. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré presencia trinitaria en Mendoza ni el detalle de las comunidades actuales en el país.</p>` }
    ],
    compartir:{
      frases:[
        ["Gloria a ti, Trinidad, y a los cautivos libertad.","Lema trinitario"],
        ["La libertad, Sancho, es uno de los más preciosos dones que a los hombres dieron los cielos.","Miguel de Cervantes, Don Quijote II, 58 (escrito por quien fue rescatado por los trinitarios)"],
        ["El Espíritu del Señor… me envió a anunciar la liberación a los cautivos.","Lucas 4,18"]
      ],
      anecdotas:[
        ["El rescate de Cervantes","Miguel de Cervantes fue capturado por piratas en 1575 y pasó cinco años en Argel. Intentó escaparse cuatro veces. En 1580, cuando ya lo iban a llevar a Constantinopla, el trinitario fray Juan Gil reunió el dinero y pagó su rescate. Sin ese gesto, quizás no existiría el Quijote. ${MK.g}"],
        ["La visión de los dos cautivos","Según la tradición, en su primera misa Juan de Mata vio a Cristo con dos cautivos, uno blanco y otro negro, uno cristiano y otro musulmán. Entendió que la liberación es para todos. ${MK.t}"],
        ["El ciervo de la cruz","Otra tradición cuenta que Juan y Félix vieron en el bosque de Cerfroid un ciervo con una cruz roja y azul entre los cuernos. Por eso el ciervo aparece en la iconografía trinitaria. ${MK.t}"]
      ],
      preguntas:[
        "¿Qué “cadenas” ves hoy en las personas de tu edad: adicciones, miedos, presiones, soledad?",
        "La Trinidad es comunión. ¿Tus relaciones liberan a los demás o los atan?",
        "Cervantes escribió que la libertad es uno de los dones más preciosos. ¿Para qué usás tu libertad?",
        "¿Conocés la situación de los cristianos perseguidos en el mundo? ¿Qué podrías hacer?"
      ],
      dinamica:"Investigar en grupo la situación de un país donde los cristianos son perseguidos, preparar una breve oración por ellos y rezarla juntos, con un signo: una vela encendida y una cadena rota en el centro."
    },
    fuentes:[
      ["GCatholic — Orden de la Santísima Trinidad (datos 2024)","https://gcatholic.org/orders/102"],
      ["Orden Trinitaria — Historia","https://www.trinitari.org/en/history/"],
      ["Zenit (2014) — Orígenes de la Renovación Carismática en Argentina","https://es.zenit.org/articles/bergoglio-acabo-viendo-en-la-renovacion-carismatica-una-corriente-de-gracia"]
    ]
  },

  /* ---------------------------------------------------- MÍNIMOS */
  minimos: {
    familia:"mendicante",
    nombre:"Mínimos",
    latin:"Orden de los Mínimos · Ordo Minimorum",
    resumen:"San Francisco de Paula, un ermitaño calabrés que empezó a vivir en una cueva a los quince años, quiso que sus seguidores fueran “los más pequeños de todos”, todavía más que los franciscanos, que se llamaban menores. Les pidió un voto propio: vivir toda la vida como en Cuaresma. Un rey de Francia lo llamó para que lo acompañara al morir. Es una de las órdenes más pequeñas de la Iglesia.",
    tarjeta:"Humildad radical y “vida cuaresmal” perpetua. San Francisco de Paula, patrono de la gente de mar.",
    lema:["Charitas","“Caridad”. Palabra que, según la tradición, un ángel mostró a San Francisco de Paula."],
    habito:[["Marrón oscuro","oklch(0.32 0.04 55)"],["Negro (cordón)","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","O.M."],
      ["Fundador","San Francisco de Paula (1416 – 1507)"],
      ["Fundación","1435, Calabria (Italia)"],
      ["Voto propio","Vida cuaresmal perpetua"],
      ["Tamaño","166 miembros y 40 casas (fines de 2024)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Orden de los Mínimos</strong> (O.M.). “Mínimos” quiere decir “los más pequeños”: un paso más que los franciscanos, que se llamaban “menores”. ${MK.g}</p>
        <p>Es una orden pequeña: a fines de 2024 tenía 166 miembros (116 sacerdotes) en 40 casas. ${MK.v} La familia incluye monjas mínimas de clausura y una tercera orden de laicos.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"g", html:`
        <p><strong>San Francisco de Paula</strong> nació en 1416 en Paola, Calabria (sur de Italia). Sus padres le pusieron el nombre de San Francisco de Asís en agradecimiento por su nacimiento.</p>
        <ul class="dots">
          <li><strong>A los 15 años</strong> se retira a vivir como ermitaño en una cueva cerca de Paola.</li>
          <li><strong>1435:</strong> se le unen los primeros compañeros. Es la fecha de fundación. ${MK.v}</li>
          <li><strong>1474:</strong> el papa Sixto IV aprueba la comunidad.</li>
          <li><strong>1483:</strong> el rey Luis XI de Francia, enfermo, pide al Papa que le envíe al santo. Francisco va a Francia y lo acompaña hasta su muerte. Se queda allí el resto de su vida.</li>
          <li><strong>2 de abril de 1507:</strong> muere en Plessis-lès-Tours. Es canonizado en 1519, apenas doce años después.</li>
        </ul>
        <p class="note">El año de fundación está verificado. Las demás fechas son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1435</span><div class="ev"><b>Calabria</b>Primeros compañeros. ${MK.v}</div></li>
          <li><span class="y">1474</span><div class="ev"><b>Aprobación</b>Sixto IV.</div></li>
          <li><span class="y">1483</span><div class="ev"><b>Francia</b>Llamado por Luis XI.</div></li>
          <li><span class="y">1506</span><div class="ev"><b>Regla definitiva</b>El papa Julio II aprueba la Regla con el voto de vida cuaresmal.</div></li>
          <li><span class="y">1507</span><div class="ev"><b>Muere el fundador</b>en Francia.</div></li>
          <li><span class="y">s. XVI</span><div class="ev"><b>Expansión</b>La orden llega a tener cientos de conventos en Europa. Entre sus frailes estuvo el matemático Marin Mersenne.</div></li>
          <li><span class="y">1943</span><div class="ev"><b>Patrono de la gente de mar</b>Pío XII lo nombra patrono de los marinos italianos.</div></li>
        </ol>
        <p class="note">Salvo 1435, las fechas son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma de los mínimos es la <strong>penitencia evangélica</strong>, vivida con humildad y caridad. Es una conversión continua, que se expresa en un voto propio:</p>
        <div class="box" style="margin-top:12px"><h3>El cuarto voto: vida cuaresmal</h3><p>Además de pobreza, castidad y obediencia, los mínimos se comprometen a vivir toda la vida con la austeridad de la Cuaresma, absteniéndose de carne y de lácteos y huevos. Ver [[vida-cuaresmal|vida cuaresmal]].</p></div>
        <div class="cols">
          <div class="box"><h3>Humildad</h3><p>Ser los últimos, los más pequeños.</p></div>
          <div class="box"><h3>Caridad</h3><p>“Charitas” es la palabra que resume todo.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>La conversión:</strong> la penitencia no es castigo, sino volver a Dios con todo el corazón.</li>
          <li><strong>La confianza en Dios</strong>, de la que nacen los muchos milagros atribuidos al fundador.</li>
          <li><strong>La caridad</strong> concreta con los pobres y los enfermos.</li>
          <li><strong>El ayuno</strong> como forma de libertad interior y de solidaridad.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Parroquias y santuarios</strong>, en especial el santuario de San Francisco de Paula en Paola.</li>
          <li><strong>Predicación de la conversión</strong> y confesión.</li>
          <li><strong>Atención a la gente de mar.</strong></li>
          <li><strong>Presencia</strong> en Italia, Brasil y otros países. ${MK.v}</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica de lana oscura</strong>, marrón o negra, con capucha corta.</li>
          <li><strong>Cordón negro</strong> en la cintura.</li>
          <li><strong>El escudo</strong> con la palabra <em>Charitas</em> rodeada de rayos.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Francisco de Paula</b><span class="d">1416 – 1507 · Italia y Francia</span><p>Fundador. Ermitaño, taumaturgo, consejero de reyes. Patrono de Calabria y de la gente de mar.</p><div class="tags"><span>Fundador</span></div></div>
          <div class="saint"><b>Beato Nicolás de Longobardi</b><span class="d">1650 – 1709 · Italia</span><p>Hermano mínimo, humilde y servidor.</p><div class="tags"><span>Hermano</span></div></div>
          <div class="saint"><b>Beato Gaspar de Bono</b><span class="d">1530 – 1604 · Valencia</span><p>Soldado que se hizo mínimo y llegó a superior en España.</p><div class="tags"><span>Converso</span></div></div>
          <div class="saint"><b>Marin Mersenne</b><span class="d">1588 – 1648 · Francia</span><p>Fraile mínimo, matemático y amigo de Descartes. Hay números primos que llevan su nombre.</p><div class="tags"><span>Ciencia</span></div></div>
        </div>
        <p class="note">Fechas de conocimiento general. Marin Mersenne no es santo; lo incluyo como dato curioso.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano, con el cuarto voto.</p></div>
          <div class="box"><h3>Como monja</h3><p>Monjas mínimas de clausura.</p></div>
          <div class="box"><h3>Como laico</h3><p>Tercera Orden de los Mínimos.</p></div>
          <div class="box"><h3>Desde la Argentina</h3><p>Al no haber presencia confirmada en el país, el contacto sería con las casas de Brasil o Italia.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"p", html:`
        <p>El registro mundial de la Orden lista iglesias en Italia y Brasil, y no menciona la Argentina. ${MK.v}</p>
        <p class="note">${MK.p} No encontré presencia de los Mínimos en la Argentina ni en Mendoza. Puede haber devoción a San Francisco de Paula en algunas parroquias, sobre todo de colectividades italianas, pero no comunidades de la Orden.</p>` }
    ],
    compartir:{
      frases:[
        ["Charitas.","Lema de la Orden de los Mínimos"],
        ["Conviértanse y crean en el Evangelio.","Marcos 1,15"],
        ["Para quien ama a Dios, todo es posible.","Atribuida a San Francisco de Paula"]
      ],
      anecdotas:[
        ["El cruce sobre el manto","La tradición cuenta que, como un barquero no quiso llevarlo a Sicilia porque no tenía dinero, Francisco extendió su manto sobre el mar y cruzó el estrecho de Mesina navegando sobre él. Por eso es patrono de la gente de mar. ${MK.t}"],
        ["El rey que tenía miedo de morir","Luis XI de Francia estaba gravemente enfermo y quería un milagro. Francisco no lo curó, pero lo ayudó a prepararse para morir en paz. ${MK.g}"],
        ["Las monedas que sangraban","Se cuenta que Francisco partió una moneda que le ofrecía el rey de Nápoles y salió sangre, como signo de la sangre de los pobres de los que el rey cobraba impuestos injustos. ${MK.t}"]
      ],
      preguntas:[
        "¿Qué significa para vos ser “pequeño” en un mundo que valora ser el primero?",
        "La Cuaresma dura cuarenta días. ¿Te animarías a vivir con más austeridad todo el año? ¿En qué?",
        "Francisco no curó al rey, pero lo ayudó a morir en paz. ¿Qué es más importante para vos: que Dios cambie las cosas o que te acompañe en ellas?",
        "¿Dónde ves injusticias que pesan sobre los pobres?"
      ],
      dinamica:"Un “ayuno de mínimos” de una semana: cada uno elige algo concreto para dejar (redes, un gusto, una comida) y dona a alguien lo que ahorra en dinero o en tiempo. Al final se comparte qué se aprendió."
    },
    fuentes:[
      ["GCatholic — Orden de los Mínimos (datos 2024)","https://gcatholic.org/orders/099"],
      ["New Advent — Minims","https://www.newadvent.org/cathen/10325a.htm"]
    ]
  },

  /* ---------------------------------------------------- SIERVOS DE MARÍA */
  servitas: {
    familia:"mendicante",
    nombre:"Siervos de María",
    latin:"Orden de los Frailes Siervos de María · Servitas",
    resumen:"Siete comerciantes de Florencia, amigos y miembros de una cofradía mariana, dejaron sus negocios en 1233 para vivir juntos en pobreza y oración, al servicio de la Virgen. Se retiraron al Monte Senario. Su espiritualidad está centrada en María al pie de la cruz, la Dolorosa, que acompaña a todos los que sufren.",
    tarjeta:"María al pie de la cruz: compañía a los que sufren. Los Siete Santos Fundadores de Florencia.",
    lema:["Stabat Mater","“Estaba la Madre” junto a la cruz (Juan 19,25)."],
    habito:[["Negro","oklch(0.2 0.01 260)"]],
    datos:[
      ["Siglas","O.S.M."],
      ["Fundadores","Los Siete Santos Fundadores"],
      ["Fundación","15 de agosto de 1233, Florencia"],
      ["Tamaño","737 miembros y 125 casas (fines de 2024)"],
      ["Fiesta","17 de febrero (fundadores); 15 de septiembre (Dolorosa)"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>El nombre oficial es <strong>Orden de los Frailes Siervos de María</strong> (O.S.M.). Popularmente, <strong>servitas</strong>. A fines de 2024 tenía 737 miembros (502 sacerdotes) en 125 casas. ${MK.v}</p>
        <p>La familia servita incluye monjas contemplativas, muchas congregaciones de hermanas, una orden seglar y grupos laicos.</p>` },

      { id:"fundador", titulo:"Fundadores y año", estado:"v", html:`
        <p>Los fundadores son <strong>siete florentinos</strong>: Alejo Falconieri, Ricovero, Gerardino, Benito dell’Antella, Bartolomé, Bonfilio Monaldi y Juan Manetti. ${MK.v}</p>
        <ul class="dots">
          <li><strong>15 de agosto de 1233:</strong> según la tradición, en la fiesta de la Asunción la Virgen los llama a dejar todo. ${MK.v}</li>
          <li><strong>Monte Senario:</strong> se retiran a este monte cerca de Florencia para vivir en oración y penitencia.</li>
          <li><strong>1304:</strong> el papa Benedicto XI aprueba definitivamente la Orden.</li>
          <li><strong>1888:</strong> León XIII canoniza a los siete juntos.</li>
        </ul>
        <p class="note">La fecha de 1233 y los nombres están verificados; los demás datos son de conocimiento general.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"g", html:`
        <ol class="timeline">
          <li><span class="y">1233</span><div class="ev"><b>Florencia</b>Siete comerciantes dejan todo. ${MK.v}</div></li>
          <li><span class="y">1245</span><div class="ev"><b>Monte Senario</b>Primera comunidad estable.</div></li>
          <li><span class="y">1267</span><div class="ev"><b>Felipe Benizi</b>Es elegido superior general y salva a la Orden de su posible supresión.</div></li>
          <li><span class="y">1304</span><div class="ev"><b>Aprobación definitiva</b></div></li>
          <li><span class="y">1888</span><div class="ev"><b>Canonización conjunta</b>de los siete fundadores.</div></li>
          <li><span class="y">Hoy</span><div class="ev"><b>Argentina</b>El registro mundial de la Orden lista la Iglesia Soledad de María Santísima, en Buenos Aires. ${MK.v}</div></li>
        </ol>
        <p class="note">Salvo 1233 y el dato argentino, las fechas son de conocimiento general.</p>` },

      { id:"carisma", titulo:"Carisma principal", estado:"g", html:`
        <p>El carisma servita es <strong>servir a Dios y a las personas al estilo de María</strong>, en especial de María junto a la cruz.</p>
        <div class="cols">
          <div class="box"><h3>Servicio</h3><p>Ser “siervos”, como María se llamó a sí misma: “Aquí está la servidora del Señor”.</p></div>
          <div class="box"><h3>Fraternidad</h3><p>Nacieron de un grupo de amigos; la vida común es central.</p></div>
          <div class="box"><h3>La Dolorosa</h3><p>Estar al pie de las “cruces” de hoy, acompañando a los que sufren.</p></div>
          <div class="box"><h3>Mendicantes</h3><p>Pobreza y presencia en las ciudades, cerca de la gente.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"g", html:`
        <ul class="dots">
          <li><strong>Los siete dolores de María</strong> y el [[rosario-dolores|Rosario de los siete dolores]].</li>
          <li><strong>El <em>Stabat Mater</em></strong>, el himno medieval de la Virgen junto a la cruz.</li>
          <li><strong>La Vía Matris</strong>, un camino de oración paralelo al Vía Crucis, acompañando a María.</li>
          <li><strong>El sábado</strong> dedicado a la Virgen.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"g", html:`
        <ul class="dots">
          <li><strong>Parroquias y santuarios marianos.</strong></li>
          <li><strong>Pastoral de enfermos</strong> y de quienes viven duelos.</li>
          <li><strong>Estudios marianos:</strong> la Facultad Teológica Marianum, en Roma, está a cargo de los servitas.</li>
          <li><strong>Misiones</strong> en África, América y Asia.</li>
        </ul>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`
        <ul class="dots">
          <li><strong>Túnica, escapulario y capucha negros</strong>, con cinturón de cuero, en señal de duelo por los dolores de María.</li>
        </ul>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>Siete Santos Fundadores</b><span class="d">siglo XIII · Florencia</span><p>Comerciantes amigos que dejaron todo. Canonizados juntos en 1888.</p><div class="tags"><span>Fundadores</span></div></div>
          <div class="saint"><b>San Felipe Benizi</b><span class="d">1233 – 1285 · Italia</span><p>Médico que se hizo hermano servita y llegó a superior general. Rechazó ser elegido papa.</p><div class="tags"><span>Médico</span></div></div>
          <div class="saint"><b>Santa Juliana Falconieri</b><span class="d">1270 – 1341 · Florencia</span><p>Sobrina de San Alejo, fundadora de las religiosas servitas.</p><div class="tags"><span>Fundadora</span></div></div>
          <div class="saint"><b>San Peregrino Laziosi</b><span class="d">c. 1265 – 1345 · Italia</span><p>Joven violento que se convirtió. Curado de un cáncer en la pierna según la tradición, es patrono de los enfermos de cáncer.</p><div class="tags"><span>Patrono del cáncer</span></div></div>
        </div>
        <p class="note">Fechas y datos de conocimiento general; Felipe Benizi rechazando el papado es tradición.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano servita.</p></div>
          <div class="box"><h3>Como monja o hermana</h3><p>Monjas servitas o congregaciones de hermanas.</p></div>
          <div class="box"><h3>Como laico</h3><p>Orden Seglar de los Siervos de María.</p></div>
          <div class="box"><h3>Rezando</h3><p>El Rosario de los siete dolores es una práctica sencilla para empezar.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Buenos Aires:</strong> Iglesia Soledad de María Santísima, listada por el registro de la Orden. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré otras comunidades servitas en la Argentina ni presencia en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["Junto a la cruz de Jesús estaba su madre.","Juan 19,25"],
        ["Aquí está la servidora del Señor.","Lucas 1,38"],
        ["Y a ti, una espada te atravesará el alma.","Lucas 2,35 (profecía de Simeón, primer dolor de María)"]
      ],
      anecdotas:[
        ["Siete amigos","Los fundadores eran comerciantes ricos de Florencia y amigos de una cofradía mariana. Dejaron sus negocios a la vez. La amistad fue el origen de la Orden. ${MK.g}"],
        ["El papa que se escondió","Cuenta la tradición que, cuando los cardenales quisieron elegir papa a Felipe Benizi, él se escondió en una montaña hasta que eligieron a otro. ${MK.t}"],
        ["La pierna de Peregrino","Peregrino Laziosi tenía un tumor en la pierna y se la iban a amputar. Rezó toda la noche ante un crucifijo y, según la tradición, a la mañana estaba sano. ${MK.t}"]
      ],
      preguntas:[
        "¿A quién acompañás en un momento de dolor, aunque no puedas solucionar nada?",
        "María estuvo al pie de la cruz sin escapar. ¿De qué dolores ajenos tendés a escapar?",
        "Los fundadores eran amigos. ¿Tu amistad con otros te ayuda a acercarte a Dios?",
        "¿Conocés a alguien que esté pasando por una enfermedad grave? ¿Cómo podrías acompañarlo?"
      ],
      dinamica:"Rezar juntos la Vía Matris o el Rosario de los siete dolores, y en cada dolor nombrar a una persona concreta que esté sufriendo algo parecido (una pérdida, una enfermedad, un hijo lejos)."
    },
    fuentes:[
      ["GCatholic — Orden de los Siervos de María (datos 2024)","https://gcatholic.org/orders/037"],
      ["ACI Prensa — Los siete santos fundadores de los Siervos de María","https://www.aciprensa.com/noticias/hoy-se-conmemora-a-los-siete-santos-fundadores-de-la-orden-siervos-de-maria-13784"],
      ["ACI Prensa — San Felipe Benizi","https://www.aciprensa.com/noticias/95337/san-felipe-benizi-quien-lucho-por-la-santidad-de-su-orden-religiosa"]
    ]
  },

  /* ---------------------------------------------------- AGUSTINOS RECOLETOS */
  recoletos: {
    familia:"mendicante",
    nombre:"Agustinos Recoletos",
    latin:"Ordo Augustinianorum Recollectorum · O.A.R.",
    resumen:"Nacieron en 1588 dentro de los agustinos de España, como un grupo que quería vivir con más oración, recogimiento y pobreza. En 1912 la Iglesia los reconoció como orden propia. Fueron muy misioneros, sobre todo en Filipinas, y en la Argentina están desde 1925.",
    tarjeta:"Amor a Dios sin condiciones, en comunidad, al estilo de San Agustín. En la Argentina desde 1925.",
    lema:["Amar a Dios sin condición","Así resume la Orden su carisma."],
    habito:[["Negro","oklch(0.2 0.01 260)"],["Correa de cuero","oklch(0.35 0.04 50)"]],
    datos:[
      ["Nombre","Orden de Agustinos Recoletos"],
      ["Origen","Capítulo de Toledo, 1588 (España)"],
      ["Orden autónoma","Desde 1912"],
      ["En el mundo","209 parroquias, 53 centros educativos, 8 territorios de misión"],
      ["En la Argentina","Desde 1925"]
    ],
    secciones:[
      { id:"nombre", titulo:"Nombre", estado:"v", html:`
        <p>Se llaman <strong>Agustinos Recoletos</strong> y firman con la sigla <strong>O.A.R.</strong> “Recoleto” viene de <em>recolección</em>: recogerse, vivir hacia adentro, con más silencio y oración. Ver también [[agustinos-recoletos|agustinos recoletos]] en el glosario. ${MK.v}</p>
        <p>Comparten la [[regla|Regla]] y la espiritualidad de San Agustín con los <a href="#agustinos">agustinos</a>, de quienes nacieron.</p>` },

      { id:"fundador", titulo:"Fundador y año", estado:"v", html:`
        <p>No tienen un único fundador. Se consideran herederos de <strong>San Agustín</strong> (354 – 430) y de la Orden de San Agustín. ${MK.v}</p>
        <ul class="dots">
          <li><strong>1588:</strong> el Capítulo de la provincia agustina de Castilla, reunido en Toledo, decide que algunas casas vivan una forma más austera y recogida. Así nace la “recolección”. ${MK.v}</li>
          <li><strong>1605:</strong> sale la primera expedición misionera a Filipinas. ${MK.v}</li>
          <li><strong>1912:</strong> la Iglesia los reconoce como orden religiosa autónoma. ${MK.v}</li>
        </ul>
        <p class="note">Suele mencionarse a fray Luis de León entre los que impulsaron la reforma; es un dato de conocimiento general que no verifiqué.</p>` },

      { id:"historia", titulo:"Historia y origen", estado:"v", html:`
        <ol class="timeline">
          <li><span class="y">1256</span><div class="ev"><b>Gran Unión</b>Nace la Orden de San Agustín como orden [[mendicante|mendicante]]. ${MK.v}</div></li>
          <li><span class="y">1588</span><div class="ev"><b>Toledo</b>Comienza la recolección agustiniana. ${MK.v}</div></li>
          <li><span class="y">1605</span><div class="ev"><b>Filipinas</b>Primera misión. ${MK.v}</div></li>
          <li><span class="y">1912</span><div class="ev"><b>Orden propia</b>Reconocimiento como orden autónoma. ${MK.v}</div></li>
          <li><span class="y">1925</span><div class="ev"><b>Argentina</b>Tres religiosos llegados de Brasil y España fundan las primeras comunidades en Buenos Aires, Santa Fe y Rosario. ${MK.v}</div></li>
          <li><span class="y">1939</span><div class="ev"><b>Seminario</b>Fundan un seminario en la Argentina, el de Gándara. ${MK.v}</div></li>
          <li><span class="y">2025</span><div class="ev"><b>Centenario</b>Cien años en el país. El prior general visita las comunidades argentinas. ${MK.v}</div></li>
        </ol>` },

      { id:"carisma", titulo:"Carisma principal", estado:"v", html:`
        <p>La Orden resume su [[carisma|carisma]] en <strong>“el amor a Dios sin condición”</strong>, que une a los hermanos en comunidad y se extiende a todas las personas para unirlas en Cristo. ${MK.v}</p>
        <div class="cols">
          <div class="box"><h3>Amor contemplativo</h3><p>Buscar a Dios en la oración y en la [[interioridad|interioridad]].</p></div>
          <div class="box"><h3>Amor comunitario</h3><p>Vivir como hermanos, “con una sola alma y un solo corazón”.</p></div>
          <div class="box"><h3>Amor apostólico</h3><p>Llevar ese amor a los demás en parroquias, escuelas y misiones.</p></div>
        </div>` },

      { id:"espiritualidad", titulo:"Espiritualidad", estado:"v", html:`
        <ul class="dots">
          <li><strong>San Agustín:</strong> la búsqueda de Dios dentro de uno mismo y la amistad como camino.</li>
          <li><strong>La comunidad:</strong> organizan la vida diaria con un proyecto común, el <em>Ordo domesticus</em>, que fija los tiempos de oración, convivencia y servicio. ${MK.v}</li>
          <li><strong>El recogimiento:</strong> lo propio de la recolección es el silencio, la sencillez y la austeridad.</li>
        </ul>` },

      { id:"mision", titulo:"Misión y apostolados", estado:"v", html:`<p>Parroquias, colegios y misiones. Hay religiosos sacerdotes y religiosos hermanos. ${MK.v}</p>` },

      { id:"habito", titulo:"Hábito y vestimenta", estado:"g", html:`<p>Hábito negro con capucha y correa de cuero en la cintura, como los demás agustinos.</p><p class="note">Dato de conocimiento general.</p>` },

      { id:"santos", titulo:"Santos vinculados", estado:"g", html:`
        <div class="saints">
          <div class="saint"><b>San Agustín</b><span class="d">354 – 430 · Hipona</span><p>Padre espiritual de la familia agustiniana.</p><div class="tags"><span>Padre</span><span>Doctor</span></div></div>
          <div class="saint"><b>San Ezequiel Moreno</b><span class="d">1848 – 1906 · España y Colombia</span><p>Recoleto misionero en Filipinas y Colombia, obispo de Pasto. Canonizado en 1992.</p><div class="tags"><span>Misionero</span></div></div>
          <div class="saint"><b>Santa Magdalena de Nagasaki</b><span class="d">† 1634 · Japón</span><p>Terciaria recoleta japonesa, mártir. Canonizada en 1987.</p><div class="tags"><span>Mártir</span><span>Laica</span></div></div>
        </div>
        <p class="note">Datos de conocimiento general; no los verifiqué en las fuentes de esta ficha.</p>` },

      { id:"formar-parte", titulo:"Cómo formar parte", estado:"g", html:`
        <div class="cols">
          <div class="box"><h3>Como fraile</h3><p>Sacerdote o hermano, con vida de comunidad.</p></div>
          <div class="box"><h3>Como laico</h3><p>Fraternidades seglares agustino-recoletas y grupos parroquiales.</p></div>
          <div class="box"><h3>Jóvenes</h3><p>Pastoral juvenil en sus parroquias y colegios.</p></div>
          <div class="box"><h3>Misiones</h3><p>Voluntariado en sus territorios de misión.</p></div>
        </div>` },

      { id:"presencia", titulo:"Presencia en Argentina y Mendoza", estado:"v", html:`
        <ul class="dots">
          <li><strong>Argentina:</strong> seis comunidades que forman el Vicariato de Argentina, de la Provincia de Santo Tomás de Villanueva. ${MK.v}</li>
          <li><strong>Ciudades:</strong> Buenos Aires (comunidad de Nuestra Señora de la Consolación), San Andrés, Rosario (comunidad de Nuestra Señora de Luján), Santa Fe (parroquia San José y una escuela primaria) y Mar del Plata. ${MK.v}</li>
          <li><strong>Cafayate (Salta):</strong> el prior general también la visitó en 2025. ${MK.v}</li>
        </ul>
        <p class="note">${MK.p} No encontré comunidades recoletas en Mendoza.</p>` }
    ],
    compartir:{
      frases:[
        ["Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.","San Agustín, Confesiones I,1"],
        ["No quieras derramarte fuera; entra dentro de ti mismo: en el hombre interior habita la verdad.","San Agustín, De la verdadera religión"],
        ["Tenían una sola alma y un solo corazón.","Hechos 4,32"]
      ],
      anecdotas:[
        ["Una reforma desde adentro","Los recoletos no se separaron de los agustinos para criticarlos, sino para vivir más a fondo lo mismo. Pasaron más de trescientos años hasta que se convirtieron en una orden propia. ${MK.v}"]
      ],
      preguntas:[
        "¿Qué significa amar a Dios “sin condición”? ¿Le ponés condiciones vos?",
        "¿Tenés momentos de silencio para “entrar dentro de vos”?",
        "¿Qué te inquieta el corazón? ¿Dónde buscás descanso?",
        "¿Cómo sería tu grupo si de verdad tuviera “una sola alma y un solo corazón”?"
      ],
      dinamica:"Cinco minutos de silencio total, con una vela encendida y la frase de las Confesiones escrita en el centro. Después cada uno escribe, sin compartirlo, qué cosas le inquietan el corazón, y se las entrega a Dios en una oración final."
    },
    fuentes:[
      ["Catholic.net — Orden de Agustinos Recoletos","https://es.catholic.net/op/articulos/47919/cat/35/orden-de-agustinos-recolectos.html"],
      ["Agustinos Recoletos — Visita del prior general a la Argentina (2025)","https://agustinosrecoletos.com/2025/04/01/prior-general-begins-renewal-visit-to-communities-in-argentina/?lang=en"],
      ["Agustinos Recoletos — Noticias de Argentina","https://agustinosrecoletos.com/tag/argentina/?lang=en"]
    ]
  }

});
