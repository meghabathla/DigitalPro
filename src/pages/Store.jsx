import ProductsFilter from "../features/store/ProductsFilter";
import ProductList from "../features/store/ProductList";
import { Main, StyledStoreLayout } from "../styles/Styles";
import SortSidebar from "../features/store/SortSidebar/SortSidebar";

function Store() {
  return (
    <StyledStoreLayout>
      <ProductsFilter />
      <Main>
        <ProductList />
      </Main>

      <SortSidebar />
    </StyledStoreLayout>
  );
}

export default Store;
