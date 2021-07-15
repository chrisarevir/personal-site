import React from 'react';

import { AnimatedCard } from './Card';
import { H1 } from './H1';
import { P, TextAlignLeft } from './Typography';

export const AboutCard: React.FC = () => {
  // TODO: make animation for hey hi hello to slide, spin, and slam in
  return (
    <AnimatedCard>
      <H1>About Me</H1>

      <TextAlignLeft>
        <P>Heyhihello!</P>
        <P>
          I've always been one to tinker with everything, and the web is my
          current playground of choice. My career has brought me from mobile
          work, through backend, and is currently focused on frontend web work.
          Tending to not wait for permission or tipping points to fix things,
          and paraphrasing Kent Beck, I make the hard changes easy, then make
          easy changes.
        </P>

        <P>
          Presently, my full time job focuses on creating and maintaining a
          reusable library of components / utilities, as well as acting as a
          Jack-of-All-Trades resource on various frontend arcanas. I tend to
          pick out the right tool for the job after some research rather than
          the one that has the most hype. I act as technical support, provide
          guidance and mentorship for new hires and interns, and code like
          Hamilton writes (
          <a
            href="https://www.youtube.com/watch?v=q9iLfPP4Ps8"
            rel="noopener noreferrer"
            target="_blank"
          >
            non-stop
          </a>
          ).
        </P>

        <P>
          While limited by the current pandemic, I usually balance this out by
          going / flying to various social dancing events (Lindy Hop, Balboa,
          East Coast Swing, Line Dancing), and I have performed in various hip
          hop and swing dancing shows in and around the LA area!
        </P>
      </TextAlignLeft>
    </AnimatedCard>
  );
};
