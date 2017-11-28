// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // input: any javascript value
  // output: a JSON string

  // Base cases
  // Number
  if (typeof obj === 'number') {
    return obj.toString();
  }
  // Boolean true or false
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  // String - empty or not
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // null (is an object so watch out)
  if (obj === null) {
    return 'null';
  }

  // Recursive cases
  // Array - empty or not - can contain other objects
  if (Array.isArray(obj)) {

    let stringifiedValues = obj.reduce(function(acc, elem) {
      return acc += stringifyJSON(elem) + ',';
    }, '');

    return '[' + stringifiedValues.slice(0, stringifiedValues.length - 1) + ']';
  } else {
    // Object - empty or not - can contain other objects
    // Termination cases
    // Functions
    // undefined
    let stringifiedValues = '';

    for (var key in obj) {
      if (key !== 'functions' && key !== 'undefined') {
        stringifiedValues += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }

    return '{' + stringifiedValues.slice(0, stringifiedValues.length - 1) + '}';
  }
};
