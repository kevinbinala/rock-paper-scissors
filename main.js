const start = document.querySelector("#start");
const status = document.querySelector("#status");
const computerPoints = document.querySelector("#computer-score");
const playerPoints = document.querySelector("#player-score");
const choices = document.querySelector("#btn");

start.addEventListener("click", () => {
  start.style.display = "none";
  spacing.style.padding = "4rem"
  choices.style.display = "block";
  status.textContent = "First to score 5 will be the Champ!";
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  playerPoints.textContent = `Player: ${playerScore}`;
  computerPoints.textContent = `Computer: ${computerScore}`;
  
});

let playerSelection;

const rock = document.querySelector('#rck');
const paper = document.querySelector('#ppr');
const scissors = document.querySelector('#srs');

rock.addEventListener("click", () => {
  playerSelection = rock.textContent;
  playRound();
});

paper.addEventListener("click", () => {
  playerSelection = paper.textContent;
  playRound();
});

scissors.addEventListener("click", () => {
  playerSelection = scissors.textContent;
  playRound();
});


function playRound() {

  function computerSelection() {
    let weapon = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random()*weapon.length)
    return weapon[randomIndex]
  }

  if (playerSelection === computerSelection()){
    status.textContent = "Try again... You both chose " + playerSelection + "!";
  } else {
    if (playerSelection === "Rock") {

      if (computerSelection() === "Paper") {
        status.textContent = "You lost that round! Paper beats Rock!";
      computerScore++;
      roundCount++;

      } else if (computerSelection() === "Scissors"){
        status.textContent = "You won that round! Rock beats Scissors!";
        playerScore++;
        roundCount++;
      }
    } else if (playerSelection === "Paper") {

      if (computerSelection() === "Rock"){
        status.textContent = "You won that round! Paper beats Rock!";
        playerScore++;
        roundCount++;
     
      } else if (computerSelection() === "Scissors"){
        status.textContent = "You lost that round! Scissors beats Paper!";
        computerScore++;
        roundCount++;
      }

    } else if (playerSelection === "Scissors") {

      if (computerSelection() === "Rock"){
        status.textContent = "You lost that round! Rock beats Scissors!";
        computerScore++;
        roundCount++;
      } else if (computerSelection() === "Paper"){
        status.textContent = "You won that round! Scissors beats Paper!";
        playerScore++;
        roundCount++;
      }

    }
    }
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;



    if (playerScore === 5 || computerScore === 5)
        if (playerScore > computerScore) {
            winner = "Player";
        } else if (computerScore > playerScore) {
            winner = "Computer";
        } else {
            alert("Something crazy happened and I have no idea who won!");
        }
       choices.style.display = "none";
       status.textContent = `${winner} wins the game!`;
       start.style.display = "inline-block"
       start.textContent = "Retry"

    }
}



