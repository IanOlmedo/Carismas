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

  console.log(`${ids.length} fichas revisadas.`);
  if (errores.length) { console.log('Problemas:\n- ' + errores.join('\n- ')); process.exitCode = 1; }
  else console.log('Todo en orden.');
  await browser.close();
})();
