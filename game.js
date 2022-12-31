class Game {
  constructor() {
    this.playerOne = new Player('Luigi', "assets/icons8-luigi.svg");
    this.playerTwo = new Player('Mario', "assets/icons8-super-mario.svg");
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    this.startingPlayer = this.playerOne;
    this.activePlayer = this.startingPlayer;
    this.draw = false;
    this.winner = null;
  }

  setStartingPlayer() {
   if (this.startingPlayer === this.playerOne) {
        this.startingPlayer = this.playerTwo
    } else if (this.startingPlayer === this.playerTwo) {
      this.startingPlayer = this.playerOne
    }
  }

  updateActivePlayer() {
    if (this.activePlayer === this.playerOne) {
      this.activePlayer = this.playerTwo
    } else if (this.activePlayer === this.playerTwo) {
      this.activePlayer = this.playerOne
    }
  }

  trackBoardData(anyIndex) {
  if (this.gameBoard[anyIndex] !== '' || anyIndex < 0 || anyIndex > 8) {
    return
  }
    if (this.activePlayer === this.playerOne) {
      this.gameBoard[anyIndex] = this.playerOne.token
    }
    if (this.activePlayer === this.playerTwo) {
      this.gameBoard[anyIndex] = this.playerTwo.token
    }
      this.checkForWin();
      this.detectDraw();
      this.updateActivePlayer();
  }

  checkForWin() {
      if (this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2] && this.gameBoard[2]) {
        this.win();
      } else if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5] && this.gameBoard[5]) {
        this.win();
      } else if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8] && this.gameBoard[8]) {
        this.win();
      } else if (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6] && this.gameBoard[6]) {
        this.win();
      } else if (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7] && this.gameBoard[7]) {
        this.win();
      } else if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8] && this.gameBoard[8]) {
        this.win()
      } else if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6] && this.gameBoard[6]) {
        this.win();
      } else if (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8] && this.gameBoard[8]) {
        this.win();
    }
  }

  win() {
    if (this.activePlayer === this.playerOne) {
      this.playerOne.increaseWins();
      this.winner = this.playerOne.id;
    } else if (this.activePlayer === this.playerTwo) {
      this.playerTwo.increaseWins();
      this.winner = this.playerTwo.id;
    }
  }

  detectDraw() {
    if (!this.winner && !this.gameBoard.includes("")) {
      this.draw = true;
    }
  }

  resetGrid() {
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    this.draw = false;
    this.winner = null;
  }
}
