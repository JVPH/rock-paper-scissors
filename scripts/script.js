function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors'];
    const compChoice = options[Math.floor(Math.random()*options.length)];
    return compChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.localeCompare(computerSelection.toString(), 'en', { sensitivity: 'base'}) === 0){
        return 'Draw';
    }else if(playerSelection.localeCompare('Rock', 'en', { sensitivity: 'base'}) === 0 && computerSelection.localeCompare('Paper') === 0){
        return 'You Lose! Paper beats Rock';
    }else if(playerSelection.localeCompare('Scissors', 'en', { sensitivity: 'base'}) === 0 && computerSelection.localeCompare('Rock') === 0){
        return 'You Lose! Rock beats Scissors';
    }else {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`;
    }              
}

function game(){
    // for (let i = 0; i < 5; i++){
    //     const playerChoice = prompt('Type your pick: ');
    //     alert(playRound(playerChoice, getComputerChoice()));       
    // }
}