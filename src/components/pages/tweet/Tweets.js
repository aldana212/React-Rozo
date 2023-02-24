import React from 'react'
import { Tweet } from '../../layouts/Tweet/Tweet'
import Style from './Tweets.module.css';

export const Tweets = () => {
  return (
    <section className={Style.section}>
    <Tweet />
    </section>
  )
}
