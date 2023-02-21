import React from 'react'
import Style from './Home.module.css'
import { HomeLa } from '../../layouts/Home/Home'

export const Home = () => {
    return (
        <section className={Style.section}>
            <HomeLa />
        </section>
    )
}
