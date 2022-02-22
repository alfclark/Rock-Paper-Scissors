var choices = ['rock', 'paper', 'scissors'];
let cpuScore = 0;
let playerScore =0;
const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection;
    round(selectionName);
  })
})

function cpuSelection(){
  var cpuChoice = choices[(Math.random() * choices.length) | 0];
  return cpuChoice;
}


function round(selection){
  var userChoice = selection;
  var cpuChoice = cpuSelection();
  console.log("You chose: " + userChoice);
  console.log('The PC chose: ' + cpuChoice);
  if (
    (userChoice === 'paper' && cpuChoice ==='scissors') || 
    (userChoice === 'rock' && cpuChoice === 'paper') || 
    (userChoice === 'scissors' && cpuChoice === 'rock')
    ){
    console.log('Point for the PC!')
    cpuScore++;
  }
  else if (
    (userChoice === 'paper' && cpuChoice === 'rock') || 
    (userChoice === 'rock' && cpuChoice=== 'scissors') || 
    (userChoice === 'scissors' && cpuChoice === 'paper')
    ){
    console.log('Point for you!')
    playerScore++;
  }
  else{
    console.log('No points!')
  }
  console.log('You have: ' + playerScore + ' points.');
  console.log('PC has: ' + cpuScore + ' points.');
}

/*
function game(){
  for (let i = 0; i < 5; i++) {
    console.log('You have: ' + playerScore + ' points.');
    console.log('PC has: ' + cpuScore + ' points.');
  }
  if (cpuScore === playerScore){
    console.log('Is a tie!')
  }
  else if(playerScore < cpuScore){
    console.log('You lost!')
  }
  else {
    console.log('You won!')
  }
}

game(); 
*/
