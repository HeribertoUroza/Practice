import Axios from "axios";

// ----RANDOM COCKTAIL GENERATOR
const RandomCocktail = () => {
    return Axios({
        method: 'get',
        url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
        headers: {
            "x-rapidapi-host": process.env.REACT_APP_xrapidapihost,
            "x-rapidapi-key": process.env.REACT_APP_xrapidapikey
        }
    })
}

// ----NASA PICTURE OF THE DAY
const NasaPic = () => {
    const api_key = process.env.REACT_APP_api_key;
    return Axios({
        method: "get",
        url: `https://api.nasa.gov/planetary/apod?api_key=${api_key}`, 
    })
}

const getWeather = () => {
    const weatherAPI = '40cef0b27157fa941a0a410eeb184fcd'
    return Axios({
        method: 'get',
        url: `https://api.darksky.net/forecast/${weatherAPI}/40.7829,73.9654`,
        headers: { 
            'Access-Control-Allow-Origin': '*'
        },
        crossdomain: true
    })
}

export {
    RandomCocktail,
    NasaPic,
    getWeather
}