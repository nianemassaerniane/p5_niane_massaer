let kanapData= [];
const fetchKanap = async ( ) =>
{
    await fetch("http://localhost:3000/api/products")
    .then((res) => res.json()) 
    .then((Promise) => {
        kanapData = Promise;
        console.log(kanapData);
    });
};

const kanapDisplay = async ( ) =>
{
    await fetchKanap();    
document.getElementById("items").innerHTML =kanapData.map( (kanap) =>`
<div id="card ${kanap._id}" class="items1 card-size card ">
<h3 class="titre">${kanap.name.toUpperCase()}
</h3>
<img class="taille_image"  src="${kanap.imageUrl}"alt ="canape canape ${kanap.name}"/>
<p class="description-text">${kanap.description}</p>
<button  id="${kanap._id}" class="boutton-detail">Voir</button>
<p>${kanap.price}€</p>
</div>` ,
).join("");
};

kanapDisplay();
//fetchKanap();

