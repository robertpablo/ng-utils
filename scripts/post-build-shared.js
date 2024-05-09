const fs = require('fs');
const path = require('path');
const packagePath = path.join(__dirname, '/../dist/ng-shared/package.json');
const packageJson = require(packagePath);

console.log("Antes de modificar:", packageJson);

packageJson.main = 'fesm2022/ropabajo-shared.mjs';
packageJson.typings = 'index.d.ts';
packageJson.module = 'esm2022/ropabajo-shared.mjs';

packageJson.exports = {
  ".": {
    "import": "./esm2022/ropabajo-shared.mjs",
    "require": "./fesm2022/ropabajo-shared.mjs",
    "types": "./index.d.ts"
  },
  "./package.json": "./package.json"
};

console.log("Despues de modificar:", packageJson);

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
