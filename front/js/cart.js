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
    else {
        for (let produit in produitLocalStorage){
            // Integration des articles 
            let articleDuProduit = document.createElement("article");
            document.querySelector("#cart__items").appendChild(articleDuProduit);
            articleDuProduit.className = "cart__item";
            articleDuProduit.setAttribute('data-id', produitLocalStorage[produit].idProduit);
        
            // Insertion de l'élément "div"
            let imageDuProduitDiv = document.createElement("div");
            articleDuProduit.appendChild(imageDuProduitDiv);
            imageDuProduitDiv.className = "cart__item__img";
        
            // Insertion de l'image
            let imageDuProduit = document.createElement("img");
            imageDuProduitDiv.appendChild(imageDuProduit);
            imageDuProduit.src = produitLocalStorage[produit].imgProduit;
            imageDuProduit.alt = produitLocalStorage[produit].altImgProduit;
            
            // Insertion de l'élément "div"
            let contenuDeArticleProduit = document.createElement("div");
            articleDuProduit.appendChild(contenuDeArticleProduit);
            contenuDeArticleProduit.className = "cart__item__content";
        
            // Insertion de l'élément "div"
            let titrePrixDuProduit = document.createElement("div");
            contenuDeArticleProduit.appendChild(titrePrixDuProduit);
            titrePrixDuProduit.className = "cart__item__content__titlePrice";
            
            // Insertion du titre h3
            let titreDuProduit = document.createElement("h2");
            titrePrixDuProduit.appendChild(titreDuProduit);
            titreDuProduit.innerHTML = produitLocalStorage[produit].nomProduit;
        
            // Insertion de la couleur
            let couleurDuProduit = document.createElement("p");
            titreDuProduit.appendChild(couleurDuProduit);
            couleurDuProduit.innerHTML = produitLocalStorage[produit].couleurProduit;
            couleurDuProduit.style.fontSize = "20px";
        
            // Insertion du prix
            let prixDuProduit = document.createElement("p");
            titrePrixDuProduit.appendChild(prixDuProduit);
            prixDuProduit.innerHTML = produitLocalStorage[produit].prixProduit + " €";
        
            // Insertion de l'élément "div"
            let parametreDuContenuDeArticleProduit = document.createElement("div");
            contenuDeArticleProduit.appendChild(parametreDuContenuDeArticleProduit);
            parametreDuContenuDeArticleProduit.className = "cart__item__content__settings";
        
            // Insertion de l'élément "div"
            let parametreQuantiteDeArticleProduit = document.createElement("div");
            parametreDuContenuDeArticleProduit.appendChild(parametreQuantiteDeArticleProduit);
            parametreQuantiteDeArticleProduit.className = "cart__item__content__settings__quantity";
            
            // Insertion de "Qté : "
            let produitQte = document.createElement("p");
            parametreQuantiteDeArticleProduit.appendChild(produitQte);
            produitQte.innerHTML = "Qté : ";
        
            // Insertion de la quantité
            let quantiteProduit = document.createElement("input");
            parametreQuantiteDeArticleProduit.appendChild(quantiteProduit);
            quantiteProduit.value = produitLocalStorage[produit].quantiteProduit;
            quantiteProduit.className = "itemQuantity";
            quantiteProduit.setAttribute("type", "number");
            quantiteProduit.setAttribute("min", "1");
            quantiteProduit.setAttribute("max", "100");
            quantiteProduit.setAttribute("name", "itemQuantity");
        
            // Insertion de l'élément "div"
            let parametreSupprimerProduit = document.createElement("div");
            parametreDuContenuDeArticleProduit.appendChild(parametreSupprimerProduit);
            parametreSupprimerProduit.className = "cart__item__content__settings__delete";
        
            // Insertion de "p" supprimer
            let supprimerProduit = document.createElement("p");
            parametreSupprimerProduit.appendChild(supprimerProduit);
            supprimerProduit.className = "deleteItem";
            supprimerProduit.innerHTML = "Supprimer";
        }
        }}
        afficherPanier();
    