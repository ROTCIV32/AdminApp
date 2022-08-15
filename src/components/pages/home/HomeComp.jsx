import React from "react";
import Charts from "./charts/Charts";
import { ChatData } from "./charts/ChartsData";
import * as IoIcons from "react-icons/io";

import { HomeContainer, Features } from "./HomeComp.styled";

const HomeComp = () => {
  return (
    <HomeContainer>
      <Features>
        <div>
          <h5>Revenue</h5>
          <p>
            #56577888{" "}
            <span style={{ color: "green", fontSize: "1.3rem" }}>
              {" "}
              <IoIcons.IoMdArrowDown />{" "}
            </span>{" "}
          </p>
          <p>Compared to last month</p>
        </div>
        <div>
          <h5>Sales</h5>
          <p>
            #56577888{" "}
            <span style={{ color: "blue", fontSize: "1.3rem" }}>
              {" "}
              <IoIcons.IoMdArrowDown />{" "}
            </span>{" "}
          </p>
          <p>Compared to last month</p>
        </div>
        <div>
          <h5>Cost</h5>
          <p>
            #56577888{" "}
            <span style={{ color: "red", fontSize: "1.3rem" }}>
              {" "}
              <IoIcons.IoMdArrowDown />{" "}
            </span>{" "}
          </p>
          <p>Compared to last month</p>
        </div>
        <div>
          <h5>Others</h5>
          <p>
            #56577888{" "}
            <span style={{ color: "purple", fontSize: "1.3rem" }}>
              {" "}
              <IoIcons.IoMdArrowDown />{" "}
            </span>{" "}
          </p>
          <p>Compared to last month</p>
        </div>
      </Features>
      <Charts
        data={ChatData}
        title="User Analytics"
        grid
        datakey="Active User"
      />
    </HomeContainer>
  );
};

export default HomeComp;
