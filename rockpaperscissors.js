console.log("TITLE: ROCK PAPER SCISSORS!!");

let playerScore = 0;
let computerScore = 0;
let gameEndScore = 5;

updateScore();

const button = document.querySelectorAll("#rock, #paper, #scissors");

button.forEach(button => button.addEventListener('click',function(){  

    if(playerScore < gameEndScore && computerScore < gameEndScore){
        let result = playRound(this.id,computerPlay());
        updateScore();
        resultOutput('afterbegin',result, 'result');
        if(playerScore === gameEndScore || computerScore === gameEndScore){
            playerScore === gameEndScore ? gameEnd('PLAYER'): gameEnd('COMPUTER');
        }
    }
}));

function selectionDisplay(player,computer){
    document.getElementById('playerChoice').innerHTML = '';
    document.getElementById('playerChoice').insertAdjacentText('afterbegin',player);
    document.getElementById('computerChoice').innerHTML = '';
    document.getElementById('computerChoice').insertAdjacentText('afterbegin',computer);

}

function updateScore(){
    document.getElementById('playerScore').innerHTML = '';
    document.getElementById('playerScore').insertAdjacentText('afterbegin',playerScore);
    document.getElementById('computerScore').innerHTML = '';
    document.getElementById('computerScore').insertAdjacentText('afterbegin',computerScore);

}

function computerPlay(){                                                    
    const selection = ['rock', 'paper', 'scissors'];
    return selection[Math.floor(Math.random()*3)];
}

function resultOutput(position, result, elementId){
    const inputConvert = {'rock': 'Rock', 'paper': 'Paper', 'scissors': 'Scissors'}
    document.getElementById(elementId).innerHTML = '';
    document.getElementById(elementId).insertAdjacentText(position,result);
}

function playRound(playerSelection, computerSelection) {
    const inputConvert = {'rock': 'Rock', 'paper': 'Paper', 'scissors': 'Scissors'}
    let selections = `Player chose ${inputConvert[playerSelection]} and Computer chose ${inputConvert[computerSelection]}!`;
    
    selectionDisplay(`${inputConvert[playerSelection]}`,`${inputConvert[computerSelection]}`); 
    if(computerSelection === playerSelection){
        return "Game is a tie!";
    }
    switch(playerSelection) {
        case 'rock': 
            if(computerSelection === 'paper' ){
                computerScore ++;
                return "Paper beats rock. Computer wins!";
            } else {
                playerScore++;
                return "Rock beats scissors! Player wins!";
            }
        case 'paper':
            if(computerSelection === 'rock' ){
                playerScore++;
                return "Paper beats rock. Player wins!";
            } else {
                computerScore++;
                return "Scissors beats paper! Computer wins!";
            }
        case 'scissors':
            if(computerSelection === 'rock' ){
                computerScore++;
                return "Rock beats scissors. Computer wins!";
            } else {
                playerScore++;
                return "Scissors beats paper! Player wins!";
            }
        };
}

function gameEnd(player){
    let play = `${player} WINS THE GAME!!!!`;
    updateScore();
    resultOutput('beforeend',play,'newgame');

    button.forEach(button => button.disabled = true);
    let btn = document.createElement("button");
    btn.innerHTML = "New game?";
    document.getElementById('newgame').appendChild(btn);
    btn.classList.add('button', 'btn', 'btn-primary', 'btn-lg');
    btn.style.marginTop = "1%";
    btn.id = 'new';

    document.addEventListener('click',function(e){
        if(e.target && e.target.id== 'new'){
            location.reload();
         }
     });
}