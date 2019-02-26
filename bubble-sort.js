 for(var i=0;i<animals.length;i++) {
    for(var j=0;j<animals.length-i;j++) {
      if(animals[j]>animals[j+1]) {
        temp = animals[j]
        animals[j] = animals[j+1]
        animals[j+1]=temp
      }
    }
  }