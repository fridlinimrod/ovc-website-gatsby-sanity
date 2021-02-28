import { Link } from 'gatsby';
import React from 'react';

const PrivacyPolicy = () => (
  <div>
    <h1 style={{ textDecoration: 'underline' }}>Privacy Policy</h1>
    <p>
      OVC uses Google Analytics to track events,
      <br /> the only events OVC tracks are OVC related:
      <br /> how do users interact with the extension:
      <br /> which controllers are used, do they use the keyboard shortcuts,
      <br /> did they configure their own set of shortcuts, did they change the
      theme, etc.
      <br />
      OVC is <span className="bold">NOT!!</span> collecting personal data, not
      checking what websites you surf to, nor which videos you watch.
    </p>
    <p>
      To Install OVC go to the&nbsp;
      <a
        target="blank"
        href="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb"
      >
        chrome web store and install it
      </a>
    </p>
  </div>
);

export default PrivacyPolicy;
