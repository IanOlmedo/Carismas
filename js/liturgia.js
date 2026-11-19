/* =========================================================
   CALENDARIO LITÚRGICO (rito romano, calendario general)
   Calcula, para cualquier fecha: el tiempo litúrgico, la semana, el nombre del día, el color,
   el ciclo de lecturas del domingo (A, B, C), el año de las lecturas de los días de semana (I, II)
   y la semana del salterio de la Liturgia de las Horas (I a IV).
   NO calcula las fiestas de santos ni los traslados propios de cada país (por ejemplo, si una
   solemnidad se pasa al domingo): por eso la página de oración siempre enlaza a las lecturas del día.
   Comprobado contra iBreviary: el 19/11/2026 da "Jueves, XXXIII semana del Tiempo Ordinario (Año II) 1ª semana".
   ========================================================= */
const LITURGIA = (() => {
  const DIA = 864e5;
  const D = (y, m, d) => new Date(Date.UTC(y, m, d));
  const mas = (f, n) => new Date(f.getTime() + n * DIA);
  const entre = (a, b) => Math.round((b - a) / DIA);
  const ROM = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII',
    'XVIII', 'XIX', 'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXIX', 'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV'];
  const SEMANA = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const may = s => s.charAt(0).toUpperCase() + s.slice(1);
  const COLORES = {
    verde:   ['Verde',   'oklch(0.55 0.12 150)'],
    morado:  ['Morado',  'oklch(0.45 0.13 305)'],
    blanco:  ['Blanco',  'oklch(0.97 0.01 90)'],
    rojo:    ['Rojo',    'oklch(0.52 0.18 27)'],
    rosa:    ['Morado o rosa', 'oklch(0.75 0.09 355)']
  };

  /* Domingo de Pascua (algoritmo gregoriano anónimo, de Meeus/Jones/Butcher). */
  function pascua(y) {
    const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4,
      f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
      i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451),
      n = h + l - 7 * m + 114;
    return D(y, Math.floor(n / 31) - 1, (n % 31) + 1);
  }
  /* Primer domingo de Adviento: cuatro domingos antes de Navidad. */
  function adviento(y) {
    const nav = D(y, 11, 25), w = nav.getUTCDay();
    return mas(nav, -(w === 0 ? 7 : w) - 21);
  }
  /* Bautismo del Señor: domingo siguiente al 6 de enero. (Donde la Epifanía se pasa al domingo 7 u 8,
     el Bautismo cae el lunes siguiente: es una diferencia de un día que esta cuenta no contempla.) */
  function bautismo(y) {
    const ep = D(y, 0, 6), w = ep.getUTCDay();
    return mas(ep, w === 0 ? 7 : 7 - w);
  }

  /* fecha: un Date local (por defecto, hoy). Devuelve un objeto con todo lo calculado. */
  function dia(fecha) {
    const f = fecha || new Date();
    const y = f.getFullYear(), hoy = D(y, f.getMonth(), f.getDate()), dow = hoy.getUTCDay(), domingo = dow === 0;
    const P = pascua(y), ceniza = mas(P, -46), cuaresma1 = mas(P, -42), ramos = mas(P, -7), pent = mas(P, 49);
    const adv = adviento(y), nav = D(y, 11, 25), bau = bautismo(y);
    const anioLit = hoy >= adv ? y + 1 : y;
    const r = {
      fecha: hoy, dow, tiempo: '', semana: 0, nombre: '', color: 'verde', salterio: 0,
      ciclo: 'ABC'[(anioLit - 1) % 3], anioPar: anioLit % 2 === 0, solemne: domingo, pascual: false
    };
    const sal = n => ((n - 1) % 4) + 1;
    const nd = may(SEMANA[dow]);

    if (hoy >= adv && hoy < nav) {                      // Adviento
      r.tiempo = 'Adviento'; r.semana = Math.floor(entre(adv, hoy) / 7) + 1; r.color = 'morado'; r.salterio = sal(r.semana);
      r.nombre = domingo ? `${ROM[r.semana]} Domingo de Adviento` : `${nd} de la ${ROM[r.semana]} semana de Adviento`;
      if (domingo && r.semana === 3) r.color = 'rosa';
    } else if (hoy >= nav || hoy <= bau) {               // Navidad (del 25/12 al Bautismo del Señor)
      r.tiempo = 'Navidad'; r.color = 'blanco';
      if (hoy.getUTCMonth() === 11 && hoy.getUTCDate() === 25) { r.nombre = 'Natividad del Señor'; r.solemne = true; }
      else if (hoy.getUTCMonth() === 0 && hoy.getUTCDate() === 1) { r.nombre = 'Santa María, Madre de Dios'; r.solemne = true; }
      else if (+hoy === +bau) { r.nombre = 'Bautismo del Señor'; r.solemne = true; }
      else if (hoy.getUTCMonth() === 11) r.nombre = `${nd} de la Octava de Navidad`;
      else r.nombre = `${nd} del Tiempo de Navidad`;
    } else if (hoy < ceniza) {                          // Tiempo Ordinario, antes de Cuaresma
      r.tiempo = 'Ordinario'; r.semana = Math.floor(entre(bau, hoy) / 7) + 1; r.salterio = sal(r.semana);
      r.nombre = domingo ? `Domingo ${ROM[r.semana]} del Tiempo Ordinario` : `${nd} de la ${ROM[r.semana]} semana del Tiempo Ordinario`;
    } else if (hoy < ramos) {                           // Cuaresma
      r.tiempo = 'Cuaresma'; r.color = 'morado';
      if (hoy < cuaresma1) {
        r.semana = 0; r.salterio = 4;
        r.nombre = +hoy === +ceniza ? 'Miércoles de Ceniza' : `${nd} después de Ceniza`;
        r.solemne = +hoy === +ceniza;
      } else {
        r.semana = Math.floor(entre(cuaresma1, hoy) / 7) + 1; r.salterio = sal(r.semana);
        r.nombre = domingo ? `${ROM[r.semana]} Domingo de Cuaresma` : `${nd} de la ${ROM[r.semana]} semana de Cuaresma`;
        if (domingo && r.semana === 4) r.color = 'rosa';
      }
    } else if (hoy < mas(P, -3)) {                      // Semana Santa (hasta el miércoles)
      r.tiempo = 'Semana Santa'; r.semana = 6; r.salterio = 2; r.color = 'morado';
      r.nombre = domingo ? 'Domingo de Ramos en la Pasión del Señor' : `${nd} Santo`;
      if (domingo) r.color = 'rojo';
    } else if (hoy < P) {                               // Triduo pascual
      r.tiempo = 'Triduo pascual'; r.solemne = true;
      const k = entre(mas(P, -3), hoy);
      r.nombre = ['Jueves Santo', 'Viernes Santo de la Pasión del Señor', 'Sábado Santo'][k];
      r.color = ['blanco', 'rojo', 'morado'][k];
      r.nota = [
        'Por la mañana todavía es Cuaresma; a la tarde, con la Misa de la Cena del Señor, empieza el Triduo pascual.',
        'Es el único día del año en que no se celebra la Misa: se celebra la Pasión del Señor.',
        'Durante el día la Iglesia acompaña a Jesús en el sepulcro y no celebra la Misa. A la noche, la Vigilia Pascual (en blanco) ya es Pascua.'][k];
    } else if (hoy <= pent) {                           // Pascua
      r.tiempo = 'Pascua'; r.pascual = true; r.color = 'blanco';
      r.semana = Math.floor(entre(P, hoy) / 7) + 1; r.salterio = r.semana === 1 ? 0 : sal(r.semana);
      if (+hoy === +P) { r.nombre = 'Domingo de Pascua de la Resurrección del Señor'; r.solemne = true; }
      else if (+hoy === +pent) { r.nombre = 'Domingo de Pentecostés'; r.color = 'rojo'; r.salterio = 0; r.solemne = true; }
      else if (r.semana === 1) r.nombre = `${nd} de la Octava de Pascua`;
      else r.nombre = domingo ? `${ROM[r.semana]} Domingo de Pascua` : `${nd} de la ${ROM[r.semana]} semana de Pascua`;
    } else {                                            // Tiempo Ordinario, después de Pentecostés
      r.tiempo = 'Ordinario';
      r.semana = 35 - entre(mas(hoy, -dow), adv) / 7; r.salterio = sal(r.semana);
      r.nombre = domingo ? `Domingo ${ROM[r.semana]} del Tiempo Ordinario` : `${nd} de la ${ROM[r.semana]} semana del Tiempo Ordinario`;
      if (+hoy === +mas(pent, 7)) { r.nombre = 'La Santísima Trinidad'; r.color = 'blanco'; }
      if (+hoy === +mas(adv, -7)) { r.nombre = 'Nuestro Señor Jesucristo, Rey del Universo'; r.color = 'blanco'; }
    }
    r.colorNombre = COLORES[r.color][0];
    r.colorValor = COLORES[r.color][1];
    r.salterioRom = r.salterio ? ROM[r.salterio] : '';
    return r;
  }

  /* Misterios del Rosario según el día (Rosarium Virginis Mariae, 38). */
  const MISTERIO_DEL_DIA = ['gloriosos', 'gozosos', 'dolorosos', 'gloriosos', 'luminosos', 'dolorosos', 'gozosos'];
  const misterios = fecha => MISTERIO_DEL_DIA[(fecha || new Date()).getDay()];

  return { dia, pascua, adviento, bautismo, misterios, SEMANA };
})();
