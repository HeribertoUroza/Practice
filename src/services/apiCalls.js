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

// const getGif = (query) => {
//     let gifUrl = '';
    
//     let data = Axios({
//         method: 'post',
//         url: ``,
//         data: { query }
//     })

//     data
//     .then(data => {
//         gifUrl = data.data.data[0].images.original.url
//         console.log('gif url', gifUrl)
//     })
//     .catch( err => {
//         console.log(err)
//     })
//     console.log('gif url', gifUrl)
//     return ''
// }
  
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