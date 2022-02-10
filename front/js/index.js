sectionRemplir();

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

          // Integration de l'élément "article"
          let articleProduit = document.createElement("article");
          lienProduit.appendChild(articleProduit);

           // Integration de l'image
           let imageProduit = document.createElement("img");
           articleProduit.appendChild(imageProduit);
           imageProduit.src = resultatAPI[article].imageUrl;
           imageProduit.alt = resultatAPI[article].altTxt;
            // Integration du nom du produit 
            let nomProduit = document.createElement("h3");
            articleProduit.appendChild(nomProduit);
            nomProduit.classList.add("nomProduit");
            nomProduit.innerHTML = resultatAPI[article].name;

             // Intégration de la description 
             let descriptionProduit = document.createElement("p");
             articleProduit.appendChild(descriptionProduit);
             descriptionProduit.classList.add("nomProduit");
             descriptionProduit.innerHTML = resultatAPI[article].description;


        }
    })
    .catch (function(error){
        return error;
    });
}

