import React, { Component } from "react";
import Gif from "./gif";

// Destructuring

const GifList = ({ gifs, selectGif }) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <Gif id={gif.id} key={gif.id} selectGif={selectGif} />
      ))}
    </div>
  );
};

export default GifList;
