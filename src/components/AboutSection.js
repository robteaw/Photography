import React from "react";
import styled from "styled-components";
import person from "../images/home.png";
// Styling and Animation
import { motion } from "framer-motion";
import { container, titleAnim, fadeIn } from "../animations";

function AboutSection() {
  return (
    <About>
      <Text>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <motion.h1 variants={titleAnim}>Ren Tea</motion.h1>
          <motion.h2 variants={titleAnim}>Freelance Photographer</motion.h2>
          <motion.p variants={titleAnim}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            quisquam rerum beatae cum commodi consequuntur totam, voluptates,
            possimus, aspernatur laborum sapiente consectetur perferendis quia.
            Libero minima quasi assumenda non ea.
          </motion.p>
        </motion.div>
      </Text>

      <Image variants={fadeIn} initial="hidden" animate="show">
        <div className="box">
          <div className="circle">
            {/* <img src={person} alt="person" /> */}
          </div>
          <img src={person} alt="person" />
        </div>
      </Image>
    </About>
  );
}

// Styling
const About = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 7.5rem;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 0 3%;
    padding-bottom: 2rem;
    flex-flow: column-reverse;
  }
`;

const Text = styled(motion.div)`
  flex-basis: 30%;
  position: relative;
  padding: 2rem;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  h2 {
    color: #77a7bd;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 8px 0 8px;
  }

  p {
    font-size: 1rem;
    line-height: 2rem;
    margin: 20px 0;
  }
`;

const Image = styled(motion.div)`
  position: relative;
  display: flex;
  }

  .box {
    position: relative;
    width: 22.5rem;
    height: 24rem;
    background: var(--bgColor);
    margin: 20px 40px;
    overflow: hidden;
  }

  .box .circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 22.5rem;
    height: 22.5rem;
    overflow: hidden;
    background: linear-gradient(360deg, #2f4f4f 25%, #dcdcdc 75%);
    border-radius: 50%;
    border: 6px solid #1c2237;
  }

  .box .circle img,
  .box img {
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 24rem;
  }

  .box::before {
    content: "";
    position: absolute;
    left: 0;
    width: 22.5rem;
    height: 24rem;
    border-radius: 50%;
    background: transparent;
    z-index: 1;
    box-shadow: 0 7.5rem 0 22.5rem var(--bgColor);
  }

  .box::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 22.5rem;
    height: 24rem;
    box-sizing: border-box;
    border-radius: 50%;
    border: 6px solid transparent;
    border-bottom: 6px solid var(--secondColor);
  }
`;

export default AboutSection;
