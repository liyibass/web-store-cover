import React from "react";
import { useSelector } from "react-redux";
import "./CheckoutDetail.style.scss";

function CheckoutDetail() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartTotal = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.price * cartItem.quantity;
  }, 0);

  const freight = 0;
  const total = cartTotal + freight;

  return (
    <div className="CheckoutDetail col-lg-3">
      <div className="detail-block">
        <div className="detail-item">
          <h5 className="mb-0">結帳金額</h5>
          <i className="fas fa-chevron-up"></i>
        </div>

        <div className="detail-item">
          <p>商品小記</p>
          <p>{cartTotal}</p>
        </div>

        <div className="detail-item">
          <p>運費</p>
          <p>{freight}</p>
        </div>

        <div className="detail-item">
          <h6 className="mb-0">應付金額 </h6>
          <h5 className="mb-0 textOrange">NT${total}</h5>
        </div>
      </div>

      <div className="discount-block">
        <h3>優惠碼</h3>
        <h3>輸入優惠碼</h3>
        <input type="text" />
        <button>確認</button>
      </div>
    </div>
  );
}

export default CheckoutDetail;
