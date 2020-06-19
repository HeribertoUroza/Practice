import React from 'react';

export const themes = {

    neumorphism: {
        background: '#EEEEEE',  
    },

    transparent: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    twoTone: {
        background: '#FBD349',
    }
}

const ThemeContext = React.createContext(themes);

export default ThemeContext;
