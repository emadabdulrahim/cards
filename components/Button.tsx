import * as React from "react";

export const Button: React.FC = ({ children }) => {
  return (
    <button
      style={{ backgroundColor: "orange", border: "none", color: "white" }}
    >
      {children}
    </button>
  );
};
