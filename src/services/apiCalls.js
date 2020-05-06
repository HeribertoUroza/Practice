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

const getGif = (query) => {
    console.log('test',typeof(query))
    let data = Axios({
        method: 'post',
        url: ``,
        data: { query }
    })

    data
    .then(data => {
        console.log(data.data)
    })
    .catch( err => {
        console.log(err)
    })
}

export {
    RandomCocktail,
    NasaPic,
    getWeather,
    getGif
}