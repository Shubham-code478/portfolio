import React from "react";
import Css from "../../components/Homepage/home.css";

function Homebanner() {
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
        <h1 className="heading">Welcome to the Home Page</h1>
        <div className="item">
          {/* <img src={myImage}  alt="Bike" style={{ width: '50%',height:'300px',  objectFit: 'contain',borderRadius: '20px' }}/>
<img src={myPic} alt="car" style={{width:'50%',height:'300px',objectFit:'contain'}} /> */}
        </div>
        <h2 className="head" style={css}>
          Discover Our Amazing Services Mohit sexy girl
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

export default Homebanner;
