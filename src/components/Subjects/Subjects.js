import React from "react";
import "./Subjects.css";
import { useLoaderData } from "react-router-dom";
import Subject from "../Subject/Subject";
import Lottie from "lottie-react";
import animation from "../../animation/71619-coding.json";

const Subjects = () => {
  const quizzes = useLoaderData();

  return (
    <div>
      <Lottie animationData={animation} loop={true}></Lottie>

      <div className="grid shadow-lg md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {quizzes.data.map((quiz) => (
          <Subject key={quiz.id} quiz={quiz}></Subject>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
