import { useNavigate } from "react-router-dom";

function HeaderSignInBtn() {
  const navigate = useNavigate();
  return (
    <button
      style={{
        padding: "0.6rem 2rem",
        backgroundColor: "#0b0b0b",
        border: "none",
        fontSize: "1.6rem",
        color: "#fff",
        borderRadius: "5px",
      }}
      onClick={() => navigate("/signin")}
    >
      Sign in
    </button>
  );
}

export default HeaderSignInBtn;
