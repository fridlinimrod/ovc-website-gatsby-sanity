import React from 'react';
import { getCustomAnimatedLink } from '../utils/general';

const WhatIsNew = () => (
  <div>
    <h1 style={{ textDecoration: 'underline' }}>What Is New</h1>
    <h3>
      The following are the new features for this version (watch the video below
      to see demo)
    </h3>
    <p>
      <ul>
        <li>
          *New Feature* - Finally, OVC has a website (you are currently in it).
          <br />
          This is the place to see the features' videos, to see what is new for
          the current version, etc.
          <br />
          hopefully soon you can also contact me via this web site (suggest
          features, report bugs, etc).
        </li>
        <li>
          <br />
          *New Feature* - you can now control the opacity of OVC (you can make
          it almost invisible if you would like).
        </li>
        <li>
          <br />
          *bug fix* - Toggle super speed could not be turned off (once you
          toggled super speed, another click didn't do anything),
          <br />
          reminder - the keyboard shortcut for toggling super speed on and off
          is 'q', you can customize it in the shortcuts page.
        </li>
      </ul>
    </p>
    <br />
    <h3>
      Get the best out of OVC by learning how to use it (very simple and easy)
    </h3>
    <br />
    <h3>
      For instruction videos and news, head up to the &nbsp;
      {getCustomAnimatedLink({ to: '/features/', text: 'Features page' })}
      &nbsp; you can also &nbsp;
      <a href="https://www.facebook.com/OVC-One-Video-Control-108118054257856">
        Follow OVC on Facebook
      </a>
      &nbsp; to see what is coming.
    </h3>
    <br />
    <h3 className="try-it">
      For a quick try - you can watch the following video and try the Extension
      on it
    </h3>
    <br />
    <iframe
      title="new-version-video"
      src="https://www.youtube.com/embed/YlXhpr6bNA4?controls=0"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <h4 className="rate">
      <br />
      Hey, if you like the extension I would really appreciate a &nbsp;
      <a href="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb/">
        5 stars rating
      </a>
      &nbsp; in the store as well as a positive feedback.
      <br />
      Help more people enjoy this and promise your place in heaven ;)
    </h4>
  </div>
);

export default WhatIsNew;
