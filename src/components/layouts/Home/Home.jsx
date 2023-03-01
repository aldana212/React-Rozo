import React, {useEffect, useRef} from 'react'
import ScrollReveal from 'scrollreveal'
import Style from "./home.module.css"

export const HomeLa = () => {
    const imgUrl = "https://res.cloudinary.com/dqk8kw8sl/image/upload/v1677007093/react-rozo/wp7717992_py2ifo.png"

    useEffect(() => {
        const reveal1 = ScrollReveal({
            delay: 500,
            duration: 1000,
            distance: '50px',
            easing: 'ease-out',
            origin: 'bottom',
            reset: true,
          });
          reveal1.reveal(`.${Style.content_text}`)
    }, []);

    return (
        <div className={Style.container}>
            <h1 className={Style.main_title}>Bienvenidos</h1>
            <div className={Style.content}>
                <div className={Style.image}>
                    <img src={imgUrl} />
                </div>
                <div className={Style.content_text} >
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
