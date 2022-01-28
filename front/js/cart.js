let ajoutProduitPanier = JSON.parse(localStorage.getItem("produit"));
console.log(ajoutProduitPanier)
/*
const panierDisplay = async () => {

    if (ajoutProduitPanier){
        await ajoutProduitPanier;
        console.log(ajoutProduitPanier);
        cart__items.innerHTML=ajoutProduitPanier.map((produit) =>`
        <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
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
                    <div class="cart__item__content__settings__quantity" data-id="${produit._id}" data-color="${produit.colors}">
                      <p>Qté :  </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${produit.quantite}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" data-id="${produit._id}" data-color="${produit.colors}">Supprimer </p>
                    </div>
                  </div>
                </div>    
              </article> 
              <div class="cart__price">
              <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span>${produit.quantite * produit.price} €</p>
            </div>
             
        ` ,
        );
        
    };
};
panierDisplay();*/