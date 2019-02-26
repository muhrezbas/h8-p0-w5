function soal3(param)
{
    // your code here
    result ={}
     for(var i=0;i<param.length;i++) {
    for(var j=0;j<param.length-i;j++) {
      if(param[j]>param[j+1]) {
        temp = param[j]
        param[j] = param[j+1]
        param[j+1]=temp
      }
    }
  }
    for(i=0; i<param.length; i++){
      if(!result[param[i][0]]){
        result[param[i][0]]= []
      }
        result[param[i][0]].push(param[i])
    
    }
    return result

}

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet','Lotnok']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/