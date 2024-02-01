/* 
Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
*/

const userMail = "omam@alam.com"
const mails = ["omam@alan.com","marco@mengoni.com","nloga@andy.com","violani@pietro.com","spanu@gabriel.com"]
let index = mails.indexOf(userMail)

const result = document.querySelector("#output")
 

for(let i=0; i<mails.length; i++){
     
 if( index != -1){
    result.innerHTML="puoi accedere"
    console.log("puoi accedere") 
    //per rompere il ciclo e non fare ripettere la stessa frase troppe volte
    mails.length = 0;

 } else if(index =-1 ){
    result.innerHTML="non puoi accedere"
    console.log(" non puoi accedere") 
    //per rompere il ciclo e non fare ripettere la stessa frase troppe volte 
    mails.length = 0;
 }  
 
}
