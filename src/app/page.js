"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Data } from "./Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Crypto Sentiment",
    },
  },
};

const labels = Data.map((d) => d.date);
const averages = Data.map(
  (d) =>
    (d.ansemFollowerPercent + d.btcFG + d.coinbaseRank + d.googleSearchTrend) /
    4
);
console.log("averages", averages);
export const data = {
  labels,
  datasets: [
    {
      label: "Ansem Follower percent of 500k",
      data: Data.map((d) => d.ansemFollowerPercent),
      borderColor: "rgb(255, 99, 132, 0.3)",
      backgroundColor: "rgba(255, 99, 132, 0.3)",
    },
    {
      label: "BTC fear and greed",
      data: Data.map((d) => d.btcFG),
      borderColor: "rgb(53, 162, 235, 0.3)",
      backgroundColor: "rgba(53, 162, 235, 0.3)",
    },
    {
      label: "Coinbase distance from top normalized",
      data: Data.map((d) => d.coinbaseRank),
      borderColor: "rgb(255, 199, 33, 0.3)",
      backgroundColor: "rgba(255, 199, 32, 0.3)",
    },
    {
      label: "Google search trending (btc)",
      data: Data.map((d) => d.googleSearchTrend),
      borderColor: "rgb(53, 62, 235, 0.3)",
      backgroundColor: "rgba(53, 62, 235, 0.3)",
    },
    {
      label: "Average",
      data: averages,
      borderColor: "rgb(0, 0, 0, 1)",
      backgroundColor: "rgba(0, 0, 0, 1)",
    },
  ],
};

export default function App() {
  return (
    <main style={{ margin: "10%" }}>
      <Line options={options} data={data} />;
    </main>
  );
}
