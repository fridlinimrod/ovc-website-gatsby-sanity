import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Control from '../components/Control';
import One from '../components/One';
import Video from '../components/Video';

const AboutStyles = styled.div`
  .animated-words {
    display: flex;
    justify-content: center;
    height: 300px;
    overflow-y: hidden;
  }
`;
export default (props) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);
  return (
    <AboutStyles style={{ width: '100%' }}>
      <div className="animated-words">
        <One word="one" animate={animate} />
        <Video word="video" animate={animate} />
        <Control word="control" animate={animate} />
      </div>
      <p>
        OVC - One Video Control is a Chrome extension that provides a 'video
        controller' for every video you are watching using chrome browser on
        your computer,
      </p>
      <p>
        You can customize the controller, both its functionality and its look
        and feel. <br />
        to see the list of features OVC provides, head up to the &nbsp;
        <Link to="/features">Features page</Link>
      </p>
      <p>
        To Install OVC go to the&nbsp;
        <Link to="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb">
          chrome web store and install it
        </Link>
      </p>
    </AboutStyles>
  );
};
