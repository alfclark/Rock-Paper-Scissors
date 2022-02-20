var userChoice;
var cpuChoice;
var choices = ['rock', 'paper', 'scissors'];
var userScore = 0;
var computerScore = 0;

function round(){
  var userChoice = prompt('What do you choose?').toLowerCase();
  var cpuChoice = choices[(Math.random() * choices.length) | 0];
  console.log("You chose: " + userChoice);
  console.log('The PC chose: ' + cpuChoice);
  if ((userChoice === 'paper' && cpuChoice ==='scissors') || (userChoice === 'rock' && cpuChoice === 'paper') || (userChoice === 'scissors' && cpuChoice === 'rock')){
    console.log('Point for the PC!')
    computerScore++;
  }
  else if ((userChoice === 'paper' && cpuChoice === 'rock') || (userChoice === 'rock' && cpuChoice=== 'scissors') || (userChoice === 'scissors' && cpuChoice === 'paper')){
    console.log('Point for you!')
    userScore++;
  }
  else{
    console.log('No points!')
  }
}

function game(){
  for (let i = 0; i < 5; i++) {
    round();
    console.log('You have: ' + userScore + ' points.');
    console.log('PC has: ' + computerScore + ' points.');
  }
  if (userScore === computerScore){
    console.log('Is a tie!')
  }
  else if(userScore < computerScore){
    console.log('You lost!')
  }
  else {
    console.log('You won!')
  }
}

game();

