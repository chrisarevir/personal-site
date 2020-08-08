import React from 'react';
import styled from 'styled-components';

import Avatar from '../components/Avatar';
import Icons from '../components/Icons';
import Card from '../components/Card';
import H1 from '../components/H1';

const Title = styled.p`
  margin: 0 0 1.5em 0;
`;

const ProfileCard: React.FC = () => {
  return (
    <Card>
      <header>
        <Avatar />
        <H1>Christian Rivera</H1>
        <Title>Senior Web Developer</Title>
      </header>
      <footer>
        <Icons />
      </footer>
    </Card>
  );
};

export default ProfileCard;
