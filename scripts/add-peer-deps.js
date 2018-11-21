const fs = require('fs');
const path = require('path');
const config = require('../package.json');

module.exports = () => {
  config.dependencies = Object.assign(config.dependencies || {}, config.peerDependencies);
  console.log('adding peerDependencies to dependencies');
  fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(config));
};
