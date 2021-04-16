'use strict';

let array = [];
for(let i=1 ; i<=5; i++){
  let userinput = prompt('enter your numbers ');
  array.push(userinput);
}

function problem2(array){
  let arr = array;

  let max =(Math.max(arr[0],arr[1],arr[2],arr[3],arr[4]));
  let min =(Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]));
  console.log(max);
  console.log(min);

}


problem2(array);
