import React from "react";
import "./NavButton.style.scss";

function NavButton({ item }) {
  return (
    <div className="NavButton">
      <h3 className="NavButton-title">{item.title}</h3>
      {item.folder ? (
        <div className="NavButton-folder">
          {item.folder.map((subItem) => {
            return (
              <h3 key={subItem} className="folderItem">
                {subItem}
              </h3>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default NavButton;
