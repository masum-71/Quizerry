import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const questions = useLoaderData();
  
  return (
    <div className="md:w-1/2 md:m-auto">
      <div className="mt-20">
      <LineChart width={500} height={300} data={questions.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="name" stroke="#82ca9d" />
      </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
