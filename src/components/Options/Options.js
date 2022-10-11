import React from "react";

const Options = ({ option }) => {
  return (
    <div>
      <label>
        <input type="radio" name='option' /> {option}
      </label>
    </div>
  );
};

export default Options;
