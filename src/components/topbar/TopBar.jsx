import React from "react";
import * as IoIcons from "react-icons/io";
import profile from "../images/profile.jpg";
import { TopBarContainer, Left, Right } from "./TopBar.styled";

const TopBar = () => {
  return (
    <TopBarContainer>
      <Left>
        <h3>Tennesy Tech</h3>
      </Left>
      <Right>
        <div>
          <IoIcons.IoMdNotificationsOutline
            style={{ fontSize: "2rem", color: "#555555" }}
          />
          <span>2</span>
        </div>
        <div>
          <IoIcons.IoMdGlobe style={{ fontSize: "2rem", color: "#555555" }} />
          <span>2</span>
        </div>
        <div>
          <IoIcons.IoMdSettings
            style={{ fontSize: "2rem", color: "#555555" }}
          />
          <span>2</span>
        </div>
        <div>
          <img className="profile" src={profile} alt="" />
        </div>
      </Right>
    </TopBarContainer>
  );
};

export default TopBar;
