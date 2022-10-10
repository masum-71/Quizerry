import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import './Main.css'

const Main = () => {
    return (
        <div className='main'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;