// Verificación automática de la enciclopedia.
// Uso: npm run verificar   (requiere: npm install  y  npx playwright install chromium)
// Revisa: errores de JavaScript, que cada ficha tenga sus secciones, términos del glosario
// inexistentes, fichas sin familia o no listadas, y desbordes horizontales en pantalla de celular.
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const url = 'file://' + path.resolve(__dirname, '..', 'index.html');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errores = [];
  page.on('pageerror', e => errores.push('JS: ' + e.message));
  await page.goto(url);
  await page.waitForTimeout(300);

  const ids = await page.evaluate(() => Object.keys(FICHAS));
  for (const id of ids) {
    await page.evaluate(h => (location.hash = h), id);
    await page.waitForTimeout(40);
    const n = await page.$$eval('.sec', x => x.length);
    if (n < 12) errores.push(`${id}: solo ${n} secciones`);
    const ancho = await page.evaluate(() => document.documentElement.scrollWidth);
    if (ancho > 390) errores.push(`${id}: desborda en celular (${ancho}px)`);
    const crudo = await page.evaluate(() => document.body.innerHTML.includes('${MK.'));
    if (crudo) errores.push(`${id}: muestra "\${MK." sin convertir`);
  }

  const revision = await page.evaluate(() => {
    const sinGlosario = new Set(), sinFamilia = [], noListadas = [];
    const listadas = new Set(FAMILIAS.flatMap(f => f.fichas));
    for (const [id, f] of Object.entries(FICHAS)) {
      for (const m of JSON.stringify(f).matchAll(/\[\[([^|\]]+)\|/g)) if (!GLOSARIO[m[1]]) sinGlosario.add(m[1]);
      if (!FAMILIAS.find(x => x.id === f.familia)) sinFamilia.push(id);
      if (!listadas.has(id)) noListadas.push(id);
    }
    const fantasmas = [...listadas].filter(id => !FICHAS[id]);
    return { sinGlosario: [...sinGlosario], sinFamilia, noListadas, fantasmas };
  });
  if (revision.sinGlosario.length) errores.push('Términos sin glosario: ' + revision.sinGlosario.join(', '));
  if (revision.sinFamilia.length) errores.push('Fichas con familia inexistente: ' + revision.sinFamilia.join(', '));
  if (revision.noListadas.length) errores.push('Fichas que no figuran en FAMILIAS: ' + revision.noListadas.join(', '));
  if (revision.fantasmas.length) errores.push('IDs en FAMILIAS sin ficha: ' + revision.fantasmas.join(', '));

  // Brújula: datos coherentes con las fichas y recorrido completo en celular.
  const bq = await page.evaluate(() => {
    const out = [], R = Object.keys(RASGOS), fuera = ['viudas-consagradas', 'verbo-encarnado'];
    for (const [id, r] of Object.entries(AFINIDAD)) {
      if (!FICHAS[id]) out.push(`Brújula: AFINIDAD tiene "${id}", que no es una ficha`);
      r.filter(d => !R.includes(d)).forEach(d => out.push(`Brújula: rasgo "${d}" inexistente en ${id}`));
    }
    Object.keys(FICHAS).filter(id => !AFINIDAD[id] && !fuera.includes(id)).forEach(id => out.push(`Brújula: la ficha "${id}" no tiene afinidad`));
    for (const s of SANTOS_BRUJULA) {
      if (s.ficha && !FICHAS[s.ficha]) out.push(`Brújula: ${s.n} apunta a la ficha inexistente "${s.ficha}"`);
      s.r.filter(d => !R.includes(d)).forEach(d => out.push(`Brújula: rasgo "${d}" inexistente en ${s.n}`));
    }
    PREGUNTAS.forEach((p, i) => p.o.forEach(([, w]) => Object.keys(w).filter(d => !R.includes(d)).forEach(d => out.push(`Brújula: rasgo "${d}" inexistente en la pregunta ${i + 1}`))));
    return out;
  });
  errores.push(...bq);
  for (const k of [0, 1, 2, 3]) {
    await page.evaluate(() => (location.hash = 'inicio'));
    await page.evaluate(() => (location.hash = 'brujula'));
    await page.waitForTimeout(40);
    await page.click('#bqGo');
    const n = await page.evaluate(() => PREGUNTAS.length);
    for (let q = 0; q < n; q++) await page.click(`.bq-op[data-k="${k}"]`);
    const santos = await page.$$eval('.bq .saint', x => x.length);
    if (santos !== 3) errores.push(`Brújula (opción ${k + 1} siempre): muestra ${santos} santos`);
    const ancho = await page.evaluate(() => document.documentElement.scrollWidth);
    if (ancho > 390) errores.push(`Brújula (opción ${k + 1} siempre): desborda en celular (${ancho}px)`);
    const crudo = await page.evaluate(() => document.body.innerHTML.includes('${MK.') || document.body.innerHTML.includes('[['));
    if (crudo) errores.push(`Brújula: quedan marcas o términos sin convertir`);
  }

  // Guía de discernimiento: se dibuja completa, sin términos rotos ni desbordes.
  await page.evaluate(() => (location.hash = 'discernir'));
  await page.waitForTimeout(60);
  const gd = await page.evaluate(() => ({
    secs: document.querySelectorAll('.sec').length, esperadas: GUIA.secciones.length + 1,
    ancho: document.documentElement.scrollWidth,
    crudo: document.body.innerHTML.includes('${MK.') || document.body.innerHTML.includes('[['),
    sinGlosario: [...JSON.stringify(GUIA).matchAll(/\[\[([^|\]]+)\|/g)].map(m => m[1]).filter(k => !GLOSARIO[k]),
    enlaces: [...document.querySelectorAll('#app a[href^="#"]')].map(a => a.getAttribute('href').slice(1))
      .filter(h => h && !['inicio', 'discernir', 'brujula', 'rezar', 'indice', 'glosario', 'familias', 'sugerir'].includes(h) && !FICHAS[h] && !h.startsWith('fam-'))
  }));
  if (gd.secs !== gd.esperadas) errores.push(`Guía: ${gd.secs} secciones (se esperaban ${gd.esperadas})`);
  if (gd.ancho > 390) errores.push(`Guía: desborda en celular (${gd.ancho}px)`);
  if (gd.crudo) errores.push('Guía: quedan marcas o términos sin convertir');
  if (gd.sinGlosario.length) errores.push('Guía: términos sin glosario: ' + gd.sinGlosario.join(', '));
  if (gd.enlaces.length) errores.push('Guía: enlaces internos rotos: ' + gd.enlaces.join(', '));

  // Calendario litúrgico: fechas conocidas (comprobadas con iBreviary y el calendario de la Iglesia).
  const lit = await page.evaluate(() => {
    const out = [], f = s => { const [y, m, d] = s.split('-').map(Number); return LITURGIA.dia(new Date(y, m - 1, d)); };
    const casos = [
      ['2026-11-19', 'Jueves de la XXXIII semana del Tiempo Ordinario', 1, 'A'],
      ['2026-11-29', 'I Domingo de Adviento', 1, 'B'],
      ['2026-02-18', 'Miércoles de Ceniza', 4, 'A'],
      ['2026-04-05', 'Domingo de Pascua de la Resurrección del Señor', 0, 'A'],
      ['2026-05-25', 'Lunes de la VIII semana del Tiempo Ordinario', 4, 'A'],
      ['2025-11-23', 'Nuestro Señor Jesucristo, Rey del Universo', 2, 'C']
    ];
    for (const [s, nombre, sal, ciclo] of casos) {
      const r = f(s);
      if (r.nombre !== nombre || r.salterio !== sal || r.ciclo !== ciclo) out.push(`Liturgia ${s}: da "${r.nombre}", salterio ${r.salterio}, ciclo ${r.ciclo}`);
    }
    for (const [y, p] of [[2024, '2024-03-31'], [2025, '2025-04-20'], [2026, '2026-04-05'], [2027, '2027-03-28']])
      if (LITURGIA.pascua(y).toISOString().slice(0, 10) !== p) out.push(`Liturgia: Pascua ${y} mal calculada`);
    // jueves 19/11/2026 → luminosos; lunes → gozosos; domingo → gloriosos
    if (LITURGIA.misterios(new Date(2026, 10, 19)) !== 'luminosos' || LITURGIA.misterios(new Date(2026, 10, 16)) !== 'gozosos' || LITURGIA.misterios(new Date(2026, 10, 22)) !== 'gloriosos')
      out.push('Liturgia: misterios del día mal asignados');
    for (const id of ['senal-cruz', 'credo', 'padre-nuestro', 'ave-maria', 'gloria', 'jaculatoria', 'salve', 'oracion-rosario', 'angelus', 'regina-caeli'])
      if (!ORACIONES[id]) out.push(`Oraciones: falta "${id}"`);
    for (const [id, o] of Object.entries(ORACIONES)) {
      if (!MK[o.estado]) out.push(`Oraciones: "${id}" sin estado válido`);
      if (o.fuente != null && !ORACION_FUENTES[o.fuente]) out.push(`Oraciones: "${id}" con fuente inexistente`);
      if (o.grupo && !GRUPOS_ORACION.find(g => g[0] === o.grupo)) out.push(`Oraciones: "${id}" con grupo inexistente`);
    }
    return out;
  });
  errores.push(...lit);

  // Página Rezar: se dibuja, no desborda y el Rosario se puede rezar entero (y enciende el vitral).
  await page.evaluate(() => { localStorage.clear(); location.hash = 'inicio'; });
  await page.evaluate(() => (location.hash = 'rezar'));
  await page.waitForTimeout(60);
  const rz = await page.evaluate(() => ({
    ancho: document.documentElement.scrollWidth,
    crudo: document.body.innerHTML.includes('${MK.') || document.body.innerHTML.includes('[['),
    cuentas: document.querySelectorAll('#ros [data-b]').length,
    oraciones: document.querySelectorAll('.or').length
  }));
  if (rz.ancho > 390) errores.push(`Rezar: desborda en celular (${rz.ancho}px)`);
  if (rz.crudo) errores.push('Rezar: quedan marcas o términos sin convertir');
  if (rz.cuentas !== 61) errores.push(`Rezar: el rosario dibuja ${rz.cuentas} cuentas (se esperaban 61)`);
  if (!rz.oraciones) errores.push('Rezar: no se muestran las oraciones');
  for (const set of ['gozosos', 'luminosos', 'dolorosos', 'gloriosos']) {
    await page.click(`.ros-tab[data-set="${set}"]`);
    let pasos = 0;
    while (await page.$('#rosSig') && pasos < 200) { await page.click('#rosSig'); pasos++; }
    if (pasos < 70 || pasos >= 200) errores.push(`Rezar: el Rosario (${set}) terminó en ${pasos} pasos`);
    const ancho = await page.evaluate(() => document.documentElement.scrollWidth);
    if (ancho > 390) errores.push(`Rezar: el Rosario (${set}) desborda en celular (${ancho}px)`);
  }
  await page.evaluate(id => (location.hash = id), ids[0]);
  await page.evaluate(() => (location.hash = 'inicio'));
  await page.waitForTimeout(60);
  const vit = await page.evaluate(() => ({ oc: document.querySelectorAll('.rose .oc.on').length, cap: !!document.querySelector('#vitralReset'), hoy: !!document.querySelector('.hoy') }));
  if (vit.oc !== 1 || !vit.cap) errores.push('Inicio: el vitral no se encendió después de rezar y leer una ficha');
  if (!vit.hoy) errores.push('Inicio: falta la franja "Hoy"');
  await page.evaluate(() => localStorage.clear());

  console.log(`${ids.length} fichas revisadas.`);
  if (errores.length) { console.log('Problemas:\n- ' + errores.join('\n- ')); process.exitCode = 1; }
  else console.log('Todo en orden.');
  await browser.close();
})();
