class Game {
  constructor() {
    this.playerOne = new Player('Luigi', "assets/icons8-luigi.svg");
    this.playerTwo = new Player('Mario', "assets/icons8-super-mario.svg");
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    this.startingPlayer = this.playerOne;
    this.activePlayer = this.startingPlayer;
    this.draw = false;
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
    } else {
      this.activePlayer = this.playerOne
    }
  }

  trackBoardData(anyIndex) {
    if (this.gameBoard[anyIndex] === "") {
      if (this.activePlayer === this.playerOne) {
        this.gameBoard[anyIndex] = this.playerOne.token
      }
      if (this.activePlayer === this.playerTwo) {
        this.gameBoard[anyIndex] = this.playerTwo.token
      }
    }
  }

  checkForWin() {
    for (var i = 0; i < this.gameBoard.length; i++) {
      // horizontal wins
      if (this.gameBoard[0] === this.gameBoard[1] && this.gameBoard[1] === this.gameBoard[2] && this.gameBoard[2] !== "") {
        this.win();
      }
      else if (this.gameBoard[3] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[5] && this.gameBoard[5] !== "") {
        this.win();
      }
      else if (this.gameBoard[6] === this.gameBoard[7] && this.gameBoard[7] === this.gameBoard[8] && this.gameBoard[8] !== "") {
        this.win();
      }
      // vertical wins
      else if (this.gameBoard[0] === this.gameBoard[3] && this.gameBoard[3] === this.gameBoard[6] && this.gameBoard[6] !== "") {
        this.win();
      }
      else if (this.gameBoard[1] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[7] && this.gameBoard[7] !== "") {
        this.win();
      }
      else if (this.gameBoard[2] === this.gameBoard[5] && this.gameBoard[5] === this.gameBoard[8] && this.gameBoard[8] !== "") {
        this.win()
      }
      // diagonal wins
      else if (this.gameBoard[2] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[6] && this.gameBoard[6] !== "") {
        this.win();
      }
      else if (this.gameBoard[0] === this.gameBoard[4] && this.gameBoard[4] === this.gameBoard[8] && this.gameBoard[8] !== "") {
        this.win();
      } else {
        this.detectDraw();
      }
    }
  }

  win() {
    if (this.activePlayer === this.playerOne) {
      this.playerOne.increaseWins();
    }
    if (this.activePlayer === this.playerTwo) {
      this.playerTwo.increaseWins();
    }
    this.resetGrid();
  }

  detectDraw() {
    if (!this.gameBoard.includes("")) {
      this.draw = true;
      this.resetGrid();
    }
  }

  resetGrid() {
    this.gameBoard = ["", "", "", "", "", "", "", "", ""];
    this.setStartingPlayer();
    this.draw = false;
  }
}
