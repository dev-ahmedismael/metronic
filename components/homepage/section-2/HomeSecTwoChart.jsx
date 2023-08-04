"use client"
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";
import dynamic from "next/dynamic";

const data = [
  { name: "Leaf CRM", value: 400 },
  { name: "Mivy App", value: 300 },
  { name: "Others", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

export default class HomeSecTwoChart extends PureComponent {

  render() {
    const PieChart = dynamic(
      () => import("recharts").then((recharts) => recharts.PieChart),
      { ssr: false }
    );
    return (
        <PieChart width={110} height={110} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={50}
            cy={50}
            innerRadius={30}
            outerRadius={50}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
    );
  }
}
