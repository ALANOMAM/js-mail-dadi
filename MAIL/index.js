/* 
Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
*/

let userMail = "mirco@mengoni.com" 
const mails = ["omam@alan.com","marco@mengoni.com","nloga@andy.com","violani@pietro.com","spanu@gabriel.com"]


for(let i=0; i<mails.length; i++){
  
 if(userMail === mails[i]){
    console.log("puoi accedere") 
 }else{
    console.log(" non puoi accedere")  
 }

}