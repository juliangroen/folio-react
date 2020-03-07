import React, { useState } from 'react'
import MenuItem from './MenuItem';

const Menu = ({ showMenu }) => {
  const [items, setItems] = useState([
    {title: 'About', isActive: true},
    {title: 'Portfolio', isActive: false},
    {title: 'Contact', isActive: false},
  ]);
  return (
    <div>
      {showMenu && (
        <nav className="relative z-20 flex flex-col tracking-wider" id="navMenu">
          {items.map(item => {
            return <MenuItem itemName={item.title} isActive={item.isActive} />
          })}
        </nav>
      )}
    </div>
  )
}

export default Menu
