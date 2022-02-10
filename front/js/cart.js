//Initialisation du local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);
const placerPanierVide = document.querySelector("#cart__items");
// Si le panier est vide
function afficherPanier() {

    if (produitLocalStorage === null || produitLocalStorage == 0) {
        const panierVide = `<p>Votre panier est vide</p>`;
        alert("panier vide")
        placerPanierVide.innerHTML = panierVide;
    }
    else {
        for (let produit in produitLocalStorage) {
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
    }
}
afficherPanier();

function afficherTotal() {

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
    productTotalPrice.innerHTML = totalPrice;
    console.log(totalPrice);
}
afficherTotal();

// Modification d'une quantité de produit
function modifierQuantite() {
    let quantiteAModifier = document.querySelectorAll(".itemQuantity");

    for (let k = 0; k < quantiteAModifier.length; k++) {
        quantiteAModifier[k].addEventListener("change", (event) => {
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

    for (let j = 0; j < boutonsupprimer.length; j++) {
        boutonsupprimer[j].addEventListener("click", (event) => {
            event.preventDefault();

            //Selection de l'element à supprimer en fonction de son id ET sa couleur
            let supprimerIdentifant = produitLocalStorage[j].idProduit;
            let supprimerCouleur = produitLocalStorage[j].couleurProduit;

            produitLocalStorage = produitLocalStorage.filter(el => el.idProduit !== supprimerIdentifant || el.couleurProduit !== supprimerCouleur);

            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
            // refresh

            location.reload();
        })
    }
}
supprimerProduit();

// regex nom, prénom et ville

function validNameCity(inputName) {
    let nameRegexp = new RegExp(/^[a-z ,.'-]+$/i)

    let testName = nameRegexp.test(inputName.value)
    let messageName = inputName.nextElementSibling
    if (testName) {
        messageName.innerHTML = ""
        return true
    } else {
        messageName.innerHTML = "Invalide"
        return false
    }
}
// regex mail 
function validMail(inputMail) {
    let mailRegexp = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
    let testMail = mailRegexp.test(inputMail.value)
    let messageMail = inputMail.nextElementSibling
    if (testMail) {
        messageMail.innerHTML = ""
        return true
    } else {
        messageMail.innerHTML = "Invalide"
        return false
    }
}
function saveContact(contact) {
    localStorage.setItem("contact", JSON.stringify(contact))
}
// verification du formulaire 

let form = document.querySelector('.cart__order__form')

form.firstName.addEventListener('change', function () {
    validNameCity(this)
})

form.lastName.addEventListener('change', function () {
    validNameCity(this)
})

form.city.addEventListener('change', function () {
    validNameCity(this)
})

form.email.addEventListener('change', function () {
    validMail(this)
})
// création de l'objet contact au submit si formulaire valide et redirection vers la page de confirmation

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const address = document.getElementById('address').value
    const city = document.getElementById('city').value
    const email = document.getElementById('email').value
    contact = {
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        email: email
    }
    if (validNameCity(form.firstName) == false) {
        alert("merci de renseigner votre Prénom")

    } else if (validNameCity(form.lastName) == false) {
        alert("merci de renseigner votre Nom")

    } else if (validNameCity(form.city) == false) {
        alert("merci de renseigner votre Ville")

    } else if (validMail(form.email) == false) {
        alert("merci de renseigner votre Email")

    } else if (produitLocalStorage === null || produitLocalStorage == 0) {
        alert("votre panier est vide")

    }
    else {
        //Construction d'un array depuis le local storage
        let idProducts = [];
        for (let i = 0; i < produitLocalStorage.length; i++) {
            idProducts.push(produitLocalStorage[i].idProduit);
        }
        console.log(idProducts);

        const order = {
            contact: {
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                email: email
            },
            products: idProducts,
        }
        
        const options = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
        };

        saveContact(contact)
        //window.location.assign("confirmation.html")
        fetch("http://localhost:3000/api/products/order", options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                localStorage.clear();
                localStorage.setItem("orderId", data.orderId);

                document.location.href = "confirmation.html";
            })
            .catch((err) => {
                alert("Problème avec fetch : " + err.message);
            });
    }
})
