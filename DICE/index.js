/*
Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/* dove genero i numeri random */
let playerRandom = Math.floor( Math.random()*7)
let computerRandom = Math.floor( Math.random()*7)

/*collego html e js per gli output sul dom dei risultati del player e del pc */
let playerOutput = document.querySelector("#player")
let computerOutput = document.querySelector("#computer")
let winner = document.querySelector("#result")

/*associo l'output ramdom del pc del player e lo espongo in dom*/
playerOutput.innerHTML = playerRandom
computerOutput.innerHTML = computerRandom

if(playerRandom > computerRandom){
     winner.innerHTML="Player"
}else if(playerRandom < computerRandom){
    winner.innerHTML="Computer"
}else{
    winner.innerHTML="Entrambi"
}