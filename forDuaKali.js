
function soal3(param)
{
    // your code here 
    var result = []
    var counter = 1
  for(i=0; i<param; i++){
      result.push([])
    for(j=0; j<param; j++){
        result[i].push(counter)
         counter++
        }
  }
  return result
}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4))

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/