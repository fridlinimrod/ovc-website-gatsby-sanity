import React from 'react';

export default ({ word }) => {
  const [firstLetter, ...rest] = word;
  return (
    <div className="wrapper">
      <div className="dummy">
        <div className="first-letter">{firstLetter}</div>
        {firstLetter}
      </div>
      <div className="real">
        <div className="first-letter" data-rest-of-word={rest}>
          {firstLetter}
        </div>
      </div>
    </div>
  );
};
