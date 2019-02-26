function soal3(param)
{
    // your code here
    result = {
      under20 : [],
      over20 : []
    }
    for(i = 0; i<param.length; i++){
      if(param[i][1]<=20){
        result.under20.push(param[i][0])
      }
      else {
        result.over20.push(param[i][0])
      }
    }
    return result
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/