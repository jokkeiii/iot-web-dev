// fetch API

fetch('https://catfact.ninja/breeds?limit=5')
    .then(response => response.json())
    .then(json => {
        json.data.map((breed) => {
            console.log(breed.breed + " -- " + breed.country);
        });
    }).catch((error) => {
        console.log(error);
    }); 

console.log("-------------------");

async function fetchData() {
    try {
        const response = await fetch('https://catfact.ninja/breeds?limit=5');
        const json = await response.json();
        json.data.map((breed) => {
            console.log(breed.breed + " -- " + breed.country);
        });
    } catch (error) {
        console.log(error);
    }
}