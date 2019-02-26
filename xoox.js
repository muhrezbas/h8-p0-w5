/*
    ===========
    Bar X dan O
    ===========
    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X
    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar 
    - p => panjang
    - t => tinggi 
    character yang pertama kali di cetak adalah x , 
    lalu o dan setelah itu o kemudian kembali lagi ke x 
    [EXAMPLE]
    generateBarXO(4,3)
    output: 
    xoox
    ooxo
    oxoo
    xoox
    generateBarXO(6,4)
    output: 
    xooxoo
    xooxoo
    xooxoo
    xooxoo
*/

function generateBarXO(p,t) {
    // your code here 
      var counter = 0
      var pointer = 0
    for(i=0; i<t; i++){
      var result = []
      if(counter===p){
      counter -= p
      pointer -= p
      }
      for(j=0; j<p; j++){
        if(j===pointer){
          result.push("x")
          pointer +=3
          counter++
        }
       if(j===counter){
          result.push("o")
          counter++
        }
      }
      console.log(result)
    }
    
}

generateBarXO(4,3)
/* 
xoox
ooxo
oxoo
xoox
*/

generateBarXO(6,4)
/*
xooxoo
xooxoo
xooxoo
xooxoo
*/