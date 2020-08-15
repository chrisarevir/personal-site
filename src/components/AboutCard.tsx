import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import H1 from './H1';

const P = styled.p`
  text-transform: initial;
  margin: 0 0 1.5em 0;
  line-height: 1.5em;
  text-align: left;

  & + & {
    margin-top: 1.5em;
  }
`;

const About: React.FC = () => {
  // TODO: make animation for hey hi hello to slide, spin, and slam in
  return (
    <Card>
      <H1>About Me</H1>

      <P>Heyhihello!</P>
      <P>
        I've always been one to tinker with everything, and the web is my
        current playground of choice. My career has brought me from mobile work,
        through backend, and am currently focused on frontend web work. Tending
        to not wait for permission or tipping points to fix things, and
        paraphrasing Kent Metz, I make the hard changes easy, then make easy
        changes.
      </P>
      <P>
        Presently, my full time job focuses on creating and maintaining a
        reusable library of components / utilities, as well as acting as a
        Jack-of-All-Trades resource on various frontend arcanas, and tend to
        pick out the right tool for the job rather than the one that has the
        most hype. I act as technical support, provide guidance and mentorship
        for new hires and interns, and code like Hamilton writes (non-stop).
      </P>

      <P>
        This is balanced by my love of dancing, and while the current pandemic
        limits it, I run/fly at the opportunity to go social dancing (Lindy Hop,
        Balboa, East Coast Swing, Line Dancing), and have performed in various
        hip hop/swing dancing shows in / around the LA area!
      </P>
    </Card>
  );
};

export default About;
