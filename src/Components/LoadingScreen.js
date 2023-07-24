import React from "react";
import logo from "../assets/ResQNYC-Logo.png";

const LoadingScreen = () => {
  const loadingScreenStyle = {
    backgroundColor: "white",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={loadingScreenStyle}
    >
      <img src={logo} alt="Logo" width={200} height={200} />

      <h1>NY Strong: Together We Thrive...</h1>
    </div>
  );
};

export default LoadingScreen;
