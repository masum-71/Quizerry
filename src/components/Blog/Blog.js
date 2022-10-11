import React from "react";

const Blog = () => {
  return (
    <div className="text-center mt-14">
      <article className="bg-blue-100 p-5 m-10">
        <h1 className="bg-gray-100 mb-6 text-2xl font-bold">
          What is the purpose of react router?
        </h1>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </article>
      <article className="bg-blue-100 p-5 m-10">
        <h1 className="bg-gray-100 mb-6 text-2xl font-bold">
          How context api works in react?
        </h1>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </article>
      <article className="bg-blue-100 p-5 m-10">
        <h1 className="bg-gray-100 mb-6 text-2xl font-bold">
          What is useref hook?
        </h1>
        <p>
          The useRef Hook allows to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
        </p>
      </article>
    </div>
  );
};

export default Blog;
