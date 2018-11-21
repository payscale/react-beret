const fs = require('fs');
const path = require('path');
const jsonFormat = require('json-format');
const config = require('../package.json');

console.log('removing peerDependencies from dependencies');

const peers = config.peerDependencies;
const deps = config.dependencies;

if (deps && Object.keys(deps).length) {
  Object.keys(peers).forEach(peer => {
    if (peer in deps) {
      delete deps[peer];
    }
  });
}

config.dependencies = deps;
if (!deps || !Object.keys(deps).length) {
  delete config.dependencies;
}

fs.writeFileSync(path.join(__dirname, '../package.json'), jsonFormat(config, { type: 'space', size: 2 }));
