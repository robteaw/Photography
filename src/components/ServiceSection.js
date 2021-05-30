import React from "react";
import styled from "styled-components";
import camera from "../images/camera.jpg";
import photoEdit from "../images/photo-edit.jpg";
import { Link } from "react-router-dom";
// Styling and Animation
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animations";

export default function ServiceSection() {
  return (
    <Service variants={fadeIn} initial="hidden" animate="show">
      <Container>
        <Card>
          <img src={camera} alt="camera" />
          <h3>Photography</h3>
          <p>High quality photos</p>
          <p>Fast delivery</p>
          <p>For various occasions</p>
        </Card>

        <Card>
          <img src={photoEdit} alt="camera" />
          <h3>Photo Editing</h3>
          <p>Color adjustments</p>
          <p>Skin smoothing</p>
          <p>Cropping and Resizing</p>
        </Card>
      </Container>

      <Book>
        <h3>Want to learn more? Book an appointment today!</h3>
        <Link to="/contact">
          <button>Book Now</button>
        </Link>
      </Book>
    </Service>
  );
}

// Styling
const Service = styled(motion.div)`
  height: 80vh;
`;

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10em;
`;

const Card = styled(motion.div)`
  width: 23rem;
  height: 30rem;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  margin-inline: 3rem;
  display: block;

  &:hover {
    margin-top: -10px;
  }

  img {
    height: 15rem;
    width: 23rem;
  }

  h3 {
    color: var(--mainColor);
    font-size: 1.5rem;
    padding-top: 1rem;
    text-align: center;
    padding-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 3rem;
    text-align: center;
  }
`;

const Book = styled(motion.div)`
  color: #fff;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  margin: 4rem 0 10rem 0;
  text-align: center;
`;
