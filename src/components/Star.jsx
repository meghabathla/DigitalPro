import React from "react";
import { ImStarEmpty } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";
import { ImStarFull } from "react-icons/im";

function Star({ rating }) {
  const maxStars = 5; // Max stars to be displayed
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

  const stars = [
    ...Array(filledStars).fill("FULL"),
    ...(hasHalfStar ? ["HALF"] : []),
    ...Array(emptyStars).fill("EMPTY"),
  ];
  return (
    <>
      {stars.map((type, index) => {
        if (type === "FULL") {
          return <ImStarFull key={index} style={{ color: "red" }} />;
        } else if (type === "HALF") {
          return <ImStarHalf key={index} style={{ color: "red" }} />;
        } else {
          return <ImStarEmpty key={index} style={{ color: "red" }} />;
        }
      })}
    </>
  );
}
export default Star;
