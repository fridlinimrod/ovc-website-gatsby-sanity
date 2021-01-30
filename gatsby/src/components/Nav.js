import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  background: var(--ovc-secondary-color);
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
`;

const activeStyle = { color: 'var(--ovc-text-color)' };
const navItems = [
  { to: '/', text: 'Home' },
  { to: '/about/', text: 'About' },
  { to: '/features/', text: 'How To Use' },
  { to: '/what-is-new/', text: 'What is new' },
  { to: '/privacy-policy/', text: 'Privacy Policy' },
];
const Nav = () => (
  <NavStyles>
    <ul>
      {navItems.map(({ to, text }) => (
        <li>
          <Link to={to} activeStyle={activeStyle}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </NavStyles>
);

export default Nav;
