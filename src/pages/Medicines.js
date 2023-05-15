import React from 'react';
import {MedicineList} from "../helpers/MedicineList";
import MedicineItem from '../components/MedicineItem';
import "../styles/Medicines.css"

function Medicines() {
  return (
    <div className='medicine'>
        <h1 className='medicineTitle'> Medicines</h1>
    <div className='medicineList'>
    {MedicineList.map((medItem, key)=>{
        return <MedicineItem
                key={key}
                image= {medItem.image}
                name={medItem.name} 
                price={medItem.price}
                
                />
    })}
    </div>
      
    </div>
  );
}

export default Medicines
