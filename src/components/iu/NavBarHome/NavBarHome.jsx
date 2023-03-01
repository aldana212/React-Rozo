import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Style from './NavBarHome.module.css';
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import ScrollReveal from 'scrollreveal'

const Items = [
  { title: "Home", url: "/" }
  , { title: "Couter", url: "/Couter" },
  { title: "greet", url: "/Hello" },
  { title: "ChangeColor", url: "/ChangesColor" },
  { title: "Tweet", url: "/Tweet" }
];


export const NavBarHome = () => {

  const [Mobile, setMobile] = useState(false)

  useEffect(() => {
    const reveal1 = ScrollReveal({
      delay: 500,
      duration: 1000,
      distance: '50px',
      easing: 'ease-out',
      origin: 'right',
      reset: true,
    });
    reveal1.reveal(`.${Style.navbar}`)
  }, []);

  return (
    <nav className={Style.navbar}>
      <h2 className={Style.h2}>Sena</h2>
      <ul className={Mobile ? Style.menu11 : Style.menu} >
        {
          Items.map((item) => (
            <li>
              <Link to={item.url} className={Style.a}>{item.title}</Link>
            </li>
          ))
        }
      </ul>
      <button className={Style.menu_icon} onClick={() => setMobile(!Mobile)}>
        {Mobile ?
          <ImCross />
          :
          <FaBars />
        }
      </button>
      {/* <button className={Style.button}>Sing</button> */}
    </nav>
  )
}
