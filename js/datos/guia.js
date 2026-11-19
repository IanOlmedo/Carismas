/* =========================================================
   GUÍA DE DISCERNIMIENTO — "¿Por dónde empiezo?" (#discernir)
   Mismo formato de secciones que una ficha: { id, titulo, estado, html }.
   Las citas se contrastaron el 18 de noviembre de 2026 con las fuentes de GUIA.fuentes.
   Los consejos prácticos son sugerencias generales (MK.g), no normas de la Iglesia.
   ========================================================= */

const GUIA = {
  titulo: "¿Por dónde empiezo?",
  resumen: "Una guía simple para [[discernimiento|discernir]] tu vocación: rezar, hacerte las buenas preguntas, buscar quien te acompañe, hacer un retiro, conocer comunidades de cerca y dar pasos sin apuro. No hay recetas, pero sí un camino que muchos ya recorrieron.",
  lema: ["Vengan y vean.", "Juan 1,39"],

  secciones: [
    { id: "que-es", titulo: "Qué es discernir", estado: "v", html: `
      <p>[[discernimiento|Discernir]] es aprender a distinguir qué viene de Dios y qué no, para elegir lo mejor. Cuando se trata de la vocación, el papa Francisco lo explica así: «aunque incluya la razón y la prudencia, las supera, porque se trata de entrever el misterio del proyecto único e irrepetible que Dios tiene para cada uno» (<i>Christus vivit</i>, 280). ${MK.v}</p>
      <p>Y propone cambiar la pregunta de fondo: en vez de pasarse la vida preguntando “¿quién soy yo?”, preguntarse <b>“¿para quién soy yo?”</b> (<i>Christus vivit</i>, 286). ${MK.v}</p>
      <p>No es algo solo para momentos de crisis: «El discernimiento no solo es necesario en momentos extraordinarios […]. Es un instrumento de lucha para seguir mejor al Señor» (<i>Gaudete et exsultate</i>, 169). Y es, también, «un don que hay que pedir» (<i>Gaudete et exsultate</i>, 166). ${MK.v}</p>
      <p class="note">El punto de partida no es una decisión sino una amistad: «Lo fundamental es discernir y descubrir que lo que quiere Jesús de cada joven es ante todo su amistad» (<i>Christus vivit</i>, 250). ${MK.v}</p>` },

    { id: "rezar", titulo: "1. Rezar, con tiempo y en silencio", estado: "v", html: `
      <p>Reconocer la propia vocación «es una tarea que requiere espacios de soledad y silencio, porque se trata de una decisión muy personal que otros no pueden tomar por uno» (<i>Christus vivit</i>, 283). ${MK.v}</p>
      <p>Algunas ideas para empezar. Son sugerencias comunes, no reglas: ${MK.g}</p>
      <ul class="dots">
        <li>Un rato fijo cada día, aunque sean diez minutos, siempre a la misma hora.</li>
        <li>Leer despacio el Evangelio del día y quedarte con una frase: es la [[lectio|lectio divina]].</li>
        <li>La misa y la [[adoracion|adoración]] eucarística, sin apuro.</li>
        <li>A la noche, el [[examen|examen]]: no se trata solo de ver lo que hiciste mal, sino «también de reconocer la obra de Dios en la propia experiencia cotidiana» (<i>Christus vivit</i>, 282). ${MK.v}</li>
        <li>Anotar en un cuaderno qué te dejó paz y alegría honda, y qué te dejó vacío o inquieto. Con el tiempo aparecen patrones.</li>
      </ul>` },

    { id: "preguntas", titulo: "2. Hacerte las buenas preguntas", estado: "v", html: `
      <p>Francisco aconseja no empezar por dónde se gana más dinero, dónde hay más fama o qué da más placer, sino por estas preguntas (<i>Christus vivit</i>, 285): ${MK.v}</p>
      <ol class="steps">
        <li><span>¿Me conozco a mí mismo, más allá de las apariencias o de mis sensaciones?</span></li>
        <li><span>¿Conozco lo que alegra o entristece mi corazón?</span></li>
        <li><span>¿Cuáles son mis fortalezas y mis debilidades?</span></li>
        <li><span>¿Cómo puedo servir mejor y ser más útil al mundo y a la Iglesia?</span></li>
        <li><span>¿Cuál es mi lugar en esta tierra? ¿Qué podría ofrecer yo a la sociedad?</span></li>
        <li><span>¿Tengo las capacidades necesarias para prestar ese servicio? ¿Podría adquirirlas y desarrollarlas?</span></li>
      </ol>
      <p class="note">Y algo que conviene no saltear: «En el discernimiento de una vocación no hay que descartar la posibilidad de consagrarse a Dios en el sacerdocio, en la vida religiosa o en otras formas de consagración. ¿Por qué excluirlo?» (<i>Christus vivit</i>, 276). ${MK.v}</p>` },

    { id: "acompanante", titulo: "3. Buscar quien te acompañe", estado: "v", html: `
      <p>Nadie discierne bien solo. El [[acompanamiento-espiritual|acompañamiento espiritual]] lo pueden hacer «sacerdotes, religiosos, religiosas, laicos, profesionales, e incluso jóvenes capacitados» (<i>Christus vivit</i>, 291). ${MK.v}</p>
      <p>Según <i>Christus vivit</i> (291-296), un buen acompañante: ${MK.v}</p>
      <ul class="dots">
        <li><b>Te escucha a vos</b>, con tiempo, «sin ofenderme, sin escandalizarme, sin molestarme, sin cansarme» (292).</li>
        <li><b>Te ayuda a distinguir</b> lo que es gracia de lo que es tentación (293).</li>
        <li><b>Mira hacia adelante</b>: «hacia dónde quiere ir verdaderamente el otro» (294).</li>
        <li><b>Sabe correrse</b>: «en algún momento tiene que desaparecer para dejar que él siga ese camino que ha descubierto» (296). La decisión es tuya.</li>
      </ul>
      <p>¿Cómo encontrar a alguien? Preguntá en tu parroquia, a un sacerdote o una religiosa que conozcas, en tu colegio o en tu movimiento. Es habitual encontrarse cada tanto, por ejemplo una vez por mes, pero no hay una regla fija. ${MK.g}</p>` },

    { id: "retiro", titulo: "4. Hacer un retiro", estado: "g", html: `
      <p>Un [[retiro|retiro]] es salir unos días de la rutina para rezar con más calma. Algunas posibilidades: ${MK.g}</p>
      <div class="cols">
        <div class="box"><h3>Ejercicios Espirituales</h3><p>Los [[ejercicios|Ejercicios]] de San Ignacio son una escuela clásica para aprender a discernir. En la Argentina los difundió Mama Antula. Ver la ficha de los <a href="#jesuitas">jesuitas</a>.</p></div>
        <div class="box"><h3>Retiros de fin de semana</h3><p>Propuestas hechas por laicos para un primer encuentro fuerte con Jesús, como <a href="#emaus">Emaús</a> o los <a href="#cursillos">Cursillos de Cristiandad</a>.</p></div>
        <div class="box"><h3>Retiros y convivencias vocacionales</h3><p>Muchas congregaciones y seminarios organizan jornadas para jóvenes que se hacen la pregunta. Preguntá directamente a la comunidad que te interesa.</p></div>
        <div class="box"><h3>Un día de desierto</h3><p>Si no podés irte varios días, una jornada en silencio en un monasterio o en una casa de retiros ya ayuda. Muchos monasterios tienen [[hospederia|hospedería]].</p></div>
      </div>` },

    { id: "conocer", titulo: "5. Conocer de cerca", estado: "v", html: `
      <p>Así empezaron los primeros discípulos. Jesús no los obligó: «“Vengan y vean” les dijo, y “ellos fueron, vieron donde vivía y se quedaron con Él aquel día”» (<i>Christus vivit</i>, 153, citando Juan 1,39). ${MK.v}</p>
      <p>Leer está bien, pero en algún momento hay que ir: visitar comunidades, pasar unos días, sumarse a una misión o a un voluntariado. Para empezar a buscar, podés hacer la <a href="#brujula">Brújula</a> o mirar el apartado “Cómo formar parte” de cada ficha. ${MK.g}</p>
      <h3 class="gd-h3">Qué preguntarle a una comunidad</h3>
      <p>Son preguntas que sugerimos, no una lista oficial: ${MK.g}</p>
      <ul class="dots">
        <li>¿Cómo es un día normal de ustedes, de la mañana a la noche?</li>
        <li>¿Cuál es su carisma, dicho en pocas palabras? ¿A quiénes sirven?</li>
        <li>¿Cómo es el camino para entrar? ¿Qué etapas tiene y cuánto dura cada una?</li>
        <li>¿Qué edad, estudios o condiciones piden?</li>
        <li>¿Puedo visitarlos o pasar unos días con ustedes?</li>
        <li>¿Dónde están en la Argentina y en Mendoza?</li>
        <li>¿Qué pasa si después de un tiempo me doy cuenta de que no es lo mío?</li>
      </ul>` },

    { id: "pasos", titulo: "6. Dar pasos, sin apuro", estado: "v", html: `
      <p>El discernimiento lleva tiempo: «hay que suscitar y acompañar procesos, no imponer trayectos» (<i>Christus vivit</i>, 297). Cada camino tiene sus etapas: ${MK.v}</p>
      <div class="cols">
        <div class="box"><h3>Vida religiosa</h3><p>Suele empezar con un [[postulantado|postulantado]], que regula cada instituto. ${MK.g} Después viene el [[noviciado|noviciado]], para conocer mejor la vocación y probar el modo de vida del instituto (canon 646). Para entrar hay que tener al menos 17 años (canon 643), y dura como mínimo doce meses y no más de dos años (canon 648). Siguen los [[votos-temporales|votos temporales]], por no menos de tres años ni más de seis y desde los 18 años (cánones 655 y 656). Recién después llega la profesión perpetua (canon 657). ${MK.v}</p></div>
        <div class="box"><h3>Sacerdocio diocesano</h3><p>Se hace en el [[seminario|seminario]]. Las normas de 2016 lo organizan en cuatro etapas: [[propedeutico|propedéutica]], discipular, configuradora y pastoral. ${MK.v} En Mendoza, el Seminario Arquidiocesano “Nuestra Señora del Rosario”. Ver la ficha del <a href="#sacerdote-diocesano">sacerdote diocesano</a>.</p></div>
        <div class="box"><h3>Matrimonio</h3><p>«Es necesario prepararse para el matrimonio, y esto requiere educarse a sí mismo, desarrollar las mejores virtudes, sobre todo el amor, la paciencia, la capacidad de diálogo y de servicio» (<i>Christus vivit</i>, 265). ${MK.v} Ver la ficha del <a href="#matrimonio">matrimonio</a>.</p></div>
        <div class="box"><h3>Institutos seculares y movimientos</h3><p>Cada uno tiene su propio itinerario de formación y sus tiempos. Lo vas a encontrar en “Cómo formar parte” de cada ficha. ${MK.g}</p></div>
      </div>` },

    { id: "libertad", titulo: "Una vocación se elige en libertad", estado: "v", html: `
      <p>«Un buen discernimiento es un camino de libertad que hace aflorar eso único de cada persona» (<i>Christus vivit</i>, 295). Es tan así que el derecho de la Iglesia considera inválida la entrada al noviciado de quien lo hace «inducido por violencia, miedo grave o dolo» (canon 643). ${MK.v}</p>
      <p>Algunas señales para estar atento. Son consejos de sentido común, no una norma: ${MK.g}</p>
      <ul class="dots">
        <li>Que te apuren a decidir o te hagan sentir culpable por dudar.</li>
        <li>Que te pidan cortar con tu familia o tus amigos, o guardar secretos que no podés contar a nadie.</li>
        <li>Que alguien quiera decidir por vos o te diga que, si no entrás, le estás fallando a Dios.</li>
      </ul>
      <p class="note">Si algo te hace ruido, hablalo con otra persona de confianza que no sea de esa comunidad. También podés consultar en el Arzobispado. Pedir una segunda opinión no es falta de fe. ${MK.g}</p>` },

    { id: "mendoza", titulo: "En Mendoza", estado: "g", html: `
      <div class="place"><p>Para la vida religiosa y consagrada, podés consultar a la <b>Vicaría para la Vida Consagrada</b> del Arzobispado de Mendoza. Para el sacerdocio diocesano, al <b>Seminario Arquidiocesano “Nuestra Señora del Rosario”</b> (ver la ficha del <a href="#sacerdote-diocesano">sacerdote diocesano</a>). Y siempre, a tu parroquia. ${MK.g}</p></div>
      <p class="note">No encontré en el sitio del <a href="https://arquimendoza.org.ar/" target="_blank" rel="noopener">Arzobispado de Mendoza</a> una oficina de pastoral vocacional con datos de contacto para publicar acá. Lo más seguro es preguntar en tu parroquia o en el Arzobispado. ${MK.p}</p>` },

    { id: "encuentro", titulo: "Para un encuentro", estado: "v", html: `
      <h3 class="gd-h3">Preguntas para reflexionar</h3>
      <ol class="steps">
        <li><span>Si tuvieras que contestar “¿para quién soy yo?”, ¿qué nombres o qué rostros te aparecen?</span></li>
        <li><span>¿Qué cosas te dan una alegría que dura, y cuáles te dejan vacío al rato?</span></li>
        <li><span>¿Hay algún camino que descartaste sin pensarlo? ¿Por qué?</span></li>
        <li><span>¿Con quién podrías hablar de todo esto?</span></li>
      </ol>
      <h3 class="gd-h3">Una dinámica breve: el regalo del amigo</h3>
      <p>Leer juntos <i>Christus vivit</i> 287: «A los amigos, si se les regala algo, se les regala lo mejor». ${MK.v} Después, cinco minutos en silencio: cada uno escribe tres cosas que lo alegran en lo hondo y tres que lo dejan vacío. En pares, conversan: si la vocación es el regalo de un amigo que conoce lo que te alegra, ¿qué te dice tu lista? Se cierra con un momento de oración en silencio. Es una propuesta nuestra, para adaptar al grupo.</p>` }
  ],

  fuentes: [
    ["Francisco, exhortación apostólica Christus vivit (2019), caps. 8 y 9", "https://www.vatican.va/content/francesco/es/apost_exhortations/documents/papa-francesco_esortazione-ap_20190325_christus-vivit.html"],
    ["Francisco, exhortación apostólica Gaudete et exsultate (2018), cap. 5", "https://www.vatican.va/content/francesco/es/apost_exhortations/documents/papa-francesco_esortazione-ap_20180319_gaudete-et-exsultate.html"],
    ["Sínodo de los Obispos 2018, Documento final: “Los jóvenes, la fe y el discernimiento vocacional”", "https://www.vatican.va/roman_curia/synod/documents/rc_synod_doc_20181027_doc-final-instrumentum-xvassemblea-giovani_sp.html"],
    ["Código de Derecho Canónico, cánones 641-645 (admisión al noviciado)", "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann641-645_sp.html"],
    ["Código de Derecho Canónico, cánones 646-653 (noviciado)", "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann646-653_sp.html"],
    ["Código de Derecho Canónico, cánones 654-658 (profesión religiosa)", "https://www.vatican.va/archive/cod-iuris-canonici/esp/documents/cic_libro2_cann654-658_sp.html"],
    ["Congregación para el Clero, El don de la vocación presbiteral (Ratio fundamentalis, 2016)", "https://www.vatican.va/roman_curia/congregations/cclergy/documents/rc_con_cclergy_doc_20161208_ratio-fundamentalis-institutionis-sacerdotalis_sp.pdf"],
    ["Arzobispado de Mendoza", "https://arquimendoza.org.ar/"]
  ]
};
