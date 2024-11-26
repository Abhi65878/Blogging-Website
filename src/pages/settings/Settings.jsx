
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./settings.css";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    "Img\\peacock_profile_514065.jpg"
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setFeedback("Please fill out all fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFeedback("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setFeedback("Password should be at least 6 characters.");
      return;
    }
    setFeedback("Account updated successfully!");
    // Perform update logic here (e.g., API call)
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setShowDeleteConfirm(false);
    alert("Account deleted successfully!");
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">
            {/* <Link to="/dashboard">DashBoard</Link> */}
            <i class="fa-regular fa-user"></i>
          </span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </span>
        </div>

        <form className="settingsForm" onSubmit={handleUpdate}>
          <label className="label">Profile Picture</label>
          <div className="settingsPP">
            <img src={profilePicture} alt="Profile Preview" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              className="hiddenFileInput"
              onChange={handleFileChange}
            />
          </div>

          <label className="label">Username</label>
          <input
            className="label-input"
            type="text"
            placeholder="Enter User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="label">Email</label>
          <input
            className="label-input"
            type="email"
            placeholder="john@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            className="label-input"
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="settingsSubmit">Update</button>
          {feedback && <div className="feedbackMessage">{feedback}</div>}
        </form>

        {showDeleteConfirm && (
          <div className="deleteConfirmOverlay">
            <div className="deleteConfirmBox">
              <p>Are you sure you want to delete your account?</p>
              <button onClick={confirmDelete}>Yes, Delete</button>
              <button onClick={() => setShowDeleteConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

