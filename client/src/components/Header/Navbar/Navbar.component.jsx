import React from "react";
import "./Navbar.style.scss";
import NavButton from "./NavButton/NavButton.component";
import { useSelector } from "react-redux";
// import Dropdown from "react-bootstrap";

function Navbar() {
  const shopDataList = useSelector((state) => state.shopData.shopDataList);

  return (
    <div className="Navbar">
      {shopDataList.map((catogory) => {
        return <NavButton key={catogory.id} catogory={catogory} />;
      })}
    </div>
  );
}

export default React.memo(Navbar);
