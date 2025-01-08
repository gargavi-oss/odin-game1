let userName = prompt("Enter your name to play the game : ");
let userRound = prompt("Enter number of rounds you want to play in game : ");


let humanScore = 0;
let computerScore = 0;
let round = 1;

while(round<=userRound)
{
    playGame();
    round++;
}
function playGame()
{
   let humanSelection = getHumanChoice();
   if (humanSelection === null) {
    exit(1);
}
   let computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);
};
function getHumanChoice()
{
    let userInput = prompt("Enter rock,paper,or scissor to play game :");
userInput = userInput.toLowerCase();
if(userInput=='rock') return 1;
else if(userInput == 'paper') return 2;
else if(userInput == 'scissor') return 3;

else {
    alert("Invalid input! Please enter rock, paper, or scissor.");
    return null; }
};
function getComputerChoice()
{
    return Math.floor(Math.random() * 5);
};

function playRound(humanSelection,computerSelection)
{
   if(computerSelection == humanSelection)
   {
    console.log('Game Draws! Try Again');
    alert('Game Draws! Try Again');
   }
   else if(computerSelection>humanSelection)
   {
    console.log("You lose ! Computer WINS");
    alert("You lose ! Computer WINS");
    computerScore++;
   }
   else if(computerSelection<humanSelection)
   {
    console.log("You Wins ! Computer LOSSES");
    alert("You Wins ! Computer LOSSES");
    humanScore++;
   }
};

function result(humanScore,computerScore)
{
    if(humanScore==computerScore)
        {
         alert("Game Draws !");
        }
        else if(humanScore>computerScore)
        {
         alert("You won the Game !");
        }
        else{
         alert("You lost the Game !");
        }
        
        alert(`${userName.toUpperCase()} Score = `+ `${humanScore}\n`+
            "Computer Score = "+ `${computerScore}`
      );
};
result(humanScore,computerScore);
