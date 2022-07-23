import React from "react";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

export default function Support() {
  return(
    <div className="supportContainer">
      <div className="infoSupport">
        <a className="supportLink" href="/">
          <p>Soporte</p>
          <SupportAgentOutlinedIcon className="supportIcon"/>
        </a>
      </div>
    </div>
  );
}