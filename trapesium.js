/*
    ================
    simple Trapesium
    ================
    [INSTRUCTION]
    buatlah sebuah program yg dapat membuat trapesium sederhana
    program ini hanya memiliki 1 input yaitu 
    - tinggi (t)
    Program ini memiliki 2 release. 
    yaitu : 
    [RELEASE 0]
    trapesiumRelease0(5)
    output: 
    ooooo
    oooooo
    ooooooo
    oooooooo
    ooooooooo
    [RELEASE 1]
    trapesiumRelease1(5)
    output:
    ooooo
    o    o
    o     o
    o      o
    ooooooooo
*/

function trapesiumRelease0(t) {
    // your code here 
    var awal = 0
    if(t === 0) {
      return "invalid input"
    }
    var tambah = t
    for(i=0; i<t; i++){
       var tampung = []
       tambah++
      for(j=0; j<tambah; j++){
        // if(i===0){
        // tampung.push("*")  
        // }
        // else if(i===t-1){
        //  tampung.push("*")   
        // }
        // else {
        // tampung.push(" ")
        // }
        tampung.push("*")
    }
    // tampung[awal]= "*"
    // tampung[t-1]= "*"
    //  awal++
    //  akhir--
     console.log(tampung.join(""))
  }
  return ""
}

trapesiumRelease0(5)
/* 
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/

function trapesiumRelease1(t) {
    //your code here
     var awal = 0
    if(t === 0) {
      return "invalid input"
    }
    var tambah = t
    for(i=0; i<t; i++){
       var tampung = []
       tambah++
      for(j=0; j<tambah; j++){
        if(i===0){
        tampung.push("*")  
        }
        else if(i===t-1){
         tampung.push("*")   
        }
        else {
        tampung.push(" ")
        }
    }
    tampung[awal]= "*"
    tampung[tambah-1]= "*"
    //  awal++
    //  akhir--
     console.log(tampung.join(""))
  }
  return ""
}

trapesiumRelease1(5)
/*
ooooo
o    o
o     o
o      o
ooooooooo
*/