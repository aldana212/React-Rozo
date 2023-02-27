
import React, { useState, useEffect } from 'react'
import Style from "./tweet.module.css";

export const Tweet = () => {

  const [values, setValues] = useState({
    name: '',
    textArea: ''
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const [error, setError] = useState(false);


  // lo que se guarda es un arreglo
  const [resgistro, setRegistro] = useState([])

  const [text, setText] = useState('')
  const [mostraText, setMostraText] = useState([])
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);


  const handlePuclicar = () => {
    console.log(values.textArea.length);
    if(values.name === '' && values.textArea === ''){
      setIsButtonDisabled(true)
      setError(true)
    }else if(values.textArea.length > 300){
      setError(true)
    }else{
      setText(values)
      // ... register para hacer una copia del estado(todo su contenido) mas los nuevos elementos a agregar al estado
      setRegistro([...resgistro, values])
      setError(false)
    }
  }

  // solo funcionara cuando halla un cambio en el estado register
  useEffect(() => {
      localStorage.setItem('resgistro', JSON.stringify(resgistro))
  }, [resgistro])

  const handleMostrar = () => {
    let storedData = localStorage.getItem('resgistro')
      setMostraText(JSON.parse(storedData))
  }

  return (
    <div className={Style.container}>
      <div className={Style.tweet}>
        <div className={Style.tweetContent}>
          <h2>Tweet</h2>
          <input type="text" className={Style.input} name="name" placeholder="Name..." onChange={handleInput} value={values.name} />
          <textarea name='textArea' onChange={handleInput} value={values.textArea}></textarea>
          <p>{300 - values.textArea.length}</p>
          {error &&
            <p>error</p>
          }
          <button onClick={handlePuclicar} disabled={isButtonDisabled}>Publicar</button>
          <button onClick={handleMostrar}>Mostrar</button>
        </div>

        <div className={Style.tweetContent_2}>
          <div className={Style.conte}>
            <h2>{text.name}</h2>
            <p>{text.textArea}</p>
          </div>
        </div>
      </div>

        <div className={Style.comments}>
          <h2 className={Style.title}>Comentarios tweet</h2>
          {mostraText.map((mostrar) => (
            <div className={Style.comments_Content}>
              <h2>{mostrar.name}</h2>
              <p>{mostrar.textArea}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
