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
        
            // Insertion de l'emplacement du conteu produit 
            let imageDuProduitDiv = document.createElement("div");
            articleDuProduit.appendChild(imageDuProduitDiv);
            imageDuProduitDiv.className = "cart__item__img";
        
            // Insertion de l'image
            let imageDuProduit = document.createElement("img");
            imageDuProduitDiv.appendChild(imageDuProduit);
            imageDuProduit.src = produitLocalStorage[produit].imgProduit;
            imageDuProduit.alt = produitLocalStorage[produit].altImgProduit;
            
            // gestion de l'article produit
            let contenuDeArticleProduit = document.createElement("div");
            articleDuProduit.appendChild(contenuDeArticleProduit);
            contenuDeArticleProduit.className = "cart__item__content";
        
            // gestion du titre 
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
        
            // parametrage des articles
            let parametreDuContenuDeArticleProduit = document.createElement("div");
            contenuDeArticleProduit.appendChild(parametreDuContenuDeArticleProduit);
            parametreDuContenuDeArticleProduit.className = "cart__item__content__settings";
        
            // parametrage de la quantité
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
        
            // Insertion de l'ement supprimer"
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
    
        function afficherTotal(){

            // Récupération du total des quantités
            var quantiteTotal = document.getElementsByClassName('itemQuantity');
            var myLength = quantiteTotal.length,
            totalProduit = 0;
        
            for (var i = 0; i < myLength; ++i) {
                totalProduit += quantiteTotal[i].valueAsNumber;
            }
        
            let productTotalQuantity = document.getElementById('totalQuantity');
            productTotalQuantity.innerHTML = totalProduit;
            console.log(totalProduit);
        
            // Récupération du prix total
            totalPrice = 0;
        
            for (var i = 0; i < myLength; ++i) {
                totalPrice += (quantiteTotal[i].valueAsNumber * produitLocalStorage[i].prixProduit);
            }
        
            let productTotalPrice = document.getElementById('totalPrice');
            productTotalPrice.innerHTML =  totalPrice;
            console.log( totalPrice);
        }
        afficherTotal();

        // Modification d'une quantité de produit
function modifierQuantite() {
    let quantiteAModifier = document.querySelectorAll(".itemQuantity");

    for (let k = 0; k < quantiteAModifier.length; k++){
        quantiteAModifier[k].addEventListener("change" , (event) => {
            event.preventDefault();

            //Selectionner l'element à modifier en fonction de son id ET sa couleur
            let quantityModif = produitLocalStorage[k].quantiteProduit;
            let qttModifValue = quantiteAModifier[k].valueAsNumber;
            
            const resultFind = produitLocalStorage.find((el) => el.qttModifValue !== quantityModif);

            resultFind.quantiteProduit = qttModifValue;
            produitLocalStorage[k].quantiteProduit = resultFind.quantiteProduit;

            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
        
            // rafraichir rapidement  
            location.reload();
        })
    }
}
modifierQuantite();

// Suppression d'un produit
function supprimerProduit() {
    
    let boutonsupprimer = document.querySelectorAll(".deleteItem");

    for (let j = 0; j < boutonsupprimer.length; j++){
        boutonsupprimer[j].addEventListener("click" , (event) => {
            event.preventDefault();

            //Selection de l'element à supprimer en fonction de son id ET sa couleur
            let supprimerIdentifant = produitLocalStorage[j].idProduit;
            let supprimerCouleur = produitLocalStorage[j].couleurProduit;

            produitLocalStorage = produitLocalStorage.filter( el => el.idProduit !== supprimerIdentifant || el.couleurProduit !== supprimerCouleur );

            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
            // refresh

            location.reload();
        })
    }
}
supprimerProduit();

 //Instauration formulaire avec regex et modification des champs 
function gestionDuFormulaire() {

    let form = document.querySelector(".cart__order__form");
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
    let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

    form.firstName.addEventListener('change', function() {
        validFirstName(this);
    });
    form.lastName.addEventListener('change', function() {
        validLastName(this);
    });
    form.address.addEventListener('change', function() {
        validAddress(this);
    });
    form.city.addEventListener('change', function() {
        validCity(this);
    });
    form.email.addEventListener('change', function() {
        validEmail(this);
    });

     //verifier la validation  du prénom
     const validFirstName = function(inputFirstName) {
        let firstNameErrorMsg = inputFirstName.nextElementSibling;

        if (charRegExp.test(inputFirstName.value)) {
            firstNameErrorMsg.innerHTML = '';
        } else {
            firstNameErrorMsg.innerHTML = 'Veuillez bien renseigner ce champ.';
        }
    };

    //validation du nom
    const validLastName = function(inputLastName) {
        let lastNameErrorMsg = inputLastName.nextElementSibling;

        if (charRegExp.test(inputLastName.value)) {
            lastNameErrorMsg.innerHTML = '';
        } else {
            lastNameErrorMsg.innerHTML = 'Veuillez bien renseigner ce champ.';
        }
    };

    //verifier la validité de l'adresse 
    const validAddress = function(inputAddress) {
        let addressErrorMsg = inputAddress.nextElementSibling;

        if (addressRegExp.test(inputAddress.value)) {
            addressErrorMsg.innerHTML = '';
        } else {
            addressErrorMsg.innerHTML = 'Veuillez bien renseigner ce champ.';
        }
    };
     //verification de la validité de la ville
     const validCity = function(inputCity) {
        let cityErrorMsg = inputCity.nextElementSibling;

        if (charRegExp.test(inputCity.value)) {
            cityErrorMsg.innerHTML = '';
        } else {
            cityErrorMsg.innerHTML = 'Veuillez bien renseigner ce champ.';
        }
    };

    //validation de l'email
    const validEmail = function(inputEmail) {
        let emailErrorMsg = inputEmail.nextElementSibling;

        if (emailRegExp.test(inputEmail.value)) {
            emailErrorMsg.innerHTML = '';
        } else {
            emailErrorMsg.innerHTML = 'Veuillez renseigner votre email.';
        }
    };
    
    }
gestionDuFormulaire();

//Envoi des informations client au localstorage
function envoiDuFormulaire(){
    const btn_commander = document.getElementById("order");

    //recupérer les donnés du bouton commander 
    btn_commander.addEventListener("click", (event)=>{
    
        //Récupération les coordonnées renseigner dans le formulaire client
        let inputName = document.getElementById('firstName');
        let inputLastName = document.getElementById('lastName');
        let inputAdress = document.getElementById('address');
        let inputCity = document.getElementById('city');
        let inputMail = document.getElementById('email');

       
        })
}
envoiDuFormulaire();