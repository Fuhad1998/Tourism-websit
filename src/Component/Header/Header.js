import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <div className="Header-container bg-dark ">
      <h1 className=" text-light">Welcome To Fuwad's Cruise Ship</h1>
      <nav className="header-nav  ">
        <Link className="header-link text-light" to="/homes">
          Home
        </Link>
        <Link className="header-link text-light" to="/aboutUs">
          AboutUs
        </Link>
        <Link className="header-link text-light" to="/login">
          Log-In
        </Link>
        {user?.email && <Link className="header-link text-light" to="/myOrders">
          My Orders
        </Link>}
        {user?.email &&  <Link className="header-link text-light" to="/manageAllOrders">
          Manage All Orders
        </Link>}
        {user?.email && <Link className="header-link text-light" to="/addNewService">
          Add New Service
        </Link>}
        {user?.email && (
          <button
            className="header-link text-light bg-dark border-0 "
            onClick={logout}
          >
            Log-out
          </button>
        )}
        <span className="text-light bg-dark header-link">
          {user.displayName}
        </span>
        <span className="text-light bg-dark header-link">{user.email}</span>
        <span>
          <img
            className="text-light bg-dark header-link userEmail"
            src={user.photoURL}
            alt=""
          />
        </span>
      </nav>
    </div>
  );
};

export default Header;
