import React from 'react';

export const themes = {

    neumorphism: {
        background: '#EEEEEE',
        border: 'none',
        boxShadow: 
            `-12px -12px 12px 0 rgba(255,255,255, 1),
            12px 12px 12px 0 rgba(0,0,0, .05)`,
            
    },

    transparent: {
        background: 'green'
    },

    twoTone: {
        background: 'red'
    }
}

const ThemeContext = React.createContext(themes);

export default ThemeContext;
