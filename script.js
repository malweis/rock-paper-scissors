const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

let playerScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3) + 1;

  let resp = null;
  switch (rand) {
    case 1:
      resp = "Piedra";
      break;
    case 2:
      resp = "Papel";
      break;
    case 3:
      resp = "Tijeras";
      break;
  }

  return resp;
};

let rockPaperScissors = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Empate!";
  } else if (
    (playerSelection === "piedra" && computerSelection === "tijeras") ||
    (playerSelection === "tijeras" && computerSelection === "papel") ||
    (playerSelection === "papel" && computerSelection === "piedra")
  ) {
    return "Ganaste. " + playerSelection + " vence a " + computerSelection;
  } else {
    return "Perdiste. " + computerSelection + " vence a " + playerSelection;
  }
};

const playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();
  const roundResult = rockPaperScissors(playerSelection, computerSelection);

  // Update the resultsDiv with the round result
  resultsDiv.textContent = roundResult;

  // Update the score
  if (roundResult.includes("Ganaste")) {
    playerScore++;
  } else if (roundResult.includes("Perdiste")) {
    computerScore++;
  }

  // Update the scoreDiv with the current score
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;

  // Check if any player reached 5 points
  if (playerScore === 5 || computerScore === 5) {
    // Announce the winner
    const winner = playerScore === 5 ? 'Player' : 'Computer';
    resultsDiv.textContent += ` ${winner} wins the game!`;

    // Disable the buttons to prevent further gameplay
    buttons.forEach(button => {
      button.disabled = true;
    });
  }
};

// Event listeners for each button
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const playerSelection = event.target.textContent;
    playRound(playerSelection);
  });
});