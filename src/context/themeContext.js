import React from 'react';

export const themes = {

    neumorphism: {
        background: 'blue',
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