import React from 'react';
import { getCustomAnimatedLink } from '../utils/general';

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
      {getCustomAnimatedLink({ to: '/features/', text: 'Features page' })}
    </p>
    <p>
      To Install OVC go to the&nbsp;
      <a to="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb">
        chrome web store and install it
      </a>
    </p>
  </div>
);

export default About;
