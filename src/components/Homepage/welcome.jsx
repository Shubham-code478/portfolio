import React from "react";
import Css from "../../components/Homepage/home.css";
import image from "../../images/logo1.webp";
import images from "../../images/logo2.webp";
import imaged from "../../images/logo3.webp";

function Welcome() {
  const myCome = {
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "30px",
  };
  return (
    <section className="welcome">
      <div className="containers">
        <div className="main" style={myCome}>
          <p className="come">Welcome to Almaris</p>
          <h2 className="headinge">In the Heart of the Mountain</h2>
          <h4 className="headinged">4.9 out of 5</h4>
          <p className="comes">Based on 25000+ reviews</p>
        </div>
        <div className="images-tours">
          <div className="imageds">
            <img src={image} alt="my pic" className="view" />
            <div className="tittle">
              <h4 className="moun">Mountain View Restaurant</h4>
              <p className="sed">
                Sed duis ut exercitation consequat anim in duis sed non ullamco
                qui tempor sint dolor pariatur qui in et incididunt laboris
                dolor.
              </p>
            </div>
          </div>

          <div className="imageds">
            <img src={images} alt="my pic" className="hiking" />
            <div className="tittle">
              <h4 className="moun">Mountain View Restaurant</h4>
              <p className="sed">
                Sed duis ut exercitation consequat anim in duis sed non ullamco
                qui tempor sint dolor pariatur qui in et incididunt laboris
                dolor.
              </p>
            </div>
          </div>

          <div className="imageds">
            <img src={imaged} alt="my pic" className="wildlife" />
            <div className="tittle">
              <h4 className="moun">Mountain View Restaurant</h4>
              <p className="sed">
                Sed duis ut exercitation consequat anim in duis sed non ullamco
                qui tempor sint dolor pariatur qui in et incididunt laboris
                dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
