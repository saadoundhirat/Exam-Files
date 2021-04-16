'use strict';

// solving problem one:
var numbers = [1,2, 3, 4, 5, 6];
function myFunction(numbers) {
  let array = numbers;
  for (var i = 0; i < array.length; i++) {
    var result = Math.sqrt(array[i]);
    console.log(result);
  }
}

myFunction(numbers);
