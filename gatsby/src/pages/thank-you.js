import React from 'react';
import styled from 'styled-components';
import { getCustomAnimatedLink } from '../utils/general';

const ThankYouStyles = styled.div`
  .animated-words {
    display: flex;
    height: 200px;
    overflow-y: hidden;
    line-height: 1;
  }
  h2 {
    color: var(--ovc-purple);
  }
`;

const ThankYou = () => (
  <ThankYouStyles>
    <h1 className="title">Thank You!</h1>
    <h2>for choosing to try out OVC - One Video Control</h2>
    <h3>I am sure you will like it :)</h3>
    <p>
      OVC - One Video Control lets you control all the videos you see while
      browsing
      <br /> with your own control and your own configuration. <br />
    </p>
    <p>
      To get to know the existing features and how to use it, head up to the
      &nbsp;
      {getCustomAnimatedLink({ to: '/features/', text: 'Features page' })} and
      to the &nbsp;
      {getCustomAnimatedLink({ to: '/about/', text: 'About page' })}
    </p>
    <p>but for now, here is an introduction video:</p>
    <iframe
      width="640"
      height="360"
      src="https://www.youtube.com/embed/d0lRy2ZXvB0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  </ThankYouStyles>
);

export default ThankYou;
