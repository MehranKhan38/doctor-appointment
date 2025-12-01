import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Doctor Appointment Booking System</h1>
      <p>Welcome to our appointment management platform</p>
      <div style={{ marginTop: "30px" }}>
        <Link to="/login" style={{ margin: "10px", padding: "10px 20px", textDecoration: "none", backgroundColor: "#1890ff", color: "white", borderRadius: "5px" }}>
          Login
        </Link>
        <Link to="/register" style={{ margin: "10px", padding: "10px 20px", textDecoration: "none", backgroundColor: "#52c41a", color: "white", borderRadius: "5px" }}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
