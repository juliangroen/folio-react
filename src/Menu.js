import React from 'react'
import MenuItem from './MenuItem';

function Menu() {
  const items = ['About', 'Portfolio', 'Contact'];
  return (
    <div>
      <nav className="relative z-20 flex flex-col tracking-wider" id="navMenu">
        {items.map(item => {
          return <MenuItem itemName={item} />
        })}
      </nav>
    </div>
  )
}

export default Menu
