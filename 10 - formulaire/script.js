/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit",function(event){
    // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
    event.preventDefault();

    const prenomErr = prenom.nextElementSibling;
    const nomErr = nom.nextElementSibling;
    const emailErr = email.nextElementSibling;
    const msgErr = message.nextElementSibling;

    if (prenom.value.length > 20 || prenom.value.length < 2) {
        prenomErr.classList.remove("invisible")
    } else { prenomErr.classList.add("invisible") };

    if (nom.value.length > 20 || nom.value.length < 2) {
        nomErr.classList.remove("invisible")
    } else { nomErr.classList.add("invisible") }

    if (isValidEmail) {
        emailErr.classList.remove("invisible")
    } else { emailErr.classList.add("invisible") }

    if (message.value.length > 100 || message.value.length < 10) {
        msgErr.classList.remove("invisible")
    } else { msgErr.classList.add("invisible") }

});

/**
 * HELPERS FUNCTIONS
 */
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}