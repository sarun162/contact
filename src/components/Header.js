import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid">
      <nav 
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#570b78",height:'60px' }}
        
      >
        <img src="https://i.postimg.cc/63TXx81q/pngtree-phone-contact-app-icon-image-1128358-removebg-preview.png" alt="" style={{height:'80px'}}/>
        <NavLink to="/" className="btn" style={{ color: "white" }}>
          Home
        </NavLink>

        <NavLink to="/add" className="btn" style={{ color: "white" }}>
          Add
        </NavLink>
        <NavLink to="/about" className="btn" style={{ color: "white" }}>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
