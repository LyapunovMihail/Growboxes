cd ./dist
uglifyjs vendor.bundle.js -o vendor.bundle.js
GOTO LABEL1
:LABEL1
uglifyjs inline.bundle.js -o inline.bundle.js
uglifyjs polyfills.bundle.js -o polyfills.bundle.js
uglifyjs styles.bundle.js -o styles.bundle.js
uglifyjs main.bundle.js -o main.bundle.js