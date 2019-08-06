let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".results-detail > p");
const rockChoice_div = document.getElementById("r");
const paperChoice_div = document.getElementById("p");
const scissorsChoice_div = document.getElementById("s");

function getRandomCompChoice(){
  const choices=['r','p','s'];
  return choices[Math.floor(Math.random()*choices.length)];
}

function getChoiceDetail(choice){
  let fullChoice = "";
  switch(choice){
    case 'r':
      fullChoice="Rock";
      break;
    case 'p':
      fullChoice="Paper";
      break;
    case 's':
      fullChoice = "Scissors";
      break;
    default:
      fullChoice="Invalid, not in range [r,p,s]";
    }
  return fullChoice;
}

function win(usrchoice, compchoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = "Congratulations!!! "+getChoiceDetail(usrchoice) +" beats "+getChoiceDetail(compchoice)+". You Win!";
  document.getElementById(usrchoice).classList.add('win-glow');
  setTimeout(function() {document.getElementById(usrchoice).classList.remove('win-glow')}, 250);
}

function lose(usrchoice, compchoice){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "Sorry!!! "+getChoiceDetail(usrchoice) +" loses to "+getChoiceDetail(compchoice)+". You Lost!";
  document.getElementById(usrchoice).classList.add('lose-glow');
  setTimeout(function() {document.getElementById(usrchoice).classList.remove('lose-glow')}, 250);
}
function draw(usrchoice, compchoice){

  result_div.innerHTML = "Oopss!!! "+getChoiceDetail(usrchoice) +" equals "+getChoiceDetail(compchoice)+". It's a draw!";
  document.getElementById(usrchoice).classList.add('draw-glow');
  setTimeout(function() {document.getElementById(usrchoice).classList.remove('draw-glow')}, 250);
}


function game(userChoice){
  const computerChoice = getRandomCompChoice();
  const possibleCombination = userChoice+computerChoice;
  switch (possibleCombination) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);

  }
}

function main(){
   rockChoice_div.addEventListener('click', function(){
     game("r");
   })
   paperChoice_div.addEventListener('click', function(){
     game("p");
   })
   scissorsChoice_div.addEventListener('click', function(){
     game("s");
   })

}

main();
