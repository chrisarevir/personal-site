import styled from 'styled-components';

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
