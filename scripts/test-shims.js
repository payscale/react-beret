global.requestAnimationFrame = callback => {
  setTimeout(() => {}, 0);
};
// suppress proptype warnings in tests
jest.spyOn(console, 'error').mockImplementation(warning => {
  if (warning && warning.indexOf('Warning: Failed prop type:') > -1) {
    process.nextTick(() => {});
  }
});
