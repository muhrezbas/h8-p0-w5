function reza(str){

  if(str.length === 0){
    return 0
  }
  else { 
    var sisa = str.slice(1)
    if (str[0] === "a" || str[0] === "i" || str[0] === "u" || str[0] === "e" || str[0] === "o"){
   return 1 + reza(sisa)
  }

  else {
   return 0 + reza(sisa)
  }
  }
}

console.log(reza('hallo salam kenal'))