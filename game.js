class Game {
  constructor() {
    this.playerOne = new Player('one', 'x');
    this.playerTwo = new Player('two', 'o');
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    this.startingPlayer = this.playerOne;
  }

  changeTurns() {
    if (this.startingPlayer === this.playerOne) {
      this.startingPlayer = this.playerTwo
    } else if (this.startingPlayer === this.playerTwo) {
      this.startingPlayer = this.playerOne
    }
  }

  trackBoardData(anyIndex) {
    if (this.gameBoard[anyIndex] === "") {
      if (this.startingPlayer === this.playerOne) {
        this.gameBoard[anyIndex] = this.playerOne.token
        this.changeTurns();
      } else if (this.startingPlayer === this.playerTwo) {
        this.gameBoard[anyIndex] = this.playerTwo.token
        this.changeTurns();
      }
    }
    this.trackWins();
  }


  trackWins() {
    // horizontal wins
    if (this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2] && this.gameBoard[2] === this.gameBoard[0] !== "") {
      console.log("winner!")
    }
    else if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[3] !== "") {
      console.log("winner!")
    }
    else if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8] && this.gameBoard[8] === this.gameBoard[6] !== "") {
      console.log("winner!")
    }
    // vertical wins
    else if (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6] && this.gameBoard[6] === this.gameBoard[0] !== "") {
      console.log("winner!")
    }
    else if (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[1] !== "") {
      console.log("winner!")
    }
    else if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8] && this.gameBoard[8] === this.gameBoard[2] !== "") {
      console.log("winner!")
    }
    // diagonal wins
    else if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6] && this.gameBoard[6] === this.gameBoard[2] !== "") {
      console.log("winner!")
    }
    else if (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8] && this.gameBoard[8] === this.gameBoard[0] !== "") {
      console.log("winner!")
    } else {
      this.detectDraw();
    }
  }

  displayWinner() {

  }

  detectDraw(indexes) {
    if (this.gameBoard[indexes] !== "" ) {
      console.log("draw!")
    }

  }

  // resetGrid() {
  //   // set a conditional so that once a win is declared,
  //   // the game board resets, need to call on the trackWins() fxn
  //   // to update scores and tally, then clear out (change innerHTML)
  // }
}

// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game









// Important aspects of the game "Tic Tac Toe":
    //
