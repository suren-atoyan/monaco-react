import React, { type ReactNode } from "react";

const loadingStyles = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

function Loading({ children }: { children?: ReactNode }) {
  return <div style={loadingStyles}>{children}</div>;
}

export default Loading;
