const { build } = require("esbuild");
const { sha3_224 } = require('js-sha3')

const { readdirSync, mkdirSync, existsSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const plugins = readdirSync("./plugins").filter(
  (v) => !v.endsWith(".js") && !v.endsWith(".css") && !v.endsWith('.json')
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
 * @param plugin {string}
 * @param config {{injected: Array<string>}}
 * @returns {import('esbuild').Plugin}
 */
function leafletPlugin(plugin, config) {
  return {
    name: "leaflet",
    setup(build) {
      build.onLoad(
        {
          filter: /.*/,
        },
        (load) => {
          const file = readFileSync(load.path, "utf-8");
          const pluginProps = config.injected.map(v => ([v, sha3_224(v)]))
          const needImports = [...globalProps, ...pluginProps];

          // const matches = file.matchAll(matcherGet);
          // for (const match of matches) {
          //   needImports.push(match[1]);
          // }

          // setInterval(() => {
          //   console.log(needImports)
          // }, 500);

          const imports = `import {${globalProps.map(v => `${v[0]} as L_${v[1]}`).join(',')}} from 'leaflet';

          import {${pluginProps.map(v => `${v[0]} as L_${v[1]}`).join(',')}} from ${JSON.stringify(join(__dirname, 'plugins', plugin + '.js'))}
          `

          const front = [
            ['\\s', ''],
            ['\\(', '('],
            ['\\{', '{'],
            ['\\s!', '!'],
            ['\\(!', '(!'],
            ['\\{!', '{!']
          ]

          const back = [
            ['\\(', '('],
            ['\\)\\.', ').'],
            ['\\)\\s*\\{', '){'],
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
                  replacement: `${fr[1]} L_${v[1]} ${ba[1]}`
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

          config.injected.forEach(inp => {
            const reg1 = new RegExp(`\\sL\\.(${inp}\\.[a-zA-Z\\.]*)\\s*=`, 'mg')
            const reg2 = new RegExp(`\\sL\\.(${inp})\\s*=`, 'mg')

            console.log(reg1, reg2)
            const matches1 = processFile.matchAll(reg1)
            const matches2 = processFile.matchAll(reg2)

            // console.log(reg)
            // console.log(matches)

            for (const b of matches1) {
              processFile = processFile.replaceAll(b[0], `;\n var _intern_${b[1].replaceAll('.', '_')} =`)
              processFile += `\n export const ${b[1].replaceAll('.', '_')} = _intern_${b[1].replaceAll('.', '_')}`
              // console.log(matches.next())
              console.log(b[0], b[1])
            }

            for (const b of matches2) {
              processFile = processFile.replaceAll(b[0], `;\n var _intern_${b[1].replaceAll('.', '_')} =`)
              processFile += `\n export const ${b[1].replaceAll('.', '_')} = _intern_${b[1].replaceAll('.', '_')}`
              // console.log(matches.next())
              console.log(b[0], b[1])
            }

          })


          const fullFile = imports + '\n' + processFile

          // const a = fullFile.matchAll(matcherSet)
          // let injected = []
          // for (b of a) {

          // }

          // injected = injected.sort((a, b) => a.length - b.length).filter((v, i, t) => t.indexOf(v) === i)

          // console.log(injected)

          console.log(fullFile.slice(0, 100))

          return {
            contents: fullFile,
            loader: 'js'
          }
        }
      );
    },
  };
}

plugins.forEach(async (pluginName) => {
  const path = join("./plugins", pluginName);

  const config = existsSync(path + '.json') ? JSON.parse(readFileSync(path + '.json'), 'utf-8') : {}

  await build({
    outdir: './dist/' + pluginName,
    format: "esm",
    entryPoints: [path + ".js"].filter((v) => existsSync(v)),
    bundle: true,
    platform: "neutral",
    external: ['leaflet'],
    plugins: [leafletPlugin(pluginName, config)],
    minify: true
  });

  const oldPack = JSON.parse(readFileSync(join(path, 'package.json'), 'utf-8'))

  const pack = {
    name: `@ec-nordbund/${pluginName.toLowerCase().replaceAll('.', '-')}`,
    version: oldPack.version + '-build' + readFileSync('./.git/modules/plugins/Leaflet.TimeDimension/refs/heads/master', 'utf-8').trim(),
    homepage: oldPack.homepage,
    author: oldPack.author,
    dependencies: Object.fromEntries(Object.entries(oldPack.dependencies || {}).filter(v => v[0] !== 'leaflet')),
    peerDependencies: {
      "leaflet": ">=1.7"
    },
    main: pluginName + '.js',
    style: pluginName + '.css'
  }

  writeFileSync('./dist/' + pluginName + '/package.json', JSON.stringify(pack, null, 2))

  // console.log(path)
});
