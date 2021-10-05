
//traemos fetchData
const  fetchData = require('../utils/fetchData');
//Ahora la API
const API = 'https://rickandmortyapi.com/api/character/';


//Realizamos nuestras peticiones
//Primero llamamos a fetchData y le pasamos nuestra API
fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err =>{
        console.error(err)
    });

    //crear el script en el package