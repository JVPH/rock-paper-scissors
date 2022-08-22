const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {        
        game(button.id);
    });
});

const containerDiv = document.querySelector('#container');
const playerScoreDiv = document.createElement('div');
const computerScoreDiv = document.createElement('div');
const resultDiv = document.createElement('div');

playerScoreDiv.classList.add('player-score');
computerScoreDiv.classList.add('computer-score');

updateScores();
resultDiv.classList.add('result');

containerDiv.appendChild(playerScoreDiv);
containerDiv.appendChild(computerScoreDiv);
containerDiv.appendChild(resultDiv);

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const compChoice = options[Math.floor(Math.random()*options.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'Draw';
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){   
        computerScore++;     
        return 'You Lose! Paper beats Rock';
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        return 'You Lose! Rock beats Scissors';
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        return 'You Lose! Scissors beats Paper';
    }else {       
        playerScore++; 
        return `You Win! ${playerSelection.charAt(0).toUpperCase() 
            + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}`;
    }                  
}

function updateScores(pScore, cScore){
    if(pScore === undefined || cScore === undefined){
        playerScoreDiv.textContent = `Player Score: ${playerScore}`;
        computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
    }else {
        playerScoreDiv.textContent = `Player Score: ${pScore}`;
        computerScoreDiv.textContent = `Computer Score: ${cScore}`;
    }    
}

function game(playerChoice){
    resultDiv.textContent = playRound(playerChoice, getComputerChoice());
    updateScores();
    if(computerScore === 5 || playerScore === 5){
        let winner = computerScore>playerScore ?  'Computer' : 'You';        
        resultDiv.textContent = `Game Over! ${winner} Won!`;
        updateScores(0,0);
        
    }      
}