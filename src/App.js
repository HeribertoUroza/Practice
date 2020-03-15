import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// ---- PAGES
import Landing from './containers/LandingPage/LandingPage';

// ---- CSS
import './styles/app.css';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={ Landing } />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
