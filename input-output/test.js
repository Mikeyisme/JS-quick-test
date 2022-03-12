// JavaScript Document
window.onload = initall;

function initall () {
	var yournumberone = prompt ( "What is first number?", "Type your number here." );
	var yournumbertwo = prompt ( "What is your second number", "Type your second name here." );
	
	var summation = parseFloat ( yournumberone ) + parseFloat ( yournumbertwo);
	// calcuate the sum of the 2 numbers and
	// remember the sum with the new variable summation
	
	document.getElementById("top").innerHTML = summation;

}







