import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import "./Settings.css";

const Settings = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <div className="settings-card">
        <h2>⚙️ Settings</h2>

        {/* Dark Mode */}
        <div className="setting-item">
          <span>🌙 Dark Mode</span>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "ON" : "OFF"}
          </button>
        </div>

        {/* Change Password */}
        <div className="setting-item">
          <span>🔑 Change Password</span>

          <button onClick={() => navigate("/change-password")}>Open</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
