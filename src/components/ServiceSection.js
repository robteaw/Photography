import React from "react";
import styled from "styled-components";
import camera from "../images/camera.jpg";
import photoEdit from "../images/photo-edit.jpg";

function ServiceSection() {
  return (
    <Service>
      <Container>
        <div className="card">
          <img src={camera} alt="camera" />
          <h3>Photography</h3>
          <p>High quality photos</p>
          <p>Fast delivery</p>
          <p>For various occasions</p>
        </div>

        <div className="card">
          <img src={photoEdit} alt="camera" />
          <h3>Photo Editing</h3>
          <p>Color adjustments</p>
          <p>Skin smoothing</p>
          <p>Cropping and Resizing</p>
        </div>
      </Container>
    </Service>
  );
}

export default ServiceSection;

const Service = styled.div`
  height: 80vh;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10em;

  .card {
    width: 23rem;
    height: 30rem;
    margin: 10px;
    border-radius: 15px;
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
    margin-inline: 3rem;
  }

  .card:hover {
    margin-top: -10px;
  }

  img {
    height: 15rem;
    width: 23rem;
  }

  h3 {
    font-size: 1.5rem;
    padding-top: 1rem;
    text-align: center;
    padding-bottom: 1.5rem;
  }

  p {
    color: #888;
    font-size: 1rem;
    line-height: 3rem;
    text-align: center;
  }

  @media (max-width: 944px) {
    .card {
      margin-bottom: 2rem;
    }
  }
`;
