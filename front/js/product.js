var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);
let article = "";

const choixCouleur  = document. querySelector("#colors");
const choixQuantite = document.querySelector("#quantity");

kanapDonnee();

// Récupération des articles de l'API
function kanapDonnee () {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then((res) => {
        return res.json();
    })
      // Répartition des données de l'API dans le DOM
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

function getPost(article){
    // Integration de l'image
    let imageProduit = document.createElement("img");
    document.querySelector(".item__img").appendChild(imageProduit);
    imageProduit.src = article.imageUrl;
    imageProduit.alt = article.altTxt;

    // integration du nom du produit 
    let nomProduit = document.getElementById('title');
    nomProduit.innerHTML = article.name;

    // integration du prix du produit 
    let prixProduit = document.getElementById('price');
    prixProduit.innerHTML = article.price;

    // integration de la description du produit 
    let descriptionProduit = document.getElementById('description');
    descriptionProduit.innerHTML = article.description;

    // Gestion des options de couleurs avec la liste déroulante 
    for (let colors of article.colors){
        console.table(colors);
        let couleurProduit = document.createElement("option");
        document.querySelector("#colors").appendChild(couleurProduit);
        couleurProduit.value = colors;
        couleurProduit.innerHTML = colors;
    }
    addToCart(article);
}
