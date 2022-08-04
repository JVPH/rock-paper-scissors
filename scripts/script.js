function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors'];
    const compChoice = options[Math.floor(Math.random()*options.length)];
    return compChoice;
}