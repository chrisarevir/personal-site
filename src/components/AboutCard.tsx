import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import H1 from './H1';

const P = styled.p`
  margin: 0 0 1.5em 0;
`;

const About: React.FC = () => {
  return (
    <Card>
      <H1>About Me</H1>

      <P>
        Take my hand heaven banana quinoa muffin we both. Went mad for me I
        think red. Lipstick the road I am finally clean monsters burn.
      </P>
    </Card>
  );
};

export default About;
