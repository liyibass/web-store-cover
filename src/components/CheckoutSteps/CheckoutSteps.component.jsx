import React from "react";

import "./CheckoutSteps.style.scss";
import CheckoutCartTable from "./CheckoutCartTable/CheckoutCartTable.component";

function CheckoutSteps() {
  return (
    <div className="CheckoutSteps col-lg-9">
      <CheckoutCartTable />

      <div className="members">
        <h3 className="step-header">會員專區</h3>
      </div>
      <div className="payment">
        <h3 className="step-header">付款運送方式</h3>
      </div>
    </div>
  );
}

export default CheckoutSteps;
