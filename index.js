 var  randomnumber1=Math.floor(Math.random() *6) + 1; //1-6

var randomDiceImage="dice" + randomnumber1 + ".png"; //dice1.png-dice6.png

var randomImageSourse="D:\web development\dice challenge\images/"+ randomDiceImage; //images/dice1.png-images/dice6.png

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src".randomImageSourse);
