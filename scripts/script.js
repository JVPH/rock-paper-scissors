const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
    });
});

function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors'];
    const compChoice = options[Math.floor(Math.random()*options.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection.toLowerCase){
        return 'Draw';
    }else if(playerSelection === 'rock' && computerSelection.toLowerCase === 'paper'){
        return 'You Lose! Paper beats Rock';
    }else if(playerSelection === 'scissors' && computerSelection.toLowerCase === 'rock'){
        return 'You Lose! Rock beats Scissors';
    }else {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`;
    }              
}

function game(){
    
}