import React from "react";
import { Link } from "react-router-dom";  
import myImage from "../images/bike.jpg";
import  Css from "../App.css";

class Header extends React.Component {
  render() {
    const myList = {
    padding: "0",
    margin: "0",
    listStyle: "none",
    display: "flex",
  };
    return (
      <header className="header-main">
        <nav className="Navbar">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={myImage} alt="mypic" className="image" />
          </a>
          <ul className="list" style={myList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;