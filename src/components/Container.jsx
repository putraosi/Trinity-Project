import React from "react";

const Container = ({ className, children, title }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        {title}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: 16,
          backgroundColor: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
