import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Question = () => {
    const quizzes = useLoaderData()

    const {questions} = quizzes.data;

    
 
    return (
        <div className='text-center mt-12 md:w-4/5 m-auto'>
            <h1 className='text-4xl bg-slate-400 p-4 text-white'>This section is for {quizzes.data.name}</h1>
            {
                questions.map(question => <Quizes
                key = {question.id}
                question = {question}
                ></Quizes>)
            }
        </div>
    );
};

export default Question;