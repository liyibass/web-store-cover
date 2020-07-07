import React from "react";
import "./ItemPreview.style.scss";
import Button from "../Button/Button.component";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cart/cart.action";

function ItemPreview({ item }) {
  const dispatch = useDispatch();
  // console.log(item);

  return (
    <div className="ItemPreview col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="ItemImage">
        <img src={item.imageUrl} alt="" />
      </div>

      <div className="ItemCaption">
        <p>{item.name}</p>
        <p>${item.price}</p>
        <Button
          title="加入購物車"
          onClick={() => dispatch(addCartItems(item))}
        />
      </div>
    </div>
  );
}

export default ItemPreview;
