const fs = require('fs')

const pack = JSON.parse(fs.readFileSync('./Leaflet/package.json', 'utf8'))
const version = fs.readFileSync('./.commithash', 'utf8')

pack.version = pack.version + '-' + version.trim().slice(0, 9)
pack.name = '@ec-nordbund/leaflet'

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

const readmePrepend = `> Copy of Leaflet wich not exposes window.L and is a module.\n\n`

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
