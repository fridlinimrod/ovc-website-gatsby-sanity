import React from 'react';

const WhatIsNew = () => (
  <div>
    <h3>
      The following are the new features for this version (watch the video below
      to see demo)
    </h3>
    <p>
      <ul>
        <li>
          *New Feature* - You can now select to start the control in "hidden"
          mode, great for the keyboard zen masters!
        </li>
        <li>
          *New Feature* - You can now select to auto minimize the control after
          5 seconds, great for those who forget to minimize and walk away :)
        </li>
        <li>
          *New Feature* - Volume will be preserved on different videos{' '}
          <b>**on the same site**</b>, you can select to preserve the speed as
          well.
        </li>
        <li>
          *New Feature* - OVC controller will now show when in full screen mode
          (it had some bugs)
        </li>
        <li>
          *Minor bug fix* - when ctrl key is pressed, the OVC shortcuts will
          have no effect (finally when you copy paste something - the video will
          not skip forward).
        </li>
        <li>
          *Minor bug fix* - in the{' '}
          <a href="./options.html" target="_blank">
            Setting page
          </a>{' '}
          when hovering with the mouse over the themes, the mouse will now
          indicate they are clickable.
        </li>
      </ul>
    </p>
    <br />
    <h3>
      Get the best out of OVC by learning how to use it (very simple and easy)
    </h3>
    <br />
    <h3>
      For instruction videos and news,{' '}
      <a href="https://www.facebook.com/OVC-One-Video-Control-108118054257856">
        Follow OVC on Facebook
      </a>
    </h3>
    <br />
    <h3 className="try-it">
      For a quick try - you can watch the following video and try the Extension
      on them
    </h3>
    <br />
    <iframe
      title="new-version-video"
      width="640"
      height="360"
      src="https://www.youtube.com/embed/A8mtWuqHmYw?controls=0"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />

    <h4 className="rate">
      Hey, if you like the extension I would really appreciate a
      <a href="https://chrome.google.com/webstore/detail/ovc-one-video-control/analeldnikfgekckpcppegfekineelbb/">
        5 stars rating
      </a>
      in the store as well as a positive feedback.
      <br />
      Help more people enjoy this and promise your place in heaven ;)
    </h4>
    <h5>
      To get news about what's coming, and see instruction videos about the
      features and more -
      <a href="https://www.facebook.com/OVC-One-Video-Control-108118054257856">
        follow OVC on facebook
      </a>
    </h5>
  </div>
);

export default WhatIsNew;
