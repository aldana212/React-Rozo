import React from 'react'
import { NavBarHome } from '../../iu/NavBarHome/NavBarHome'
import Style from './Header.module.css'

export const HeaderHome = () => {
    return (
        <header className={Style.header}>
            <NavBarHome />
        </header>
    )
}

