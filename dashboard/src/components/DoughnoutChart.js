import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "right",

        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 18,
          font: {
            size: 14,
          },
        },
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ₹${context.raw.toLocaleString(
              "en-IN"
            )}`;
          },
        },
      },
    },

    cutout: "70%",
  };

  return (
    <div className="portfolio-card">
      <h3>Portfolio Allocation</h3>

      <div
        style={{
          position: "relative",
          height: "320px",
        }}
      >
        <Doughnut data={data} options={options} />

        {/* Center Text */}

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "35%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#333",
            }}
          >
            ₹{total.toLocaleString("en-IN")}
          </h2>

          <p
            style={{
              margin: 0,
              color: "#888",
            }}
          >
            Portfolio
          </p>
        </div>
      </div>
    </div>
  );
}