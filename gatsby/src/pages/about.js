import { Link } from 'gatsby';
import React from 'react';

export const About = () => (
  <div>
    <p>
      OVC - One Video Control is a Chrome extension that provides a 'video
      controller' for every video you are watching using chrome browser on your
      computer,
    </p>
    <p>
      You can customize the controller, both its functionality and its look and
      feel. <br />
      to see the list of features OVC provides, head up to the &nbsp;
      <Link to="/features/">Features page</Link>
    </p>
    <p>
      To Install OVC go to the&nbsp;
      <Link to="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb">
        chrome web store and install it
      </Link>
    </p>
  </div>
);

export default About;
