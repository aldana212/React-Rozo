import React from 'react'
import { ChangeColor } from '../../layouts/ChangeColor/ChangeColor'
import Style from './ChangesColor.module.css'

export const ChangesColor = () => {
  return (
    <section className={Style.section}>
     <ChangeColor />
    </section>
  )
}
