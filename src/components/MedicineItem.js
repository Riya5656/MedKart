import React from 'react'

function MedicineItem({image, name, price}) {
  return (
    <div className='MedicineItem'>
      <div style={{backgroundImage:`url(${image})`}}></div>
      <h1> {name}</h1>
      <p>{price}</p>
      <button>Buy</button>
    </div>
  )
}

export default MedicineItem;
