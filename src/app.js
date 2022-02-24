//Main game function
function game(){
  let userScore = 0;
  let cpuScore = 0;
  var x = document.getElementById("game-over");
  function match(){
    const options = document.querySelectorAll('[data-selection]'); //reads data-selection tags from HTML
    const choices = ['rock', 'paper', 'scissors']; //array for choices for PC
    //Function to read user choice and get PC
    options.forEach(option => {
      option.addEventListener('click', function(){
        const userChoice = option.dataset.selection;
        console.log(userChoice);
        const cpuChoice = choices[(Math.random() * choices.length) | 0]; //random selection from PC
        console.log(cpuChoice);
        compare(userChoice,cpuChoice);
      })
    })
  }

  //Function update the score
  function score(){
    const playerScore = document.querySelector(".user-score");
    const computerScore = document.querySelector(".pc-score");
    playerScore.textContent = userScore;
    computerScore.textContent = cpuScore;
  }

  //Function to compare user and CPU selection
  function compare(userChoice, cpuChoice){
    var x = document.getElementById('game-over');
    if(userScore === 5 || cpuScore === 5){
      x.style.display === 'block';c
    }
    //Check for a tie
    if(userChoice === cpuChoice){
      return;
    }
    //Check for rock
    if(userChoice === 'rock'){
      if(cpuChoice === 'scissors'){
        userScore++;
        score();
        return;
      }
      else{
        cpuScore++;
        score();
        return;
      }
    }
    //Check for paper
    if(userChoice === 'paper'){
      if(cpuChoice === 'rock'){
        userScore++;
        score();
        return;
      }
      else{
        cpuScore++;
        score();
        return;
      }
    }
    //Check for scissors
    if(userChoice === 'scissors'){
      if(cpuChoice === 'paper'){
        userScore++;
        score();
        return;
      }
      else{
        cpuScore++;
        score();
        return;
      }
    }
    
  }
  match();
}



//Function to start the game
game();