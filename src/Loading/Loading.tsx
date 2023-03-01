import React from "react";

const loadingStyles = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

function Loading({ children }: { children?: React.ReactNode }) {
  return <div style={loadingStyles}>{children}</div>;
}

export default Loading;
