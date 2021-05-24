import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";

export default function PortfolioSection() {
  return (
    <SRLWrapper>
      <Portfolio>
        <Link>
          <img src="./images/image1.jpg" alt="" />
        </Link>
        <Link>
          <img src="./images/image2.jpg" alt="" />
        </Link>
      </Portfolio>
    </SRLWrapper>
  );
}

// Styling
const Portfolio = styled.div`
  height: 100vh;
`;
