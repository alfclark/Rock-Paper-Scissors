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

  function status(){
    var restart = document.querySelector('.restart');
    var winner = document.querySelector('.winner');
    if(userScore === 5){
      restart.style.display = 'block';
      winner.textContent = 'User Wins!';
    }
    else if(cpuScore === 5){
      restart.style.display = 'block';
      winner.textContent = 'PC Wins!';
    }
  }

  //Function to compare user and CPU selection
  function compare(userChoice, cpuChoice){
    let move = document.querySelector('.move');
      //Check for a tie
    if(userChoice === cpuChoice){
      move.textContent = 'No Points!';
      move.style.opacity = 1;
      return;
    }
    //Check for rock
    if(userChoice === 'rock'){
      if(cpuChoice === 'scissors'){
        userScore++;
        move.textContent = 'Point for User!';
        move.style.opacity = 1;
        score();
        status();
        return;
      }
      else{
        cpuScore++;
        move.textContent = 'Point for PC!';
        move.style.opacity = 1;
        score();
        status();
        return;
      }
    }
    //Check for paper
    if(userChoice === 'paper'){
      if(cpuChoice === 'rock'){
        userScore++;
        move.textContent = 'Point for User!';
        move.style.opacity = 1;
        score();
        status();
        return;
      }
      else{
        cpuScore++;
        move.textContent = 'Point for PC!';
        move.style.opacity = 1;
        score();
        status();
        return;
      }
    }
    //Check for scissors
    if(userChoice === 'scissors'){
      if(cpuChoice === 'paper'){
        userScore++;
        move.textContent = 'Point for User!';
        move.style.opacity = 1;
        score();
        status();
        return;
      }
      else{
        cpuScore++;
        move.textContent = 'Point for PC!';
        move.style.opacity = 1;
        score();
        status();
        return;
      }
    }
    }
  match();
}

//Function to start the game
game();