let humanScore = 0;
let computerScore = 0;

// flashing computers cards
function flashcrb() {
  var flashBox = document.getElementById("crb");
  flashBox.classList.add('highlight');
  setTimeout(function(){
      flashBox.classList.remove('highlight');
  }, 500)
}

function flashcpb() {
  var flashBox = document.getElementById("cpb");
  flashBox.classList.add('highlight');
  setTimeout(function(){
      flashBox.classList.remove('highlight');
  }, 750)
}

function flashcsb() {
  var flashBox = document.getElementById("csb");
  flashBox.classList.add('highlight');
  setTimeout(function(){
      flashBox.classList.remove('highlight');
  }, 500)
}

// computer plays
function computerPlay() {
  let randomNum = Math.floor(Math.random() * 1000);
  if (randomNum % 3 === 0) {
    flashcrb();
    game();
    return "Rock";
  } else if (randomNum % 3 === 1) {
    flashcpb();
    game();
    return "Paper";
  } else {
    flashcsb();
    game();
    return "Scissors";
  }
}

// one round winner if
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    humanScore++;
    document.getElementById("human-score").innerHTML = humanScore;
    return "Player wins this round";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;
    return "Computer wins this round";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    humanScore++;
    document.getElementById("human-score").innerHTML = humanScore;
    return "Player wins this round";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;
    return "Computer wins this round";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    humanScore++;
    document.getElementById("human-score").innerHTML = humanScore;
    return "Player wins this round";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;
    return "Computer wins this round";
  }
}

// player onclick Rock
document.getElementById("hrb").addEventListener("click", onclickRock);

function onclickRock() {
  const playerSelection = "Rock";
  const computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  document.getElementById("result").innerHTML = result;
}

// player onclick Paper
document.getElementById("hpb").addEventListener("click", onclickPaper);

function onclickPaper() {
  const playerSelection = "Paper";
  const computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  document.getElementById("result").innerHTML = result;
}

// player onclick Scissors
document.getElementById("hsb").addEventListener("click", onclickScissors);

function onclickScissors() {
  const playerSelection = "Scissors";
  const computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  document.getElementById("result").innerHTML = result;
}

// 5 round winner
function game() {
    if ( computerScore === 5 ) {
      let end = document.getElementById("winner");
      end.innerHTML = "Game is finished - Computer wins! - Retry?";
      end.style.cssText = "background-color: red; color: white; font-size: 1.5em";
      error
    } else if( humanScore === 5 ) {
      let end = document.getElementById("winner");
      end.innerHTML = "Game is finished - Player wins! - Retry?";
      end.style.cssText = "background-color: red; color: white; font-size: 1.5em";
      error
    }
    
}

