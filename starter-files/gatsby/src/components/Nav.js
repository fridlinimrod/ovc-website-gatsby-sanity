import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link to="/home"> Home</Link>
      </li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <Link to="/features"> How to use</Link>
      </li>
      <li>
        <Link to="/what-is-new"> What is new</Link>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
