let options = ["rock", "scissor", "papper"];

                      /*-----------------Esto hay que cambiarlo -------------------------*/
let playerSelection = (prompt("Choose your weapon: scissor, papper or rock")).toLowerCase();  

document.getElementById("rock").addEventListener("click", juan);

function juan () {
  alert ("Seleccionaste la roca para pelear contra la computadora");
};



function computerPlay() {
    
  let computerSelection = options[Math.floor(Math.random() * 3)];

  if (playerSelection == "scissor" && computerSelection == "paper") {
    return ("You win, computer chose papper, and scissor beat papper");
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    return ("You lose, computer chose rock, and rock beat scissor");
  } else if ( playerSelection == "rock" && computerSelection == "scissor"){
  return ( "You win, computer chose scissor, and rock beat scissor" );
  } else if ( playerSelection == "rock" && computerSelection == "papper"){
  return ("You lose, computer chose papper, and papper beat rock");
  } else if ( playerSelection == "papper" && computerSelection == "rock" ){
    return ("You win, computer chose rock, and papper beat rock")
  } else if ( playerSelection == "papper" && computerSelection == "scissor"){
    return ("You lose, computer chose scissor, and scissor beat papper");
  } else {
    return ("Here there was a tie with the computer")
  }
};

