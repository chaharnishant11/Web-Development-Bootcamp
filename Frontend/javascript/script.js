var num = 4;

var guess = prompt("guess the number");

if(Number(guess) === num){
	alert("you got it right");
}else if(Number(guess)>num){
	alert("too high!");
}else{
	alert("too low!");
}