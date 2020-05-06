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

// ----GET CURRENT WEATHER FOR NY
const getWeather = () => {
    return Axios({
        method: 'get',
        url: ``,
    })
}

// ----GET GIF BASED ON CURRENT WEATHER
const getGif = async(query) => {
    try {
        let data = await Axios({
        method: 'post',
            url: ``,
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