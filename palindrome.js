function reza(str){

  if(str.length <= 1){
    return true
  }
  else {
    var depan = str[0]
    var belakang = str[str.length-1]
    var hilang = str.slice(1, str.length-1) 
    if (depan === belakang){
    return reza(hilang)
    }
    else {
      return false
    }
  }
}

console.log(reza('katak'))