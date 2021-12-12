
console.log("TITLE: ROCK PAPER SCISSORS!!");
let playerInput;


const convInput = {                 
    'r': 'Rock',
    'p': 'Paper',
    's': 'Scissors'
}

let playerSelection = playerChoice();
let computerSelection = computerPlay();
game();

function game(){
    for(let i = 0; i<5; i++){
        console.log(playRound(playerSelection,computerSelection));
        playerSelection = playerChoice();
        computerSelection = computerPlay();
    }
    console.log("GAME ENDED");
}

function playRound(playerSelection, computerSelection) {
    
    switch(playerSelection) {
        case 'r': 
            console.log(`Player chose ${convInput[playerSelection]} and Computer chose ${convInput[computerSelection]}!`);
            if(computerSelection === playerSelection){
                return ("GAME IS A TIE!!");
            } else if(computerSelection === 'p' ){
                return ("Paper beats rock. Computer wins!");
            } else if(computerSelection === 's'){
                return ("Rock beats scissors! Player wins!");
            }
            break;
        case 'p':
            console.log(`Player chose ${convInput[playerSelection]} and Computer chose ${convInput[computerSelection]}!`);
            if(computerSelection === playerSelection){
                return ("GAME IS A TIE!!");
            } else if(computerSelection === 'r' ){
                return ("Paper beats rock. Player wins!");
            } else if(computerSelection === 's'){
                return ("Scissors beats paper! Computer wins!");
            }
            break;
        case 's':
            console.log(`Player chose ${convInput[playerSelection]} and Computer chose ${convInput[computerSelection]}!`);
            if(computerSelection === playerSelection){
                return ("GAME IS A TIE!!");
            } else if(computerSelection === 'r' ){
                return ("Rock beats scissors. Computer wins!");
            } else if(computerSelection === 'p'){
                return ("Scissors beats paper! Player wins!");
            }
            break;
        };
}
  
function playerChoice() {
    let choice = prompt("Enter rock, paper or scissors!").toLowerCase().charAt(0);

    while(choice != "r" && choice != "p" && choice != "s"){          
        console.log("Invalid input! Try again");
        alert("Invalid input! try again.")
        choice = playerChoice();
    }
    return choice;
}


function computerPlay(){                                                    // converts and returns a randomly generated number into one of the 3 string choices from 'selection[]'
    const selection = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random()*3) + 1;
    return selection[randomNumber-1];
}
