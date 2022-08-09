import React from "react";
import profile from "../../../images/profile.jpg";
import {
  WidgethsContainer,
  SmallWidgets,
  LargeWidgets,
} from "./Widgets.styled";

export const Widgets = () => {
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
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: "2px solid gray",
              minWidth: "100%",
            }}
          >
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
            <button> Show Them </button>
          </li>
        </ul>
      </SmallWidgets>
      <LargeWidgets>
        <h5> Latest Transactions </h5>
      </LargeWidgets>
    </WidgethsContainer>
  );
};
