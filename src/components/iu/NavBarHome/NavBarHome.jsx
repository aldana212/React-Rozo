import React from 'react'
import { Link } from 'react-router-dom';
import Style from './NavBarHome.module.css';

const Items = [
  { title: "Home", url: "/" }
  ,{ title: "Couter", url: "/Couter" },
  { title: "greet", url: "/Hello" }
];


export const NavBarHome = () => {

  return (
    <nav className={Style.navbar}>
      <h2 className={Style.h2}>Sena</h2>
      <ul className={Style.menu}>
        {
          Items.map((item) => (
            <li><Link to={item.url} className={Style.a}>{item.title}</Link></li>
          ))
        }
      </ul>
      <button className={Style.button}>Sing</button>
    </nav>
  )
}
