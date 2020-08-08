import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import H1 from './H1';

const P = styled.p`
  margin: 0 0 1.5em 0;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 1.5em 0;
`;

const About: React.FC = () => {
  // TODO: make animation for hey hi hello to slide, spin, and slam in
  return (
    <Card>
      <H1>About Me</H1>

      <P>
        Heyhihello!
        <Ul>
          <li>Photographer</li>
          <li title="I designed this site myself!">Dabbles in Design</li>
          <li>Loves building components</li>
        </Ul>
      </P>
    </Card>
  );
};

export default About;
