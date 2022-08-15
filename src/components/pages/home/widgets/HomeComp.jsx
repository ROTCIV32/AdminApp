import React from "react";
import * as FaIcons from "react-icons/fa";
import profile from "../../../images/profile.jpg";
import {
  WidgethsContainer,
  SmallWidgets,
  LargeWidgets,
  LargeBody,
} from "./Widgets.styled";

export const Widgets = () => {
  const Button = ({ type }) => {
    return <button className={"buttons " + type}> {type} </button>;
  };
  return (
    <WidgethsContainer>
      <SmallWidgets
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
        }}
      >
        <h5> New Joined Members </h5>
        <ul>
          <li>
            <img src={profile} alt="my profile" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b>Anna Killer</b>
              <span style={{ color: "gray" }}>Software Engineer </span>
            </div>
            <button>
              {" "}
              <FaIcons.FaEye /> Show{" "}
            </button>
          </li>
          <li>
            <img src={profile} alt="my profile" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b>Anna Killer</b>
              <span style={{ color: "gray" }}>Software Engineer </span>
            </div>
            <button>
              {" "}
              <FaIcons.FaEye /> Show{" "}
            </button>
          </li>
          <li>
            <img src={profile} alt="my profile" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b>Anna Killer</b>
              <span style={{ color: "gray" }}>Software Engineer </span>
            </div>
            <button>
              {" "}
              <FaIcons.FaEye /> Show{" "}
            </button>
          </li>
          <li>
            <img src={profile} alt="my profile" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b>Anna Killer</b>
              <span style={{ color: "gray" }}>Software Engineer </span>
            </div>
            <button>
              {" "}
              <FaIcons.FaEye /> Show{" "}
            </button>
          </li>
          <li>
            <img src={profile} alt="my profile" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <b>Anna Killer</b>
              <span style={{ color: "gray" }}>Software Engineer </span>
            </div>
            <button>
              {" "}
              <FaIcons.FaEye /> Show{" "}
            </button>
          </li>
        </ul>
      </SmallWidgets>
      <LargeWidgets>
        <h5> Latest Transactions </h5>
        <LargeBody>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "left",
              textAlign: "left",
              backgroungColor: "yellow",
            }}
            className="trN"
          >
            <h5>
              {" "}
              <b> Customer </b>{" "}
            </h5>
            <h5>
              {" "}
              <b> Date </b>{" "}
            </h5>
            <h5>
              {" "}
              <b> Amount</b>{" "}
            </h5>
            <h5>
              {" "}
              <b> Status</b>{" "}
            </h5>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "left",
            }}
            className="trN"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <td style={{ marginLeft: "0.5rem" }}>
                  {" "}
                  <img src={profile} alt="profile" />{" "}
                </td>
                <b style={{ marginLeft: "0.5rem" }}> Susan Carol </b>
              </div>
            </div>
            <b> 3 June 2022 </b>
            <b> 09 August 2022</b>
            <Button type="Approved" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "left",
            }}
            className="trN"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ marginLeft: "0.5rem" }}>
                  {" "}
                  <img src={profile} alt="profile" />{" "}
                </div>
                <b style={{ marginLeft: "0.5rem" }}> Susan Carol </b>
              </div>
            </div>
            <b> 3 June 2022 </b>
            <b> 09 August 2022</b>
            <Button type="Declined" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "left",
            }}
            className="trN"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ marginLeft: "0.5rem" }}>
                  {" "}
                  <img src={profile} alt="profile" />{" "}
                </div>
                <b style={{ marginLeft: "0.5rem" }}> Susan Carol </b>
              </div>
            </div>
            <b> 3 June 2022 </b>
            <b> 09 August 2022</b>
            <Button type="Approved" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "left",
            }}
            className="trN"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <td style={{ marginLeft: "0.5rem" }}>
                  {" "}
                  <img src={profile} alt="profile" />{" "}
                </td>
                <b style={{ marginLeft: "0.5rem" }}> Susan Carol </b>
              </div>
            </div>
            <b> 3 June 2022 </b>
            <b> 09 August 2022</b>
            <Button type="Selected" />
          </div>
        </LargeBody>
      </LargeWidgets>
    </WidgethsContainer>
  );
};
