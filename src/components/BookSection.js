import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function BookSection() {
  return (
    <Book>
      <div>
        <h3>Want to learn more? Book an appointment today!</h3>
      </div>
      <div>
        <Link to="/contact">
          <button>Book Now</button>
        </Link>
      </div>
    </Book>
  );
}

// Styling
const Book = styled.div`
  color: #fff;
  height: 30vh;
  background: #1c2237;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 460px) {
    padding: 3rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`;
