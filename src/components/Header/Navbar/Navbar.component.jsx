import React from "react";
import "./Navbar.style.scss";
import NavButton from "../../NavButton/NavButton.component";
// import Dropdown from "react-bootstrap";

function Navbar() {
  const navbarList = [
    {
      id: 1,
      title: "最新活動",
      folder: ["新品推薦", "主題|FRESH TAIWAN快閃店", "優惠|星際大戰選物"],
    },
    { id: 2, title: "得獎專區" },
    {
      id: 3,
      title: "居家美學",
      folder: ["新品推薦", "主題|FRESH TAIWAN快閃店", "優惠|星際大戰選物"],
    },
    { id: 4, title: "餐飲道具" },
    {
      id: 5,
      title: "風格文具",
      folder: ["新品推薦", "主題|FRESH TAIWAN快閃店", "優惠|星際大戰選物"],
    },
    {
      id: 6,
      title: "個人風尚",
      folder: ["新品推薦", "主題|FRESH TAIWAN快閃店", "優惠|星際大戰選物"],
    },
    { id: 7, title: "餐廳好食" },
    { id: 8, title: "禮物推薦" },
    {
      id: 9,
      title: "所有品牌",
      folder: ["新品推薦", "主題|FRESH TAIWAN快閃店", "優惠|星際大戰選物"],
    },
    { id: 10, title: "設計專欄" },
    { id: 11, title: "關於設計點" },
  ];
  return (
    <div className="Navbar">
      {navbarList.map((item) => {
        return <NavButton key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Navbar;
