import React from 'react'

function CategoryItem({image, name}) {
  return (
    <div className='CategoryItem'>
      <div style={{backgroundImage:`url(${image})`}}></div>
      <h1> {name}</h1>
      <h5> Buy Medicines</h5>
    </div>
  )
}

export default CategoryItem
