import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heroImg from "../images/heroImg.jpg";
// Styling and Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { titleAnim } from "../animations";

export default function HeroSection() {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <Hero style={{ backgroundImage: `url(${heroImg})` }}>
      <div class="container">
        <div class="split">
          <div>
            <motion.h1 variants={titleAnim}>Pause for a moment</motion.h1>
            <motion.h1 variants={titleAnim}>and capture</motion.h1>
            <motion.h1 variants={titleAnim}>the memories</motion.h1>
            {/* <Link to="/">
              <button>Learn More</button>
            </Link> */}
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
