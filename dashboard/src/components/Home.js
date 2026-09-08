import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const urlToken = new URLSearchParams(
    window.location.search
  ).get("token");

  if (urlToken) {
    localStorage.setItem("token", urlToken);

    window.history.replaceState(
      {},
      document.title,
      "/"
    );
  }

  const token =
    urlToken || localStorage.getItem("token");

  console.log("Dashboard token:", token);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;


