import React from 'react';

// ---- PAGES
import Landing from './containers/LandingPage/LandingPage';

// ---- CONTEXT
import ThemeContext, { themes } from './context/ThemeContext';

// ---- CSS
import './styles/app.css';

function App() {
  return (
    <>
    <ThemeContext.Provider value={themes}>
      <Landing />
    </ThemeContext.Provider>  
    </>
  );
};

export default App;
