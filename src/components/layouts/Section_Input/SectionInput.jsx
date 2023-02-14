import React, {useState} from 'react'
import Style from './SectionInput.module.css'

export const SectionInput = () => {

    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handle = () =>{
        setText('Hola ' + name);
        setName('')
    }

  return (
    <div className={Style.container}>
        <h2>{text}</h2>
        <input type='text' name="name" onChange={(e) => setName(e.target.value)} value={name}></input>
        <button onClick={handle}>dsfsdfsd</button>
    </div>
  )
}
