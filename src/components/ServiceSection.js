import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import camera from "../img/camera.png";
import photoEdit from "../img/photo-edit.jpg";

function ServiceSection() {
  return (
    <Service>
      <h1>Find A Service</h1>
      <Container>
        <Box>
          <div>
            <img src={camera} alt="camera" />
          </div>
          <div>
            <h3>Photography</h3>
            <p>High quality photos</p>
            <p>Fast delivery</p>
            <p>For various occasions</p>
          </div>
        </Box>

        <Box>
          <div>
            <img src={photoEdit} alt="camera" />
          </div>
          <div>
            <h3>Photo Editing</h3>
            <p>Color adjustments</p>
            <p>Skin smoothing</p>
            <p>Cropping and Resizing</p>
          </div>
        </Box>
      </Container>
    </Service>
  );
}

export default ServiceSection;

const Service = styled.div`
  height: 85vh;

  h1 {
    text-align: center;
    padding: 5rem 0 3rem 0;
  }

  button {
    color: var(--mainColor);
    background: var(--secondColor);
    font-weight: 600;
    left: 50%;
    position: relative;
    padding: 0.8rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  button:hover {
    color: var(--secondColor);
    background: var(--mainColor);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    display: block;
    height: 12rem;
    margin-right: 5rem;
  }
`;

const Box = styled.div`
  background: var(--mainColor);
  border-radius: 0.5rem;
  margin: 1.5rem 7rem 0 7rem;
  padding-top: 1rem;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  text-align: center;
  transition: 0.2s linear;
  display: flex;

  h3 {
    font-size: 1.5rem;
    padding-top: 1rem;
    text-align: justify;
    padding-bottom: 1.5rem;
  }

  p {
    color: #888;
    line-height: 3rem;
    text-align: justify;
  }

  @media (max-width: 944px) {
    margin: 0 auto;
  }
`;
