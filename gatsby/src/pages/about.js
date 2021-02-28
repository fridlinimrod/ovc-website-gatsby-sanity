import React from 'react';
import { getCustomAnimatedLink } from '../utils/general';

export const About = () => (
  <div>
    <h1 style={{ textDecoration: 'underline' }}>About</h1>
    <p>
      OVC - One Video Control is a Chrome extension that provides a 'video
      controller' for every video you are watching using chrome browser on your
      computer.
    </p>
    <p>
      Using OVC - One Video Control you can easily speed up or slow down any
      video on the web,
      <br />
      You can pop out videos from the browser and play them in picture in
      picture mode (pip)
      <br />
      You can do much more :), to see a demo of some of the features, head up to
      the {getCustomAnimatedLink({ to: '/features/', text: 'Features page' })}
      <br />
      for now, here is a quick demo:
    </p>
    <iframe
      title="OVC demo"
      width="640"
      height="360"
      src="https://www.youtube.com/embed/d0lRy2ZXvB0"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
    <p>
      If you haven't installed OVC yet - go to the &nbsp;
      <a
        target="blank"
        href="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb"
      >
        chrome web store and install it
      </a>
      <br />
      <br />
      Made with love by me (Nimrod Fridlin) &nbsp;
      <a
        href="https://twitter.com/fridlinimrod?ref_src=twsrc%5Etfw"
        className="twitter-follow-button"
        data-show-count="false"
      >
        Follow @FridliNimrod
      </a>
    </p>
  </div>
);

export default About;
