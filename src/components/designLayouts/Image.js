import React from "react";

const Image = ({ imgSrc, className,maxheight }) => {
  return <img  style={{height:maxheight?maxheight:"250px"}} className={className} src={imgSrc} alt={imgSrc} />;
};

export default Image;
