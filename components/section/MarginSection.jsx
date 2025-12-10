import React from "react";

function MarginSection({ children,responsiveMargin=true }) {
  return (
    <div
      className={`mx-auto ${responsiveMargin ? "px-4 sm:px-6 lg:px-8" : ""} `}
      style={{ maxWidth: "83rem" }} 
    >
      {children}
    </div>
  );
}

export default MarginSection;
