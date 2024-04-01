const colors = ['red', 'blue', 'yellow', 'green'];
let gameBoard = [];
let progress = 0;

function initializeGame() {
    const gameContainer = document.getElementById('game-container');
    const progressBar = document.getElementById('progress-bar');
    const congratulations = document.getElementById('congratulations');
    
    progressBar.innerHTML = '<div id="progress-bar-inner"></div>';
    gameContainer.innerHTML = '';
  
    gameBoard = generateRandomBoard();
  
    gameBoard.forEach((row, rowIndex) => {
      row.forEach((color, colIndex) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.backgroundColor = color;
        tile.onclick = () => moveTile(rowIndex, colIndex);
  
        gameContainer.appendChild(tile);
      });
    });
  
    congratulations.classList.add('hidden');
  }

  function generateRandomBoard() {
    const board = [];
    const availableColors = [...colors]; 
    const colorCount = { 'red': 0, 'blue': 0, 'yellow': 0, 'green': 0 };
  
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        let color;
        if (availableColors.length === 0) {
          color = null;
        } else {
          do {
            color = availableColors[Math.floor(Math.random() * availableColors.length)];
          } while (color !== null && colorCount[color] >= 4);
        }
  
        if (color !== null) colorCount[color]++;
  
        row.push(color);
      }
      board.push(row);
    }
  

    let greenTiles = 3;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === 'green') {
          if (greenTiles > 1) {
            greenTiles--;
          } else {
            board[i][j] = null;
            return board;
          }
        }
      }
    }
  
    return board;
  }
   
  

function moveTile(row, col) {
  if (isValidMove(row - 1, col) || isValidMove(row + 1, col) || isValidMove(row, col - 1) || isValidMove(row, col + 1)) {
    swapTiles(row, col);
    checkCombinations();
  }
}

function isValidMove(row, col) {
  return row >= 0 && row < 4 && col >= 0 && col < 4 && gameBoard[row][col] === null;
}

function swapTiles(row, col) {
  const emptyRow = gameBoard.findIndex(row => row.includes(null));
  const emptyCol = gameBoard[emptyRow].indexOf(null);

  const temp = gameBoard[row][col];
  gameBoard[row][col] = null;
  gameBoard[emptyRow][emptyCol] = temp;

  updateGameBoard();
}

function updateGameBoard() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = '';

  gameBoard.forEach((row, rowIndex) => {
    row.forEach((color, colIndex) => {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.style.backgroundColor = color;
      tile.onclick = () => moveTile(rowIndex, colIndex);

      gameContainer.appendChild(tile);
    });
  });
}

let verticalCombinationCompleted = false;
let horizontalCombinationCompleted = false;
let diagonalCombinationCompleted = false;

function checkCombinations() {
  if (!verticalCombinationCompleted && checkVerticalCombination(0)) {
    verticalCombinationCompleted = true;
    progress += 1;
  }

  if (!horizontalCombinationCompleted && checkHorizontalCombination(0)) {
    horizontalCombinationCompleted = true;
    progress += 1;
  }

  if (!diagonalCombinationCompleted && checkDiagonalCombination()) {
    diagonalCombinationCompleted = true;
    progress += 1;
  }

  updateProgressBar();

  if (progress === 3) {
    showCongratulations();
  }
}


function checkVerticalCombination(col) {
  return gameBoard[0][col] === 'yellow' && gameBoard[1][col] === 'yellow' && gameBoard[2][col] === 'yellow' && gameBoard[3][col] === 'yellow';
}

function checkHorizontalCombination(row) {
  return gameBoard[row][0] === 'blue' && gameBoard[row][1] === 'blue' && gameBoard[row][2] === 'blue' && gameBoard[row][3] === 'blue';
}

function checkDiagonalCombination() {
  return gameBoard[0][3] === 'red' && gameBoard[1][2] === 'red' && gameBoard[2][1] === 'red' && gameBoard[3][0] === 'red';
}

function updateProgressBar() {
  const progressBarInner = document.getElementById('progress-bar-inner');
  progressBarInner.style.width = `${progress * 33.33}%`;
}

function showCongratulations() {
  const congratulations = document.getElementById('congratulations');
  congratulations.classList.remove('hidden');
}

function resetGame() {
  progress = 0;
  initializeGame();
}

initializeGame();
