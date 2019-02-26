function totalDigitRekursif(angka) {
  // you can only write your code here!
  if(angka.length===0){
    return ""
  }
  else {
     var sisa = String(angka).slice(1,angka-1)
     return Number(String(angka)[0]) + Number(totalDigitRekursif(sisa))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5