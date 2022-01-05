import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavLink from "react-bootstrap/NavLink"
import Nav from "react-bootstrap/Nav";
import "./navbar_style.css";

const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="md" className="animate-navbar nav-theme justify-content-between">
        <div>
          <Navbar.Brand href="" className="initials">GN</Navbar.Brand>
        </div>
        <div>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="mr-auto nav-link">
              <NavLink className="inactive" href="#home">Home</NavLink>
              <NavLink className="inactive" href="#about">About</NavLink>
              <NavLink className="inactive" href="#skills">Skills</NavLink>
              <NavLink className="inactive" href="#projects">Projects</NavLink>
              <NavLink className="inactive" href="#contact">Contact</NavLink>
            </Nav>
          </NavbarCollapse>
        </div>
      </Navbar>
    </div>
  );
};
export default MyNavbar;
