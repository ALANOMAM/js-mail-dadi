/* 
Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
*/

let userMail = "omam@alam.com"
let mails = ["omam@alan.com","marco@mengoni.com","nloga@andy.com","violani@pietro.com","spanu@gabriel.com"]


const result = document.querySelector("#output")
 

for(let i=0; i<mails.length; i++){
     
 if(userMail === mails[i] ){
    result.innerHTML="puoi accedere"
    console.log("puoi accedere") 
    //per uscire al ciclo
    mails.length=0;
    
 } else{
    result.innerHTML="non puoi accedere"
    console.log(" non puoi accedere") 
    //per uscire al ciclo
    mails.length=0;
 } 

 
}
