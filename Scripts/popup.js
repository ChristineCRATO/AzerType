/*********************************************************************************
 * 
 *                 Fonctions nécessaires Affichage et Fermeture
 *                               Popup de partage
 * 
 *********************************************************************************/


/**
 * La Fonction affiche Popup et partage score. 
 */
function affichePopup() {
    let popupBackG = document.querySelector(".popupBackG")
    // Popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackG.classList.add("active")
}

/**
 * La Fonction cache Popup pour partage du score. 
 */
function cachePopup() {
    let popupBackG = document.querySelector(".popupBackG")
    // Popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackG.classList.remove("active")
}


/**
 * La Fonction init écouteurs d'événements pour Affichage Popup. 
 */
function initAddEventListenerPopup() {
    // Ecoute click sur le bouton "partager"
    btnPartage = document.querySelector(".zonePartage button")
    let popupBackG = document.querySelector(".popupBackG")
    btnPartage.addEventListener("click", () => {
        // Si click sur bouton partagé, alors affiche Popup
        affichePopup()
    })

    // Ecoute click sur la div "popupBackG"
    popupBackG.addEventListener("click", (event) => {
        // Si click précis sur popupBackG 
        // (et pas autre élément qui se trouve dedans)
        if (event.target === popupBackG) {
            // Alors cache Popup
            cachePopup()
        }
    })
}