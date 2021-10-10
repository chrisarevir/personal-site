import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Forest } from './components/Forest';
import { Gradient } from './components/Gradient';
import { Navigation } from './components/Navigation';
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

const ProfileCard = React.lazy(() =>
  import('./components/ProfileCard').then((module) => ({
    default: module.ProfileCard,
  }))
);

const AboutCard = React.lazy(() =>
  import('./components/AboutCard').then((module) => ({
    default: module.AboutCard,
  }))
);

const Projects = React.lazy(() =>
  import('./pages/Projects').then((module) => ({
    default: module.Projects,
  }))
);

const Blog = React.lazy(() =>
  import('./pages/Blog').then((module) => ({
    default: module.Blog,
  }))
);

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
        <Link to="/projects">Projects</Link>
        {/* TODO: Actually write an article here and unhide this */}
        {/* <Link to="/blog">Blahg</Link> */}
      </Navigation>

      <Forest />
      <Gradient />

      <React.Suspense fallback={''}>
        <Switch>
          <Route exact path="/" component={ProfileCard} />
          <Route exact path="/about" component={AboutCard} />=
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

ReactDOM.render(<Site />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
