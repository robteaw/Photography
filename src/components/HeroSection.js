import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import heroImg from "../images/heroImg.jpg";

export default function HeroSection() {
  return (
    <Hero style={{ backgroundImage: `url(${heroImg})` }}>
      <div class="container">
        <div class="split">
          <div>
            <h1>Pause for a moment</h1>
            <h1>and capture</h1>
            <h1>the memories</h1>
            <button id="services">Learn More</button>
          </div>
          <div>
            {/* <img src="img/image-02.jpg" alt="foggy mountains with sun setting behind them"> */}
          </div>
        </div>
      </div>
    </Hero>
  );
}

// Styling
const Hero = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-attachment: fixed;

  h1 {
    color: var(--mainColor);
    font-size: 2.8rem;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 5px #000;
    text-transform: uppercase;
  }
`;
