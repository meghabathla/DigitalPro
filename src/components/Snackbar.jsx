import React from "react";
import { useSnackbar } from "../context/SnackbarContext";
import { StyledSnackbar } from "../styles/Styles";

function Snackbar() {
  const { isVisible, message } = useSnackbar();
  return isVisible ? <StyledSnackbar>{message}</StyledSnackbar> : null;
}
export default Snackbar;
