import React from "react";
import Css from "../../components/Homepage/home.css";

import { FaHome, FaUser, FaAngellist } from "react-icons/fa";

function Home() {
  const handleClick = () => {
    alert("hello shubham kse ho");
  };
  const css = {
    color: "red",
    padding: "10px",
  };
  return (
    <section className="home-container">
      <div className="hero-section">
        <h1 className="heading">
          Welcome to the Home Page
          <FaHome />
          <FaUser />
          <FaAngellist />
        </h1>
        <div className="item"></div>
        <h2 className="head" style={css}>
          Discover Our Amazing Services
        </h2>
        <p className="para">
          We help businesses grow by building beautiful websites using React.
        </p>
        <button className="buttons" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Home;
