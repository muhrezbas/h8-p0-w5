function soal1(param)
{
    // Your Code Here
    var counter = 0
    var result = []
    for(i= 0; i<param; i++){
      counter++
      if(counter%4===0){
        result.push("fizz")
      }
      else if(counter%7===0){
        result.push("Buzz")
      }
      else {
        result.push("")
      }
    }
    return result
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']


