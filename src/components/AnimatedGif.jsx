import React from "react";

function AnimatedGif({ src, alt = "Gif", onClick }) {
  return <img src={src} alt={alt} onClick={onClick} />;
}
export default AnimatedGif;
