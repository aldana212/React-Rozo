import React, {useState} from 'react'
import Style from './SectionInput.module.css'

export const SectionInput = () => {

    // captura lo del input
    const [name, setName] = useState('');
    // guarda el valor del estado name
    const [text, setText] = useState('');

    // funcion para saludar
    const handle = () =>{
        setText('Hola ' + name);
        // limpia el value del input
        setName('')
    }

  return (
    <div className={Style.container}>
        <h2>{text}</h2>
        <input type='text' name="name" onChange={(e) => setName(e.target.value)} value={name}></input>
        <button onClick={handle}>Saludar</button>
    </div>
  )
}
