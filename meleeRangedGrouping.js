function meleeRangedGrouping (str) {
  //your code here
  if(str === ""){
    return []
  }
  else {
 var str1 = str.split(",")
  var tampung = []
  for(i = 0; i<str1.length; i++){
  tampung.push(str1[i].split("-"))

  }
 var result = [[], []]
  for(i=0; i<tampung.length; i++){
    if(tampung[i][1]==="Ranged"){
      result[0].push(tampung[i][0])
    }
    if(tampung[i][1]==="Melee"){
      result[1].push(tampung[i][0])
    }
  }
  return result
  }
  // result.push(tampung)
  // result.push(tampung2)
  // return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []