import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import API from "../api/api";
import GeneralContext from "./GeneralContext";
import "./Menu.css";

const Menu = () => {
  const { profile, updateProfile } = useContext(GeneralContext);

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // =========================
  // LOAD PROFILE
  // =========================

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await API.get("/user/profile");

        if (res.data.success && res.data.profile) {
          updateProfile(res.data.profile);
        }
      } catch (error) {
        console.log("Menu Profile Error:", error);
      }
    };

    // Context me profile nahi hai tabhi API call karo
    if (!profile) {
      loadProfile();
    }
  }, [profile, updateProfile]);

  // =========================
  // PROFILE CLICK
  // =========================

  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  // =========================
  // CLOSE DROPDOWN
  // =========================

  const closeDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  // =========================
  // LOGOUT
  // =========================

  const logout = () => {
    // Current theme get karo
    const theme = localStorage.getItem("theme") || "light";
    // Token remove karo
    localStorage.removeItem("token");
    // Frontend ko theme ke saath open karo
    window.location.href = `https://tradenest-frontend-b84l.onrender.com/?theme=${theme}`;
  };

  // =========================
  // USER NAME
  // =========================

  const userName = profile?.name || "User";

  // =========================
  // USER INITIALS
  // =========================

  const initials = userName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="menu-container">
      {/* =========================
          LOGO
      ========================= */}

      <Link to="/" className="logo-link" onClick={closeDropdown}>
        <img
          src="https://github.com/apna-college/zerodha-clone/blob/36-plotting-graphs-with-chartJS/dashboard/public/logo.png?raw=true"
          alt="Zerodha Logo"
          className="logo"
        />
      </Link>

      {/* =========================
          MENUS
      ========================= */}

      <div className="menus">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              onClick={closeDropdown}
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              onClick={closeDropdown}
            >
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/holdings"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              onClick={closeDropdown}
            >
              Holdings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/positions"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              onClick={closeDropdown}
            >
              Positions
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/funds"
              className={({ isActive }) =>
                isActive ? "menu selected" : "menu"
              }
              onClick={closeDropdown}
            >
              Funds
            </NavLink>
          </li>
        </ul>

        <hr />

        {/* =========================
            PROFILE
        ========================= */}

        <div className="profile">
          <div className="profile-trigger" onClick={handleProfileClick}>
            {/* Dynamic Avatar */}

            <div className="avatar">{initials || "U"}</div>

            {/* Dynamic Name */}

            <p className="username">{userName}</p>
          </div>

          {/* =========================
              DROPDOWN
          ========================= */}

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              {/* PROFILE */}

              <Link
                to="/profile"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                <span className="dropdown-icon">👤</span>

                <span>Profile</span>
              </Link>

              {/* SETTINGS */}

              <Link
                to="/settings"
                className="dropdown-item"
                onClick={closeDropdown}
              >
                <span className="dropdown-icon">⚙️</span>

                <span>Settings</span>
              </Link>

              {/* DIVIDER */}

              <div className="dropdown-divider" />

              {/* LOGOUT */}

              <button
                type="button"
                className="dropdown-item logout-item"
                onClick={logout}
              >
                <span className="dropdown-icon">🚪</span>

                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
