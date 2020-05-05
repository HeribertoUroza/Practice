import Axios from "axios";

// ----RANDOM COCKTAIL GENERATOR
const RandomCocktail = () => {
    return Axios({
        method: 'get',
        url: ``,
    })
}

// ----NASA PICTURE OF THE DAY
const NasaPic = () => {
    return Axios({
        method: "get",
        url: ``, 
    })
}

const getWeather = () => {
    return Axios({
        method: 'get',
        url: ``,
    })
}

export {
    RandomCocktail,
    NasaPic,
    getWeather
}