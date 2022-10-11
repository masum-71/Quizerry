import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Subject = ({ quiz }) => {
  const { logo, name, total, id } = quiz;
  return (
    <div className=" hover:shadow-xl rounded-lg p-3 bg-neutral-100">
      <div>
        <img className="w-full bg-slate-500 border-2 mr-3" src={logo} alt="" />
      </div>
      <div className="flex w-full items-center justify-between ">
        <p>{name}</p>
        <p>Quiz: {total}</p>
        <div >
        <Link  to={`/subjects/${id}`}>
        <button className="bg-blue-400 flex text-white p-1 rounded-lg">
          Start Quizerry
          <ArrowRightIcon className="h-6 w-6 text-white"/>
        </button></Link>
        
        </div>
      </div>
    </div>
  );
};

export default Subject;
