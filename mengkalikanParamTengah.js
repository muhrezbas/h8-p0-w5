function soal2(param)
{
    // your code here
    var tengah = Math.ceil(param.length/2)
    var result = []
    var awal = 0
    var akhir = param.length -1
    var nilaiTengah = param[awal]*param[akhir]

    if(param.length<3){
      return "invalid input"
    }
    for(i = 0; i<param.length; i++){
      if(param.length%2===0){
      if(param[i]!== ""){
        result.push(param[i])
      }
      else if(param[i] === "" && i === tengah-1) {
        result.push(nilaiTengah)
      }
      else if(param[i] === "" && i === tengah) {
        result.push(nilaiTengah)
      }
      else if(param[i] === "") {
        result.push("")
      }
      }
      else {
      if(param[i]!== ""){
        result.push(param[i])
      }
      else if(param[i] === "" && i === tengah-1) {
        result.push(nilaiTengah)
      }
      else if(param[i] === "") {
        result.push("")
      }
      }
      
    }
    return result
}

console.log(soal2([34,'','','',40]))
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 