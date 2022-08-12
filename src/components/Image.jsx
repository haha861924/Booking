import React from "react";

function Image({ src, className, onClick }) {
  return (
    <img
      src={src}
      className={className}
      onClick={onClick}
      alt="SVG for image"
    />
  );
}

export default Image;
