import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  .wrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    height: 100%;
    align-items: center;
    p,
    span {
      margin: 0 15px;
    }
    button {
      line-height: 1 !important;
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyles>
      <div className="wrapper">
        {/* <p>&copy; One Video Control (OVC) {new Date().getFullYear()}.</p> */}
        <span>Share with friends </span>
        <FacebookShareButton
          url="onevideocontrol.com/features"
          quote="I am using OVC to save time and improve my video watching experience"
        >
          <FacebookIcon size={28} round />
        </FacebookShareButton>
      </div>
    </FooterStyles>
  );
}
