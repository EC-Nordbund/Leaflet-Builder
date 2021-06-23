rm -r ./Leaflet
git clone https://github.com/Leaflet/Leaflet.git
cd Leaflet
git rev-parse --verify HEAD > ../.commithash
cd ..
node update.js
cd Leaflet
rm -r docs
yarn publish --non-interactive
cd ..

