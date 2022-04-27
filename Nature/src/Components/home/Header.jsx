import React from "react";


import "./Header.css";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="HeaderContainer">
      <a href="#" className="Logo">
        ProNature
      </a>
      <Link to="/Login" className="Login">
        Login
      </Link>
    </div>
  );
};

export default Header;
