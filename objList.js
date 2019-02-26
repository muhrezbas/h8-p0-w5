function soal1(objList,id,action)
{
    // your code here 
  var counter = 0
  if(action === "view"){
    for(key in objList){
      if(Number(key) === id){
        return objList[key]
      }
    }
  }
   if(action === "delete"){
    for(key in objList){
      if(Number(key) === id){
        delete objList[key]
      }
    }
  }
   for(key in objList){
     objList[counter] = objList[key]
      counter++
      }
      
    for(key in objList){
      if(Number(key) === 2){
        delete objList[key]
      }
    }
      return objList
      
    }
  

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }
*/