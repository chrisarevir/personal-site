import React from 'react';

import Forest from '../components/Forest';
import Gradient from '../components/Gradient';
import ProfileCard from '../components/ProfileCard';

// TODO: use react-transition-group to animate the 15 degree rotation for the card
// NOTE: https://dev.to/terrierscript/styled-component--react-transition-group--very-simple-transition-jja

const Landing: React.FC = () => {
  return (
    <>
      <Forest />
      <Gradient />
      <ProfileCard />
    </>
  );
};

export default Landing;
