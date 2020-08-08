import React from 'react';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';

const Card = styled.section<{ state?: TransitionStatus }>`
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
      ${({ state }) => {
        if (state === 'entering' || state === 'entered') {
          return 15;
        }

        return 0;
      }}deg
    )
    rotateY(
      ${({ state }) => {
        if (state === 'exiting' || state === 'exited') {
          return 0;
        }
        return 90;
      }}deg
    );

  ${({ state }) => {
    if (state === 'exiting') {
      return css`
        transform: rotateY(180deg);
      `;
    }
  }}
`;

const AnimatedCard: React.FC = ({ children }) => {
  const [animate, setAnimate] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 100);
  }, []);

  return (
    <Transition in={animate} timeout={0}>
      {(state) => {
        return <Card state={state}>{children}</Card>;
      }}
    </Transition>
  );
};

export default AnimatedCard;
