import React from 'react';

import Avatar from '../components/Avatar';
import Icons from '../components/Icons';
import Card from '../components/Card';
import H1 from '../components/H1';
import { P } from '../components/Typography';

const ProfileCard: React.FC = () => {
  return (
    <Card>
      <header>
        <Avatar />
        <H1>Christian Rivera</H1>
        <P>Senior Web Developer</P>
      </header>
      <footer>
        <Icons />
      </footer>
    </Card>
  );
};

export default ProfileCard;
