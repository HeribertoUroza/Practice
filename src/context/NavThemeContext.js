import React from 'react';

export const navThemes = {
    neumorphism: {
        background: '#EEEEEE',
        border: 'none',
        boxShadow:
        `12px 12px 16px 0 rgba(255, 255, 255, 1) inset,
        - 8px -8px 12px 0 rgba(0, 0, 0, .25) inset`,
    },

    transparent: {
        background: 'brown'
    },

    twoTone: {
        background: 'grey'
    }
}

const NavThemeContext = React.createContext(navThemes);

export default NavThemeContext;