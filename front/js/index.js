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
fetchKanap();