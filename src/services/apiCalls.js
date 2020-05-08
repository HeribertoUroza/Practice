import Axios from "axios";

// ----RANDOM COCKTAIL GENERATOR
const RandomCocktail = () => {
    return Axios({
        method: 'get',
        url: process.env.REACT_APP_cocktail,
    })
}

// ----NASA PICTURE OF THE DAY
const NasaPic = () => {
    return Axios({
        method: "get",
        url: process.env.REACT_APP_nasa, 
    })
}

// ----GET CURRENT WEATHER FOR NY
const getWeather = () => {
    return Axios({
        method: 'get',
        url: process.env.REACT_APP_weather,
    })
}

// ----GET GIF BASED ON CURRENT WEATHER
const getGif = async(query) => {
    try {
        let data = await Axios({
        method: 'post',
            url: process.env.REACT_APP_weather,
            data: { query },
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
    })

        return data.data.data[0].images.original.url

    } catch(error) {
        console.log(error)
    }
}

export {
    RandomCocktail,
    NasaPic,
    getWeather,
    getGif
}