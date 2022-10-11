import React from "react";
import Options from "../Options/Options";

const Quizes = ({ question }) => {

    console.log(question)
  return (
    <div>
      <div className="mt-10 border-2 p-5">
        <h1 className="text-2xl">{question.question}</h1>
        <div className="grid grid-cols-2 mt-4">
          {question.options.map((option, idx) => (
            <Options key={idx} option={option}></Options>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizes;
