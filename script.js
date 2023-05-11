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
    (playerSelection === "tijera" && computerSelection === "papel") ||
    (playerSelection === "papel" && computerSelection === "piedra")
  ) {
    return "Ganaste. " + playerSelection + " vence a " + computerSelection;
  } else {
    return "Perdiste. " + computerSelection + " vence a " + playerSelection;
  }
};

let game = () => {
  let player = 0;
  let computer = 0;

  for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt("Input your choice");
    let computerChoice = getComputerChoice();
    let round = rockPaperScissors(playerChoice, computerChoice);
    console.log(round);
    if (round.includes("Ganaste")) {
      player++;
    } else if (round.includes("Perdiste")) {
      computer++;
    } else {
      break;
    }
  }

  if (player > computer) {
    return "Gana el jugador";
  } else if (computer > player) {
    return "Gana la computadora";
  } else {
    return "Empate";
  }
};

console.log(game());
