function average(array){
    var total=0;
    for (var i =0 ; i < array.length ;i++ ) {
        total=total+array[i];
    }
    var  avg = total / (array.length) ;
    return Math.round(avg);
    
   
}

var scores = [90,91,80,85,97];
console.log(average(scores));
