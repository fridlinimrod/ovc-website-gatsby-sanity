import React from 'react';

export default ({ word }) => {
  const [firstLetter, ...rest] = word;
  return (
    <div className="wrapper">
      <div className="first-letter" data-rest-of-word={rest}>
        {firstLetter}
      </div>
    </div>
  );
};
