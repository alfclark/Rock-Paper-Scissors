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
  //Printing move result
  function pointCPU(){
    let move = document.querySelector('.move');
    move.textContent = 'Point for PC!';
    move.style.opacity = 1;
    setTimeout(function(){
      move.style.opacity = 0;
    },500)
  }

  function pointUser(){
    let move = document.querySelector('.move');
    move.textContent = 'Point for User!';
    move.style.opacity = 1;
    setTimeout(function(){
      move.style.opacity = 0;
    },500)
  }

  function noPoints(){
    let move = document.querySelector('.move');
    move.textContent = 'No Points!';
    move.style.opacity = 1;
    setTimeout(function(){
      move.style.opacity = 0;
    },500)
  }

  //Function to compare user and CPU selection
  function compare(userChoice, cpuChoice){
      //Check for a tie
    if(userChoice === cpuChoice){
      noPoints();
      return;
    }
    //Check for rock
    if(userChoice === 'rock'){
      if(cpuChoice === 'scissors'){
        userScore++;
        pointUser();
        score();
        status();
        return;
      }
      else{
        cpuScore++;
        pointCPU();
        score();
        status();
        return;
      }
    }
    //Check for paper
    if(userChoice === 'paper'){
      if(cpuChoice === 'rock'){
        userScore++;
        pointUser();
        score();
        status();
        return;
      }
      else{
        cpuScore++;
        pointCPU();
        score();
        status();
        return;
      }
    }
    //Check for scissors
    if(userChoice === 'scissors'){
      if(cpuChoice === 'paper'){
        userScore++;
        pointUser();
        score();
        status();
        return;
      }
      else{
        cpuScore++;
        pointCPU();
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