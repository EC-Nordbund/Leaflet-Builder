const { build } = require("esbuild");
const { sha3_224 } = require('js-sha3')

const { readdirSync, mkdirSync, existsSync, readFileSync } = require("fs");
const { join } = require("path");

const plugins = readdirSync("./plugins").filter(
  (v) => !v.endsWith(".js") && !v.endsWith(".css")
);

const globalProps = [
  "Transformation",
  "transformation",
  "LineUtil",
  "PolyUtil",
  "DomUtil",
  "CRS",
  "Projection",
  "LatLng",
  "latLng",
  "LatLngBounds",
  "latLngBounds",
  "Point",
  "point",
  "Bounds",
  "bounds",
  "Evented",
  "Draggable",
  "Layer",
  "GridLayer",
  "gridLayer",
  "TileLayer",
  "tileLayer",
  "ImageOverlay",
  "imageOverlay",
  "SVGOverlay",
  "svgOverlay",
  "VideoOverlay",
  "videoOverlay",
  "Path",
  "Polyline",
  "polyline",
  "Polygon",
  "polygon",
  "Rectangle",
  "rectangle",
  "CircleMarker",
  "circleMarker",

  // /**
  //  * 
  //  */
  'Class', 'Mixin', 'Map',
  'setOptions',
  'UI',
  'Control',
  'control',
  'DomEvent',
  'geoJson',
  'bind',
  'extend',
  'Util',

].map(v => ([v, sha3_224(v)]));

// const matcherGet = new RegExp(`[\n\s\r]+L\.(${globalProps.join("|")})`, "gm");
const matcherSet = new RegExp(`[\\n\\s\\r]+L\\.([a-zA-Z\.]*)\\s*=`, "gm");

/**
 * 
 * @param config {{injected: Array<string>}}
 * @returns {import('esbuild').Plugin}
 */
function leafletPlugin(config) {
  return {
    name: "leaflet",
    setup(build) {
      build.onLoad(
        {
          filter: /.*/,
        },
        (load) => {
          const file = readFileSync(load.path, "utf-8");
          const needImports = globalProps;

          // const matches = file.matchAll(matcherGet);
          // for (const match of matches) {
          //   needImports.push(match[1]);
          // }

          // setInterval(() => {
          //   console.log(needImports)
          // }, 500);

          const imports = `import {${needImports.map(v => `${v[0]} as L_${v[1]}`).join(',')}} from 'leaflet'`

          const front = [
            ['\\s', ''],
            ['\\(', '('],
            ['\\{', '{']
          ]

          const back = [
            ['\\(', '('],
            ['\\)\.', ').'],
            ['\\)\\(', ')('],
            ['\\)\n', ')\n'],
            ['\\s*\\|\\|', ' ||'],
            ['=', '='],
            ['\\s*\\.', '.']
          ]

          const replacers = needImports.flatMap(v => {
            const arr = []

            front.forEach(fr => {
              back.forEach(ba => {
                arr.push({
                  reg: new RegExp(`${fr[0]}L\\.${v[0]}${ba[0]}`, 'gm'),
                  replacement: `${fr[1]}L_${v[1]}${ba[1]}`
                })
              });
            });

            return arr
          })

          let processFile = file
          processFile = processFile.replaceAll('L.UI = L.ui = L.UI || {}', '')

          replacers.forEach(v => {
            // console.log(v)
            processFile = processFile.replaceAll(v.reg, v.replacement)
          })

          const fullFile = imports + '\n' + processFile

          const a = fullFile.matchAll(matcherSet)
          let injected = []
          for (b of a) {
            
          }

          // injected = injected.sort((a, b) => a.length - b.length).filter((v, i, t) => t.indexOf(v) === i)

          // console.log(injected)

          return {
            contents: fullFile,
            loader: 'js'
          }
        }
      );
    },
  };
}

plugins.forEach((pluginName) => {
  const path = join("./plugins", pluginName);

  build({
    outdir: './dist',
    format: "esm",
    entryPoints: [path + ".js", path + "css"].filter((v) => existsSync(v)),
    bundle: true,
    platform: "neutral",
    external: ['leaflet'],
    plugins: [leafletPlugin()],
  });

  // console.log(path)
});
