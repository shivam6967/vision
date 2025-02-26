import React from "react";
import robo from "../assets/robo.png"; // Ensure correct import path

const MainPoster = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        backgroundColor: "#ffffff", // Ensure a visible background
      }}
    >
      <img
        src={robo}
        alt="Main Poster"
        style={{
          width: "100%",
          maxWidth: "900px", // Adjust as needed
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds a shadow effect
          border: "2px solid #ddd", // Light border for visibility
          objectFit: "contain", // Ensures the full image is visible
        }}
      />
    </div>
  );
};

export default MainPoster;
