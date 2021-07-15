import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { AboutCard } from './components/AboutCard';
import { Forest } from './components/Forest';
import { Gradient } from './components/Gradient';
import { Navigation } from './components/Navigation';
import { ProfileCard } from './components/ProfileCard';
import { Blog } from './pages/Blog';
import { Projects } from './pages/Projects';
import './styles/reset.css';
import * as serviceWorker from './utils/serviceWorker';

const Link = styled(NavLink)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &.active {
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Site = () => {
  return (
    <Router>
      <Navigation>
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/about">
          About
        </Link>
        <Link exact to="/projects">
          Projects
        </Link>
        {/* TODO: Actually write an article here and unhide this */}
        {/* <Link to="/blog">Blahg</Link> */}
      </Navigation>

      <Forest />
      <Gradient />

      <Switch>
        <Route exact path="/" component={ProfileCard} />
        <Route exact path="/about" component={AboutCard} />=
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Site />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
