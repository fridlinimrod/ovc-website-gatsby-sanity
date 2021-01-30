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
`;

const Home = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, [setAnimate]);
  return (
    <HomeStyles>
      <div className="animated-words">
        <One word="one" animate={animate} />
        <Video word="video" animate={animate} />
        <Control word="control" animate={animate} />
      </div>
      <h1>Hi, Welcome to OVC - One Video Control's website</h1>
    </HomeStyles>
  );
};

export default Home;
