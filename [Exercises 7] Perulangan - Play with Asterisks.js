
//1. Menyusun Barisan Bintang

var row1 = 5;
while(row1 > 0) {
  row1--; 
  console.log('*');  
}
//2. Menyusun Barisan Bintang Dengan Nested Looping


var row2 = 10;
for(var deret = row2 ; row2 > 0; row2--) {
    console.log('*****');
  }
  
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping


var row3 = 5;
for(var deret = row3, row3 = '', bintang = '*'; deret > 0; deret--) {
  row3 += bintang;
  console.log(row3);
}
