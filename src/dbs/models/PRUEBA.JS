var value = " Hello World";
setTimeout(
  (function (value) {
    return function () {
      console.log(value);
    };
  })(value),
  1000
);
value = " End";
// output: Hello World
