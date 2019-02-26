function soal2(param)
{
    // your code here
    var tengah = Math.ceil(param/2)-1
    var result = []
    if(param%2===0){
      return "Invalid Input"
    }
    var param2 = Math.floor(param/2)

    for(i = 0; i<param-param2; i++){
      result.push([])
      for(j=0; j<param; j++){
        var tengahTambah = tengah + i
        var tengahKurang = tengah - i
        if(j>=tengahKurang && j<=tengahTambah){
            // console.log(tengahTambah + "=>" + j)
             result[i].push("*")
        }
        else {
          result[i].push("")
        }
       
      }
    }
    return result
}

console.log(soal2(5))
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/
console.log(soal2(7))

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input