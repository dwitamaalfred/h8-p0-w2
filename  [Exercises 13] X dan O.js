function xo(str) {
    if (str.split('x').length === str.split('o').length) {
      return true;
    }
    else {
      return false;
    }
  }
  
  console.log(xo('xoxoxoyzyzyz')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true