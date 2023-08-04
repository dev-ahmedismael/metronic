import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "08:00",
    pv: 65,
    amt: 90,
  },
  {
    name: "09:00",
    pv: 80,
    amt: 110,
  },
  {
    name: "10:00",
    pv: 80,
    amt: 110,
  },
  {
    name: "11:00",
    pv: 60,
    amt: 95,
  },
  {
    name: "12:00",
    pv: 60,
    amt: 95,
  },
  {
    name: "13:00 ",
    pv: 45,
    amt: 85,
  },
  {
    name: "14:00 ",
    pv: 45,
    amt: 85,
  },
  {
    name: "15:00 ",
    pv: 80,
    amt: 95,
  },
  {
    name: "16:00 ",
    pv: 80,
    amt: 95,
  },
  {
    name: "17:00 ",
    pv: 70,
    amt: 115,
  },
  {
    name: "18:00 ",
    pv: 70,
    amt: 115,
  },
  {
    name: "19:00 ",
    pv: 90,
    amt: 100,
  },
  {
    name: "20:00 ",
    pv: 90,
    amt: 100,
  },
  {
    name: "21:00",
    pv: 80,
    amt: 115,
  },
  {
    name: "22:00 ",
    pv: 80,
    amt: 115,
  },
  {
    name: "23:00 ",
    pv: 80,
    amt: 95,
  },
  {
    name: "00:00 ",
    pv: 60,
    amt: 95,
  },
  {
    name: "01:00 ",
    pv: 60,
    amt: 85,
  },
  {
    name: "02:00 ",
    pv: 50,
    amt: 85,
  },
];

const HomeSecEightChart = () => {
    return (
      <ResponsiveContainer width="100%" height="75%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" unit="AM" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#12A0E4"
            fill="#C9E5ED"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="2"
            stroke="#50CD89"
            fill="#E2F6EB"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  export default HomeSecEightChart