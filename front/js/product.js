const produit = window.location.search.split("?").join("");
console.log(produit);
let produitData = [];
const fetchproduit = async () => {
    await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((res)=>res.json())
    .then((Promise) =>{
        produitData = Promise;
        console.log(produitData);
    }
    );

};
const produitDisplay = async () => {
    await fetchproduit();
    document.getElementById("item__img").innerHTML = `
    <div id = "card${produitData._id} " class="items1 card-size card ">
    <img class="taille_image"  src="${produitData.imageUrl}"alt ="image des  canape ${produitData.name}"/>
    </div>`;
    document.getElementById("description").innerHTML=`
    ${produitData.description}
    `;
    document.getElementById("price").innerHTML=`
    ${produitData.price}
    `;
    let select  = document.getElementById("colors");
    console.log(select);

    console.log(produitData.varnish);

    produitData.colors.forEach((colors) => {
        console.log(colors);
        let tagOption =document.createElement("option");
        tagOption.innerHTML = `${colors}`;
        tagOption.value = `${colors} `;
        select.appendChild(tagOption);
        console.log(tagOption);
        
    });
};
produitDisplay();