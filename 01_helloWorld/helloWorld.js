const helloWorld = function() {
  return 'Hello, World!'
};

module.exports = helloWorld;
// module.exports is how we export the function so that it can be imported with require() in the spec file