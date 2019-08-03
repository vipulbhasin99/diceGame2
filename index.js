
var a =Math.random();
var b= a*6 +1 ;
var randomNumber1 = Math.floor(b);
var randomDiceImage = "dice"+randomNumber1+".png";
var randomImageSource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2= "dice"+randomNumber2+".png";
var randomDiceSource2 = "images/"+ randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "🎇DRAW!🎇";
} else if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🎇Player 1 Wins!";
} else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🎇";
}
