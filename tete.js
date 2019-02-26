function rocket(param)
{
    // your code here 
  var result = []  
  var tengah = Math.ceil(param/2)-1
    for(i= 0; i<param; i++){
      result.push([])
      for(j=0; j<param; j++){
        if(param%2!==0){
          if(j===tengah && i === tengah){
            result[i].push("*")
          }
          else{
            result[i].push("")
          }
        }
        if(param%2===0){
          if(j===tengah && i === tengah){
            result[i].push("*")
          }
          else if(j===tengah && i === tengah+1){
            result[i].push("*")
          }
          else if(j===tengah+1 && i === tengah){
            result[i].push("*")
          }
          else if(j===tengah+1 && i === tengah+1){
            result[i].push("*")
          }
          else{
            result[i].push("")
          }
        }
        
      }
    }
  return result
}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/