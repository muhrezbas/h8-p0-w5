/*
    ======================
    String to Multidimensi
    ======================
    [INSTRUKSI]
    diberikan sebuah string yang jumlah characternya bisa di akar pangkat
    (4, 9, 16, 25 , ... ) 
    ubahlah karakter - karakter itu menjadi array multidimensi
    dimana hasil akar pangkat jumlah karakternya menjadi row dan col
    [EXAMPLE]
    stringToMultidimensi("0120194124213712")
    jumlah char : 16 
    row dan col = akat 16 
    row dan col = 4
    output: 
    [
         1 2 3 4 
        [0,1,2,0], 1 
        [1,9,4,1], 2 
        [2,4,2,1], 3
        [3,7,1,2]  4
    ]
 */

 function stringToMultidimensi(str) {
     // your code here 
     var akar = Math.sqrt(str.length)
     var akarSplit = String(akar).split(".")
    //  console.log(akarSplit)
    var result = []

    if (akarSplit.length>1){
      return "char count invalid"
     }
     else {
       for(i= 0; i<str.length; i++){
         if(i%akar===0){
        result.push([str[i]])
         }
         else {
           result[result.length-1].push(str[i])
         }
       }
     }
     return result
 }

 console.log(stringToMultidimensi("0120194124213712"))
 /*
    [
        [0,1,2,0],
        [1,9,4,1],
        [2,4,2,1],
        [3,7,1,2]
    ]
 */

console.log(stringToMultidimensi("01201941242137127"))
 /*
    // char count invalid
 */