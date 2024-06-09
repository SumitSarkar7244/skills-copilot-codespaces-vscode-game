// Write 'hello world' to the console
console.log('hello world');

// Develop the logic of the javascript minigame
// The winner of the game is determined by three simple rules: 
// Rock beats Scissors, Scissors beats Paper, Paper beats Rock
// The game should be played in the console.
// The player can choose one of the three options rock, paper, or scissors and should be warned if they enter an invalid option.
// The computer should randomly select one of the three options.
// At each round, the player must enter one of the options in the list and be informed if they won, lost, or tied with the opponent.
// By the end of each round, the player can choose whether to play again.
// Display the player's score at the end of the game.
// The minigame must handle user inputs, putting them in lowercase and informing the user if the option is invalid.
// Verify your work
// Run the minigame on the console with the python app.py command.
// At the prompt, type one of the game options: rock, paper, or scissors.
// The minigame should inform the player whether the player won, lost, or tied with the opponent.
// Choose to continue playing.
// At the prompt, type screen.
// The minigame should inform the player if the option entered by the player is invalid.
// Repeat steps 2 and 4 to play a few rounds and choose not to continue playing.
// Check if the minigame is terminated and if it displays your score, informing you of the number of wins and rounds.
// Write the code for the minigame in the app.js file.
// write code here
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    rl.question('Rock, paper, or scissors? (or type "exit" to quit) ', (playerSelection) => {
        if (playerSelection.toLowerCase() === 'exit') {
            console.log(`Player: ${playerScore} Computer: ${computerScore}`);
            console.log(`Total rounds played: ${rounds}`);
            rl.close();
            return;
        }

        const computerSelection = computerPlay();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
            console.log(playRound(playerSelection, computerSelection));
            rounds++;
            game();
        } else {
            console.log('Invalid option. Please try again.');
            game();
        }
    });
}

game();