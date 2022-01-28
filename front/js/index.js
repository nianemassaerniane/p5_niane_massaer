fillSection();

// Lancement et Récupération des données de l'API
async function kanapDonnee() {
    var recupereArticle = await fetch("http://localhost:3000/api/products")
    return await recupereArticle.json();
}