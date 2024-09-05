import { StyledFooter } from "../styles/Styles";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  // array of link

  return (
    <StyledFooter>
      <ul>
        <Link to="/">About us</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Consumer Policy</Link>
        <Link to="/">Help</Link>
      </ul>

      <div className="footer-icons">
        <li>
          <Link to="https://gmail.com/">
            <MdOutlineMailOutline />
          </Link>
        </li>
        <li>
          <Link to="https://instagram.com/">
            <IoLogoInstagram />
          </Link>
        </li> 
        <li>
          <Link to="https://twitter.com/">
            <RiTwitterXFill />
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/">
            <LuLinkedin />
          </Link>
        </li>
      </div>
      <p>&copy; 2024 Huddle. All rights reserved</p>
    </StyledFooter>
  );
}
export default Footer;
