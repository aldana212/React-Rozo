import React, { useState, useRef } from 'react'
import Style from './ChangeColor.module.css'

export const ChangeColor = () => {
  const container = useRef();
  const handleChangeColor = event => container.current.style.backgroundColor = event.target.value;

  return (
    <div className={Style.content}>
      <h1>Bienvenido escoge un color</h1>
      <div ref={container} className={Style.object}>
        <p>Color</p>
      </div>
      <input onChange={handleChangeColor} className={Style.input} type="color" name="" id="input-color" />
    </div>
  )
}