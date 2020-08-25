import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/about-page/about-page.component';
import NewsPage from './pages/news-page/news-page.component';
import HomePage from './pages/home-page/home-page.component';
import PartnerPage from './pages/partner-page/partner-page.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/partner" component={PartnerPage} />
      </Switch>
    </div>
  );
}

export default App;
