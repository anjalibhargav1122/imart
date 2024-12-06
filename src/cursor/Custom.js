import React, { useRef, useState } from "react";

const EmailInputWithStrengthLine = () => {
  const emailInputRef = useRef(null);
  const strengthLineRef = useRef(null);
  const [lineOpacity, setLineOpacity] = useState(0);

  const handleMouseEnter = () => setLineOpacity(1);
  const handleMouseLeave = () => setLineOpacity(0);

  const handleMouseMove = (event) => {
    const rect = emailInputRef.current.getBoundingClientRect();
    const xPosition = event.clientX - rect.left;
    strengthLineRef.current.style.transform = `translateX(${xPosition - 25}px) rotate(90deg)`;
  };

  return (
    <div
      className="container"
      style={{ position: "relative", width: "300px" }}
    >
      <input
        type="email"
        ref={emailInputRef}
        placeholder="Enter your email"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #ddd",
          borderRadius: "5px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      <div
        ref={strengthLineRef}
        className="strength-line"
        style={{
          position: "absolute",
          top: "20px",
          width: "35px",
          height: "2px",
          backgroundColor: "#4caf50",
          borderRadius: "2.5px",
          opacity: lineOpacity,
          transition: "opacity 0.2s ease",
        }}
      />
    </div>
  );
};

export default EmailInputWithStrengthLine;
