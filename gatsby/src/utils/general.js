import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import bg from '../assets/images/logo.png';

const activeStyle = { color: 'var(--ovc-text-color)' };
const colors = [
  '#52057b',
  '#162447',
  '#252525',
  '#801336',
  '#ff0000',
  '#200f21',
  '#000000',
  '#ed6363',
];
const directions = ['up', 'down', 'left', 'right'];

export const getRandomColor = () =>
  colors[Math.floor(Math.random() * colors.length)];

export const getRandomDirection = () =>
  directions[Math.floor(Math.random() * directions.length)];

export const getCustomAnimatedLink = ({ to, text }) => {
  const bgColor = getRandomColor();
  const direction = getRandomDirection();
  return (
    <AniLink
      direction={direction}
      cover
      bg={`url(${bg}) center no-repeat fixed ${bgColor}`}
      to={to}
      activeStyle={activeStyle}
    >
      {text}
    </AniLink>
  );
};
