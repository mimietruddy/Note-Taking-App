import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";
import {AuthContext} from "../store/AuthContext"
const Navigation = () => {
  const { isLoggedIn, user, firebase } = useContext(AuthContext);

  const AuthLinks = () => {
    return (
      <>
        <li className="nav-list-item">
          <Link to="/addnote" className="nav-link">
            create Note🌈
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-list-item">
          <button className="btn btn-warning" onClick={()=>firebase.auth().signOut()} className="nav-link">
            Logout
          </button>
        </li>
      </>
    );
  };
  const GuestLinks = () => {
    return (
      <>
        <li className="nav-list-item">
          <Link to="/login" className="nav-link">
            Get Started
          </Link>
        </li>
        <li className="nav-list-item">
          <Link to="/addnote" className="nav-link">
            Notes🌈
          </Link>
        </li>
      </>
    );
  };
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="navbrand">
          <img src={logo} alt="logo" />{" "}
          <span className="navbrand-text">Note-Taking-App🌈</span>
        </Link>
      </div>
      <ul className="nav">{isLoggedIn ? <AuthLinks /> : <GuestLinks />}</ul>
    </nav>
  );
};
export default Navigation;
