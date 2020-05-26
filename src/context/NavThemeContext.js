import React from 'react';

export const navThemes = {
    neumorphism: {
        background: '#EEEEEE',
        border: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
        boxShadow:
        `12px 12px 16px 0 rgba(255, 255, 255, 1) inset,
        -12px -12px 16px 0 rgba(255, 255, 255, 1) inset`,
        
    },

    transparent: {
        backgroundColor: 'orange',
        border: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
    },

    twoTone: {
        background: 'grey',
        border: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
    }
}

const NavThemeContext = React.createContext(navThemes);

export default NavThemeContext;