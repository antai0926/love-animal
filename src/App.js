import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/about-page/about-page.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
