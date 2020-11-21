import React from 'react';
import styled from 'styled-components';
import AnimatedWord from '../components/AnimatedWord';

const AboutStyles = styled.div`
  .wrapper {
    position: relative;
  }

  .first-letter {
    font-size: 20rem;
    overflow: hidden;
    &:after {
      transition: all 0.6s;
      content: attr(data-rest-of-word);
      font-size: 10rem;
      transform: translateX(-250%);
      display: inline-block;
    }
  }

  .animated-words {
    display: flex;
  }

  .animated-words:hover .first-letter:after {
    transform: translateX(0);
  }

  .animated-words:hover .first-letter {
    transform: translateX(0);
  }
`;
export default (props) => (
  <AboutStyles>
    <div className="animated-words">
      <AnimatedWord word="one" />
      <AnimatedWord word="video" />
      <AnimatedWord word="control" />
    </div>
  </AboutStyles>
);
