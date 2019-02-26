function reza(str){

  if(str.length === 0){
    return ""
  }
  else { 
    var sisa = str.slice(0, str.length-1)
   return str[str.length-1] + reza(sisa)
  }
}

console.log(reza('mobil'))