import React from "react";

import "./CheckoutPage.style.scss";
import CheckoutDetail from "../../components/CheckoutDetail/CheckoutDetail.component";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps.component";

function CheckoutPage() {
  return (
    <div className="CheckoutPage">
      <div className=" container">
        <div className="row">
          <CheckoutDetail />
          <CheckoutSteps />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
