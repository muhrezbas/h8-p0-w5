/*
    wajib pseudocode. 
    Jawaban pseudocode disini 
    
*/

function soal2(param)
{
  if(param===0){
    return "invalid input"
  }
    // your code here
    var abjad = "abcdefghijklmnopqrstuvwxyz"
    var result = []
    var counter = 0
    for(i= 0; i<param; i++){
      result.push([])
      for(j=0; j<param; j++){
        result[i].push(abjad[counter])
        counter++
        if(!abjad[counter]){
          counter = 0
        }
      }
     
    }
    return result
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input