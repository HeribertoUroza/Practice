import React, { useContext, useState, useEffect } from 'react';

// ---- CONTEXT
import ThemeContext, { themes } from '../../context/ThemeContext';
import NavThemeContext, { navThemes } from '../../context/NavThemeContext';

// ---- API CALLS
import { RandomCocktail, NasaPic, getWeather, getGif } from '../../services/apiCalls';

// ---- LOCAL FUNCTIONS
import { getIngredientsAndMeasurements } from '../../services/functions';



const Landing = () => {
    const currentTheme = useContext(ThemeContext);
    const currentNavTheme = useContext(NavThemeContext);

    const [theme, setTheme] = useState(themes);
    const [navTheme, setNavTheme] = useState(navThemes); 
    const [rootRCObj, getRCRootObj] = useState({});
    const [rootNPObj, getNPRootObj] = useState({});
    const [rootWEObj, getWERootObj] = useState({});
    const [gifUrl, getGifUrl] = useState('');

    const toggleTheme = (e) => {

        setTheme(currentTheme[e.target.name])
        setNavTheme(currentNavTheme[e.target.name])
    }
    
    useEffect(() => {

        RandomCocktail()
            .then( ({ data }) => {
                getRCRootObj(data.drinks[0]);
            })
            .catch( error => {
                console.log(error)
            })

        NasaPic()
            .then( ({data}) => {
                getNPRootObj(data);
            })
            .catch(error => {
                console.log(error);
            })

        getWeather()
            .then( data => {
                getWERootObj(data.data.currently)

                getGif(data.data.currently.summary)
                    .then(data => {
                        getGifUrl(data)
                    })
                    .catch( error => {
                        console.log(error)
                    })
            })
            .catch( error => {
                console.log(error)
            })
    }, [] );


    return (
        <> 
            <div className='container'>
                <section style={theme}>

                    {/* Weather */}
                    <div className='card' style={theme}>
                        <div className='card-title'>{rootWEObj.summary}</div>
                        <div className='card-subTitle'>New York</div>
                        <img src={gifUrl} alt={rootWEObj.summary} className='card-image'></img>
                    </div>
                    
                    {/* Random Cocktail */}
                    <div className='card' style={theme}>
                        <div className='card-title'>{rootRCObj.strDrink}</div>
                        <div className='card-subTitle'>{rootRCObj.strAlcoholic}</div>
                        <img src={rootRCObj.strDrinkThumb} alt={rootRCObj.strDrinkThumb} className='card-image'></img>
                        <div className='card-subTitle'>{rootRCObj.strGlass}</div>
                        <ul className='list-container'>
                            {
                                getIngredientsAndMeasurements(rootRCObj)
                            }
                        </ul>
                    </div>

                    {/* NASA Pic of the Day */}
                    <div className='card' style={theme}>
                        <div className='card-title'>{rootNPObj.title}</div>
                        <div className='card-subTitle'>{rootNPObj.copyright}</div>
                        
                        {
                            `${rootNPObj.url}`.includes('youtube') ? <iframe src={rootNPObj.url} title={rootNPObj.title}></iframe> : <img src={rootNPObj.url} alt={rootNPObj.url} className='card-image'></img>
                        }
                        
                        <div className='card-body'>{rootNPObj.explanation}</div>
                    </div>
                    
                </section>

                <nav className='nav' style={navTheme}>
                    <button className='nav-btn' onClick={toggleTheme} href='none' name='neumorphism' style={navTheme} >Neumorphism</button>
                    <button className='nav-btn' onClick={toggleTheme} href='none' name='transparent' style={navTheme} >Transparent</button>
                    <button className='nav-btn' onClick={toggleTheme} href='none' name='twoTone' style={navTheme} >Two Tone</button>
                </nav>
            </div>
        </>
    )
}

export default Landing;