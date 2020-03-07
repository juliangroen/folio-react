import React from 'react'

function MenuItem({ itemName }) {
  return (
    <button className="p-4 text-lg font-semibold text-gray-600 bg-gray-900 border-b border-gray-900 text-4lg hover:text-gray-400 hover:border-indigo-400" href="#">
      {itemName}
    </button>
  )
}

export default MenuItem
