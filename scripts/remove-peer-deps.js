const fs = require('fs');
const jsonFormat = require('json-format');
const config = require('./package.json');

console.log('Removing peerDependencies from dependencies.');

const peers = config.peerDependencies;
const deps = config.dependencies;

Object.keys(peers).forEach(peer => {
  console.log(`Removing ${peer}`);
  delete deps[peer];
});

config.dependencies = deps;
if (!deps || !Object.keys(deps).length) {
  delete config.dependencies;
}

fs.writeFileSync('package.json', jsonFormat(config, { type: 'space', size: 2 }));
