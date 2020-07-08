import React from "react";
import "./NavButton.style.scss";
import { Link } from "react-router-dom";

function NavButton({ item }) {
  return (
    <div className="NavButton">
      <Link className="NavButton-title" to="/products">
        {item.title}
      </Link>

      {item.folder ? (
        <div className="NavButton-folder">
          {item.folder.map((subItem) => {
            return (
              <Link key={subItem.id} className="folderItem" to="/products">
                {subItem.title}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default NavButton;
