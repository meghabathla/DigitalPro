import React, { useState } from "react";
import { StyledBrands } from "../../../styles/Styles.js";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Brands() {
  const [searchParams, setSearchParams] = useSearchParams();
  const arr = [
    "All",
    "Xiaomi",
    "Samsung",
    "OnePlus",
    "Apple",
    "Realme",
    "Redmi",
    "Garmin",
    "Dell",
    "HP",
    "Sony",
    "Soundcore",
    "boAt",
    "Zebronics",
    "JBL",
  ];

  function handleClick(value) {
    searchParams.set("brand", value.toLowerCase());
    setSearchParams(searchParams);
  }

  const [showAllBrand, setShowAllBrand] = useState(false);

  return (
    <StyledBrands>
      <span>Brands</span>
      {arr.map((val, index) =>
        showAllBrand ? (
          <label key={val}>
            <input
              type="radio"
              name="radio"
              value={val.toLowerCase()}
              onChange={(e) => handleClick(e.target.value)}
            />
            {val}
          </label>
        ) : (
          index < 5 && (
            <label key={val}>
              <input
                type="radio"
                name="radio"
                value={val.toLowerCase()}
                onChange={(e) => handleClick(e.target.value)}
              />
              {val}
            </label>
          )
        )
      )}
      <div onClick={() => setShowAllBrand(!showAllBrand)}>
        {showAllBrand ? (
          <span>
            Show less <IoIosArrowUp />
          </span>
        ) : (
          <span>
            Show more <IoIosArrowDown />
          </span>
        )}
      </div>
    </StyledBrands>
  );
}

export default Brands;
