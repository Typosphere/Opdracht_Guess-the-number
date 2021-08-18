
const nameUser = prompt("Welkom! Wat is je naam?")
  alert("Hey " + nameUser);

function guessNumber(){
  const random = Math.floor(Math.random() * 25);

  let number = parseInt(prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden"));
  let w = 2;

  while (number > w){
    number = parseInt(prompt("Voer nummer in van 0 tot 25"));
    w++;
  }
  if (number == random) {
    alert("Gefeliciteerd je hebt gewonnen!")
  
  }else{
    alert("Dit is niet correct");
  }
  
  alert("Dit was je laatste poging.");

}
guessNumber();

alert(
  "Het spel is helaas afgelopen. Bedankt voor het spelen " +
    nameUser +
    ". Hopelijk tot snel!"
);



// let guesNumber = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden");

// let num1 = alert(Math.ceil(Math.random()));
// console.log(num1);

// if(guessNumber == num1 ){
//  alert("Gefeliciteerd je hebt gewonnen!")
// }else{
//   alert("Dit is niet correct!");
// }

// let guessNumber2 = prompt("Voer nog een nummer in?");
// console.log(num1);

// let num2 = alert(Math.ceil(Math.random()));
// console.log(num4);

// if(guessNumber == num1 ){
//   alert("Gefeliciteerd je hebt gewonnen!")
//  }else{
//    alert("Dit is niet correct!");
//  }
 
//  let guessNumber3 = prompt("Laatste poging!");
// ;