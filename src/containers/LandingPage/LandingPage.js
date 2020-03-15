import React, { useContext, useState } from 'react';

// ---- CONTEXT
import ThemeContext, { themes } from '../../context/ThemeContext';

const Landing = () => {
    const currentTheme = useContext(ThemeContext)
    const [theme, setTheme] = useState(themes);
    

    const toggleTheme = (e) => {

        setTheme(currentTheme[e.target.name])

    }

    return (
        <> 
            <nav style={theme}>
                <button onClick={toggleTheme} name='neumorphism' >Neumorphism</button>
                <button onClick={toggleTheme} name='transparent' >Transparent</button>
                <button onClick={toggleTheme} name='twoTone' >Two Tone</button>
            </nav>
        </>
    )
}

export default Landing;