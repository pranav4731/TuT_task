//alert('Hello!!!')

//Challenge in Days : Your Age in Days!
function ageInDays(){
  var birthYear = prompt("What year were you born?");
  var yourAge = (2020 - birthYear)* 365;

  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + yourAge + ' days old.');
  h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);

}

function reset(){
document.getElementById('ageInDays').remove();

}

//Challenge 5: BlackJack

let blackjackGame = {
  'you': {'scorespan' : '#your-blackjack-result', 'div' : '#your-box', 'score' : 0},  
  'dealer': {'scorespan' : '#dealer-blackjack-result', 'div' : '#dealer-box', 'score' : 0} ,
  'cards': ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('sounds/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);  

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);  


function blackjackHit(){
  let card = randomCard();
  console.log(card);
  showCard(card, YOU);
  
}

function randomCard(){
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex]
}

function showCard(card, activePlayer){
   let cardImage = document.createElement('img');
   cardImage.src = `images/${card}.png`;
   document.querySelector(activePlayer['div']).appendChild(cardImage);
   hitSound.play();
}

function blackjackDeal(){
  let yourImages = document.querySelector('#your-box').querySelectorAll('img');
  let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');



  for(i=0; i<yourImages.length; i++){
    yourImages[i].remove();
  }

   for(i=0; i<dealerImages.length; i++){
    dealerImages[i].remove();
  }
}

