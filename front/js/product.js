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