/* =========================================================
   RENDER
   ========================================================= */
const $ = s => document.querySelector(s);
const app = $('#app');
const fam = id => FAMILIAS.find(f => f.id === id);
const terms = s => s.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (m, k, txt) =>
  GLOSARIO[k] ? `<button type="button" class="term" data-term="${k}">${txt}</button>` : txt);
const band = f => `<div class="band pat-${f}" aria-hidden="true"></div>`;
/* Sugerencias: van por mail a quien mantiene el sitio. No se publica nada sin que lo revise. */
const MAIL_SUGERENCIAS = 'ianitoolmedo12@gmail.com';
const mailto = (asunto, cuerpo) => `mailto:${MAIL_SUGERENCIAS}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
/* Set de íconos simples (trazo, un solo color) para las 10 secciones de una ficha. Sin imágenes externas. */
const ICONS = {
  nombre: `<svg viewBox="0 0 20 20"><path d="M10 2 17 5v5c0 5-3.5 7.5-7 8-3.5-.5-7-3-7-8V5Z"/></svg>`,
  fundador: `<svg viewBox="0 0 20 20"><path d="M10 17V9"/><path d="M10 9C10 6 7.8 4 4 4c0 3.8 2.2 5.6 6 5Z"/><path d="M10 9c0-3 2.2-5 6-5 0 3.8-2.2 5.6-6 5Z"/></svg>`,
  historia: `<svg viewBox="0 0 20 20"><path d="M5 3h10M5 17h10M5 3c0 4 2.3 5.6 5 7 2.7-1.4 5-3 5-7M5 17c0-4 2.3-5.6 5-7 2.7 1.4 5 3 5 7"/></svg>`,
  carisma: `<svg viewBox="0 0 20 20"><path d="M10 2c3 4 5 7 5 10a5 5 0 1 1-10 0c0-3 2-6 5-10Z"/></svg>`,
  espiritualidad: `<svg viewBox="0 0 20 20"><path d="M10 2v16M6 7h8"/></svg>`,
  mision: `<svg viewBox="0 0 20 20"><path d="M17 3 3 9l6 2 2 6 6-14Z"/><path d="M9 11l8-8"/></svg>`,
  habito: `<svg viewBox="0 0 20 20"><path d="M7 3 4 6v3l2-1v9h8V8l2 1V6l-3-3-2 2-2-2Z"/></svg>`,
  santos: `<svg viewBox="0 0 20 20"><path d="m10 2 2.1 5.6L18 8l-4.5 3.8L15 18l-5-3.4L5 18l1.5-6.2L2 8l5.9-.4Z"/></svg>`,
  "formar-parte": `<svg viewBox="0 0 20 20"><path d="M6 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M4 18h12"/><circle cx="12" cy="11" r=".9" fill="currentColor" stroke="none"/></svg>`,
  presencia: `<svg viewBox="0 0 20 20"><path d="M10 18S4 11.5 4 7.5a6 6 0 0 1 12 0C16 11.5 10 18 10 18Z"/><circle cx="10" cy="7.5" r="2"/></svg>`
};
const secIcon = id => ICONS[id] ? `<span class="sec-ic" aria-hidden="true">${ICONS[id]}</span>` : '';
/* Marca como "media columna" las secciones cortas que van de a dos seguidas, para aprovechar el ancho
   sin cambiar el orden de lectura. */
const isShort = h => h.replace(/<[^>]+>/g,'').replace(/\$\{MK\.\w\}/g,'').trim().length < 420 && !/class="(timeline|saints|cols|steps)"/.test(h);
function pairUp(secs){
  const out = secs.map(s=>({...s, half:false}));
  for(let i=0;i<out.length-1;i++){
    if(isShort(out[i].html) && isShort(out[i+1].html)){ out[i].half = out[i+1].half = true; i++; }
  }
  return out;
}

function rosette(){
  /* Rosetón gótico: una lanceta por familia (hoy ocho) ojivales de vidrio emplomado, óculos dorados entre ellas,
     un anillo de lóbulos y un medallón central con el crismón. Los nombres corren por fuera, sobre la piedra. */
  const C=200, n=FAMILIAS.length, step=2*Math.PI/n, w=.34;
  const vistas=new Set(guardado.leer('fichasVistas')), dias=guardado.leer('rosariosRezados').length;
  const xy=(r,a)=>[C+r*Math.cos(a), C+r*Math.sin(a)];
  const P=(r,a)=>xy(r,a).map(v=>v.toFixed(2)).join(',');
  let segs='', ocs='', lobes='', defs='';
  FAMILIAS.forEach((f,i)=>{
    const a=-Math.PI/2+i*step;
    const d=`M${P(72,a-w)} L${P(122,a-w)} Q${P(150,a-w*.92)} ${P(160,a)} Q${P(150,a+w*.92)} ${P(122,a+w)} L${P(72,a+w)} A72,72 0 0 0 ${P(72,a-w)} Z`;
    const came=`M${P(72,a)} L${P(128,a)} M${P(100,a-w)} A100,100 0 0 1 ${P(100,a+w)}`;
    const [ex,ey]=xy(140,a);
    const words=f.nombre.replace('Órdenes ','').replace('Vida ','').replace('Congregaciones de vida ','').replace('Institutos ','').replace('Movimientos y nuevas comunidades','Movimientos').replace('Canónigos regulares','Canónigos').replace('Clérigos regulares','Clérigos').replace('Vocaciones en la Iglesia diocesana','Diocesana');
    const label=words.charAt(0).toUpperCase()+words.slice(1);
    // texto curvo por fuera; abajo el arco va al revés para que se lea derecho
    const low=Math.sin(a)>0.2, sp=.55, rr=low?189:180;
    const arc=low?`M${P(rr,a+sp)} A${rr},${rr} 0 0 0 ${P(rr,a-sp)}`:`M${P(rr,a-sp)} A${rr},${rr} 0 0 1 ${P(rr,a+sp)}`;
    defs+=`<path id="lb-${f.id}" d="${arc}"/>`;
    const luz=f.fichas.length ? f.fichas.filter(id=>vistas.has(id)).length/f.fichas.length : 0;
    segs+=`<g class="seg${luz>=1?' llena':''}" data-fam="${f.id}" style="--luz:${Math.round(38+62*luz)}%" tabindex="0" role="link" aria-label="${f.nombre}">
      <path class="glass" d="${d}"/><path class="came" d="${came}"/>
      <circle class="eye" cx="${ex.toFixed(2)}" cy="${ey.toFixed(2)}" r="7"/>
      <text><textPath href="#lb-${f.id}" startOffset="50%" text-anchor="middle">${label}</textPath></text></g>`;
    const [ox,oy]=xy(146,a+step/2);
    ocs+=`<circle class="oc${i<dias?' on':''}" cx="${ox.toFixed(2)}" cy="${oy.toFixed(2)}" r="8.5"/>`;
    for(const k of [0,.5]){const b=a+k*step;lobes+=`<path class="lobe" d="M${P(62,b-.2)} A13,13 0 0 1 ${P(62,b+.2)}"/>`;}
  });
  return `<svg viewBox="0 0 400 400" role="img" aria-label="Rosetón de las ocho familias de vocaciones en la Iglesia alrededor de Cristo">
    <defs>${defs}
      <radialGradient id="rose-shine" cx="50%" cy="46%" r="52%">
        <stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".5" stop-color="#fff" stop-opacity=".07"/>
        <stop offset=".8" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/>
      </radialGradient>
      <radialGradient id="rose-core" cx="44%" cy="38%" r="68%">
        <stop offset="0" stop-color="oklch(0.95 0.07 90)"/><stop offset=".55" stop-color="oklch(0.80 0.12 82)"/><stop offset="1" stop-color="oklch(0.60 0.12 68)"/>
      </radialGradient>
    </defs>
    <circle class="ring" cx="${C}" cy="${C}" r="171"/>
    <circle class="stone" cx="${C}" cy="${C}" r="166"/>
    ${segs}
    ${ocs}
    <circle class="stone" cx="${C}" cy="${C}" r="64" style="stroke-width:2"/>
    ${lobes}
    <circle class="core" cx="${C}" cy="${C}" r="46"/>
    <circle class="shine" cx="${C}" cy="${C}" r="166"/>
    <text class="chi" x="${C}" y="${C+3}" text-anchor="middle" dominant-baseline="middle">☧</text></svg>`;
}

function renderHome(){
  document.title = 'Enciclopedia de Carismas';
  app.innerHTML = `
  <section class="def" aria-label="Qué es este sitio">
    <p>${terms(`<dfn>Carismas</dfn> <span class="def-cat">(enciclopedia).</span> Guía para jóvenes con [[inquietud-vocacional|inquietudes vocacionales]]. Reúne las distintas formas de vida que la Iglesia propone para seguir a Jesús: <a href="#sacerdote-diocesano">sacerdocio</a>, vida consagrada, órdenes y congregaciones, institutos seculares, movimientos laicales y <a href="#matrimonio">matrimonio</a>. Su objetivo es ayudarte a conocerlas, a descubrir hacia cuál te sentís llamado y a encontrar las <a href="#discernir">herramientas que la Iglesia ofrece</a> para [[discernimiento|discernir]]: el [[acompanamiento-espiritual|acompañamiento espiritual]], la oración, los retiros y el contacto con cada comunidad.`)}</p>
  </section>
  <section class="hero">
    <div>
      <p class="eyebrow">Enciclopedia de carismas y espiritualidades</p>
      <h1 style="margin-top:12px">Muchos caminos,<br><em>un solo centro.</em></h1>
      <p class="lead">La Iglesia es mucho más grande y diversa de lo que solemos ver. Monjes, frailes, consagrados en el mundo, movimientos de laicos, sacerdotes y diáconos diocesanos, matrimonios: cada [[carisma|carisma]] es una manera particular de vivir el Evangelio, y todos tienen a Cristo en el centro.</p>
      <p class="sub">Esta enciclopedia está pensada para jóvenes que quieren conocer las distintas formas de vida que la Iglesia propone para caminar hacia la santidad. Tocá una parte del rosetón para ir a cada familia.</p>
    </div>
    <div><div class="rose">${rosette()}</div><p class="rose-cap">Ocho grandes familias de vida consagrada, ministerial y laical</p>${vitralCap()}</div>
  </section>
  ${franjaHoy()}

  <section class="intro" aria-label="Cómo usar la enciclopedia">
    <div><h3>Cada ficha, diez preguntas</h3><p>Nombre, fundador, historia, carisma, espiritualidad, misión, hábito, santos, cómo formar parte y presencia en Argentina y Mendoza (en las vocaciones diocesanas, adaptadas: origen en la Iglesia, identidad, vestimenta y signos). Más un apartado para compartir en grupo.</p></div>
    <div><h3>Palabras difíciles, explicadas</h3><p>Los términos con subrayado punteado se pueden tocar para ver qué significan. También están todos juntos en el <a href="#glosario">glosario</a>.</p></div>
    <div><h3>Qué tan seguro es cada dato</h3><p>Los datos llevan una marca para que sepas de dónde vienen.</p>
      <div class="legend">${MK.v}${MK.g}${MK.t}${MK.p}</div></div>
  </section>

  <section class="bq-cta" aria-label="Brújula">
    <div>
      <p class="eyebrow">Brújula</p>
      <h2>¿Con qué te identificás?</h2>
      <p>Diez preguntas para ver qué rasgos te atraen más, qué formas de vida podrías explorar y a qué santos te parecés. No es un test vocacional: es un punto de partida para rezar y conversar.</p>
    </div>
    <div class="bq-cta-acc">
      <a class="bq-btn" href="#brujula">Hacer la brújula</a>
      <a class="bq-link" href="#discernir">¿Por dónde empiezo? Guía de discernimiento →</a>
    </div>
  </section>

  <section id="indice" class="idx">
    <details class="idx-box">
      <summary><span><span class="eyebrow">Índice</span><b>Todas las fichas</b><small>${Object.keys(FICHAS).length} órdenes, congregaciones, movimientos y vocaciones diocesanas, de la A a la Z</small></span><i class="chev" aria-hidden="true"></i></summary>
    <div class="idx-grid">${Object.entries(FICHAS).sort((a,b)=>a[1].nombre.localeCompare(b[1].nombre,'es')).map(([id,x])=>`<a class="idx-item" data-fam="${x.familia}" href="#${id}"><i></i>${x.nombre}<small>${fam(x.familia).nombre}</small></a>`).join('')}</div>
    </details>
  </section>

  <section id="familias" class="fams-head" style="scroll-margin-top:64px">
    <p class="eyebrow">Las familias</p>
    <h2>Formas de vida en la Iglesia</h2>
    <p>Los historiadores agrupan las órdenes, congregaciones y movimientos en grandes familias según cuándo nacieron y cómo viven. No es una clasificación rígida, pero ayuda a ubicarse. La última familia es distinta: reúne las vocaciones que se viven en la diócesis, junto al obispo, o que nacen de un sacramento.</p>
  </section>
  ${FAMILIAS.map(f=>`
    <section class="fam" id="fam-${f.id}" data-fam="${f.id}">
      ${band(f.id)}
      <div class="fam-in">
        <div>
          <p class="era">${f.era}</p>
          <h3>${f.nombre}</h3>
          <p class="what">${terms(f.que)}</p>
          <ul class="traits">${f.rasgos.map(r=>`<li>${terms(r)}</li>`).join('')}</ul>
        </div>
        <aside>
          <h4>${f.fichas.length ? 'Fichas disponibles' : 'Fichas'}</h4>
          <div class="fichas">${f.fichas.length ? f.fichas.map(id=>{const x=FICHAS[id];return `<a class="fcard" href="#${id}"><strong>${x.nombre}</strong><span>${x.tarjeta}</span><br><span class="go">Abrir ficha →</span></a>`}).join('') : `<p style="font-size:14px;color:var(--muted)">Todavía no hay fichas en esta familia.</p>`}</div>
          ${f.proximas.length?`<h4 style="margin-top:18px">Próximas por explorar</h4>
          <div class="soon">${f.proximas.map(p=>`<span>${p}</span>`).join('')}</div>`:''}
        </aside>
      </div>
    </section>`).join('')}

  <section class="glos" id="glosario">
    <p class="eyebrow">Glosario</p>
    <h2>Palabras para entender</h2>
    <p>Términos que aparecen en las fichas, explicados en lenguaje simple.</p>
    <label class="eyebrow" for="gq" style="display:block;margin-top:18px">Buscar un término</label>
    <input id="gq" class="glos-search" type="search" placeholder="Por ejemplo: clausura, voto, fraile" autocomplete="off">
    <dl id="gl">${Object.entries(GLOSARIO).sort((a,b)=>a[1][0].localeCompare(b[1][0],'es')).map(([k,[t,d]])=>`<div class="gi" id="g-${k}" data-s="${(t+' '+d).toLowerCase()}"><dt>${t}</dt><dd>${d}</dd></div>`).join('')}</dl>
  </section>

  <section class="sugerir" id="sugerir">
    <p class="eyebrow">Sugerencias</p>
    <h2>¿Falta algo o encontraste un error?</h2>
    <p>Si conocés bien una comunidad, un carisma o un dato que falta, escribinos. Ninguna sugerencia se publica directo: primero se revisa y se chequea en fuentes, y recién después se agrega.</p>
    <div class="opciones">
      <a class="op" href="${mailto('Corrección para la Enciclopedia de Carismas', 'Ficha o familia: \n\nQué agregarías o corregirías: \n\nFuente (si la tenés): \n\nTu nombre (opcional): \n')}">
        <b>Corregir o completar una ficha</b>
        <span>Un dato que falta, está mal o quedó viejo en una ficha que ya existe.</span>
      </a>
      <a class="op" href="${mailto('Propuesta de carisma nuevo', 'Nombre del carisma o comunidad: \n\nFamilia a la que pertenecería (monástica, mendicante, canónigos, clérigos, apostólica, institutos seculares, movimientos, diocesana): \n\nPor qué te parece que falta: \n\nFuente para verificar los datos: \n\nTu nombre (opcional): \n')}">
        <b>Proponer un carisma nuevo</b>
        <span>Una orden, congregación, movimiento o vocación que todavía no está en la enciclopedia.</span>
      </a>
    </div>
  </section>
  ${footer()}`;
  app.querySelectorAll('.lead').forEach(el=>el.innerHTML=terms(el.innerHTML));
  const vr=$('#vitralReset');
  if(vr) vr.addEventListener('click',()=>{
    if(!vr.dataset.ok){vr.dataset.ok='1';vr.textContent='¿Seguro? Tocá de nuevo para apagarlo';return;}
    guardado.borrar('fichasVistas','rosariosRezados');renderHome();document.querySelector('.rose').scrollIntoView({block:'center'});});
  const gq=$('#gq');
  gq.addEventListener('input',()=>{const q=gq.value.trim().toLowerCase();app.querySelectorAll('.gi').forEach(el=>el.hidden=q && !el.dataset.s.includes(q));});
  app.querySelectorAll('.seg').forEach(g=>{
    const go=()=>{document.getElementById('fam-'+g.dataset.fam).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})};
    g.addEventListener('click',go); g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
  });
}

function footer(){
  return `<footer><p>Enciclopedia en construcción, una ficha a la vez. Última actualización: 12 de noviembre de 2026.</p>
  <p style="margin-top:6px">Las imágenes son ornamentos dibujados con código. Los datos marcados como “sin confirmar” conviene chequearlos antes de usarlos en público.</p></footer>`;
}

function renderFicha(id){
  const x = FICHAS[id], f = fam(x.familia);
  document.title = x.nombre + ' · Enciclopedia de Carismas';
  const c = x.compartir;
  app.innerHTML = `
  <section class="ficha-hero" data-fam="${x.familia}">
    ${band(x.familia)}
    <div class="fh-in">
      <div class="fh-title">
        <p class="crumb"><a href="#fam-${f.id}">← ${f.nombre}</a></p>
        <h1>${x.nombre}</h1>
        <p class="latin">${x.latin}</p>
      </div>
      <p class="resumen">${terms(x.resumen)}</p>
      <div class="fh-side">
        <div class="motto"><q>${x.lema[0]}</q><span>${x.lema[1]}</span></div>
        <div class="habit" aria-label="Colores del hábito">${x.habito.map(([n,col])=>`<span class="sw"><i style="background:${col}"></i>${n}</span>`).join('')}</div>
      </div>
    </div>
  </section>

  <div class="ficha-body" data-fam="${x.familia}">
    <nav class="toc" aria-label="Contenido de la ficha">
      <span class="eyebrow">En esta ficha</span>
      <ol>${x.secciones.map(s=>`<li><a href="#${id}" data-to="s-${s.id}">${s.titulo}</a></li>`).join('')}<li><a href="#${id}" data-to="s-compartir">Para compartir</a></li><li><a href="#${id}" data-to="s-fuentes">Fuentes</a></li></ol>
      <div class="facts">${x.datos.map(([k,v])=>`<div>${k}<b>${v}</b></div>`).join('')}</div>
    </nav>
    <article>
      ${pairUp(x.secciones).map(s=>`
        <section class="sec${s.half?' half':''}" id="s-${s.id}">
          <header>${secIcon(s.id)}<h2>${s.titulo}</h2>${MK[s.estado]}</header>
          ${terms(s.html)}
        </section>`).join('')}

      <section class="sec" id="s-compartir" style="max-width:none">
        <header><h2>Para compartir</h2><span class="eyebrow">Frases, anécdotas y preguntas para un encuentro</span></header>
        <div class="share">
          <div class="quotes">${c.frases.map(([q,w],i)=>`<figure class="quote" style="margin:0"><blockquote>${q}</blockquote><figcaption class="who"><span>${w}</span><button type="button" class="copy" data-q="${i}">Copiar</button></figcaption></figure>`).join('')}</div>
          ${c.anecdotas.length?`<div class="anec"><h3>Anécdotas</h3><div class="cols">${c.anecdotas.map(([t,d])=>`<div class="box"><h3 style="font-size:18px">${t}</h3><p>${d}</p></div>`).join('')}</div></div>`:''}
          <div class="qs-row">
            <div class="qs"><h3>Preguntas para reflexionar</h3><ol>${c.preguntas.map(q=>`<li>${q}</li>`).join('')}</ol></div>
            <div class="qs din"><h3>Una dinámica breve</h3><p>${c.dinamica}</p></div>
          </div>
        </div>
        <p class="note">Cada anécdota lleva su marca: verificada en fuentes, de conocimiento general o de tradición (relatos antiguos que no se pueden comprobar del todo).</p>
      </section>

      <section class="sec" id="s-fuentes">
        <header><h2>Fuentes consultadas</h2></header>
        <p>Lo marcado como verificado se contrastó con estas páginas el 12 de noviembre de 2026.</p>
        <ul class="sources">${x.fuentes.map(([t,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('')}</ul>
        <p class="note">¿Viste un error o te falta un dato en esta ficha? <a href="${mailto('Corrección: '+x.nombre, 'Ficha: '+x.nombre+'\n\nQué agregarías o corregirías: \n\nFuente (si la tenés): \n\nTu nombre (opcional): \n')}">Avisanos por mail</a>. Se revisa antes de publicarse.</p>
      </section>
    </article>
  </div>
  ${footer()}`.replace(/\$\{MK\.(\w)\}/g,(m,k)=>MK[k]||'');

  tocViva();
  app.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',()=>{
    const [q,w]=c.frases[+b.dataset.q]; const txt=`“${q}” — ${w}`;
    const done=()=>{b.textContent='Copiada';setTimeout(()=>b.textContent='Copiar',1600)};
    try{navigator.clipboard.writeText(txt).then(done,()=>sel(b))}catch(e){sel(b)}
  }));
}
/* índice lateral de una ficha o de la guía: salta a cada sección y marca la que está a la vista */
function tocViva(){
  app.querySelectorAll('.toc a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById(a.dataset.to).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}));
  try{
    const links=[...app.querySelectorAll('.toc a')];
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.dataset.to===en.target.id))}}),{rootMargin:'-30% 0px -60% 0px'});
    app.querySelectorAll('.sec').forEach(s=>io.observe(s));
  }catch(e){}
}

/* =========================================================
   GUÍA DE DISCERNIMIENTO (#discernir)
   ========================================================= */
function renderGuia(){
  const g = GUIA;
  document.title = 'Guía de discernimiento · Enciclopedia de Carismas';
  app.innerHTML = `
  <section class="ficha-hero" data-fam="guia">
    ${band('guia')}
    <div class="fh-in">
      <div class="fh-title">
        <p class="crumb"><a href="#inicio">← Inicio</a></p>
        <p class="eyebrow" style="margin-top:10px">Guía de discernimiento</p>
        <h1>${g.titulo}</h1>
      </div>
      <p class="resumen">${terms(g.resumen)}</p>
      <div class="fh-side">
        <div class="motto"><q>${g.lema[0]}</q><span>${g.lema[1]}</span></div>
        <a class="bq-btn gd-cta" href="#brujula">Hacer la Brújula</a>
      </div>
    </div>
  </section>

  <div class="ficha-body" data-fam="guia">
    <nav class="toc" aria-label="Contenido de la guía">
      <span class="eyebrow">En esta guía</span>
      <ol>${g.secciones.map(s=>`<li><a href="#discernir" data-to="s-${s.id}">${s.titulo}</a></li>`).join('')}<li><a href="#discernir" data-to="s-fuentes">Fuentes</a></li></ol>
    </nav>
    <article>
      ${g.secciones.map(s=>`
        <section class="sec" id="s-${s.id}">
          <header><h2>${s.titulo}</h2>${MK[s.estado]}</header>
          ${terms(s.html)}
        </section>`).join('')}
      <section class="sec" id="s-fuentes">
        <header><h2>Fuentes consultadas</h2></header>
        <p>Las citas marcadas como verificadas se contrastaron con estos documentos el 18 de noviembre de 2026. Los consejos prácticos son sugerencias generales, no normas de la Iglesia.</p>
        <ul class="sources">${g.fuentes.map(([t,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('')}</ul>
        <p class="note">¿Algo para corregir o sumar a esta guía? <a href="${mailto('Corrección: Guía de discernimiento', 'Sección: \n\nQué agregarías o corregirías: \n\nFuente (si la tenés): \n\nTu nombre (opcional): \n')}">Avisanos por mail</a>. Se revisa antes de publicarse.</p>
      </section>
    </article>
  </div>
  ${footer()}`.replace(/\$\{MK\.(\w)\}/g,(m,k)=>MK[k]||'');
  tocViva();
}
/* =========================================================
   LO QUE QUEDA GUARDADO EN ESTE NAVEGADOR (solo para quien lo usa; no se manda a ningún lado)
   fichasVistas: ids de fichas abiertas · rosariosRezados: días (AAAA-MM-DD) en que se terminó un Rosario
   ========================================================= */
const guardado = {
  leer(k){ try{ const v=JSON.parse(localStorage.getItem(k)); return Array.isArray(v)?v:[]; }catch(e){ return []; } },
  sumar(k,v){ const a=this.leer(k); if(!a.includes(v)){ a.push(v); try{ localStorage.setItem(k,JSON.stringify(a)); }catch(e){} } },
  borrar(...ks){ ks.forEach(k=>{ try{ localStorage.removeItem(k); }catch(e){} }); }
};
const isoLocal = f => `${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,'0')}-${String(f.getDate()).padStart(2,'0')}`;
const fechaLarga = f => f.toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

/* El vitral del inicio se enciende con las fichas leídas (cada familia, en proporción) y con los días de Rosario
   (los óculos dorados entre las lancetas). El centro, Cristo, está siempre encendido. */
function vitralCap(){
  const vistas=guardado.leer('fichasVistas').filter(id=>FICHAS[id]).length, dias=guardado.leer('rosariosRezados').length, total=Object.keys(FICHAS).length;
  if(!vistas && !dias) return `<p class="vitral-cap">El vitral se va encendiendo a medida que leés fichas y rezás el <a href="#rezar-rosario">Rosario</a>. El centro, Cristo, ya está encendido.</p>`;
  const partes=[];
  if(vistas) partes.push(`${vistas} de ${total} fichas leídas`);
  if(dias) partes.push(`${dias} ${dias===1?'día':'días'} de Rosario`);
  return `<p class="vitral-cap">Tu vitral: ${partes.join(' · ')}. Se guarda solo en este dispositivo. <button type="button" class="bq-link" id="vitralReset">Apagarlo y empezar de nuevo</button></p>`;
}

/* Una pregunta por día, tomada de las preguntas para compartir de las fichas. Cambia a medianoche
   y es la misma para todos los que abran el sitio ese día. */
function preguntaDelDia(f){
  f=f||new Date();
  const todas=[];
  Object.entries(FICHAS).forEach(([id,x])=>x.compartir.preguntas.forEach(q=>todas.push([q,id])));
  const n=Math.floor(Date.UTC(f.getFullYear(),f.getMonth(),f.getDate())/864e5);
  return todas[((n*7919)%todas.length+todas.length)%todas.length];
}

function franjaHoy(){
  const L=LITURGIA.dia(), m=MISTERIOS[LITURGIA.misterios()], [q,id]=preguntaDelDia();
  return `<section class="hoy" aria-label="Hoy">
    <a class="hoy-card" href="#rezar">
      <span class="eyebrow">Hoy en la Iglesia</span>
      <b>${L.nombre}</b>
      <span class="hoy-meta"><i class="lit-dot" style="background:${L.colorValor}"></i>${L.colorNombre} · ${m.nombre}</span>
      <span class="go">Rezar hoy →</span>
    </a>
    <div class="hoy-card hoy-q">
      <span class="eyebrow">Pregunta del día</span>
      <p>${q}</p>
      <a class="go" href="#${id}">Sale de la ficha: ${FICHAS[id].nombre} →</a>
    </div>
  </section>`;
}

/* =========================================================
   REZAR (#rezar): el día litúrgico, el Rosario paso a paso y las oraciones de siempre.
   ========================================================= */
const lineasOracion = t => t.map(l=>l.startsWith('℣ ')?`<span class="vr"><b aria-label="Versículo">℣</b> ${l.slice(2)}</span>`
  : l.startsWith('℟ ')?`<span class="vr r"><b aria-label="Respuesta">℟</b> ${l.slice(2)}</span>` : `<span>${l}</span>`).join('');

function renderRezar(){
  const hoy=new Date(), L=LITURGIA.dia(hoy), setHoy=LITURGIA.misterios(hoy), [q,qid]=preguntaDelDia(hoy);
  const mediodia = ORACIONES[L.pascual ? 'regina-caeli' : 'angelus'];
  document.title = 'Rezar · Enciclopedia de Carismas';
  const semana = Array.from({length:7},(_,k)=>{const d=new Date(hoy.getFullYear(),hoy.getMonth(),hoy.getDate()+k);return {d, L:LITURGIA.dia(d), m:LITURGIA.misterios(d)};});
  const IB='https://www.ibreviary.com/m2/breviario.php?lang=es';
  const horas=[['Oficio de Lecturas','ufficio_delle_letture','En cualquier momento del día'],['Laudes','lodi','Oración de la mañana'],['Hora Intermedia','ora_media','A media jornada'],['Vísperas','vespri','Oración de la tarde'],['Completas','compieta','Antes de dormir']];
  const secs=[['hoy','Hoy en la liturgia'],['pregunta','Pregunta del día'],['rosario','El Rosario'],['mediodia',mediodia.titulo],['oraciones','Oraciones'],['horas','Liturgia de las Horas'],['fuentes','Fuentes']];

  app.innerHTML = `
  <section class="ficha-hero" data-fam="rezar">
    ${band('rezar')}
    <div class="fh-in">
      <div class="fh-title">
        <p class="crumb"><a href="#inicio">← Inicio</a></p>
        <p class="eyebrow" style="margin-top:10px">Rezar</p>
        <h1>Rezar con la Iglesia</h1>
      </div>
      <p class="resumen">Para conocer un carisma hay que conocer cómo reza. Acá podés rezar el Rosario paso a paso, con los misterios que tocan hoy, encontrar las oraciones de siempre y llegar a las lecturas y a la Liturgia de las Horas del día. Todo sigue el calendario de la Iglesia: lo que ves cambia según el día y el tiempo litúrgico.</p>
      <div class="fh-side">
        <p class="eyebrow">${fechaLarga(hoy)}</p>
        <p class="rz-dia">${L.nombre}</p>
        <p class="rz-meta"><i class="lit-dot" style="background:${L.colorValor}"></i>Color litúrgico: ${L.colorNombre.toLowerCase()}</p>
        <a class="bq-btn gd-cta" href="#rezar-rosario" data-to="s-rosario">Rezar el Rosario de hoy</a>
      </div>
    </div>
  </section>

  <div class="ficha-body" data-fam="rezar">
    <nav class="toc" aria-label="Contenido de la página">
      <span class="eyebrow">En esta página</span>
      <ol>${secs.map(([id,t])=>`<li><a href="#rezar-${id}" data-to="s-${id}">${t}</a></li>`).join('')}</ol>
      <div class="facts">
        <div>Tiempo<b>${L.tiempo==='Ordinario'?'Tiempo Ordinario':L.tiempo}</b></div>
        <div>Misterios de hoy<b>${MISTERIOS[setHoy].nombre}</b></div>
        ${L.salterio?`<div>Salterio<b>Semana ${L.salterioRom}</b></div>`:''}
      </div>
    </nav>
    <article>
      <section class="sec" id="s-hoy">
        <header><h2>Hoy en la liturgia</h2>${MK.v}</header>
        <p>La Iglesia vive el año como un camino alrededor de Jesús: Adviento, Navidad, Cuaresma, Pascua y el Tiempo Ordinario. Cada día tiene sus lecturas y su color.</p>
        <div class="cols">
          <div class="box">
            <h3>${L.nombre}</h3>
            <ul class="dots rz-lista">
              <li>Color: <b>${L.colorNombre.toLowerCase()}</b>${L.color==='rosa'?' (el rosa es optativo en este domingo)':''}</li>
              <li>Domingos de este año litúrgico: lecturas del <b>ciclo ${L.ciclo}</b></li>
              ${L.tiempo==='Ordinario'&&L.dow!==0?`<li>Primera lectura de los días de semana: <b>año ${L.anioPar?'par (II)':'impar (I)'}</b></li>`:''}
              ${L.salterio?`<li>Liturgia de las Horas: <b>semana ${L.salterioRom}</b> del salterio</li>`:`<li>Liturgia de las Horas: salmos propios de este día</li>`}
            </ul>
            ${L.nota?`<p class="note">${L.nota}</p>`:''}
          </div>
          <div class="box">
            <h3>Las lecturas de hoy</h3>
            <p>Las lecturas cambian si hoy se celebra una solemnidad o una fiesta. Estos sitios ya lo tienen en cuenta:</p>
            <p class="rz-links"><a href="${ORACION_FUENTES[3][1]}" target="_blank" rel="noopener">Evangelio y lecturas (Ciudad Redonda) ↗</a><a href="${ORACION_FUENTES[4][1]}" target="_blank" rel="noopener">Evangelio del día (Vatican News) ↗</a></p>
          </div>
        </div>
        <h3 class="gd-h3">Esta semana</h3>
        <ol class="rz-semana">${semana.map(({d,L:l,m},k)=>`
          <li${k===0?' class="hoy"':''} title="${l.nombre}"><span class="rz-sd">${k===0?'Hoy':k===1?'Mañana':LITURGIA.SEMANA[d.getDay()]}</span><span class="rz-sn">${d.getDate()}</span><i class="lit-dot" style="background:${l.colorValor}"></i><span class="rz-sm">${MISTERIOS[m].nombre.replace('Misterios ','')}</span></li>`).join('')}</ol>
        <p class="note">El día, el color, los ciclos y la semana del salterio se calculan con las reglas del calendario general de la Iglesia (comprobado con iBreviary). No incluyen las fiestas de santos ni los cambios propios de Argentina: si hoy hay una solemnidad o una fiesta, mirá las lecturas en los enlaces.</p>
      </section>

      <section class="sec" id="s-pregunta">
        <header><h2>Pregunta del día</h2></header>
        <div class="rz-q"><p>${q}</p><a href="#${qid}">Sale de la ficha: ${FICHAS[qid].nombre} →</a></div>
        <p class="note">No es para contestar rápido: es para llevártela y volver a ella en algún momento del día. Mañana va a haber otra.</p>
      </section>

      <section class="sec" id="s-rosario">
        <header><h2>El Rosario</h2>${MK.v}</header>
        <p>Una oración sencilla para mirar la vida de Jesús con los ojos de María. Tocá <b>Siguiente</b> y andá cuenta por cuenta: el rosario de la derecha te muestra dónde estás. Si te sabés las oraciones, podés esconder el texto.</p>
        <div class="ros" id="ros"></div>
      </section>

      <section class="sec" id="s-mediodia">
        <header><h2>${mediodia.titulo}</h2>${MK[mediodia.estado]}</header>
        <p>${mediodia.nota} ${L.pascual?'Hoy estamos en tiempo de Pascua.':''}</p>
        <p class="or-txt">${lineasOracion(mediodia.texto)}</p>
      </section>

      <section class="sec" id="s-oraciones">
        <header><h2>Oraciones</h2>${MK.v}</header>
        <p>Las de siempre, con el texto oficial en español. Tocá una para abrirla.</p>
        ${GRUPOS_ORACION.map(([g,t])=>{const os=Object.entries(ORACIONES).filter(([,o])=>o.grupo===g);return os.length?`
          <h3 class="gd-h3">${t}</h3>
          <div class="or-lista">${os.map(([id,o])=>`
            <details class="or" id="or-${id}"><summary>${o.titulo}${o.tiempo==='pascua'?' <small>tiempo de Pascua</small>':''}</summary>
              ${o.nota?`<p class="or-nota">${o.nota}</p>`:''}<p class="or-txt">${lineasOracion(o.texto)}</p></details>`).join('')}</div>`:''}).join('')}
      </section>

      <section class="sec" id="s-horas">
        <header><h2>Liturgia de las Horas</h2>${MK.g}</header>
        <p>Es la oración oficial de la Iglesia: salmos, lecturas y cantos repartidos a lo largo del día, para que todo el día quede ofrecido a Dios. La rezan los sacerdotes, los diáconos y los consagrados, y muchas comunidades contemplativas la cantan en coro; cualquier laico puede sumarse. Los salmos se reparten en cuatro semanas (el salterio), que se van repitiendo.</p>
        <div class="rz-horas">${horas.map(([n,s,d])=>`<a class="rz-hora" href="${IB}&s=${s}" target="_blank" rel="noopener"><b>${n}</b><span>${d}</span></a>`).join('')}</div>
        <p class="note">Los enlaces abren la hora de hoy en iBreviary${L.salterio?` (hoy, semana ${L.salterioRom} del salterio)`:''}. Los textos no se copian acá porque son traducciones oficiales protegidas y cambian todos los días. Si es tu primera vez, empezá por Completas: es corta y se reza antes de dormir.</p>
      </section>

      <section class="sec" id="s-fuentes">
        <header><h2>Fuentes consultadas</h2></header>
        <p>Los textos de las oraciones se copiaron del Compendio del Catecismo; los misterios y su distribución por días, del Compendio y de la carta Rosarium Virginis Mariae (n. 38), el 19 de noviembre de 2026. La jaculatoria y las citas bíblicas de cada misterio son de conocimiento general.</p>
        <ul class="sources">${ORACION_FUENTES.map(([t,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('')}</ul>
        <p class="note">¿Querés que sumemos una oración? <a href="${mailto('Oración para sumar a la Enciclopedia de Carismas', 'Oración: \n\nFuente del texto (si la tenés): \n\nTu nombre (opcional): \n')}">Escribinos</a>. Se agrega solo con un texto de fuente oficial.</p>
      </section>
    </article>
  </div>
  ${footer()}`;
  tocViva();
  app.querySelectorAll('.fh-side a[data-to]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById(a.dataset.to).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}));
  rosario($('#ros'), setHoy);
}

/* ---------- Rosario paso a paso ---------- */
const ORDINAL = ['Primer','Segundo','Tercer','Cuarto','Quinto'];
function pasosRosario(set){
  const P=[], add=(o,b,etq,porque,extra)=>P.push({o,b,etq,porque,...extra});
  const big=k=>k===0?'pM':'l'+(k*11-1);
  add('senal-cruz','cruz','Comienzo','inicio');
  add('credo','cruz','Comienzo','inicio');
  add('padre-nuestro','pPN','Comienzo','padre-nuestro');
  ['por la fe','por la esperanza','por la caridad'].forEach((x,j)=>add('ave-maria','pA'+(j+1),`Comienzo · Ave María ${j+1} de 3, ${x}`,'inicio'));
  add('gloria','pA3','Comienzo','gloria');
  for(let k=0;k<5;k++){
    const et=`${ORDINAL[k]} misterio ${set.slice(0,-1)}`;
    add(null,big(k),et,'misterio',{misterio:k});
    add('padre-nuestro',big(k),et,'padre-nuestro');
    for(let j=0;j<10;j++) add('ave-maria','l'+(k*11+j),`${et} · Ave María ${j+1} de 10`,'ave-maria',{ave:true});
    add('gloria','l'+(k*11+9),et,'gloria');
    add('jaculatoria','l'+(k*11+9),et,'jaculatoria');
  }
  add('salve','medalla','Final','final');
  add(null,'medalla','Final','final',{papa:true});
  add('oracion-rosario','medalla','Final','final');
  add('senal-cruz','cruz','Final','final');
  return P;
}
function svgRosario(){
  const cx=150, cy=132, R=104, b=[];
  for(let t=0;t<54;t++){
    const a=(90+14+t*(332/53))*Math.PI/180, grande=t%11===10;
    b.push(`<circle class="cta${grande?' g':''}" data-b="l${t}" cx="${(cx+R*Math.cos(a)).toFixed(1)}" cy="${(cy+R*Math.sin(a)).toFixed(1)}" r="${grande?7:4.6}"/>`);
  }
  const pend=[['pM',268,7],['pA3',290,4.6],['pA2',305,4.6],['pA1',320,4.6],['pPN',343,7]];
  pend.forEach(([id,y,r])=>b.push(`<circle class="cta${r>5?' g':''}" data-b="${id}" cx="${cx}" cy="${y}" r="${r}"/>`));
  return `<svg viewBox="0 0 300 410" aria-hidden="true">
    <circle class="cad" cx="${cx}" cy="${cy}" r="${R}"/><line class="cad" x1="${cx}" y1="${cy+R}" x2="${cx}" y2="362"/>
    ${b.join('')}
    <path class="cta medalla" data-b="medalla" d="M${cx} ${cy+R-11} L${cx+9} ${cy+R} L${cx} ${cy+R+13} L${cx-9} ${cy+R} Z"/>
    <path class="cta cruz" data-b="cruz" d="M${cx-4} 360h8v12h12v8h-12v26h-8v-26h-12v-8h12Z"/>
  </svg>`;
}
function rosario(el, setHoy){
  let set=setHoy, i=0, compacto=false, fin=false, P=pasosRosario(set);
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.innerHTML=`
    <div class="ros-tabs" role="group" aria-label="Misterios">${ORDEN_MISTERIOS.map(k=>`<button type="button" class="ros-tab" data-set="${k}" aria-pressed="${k===set}" style="--th:${MISTERIOS[k].tono}">${MISTERIOS[k].nombre.replace('Misterios ','')}<small>${k===setHoy?'hoy':MISTERIOS[k].dias}</small></button>`).join('')}</div>
    <div class="ros-main">
      <div class="ros-card" id="rosCard" tabindex="-1"></div>
      <div class="ros-svg">${svgRosario()}</div>
    </div>
    <p class="note">Los misterios de cada día son los que propone Juan Pablo II en Rosarium Virginis Mariae (n. 38): ${ORDEN_MISTERIOS.map(k=>`${MISTERIOS[k].nombre.replace('Misterios ','').toLowerCase()}, ${MISTERIOS[k].dias}`).join('; ')}. La misma carta aclara que no es una regla rígida: se pueden cambiar según el tiempo litúrgico o lo que se esté viviendo.</p>`;
  const card=$('#rosCard');
  const pintar=()=>{
    el.querySelectorAll('.ros-tab').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.set===set)));
    el.style.setProperty('--th',MISTERIOS[set].tono);
    const hechas=new Set(P.slice(0,fin?P.length:i).map(p=>p.b));
    el.querySelectorAll('[data-b]').forEach(c=>{c.classList.toggle('hecha',hechas.has(c.dataset.b));c.classList.toggle('on',!fin&&P[i].b===c.dataset.b);});
    if(fin){
      card.innerHTML=`<p class="eyebrow">Rosario terminado</p><h3 class="ros-t">Que la Virgen te acompañe</h3>
        <p>Rezaste los ${MISTERIOS[set].nombre.toLowerCase()}. En el vitral del inicio se encendió un óculo dorado por este día.</p>
        <div class="ros-nav"><button type="button" class="bq-link" id="rosAtras">← Volver al último paso</button><button type="button" class="bq-btn" id="rosOtra">Empezar de nuevo</button></div>`;
      $('#rosOtra').addEventListener('click',()=>{fin=false;i=0;pintar();});
      $('#rosAtras').addEventListener('click',()=>{fin=false;i=P.length-1;pintar();});
      card.focus({preventScroll:true});
      return;
    }
    const p=P[i], M=MISTERIOS[set], o=p.o&&ORACIONES[p.o], pq=ROSARIO_PORQUE[p.porque];
    let cuerpo;
    if(p.misterio!=null){
      const [t,cita]=M.lista[p.misterio];
      cuerpo=`<h3 class="ros-t">${t}</h3>
        <p class="ros-cita">${cita?`Para leer: <b>${cita}</b> ${MK.g}`:`No hay un relato bíblico de la Asunción: es una verdad de fe que el papa Pío XII proclamó como dogma en 1950. ${MK.g}`}</p>
        <p class="ros-sil">Quedate unos segundos en silencio, mirando la escena. ¿Qué ves? ¿Qué te dice a vos?</p>`;
    } else if(p.papa){
      cuerpo=`<h3 class="ros-t">Por las intenciones del Papa</h3><p>Se reza un Padre nuestro, un Ave María y un Gloria por lo que el Papa le pide hoy a toda la Iglesia. ${MK.g}</p>`;
    } else {
      cuerpo=`<h3 class="ros-t">${o.titulo}</h3>${compacto&&o.texto.length>1?`<p class="or-txt">${lineasOracion(o.texto.slice(0,1))}<span class="ros-sigue">…</span></p>`:`<p class="or-txt">${lineasOracion(o.texto)}</p>`}${p.o==='jaculatoria'?`<p class="or-nota">${o.nota} ${MK.g}</p>`:''}`;
    }
    card.innerHTML=`
      <div class="ros-top"><span class="eyebrow">${p.etq}</span><span class="ros-n">${i+1} / ${P.length}</span></div>
      <div class="bq-prog" aria-hidden="true"><i style="width:${(i+1)/P.length*100}%"></i></div>
      ${p.misterio!=null?`<p class="ros-set">${ORDINAL[p.misterio]} misterio ${set.slice(0,-1)} · ${M.sentido}</p>`:''}
      ${cuerpo}
      <div class="ros-nav">
        <button type="button" class="bq-link" id="rosAnt"${i===0?' disabled':''}>← Anterior</button>
        <button type="button" class="bq-btn" id="rosSig">${i===P.length-1?'Terminar':'Siguiente →'}</button>
      </div>
      <div class="ros-pie">
        <label class="ros-chk"><input type="checkbox" id="rosComp"${compacto?' checked':''}> Ya me sé las oraciones (esconder el texto)</label>
        ${pq?`<details class="ros-pq"><summary>¿Por qué se reza así?</summary><p><b>${pq[0]}.</b> ${pq[1]}</p></details>`:''}
      </div>`;
    $('#rosSig').addEventListener('click',()=>{ if(i<P.length-1){i++;pintar();} else {fin=true;guardado.sumar('rosariosRezados',isoLocal(new Date()));pintar();} });
    $('#rosAnt').addEventListener('click',()=>{ if(i>0){i--;pintar();} });
    $('#rosComp').addEventListener('change',e=>{compacto=e.target.checked;pintar();});
  };
  el.querySelectorAll('.ros-tab').forEach(b=>b.addEventListener('click',()=>{set=b.dataset.set;P=pasosRosario(set);i=0;fin=false;pintar();
    if(el.getBoundingClientRect().top<0) el.scrollIntoView({behavior:reduce?'auto':'smooth'});}));
  el.addEventListener('keydown',e=>{
    if(e.target.closest('input,summary,button.ros-tab')) return;
    if(e.key==='ArrowRight'&&!fin){e.preventDefault();$('#rosSig').click();}
    if(e.key==='ArrowLeft'&&!fin){e.preventDefault();$('#rosAnt').click();}
  });
  pintar();
}

/* =========================================================
   BRÚJULA: preguntas de a una y, al final, rasgos, familias, fichas y santos afines.
   ========================================================= */
const peso = r => r.map((d,i)=>[d, i===0 ? 2 : 1]);
const afin = (rasgos, pts) => { const w = peso(rasgos); return w.reduce((s,[d,k])=>s+k*(pts[d]||0),0) / w.reduce((s,[,k])=>s+k,0); };
const minus = s => s.charAt(0).toLowerCase()+s.slice(1);
const lista = a => a.length<2 ? a.join('') : a.slice(0,-1).join(', ')+' y '+a[a.length-1];

function renderBrujula(){
  document.title = '¿Con qué te identificás? · Enciclopedia de Carismas';
  const resp = [];   // índice de la opción elegida en cada pregunta
  let i = -1;        // -1 = presentación
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pintar = html => { app.innerHTML = `<section class="bq">${html}</section>${footer()}`; };

  function intro(){
    pintar(`
      <p class="eyebrow">Brújula</p>
      <h1>¿Con qué te identificás?</h1>
      <p class="bq-lead">Diez preguntas cortas sobre lo que te atrae, lo que te mueve y cómo te imaginás tu vida. Al final vas a ver qué rasgos aparecen más en tus respuestas, qué formas de vida en la Iglesia podrías explorar y a qué santos te parecés.</p>
      <div class="note bq-aviso"><b>Esto no es un test vocacional.</b> Ninguna página puede decirte cuál es tu vocación: eso se descubre de a poco, rezando, conversando con alguien que te acompañe y conociendo comunidades de cerca. Tomalo como un juego para empezar a pensar, o para charlar en grupo.</div>
      <button type="button" class="bq-btn" id="bqGo">Empezar</button>`);
    $('#bqGo').addEventListener('click',()=>{i=0;pregunta()});
  }

  function pregunta(){
    const p = PREGUNTAS[i], n = PREGUNTAS.length;
    pintar(`
      <p class="eyebrow">Brújula · pregunta ${i+1} de ${n}</p>
      <div class="bq-prog" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${i}" aria-label="Avance"><i style="width:${i/n*100}%"></i></div>
      <h2 class="bq-q" tabindex="-1">${p.q}</h2>
      <div class="bq-ops">${p.o.map(([t],k)=>`<button type="button" class="bq-op${resp[i]===k?' on':''}" data-k="${k}">${t}</button>`).join('')}</div>
      <div class="bq-nav">${i>0?`<button type="button" class="bq-link" id="bqBack">← Anterior</button>`:`<button type="button" class="bq-link" id="bqBack">← Volver a la presentación</button>`}</div>`);
    app.querySelectorAll('.bq-op').forEach(b=>b.addEventListener('click',()=>{
      resp[i]=+b.dataset.k; i++;
      i<n ? pregunta() : resultado();
    }));
    $('#bqBack').addEventListener('click',()=>{ i--; i<0 ? intro() : pregunta(); });
    window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});
    $('.bq-q').focus({preventScroll:true});
  }

  function resultado(){
    const pts = {};
    resp.forEach((k,q)=>Object.entries(PREGUNTAS[q].o[k][1]).forEach(([d,v])=>pts[d]=(pts[d]||0)+v));
    const max = Math.max(1,...Object.values(pts));
    const top = Object.keys(RASGOS).sort((a,b)=>(pts[b]||0)-(pts[a]||0)).slice(0,3).filter(d=>pts[d]);

    const fichas = Object.entries(AFINIDAD).filter(([id])=>FICHAS[id])
      .map(([id,r])=>({id, s:afin(r,pts)})).sort((a,b)=>b.s-a.s);
    const familias = FAMILIAS.map(f=>{
      const mias = fichas.filter(x=>FICHAS[x.id].familia===f.id).slice(0,2);
      return {f, s: mias.length ? mias.reduce((t,x)=>t+x.s,0)/mias.length : 0};
    }).sort((a,b)=>b.s-a.s).slice(0,3);

    // santos: el más afín, después el más afín de otro tipo (varón / mujer / pareja), después el siguiente
    const cand = SANTOS_BRUJULA.filter(x=>!x.ficha || FICHAS[x.ficha])
      .map(x=>({...x, sc: afin(x.r,pts) + Math.random()*.01})).sort((a,b)=>b.sc-a.sc);
    const santos = [cand[0]];
    santos.push(cand.find(x=>x.s!==cand[0].s) || cand[1]);
    santos.push(cand.find(x=>!santos.includes(x)));
    const marca = x => x.ficha ? MK[FICHAS[x.ficha].secciones.find(s=>s.id==='santos').estado] : MK.g;
    const enComun = x => x.r.filter(d=>top.includes(d));

    pintar(`
      <p class="eyebrow">Brújula · tu resultado</p>
      <h1>Esto es lo que más aparece en tus respuestas</h1>
      <p class="bq-lead">Es una lectura simple de lo que elegiste, no un diagnóstico. Si algo no te representa, está perfecto: también eso dice algo.</p>

      <h2 class="bq-h">Lo que más te atrae</h2>
      <div class="bq-rasgos">${Object.keys(RASGOS).sort((a,b)=>(pts[b]||0)-(pts[a]||0)).filter(d=>pts[d]).slice(0,5).map((d,k)=>`
        <div class="bq-rasgo${k<3?' dest':''}">
          <div class="bq-rh"><b>${RASGOS[d][0]}</b><span>${Math.round((pts[d]||0)/max*100)}%</span></div>
          <div class="bq-bar" aria-hidden="true"><i style="width:${(pts[d]||0)/max*100}%"></i></div>
          ${k<3?`<p>${RASGOS[d][1]}</p>`:''}
        </div>`).join('')}</div>

      <h2 class="bq-h">Santos que se parecen a vos</h2>
      <div class="saints">${santos.map(x=>{const c=enComun(x);return `
        <div class="saint"${x.ficha?` data-fam="${FICHAS[x.ficha].familia}"`:''}>
          <b>${x.n}</b><span class="d">${x.d}</span>
          <p>${x.t} ${marca(x)}</p>
          ${c.length?`<div class="bq-why"><b>Por qué se parece a vos</b><p>${x.s==='p'?'Tienen':'Tiene'} en común con vos ${lista(c.map(d=>minus(RASGOS[d][0])))}.</p></div>`:''}
          ${x.ficha?`<a class="bq-mini" href="#${x.ficha}">Ver la ficha: ${FICHAS[x.ficha].nombre} →</a>`:''}
        </div>`}).join('')}</div>
      <p class="note">Los santos que tienen ficha enlazan a ella y llevan la marca de esa ficha. Los demás son datos de conocimiento general, todavía no verificados en esta enciclopedia. Si volvés a hacer la brújula, pueden aparecer otros santos con rasgos parecidos.</p>

      <h2 class="bq-h">Familias para explorar</h2>
      <div class="bq-fams">${familias.map(({f})=>`
        <a class="bq-fam" data-fam="${f.id}" href="#fam-${f.id}">${band(f.id)}<span class="era">${f.era}</span><strong>${f.nombre}</strong><span class="go">Ver la familia →</span></a>`).join('')}</div>

      <h2 class="bq-h">Fichas para mirar con calma</h2>
      <div class="fichas bq-fichas">${fichas.slice(0,6).map(({id})=>{const x=FICHAS[id];return `<a class="fcard" data-fam="${x.familia}" href="#${id}"><strong>${x.nombre}</strong><span>${x.tarjeta}</span><br><span class="go">Abrir ficha →</span></a>`}).join('')}</div>
      <p class="note">Algunas de estas formas de vida son solo para varones o solo para mujeres, y otras piden condiciones particulares: lo vas a ver en cada ficha, en “Cómo formar parte”. Las afinidades entre rasgos y fichas son una simplificación nuestra para orientarte.</p>

      <div class="bq-next">
        <h2 class="bq-h" style="margin-top:0">¿Y ahora?</h2>
        <ol class="steps">
          <li><span>Llevá esto a la oración: preguntale a Dios qué te pasa con lo que salió, qué te alegra y qué te inquieta.</span></li>
          <li><span>Charlalo con alguien de confianza que te pueda acompañar: un sacerdote, una religiosa, un laico formado. Es lo que la Iglesia llama ${terms('[[acompanamiento-espiritual|acompañamiento espiritual]]')}.</span></li>
          <li><span>Conocé de cerca: leé las fichas, visitá alguna comunidad, preguntá. En Mendoza podés consultar a la Vicaría para la Vida Consagrada o al Arzobispado.</span></li>
        </ol>
        <p style="margin-top:14px"><a class="bq-btn" href="#discernir">Ver la guía de discernimiento</a></p>
      </div>

      <div class="bq-acc">
        <button type="button" class="bq-btn" id="bqAgain">Volver a empezar</button>
        <a class="bq-link" href="#indice">Ver todas las fichas</a>
      </div>`);
    $('#bqAgain').addEventListener('click',()=>{resp.length=0;i=0;pregunta()});
    window.scrollTo(0,0);
  }

  intro();
}

function sel(b){const bq=b.closest('.quote').querySelector('blockquote');const r=document.createRange();r.selectNodeContents(bq);const s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Seleccionada';}

/* ventana del glosario */
const tip=$('#tip');
document.addEventListener('click',e=>{
  const t=e.target.closest('button.term');
  if(t){const [n,d]=GLOSARIO[t.dataset.term];$('#tipT').textContent=n;$('#tipD').textContent=d;$('#tipL').dataset.k=t.dataset.term;tip.hidden=false;return;}
  if(e.target.closest('#tipX')){tip.hidden=true}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')tip.hidden=true});

/* navegación */
function route(){
  tip.hidden=true;
  const h=(location.hash||'').slice(1);
  if(FICHAS[h]){guardado.sumar('fichasVistas',h);renderFicha(h);window.scrollTo(0,0);return;}
  if(h==='rezar'||h.startsWith('rezar-')){renderRezar();const el=h!=='rezar'&&document.getElementById('s-'+h.slice(6));el?el.scrollIntoView():window.scrollTo(0,0);return;}
  if(h==='brujula'){renderBrujula();window.scrollTo(0,0);return;}
  if(h==='discernir'){renderGuia();window.scrollTo(0,0);return;}
  if(!app.querySelector('#familias')) renderHome();
  if(h && h!=='inicio'){
    const k=h==='tipL'?null:h;
    const el=document.getElementById(k);
    if(el){if(h==='indice'){const d=el.querySelector('details');if(d)d.open=true;} el.scrollIntoView();}
  } else window.scrollTo(0,0);
}
$('#tipL').addEventListener('click',e=>{
  const k=e.currentTarget.dataset.k; tip.hidden=true;
  if(k){e.preventDefault(); if(!app.querySelector('#glosario')){location.hash='glosario';}
    setTimeout(()=>{const el=document.getElementById('g-'+k); if(el){el.scrollIntoView({block:'center'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash')}},60);}
});
window.addEventListener('hashchange',route);
route();

/* desplegables del menú: se abren con clic, se cierran al elegir, al tocar afuera o con Escape */
const desplegables=[...document.querySelectorAll('.dd')];
const cerrarMenus=(salvo)=>desplegables.forEach(d=>{if(d!==salvo){d.querySelector('.dd-btn').setAttribute('aria-expanded','false');d.querySelector('.dd-menu').hidden=true;}});
desplegables.forEach(d=>{
  const b=d.querySelector('.dd-btn'), m=d.querySelector('.dd-menu');
  b.addEventListener('click',()=>{const abrir=m.hidden;cerrarMenus(d);m.hidden=!abrir;b.setAttribute('aria-expanded',String(abrir));});
  m.addEventListener('click',e=>{if(e.target.closest('a'))cerrarMenus();});
});
document.addEventListener('click',e=>{if(!e.target.closest('.dd'))cerrarMenus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&desplegables.some(d=>!d.querySelector('.dd-menu').hidden)){cerrarMenus();document.activeElement?.blur?.();}});
window.addEventListener('hashchange',()=>cerrarMenus());

/* tema claro/oscuro, con preferencia guardada */
const temaBtn=$('#temaBtn');
if(temaBtn){
  temaBtn.addEventListener('click',()=>{
    const osc=matchMedia('(prefers-color-scheme: dark)').matches;
    const actual=document.documentElement.getAttribute('data-theme')||(osc?'dark':'light');
    const next=actual==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',next);
    try{localStorage.setItem('tema',next)}catch(e){}
    temaBtn.setAttribute('aria-pressed',String(next==='dark'));
    temaBtn.setAttribute('aria-label',next==='dark'?'Cambiar a tema claro':'Cambiar a tema oscuro');
  });
}

/* botón volver arriba */
const arriba=$('#arriba');
if(arriba){
  window.addEventListener('scroll',()=>arriba.classList.toggle('on',window.scrollY>600),{passive:true});
  arriba.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
}
