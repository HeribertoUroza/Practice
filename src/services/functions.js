
// ---- GET ALL INGREDIENTS AND MEASUREMENTS
const getIngredientsAndMeasurements = ( rootObj ) => {
    let list = `<ul className='list-container'>`

    for(let i = 1; i<15; i++){
        //console.log(rootObj[`strIngredient${i}`], rootObj[`strMeasure${i}`])
        
        list += `
        <li>${rootObj['strIngredient' + i]}</li><li>${rootObj['strMeasure' + i]}</li>
        `
        
    }
    console.log(list)
    return list + '</ul>'
};

export {
    getIngredientsAndMeasurements,
}