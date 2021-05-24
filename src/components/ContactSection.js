import React from "react";
import styled from "styled-components";

export default function ContactSection() {
  return (
    <Contact>
      <div class="container">
        <h1>Contact</h1>
        <p>
          Fill out the form below to get in touch. I will try to get back to you
          as soon as possible or whenever available.
        </p>

        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              class="form-element"
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              class="form-element"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              class="form-element"
            />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              class="form-element"
            />
          </div>
          <div class="form-group full">
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              class="form-element"
            ></textarea>
          </div>
          <Submit>
            <input type="submit" value="SEND" />
          </Submit>
        </form>
      </div>
    </Contact>
  );
}

// Styling
const Contact = styled.div`
  height: 100vh;
  /* background: var(--bgColor); */

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;

    @media (min-width: 768px) {
      padding-left: 64px;
      padding-right: 64px;
    }

    @media (min-width: 1024px) {
      padding-left: 128px;
      padding-right: 128px;
    }

    h1 {
      /* color: var(--hoverColor); */
      font-size: 36px;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 16px;
      padding-top: 5rem;
    }

    p {
      color: #888;
      font-size: 1.125rem;
      text-align: center;
      line-height: 1.5;
      margin-bottom: 32px;
    }

    form {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 16px;
      background-color: #fff;
      padding: 32px;
      border-radius: 16px;
      /* box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); */

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      .form-group {
        &.full {
          grid-column: 1 / -1;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #888;
          font-size: 1rem;
        }

        .form-element {
          appearance: none;
          outline: none;
          border: none;

          display: block;
          width: 100%;

          border-radius: 8px;
          padding: 12px 16px;
          background-color: #f3f3f3;
          transition: 0.4s;

          &:focus {
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
            background-color: #fff;
          }
        }

        textarea {
          resize: none;
          min-height: 100px;
        }
      }
    }
  }
`;

const Submit = styled.div`
  grid-column: 1 / -1;
  text-align: center;

  input[type="submit"] {
    color: var(--mainColor);
    background: var(--bgColor);
    font-size: 1rem;
    font-weight: 600;
    width: 14rem;
    padding: 0.7rem;
    margin-top: 2.5rem;
    border: 0.5px solid var(--mainColor);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      color: var(--secondColor);
      background: var(--mainColor);
      border: 0.5px solid var(--secondColor);
    }
  }
`;
