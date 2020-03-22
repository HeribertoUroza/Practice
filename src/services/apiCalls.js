import Axios from "axios";

// ----RANDOM COCKTAIL GENERATOR
const RandomCocktail = () => {
    return Axios({
        method: 'get',
        url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
        // headers: {
        //     "x-rapidapi-host": process.env.REACT_APP_xrapidapihost,
        //     "x-rapidapi-key": process.env.REACT_APP_xrapidapikey
        // }
    })
}

export {
    RandomCocktail,
}