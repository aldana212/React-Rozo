import React, { useState, useEffect } from 'react'
import Style from './SectionCouter.module.css'

export const SectionCouter = () => {

    const [Couter, setCouter] = useState(0);
    const [color, setColor] = useState("");
    const handleAddCouter = () => setCouter(Couter + 1);
    const handleResetCouter = () => setCouter(0)
    const handleRemoveCouter = () => setCouter(Couter - 1);

    useEffect(()=>{
      if(Couter > 9){
        setColor("red")
      }
    }, [Couter])
    return (
        <div className={Style.container}>
            <p className={Style.title}>Contador</p>
            <p className={color} id={Style.contar}>{Couter}</p>
            <div className={Style.button}>
                <button className='Incre' id='Incre' onClick={handleAddCouter}><i class='bx bx-plus' ></i></button>
                <button className='Decre' id='Decre' onClick={handleRemoveCouter}><i class='bx bx-minus'></i></button>
                <button className='Rese' id='Rese' onClick={handleResetCouter}><span class='bx bx-reset'></span></button>
            </div>
        </div>
    )
}
