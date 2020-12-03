import React from 'react';
import { Link, Route, RouteComponentProps, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';
import H1 from '../components/H1';
import { P, TextAlignLeft } from '../components/Typography';
import MatrixEffect from '../projects/matrixEffect.js';

const MatrixEffectContainer = styled.div`
  align-items: center;
  background: #212121;
  border-radius: 10px;
  border: 1px solid pink;
  color: #fafafa;
  display: flex;
  height: 4em;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const ScrollableContainer = styled.div`
  max-height: 20rem;
  overflow: auto;
`;

const lines = [
  'Neo,',
  'sooner or later',
  "you're going to realize",
  'just as I did',
  "that there's a difference",
  'between knowing the path',
  'and walking the path',
  '                       ',
  "I know you're out there",
  'I can feel you now',
  "I know that you're afraid... ",
  "you're afraid of us",
  "You're afraid of change",
  "I don't know the future",
  "I didn't come here to tell you ",
  'how this is going to end',
  'I came here to tell you',
  "how it's going to begin",
  "I'm going to hang up this phone,",
  "and then I'm going to show these people",
  "what you don't want them to see",
  "I'm going to show them ",
  'a world without you',
  'A world without rules and controls,',
  'without borders or boundaries',
  'A world where anything is possible',
  'Where we go from there',
  'is a choice I leave to you...',
  '                       ',
];

const MatrixTextProject = () => {
  React.useEffect(() => {
    const node = document.querySelector('.text');
    const runner = new MatrixEffect(node);

    runner.run(lines);
  }, []);

  return (
    <React.Fragment>
      <H1>Matrixy Effect</H1>
      <MatrixEffectContainer className="text" />
      <TextAlignLeft>
        <ScrollableContainer>
          <P>
            What started out as a sort of self imposed, recreation, of an effect
            I saw in the movies, turned into a nice looking text transition
            between sentences. For those unfamiliar with the movie, this is the
            starting lines of the first Matrix movie.
          </P>

          <P>How it's done</P>
          <P>
            Comparison of the current state of the sentence and the desired one
            lets me know if I need to add or subtract a character. If the letter
            is in the correct position already, go to the next character. Then,
            I roll to see if they will swap to a "wrong" character or change to
            / stay at a correct character. Repeat until at the desired string,
            and then repeat the effects for the next batch!
          </P>
        </ScrollableContainer>
      </TextAlignLeft>
    </React.Fragment>
  );
};

const DefaultProjectPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <React.Fragment>
      <H1>Projects</H1>
      <TextAlignLeft>
        <P>Some projects I'm kind of proud of or something</P>

        <ul>
          <li>
            <Link to={`${match.url}/matrixy-text-effect`}>
              Matrixy Text Effect
            </Link>
          </li>
        </ul>
      </TextAlignLeft>
    </React.Fragment>
  );
};

const Project: React.FC = () => {
  return (
    <Card>
      <Switch>
        <Route
          path="/projects/matrixy-text-effect"
          component={MatrixTextProject}
        />
        <Route path="/projects" component={DefaultProjectPage} />
      </Switch>
    </Card>
  );
};

export default Project;
