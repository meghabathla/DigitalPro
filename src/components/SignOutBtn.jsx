import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledSignOutBtn } from "../styles/Styles";
import { useAuth } from "../context/UserConetxt";

function SignOutBtn() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  return <StyledSignOutBtn onClick={handleSignOut}>Sign Out</StyledSignOutBtn>;
}
export default SignOutBtn;

 
