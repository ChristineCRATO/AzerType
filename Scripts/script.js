console.log("Hello World !") // texte de test à l'affichage //

// Variable contenant le mot ou la phrase du User //
let motUtilisateur;

// Défini le score de l'uutilisateur, il commence à 0 //
let score = 0;

// Le User doit choisir entre les mots ou les phrases, sinon la question reviendra à l'infini //
let choix = prompt("Choisis ce que tu préfères dans la liste : des mots ou des phrases !");
while (choix !== "mots" && choix !== "phrases") { // Laisse le choix à l'utilisateur //
  choix = prompt("Il faut que tu choisisses dans la liste : des mots ou des phrases 😅 !");
}

// Le User a choisi les mots, il doit taper les mots de la liste...//
if (choix === "mots") {
  for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt(
      "Bonjour, saisis les mots 😉 : " + listeMots[i]
    );
    if (motUtilisateur === listeMots[i]) {
      score++
    }
  }
console.log("Ton score est de " + score + " sur " + listeMots.length);
} else {

// Le User a choisi les phrases, il doit taper les phrases de la liste...//
for (let i = 0; i < listePhrases.length; i++) {
  let motUtilisateur = prompt(
    "Bonjour, saisis ta phrase : " + listePhrases[i]
  );
  if (motUtilisateur === listePhrases[i]) {
    score++
  }
}
console.log("Ton score est de " + score + " sur " + listePhrases.length);
}

let nouveauMessage = donneMonScore(5, 10)
console.log(nouveauMessage)

// Voici les résultats du User //
function donneMonScore(score, nombreQuestions) {
    let message = "Ton score est de " + score + " sur " + nombreQuestions
    return message
}
