/*
    ==================
    WordToArrayReverse
    ==================
    [INSTRUCTION]
    buatlah sebuah program yang mengconvert string menjadi array, yang di reverse
    posisinya berdasarkan per kata 
    [RULE]
    - dilarang menggunakan function bawaan javascript kecuali split
    [EXAMPLE]
    wordToArrayReverse("Hello my name is Dimas")
    output:["Dimas","is","name","my","Hello"]
    wordToArrayReverse("Lorem ipsum sit dolor amet")
    output:["amet","dolor","sit","ipsum","Lorem"]
*/

function wordToArrayReverse(str) {
    // your code here 
    var str = str.split(" ")
    var result = []
    for(i = str.length-1; i>=0; i-- ){
      result.push(str[i])
    }
    console.log(result)
    
}

wordToArrayReverse("Hello my name is Dimas")
//["Dimas","is","name","my","Hello"]

wordToArrayReverse("Lorem ipsum sit dolor amet")
//["amet","dolor","sit","ipsum","Lorem"]