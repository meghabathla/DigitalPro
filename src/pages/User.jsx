import { StyledUser } from "../styles/Styles";
import SignOutBtn from "../components/SignOutBtn";
import SignInBtn from "../components/SignInBtn";
import { TbUserSquareRounded } from "react-icons/tb";
import { PiShoppingBagOpenDuotone, PiTagBold } from "react-icons/pi";
import { MdCancelPresentation } from "react-icons/md";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { useAuth } from "../context/UserConetxt";

function User() {
  const { user, isAuthenticated } = useAuth();
  console.log(user);

  return (
    <StyledUser>
      {isAuthenticated ? (
        <>
          <header>Profile</header>
          <div className="user">
            <div className="userCard">
              <div className="profile">
                <img src={`${user.avatar_url}`} alt="userImage" />
                <div>
                  <p>Hello</p>
                  <span>{user.full_name}</span>
                </div>
              </div>
              <div className="profileActions">
                <div>
                  <TbUserSquareRounded />
                  <p>My Account</p>
                </div>
                <div>
                  <FaRegHeart />
                  <p>Wishlist</p>
                </div>
                <div>
                  <PiShoppingBagOpenDuotone />
                  <p>Orders</p>
                </div>
                <div>
                  <IoWalletOutline />
                  <p>Payments</p>
                </div>
                <div>
                  <FaRegStar />
                  <p>Ratings & Reviews</p>
                </div>
                <div>
                  <MdCancelPresentation />
                  <p>Cancel & Return</p>
                </div>
                <div>
                  <PiTagBold />
                  <p>Coupons</p>
                </div>
              </div>
              <SignOutBtn />
            </div>
            <div className="userDetails">
              <header>User Information</header>
              <main>
                <img src={`${user.avatar_url}`} alt="userImage" />
                <div className="info">
                  <div>
                    <span>Username:</span>
                    <p>{user.full_name}</p>
                  </div>
                  <div>
                    <span>Email:</span>
                    <p>{user.email}</p>
                  </div>
                  <SignOutBtn />
                </div>
              </main>
            </div>
          </div>
        </>
      ) : (
        <div className="userError">
          <p>Please Sign In to access this page</p>
          <SignInBtn />
        </div>
      )}
    </StyledUser>
  );
}

export default User;
