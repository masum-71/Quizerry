import React from "react";
import "./Subjects.css";
import { useLoaderData } from "react-router-dom";
import Subject from "../Subject/Subject";

const Subjects = () => {
  const quizzes = useLoaderData();

  return (
    <div>
      <div className="header">
        <h1 className="text-4xl font-bold height flex items-center justify-center">Enlighten Yourself by participating Quiz </h1>
      </div>

      <div className="grid shadow-lg md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {quizzes.data.map((quiz) => (
          <Subject key={quiz.id} quiz={quiz}></Subject>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
