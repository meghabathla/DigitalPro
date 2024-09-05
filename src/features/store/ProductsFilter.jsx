import { useSearchParams } from "react-router-dom";
import { StyledProductFilter } from "../../styles/Styles";
import { filters } from "../../services/CategoryFilters";

function ProductsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledProductFilter>
      {filters.map(({ value, src, label }) => (
        <div key={value} onClick={() => handleClick(value)}>
          <img src={src} alt={value} />
          <span>{label}</span>
        </div>
      ))}
    </StyledProductFilter>
  );
}

export default ProductsFilter;
