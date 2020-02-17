import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// ---- PAGES
import Landing from './containers/LandingPage/LandingPage';
import NeuPage from './containers/NeuPage/NeuPage';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={ Landing } />
          <Route path='/neumorphism' exact component={ NeuPage } />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
