const fs = require('fs')

const pack = JSON.parse(fs.readFileSync('./Leaflet/package.json', 'utf8'))
const version = fs.readFileSync('./.commithash', 'utf8')

pack.version = pack.version + '-' + version.trim()
pack.name = '@ec-nordbund/leaflet'

delete pack.files

const file = `export * from '../src/Leaflet.js'`

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
