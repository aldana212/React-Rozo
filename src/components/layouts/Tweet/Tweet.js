
import React, {useState, useEffect} from 'react'
import Style from "./tweet.module.css";

export const Tweet = () => {

    const [values, setValues] = useState({
        name: '',
        textArea: ''
    })

    const handleInput  = (e) => {
     const { name, value } = e.target

     setValues({
        ...values,
        [name]: value
     })
    }

    const [text, setText] = useState('')
    const [mostraText, setmostraText] = useState('')


    const handlePuclicar = (e) =>{
        setText(values)
        console.log("hola");
        console.log(text.name);
      localStorage.setItem(text.name, JSON.stringify(text))
      if(text.length > 0){
        console.log("hola");
      }

    }

    const handleMostrar = () =>{
        let Text = {...localStorage}
        // let Text = Object.keys(localStorage).map(key =>JSON.parse(localStorage.getItem(key)))
        console.log(Text);
        // setmostraText(Text)
    }

  return (
    <div className={Style.container}>
      <div className={Style.tweet}>
        <h2></h2>
        <input type='text' name='name' onChange={handleInput} value={values.name}></input>
        <textarea name='textArea' className='' onChange={handleInput} value={values.textArea}></textarea>
        <p>{300}</p>
        <button onClick={handlePuclicar}>Publicar</button>
        <button onClick={handleMostrar}>Mostrar</button>

        <div className='content_text'>
           <p></p>
        </div>
      </div>
      <div className={Style.content_tweet}>
           <div className='info-tweet'>
            <h2>aqui veras tus tweet</h2>
            <p>{mostraText}</p>
           </div>
      </div>
    </div>
  )
}
