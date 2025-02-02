import React from "react";
import "../styles/core.css";

const Button = ({ children }) => (
  <button className="tw-bg-primary tw-font-display tw-px-4 tw-py-2">
    {children}
  </button>
)

export default Button;