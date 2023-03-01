import React, { useState, useEffect } from 'react'
import Style from './SectionCouter.module.css'
export const SectionCouter = () => {


  //almacenar el estador del contador
  const [Couter, setCouter] = useState(0);
  // cambia el style
  const [color, setColor] = useState('');

  // dar un color ramdon
  const RandomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgba(${r},${g},${b}`
  }

  // Aumenta el contador
  const handleAddCouter = () => setCouter(Couter + 1);
  // resetea contador
  const handleResetCouter = () => setCouter(0)
  // disminuye el contador
  const handleRemoveCouter = () => setCouter(Couter - 1);

  // para cambial el color si cumple la condicion
  useEffect(() => {
    Couter > 9 ? setColor(RandomColor) : setColor('Black')
  }, [Couter])

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Contador</h1>
      <p id={Style.couter} style={{ color }}>{Couter}</p>
      <div className={Style.button}>
        <button onClick={handleAddCouter}><i class='bx bx-plus' ></i></button>
        <button onClick={handleRemoveCouter}><i class='bx bx-minus'></i></button>
        <button onClick={handleResetCouter}><span class='bx bx-reset'></span></button>
      </div>
    </div>
  )
}
