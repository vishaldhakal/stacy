import React from "react";

const layout = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[95vw] lg:max-w-7xl">{children}</div>
  );
};

export default layout;
