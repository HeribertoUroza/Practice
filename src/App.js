import React from 'react';

// ---- PAGES
import Landing from './containers/LandingPage/LandingPage';

// ---- CONTEXT
import ThemeContext, { themes } from './context/ThemeContext';
import NavThemeContext, { navThemes } from './context/NavThemeContext';

// ---- CSS
import './styles/app.css';

function App() {
  return (
    <>
      <NavThemeContext.Provider value={navThemes}>
        <ThemeContext.Provider value={themes}>
          <Landing />
        </ThemeContext.Provider>  
      </NavThemeContext.Provider>
    </>
  );
};

export default App;
