/*
    membuat bendera scotlandia
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param)
{
    // yout code here 
   
    var tengah = Math.ceil(param/2)
    var awal = 0
    var akhir = param-1

    for(i=0; i<param; i++){
       var tampung = []
      for(j=0; j<param; j++){
        tampung.push(" ")
    }
     tampung[awal]= "*"
     tampung[akhir]= "*"
     awal++
     akhir--
     console.log(tampung.join(""))
  }
   return ""
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/