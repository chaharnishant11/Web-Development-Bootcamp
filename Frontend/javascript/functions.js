function isEven(num){
	if( Number(num%2)===0){
		return true;
	}

	return false;
}

function factorial(num){
	var prod = 1;
	for (var i = 1; i <=num ; i++) {
		prod = prod * Number(i);
	}
	return prod;
}
function kebabToSnake(string){
	var newS = "";
	for (var i = 0; i < string.length; i++) {
		if(string[i]=="-"){
			newS= newS + "_";
		}else{
			newS = newS + string[i]; 
		}
	}
	return newS;
}