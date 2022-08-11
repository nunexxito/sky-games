import React from "react";
import { FormattedMessage } from "react-intl";

export default function functionality() {
  return(
    <div>
      <h1 style={{color: "#fff"}}>
        <FormattedMessage
          id="app.functionality"
          defaultMessage="Functionality"
        />
      </h1>
    </div>
  );
}