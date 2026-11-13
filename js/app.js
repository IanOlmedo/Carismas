/* =========================================================
   RENDER
   ========================================================= */
const $ = s => document.querySelector(s);
const app = $('#app');
const fam = id => FAMILIAS.find(f => f.id === id);
const terms = s => s.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (m, k, txt) =>
  GLOSARIO[k] ? `<button type="button" class="term" data-term="${k}">${txt}</button>` : txt);
const band = f => `<div class="band pat-${f}" aria-hidden="true"></div>`;
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
    segs+=`<g class="seg" data-fam="${f.id}" tabindex="0" role="link" aria-label="${f.nombre}">
      <path class="glass" d="${d}"/><path class="came" d="${came}"/>
      <circle class="eye" cx="${ex.toFixed(2)}" cy="${ey.toFixed(2)}" r="7"/>
      <text><textPath href="#lb-${f.id}" startOffset="50%" text-anchor="middle">${label}</textPath></text></g>`;
    const [ox,oy]=xy(146,a+step/2);
    ocs+=`<circle class="oc" cx="${ox.toFixed(2)}" cy="${oy.toFixed(2)}" r="8.5"/>`;
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
  <section class="hero">
    <div>
      <p class="eyebrow">Enciclopedia de carismas y espiritualidades</p>
      <h1 style="margin-top:12px">Muchos caminos,<br><em>un solo centro.</em></h1>
      <p class="lead">La Iglesia es mucho más grande y diversa de lo que solemos ver. Monjes, frailes, consagrados en el mundo, movimientos de laicos, sacerdotes y diáconos diocesanos, matrimonios: cada [[carisma|carisma]] es una manera particular de vivir el Evangelio, y todos tienen a Cristo en el centro.</p>
      <p class="sub">Esta enciclopedia está pensada para jóvenes que quieren conocer las distintas formas de vida que la Iglesia propone para caminar hacia la santidad. Tocá una parte del rosetón para ir a cada familia.</p>
    </div>
    <div><div class="rose">${rosette()}</div><p class="rose-cap">Ocho grandes familias de vida consagrada, ministerial y laical</p></div>
  </section>

  <section class="intro" aria-label="Cómo usar la enciclopedia">
    <div><h3>Cada ficha, diez preguntas</h3><p>Nombre, fundador, historia, carisma, espiritualidad, misión, hábito, santos, cómo formar parte y presencia en Argentina y Mendoza (en las vocaciones diocesanas, adaptadas: origen en la Iglesia, identidad, vestimenta y signos). Más un apartado para compartir en grupo.</p></div>
    <div><h3>Palabras difíciles, explicadas</h3><p>Los términos con subrayado punteado se pueden tocar para ver qué significan. También están todos juntos en el <a href="#glosario">glosario</a>.</p></div>
    <div><h3>Qué tan seguro es cada dato</h3><p>Los datos llevan una marca para que sepas de dónde vienen.</p>
      <div class="legend">${MK.v}${MK.g}${MK.t}${MK.p}</div></div>
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
  ${footer()}`;
  app.querySelectorAll('.lead').forEach(el=>el.innerHTML=terms(el.innerHTML));
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
          <header><h2>${s.titulo}</h2>${MK[s.estado]}</header>
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
      </section>
    </article>
  </div>
  ${footer()}`.replace(/\$\{MK\.(\w)\}/g,(m,k)=>MK[k]||'');

  app.querySelectorAll('.toc a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById(a.dataset.to).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}));
  app.querySelectorAll('.copy').forEach(b=>b.addEventListener('click',()=>{
    const [q,w]=c.frases[+b.dataset.q]; const txt=`“${q}” — ${w}`;
    const done=()=>{b.textContent='Copiada';setTimeout(()=>b.textContent='Copiar',1600)};
    try{navigator.clipboard.writeText(txt).then(done,()=>sel(b))}catch(e){sel(b)}
  }));
  // marca la sección visible en el índice
  try{
    const links=[...app.querySelectorAll('.toc a')];
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.dataset.to===en.target.id))}}),{rootMargin:'-30% 0px -60% 0px'});
    app.querySelectorAll('.sec').forEach(s=>io.observe(s));
  }catch(e){}
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
  if(FICHAS[h]){renderFicha(h);window.scrollTo(0,0);return;}
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
