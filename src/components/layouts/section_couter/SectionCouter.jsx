import React, { useState, useEffect } from 'react'
import Style from './SectionCouter.module.css'
export const SectionCouter = () => {

  const [Couter, setCouter] = useState(0);
  const [color, setColor] = useState('');
  
  const RandomColor = () => {
   const r = Math.floor(Math.random() * 255)
   const g = Math.floor(Math.random() * 255)
   const b = Math.floor(Math.random() * 255)
   return `rgba(${r},${g},${b}`
  }
  
  const handleAddCouter = () => setCouter(Couter + 1);
  const handleResetCouter = () => setCouter(0)
  const handleRemoveCouter = () => setCouter(Couter - 1);


  useEffect(() => {
    Couter > 9 ? setColor(RandomColor) : setColor('Black')
  }, [Couter])

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Contador</h1>
      <p id={Style.contar} style={{ color }}>{Couter}</p>
      <div className={Style.button}>
        <button className='Incre' id='Incre' onClick={handleAddCouter}><i class='bx bx-plus' ></i></button>
        <button className='Decre' id='Decre' onClick={handleRemoveCouter}><i class='bx bx-minus'></i></button>
        <button className='Rese' id='Rese' onClick={handleResetCouter}><span class='bx bx-reset'></span></button>
      </div>
    </div>
  )
}
