import React from "react";

import { link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Image from "../images/logo7.webp";

import css from "../Foot.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-main">
        <div className="containers">
          <div className="full-footer">
            <div class="lst-txt">
              <h5 class="elementor-heading-title">Address</h5>
              <p class="elementor-heading-titles">
                742 Evergreen Terrace <br /> Brooklyn, NY 11201
              </p>
            </div>
            <div class="logo">
              <img src={Image} alt="mypic" className="logo" />
              <div class="icon">
                <span>
                  <a href="#">
                    <FaFacebook />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <FaInstagramSquare />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <FaTwitter />
                  </a>
                </span>
                <span>
                  <a href="#">
                    <FaYoutube />
                  </a>
                </span>
              </div>
            </div>
            <div class="lst-txt">
              <h5 class="elementor-heading-title">Contact Us</h5>
              <p class="elementor-heading-titles">
                T. +929 333 9296
                <br />
                M. contact@almaris.com
              </p>
            </div>
          </div>
        </div>
        <div class="last-footer">
          <div class="container">
            <div class="full-last-footer">
              <p class="heading-title">
                Copyright 2024 - Almaris by Designesia
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
