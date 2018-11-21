const fs = require('fs');
const jsonFormat = require('json-format');
const config = require('../package.json');

config.dependencies = Object.assign(config.dependencies || {}, config.peerDependencies);
console.log('adding peerDependencies to dependencies');

fs.writeFileSync('../package.json', jsonFormat(config, { type: 'space', size: 2 }));
