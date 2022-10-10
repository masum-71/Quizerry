import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Quizerry</h1>
      <ul>
        <Link to="/subjects">Subjects</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
