/* Ce Fichier contient tous les élèments et Fonctions nécessaire au Jeu */


console.log("Hello World !"); // texte de test à l'affichage //


// La fonction affiche le score du User //
function afficheScore(score, nbreMotsChoix) {
  let spanScore = document.querySelector(".zoneScore span")
  let afficheScore = `${score} / ${nbreMotsChoix}`

  spanScore.innerText = afficheScore
}

function afficheChoix(choix) {
  let zoneChoix = document.querySelector(".zoneChoix")
  zoneChoix.innerText = choix
}

function afficheEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'AzerType !`
  location.href= mailto
}

// Vérifie le bon format
function valideNom(nom) {
  if (nom.length > 2) {
      throw new Error("Le Nom est trop court.")
  }
 
}

// Vérifie le bon format avec la fonction Boolean
function valideEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
    throw new Error("L'Email n'est pas correct !")
  }
  
}

// Affiche l'erreur message
function afficheMessageErreur(message) {
    
  let spanErreurMessage = document.getElementById("erreurMessage")

  if (!spanErreurMessage) {
      let popup = document.querySelector(".popup")
      spanErreurMessage = document.createElement("span")
      spanErreurMessage.id = "erreurMessage"
      
      popup.append(spanErreurMessage)
  }
  
  spanErreurMessage.innerText = message
}

// Récupère les infos du formulaire popup et appel affichage email
function gereFormulaire(scoreEmail) {
  try {
      let baliseNom = document.getElementById("nom")
      let nom = baliseNom.value
      valideNom(nom)
  
      let baliseEmail = document.getElementById("email")
      let email = baliseEmail.value
      valideEmail(email)
      afficheMessageErreur("")
      afficheEmail(nom, email, scoreEmail)

  } catch(erreur) {
      afficheMessageErreur(erreur.message)
  }
  
}

// La fonction lance le Jeu et demande au User de choisir entre mots et phrases //
function lanceLeJeu() {
  // Initialisations
  initAddEventListenerPopup()
  let score = 0;
  let i = 0
  let listeChoix = listeMots

  let btnValide = document.getElementById("btnValide")
  let inputEcriture = document.getElementById("inputEcriture")

  afficheChoix(listeChoix[i])

  btnValide.addEventListener("click", () => {
      if (inputEcriture.value === listeChoix[i]) {
          score++
      }
      i++
      afficheScore(score, i)
      inputEcriture.value = ''
      if (listeChoix[i] === undefined) {
        afficheChoix("Le Jeu est Terminé !")
        btnValide.disabled = true
      } else {
        afficheChoix(listeChoix[i])
      }
  })

  // Changement avec les boutons radio
  let listeBtnRadio = document.querySelectorAll(".optionSource input")
  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      console.log(event.target.value)
      if (event.target.value ===  "1") { // On veut jouer avec les mots
        listeChoix = listeMots
      } else { // Sinon on veut jouer avec les phrases
        listeChoix = listePhrases
      }
      afficheChoix(listeChoix[i]) // On modifie en direct l'affichage
    })
  }

  let form = document.querySelector("form")
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    let baliseNom = document.getElementById("nom")
    let nom = baliseNom.value

    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value

    if (valideNom(nom) && valideEmail(email)) {
        let scoreEmail = `${score} / ${i}`
        afficheEmail(nom, email, scoreEmail)
    } else {
        console.log("Erreur")
    }
    })

  afficheScore(score, i)
}