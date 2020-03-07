import React from 'react'
import MenuItem from './MenuItem';

const Menu = ({ showMenu }) => {
  const items = ['About', 'Portfolio', 'Contact'];
  return (
    <div>
      {showMenu && (
        <nav className="relative z-20 flex flex-col tracking-wider" id="navMenu">
          {items.map(item => {
            return <MenuItem itemName={item} />
          })}
        </nav>
      )}
    </div>
  )
}

export default Menu
