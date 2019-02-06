require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const fs = require('fs');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./App').default;

console.log('rendering example server side react...');

const content = ReactDOMServer.renderToString(React.createElement(App));

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="x-ua-compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>beret example</title>
  </head>
  <body>
    ${content}
  </body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), html);

console.log('done! open examples/index.html to view');