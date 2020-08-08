import React from 'react';
import ReactDOM from 'react-dom';

import './styles/reset.css';
import * as serviceWorker from './utils/serviceWorker';

import Header from './components/Header';
import Forest from './components/Forest';
import Gradient from './components/Gradient';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Site = () => {
  return (
    <Router>
      <Header>
        <Link to="/personal-site">Home</Link>
        <Link to="/about">About</Link>
      </Header>

      <Forest />
      <Gradient />

      <Switch>
        <Route exact path="/personal-site">
          <ProfileCard />
        </Route>

        <Route exact path="/about">
          <AboutCard />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Site />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
