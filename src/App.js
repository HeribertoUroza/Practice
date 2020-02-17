import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// ---- PAGES
import Landing from './containers/LandingPage/LandingPage';
import NeuPage from './containers/NeuPage/NeuPage';
import TranPage from './containers/TranPage/TranPage';
import TwoTonePage from './containers/TwoTonePage/TwoTonePage';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={ Landing } />
          <Route path='/neumorphism' exact component={ NeuPage } />
          <Route path='/transparency' exact component={ TranPage } />
          <Route path='/twotone' exact component={ TwoTonePage } />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
