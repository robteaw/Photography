import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";
// Styling and Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const images = [
  { id: "1", imageName: "image1.jpg", tag: "landscape" },
  { id: "2", imageName: "image2.jpg", tag: "landscape" },
  { id: "3", imageName: "people1.jpg", tag: "people" },
  { id: "4", imageName: "people2.jpg", tag: "people" },
  { id: "5", imageName: "people3.jpg", tag: "people" },
  { id: "6", imageName: "people4.jpg", tag: "people" },
  { id: "7", imageName: "people5.jpg", tag: "people" },
];

export default function PortfolioSection() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <Portfolio
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <div handleSetTag={setTag}>
        <div className="tags">
          <TagButton
            name="all"
            handleSetTag={setTag}
            tagActive={tag === "all" ? true : false}
          />
          <TagButton
            name="landscape"
            handleSetTag={setTag}
            tagActive={tag === "landscape" ? true : false}
          />
          <TagButton
            name="people"
            handleSetTag={setTag}
            tagActive={tag === "people" ? true : false}
          />
        </div>
      </div>
      <SRLWrapper>
        <div className="container">
          {filteredImages.map((image) => (
            <div key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </SRLWrapper>
    </Portfolio>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

// Styling
const Portfolio = styled(motion.div)`
  height: 100vh;
  padding-top: 4rem;

  .container {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding-bottom: 10rem;
    align-items: center;
    justify-content: center;
  }

  .image-card {
    padding: 3px;
    border: 10px solid #ccc;
    box-shadow: 2px 2px 2px #999;
  }

  img {
    height: 15rem;
  }

  .image-card:hover {
    border: 10px solid var(--hoverColor);
    transition: 0.5s ease-in;
  }

  .tags {
    text-align: center;
    padding: 20px 0px;
    margin-bottom: 3rem;
  }

  .tag {
    outline: none;
    border: none;
    color: #eee;
    margin: 0px 10px;
    background-color: transparent;
    cursor: pointer;
  }

  .active {
    font-weight: bold;
    color: var(--mainColor);
    border: 1px solid var(--mainColor);
  }

  @media (max-width: 1270px) {
    .container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
