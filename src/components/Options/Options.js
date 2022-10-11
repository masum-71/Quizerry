import React from "react";

const Options = ({ option , handleAnswer}) => {
  return (
    <div onClick={() => handleAnswer()}
    className="bg-neutral-200 w-full hover:shadow-md
     p-3 rounded-xl flex items-center">
      <label>
        <input type="radio" name="option" /> {option}
      </label>
    </div>
  );
};

export default Options;
