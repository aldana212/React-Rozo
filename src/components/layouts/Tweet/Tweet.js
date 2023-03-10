import React, { useState, useEffect } from 'react'
import Style from "./tweet.module.css";
import { toast } from 'react-toastify';


export const Tweet = () => {

  const imgUrl = "https://res.cloudinary.com/dqk8kw8sl/image/upload/v1677632210/react-rozo/buzon_erz2zt.jpg"

  const limit = 255;

  // se almacena el valor del input
  const [values, setValues] = useState({
    name: '',
    textArea: ''
  })

  // controla los input
  const handleInput = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })

  }

  // guarda el estado values con la info en un arreglo
  const [resgistro, setRegistro] = useState([])

  // guarda el estado values con la info en un string para mostar la publicacion y caracteres
  const [text, setText] = useState('')

  // guarda todos los datos del localstore
  const [mostraText, setMostraText] = useState([])

  // funcion para publicar valua si mandan los campos vacios
  // y si sobre pasa de los caracteres de lo contrario manda la info
  const handlePuclicar = () => {
    console.log(values.textArea.length);
    if (values.name === '' || values.textArea === '') {
      toast.error("Llega los campos",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    } else if (values.textArea.length > 255) {
      toast.error("Limite de caracteres",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    } else {
      setText(values)
      // ... register para hacer una copia del estado(todo su contenido) mas los nuevos elementos a agregar al estado
      setRegistro([...resgistro, values])
      setValues({
        name: '',
        textArea: ''
      })
    }
  }

  // solo funcionara cuando halla un cambio en el estado register
  useEffect(() => {
    localStorage.setItem('resgistro', JSON.stringify(resgistro))
  }, [resgistro])

  // funcion para mostrar los datos del localstora
  const handleMostrar = () => {
    let storedData = localStorage.getItem('resgistro')
    setMostraText(JSON.parse(storedData))
  }

  return (
    <>
      <div className={Style.container}>
        <div className={Style.tweet}>
          <div className={Style.tweetContent}>
            <h2>Tweet</h2>
            <input type="text" className={Style.input} name="name" placeholder="Name..." onChange={handleInput} value={values.name} />
            <textarea name='textArea' onChange={handleInput} value={values.textArea}></textarea>
            <p>{limit} - {limit - values.textArea.length}</p>
            <button onClick={handlePuclicar}>Publicar</button>
            <button onClick={handleMostrar}>Mostrar</button>
          </div>

          <div className={Style.tweetContent_2}>
            <div className={Style.conte}>
              <h2>{text.name}</h2>
              <p>{text.textArea}</p>
            </div>
          </div>
        </div>

        {mostraText.length ?
          <div className={Style.comments}>
            <h2 className={Style.title}>Comentarios tweet</h2>
            {mostraText.map((mostrar) => (
              <div className={Style.comments_Content}>
                <h2>{mostrar.name}</h2>
                <p>{mostrar.textArea}</p>
              </div>
            ))}
          </div>
          :
          <div className={Style.comments}>
            <img className={Style.image} src={imgUrl} />
          </div>
        }
      </div>
    </>
  )
}
