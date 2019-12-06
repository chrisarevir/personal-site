import React from 'react';
import styled from 'styled-components';

import Avatar from '../components/Avatar';
import Icons from '../components/Icons';

const Container = styled.section`
  background: #ffffff;
  border-radius: 4px;
  cursor: default;
  max-width: 100%;
  opacity: 0.95;
  padding: 4.5em 3em 3em 3em;
  position: relative;
  text-align: center;
  transform-origin: 50% 50%;
  transform: rotateX(0deg);
  transition: opacity 1s ease, transform 1s ease;
  width: 27em;
`;

const Name = styled.h1`
  color: #313f47;
  font-size: 1.85em;
  letter-spacing: 0.22em;
  line-height: 1.5;
  margin: 0 0 0.525em 0;
`;

const Title = styled.p`
  margin: 0 0 1.5em 0;
`;

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Avatar />
        <Name>Christian Rivera</Name>
        <Title>Senior Web Developer</Title>
      </header>
      <footer>
        <Icons />
      </footer>
    </Container>
  );
};

export default ProfileCard;
