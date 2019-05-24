function konversiMenit(menit) { 
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
  console.log(konversiMenit(120));
