
function persegi(param1,param2)
{
    // your code here 
    var awal = 0
    if(param1 === 0 || param2 === 0) {
      return "invalid input"
    }
    for(i=0; i<param2; i++){
       var tampung = []
      for(j=0; j<param1; j++){
        if(i===0){
        tampung.push("*")  
        }
        else if(i===param2-1){
         tampung.push("*")   
        }
        else {
        tampung.push(" ")
        }
    }
    tampung[awal]= "*"
    tampung[param1-1]= "*"
    //  awal++
    //  akhir--
     console.log(tampung.join(""))
  }
  return ""
}

console.log(persegi(5,7))

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6,3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 