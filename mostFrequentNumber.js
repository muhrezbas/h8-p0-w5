function sorting(arrNumber) {
  // code di sini
   for(var i=0;i<arrNumber.length;i++) {
    for(var j=0;j<arrNumber.length-i;j++) {
      if(arrNumber[j]>arrNumber[j+1]) {
        temp = arrNumber[j]
        arrNumber[j] = arrNumber[j+1]
        arrNumber[j+1]=temp
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  var angkaTerbesar = arrNumber[0];
  var muncul = 0;
  var listSort = sorting(arrNumber);
  for (let i = listSort.length-1; i >=0; i--) {
    if (angkaTerbesar <= listSort[i]) 
    {
      angkaTerbesar = listSort[i]
      muncul++
    }
  }
  
  var hasil = 'angka paling besar adalah ' + angkaTerbesar + ' dan jumlah kemunculan sebanyak ' + muncul + ' kali';
  
  if (arrNumber.length === 0) {
    return '';
  } else {
    return hasil;
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''\