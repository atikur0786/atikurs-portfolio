/**
 * home.js - Main JavaScript file for portfolio website
 * Contains tic-tac-toe game logic and terminal functionality
 */

document.addEventListener("DOMContentLoaded", function () {
  // Initialize terminal cursor blinking
  initTerminal();

  // Initialize the Tic-tac-toe game
  initTicTacToe();
});

/**
 * Copy GitHub URL to clipboard
 */
function copyGitHubUrl() {
  // Get the GitHub URL
  let githubUrl;
  const stringElement = document.querySelector(".github-variable .string");

  if (stringElement) {
    githubUrl = stringElement.textContent.replace(/"/g, "");
  } else {
    // Fallback
    githubUrl = "https://github.com/atikur0786";
  }

  // Copy to clipboard
  navigator.clipboard
    .writeText(githubUrl)
    .then(() => {
      // Show success state
      const copyBtn = document.getElementById("copy-github");
      if (copyBtn) {
        copyBtn.classList.add("success");

        // Reset after 2 seconds
        setTimeout(() => {
          copyBtn.classList.remove("success");
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
      alert("Failed to copy to clipboard. Please copy manually.");
    });
}

/**
 * Terminal functionality - makes cursor blink in terminal
 */
function initTerminal() {
  const terminalCursor = document.querySelector(
    ".terminal-content .command:last-child"
  );

  // Create blinking cursor effect if cursor element exists
  if (terminalCursor) {
    setInterval(() => {
      terminalCursor.style.opacity =
        terminalCursor.style.opacity === "0" ? "1" : "0";
    }, 500);
  }
}

/**
 * Initialize the Tic-tac-toe game with all needed functionality
 */
function initTicTacToe() {
  // Select all necessary DOM elements
  const cells = document.querySelectorAll(".cell");
  const status = document.querySelector(".game-status");
  const resetButton = document.getElementById("reset-game");

  if (!cells.length || !status || !resetButton) {
    console.log("Tic-tac-toe elements not found, skipping initialization");
    return;
  }

  // Game state variables
  let currentPlayer = "X";
  let gameState = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;

  // All possible winning combinations (rows, columns, diagonals)
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  /**
   * Handle cell click event
   * @param {Event} clickedCellEvent - The click event
   */
  function handleCellClick(clickedCellEvent) {
    // Get the clicked cell and its index
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-index"));

    // If cell is already filled or game is not active, ignore the click
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
      return;
    }

    // Update game state, cell content, and add appropriate class
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());

    // Check if the game has a result after this move
    checkResult();
  }

  /**
   * Check if the current game state has a winner or is a draw
   */
  function checkResult() {
    let roundWon = false;

    // Check all winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];

      // Skip this condition if any of the cells are empty
      if (gameState[a] === "" || gameState[b] === "" || gameState[c] === "") {
        continue;
      }

      // Check if all three cells have the same value (X or O)
      if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
        roundWon = true;

        // Highlight the winning cells
        document.querySelector(`[data-index="${a}"]`).style.backgroundColor =
          "#263b50";
        document.querySelector(`[data-index="${b}"]`).style.backgroundColor =
          "#263b50";
        document.querySelector(`[data-index="${c}"]`).style.backgroundColor =
          "#263b50";

        break;
      }
    }

    // If we have a winner
    if (roundWon) {
      status.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
      return;
    }

    // Check if it's a draw (no empty cells left)
    const roundDraw = !gameState.includes("");
    if (roundDraw) {
      status.textContent = "Game ended in a draw!";
      gameActive = false;
      return;
    }

    // If no winner and not a draw, switch players and update status
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
  }

  /**
   * Reset the game to its initial state
   */
  function resetGame() {
    // Reset game variables
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    status.textContent = `Player ${currentPlayer}'s turn`;

    // Clear all cells and remove X/O classes
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("x", "o");
      cell.style.backgroundColor = ""; // Reset any highlighted winning cells
    });
  }

  // Add click event listeners to all cells
  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  // Add click event listener to reset button
  resetButton.addEventListener("click", resetGame);

  // Initialize the game
  resetGame();
}
