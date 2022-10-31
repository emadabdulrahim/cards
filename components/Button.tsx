import * as React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      style={{ backgroundColor: "orange", border: "none", color: "white" }}
    >
      {children}
    </button>
  );
};
