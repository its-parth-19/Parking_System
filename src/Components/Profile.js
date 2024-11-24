import React from "react";
import '../Styles/Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {user.name}</p> 
        
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Password:</strong> {user.password}</p>
      </div>
    </div>
  );
};

export default Profile;
