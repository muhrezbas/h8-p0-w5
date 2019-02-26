/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param)
{
    // your code here
    var tengah = Math.ceil(param/2)
      var tampung = []
    
    if(param%2===0){
      return "invalid input"
    }
    for(i = 0; i<param; i++) {
      tampung.push([])
      for(j = 0; j<param; j++){
        if(j===tengah-1){
          tampung[i].push("*")
        }
        else if(i===tengah-1){
          tampung[i].push("*")
        }
        else{
          tampung[i].push(" ")
        }
      }

    }
    for(i = 0; i<tampung.length; i++) {
      console.log(tampung[i].join(""))
     }
    // return tampung

}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input