import React, { useState } from 'react';
import styled from 'styled-components';
import { getCustomAnimatedLink } from '../utils/general';

const MobileNavStyles = styled.nav`
  @media (min-width: 800px) {
    display: none;
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 33px;
    height: 32px;
    z-index: 6;
    span {
      width: 100%;
      height: 2px;
      background-color: var(--ovc-white);
      transition: all 0.8s;
      transform-origin: top left;
      position: absolute;
      &.top {
        top: 10%;
      }
      &.middle {
        top: 50%;
      }
      &.bottom {
        bottom: 10%;
      }
    }
    &.open {
      .middle {
        opacity: 0;
      }
      .top {
        transform: rotate(45deg);
      }
      .bottom {
        transform: rotate(-45deg);
      }
    }
  }

  ul {
    background-color: var(--ovc-secondary-color);
    list-style: none;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 3;
    align-items: center;
    opacity: 1;
    transition: all 0.7s;
    top: 0;
    &.hidden {
      top: -100%;
      opacity: 0;
    }
    li {
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      text-transform: uppercase;
      font-size: 3rem;
      align-items: center;
      & ~ li {
        border-top: 1px solid var(--ovc-white);
      }
    }
    a {
      text-decoration: none;
      text-align: center;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

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
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`menu ${isOpen ? 'open' : 'close'}`}
      >
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </div>
      <ul className={`${isOpen ? 'visible' : 'hidden'}`}>
        {navItems.map(({ to, text }) => (
          <li onClick={() => setIsOpen(false)}>
            {getCustomAnimatedLink({ to, text })}
          </li>
        ))}
      </ul>
    </MobileNavStyles>
  );
};

export default MobileNav;
