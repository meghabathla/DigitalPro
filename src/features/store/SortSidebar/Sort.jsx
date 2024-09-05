import React from "react";
import { StyledSort } from "../../../styles/Styles";
import { useSearchParams } from "react-router-dom";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("price", value);
    setSearchParams(searchParams);
  }
  return (
    <StyledSort>
      <span>Sort</span>
      <label>
        <input type="radio" name="test" onChange={() => handleClick("h2l")} />
        Price(high to low)
      </label>
      <label>
        <input type="radio" name="test" onChange={() => handleClick("l2h")} />
        Price(low to high)
      </label>
    </StyledSort>
  );
}

export default Sort;
