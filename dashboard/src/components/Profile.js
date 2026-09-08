import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import API from "../api/api";
import { toast } from "react-hot-toast";

import GeneralContext from "./GeneralContext";

import "./Profile.css";

const Profile = () => {
  // =========================
  // GLOBAL PROFILE CONTEXT
  // =========================

  const { updateProfile } = useContext(GeneralContext);

  // =========================
  // STATES
  // =========================

  const [profile, setProfile] = useState(null);

  const [editMode, setEditMode] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  // =========================
  // GET PROFILE
  // =========================

  const loadProfile = async () => {
    try {
      const res = await API.get("/user/profile");

      if (!res.data.success) {
        toast.error("Failed to load profile");
        return;
      }

      const userProfile = res.data.profile;

      // Profile page update
      setProfile(userProfile);

      // Form update
      setFormData({
        fullName: userProfile.name || "",
        email: userProfile.email || "",
      });

      // 🔥 Global context update
      // Menu bhi update hoga
      updateProfile(userProfile);

    } catch (err) {
      console.log("Profile Error:", err);

      toast.error(
        err.response?.data?.message ||
          "Failed to load profile"
      );
    }
  };

  // =========================
  // LOAD PROFILE ON PAGE LOAD
  // =========================

  useEffect(() => {
    loadProfile();
  }, []);

  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // UPDATE PROFILE
  // =========================

  const updateUserProfile = async () => {
    // Validate name
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return;
    }

    // Validate email
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await API.put(
        "/user/profile",
        {
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
        }
      );

      if (res.data.success) {
        toast.success(
          "Profile Updated Successfully"
        );

        // =========================
        // UPDATED PROFILE
        // =========================

        const updatedProfile = {
          ...profile,
          ...res.data.profile,
        };

        // =========================
        // UPDATE PROFILE PAGE
        // =========================

        setProfile(updatedProfile);

        // =========================
        // UPDATE FORM
        // =========================

        setFormData({
          fullName: updatedProfile.name || "",
          email: updatedProfile.email || "",
        });

        // =========================
        // 🔥 UPDATE GLOBAL CONTEXT
        // =========================
        // Isse Menu immediately update hoga

        updateProfile(updatedProfile);

        // =========================
        // CLOSE EDIT MODE
        // =========================

        setEditMode(false);
      }

    } catch (err) {
      console.log(
        "Update Profile Error:",
        err
      );

      toast.error(
        err.response?.data?.message ||
          "Update Failed"
      );

    } finally {
      setLoading(false);
    }
  };

  // =========================
  // CANCEL EDIT
  // =========================

  const cancelEdit = () => {
    setEditMode(false);

    setFormData({
      fullName: profile?.name || "",
      email: profile?.email || "",
    });
  };

  // =========================
  // LOADING
  // =========================

  if (!profile) {
    return (
      <div className="profile-loading">
        Loading Profile...
      </div>
    );
  }

  // =========================
  // UI
  // =========================

  return (
    <div className="profile-container">

      <div className="profile-card">

        {/* =========================
            PROFILE HEADER
        ========================= */}

        <div className="profile-top">

          {/* Avatar */}

          <div className="profile-avatar">
            {(profile.name || "U")
              .trim()
              .split(/\s+/)
              .filter(Boolean)
              .map((word) =>
                word.charAt(0)
              )
              .join("")
              .substring(0, 2)
              .toUpperCase()}
          </div>

          {/* Name */}

          <h2>
            {profile.name}
          </h2>

          {/* Email */}

          <p>
            {profile.email}
          </p>

          {/* Edit Button */}

          {!editMode && (
            <button
              className="edit-btn"
              onClick={() =>
                setEditMode(true)
              }
            >
              ✏ Edit Profile
            </button>
          )}

        </div>

        {/* =========================
            PROFILE BODY
        ========================= */}

        <div className="profile-body">

          {editMode ? (
            <>
              {/* FULL NAME */}

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

              </div>

              {/* EMAIL */}

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />

              </div>

              {/* BUTTONS */}

              <div className="profile-actions">

                <button
                  className="save-btn"
                  onClick={updateUserProfile}
                  disabled={loading}
                >
                  {loading
                    ? "Saving..."
                    : "💾 Save"}
                </button>

                <button
                  className="cancel-btn"
                  onClick={cancelEdit}
                  disabled={loading}
                >
                  Cancel
                </button>

              </div>
            </>

          ) : (

            <>
              {/* WALLET */}

              <div className="info-row">

                <span className="info-title">
                  💰 Wallet Balance
                </span>

                <span className="info-value">
                  ₹
                  {Number(
                    profile.wallet || 0
                  ).toLocaleString(
                    "en-IN",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
                </span>

              </div>

              {/* HOLDINGS */}

              <div className="info-row">

                <span className="info-title">
                  📊 Holdings
                </span>

                <span className="info-value">
                  {profile.holdings || 0} Stocks
                </span>

              </div>

              {/* ORDERS */}

              <div className="info-row">

                <span className="info-title">
                  📦 Orders
                </span>

                <span className="info-value">
                  {profile.orders || 0} Orders
                </span>

              </div>

              {/* MEMBER SINCE */}

              <div className="info-row">

                <span className="info-title">
                  📅 Member Since
                </span>

                <span className="info-value">

                  {profile.joined
                    ? new Date(
                        profile.joined
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )
                    : "N/A"}

                </span>

              </div>

            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default Profile;