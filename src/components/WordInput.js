import React from 'react';

const WordInput = () => (
  <div className="mb-6">
    <input
      className="center"
      id="input"
      type="text"
      placeholder=""
      onChange={(e) => checkWord(e.target.value)}
    />
  </div>
);


export default WordInput;