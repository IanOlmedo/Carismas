# Enciclopedia de Carismas

Sitio web estático (HTML + CSS + JS sin frameworks ni build): una **guía de orientación vocacional para jóvenes**
con formato de enciclopedia. Presenta las formas de vida que la Iglesia Católica propone (sacerdocio y diaconado,
vida consagrada, órdenes y congregaciones, institutos seculares, movimientos y matrimonio) y las herramientas para
discernir (acompañamiento espiritual, oración, retiros, contacto con cada comunidad). Lo usa Ian (Mendoza, Argentina)
para preparar charlas y encuentros. La definición del propósito aparece arriba de todo en el inicio (`.def` en `renderHome()`). Todo el contenido está en **español rioplatense** (voseo: "tocá", "podés").

## Reglas de contenido (obligatorias)

1. **Veracidad absoluta.** Nunca inventar datos, fechas, cifras, citas ni fuentes. Si no se sabe, escribir "No lo sé" o "No encontré…".
2. **Cada dato lleva su marca** (ver abajo). Lo que no se pudo verificar en una fuente se marca como tal.
3. **Distinguir** hechos verificados, conocimiento general, tradición y opinión. Las opiniones propias se aclaran ("es una impresión mía").
4. **Citas:** solo Biblia, documentos oficiales o frases muy conocidas; si la autoría es dudosa, poner "Atribuida a…".
5. **Temas delicados** (controversias, abusos, causas judiciales): tono equilibrado y factual, con fuentes; nunca presentar como modelo a alguien condenado.
6. **Mendoza:** cuando no se encuentra presencia, decirlo y sugerir consultar a la Vicaría para la Vida Consagrada o al Arzobispado.
7. **Imágenes:** no usar imágenes de internet. Ian va a aportar las suyas (pendiente).
8. Precisión antes que elocuencia; tono humano y simple.

## Estructura del proyecto

```
index.html                 Marcado base y carga de scripts (en orden)
css/estilos.css            Todo el diseño (tokens de color, tipografía, componentes)
js/datos/marcas.js         MK: las cuatro marcas de verificación
js/datos/glosario.js       GLOSARIO: clave -> [término, definición]
js/datos/familias.js       FAMILIAS: las 8 familias, sus fichas (en orden) y "proximas"
js/datos/fichas/_base.js   const FICHAS = {}
js/datos/fichas/<familia>.js  Object.assign(FICHAS, {...}) con las fichas de esa familia
js/datos/brujula.js        Brújula (#brujula): RASGOS, PREGUNTAS, AFINIDAD de cada ficha y SANTOS_BRUJULA
js/datos/guia.js           GUIA: guía de discernimiento (#discernir), con secciones y fuentes como una ficha
js/datos/oraciones.js      ORACIONES, MISTERIOS del Rosario y ROSARIO_PORQUE para la página Rezar (#rezar)
js/liturgia.js             LITURGIA: calendario litúrgico calculado (tiempo, semana, color, ciclos, salterio, misterios del día)
js/app.js                  Render, rosetón, ruteo por hash, glosario emergente, Rezar y Rosario paso a paso
herramientas/verificar.js  Chequeo automático con Playwright
```

