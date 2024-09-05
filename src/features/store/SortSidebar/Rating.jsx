import React from "react";
import { StyledRating } from "../../../styles/Styles.js";
import { ImStarEmpty } from "react-icons/im";
import { useSearchParams } from "react-router-dom";

function Rating() {
  const arr = [1, 2, 3, 4, 5];
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("rating", value);

    setSearchParams(searchParams);
  }
  return (
    <StyledRating>
      <span>Ratings</span>
      <div>
        {arr.map((val) => {
          return (
            <button onClick={() => handleClick(val)} key={val}>
              <span>{val}</span>{" "}
              <ImStarEmpty style={{ color: "red", fontSize: "1.4rem" }} />
            </button>
          );
        })}
      </div>
    </StyledRating>
  );
}

export default Rating;
