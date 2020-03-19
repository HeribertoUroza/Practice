import Axios from "axios";

// ----RANDOM COCKTAIL GENERATOR
const RandomCocktail = () => {
    return Axios({
        method: 'get',
        url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "65bc37a623msh0f6c8445f54e3d2p16af79jsne6aea299b290"
        }
    })
}

export {
    RandomCocktail,
}