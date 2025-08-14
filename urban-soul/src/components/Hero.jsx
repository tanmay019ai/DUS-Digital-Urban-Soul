import React from "react";
import "../index.css";
import lightningVideo from "../assets/120382-720505197_large.mp4";

export default function Hero() {
  return (
    <div className="hero-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lightning-video"
      >
        <source src={lightningVideo} type="video/mp4" />
      </video>

    
      <div className="typing-text">
        WELCOME TO URBAN SOUL, THE CITY THAT HOLDS YOUR KARMA
      </div>
    </div>
  );
}
