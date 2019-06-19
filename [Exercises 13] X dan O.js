// function xo(str) {
//     if (str.split('x').length === str.split('o').length) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
  
//   console.log(xo('xoxoxoyzyzyz')); // true
//   console.log(xo('oxooxo')); // false
//   console.log(xo('oxo')); // false
//   console.log(xo('xxxooo')); // true
//   console.log(xo('xoxooxxo')); // true

function xo(str) {
  check = ''
  counterx = 0
  countero = 0
  for(i=0 ; i<str.length; i++){
    if(str[i] === 'x'){
      counterx++
    }
    if(str[i] === 'o'){
      countero++
    }
  }
   if(counterx === countero){
     return true
   }else{
     return false
   }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
