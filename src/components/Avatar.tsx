import React from 'react';
import styled from 'styled-components';

import avatar from '../assets/avatar_image.jpg';

const Container = styled.span`
  display: block;
  margin-bottom: 1.5em;
  position: relative;

  &::before {
    background: #c8cccf;
    content: '';
    display: block;
    height: 1px;
    left: -3em;
    position: absolute;
    top: 50%;
    width: calc(100% + 6em);
    z-index: -1;
  }
`;

const Image = styled.img`
  border-radius: 100%;
  box-shadow: 0 0 0 1.5em #ffffff;
  display: block;
  height: 122px;
  margin: 0 auto;
  width: 122px;
`;

const Avatar: React.FC = () => {
  return (
    <Container>
      <Image src={avatar} alt="profile photo for Christian Rivera" />
    </Container>
  );
};

export default Avatar;
