import React from "react";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarContainer } from "./SideBar.styled";

const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li>
            <span>
              <IoIcons.IoMdHome /> Home
            </span>
          </li>
          <li>
            <span>
              <IoIcons.IoMdAnalytics /> Analytic
            </span>
          </li>
          <li>
            <span>
              <IoIcons.IoMdEasel /> Sales
            </span>
          </li>
        </ul>
      </div>
      {/* Quick Search */}
      <div>
        <h5>Quick Menu</h5>
        <ul>
          <li>
            <span>
              <FaIcons.FaUser /> Users
            </span>
          </li>
          <li>
            <span>
              <FaIcons.FaProductHunt /> Product
            </span>
          </li>
          <li>
            <span>
              <FaIcons.FaDollarSign /> Translations
            </span>
          </li>
          <li>
            <span>
              <AiIcons.AiFillRedEnvelope /> Reports
            </span>
          </li>
        </ul>
      </div>
      {/* Notifications */}
      <div>
        <h5>Notifications</h5>
        <ul>
          <li>
            <span>
              <AiIcons.AiOutlineMail /> Mail
            </span>
          </li>
          <li>
            <span>
              <AiIcons.AiFillRedEnvelope /> Feedback
            </span>
          </li>
          <li>
            <span>
              <AiIcons.AiFillMessage /> Messages
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h5>Staff</h5>
        <ul>
          <li>
            <span>
              <FaIcons.FaStackExchange /> Staff
            </span>
          </li>
          <li>
            <span>
              <AiIcons.AiFillApi /> Analytics
            </span>
          </li>
          <li>
            <span>
              <AiIcons.AiFillReconciliation /> Reports
            </span>
          </li>
        </ul>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
