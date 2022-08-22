const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    });
});

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const compChoice = options[Math.floor(Math.random()*options.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return 'Draw';
    }else if(playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock';
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You Lose! Rock beats Scissors';
    }else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You Lose! Scissors beats Paper';
    }else {        
        return `You Win! ${playerSelection.charAt(0).toUpperCase() 
            + playerSelection.slice(1).toLowerCase()} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase()}`;
    }              
}