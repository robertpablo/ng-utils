const fs = require('fs');
const path = require('path');
const packagePath = path.join(__dirname, '/../dist/ng-shared/package.json');
const packageJson = require(packagePath);

packageJson.main = 'fesm2022/ropabajo-core.mjs';
packageJson.typings = 'index.d.ts';
packageJson.module = 'esm2022/ropabajo-core.mjs';

packageJson.exports = {
  ".": {
    "import": "./esm2022/ropabajo-core.mjs",
    "require": "./fesm2022/ropabajo-core.mjs",
    "types": "./index.d.ts"
  },
  "./package.json": "./package.json"
};

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
