// QUERYSELECTORS //
var gameGrid = document.querySelector('.game')
var displayPlayerTurn = document.querySelector('.players-turn')
var firstPlayerScore = document.querySelector('.player-one-score')
var secondPlayerScore = document. querySelector('.player-two-score')
var gameGridSpaces = document.querySelectorAll('.space')

// EVENT LISTENERS //
gameGrid.addEventListener('click', playTheGame)

// GLOBAL VARIABLE //
var ticTacToe = new Game();

 // FUNCTIONS //

function playTheGame(event) {
  if (ticTacToe.activePlayer === ticTacToe.playerOne) {
    setToken(ticTacToe.playerOne.token, "luigi-first-player", "luigi icon", "Luigi", event);
  } else if (ticTacToe.activePlayer === ticTacToe.playerTwo) {
    setToken(ticTacToe.playerTwo.token, "mario-second-player", "super mario icon", "Mario", event);
  }
    ticTacToe.trackBoardData(event.target.id);
    show();
    newWin();
    updateWinCount();
}

function setToken(token, tokenClass, tokenAlt, id, event) {
  var gameGridSpaces = document.querySelectorAll('.space')
  for (var i = 0; i < gameGridSpaces.length; i++) {
    if (event.target.id === gameGridSpaces[i].id && ticTacToe.activePlayer.id === id) {
      gameGridSpaces[i].innerHTML += `<img class=${tokenClass} src=${token} alt=${tokenAlt} />`
    }
  }
}

function displayWinner(player) {
  displayPlayerTurn.innerText = `${player} wins!`
  gameGrid.removeEventListener('click', playTheGame)
  setTimeout(function() {
    ticTacToe.resetGrid();
    restartGame();
  }, 2000);
}

function newWin () {
  if (ticTacToe.winner === ticTacToe.playerOne.id) {
    displayWinner(ticTacToe.playerOne.id);
  } else if (ticTacToe.winner === ticTacToe.playerTwo.id) {
    displayWinner(ticTacToe.playerTwo.id);
  } else {
    displayDraw();
  }
}

function show() {
  displayPlayerTurn.innerText = `
  It's ${ticTacToe.activePlayer.id}'s turn!
`
  }

function updateWinCount() {
  firstPlayerScore.innerHTML = `
  ${ticTacToe.playerOne.wins}
`
  secondPlayerScore.innerHTML = `
  ${ticTacToe.playerTwo.wins}
`
}

function displayDraw() {
  if (ticTacToe.draw === true) {
    displayPlayerTurn.innerText = `Tie!`
    setTimeout(function() {
      ticTacToe.resetGrid();
      restartGame();
    }, 2000);
  }
}

function restartGame() {
  for (var i = 0; i < gameGridSpaces.length; i++) {
    gameGridSpaces[i].innerHTML = ``
    gameGrid.addEventListener('click', playTheGame)
    displayPlayerTurn.innerText = `It's ${ticTacToe.activePlayer.id}'s turn!`
  }
}
