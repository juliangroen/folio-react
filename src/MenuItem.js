import React from 'react'

const MenuItem = ({ itemName, isActive }) => {
  return (
    <button className={`p-4 text-xl font-semibold text-gray-600 ${isActive ? `text-indigo-400 bg-gray-800` : `bg-gray-900`} text-4lg hover:text-indigo-400`}>
      {itemName}
    </button>
  )
}

export default MenuItem
