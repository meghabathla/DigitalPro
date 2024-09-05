import AnimatedGif from "../components/AnimatedGif";
import { StyledPageNotFound } from "../styles/Styles";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const handlePath = () => {
    navigate("/");
  };
  
  return (
    <StyledPageNotFound>
      <AnimatedGif
        src="https://miro.medium.com/v2/resize:fit:1400/1*zBFBJktPD3_z0S_35kO5Hg.gif"
        alt="true"
        onClick={handlePath}
      />
    </StyledPageNotFound>
  );
}

export default PageNotFound;
