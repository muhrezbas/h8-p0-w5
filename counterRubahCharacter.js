/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 
*/
function soal1(param)
{
    // your code here
    var result = []
    var counter = 0
    if(param===0){
      return "invalid input"
    }
    for(i=0; i<param; i++){
      counter++
      if(counter===1){
        result.push("!")
      }
      if(counter===2){
        result.push("@")
      }
      if(counter===3){
        result.push("#")
        counter=0
      }
    }
    return result
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input