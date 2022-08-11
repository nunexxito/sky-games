import React from "react";
import { FormattedMessage } from "react-intl";

export default function us() {
  return(
    <div>
      <h1 style={{color: "#fff"}}>
        <FormattedMessage
          id="app.us"
          defaultMessage="Us"
        />
      </h1>
    </div>
  );
}