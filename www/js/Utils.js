// Library for all utility functions.
// Referenced from the namespace - 'Utils'

var Utils = {
  foo: function(a, b) {
    console.log("foo() called with " + a + " , " + b);
  },
  randomIntBetween: function(lower, upper) {
    return Math.round(Math.random() * (upper - lower)) + lower;
  }
};