No hay módulos ES a propósito: el sitio tiene que abrir con doble clic (file://). El orden de los `<script>` importa:
`marcas` → `glosario` → `familias` → `fichas/_base` → fichas por familia → `brujula` → `guia` → `oraciones` → `liturgia` → `app`.

**Brújula:** cada ficha nueva tiene que sumarse a `AFINIDAD` en `js/datos/brujula.js` (si no, `npm run verificar` avisa).
Los santos sin ficha van con datos prudentes y se muestran como "conocimiento general".

**Rezar (#rezar):** muestra el día litúrgico, la pregunta del día, el Rosario paso a paso (con los misterios que
tocan según el día, *Rosarium Virginis Mariae* 38), el Ángelus o el Regina Caeli según el tiempo, las oraciones y
enlaces a las lecturas (Ciudad Redonda, Vatican News) y a la Liturgia de las Horas (iBreviary).
- Las oraciones se copian **textuales** de una fuente oficial (hoy, el Compendio del Catecismo, Apéndice). Para sumar
  una: agregarla a `ORACIONES` con `grupo`, `fuente` (índice en `ORACION_FUENTES`) y `estado`; `tiempo: 'pascua'`
  si es propia de un tiempo. No copiar textos de la Liturgia de las Horas ni del leccionario (son traducciones
  protegidas y cambian cada día): se enlazan.
- `js/liturgia.js` calcula el calendario general (Pascua, Adviento, semanas, color, ciclo A/B/C, año I/II, salterio).
  No calcula fiestas de santos ni traslados propios de Argentina; por eso siempre se enlaza a las lecturas.
  Si se toca, `npm run verificar` lo compara con fechas conocidas.

**Vitral y pregunta del día:** el rosetón del inicio se enciende con las fichas leídas (cada familia en proporción)
y con los días en que se terminó un Rosario (óculos dorados). Se guarda solo en el navegador de cada persona
(`localStorage`: `fichasVistas`, `rosariosRezados`). La pregunta del día sale de `compartir.preguntas` de las fichas
y cambia a medianoche.

## Marcas de verificación (`MK`)

Se escriben dentro de los textos HTML como `${MK.v}` (template literal) o como texto `"${MK.v}"` en strings comunes
(app.js las convierte al renderizar).

| Marca | Significado |
|---|---|
| `MK.v` | verificado en una fuente listada en `fuentes` |
| `MK.g` | conocimiento general, no verificado en esta ficha |
| `MK.t` | tradición (relato antiguo no comprobable del todo) |
| `MK.p` | sin confirmar |

Cada sección también lleva `estado: 'v' | 'g' | 't' | 'p'`.

## Glosario en los textos

`[[clave|texto visible]]` se convierte en un botón que abre la definición. La clave tiene que existir en `GLOSARIO`
(sin espacios, en kebab-case). Funciona en `resumen`, en el `html` de las secciones y en los textos de familias.
**No** funciona en `datos` (la columna lateral): ahí va texto plano.

## Estructura de una ficha

```js
id: {                                  // kebab-case; si tiene guiones, entre comillas: "siervas-jesus"
  familia: "apostolica",               // monacal | mendicante | canonigos | clerigos | apostolica | seculares | movimientos | diocesana
  nombre: "…", latin: "…",
  resumen: "…",                        // 2-3 oraciones, admite [[glosario]]
  tarjeta: "…",                        // una línea para la tarjeta de la familia
  lema: ["frase", "origen de la frase"],
  habito: [["nombre del color", "oklch(...)"]],
  datos: [["Etiqueta", "valor"]],      // texto plano
  secciones: [                         // SIEMPRE estas 10, en este orden:
    { id:"nombre",       titulo:"Nombre",                          estado:"v", html:`…` },
    { id:"fundador",     titulo:"Fundador y año",                  estado:"v", html:`…` }, // en movimientos: "Origen y año"
    { id:"historia",     titulo:"Historia y origen",               … },  // usar <ol class="timeline"> con <span class="y">AÑO CORTO</span>
    { id:"carisma",      titulo:"Carisma principal",               … },
    { id:"espiritualidad", titulo:"Espiritualidad",                … },
    { id:"mision",       titulo:"Misión y apostolados",            … },
    { id:"habito",       titulo:"Hábito y vestimenta",             … },
    { id:"santos",       titulo:"Santos vinculados",               … },  // <div class="saints"><div class="saint">…
    { id:"formar-parte", titulo:"Cómo formar parte",               … },
    { id:"presencia",    titulo:"Presencia en Argentina y Mendoza", … }
  ],
  compartir: {
    frases: [["cita", "autor o referencia"]],
    anecdotas: [["título", "texto ${MK.x}"]],   // puede estar vacío
    preguntas: ["…"],
    dinamica: "…"
  },
  fuentes: [["Título de la fuente", "https://…"]]
}
```

**Familia `diocesana`** (sacerdote, diácono permanente, vírgenes, ermitaños, matrimonio, viudas): mantiene los mismos 10 `id`
pero con títulos adaptados: Nombre · Origen en la Iglesia · Historia · Identidad y sentido · Espiritualidad ·
Misión y servicio · Vestimenta y signos · Santos y testigos · Cómo es el camino · En Argentina y Mendoza.

Componentes HTML disponibles dentro de `html`: `ul.dots`, `ol.timeline`, `div.cols > div.box`, `div.saints > div.saint`
(con `b`, `span.d`, `p`, `div.tags`), `ol.steps`, `div.place`, `p.note`.
En la línea de tiempo, el año tiene que ser corto ("1524", "s. XII", "≈1950"), si no se desarma la columna.

## Cómo agregar una ficha

1. Investigar con fuentes y anotar qué está verificado y qué no.
2. Agregar la ficha en `js/datos/fichas/<familia>.js`.
3. Sumarla a `AFINIDAD` en `js/datos/brujula.js` (y sus santos a `SANTOS_BRUJULA` si corresponde).
4. Agregar su id al array `fichas` de la familia en `js/datos/familias.js` y sacarla de `proximas` si estaba.
5. Si usa términos nuevos, agregarlos a `js/datos/glosario.js`.
6. Correr `npm run verificar` y revisar visualmente en el navegador (claro, oscuro y celular).

## Diseño

- Colores con `oklch` y tokens en `:root`, con tema claro (pergamino), oscuro (azul noche) y respeto de `data-theme`.
- Cada familia tiene su tono (`[data-fam="…"]{--h; --c}`) y su trama (`.pat-<familia>`).
- Tipografía: títulos y texto en la letra del sistema de Apple (SF) con Geist como alternativa; Marcellus solo para
  frases, lemas y nombres latinos.
- El rosetón gótico se dibuja en `rosette()` (app.js) a partir de `FAMILIAS`.
- Tiene que funcionar a 390 px de ancho sin scroll horizontal.

## Comandos

```
npm install                       # instala Playwright (solo para verificar)
npx playwright install chromium   # descarga el navegador de pruebas (una vez)
npm run verificar                 # chequeo automático
npm run servir                    # servidor local opcional (también abre con doble clic en index.html)
```

## Pendientes

- Agregar las imágenes de santos de Ian (carpeta `img/` a crear; definir formato y licencia).
- Verificar la presencia en Mendoza de las fichas marcadas "sin confirmar".
- Publicar el sitio (por ejemplo, GitHub Pages).
- Revisión general de datos marcados como "conocimiento general".
