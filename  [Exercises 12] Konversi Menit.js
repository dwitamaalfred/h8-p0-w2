/*function konversiMenit(menit) { 
    var jam = Math.floor(menit / 60);
    var sisaMenit = menit % 60;
    if(sisaMenit <= 9) {
      return jam + ':0' + sisaMenit;
    }
    return jam + ':' + sisaMenit;
  }
  console.log(konversiMenit(63));
  console.log(konversiMenit(124));
  console.log(konversiMenit(53));
  console.log(konversiMenit(88));
  console.log(konversiMenit(120));*/

  function konversiMenit(menit) {
    var menit1 = 0;
    var jam = 0;
    
      menit1 += menit%60;
      jam = (menit - menit1) / 60 ;

      return jam + ':' + menit1;
  }