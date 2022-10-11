import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/subjects/${id}`}>
        <button className="bg-blue-400 text-white p-1 rounded-lg">
          Start Quizerry
        </button></Link>
      </div>
    </div>
  );
};

export default Subject;
