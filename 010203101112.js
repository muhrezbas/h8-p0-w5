function rocket(param)
{
    // your code here
    var result = []
    var counter1 = 0
    var counter = 0

    for(i=0; i<param; i++){
      result.push([])
      for(j=0; j<param; j++){
        
          result[i].push([counter,counter1])
       
        // result[i].push(counter)
        counter1++
        if(counter1===3){
          counter1 = 0
        }
      }
      counter++
    }
    return result
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/