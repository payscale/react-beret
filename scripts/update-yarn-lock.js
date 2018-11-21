const fs = require('fs');
const { spawnSync } = require('child_process');
const jsonFormat = require('json-format');
const config = require('../package.json');

const { preinstall, postinstall } = config.scripts;
delete config.scripts.preinstall;
delete config.scripts.postinstall;

fs.writeFileSync('../package.json', jsonFormat(config, { type: 'space', size: 2 }));

spawnSync('yarn', {
  cwd: '..',
  stdio: [process.stdin, process.stdout, process.stderr],
  encoding: 'utf-8'
});

spawnSync('git add yarn.lock');

config.scripts.preinstall = preinstall;
config.scripts.postinstall = postinstall;

fs.writeFileSync('../package.json', jsonFormat(config, { type: 'space', size: 2 }));
