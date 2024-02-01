/*
Gioco dei dadi:
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let playerRandom = Math.floor( Math.random()*7)
console.log("player",playerRandom)
let computerRandom = Math.floor( Math.random()*7)
console.log("pc",computerRandom)

if(playerRandom > computerRandom){
    console.log("il player ha vinto")
}else if(playerRandom < computerRandom){
    console.log("il computer ha vinto")
}else{
    console.log("Il pc e il player hanno pareggiato")
}