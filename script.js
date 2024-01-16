var wins = 0;
var loss = 0;
var draw = 0;

var choices = ["S","P","R"];

var playGame = function(){
var userSelect= window.prompt("Please enter your option from R, P or S");
var userSelection = userSelect.toUpperCase();

if(!choices.includes(userSelection)){
    window.alert('Selected option not valid. Please only select from R,P or S');
    playGame();
}

var compSelection = choices[Math.floor(Math.random()*choices.length)]


if (userSelection === compSelection) {
    window.alert('It is a tie.');
    draw++;
} else if (userSelection === "R" && compSelection === "P" || userSelection === "P" && compSelection === "S" || userSelection === "S" && compSelection === "R") {
    window.alert('you won. computer choose '+ compSelection); 
    wins++
} else {
    window.alert('you lost. computer choose '+ compSelection); 
    loss++
}

window.alert( 'wins : '+wins + '\n' + 'loss : '+ loss + '\n'+ " draw : "+ draw);

var playAgain = window.confirm( 'Do you wish to play again')
    if(playAgain) {
        playGame();
    }
}

playGame();