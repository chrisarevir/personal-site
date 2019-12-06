import React from 'react';
import styled from 'styled-components';
import forest from '../assets/forest-background.jpg';

const BackgroundImage = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  position: absolute;
  z-index: 0;
`;

const Forest: React.FC = () => {
  return <BackgroundImage src={forest} />;
};

export default Forest;
