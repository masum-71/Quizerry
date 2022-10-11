import React from "react";
import Options from "../Options/Options";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quizes = ({ question }) => {
  const notify = () => toast(`${question.correctAnswer}`);
  

  const handleAnswer = (e) => {
    if(e === `${question.correctAnswer}`){
      alert('Your answer is correct')
    }else{
      alert('Opss! wrong answer')
    }
  }

  return (
    <div>
      <div className="mt-10 border-2 p-5">
        <div className="flex items-center bg-sky-100 p-2">
          <h1 className="text-2xl  text-center w-full">{question.question}</h1>
          <EyeIcon onClick={notify} className="h-6 w-6 text-blue-500" />
          <ToastContainer />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {question.options.map((option, idx) => (
            <Options key={idx} 
            option={option} 
            handleAnswer = {handleAnswer}
            ></Options>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizes;
