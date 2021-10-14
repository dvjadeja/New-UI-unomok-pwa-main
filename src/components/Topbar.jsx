import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: block !important;
  justify-content: space-between;
  background: #fcfcfc;
  text-align: right !important;
  .logo {
    padding: 15px 0;
  }
`;
const StyledAlignedImage = styled.img`
  align-self: center;
`;

const Topbar = () => {
  return (
    <>
      <Nav className="navbar-light">
        <div
          className="logo"
          style={{
            marginLeft: "75%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <StyledAlignedImage
            src={require("../assests/images/achievement.png").default}
          />
          <StyledAlignedImage
            src={require("../assests/images/Notification.png").default}
          />
          <StyledAlignedImage
            src={require("../assests/images/profile@2x.png").default}
          />
        </div>
      </Nav>
    </>
  );
};

export default Topbar;
