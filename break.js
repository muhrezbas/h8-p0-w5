
// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
    //your code here 
    var result =[]
    var awal = 0
    var akhir = param.length-1
    var tengah= Math.ceil(param.length/2)
    for(i = 0; i<param.length; i++){
          if(param.length%2 ===0){
            if(awal===tengah){
              break
            }
          else {
            result.push([param[awal],param[akhir]])
            awal++
            akhir--
          }  
        }
          if(param.length%2 !==0){
            if(awal===tengah-1){
              result.push([param[awal],"instruktur"])
              break
            }
            else {
            result.push([param[awal],param[akhir]])
            awal++
            akhir--
            }
          }
    }
    return result
}
console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]