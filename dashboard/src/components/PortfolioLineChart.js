import React, { useEffect, useState } from "react";
import API from "../api/api";
import "./PortfolioLineChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const PortfolioLineChart = () => {
  const [portfolio, setPortfolio] = useState([]);

  const [darkMode, setDarkMode] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    loadPortfolio();

    // Automatically update portfolio every 5 seconds
    const interval = setInterval(() => {
      loadPortfolio();
    },1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Detect Dark / Light Mode
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(
        document.documentElement.getAttribute("data-theme") === "dark"
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const loadPortfolio = async () => {
    try {
      const res = await API.get("/dashboard/portfolio");
      setPortfolio(res.data.portfolio);
    } catch (err) {
      console.log(err);
    }
  };

  // Chart Colors
  const textColor = darkMode ? "#ffffff" : "#666666";
  const gridColor = darkMode ? "#333333" : "#e6e6e6";

  const data = {
    labels: portfolio.map((item) => item.name),

    datasets: [
      {
        label: "Portfolio Value",

        data: portfolio.map((item) => item.value),

        borderColor: "#387ed1",

        backgroundColor: "rgba(56,126,209,0.15)",

        fill: true,

        tension: 0.4,

        pointRadius: 5,

        pointBackgroundColor: "#387ed1",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        titleColor: darkMode ? "#ffffff" : "#222222",

        bodyColor: darkMode ? "#ffffff" : "#222222",

        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",

        borderColor: darkMode ? "#333333" : "#e6e6e6",

        borderWidth: 1,
      },
    },

    scales: {
      x: {
        ticks: {
          color: textColor,
        },

        grid: {
          color: gridColor,
        },
      },

      y: {
        ticks: {
          color: textColor,
        },

        grid: {
          color: gridColor,
        },
      },
    },
  };

  return (
    <div className="portfolio-chart">
      <h3>📈 Portfolio Performance</h3>

      <Line data={data} options={options} />
    </div>
  );
};

export default PortfolioLineChart;


