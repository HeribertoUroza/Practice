
// ---- GET ALL INGREDIENTS AND MEASUREMENTS
const getIngredientsAndMeasurements = ( rootObj ) => {

    let arr = []

    for (let i = 1; i < 15; i++) {
        if (rootObj[`strIngredient${i}`]) {
            arr.push(rootObj[`strIngredient${i}`], rootObj[`strMeasure${i}`])
        }
    }
    
    return arr.map((e, i) => {
        if (i % 2 === 1) {
            return `<li>${e}</li>`
        } else {
            return `<li>${e}</li>`
        }

    })
};

export {
    getIngredientsAndMeasurements,
}