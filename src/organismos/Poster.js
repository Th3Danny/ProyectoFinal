// src/components/Poster.js
import React from 'react';

const Poster = ({ imageURL, title }) => {
  return (
    <div className="poster">
      <img src={imageURL} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default Poster;
