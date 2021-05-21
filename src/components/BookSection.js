import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BookSection() {
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

const Book = styled.div`
  color: #fff;
  height: 30vh;
  background: #1c2237;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 1.5rem;
  }

  button {
    color: #fff;
    background: #1c2237;
    font-size: 1rem;
    font-weight: 600;
    width: 14rem;
    padding: 0.7rem;
    margin-top: 3rem;
    border: 0.5px solid #fff;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.4s;
  }

  button:hover {
    color: #1c2237;
    background: #fff;
  }
`;

export default BookSection;
