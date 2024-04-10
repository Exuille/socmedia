import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
// import defaultUser from "../assets/defaultUser.png";
import "../styles/NewsfeedBar.css";

interface ButtonProps {
  active: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) =>
    props.active ? "black" : "transparent"};
  cursor: pointer;
  border: none;
`;

const StyledLink = styled(Link)<ButtonProps>`
  text-decoration: none;
  color: ${(props: ButtonProps) => (props.active ? "white" : "black")};
`;

const NewsfeedBar = () => {
  const location = useLocation();

  return (
    <div className="nav-side">
      <img src="./src/assets/test-logo.png" className="logo" alt="" />
      {/* <img src={defaultUser} className="userProfile" alt="user_profile" />
      <label className="editProfile">Edit Profile</label>
      <br />
      <label style={{ fontWeight: "bold" }}>
        Jeff Lawrence Corona Balbuena
      </label>
      <label style={{ fontSize: "0.8rem", color: "#a0a2a4" }}>
        @notme.lawrencio
      </label>
      <div className="display-count">
        <label>
          <span style={{ fontWeight: "bold" }}>1</span>
          <br />
          Shared Post
        </label>
        <label>
          <span style={{ fontWeight: "bold" }}>1</span>
          <br />
          Followers
        </label>
        <label>
          <span style={{ fontWeight: "bold" }}>1</span>
          <br />
          Following
        </label>
      </div> */}
      <div className="button-nav">
        <StyledButton active={location.pathname.startsWith("/user")}>
          <StyledLink to="/user" active={location.pathname.startsWith("/user")}>
            Profile
          </StyledLink>
        </StyledButton>
        <StyledButton active={location.pathname.startsWith("/feed")}>
          <StyledLink to="/feed" active={location.pathname.startsWith("/feed")}>
            Newsfeed
          </StyledLink>
        </StyledButton>
        <StyledButton active={location.pathname.startsWith("/messages")}>
          <StyledLink
            to="/messages"
            active={location.pathname.startsWith("/messages")}
          >
            Messages
          </StyledLink>
        </StyledButton>
        <StyledButton active={location.pathname.startsWith("/friends")}>
          <StyledLink
            to="/friends"
            active={location.pathname.startsWith("/friends")}
          >
            Friends
          </StyledLink>
        </StyledButton>
        <StyledButton active={location.pathname.startsWith("/settings")}>
          <StyledLink
            to="/settings"
            active={location.pathname.startsWith("/settings")}
          >
            Settings
          </StyledLink>
        </StyledButton>
      </div>
      {/* <button className="follow-btn">Follow</button> */}
    </div>
  );
};

export default NewsfeedBar;
