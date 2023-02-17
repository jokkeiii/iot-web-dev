// Using API:s to get data
// promise then
fetch('https://catfact.ninja/breeds?limit=5')
    .then(response => response.json())
    .then(catData => {
        console.log(catData);
    })
    .catch(error => console.log(error));

// async await
async function fetchCats() {
    try {
        const response = await fetch('https://catfact.ninja/breeds?limit=5');
        const catData = await response.json(); 
        console.log(catData.data);
    } catch (error) {
        console.log(error);
    }
};

fetchCats();