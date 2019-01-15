const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const addPeerDeps = require('./add-peer-deps');
const removePeerDeps = require('./remove-peer-deps');

addPeerDeps();
execSync('yarn', {
  cwd: path.join(__dirname, '..'),
  stdio: [process.stdin, process.stdout, process.stderr],
  encoding: 'utf-8'
});
removePeerDeps();

const jsonFormat = require('json-format');
const config = require('../package.json');
fs.writeFileSync(path.join(__dirname, '../package.json'), jsonFormat(config, { type: 'space', size: 2 }));