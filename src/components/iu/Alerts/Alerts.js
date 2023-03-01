import React from 'react'
import Style from './alert.module.css'

export const Alerts = ({ error, setError, message }) => {
    return (
        <>
            {error &&
                <div className={Style.Overlay}>
                    <div className={Style.ContenedorModal}>
                        <div className={Style.Title}>
                            <h2>Error</h2>
                        </div>
                        <button className={Style.btnCerrar} onClick={() => setError(false)}>x</button>
                        <div className={Style.content}>
                            <p>{message}</p>
                            <button className={Style.Btn} onClick={() =>setError(false)}>Aceptar</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
