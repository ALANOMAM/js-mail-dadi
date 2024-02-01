/* 
Mail:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (qui quindi dovremmo creare da noi un array di email casuali),
stampa un messaggio appropriato sull’esito del controllo.
*/

let userMail = document.querySelector("#myMail")
let mails = ["omam@alan.com","marco@mengoni.com","nloga@andy.com","violani@pietro.com","spanu@gabriel.com"]
let button = document.querySelector("#btn")
const result = document.querySelector("#output")
 
button.addEventListener("click", 
function(){
    

    for(let i=0; i<mails.length; i++){
     
     if(userMail.value === mails[i] ){
           result.innerHTML=" puoi accedere"
           //per uscire al ciclo
            mails.length=0;
           
        } else /*if(userMail != mails[i])*/{
           result.innerHTML=" non puoi accedere"
        } 
       
        
       }


}

)


