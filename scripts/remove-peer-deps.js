const fs = require('fs');
const path = require('path');
const config = require('../package.json');

module.exports = () => {
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

  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(config));
};
