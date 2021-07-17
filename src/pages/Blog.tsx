import React from 'react';
import { Link, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AnimatedCard } from '../components/Card';
import { H1, P, TextAlignLeft } from '../components/Typography';

const Story = () => {
  return (
    <AnimatedCard>
      <H1>Thoughts on JSS</H1>
      <TextAlignLeft>
        <P>
          I don't agree with the hype that JSS is be-all/end-all pacacea for
          frontend. I love the concept, and it's certainly lead to way more
          innovation than was originally thought possible, but it comes with its
          caveats. At the time of writing this article, this website is built
          using styled-components, a very popular jss solution.
        </P>

        <P>
          It integrates very well if you start doing themes and the like, and it
          is fairly easy to make an IDE render the backtick-ed rules closer to
          css.
        </P>
      </TextAlignLeft>
    </AnimatedCard>
  );
};

const DefaultBlogPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <AnimatedCard>
      <H1>Blog</H1>
      <TextAlignLeft>
        <P>
          Hello, I would like to build a relationship with my readers, thank
          you.
        </P>

        <ul>
          <li>
            <Link to={`${match.url}/jss`}>JSS Thoughts</Link>
          </li>
        </ul>
      </TextAlignLeft>
    </AnimatedCard>
  );
};

export const Blog: React.FC = () => {
  return (
    <Switch>
      <Route path="/blog/jss" component={Story} />
      <Route path="/blog" component={DefaultBlogPage} />
    </Switch>
  );
};
