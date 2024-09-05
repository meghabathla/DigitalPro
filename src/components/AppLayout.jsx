import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { StyledAppLayout, StyledMain } from "../styles/Styles";

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
