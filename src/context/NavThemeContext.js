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
        backgroundColor: 'rgba(0,0,0,0.6)',
        border: 'none',
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'white',
    },

    twoTone: {
        background: '#FBD349',
        border: '#F6B743 1px solid',
        textDecoration: 'none',
        cursor: 'pointer',
    },

    gradient: {
        background: 'linear-gradient(144deg, rgba(22,136,242,1) 20%, rgba(98,18,212,1) 63%, rgba(228,7,232,1) 100%)',
        color: 'white',
    }
}

const NavThemeContext = React.createContext(navThemes);

export default NavThemeContext;