let ajoutProduitPanier = JSON.parse(localStorage.getItem("produit"));

const panierDisplay = async () => {

    if (ajoutProduitPanier){
        await ajoutProduitPanier;
        console.log(ajoutProduitPanier);
        cart__items.innerHTML=ajoutProduitPanier.map((produit) =>`
        <article class="cart__item" >
                <div class="cart__item__img">
                  <img src="${produit.imageUrl}" alt="Photographie d'un canapé ${produit.name}">
                </div>
                <div class="cart__item__content__titre">
                  <h2>${produit.name}</h2>
                  <p id="etatProduit"> En stock </p>
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description"> 
                    <p>couleur :  ${produit.colors}</p>
                    <p>prix :  ${produit.price}  €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article> 
        ` ,
        );
        
    };
};
panierDisplay();