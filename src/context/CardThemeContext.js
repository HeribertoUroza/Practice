import React from 'react';

export const cardThemes = {
    neumorphism: {
        background: '#EEEEEE',
        border: 'none',
        boxShadow:
            `-12px -12px 12px 0 rgba(255,255,255, 1),
            12px 12px 12px 0 rgba(0,0,0, .05)`,

    },

    transparent: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        border: 'none',
        color: 'white',
        boxShadow:
            `12px 12px 12px 0 rgba(0,0,0, .5),
            -12px -12px 12px 0 rgba(0,0,0, .1)`,
    },

    twoTone: {
        background: '#FCFFFE',
        borderColor: '#FCFFFE',
        boxShadow:
            `-12px -12px 12px 0 rgba(246, 183, 67, .8),
            12px 12px 12px 0 rgba(246, 183, 67, .8)`,
    }
}

const CardThemeContext = React.createContext(cardThemes);

export default CardThemeContext;