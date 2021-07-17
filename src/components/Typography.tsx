import styled from 'styled-components';

export const H1 = styled.h1`
  color: #313f47;
  font-size: 2em;
  letter-spacing: 0.22em;
  line-height: 1.5;
  margin: 0 0 0.525em 0;
`;

export const TextAlignLeft = styled.span`
  text-align: left;
`;

export const P = styled.p`
  margin: 0 0 1.5em 0;
  line-height: 1.5em;

  & + & {
    margin-top: 1.5em;
  }
`;
