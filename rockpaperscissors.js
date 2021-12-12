console.log("TITLE: ROCK PAPER SCISSORS!!");

game();

function game(){
    for(let i = 0; i<5; i++){
        let playerSelection = playerChoice();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
    console.log("GAME OVER");
    alert("GAME OVER")
}

function playRound(playerSelection, computerSelection) {

    const convInput = {'r': 'Rock', 'p': 'Paper', 's': 'Scissors'}

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
  
function playerChoice() {                                                           // takes only the 1st letter regardless of input typed and verifies whether it is an acceptable selection
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
    let randomNumber = Math.floor(Math.random()*3) ;
    return selection[randomNumber];
}