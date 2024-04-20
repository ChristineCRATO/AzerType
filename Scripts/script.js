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

// La fonction lance le Jeu et demande au User de choisir entre mots et phrases //
function lanceLeJeu() {
  // Initialisations
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
        btnValide.Disabled = true
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

    let scoreEmail = `${score} / ${i}`

    console.log(nom, email, scoreEmail)
  })

  afficheScore(score, i)
}