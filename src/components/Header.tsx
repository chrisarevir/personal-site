import styled from 'styled-components';

const Header = styled.header`
  align-items: center;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  height: 3em;
  position: absolute;
  width: 100vw;
  z-index: 3;
  padding: 0 2em;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  a + a {
    margin-left: 20px;
  }

  @media (max-width: 450px) {
    bottom: 0;
  }
`;

export default Header;
