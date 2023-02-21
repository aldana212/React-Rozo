import React, {useEffect} from 'react'
import ScrollReveal from 'scrollreveal'
import Style from "./home.module.css"

export const HomeLa = () => {
    const imageUrl = "https://res.cloudinary.com/dqk8kw8sl/image/upload/v1677007093/react-rozo/wp7717992_py2ifo.png"
    
    
    useEffect(() => {
        ScrollReveal().reveal(`${Style.text_box}` ,{ delay: 500, origin: "left" })
    }, []);
   
   
   
    return (
        <div className={Style.container}>
            <h1 className={Style.main_title}>Bienvenidos</h1>
            <div className={Style.content}>
                <div className={Style.image}>
                    <img src={imageUrl} />
                </div>
                <div className={Style.text_box}>
                    <h2>React</h2>
                    <p>React se utiliza para crear interfaces de usuario interactivas y escalables para aplicaciones web modernas.
                    Es útil porque permite crear componentes reutilizables y actualizar la interfaz de usuario de manera eficiente, gracias a su enfoque de "virtual DOM". 
                    Es una herramienta valiosa para el desarrollo de aplicaciones web modernas y dinámicas.
                    </p>
                </div>
            </div>
        </div>
    )
}
