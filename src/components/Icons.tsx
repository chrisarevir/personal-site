import React from 'react';
import styled from 'styled-components';

const Layout = styled.ul`
  cursor: default;
  list-style: none;
  margin-top: -0.675em;
  margin: 0 0 1.5em 0;
  padding-left: 0;
`;

const IconContainer = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 0.675em 0.5em;
  width: 100%;
`;

const Icon = styled.a`
  color: inherit;
  border-radius: 100%;
  border: solid 1px #c8cccf;
  display: block;
  height: 3.75em;
  line-height: 3.75em;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-indent: 3.75em;
  transition: color 0.2s ease, border-color 0.2s ease;
  white-space: nowrap;
  width: 3.75em;

  &:hover {
    border-color: #ff7496;

    &::before {
      text-shadow: 1.25px 0px 0px #ff7496, -1.25px 0px 0px #ff7496,
        0px 1.25px 0px #ff7496, 0px -1.25px 0px #ff7496;
    }
  }

  &::before {
    font-size: 1.85rem;
    height: inherit;
    left: 0;
    line-height: inherit;
    position: absolute;
    text-align: center;
    text-indent: 0;
    top: 0;
    transition: color 0.2s ease, border-color 0.2s ease;
    width: inherit;

    color: #ffffff;
    text-shadow: 1.25px 0px 0px #c8cccf, -1.25px 0px 0px #c8cccf,
      0px 1.25px 0px #c8cccf, 0px -1.25px 0px #c8cccf;
  }
`;

const Icons: React.FC = () => {
  return (
    <Layout>
      <IconContainer>
        <Icon
          className="fab fa-github"
          href="https://github.com/chrisarevir/"
        />
        <Icon
          className="fab fa-instagram"
          href="https://www.instagram.com/chrisarevir/"
        />
        <Icon
          className="fab fa-twitter"
          href="https://twitter.com/chrisarevir"
        />
        <Icon
          className="fab fa-linkedin"
          href="https://www.linkedin.com/in/chrisarevir/"
        />
      </IconContainer>
    </Layout>
  );
};

export default Icons;
