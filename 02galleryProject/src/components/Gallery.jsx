import React, { useState } from "react";
import { sculptureList } from "./data";

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showdetail, setShowDetail] = useState(false);
  const { name, url, alt, description } = sculptureList[index];
  const len = sculptureList.length;

  const handleEvent = () => {
    setIndex((index + 1) % len);
  };
  const toggleDetail = () => {
    setShowDetail(!showdetail);
  };
  return (
    <div>
      <button onClick={handleEvent}>Next</button>
      <h1>{name}</h1>
      <h3>
        ({index + 1} of {len})
      </h3>
      <h3>{showdetail && <p>{description}</p>}</h3>
      <button onClick={toggleDetail}>
        {showdetail ? "Hide Detail" : "Show Detail"}
      </button>
      <br />
      <img src={url} alt={alt} />
    </div>
  );
}

export default Gallery;
