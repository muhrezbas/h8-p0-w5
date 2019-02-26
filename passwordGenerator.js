function changeVocals (str) {
  //code di sini
  var tampung = ""
for(i=0; i<str.length; i++){  
      if(str[i]==="a"){
        tampung+="b"
      }
      else if(str[i]==="i"){
        tampung+="j"
      }
      else if(str[i]==="u"){
        tampung+="v"
      }
      else if(str[i]==="e"){
        tampung+="f"
      }
      else if(str[i]==="o"){
        tampung+="p"
      }
      else {
        tampung+=str[i]
      }

  }
 return tampung
}

function reverseWord (str) {
  //code di sini
  var tampung = ""
  for(i=str.length-1; i>=0; i-- ){
    tampung += str[i]
  }
  return tampung
}

function setLowerUpperCase (str) {
  //code di sini
  var tampung = ""
  for(i=0; i<str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      tampung += str[i].toLowerCase()
    }
    else {
      tampung += str[i].toUpperCase()
    }
  }
  return tampung
  

}

function removeSpaces (str) {
  //code di sini
  var tampung = []
  tampung = str.split(" ")
  return tampung.join("")
}

function passwordGenerator (name) {
  //code di sini
  if(name.length<=5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var pass = '';
  pass = changeVocals(name);
  pass = reverseWord(pass);
  pass = setLowerUpperCase(pass);
  pass = removeSpaces(pass);
  return pass
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'