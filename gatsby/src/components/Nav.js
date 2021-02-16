import React from 'react';
import styled from 'styled-components';
import { getCustomAnimatedLink } from '../utils/general';

const NavStyles = styled.nav`
  ul {
    height: 100%;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    :hover {
      color: var(--ovc-text-color);
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const navItems = [
  { to: '/', text: 'Home' },
  { to: '/about/', text: 'About' },
  { to: '/features/', text: 'Features and demos' },
  { to: '/what-is-new/', text: 'What is new' },
  { to: '/privacy-policy/', text: 'Privacy Policy' },
];
const Nav = () => (
  <NavStyles>
    <ul>
      {navItems.map(({ to, text }) => (
        <li>{getCustomAnimatedLink({ to, text })}</li>
      ))}
    </ul>
  </NavStyles>
);

export default Nav;
