var randomNumber1= Math.floor(Math.random()*6)+1;
var randomimage1="images/dice" +randomNumber1+ ".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimage2="images/dice" +randomNumber2+ ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(randomNumber1 > randomNumber2)
{
   document.querySelector("h1").innerText="player1 wins";
}
else if(randomNumber1 < randomNumber2)
{
   document.querySelector("h1").innerText="player2 wins";
}
else 
{
   document.querySelector("h1").innerText="draw";
}

