
// ---- GET ALL INGREDIENTS AND MEASUREMENTS
const getIngredientsAndMeasurements = ( rootOBj ) => {

    for(let i = 1; i<15; i++){
        console.log([rootOBj[`strIngredient${i}`], rootOBj[`strMeasure${i}`]])
    }
};

export {
    getIngredientsAndMeasurements,
}