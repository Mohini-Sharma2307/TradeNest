import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import "./index.css";
import Home from "./components/Home";
import { ThemeProvider } from "./components/ThemeContext";
import { GeneralContextProvider } from "./components/GeneralContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>

    <ThemeProvider>

      {/* BrowserRouter should be outside Context */}
      <BrowserRouter>

        <GeneralContextProvider>

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
            }}
          />

          <Routes>
            <Route
              path="/*"
              element={<Home />}
            />
          </Routes>

        </GeneralContextProvider>

      </BrowserRouter>

    </ThemeProvider>

  </React.StrictMode>
);