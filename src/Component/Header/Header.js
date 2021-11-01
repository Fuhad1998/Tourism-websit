import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/UseAuth';
import './Header.css'

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="Header-container bg-dark ">
            <h1 className=" text-light">Welcome To Fuwad's Cruise Ship</h1>
            <nav className="header-nav  ">
                <Link className="header-link text-light" to="/homes">Home</Link>
                <Link className="header-link text-light" to="/schedule">Schedule</Link>
                <Link className="header-link text-light" to="/aboutUs">AboutUs</Link>
                <Link className="header-link text-light" to="/login">Log-In</Link> 
                {user?.email && <button className="header-link text-light bg-dark " onClick={logout}>Log-out</button>}
                <span className="text-light bg-dark header-link">{user.displayName}</span>
            </nav>
            
        </div>
    );
};

export default Header;