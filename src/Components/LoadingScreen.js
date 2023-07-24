import React from "react";
import logo from "../Assets/ResQNYC-Logo.png";

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

      <h3>NY Strong: Together We Thrive...</h3>
    </div>
  );
};

export default LoadingScreen;
