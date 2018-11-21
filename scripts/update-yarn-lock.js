const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const jsonFormat = require('json-format');
const config = require('../package.json');

const writePackageJson = config => {
  fs.writeFileSync(path.join(__dirname, '../package.json'), jsonFormat(config, { type: 'space', size: 2 }));
};

const { preinstall, postinstall } = config.scripts;
delete config.scripts.preinstall;
delete config.scripts.postinstall;
writePackageJson(config);

spawnSync('yarn', {
  cwd: '..',
  stdio: [process.stdin, process.stdout, process.stderr],
  encoding: 'utf-8'
});
spawnSync('git add yarn.lock');

config.scripts.preinstall = preinstall;
config.scripts.postinstall = postinstall;
writePackageJson(config);
