import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';

const MobileNavStyles = styled.nav`
  @media (min-width: 800px) {
    display: none;
  }
  .menu {
    top: 7px;
    left: 7px;
  }
  ul {
    background-color: var(--ovc-secondary-color);
    list-style: none;
    width: 100%;
    position: absolute;
    top: 6px;
    z-index: 5;
    &.hidden {
      display: none;
    }
    li ~ li {
      border-top: 1px solid var(--ovc-purple);
    }
    a {
      text-decoration: none;
    }
  }
`;

const activeStyle = { color: 'var(--ovc-text-color)' };
const navItems = [
  { to: '/', text: 'Home' },
  { to: '/about/', text: 'About' },
  { to: '/features/', text: 'Features and demos' },
  { to: '/what-is-new/', text: 'What is new' },
  { to: '/privacy-policy/', text: 'Privacy Policy' },
];
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileNavStyles>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={() => setIsOpen((prev) => !prev)}
        width={18}
        height={15}
        strokeWidth={1}
        color="var(--ovc-purple)"
        rotate={0}
        borderRadius={0}
        animationDuration={0.5}
        className="menu"
      />
      <ul className={`${isOpen ? 'visible' : 'hidden'}`}>
        {navItems.map(({ to, text }) => (
          <li>
            <Link
              to={to}
              onClick={() => setIsOpen(false)}
              activeStyle={activeStyle}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </MobileNavStyles>
  );
};

export default MobileNav;
