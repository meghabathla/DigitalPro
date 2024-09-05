import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledSignInBtn } from "../styles/Styles";

function SignInBtn() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/signIn");
  };

  return (
    <StyledSignInBtn onClick={() => handleSignIn()}>Sign In</StyledSignInBtn>
  );
}
export default SignInBtn;
