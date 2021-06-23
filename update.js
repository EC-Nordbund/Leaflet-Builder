const fs = require('fs')

const pack = JSON.parse(fs.readFileSync('./Leaflet/package.json', 'utf8'))
const version = fs.readFileSync('./.commithash')

pack.version = pack.version.split('-')[0] + '-build+' + version.toString().split('').filter(v => v !== '\u0000').join('').trim().slice(2, 12)
pack.name = '@ec-nordbund/leaflet'
pack.sideEffects = false

delete pack.files

const file = `
import './fix.js'
export * from '../src/Leaflet.js'`

const fix = `
if ((process && !process.browser) || !globalThis.window) {
  globalThis.window = {
    devicePixelRatio: 1,
    addEventListener: () => {}
  }
  globalThis.navigator = {
    userAgent: '',
    platform: ''
  }
  globalThis.document = { documentElement: { style: {} }, createElement: () => ({ getContext: () => { } }) }
}
`

fs.writeFileSync('./Leaflet/dist/fix.js', fix)
fs.writeFileSync('./Leaflet/dist/leaflet-src.js', file)
fs.writeFileSync('./Leaflet/package.json', JSON.stringify(pack, null, 2))

const readmePrepend = `> Copy of Leaflet wich not exposes window.L and is a module. Also you can require it in node (but not use it).\n
> Version pattern: leafletversion-build+commitID if I missed a new version / commit just create a issue at https://github.com/EC-Nordbund/Leaflet-Builder \n
> 
\n\n`

const readme = fs.readFileSync('./Leaflet/README.md', 'utf-8')
fs.writeFileSync('./Leaflet/README.md', readmePrepend + readme)

const ignore = `
build
.github
debug
docs
spec
`

fs.writeFileSync('./Leaflet/.npmignore', ignore)
