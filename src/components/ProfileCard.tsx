import React from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import Avatar from '../components/Avatar';
import Icons from '../components/Icons';
import { TransitionStatus } from 'react-transition-group/Transition';

const Container = styled.section<{ state?: TransitionStatus }>`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  cursor: default;
  left: 50%;
  max-width: 100%;
  padding: 4.5em 3em 3em 3em;
  position: absolute;
  text-align: center;
  top: 50%;
  transform-origin: 50% 50%;
  transition: opacity 1s ease, transform 1s ease;
  width: 27em;
  z-index: 2;

  opacity: ${({ state }) =>
    state === 'entering' || state === 'entered' ? 0 : 1};
  transform: translateX(-50%) translateY(-50%)
    rotateX(
      ${({ state }) =>
        state === 'entering' || state === 'entered' ? 15 : 0}deg
    );
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

interface ProfileCardProps {
  state?: TransitionStatus;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ ...props }) => {
  return (
    <Container {...props}>
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

const AnimatedProfileCard: React.FC = () => {
  const [animate, setAnimate] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 100);
  }, []);

  return (
    <Transition in={animate} timeout={0}>
      {state => {
        return <ProfileCard state={state} />;
      }}
    </Transition>
  );
};

export default AnimatedProfileCard;
