import React from 'react';

export const navThemes = {
    neumorphism: {
        background: 'orange',
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