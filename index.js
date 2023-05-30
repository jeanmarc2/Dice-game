var randomnumber1= Math.floor(Math.random()*6)+1;
var randomimage= "images/dice" + randomnumber1 + ".png";
var img1= document.querySelectorAll("img")[0];
img1.setAttribute('src', randomimage);

var randomnumber2= Math.floor(Math.random()*6)+1;
var randomimage2= "images/dice" + randomnumber2 +".png";
var img2= document.querySelectorAll("img")[1];
img2.setAttribute('src', randomimage2);

if(randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML= "player 1 win";
}
if(randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML="player 2 win";
}
else if(randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML="draw!!";
}