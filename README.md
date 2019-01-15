[![CircleCI](https://circleci.com/gh/payscale/react-beret.svg?style=svg)](https://circleci.com/gh/payscale/react-beret)

# beret

Beret is a library for building HTML templates with React. It contains components for encapsulating the stuff that your page needs to work. Things like Google Tag Manager, web fonts, etc., are required, but are distractions from actually building your content. Componentizing them with beret helps you to get back to what matters and prevent plugins and assets from falling through the cracks.

Beret is intended to be used with server-side rendering since many resources are required to be on the page before it is loaded.

## Example

To see an example of beret in action, check out the `examples` folder. It uses server-side rendering to create `index.html`. You can view the result in this repository or follow these steps to play with it for yourself:

1. Clone this repository.
1. Run `yarn install:peers` to install all dependencies and peer dependencies.
1. Run `yarn example`.
1. Open `examples/index.html` in your editor or your browser.

## Contributing

We gladly welcome contributions! Here's how to get started.

1. Clone this repository.
1. Run `yarn install:peers` to install all dependencies and peer dependencies.
1. Run `yarn test` to ensure all the tests are currently passing.
1. Make any changes you want to make.
1. Add tests, and test your changes as you develop with `yarn test:watch`.
1. If necessary, update the example page in the `examples` folder. Run `yarn start` to start the webpack-dev-server and test your changes to the example page in your browser.
