import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import API from "../api/api";
import "./Summary.css";

import PortfolioLineChart from "./PortfolioLineChart";
import RecentOrders from "./RecentOrders";

import GeneralContext from "./GeneralContext";

const Summary = () => {
  const { refreshData } = useContext(GeneralContext);

  const [dashboard, setDashboard] = useState(null);
  const [profile, setProfile] = useState(null);

  // =========================
  // FETCH DATA
  // =========================

  useEffect(() => {
    fetchDashboard();
    fetchProfile();
  }, [refreshData]);

  // =========================
  // FETCH DASHBOARD
  // =========================

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/dashboard");

      console.log(
        "Updated Dashboard:",
        res.data
      );

      setDashboard(res.data);
    } catch (error) {
      console.log(
        "Dashboard Error:",
        error
      );
    }
  };

  // =========================
  // FETCH PROFILE
  // =========================

  const fetchProfile = async () => {
    try {
      const res = await API.get(
        "/user/profile"
      );

      setProfile(res.data.profile);
    } catch (error) {
      console.log(
        "Profile Error:",
        error
      );
    }
  };

  // =========================
  // LOADING
  // =========================

  if (!dashboard || !profile) {
    return (
      <div
        style={{
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h3>
          Loading Dashboard...
        </h3>
      </div>
    );
  }

  return (
    <div className="summary-container">

      {/* =========================
          GREETING
      ========================= */}

      <div className="username">

        <h2>
          👋 Hi, {profile.name}
        </h2>

        <p>
          Welcome back! Here's your
          portfolio overview.
        </p>

        <hr className="divider" />

      </div>

      {/* =========================
          SUMMARY CARDS
      ========================= */}

      <div className="summary-cards">

        {/* WALLET BALANCE */}

        <div className="summary-card">

          <h4>
            💰 Wallet Balance
          </h4>

          <h2>
            ₹
            {Number(
              dashboard.walletBalance || 0
            ).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>

          <p>
            Available Balance
          </p>

        </div>

        {/* INVESTMENT */}

        <div className="summary-card">

          <h4>
            💵 Investment
          </h4>

          <h2>
            ₹
            {Number(
              dashboard.totalInvestment || 0
            ).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>

          <p>
            Total Invested
          </p>

        </div>

        {/* CURRENT VALUE */}

        <div className="summary-card">

          <h4>
            📈 Current Value
          </h4>

          <h2>
            ₹
            {Number(
              dashboard.currentValue || 0
            ).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>

          <p>
            Live Portfolio Value
          </p>

        </div>

        {/* PROFIT / LOSS */}

        <div className="summary-card">

          <h4>
            📊 Profit / Loss
          </h4>

          <h2
            className={
              Number(
                dashboard.profitLoss || 0
              ) >= 0
                ? "profit"
                : "loss"
            }
          >
            ₹
            {Number(
              dashboard.profitLoss || 0
            ).toLocaleString("en-IN", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>

          <p>
            Overall Performance
          </p>

        </div>

      </div>

      {/* =========================
          RECENT ORDERS
      ========================= */}

      <RecentOrders />

      {/* =========================
          PORTFOLIO CHART
      ========================= */}

      <PortfolioLineChart />

    </div>
  );
};

export default Summary;