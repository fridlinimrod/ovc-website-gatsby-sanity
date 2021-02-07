import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .wrapper {
    transition: all 0.6s;
    overflow: hidden;
    position: relative;
    width: 10rem;
  }

  .first-letter {
    transition: all 0.6s;
    font-size: 20rem;
  }

  .first-letter:after {
    content: '';
    display: inline-block;
    transition: all 1s;
    transition-delay: 0.3s;
    font-size: 10rem;
    position: relative;
    transform: translateX(-110%);
  }

  .wrapper.animate {
    width: 40rem;
  }
  .wrapper.animate .first-letter:after {
    content: attr(data-rest);
    transform: translateX(0);
  }
`;

export default ({ word, animate }) => {
  const [firstLetter, ...rest] = word;
  return (
    <Styles>
      <div className={`wrapper ${animate ? 'animate' : ''}`}>
        <div
          className="first-letter"
          data-rest={rest.join ? rest.join('') : rest}
        >
          {firstLetter}
        </div>
      </div>
    </Styles>
  );
};
