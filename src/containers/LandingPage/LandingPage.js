import React, { useContext, useState } from 'react';

// ---- CONTEXT
import ThemeContext, { themes } from '../../context/ThemeContext';
import NavThemeContext, { navThemes } from '../../context/NavThemeContext';

const Landing = () => {
    const currentTheme = useContext(ThemeContext);
    const currentNavTheme = useContext(NavThemeContext);

    const [theme, setTheme] = useState(themes);
    const [navTheme, setNavTheme] = useState(navThemes); 

    const toggleTheme = (e) => {

        setTheme(currentTheme[e.target.name])
        setNavTheme(currentNavTheme[e.target.name])
    }

    return (
        <> 
            <div className='container'>
                <section style={theme}>
                    <div className='card' style={theme}>
                        <div className='card-title'>Title</div>
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