import React from "react";
import pic from "../../../src/images/logo4.webp";
import pics from "../../images/logo5.webp";
import picd from "../../images/logo6.webp";
import Css from "../../components/Homepage/home.css";

class Car extends React.Component {
  render() {
    const lay = {
      textAlign: "center",
      marginBottom: "35px",
      fontFamily: "cursive",
      fontSize:"25px"
    };

    const relay = {
      display: "flex",
      gap: "26px",
    };
    return (
      <section className="almaries">
        <div className="containers">
          <div className="hdg" style={lay}>
            <h3 style={{color:"#719B0E"}}>Welcome to Almaris</h3>
            <h1>Accomodations</h1>
          </div>
          <div className="pics" style={relay}>
            <div className="pic">
              <img src={pic} alt="image" className="hotel-room" />
              <div class="details-info" style={{textAlign:"center"}}>
                <h3 class="p-title">Canyon Crest</h3>
                <div class="capacities" >
                  <span class="capacity"> 2 Guests </span>
                  <span class="capacity"> 35 Feets Size </span>
                </div>
                <div class="hover-bg-two"></div>
              </div>
            </div>
            <div className="pic">
              <img src={pics} alt="image" className="hotel-room" />
              <div class="details-info" style={{textAlign:"center"}}>
                <h3 class="p-title">Glacier Glade</h3>
                <div class="capacities" >
                  <span class="capacity"> 2 Guests </span>
                  <span class="capacity"> 35 Feets Size </span>
                </div>
                <div class="hover-bg-two"></div>
              </div>
            </div>
            <div className="pic">
              <img src={picd} alt="image" className="hotel-room" />
              <div class="details-info" style={{textAlign:"center"}}>
                <h3 class="p-title">Cliffside Chalet</h3>
                <div class="capacities" >
                  <span class="capacity"> 2 Guests </span>
                  <span class="capacity"> 35 Feets Size </span>
                </div>
                <div class="hover-bg-two"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Car;
