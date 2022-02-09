var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);
let article = "";

const colorPicked = document. querySelector("#colors");
const quantityPicked = document.querySelector("#quantity");

kanapDonnee();

// Récupération des articles de l'API
function kanapDonnee () {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then((res) => {
        return res.json();
    })
      
      .then(async function (resultatAPI) {
        article = await resultatAPI;
        console.table(article);
        if (article){
            getPost(article);
        }
    })
    .catch((error) => {
        console.log("Erreur de la requête API");
    })
}
// Répartition des données de l'API dans le DOM

function getPost(article){
    // Integration de l'image
    let imageDuProduit = document.createElement("img");
    document.querySelector(".item__img").appendChild(imageDuProduit);
    imageDuProduit.src = article.imageUrl;
    imageDuProduit.alt = article.altTxt;

    // integration du nom du produit 
    let nomDuProduit = document.getElementById('title');
    nomDuProduit.innerHTML = article.name;

    // integration du prix du produit 
    let prixDuProduit = document.getElementById('price');
    prixDuProduit.innerHTML = article.price;

    // integration de la description du produit 
    let descriptionDuProduit = document.getElementById('description');
    descriptionDuProduit.innerHTML = article.description;

    // Gestion des options de couleurs avec la liste déroulante 
    for (let colors of article.colors){
        console.table(colors);
        let couleurDuProduit = document.createElement("option");
        document.querySelector("#colors").appendChild(couleurDuProduit);
        couleurDuProduit.value = colors;
        couleurDuProduit.innerHTML = colors;
    }
    
    addToCart(article);
}

// gestion du panier pour envoyer les elements dans le local storage
function addToCart(article) {
    const btn_envoyerPanier = document.querySelector("#addToCart");

    //Ecouter le panier avec 2 conditions couleur non nulle et quantité entre 1 et 100
    btn_envoyerPanier.addEventListener("click", (event)=>{
        if (quantityPicked.value > 0 && quantityPicked.value <=100 && quantityPicked.value != 0 && colorPicked.value!=""){

    //Recupération du choix de la couleur
    let choixCouleur = colorPicked.value;
                
    //Recupération du choix de la quantité
    let choixQuantite = quantityPicked.value;

     //Récupération des options de l'article à ajouter au panier
     let optionsProduit = {
        idProduit: idProduct,
        couleurProduit: choixCouleur,
        quantiteProduit: Number(choixQuantite),
        nomProduit: article.name,
        prixProduit: article.price,
        descriptionProduit: article.description,
        imgProduit: article.imageUrl,
        altImgProduit: article.altTxt
    };

     //Initialisation du local storage
     let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));

     //fenêtre pop-up
     const popupConfirmation =() =>{
         if(window.confirm(`Votre produit de ${choixQuantite} ${article.name} ${choixCouleur} est ajoutée au panier
 Pour consulter votre panier, cliquez sur OK`)){
             window.location.href ="cart.html";
         }
     }

     //Importation dans le local storage
    //Si le panier comporte déjà au moins 1 article
    if (produitLocalStorage) {
        const resultFind = produitLocalStorage.find(
            (el) => el.idProduit === idProduct && el.couleurProduit === choixCouleur);
            //Si le produit commandé est déjà dans le panier
            if (resultFind) {
                let newQuantite =
                parseInt(optionsProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
                resultFind.quantiteProduit = newQuantite;
                localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                console.table(produitLocalStorage);
                popupConfirmation();
            //Si le produit commandé n'est pas dans le panier
            } else {
                produitLocalStorage.push(optionsProduit);
                localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
                console.table(produitLocalStorage);
                popupConfirmation();
            }
        //Si le panier est vide
        } else {
            produitLocalStorage =[];
            produitLocalStorage.push(optionsProduit);
            localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
            console.table(produitLocalStorage);
            popupConfirmation();
        }
    }else{
        
        alert("la couleur choisie ou le nombre d'articles est invalide! \n merci de verifier votre saisie! ")

    }

        }
        );
    }