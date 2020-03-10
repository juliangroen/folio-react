import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ showMenu }) => {
  const [items, setItems] = useState([
    { text: "About", isActive: true },
    { text: "Portfolio", isActive: false },
    { text: "Contact", isActive: false }
  ]);

  const setActive = text => {
    const newState = items.map(obj => { 
      obj.isActive = false;
      if (obj.text === text) {
        obj.isActive = !obj.isActive;
      }
      return obj;
    });
    return newState;
  };

  return (
    <div>
      {showMenu && (
        <nav
          className="relative z-20 flex flex-col tracking-wider"
          id="navMenu"
        >
          {items.map(item => {
            return (
              <MenuItem
                itemName={item.text}
                isActive={item.isActive}
                clickEvent={(childText) => setItems(setActive(childText))}
              />
            );
          })}
        </nav>
      )}
    </div>
  );
};

export default Menu;
