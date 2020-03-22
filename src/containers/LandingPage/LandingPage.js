import React, { useContext, useState, useEffect } from 'react';

// ---- CONTEXT
import ThemeContext, { themes } from '../../context/ThemeContext';
import NavThemeContext, { navThemes } from '../../context/NavThemeContext';

// ---- API CALLS
import { RandomCocktail } from '../../services/apiCalls';

// ---- LOCAL FUNCTIONS
import { getIngredientsAndMeasurements } from '../../services/functions';


const Landing = (props) => {
    const currentTheme = useContext(ThemeContext);
    const currentNavTheme = useContext(NavThemeContext);

    const [theme, setTheme] = useState(themes);
    const [navTheme, setNavTheme] = useState(navThemes); 
    const [rootObj, getRootObj] = useState({});

    const toggleTheme = (e) => {

        setTheme(currentTheme[e.target.name])
        setNavTheme(currentNavTheme[e.target.name])
    }
    
    useEffect(() => {
        RandomCocktail()
            .then( ({ data }) => {
                getRootObj(data.drinks[0]);
                // const rootObj = data.drinks[0];
                
                // setDrinkName(rootObj.strDrink);
                // const isAlcoholic = rootObj.strAlcoholic;
                // const drinkImg = rootObj.strDrinkThumb;
                // const instructions = rootObj.strInstructions;
                
                // const list = getIngredientsAndMeasurements(rootObj)
                // setIngAndMea(list)

            })
            .catch( error => {
                console.log(error)
            })
    }, [] );
    
    return (
        <> 
            <div className='container'>
                <section style={theme}>
                    <div className='card' style={theme}>
                        <div className='card-title'>{rootObj.strDrink}</div>
                        <div className='card-subTitle'>{rootObj.strAlcoholic}</div>
                        <img src={rootObj.strDrinkThumb} alt={rootObj.strDrinkThumb} className='card-image'></img>
                        <ul className='list-container'>
                        {
                            getIngredientsAndMeasurements(rootObj)
                        }
                        </ul>
                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                    <div className='card'>

                    </div>
                </section>
                <nav style={navTheme}>
                    <button onClick={toggleTheme} name='neumorphism' >Neumorphism</button>
                    <button onClick={toggleTheme} name='transparent' >Transparent</button>
                    <button onClick={toggleTheme} name='twoTone' >Two Tone</button>
                </nav>
            </div>
        </>
    )
}

export default Landing;