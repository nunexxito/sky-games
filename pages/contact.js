import React from "react";
import { FormattedMessage } from "react-intl";

export default function profile() {
  return(
    <div>
      <h1 style={{color: "#fff"}}>
        <FormattedMessage
          id="app.contact"
          defaultMessage="Contact"
        />
      </h1>
    </div>
  );
}