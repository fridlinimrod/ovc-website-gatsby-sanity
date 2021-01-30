import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Control from '../components/Control';
import One from '../components/One';
import Video from '../components/Video';

const HomeStyles = styled.div`
  .animated-words {
    display: flex;
    height: 200px;
    overflow-y: hidden;
    line-height: 1;
  }
  .mobile-only {
    display: none;
  }
  h2 {
    color: var(--ovc-purple);
  }
  @media (max-width: 1200px) {
    .animated-words {
      display: none;
    }
    .mobile-only {
      display: block;
      font-size: 10rem;
    }
  }
  .bold {
    font-weight: bold;
    color: var(--ovc-purple);
  }
`;

const Home = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, [setAnimate]);
  return (
    <HomeStyles>
      <div className="mobile-only">OVC</div>
      <div className="animated-words">
        <One word="one" animate={animate} />
        <Video word="video" animate={animate} />
        <Control word="control" animate={animate} />
      </div>
      <h1>Hi, Welcome to OVC - One Video Control's website</h1>
      <p>
        OVC - One Video Control lets you control all the videos you see while
        browsing - with your own control and your own configuration. <br />
      </p>
      <h2>Why do I need it?!</h2>
      <p>
        It exposes &nbsp;
        <span className="bold">new ways to interact with videos</span>:<br />
        <ul>
          <li>
            <span className="bold">A "popout" button</span> to extract the video
            from the browser and play it as a "stand alone", also known as
            'picture in picture'
          </li>
          <li>
            <span className="bold">
              Scrolling up and down to increase / decrease speed or volume
            </span>
            of the video (no more guessing if you want 1.25 or 1.75, just scroll
            up and down for faster and slower - with no limitation)
          </li>
          <li>
            A button to
            <span className="bold">Toggle max speed on and off</span> (very
            useful for fast forwarding advertisements when possible, or just to
            find that part in the video you are looking for)
          </li>
          <li>
            <span className="bold">Easy ways to go forward and backward</span>,
            exposes a short skip and a long skip buttons (defaults to 5 and 30
            seconds)
          </li>
          <li>mute , repeat, and more to come!</li>
        </ul>
      </p>
      <p>
        <h2>The fun parts:</h2>
        You can customize almost everything in your OVC control
        <ul>
          <li>
            The amount to change the speed, the number of seconds to jump
            forward or backward for short and long skips
          </li>
          <li>
            The look and feel of the control (from a set of existing themes or
            create your own custom theme).
          </li>
          <li>
            Wether to even show the control or hide it and control everything
            with you custom keyboard shortcuts, and many more!!
          </li>
        </ul>
        After &nbsp;
        <a
          target="blank"
          href="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb"
        >
          installing the extension,&nbsp;
        </a>
        head to the settings page, and the keyboard shortcuts page and see for
        yourself :)
      </p>
    </HomeStyles>
  );
};

export default Home;
