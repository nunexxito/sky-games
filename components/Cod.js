import React from "react";

export default function Cod({cod}) {
  return(
    <div style={{display: cod ? "inline-block" : "none", transition: "all 0.3s ease-in-out"}}>
      <h1>Call Of Duty</h1>
    </div>
  );
}