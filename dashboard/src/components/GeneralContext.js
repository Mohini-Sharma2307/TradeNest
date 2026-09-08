import React, { useState, useCallback } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import AnalyticsWindow from "./AnalyticsWindow";

// ======================================
// GENERAL CONTEXT
// ======================================

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},

  openSellWindow: () => {},
  closeSellWindow: () => {},

  openAnalyticsWindow: () => {},
  closeAnalyticsWindow: () => {},

  profile: null,
  updateProfile: () => {},

  // Dashboard refresh
  refreshData: false,
  refreshDashboard: () => {},

  // Positions refresh
  refreshPositionsData: false,
  refreshPositions: () => {},
});

// ======================================
// PROVIDER
// ======================================

export const GeneralContextProvider = ({ children }) => {
  // ======================================
  // BUY / SELL / ANALYTICS STATES
  // ======================================

  const [isBuyWindowOpen, setIsBuyWindowOpen] =
    useState(false);

  const [isSellWindowOpen, setIsSellWindowOpen] =
    useState(false);

  const [isAnalyticsWindowOpen, setIsAnalyticsWindowOpen] =
    useState(false);

  const [selectedStockUID, setSelectedStockUID] =
    useState("");

  // ======================================
  // GLOBAL PROFILE STATE
  // ======================================

  const [profile, setProfile] = useState(null);

  // ======================================
  // DASHBOARD REFRESH STATE
  // ======================================

  const [refreshData, setRefreshData] = useState(false);

  const refreshDashboard = useCallback(() => {
    console.log("🔥 DASHBOARD REFRESH TRIGGERED");

    setRefreshData((prev) => !prev);
  }, []);

  // ======================================
  // POSITIONS REFRESH STATE
  // ======================================

  const [refreshPositionsData, setRefreshPositionsData] =
    useState(false);

  const refreshPositions = useCallback(() => {
    console.log("📍 POSITIONS REFRESH TRIGGERED");

    setRefreshPositionsData((prev) => !prev);
  }, []);

  // ======================================
  // UPDATE GLOBAL PROFILE
  // ======================================

  const updateProfile = useCallback((newProfile) => {
    if (!newProfile) {
      return;
    }

    console.log(
      "GLOBAL PROFILE UPDATED:",
      newProfile
    );

    setProfile((currentProfile) => ({
      ...(currentProfile || {}),
      ...newProfile,
    }));
  }, []);

  // ======================================
  // BUY WINDOW
  // ======================================

  const openBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // ======================================
  // SELL WINDOW
  // ======================================

  const openSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsSellWindowOpen(true);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  // ======================================
  // ANALYTICS WINDOW
  // ======================================

  const openAnalyticsWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsAnalyticsWindowOpen(true);
  };

  const closeAnalyticsWindow = () => {
    setIsAnalyticsWindowOpen(false);
    setSelectedStockUID("");
  };

  // ======================================
  // PROVIDER
  // ======================================

  return (
    <GeneralContext.Provider
      value={{
        // BUY
        openBuyWindow,
        closeBuyWindow,

        // SELL
        openSellWindow,
        closeSellWindow,

        // ANALYTICS
        openAnalyticsWindow,
        closeAnalyticsWindow,

        // PROFILE
        profile,
        updateProfile,

        // DASHBOARD REFRESH
        refreshData,
        refreshDashboard,

        // POSITIONS REFRESH
        refreshPositionsData,
        refreshPositions,
      }}
    >
      {children}

      {/* ======================================
          BUY WINDOW
      ====================================== */}

      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
        />
      )}

      {/* ======================================
          SELL WINDOW
      ====================================== */}

      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedStockUID}
        />
      )}

      {/* ======================================
          ANALYTICS WINDOW
      ====================================== */}

      {isAnalyticsWindowOpen && (
        <AnalyticsWindow
          uid={selectedStockUID}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;