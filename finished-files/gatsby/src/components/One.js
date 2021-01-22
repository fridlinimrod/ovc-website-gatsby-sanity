import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .wrapper {
    overflow: hidden;
    position: relative;
    width: fit-content;
    .big,
    .small {
      visibility: hidden;
    }
    .big {
      font-size: 20rem;
    }
    .small {
      font-size: 10rem;
    }
  }

  .first-letter {
    position: absolute;
    transition: all 0.6s;
    top: 0;
    font-size: 20rem;
    transform: translateX(90%);
  }

  .first-letter:after {
    content: attr(data-rest);
    transition: all 1s;
    position: absolute;
    right: -300%;
    font-size: 10rem;
    bottom: 21px;
  }

  .wrapper.animate .first-letter {
    transform: translateX(0);
  }

  .wrapper.animate .first-letter:after {
    right: -85%;
  }
`;

export default ({ word, animate }) => {
  const [firstLetter, ...rest] = word;
  return (
    <Styles>
      <div className={`wrapper ${animate ? 'animate' : ''}`}>
        <span className="big">{firstLetter}</span>
        <span className="small">{rest}</span>
        <div className="first-letter" data-rest={rest}>
          {firstLetter}
        </div>
      </div>
    </Styles>
  );
};
