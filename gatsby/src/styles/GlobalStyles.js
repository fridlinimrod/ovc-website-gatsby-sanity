import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';
import stripes from '../assets/images/stripes.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --ovc-main-color: #1e1e1e;
    --ovc-secondary-color: #474343;
    --ovc-white: #ffffff;
    --ovc-text-color: var(--ovc-white);
    --ovc-top-level-padding: 0 5%;
    --ovc-purple: #a4ade9;
  }
  html,
  body {
    overscroll-behavior-y: contain;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
  html {
    /* background-image: url(${bg}); */
    background: var(--ovc-main-color);

    /* background-size: 450px; */
    background-attachment: fixed;
    font-size: 10px;
    line-height: 1.4;
    &.light {
      --ovc-main-color: "red";
      --secondary-color: "blue";      
      --ovc-text-color: "black";
      --ovc-top-level-padding: 0 5%;
      --ovc-purple: #a4ade9;
    }
    @media (max-width: 800px) {
      height: -webkit-fill-available;
    }
  }
  body {
    color: var(--ovc-text-color);
    font-size: 2rem;
    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }

  iframe {
    width: 960px;  
    height: 540px;    
    @media (max-width: 800px) {
    width: 100%;
    height: auto;
    }
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  /* button {
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  } */
  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--ovc-purple) var(--white);
  }
  ::-webkit-scrollbar-track {
    background: var(--white);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--ovc-purple) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
  hr {
    border: 0;
    height: 8px;
    background-image: url(${stripes});
    background-size: 1500px;
  }
  img {
    max-width: 100%;
  }
  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  a:-webkit-any-link {
    color: var(--ovc-purple);
`;

export default GlobalStyles;
