import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import "./NavBar.css";

const NavBar = () => {

  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <h1 className="logo text-4xl">Quizerry</h1>
      <ul className={`md:flex md:static absolute duration-500 ease-in-out ${open ? 'top-7 right-0' : 'top-[-100px]'}`}>
        <li><NavLink
          className={({ isActive }) => (isActive ? "text-red-400" : undefined)}
          to="/subjects"
        >
          Subjects
        </NavLink></li>
        <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-400" : undefined)}
          to="/statistics"
        >
          Statistics
        </NavLink>
        </li>
        <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-red-400" : undefined)}
          to="/blog"
        >
          Blog
        </NavLink>
        </li>
      </ul>
     <div onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden">
     {
        open ? <XMarkIcon ></XMarkIcon> : <Bars3Icon/>
      }
      
     </div>
    </nav>
  );
};

export default NavBar;
