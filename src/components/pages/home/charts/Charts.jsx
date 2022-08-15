import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";
import { Widgets } from "../widgets/HomeComp";

const Charts = ({ title, data, datakey, grid }) => {
  return (
    <div>
      <div style={{ paddingTop: "1rem" }}>
        <h3> {title}</h3>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <Line type="monotone" dataKey={datakey} stroke="teal" />
            <Tooltip />
            {grid && <CartesianGrid stroke="teal" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Widgets />
    </div>
  );
};

export default Charts;
