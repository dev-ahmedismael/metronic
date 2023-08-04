import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  Legend,
} from "recharts";

const data = [
  { x: 125, y: 300, z: 40, color: "#009EF7", title: "Social Campaigns" },
  { x: 250, y: 350, z: 35, color: "#50CD89", title: "Email Newsletter" },
  { x: 350, y: 450, z: 30, color: "#FFC700", title: "Courses" },
  { x: 450, y: 250, z: 25, color: "#F1416C", title: "Google Ads" },
  { x: 500, y: 500, z: 30, color: "#7239EA", title: "TV Campaign" },
  { x: 600, y: 250, z: 28, color: "#43CED7", title: "Radio" },
  { x: 700, y: 700, z: 0, color: "", title: "" },
];

const HomeSecFiveChart = () => {

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid/>
          <XAxis
            type="number"
            dataKey="x"
            name="Clicks"
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Cost"
          />
          <ZAxis
            type="number"
            dataKey="z"
            name="Impression"
            range={[0, 5000]}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          {data.map((e, index) => (
            <Scatter key={index} name={e.title} data={[e]} fill={e.color} />
          ))}
          <Legend />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

  export default HomeSecFiveChart 