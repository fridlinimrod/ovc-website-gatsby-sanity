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
          *New Feature* - (requested by a happy user) Favorite speed! you can
          now set a favorite speed and toggle it on and off with a click of a
          button (or a keyboard shortcut) - see video below.
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
      src="https://www.youtube.com/embed/vVVEYcZCw2Y?controls=0"
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
      Help more people enjoy this and save yourself a spot in heaven ;)
    </h4>
  </div>
);

export default WhatIsNew;
