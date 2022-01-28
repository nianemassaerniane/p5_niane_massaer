sectionRemplir();

// Lancement et Récupération des données de l'API
async function kanapDonnee() {
    var recupereArticle = await fetch("http://localhost:3000/api/products")
    return await recupereArticle.json();
}
// INTEGRATION  ET REPARTITION  DES DONNEES DANS LA PAGE D'ACCUEIL

async function sectionRemplir() {
    var result = await kanapDonnee ()
    .then(function (resultatAPI){
        const articles = resultatAPI;
        console.table(articles);
        for (let article in articles) {
          // Insertion de l'élément "a"
          let lienProduit = document.createElement("a");
          document.querySelector(".items").appendChild(lienProduit);
          lienProduit.href = `product.html?id=${resultatAPI[article]._id}`;

        }
    })
}


