import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroImg from "../images/heroImg.jpg";
// Styling and Animation
import { motion } from "framer-motion";
import { container, titleAnim } from "../animations";

export default function HeroSection() {
  return (
    <Hero style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="container">
        <div class="split">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="title"
          >
            <motion.h1 variants={titleAnim}>Pause for a moment</motion.h1>
            <motion.h1 variants={titleAnim}>and capture</motion.h1>
            <motion.h1 variants={titleAnim}>the memories</motion.h1>
            {/* <Link to="/">
              <button>Learn More</button>
            </Link> */}
          </motion.div>
          <div></div>
        </div>
      </div>
    </Hero>
  );
}

// Styling
const Hero = styled(motion.div)`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-attachment: fixed;

  h1 {
    color: var(--mainColor);
    /* font-size: 2.8rem; */
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 5px #000;
    text-transform: uppercase;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
