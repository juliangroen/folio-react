import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ showMenu }) => {
  const [items, setItems] = useState([
    { text: "About", isActive: true },
    { text: "Portfolio", isActive: false },
    { text: "Contact", isActive: false }
  ]);

  const setActive = text => {
    const newState = [...items];
    console.log(newState);
    newState.forEach(obj => {
      console.log(text);
      if (obj.text === text || obj.isActive === true) {
        obj.isActive = !obj.isActive;
      }
    });
    console.log(newState);
    setItems(newState);
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
                clickFunction={setActive}
              />
            );
          })}
        </nav>
      )}
    </div>
  );
};

export default Menu;
