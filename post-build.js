const fs = require('fs');
const path = require('path');
const packagePath = path.join(__dirname, 'dist/ng-utils/package.json');
const packageJson = require(packagePath);

// Asegúrate de que los campos sean correctos
packageJson.main = 'fesm2022/ng-utils.mjs';
packageJson.typings = 'index.d.ts';
packageJson.module = 'esm2022/ng-utils.mjs';

// Configurar los exports si es necesario
packageJson.exports = {
  ".": {
    "import": "./esm2022/ng-utils.mjs",
    "require": "./fesm2022/ng-utils.mjs",
    "types": "./index.d.ts"
  },
  "./package.json": "./package.json"
};

// Escribir de vuelta al archivo package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
