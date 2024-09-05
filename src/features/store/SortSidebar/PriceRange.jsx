import React from "react";
import { StyledPriceRange } from "../../../styles/Styles";
import { useSearchParams } from "react-router-dom";

function PriceRange() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("range", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledPriceRange>
      <span>Price Range</span>
      <input
        type="range"
        min="500"
        max="500000"
        onChange={(e) => handleClick(e.target.value)}
      />
    </StyledPriceRange>
  );
}

export default PriceRange;
