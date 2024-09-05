import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabase";
import { StyledSignInPage } from "../styles/Styles";
import { useEffect } from "react";

function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/user");
      }
    });
  }, []);
  return (
    <StyledSignInPage>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="light"
        providers={["google"]}
      />
    </StyledSignInPage>
  );
}

export default SignIn;
