/*
    ============
    Generate Bar 
    ============
    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 
*/

function generateBar(p,t) {
    // your code here

    for(i=0; i<t; i++){
      var result = []
      for(j=0; j<p; j++){
        
        if(i===t-1) {
         result.push("O") 
        }
        else if(i===0) {
        result.push("O")
        }
        else {
          result.push(" ")
        }
      }
      result[0] = "O"
      result[p-1]="0"
      console.log(result)
    }
    
}

generateBar(4,3)//
/*
    oooo
    o  o
    oooo
*/

generateBar(10,4) // 
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

generateBar(4,5) // panjang harus lebih besar daripada tinggi 