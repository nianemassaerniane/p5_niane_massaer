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
    document.getElementById("banner").innerHTML= `<div><img class="bani" src="${kanapData[0].imageUrl}" alt="Baniere"/></div>`;
    document.getElementById("banner1").innerHTML= `<div><img class="bani" src="${kanapData[1].imageUrl}" alt="Baniere"/></div>`;
    document.getElementById("banner2").innerHTML= `<div><img class="bani" src="${kanapData[2].imageUrl}" alt="Baniere"/></div>`;
    document.getElementById("banner3").innerHTML= `<div><img class="bani" src="${kanapData[3].imageUrl}" alt="Baniere"/></div>`;
    document.getElementById("banner4").innerHTML= `<div><img class="bani" src="${kanapData[4].imageUrl}" alt="Baniere"/></div>`;
    document.getElementById("banner5").innerHTML= `<div><img class="bani" src="${kanapData[5].imageUrl}" alt="Baniere"/></div>`;
    document.getElementById("banner6").innerHTML= `<div><img class="bani" src="${kanapData[6].imageUrl}" alt="Baniere"/></div>`;
    document.getElementById("banner7").innerHTML= `<div><img class="bani" src="${kanapData[7].imageUrl}" alt="Baniere"/></div>`;

};

kanapDisplay();
//fetchKanap();