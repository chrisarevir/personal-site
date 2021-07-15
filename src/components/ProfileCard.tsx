import React from 'react';

import { Avatar } from '../components/Avatar';
import { Icons } from '../components/Icons';
import { AnimatedCard } from '../components/Card';
import { H1 } from '../components/H1';
import { P } from '../components/Typography';

export const ProfileCard: React.FC = () => {
  return (
    <AnimatedCard>
      <header>
        <Avatar />
        <H1>Christian Rivera</H1>
        <P>Senior Web Developer</P>
      </header>
      <footer>
        <Icons />
      </footer>
    </AnimatedCard>
  );
};
