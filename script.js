console.log("Hello World !");

//const motApplication = "Bonjour !"
//let motUtilisateur = prompt("Entrez un mot :" + motApplication)
//console.log(motUtilisateur)

//let motTapeOk = true

//if (motUtilisateur === motApplication) {
//console.log("Bravo ! vous avez correctement tapé le mot 💪 ")
//} else {
//console.log("Echec ! Le mot n'est pas correct ❌")
//}

const listeMots = ["Bob", "réglisse", "chris"];
const listePhrases = ["Vive la vie", "La vie est belle", "VDM"];
let score = 0;

let choix = prompt("Veuillez choisir la liste : mots ou phrases !");
while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("Veuillez choisir la liste : mots ou phrases !");
}

if (choix === "mots") {
  for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt(
      "Bonjour, veuiilez entrer le mot : " + listeMots[i]
    );
    if (motUtilisateur === listeMots[i]) {
      score++
    }
  }
console.log("Votre score est de " + score + " sur " + listeMots.length);
} else {

for (let i = 0; i < listePhrases.length; i++) {
  let motUtilisateur = prompt(
    "Bonjour, veuillez entrer la phrase : " + listePhrases[i]
  );
  if (motUtilisateur === listePhrases[i]) {
    score++
  }
}
console.log("Votre score est de " + score + " sur " + listePhrases.length);
}
