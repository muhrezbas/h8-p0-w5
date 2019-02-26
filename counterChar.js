/*
======================
Counter Char Recursive
======================

[INinputUCTION]
counterCharRecursive adalah sebuah function recursive yang menerima dua parameter yaitu array dan inputing.
function ini akan mereturn jumalah char yang sesuai dengan parameter search.

[EXAMPLE]
input: ['ada', 'apa', 'ana', 'ada']
search: 'a'

function akan mencari jumlah a dalam input
result: 8

[RULE]
1. WAJIB menggunakan metode recursive
2. HANYA boleh menggunakan SATU looping
3. dilarang menggunakan indexOf(), find(), filter()
4. dilarang menggunakan regex
*/

function counterCharRecursive(input, search) {
  if(input.length === 0){
    return 0
  }
  else { 
    var counter = 0
    var check = input[0]
    var sisa = input.slice(1)
    
    for(var i = 0; check.length; i++){
      if(check[i]===search){
        counter++
      }
    }
  return counter + counterCharRecursive(sisa, search)
  }
}

// console.log(counterCharRecursive(['ada', 'apa', 'ana', 'ada'], 'a')) // 8
console.log(counterCharRecursive(['xxxxoxoxoxoxoxoxxxooooo'], 'x')) // 12
// console.log(counterCharRecursive(['b', 'o', 'l', 'd', 'f', 'o', 'x'], 'l')) // 1
// console.log(counterCharRecursive(['terima', 'kasih', 'sudah', 'selalu', 'berjuang'], 's')) // 3