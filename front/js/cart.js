//Initialisation du local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);
const placerPanierVide = document.querySelector("#cart__items");
// Si le panier est vide
function afficherPanier(){

    if (produitLocalStorage === null || produitLocalStorage == 0) {
        const panierVide = `<p>Votre panier est vide</p>`;
        placerPanierVide.innerHTML = panierVide;
    } 
}

    afficherPanier();