var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function random(){
	var rColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	return rColor;  
}

function randomize(){
	rColor1 = random();
	rColor2 = random();
	body.style.background =
	 "linear-gradient(to right, " + rColor1 + ", " + rColor2 + ")";
	 css.textContent = body.style.background + ";";

	 color1.value = rColor1;
	 color2.value = rColor2;
}

function changeBackground(){
	body.style.background =
	 "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	 css.textContent = body.style.background + ";";
}

changeBackground();

button.addEventListener("click", randomize);

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);






	

