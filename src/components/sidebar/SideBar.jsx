import React from "react";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarContainer } from "./SideBar.styled";

const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
        <h5>Dashboard</h5>
        <Link to="/">
          <IoIcons.IoMdHome /> Home
        </Link>
        <Link to="/analytics">
          <IoIcons.IoMdAnalytics /> Analytic
        </Link>
        <Link to="/sales">
          <IoIcons.IoMdEasel /> Sales
        </Link>
      </div>
      <div>
        <h5>Quick Menu</h5>
        <Link to="/userlist">
          <FaIcons.FaUser /> Users
        </Link>
        <Link to="product">
          <FaIcons.FaProductHunt /> Product
        </Link>
        <Link to="translation">
          <FaIcons.FaDollarSign /> Translations
        </Link>
        <Link to="reports">
          <AiIcons.AiFillRedEnvelope /> Reports
        </Link>
      </div>
      <div>
        <h5>Notifications</h5>
        <Link to="mail">
          <AiIcons.AiOutlineMail /> Mail
        </Link>
        <Link to="feedback">
          <AiIcons.AiFillRedEnvelope /> Feedback
        </Link>
        <Link to="message">
          <AiIcons.AiFillMessage /> Messages
        </Link>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
