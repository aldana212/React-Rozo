import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarHome = () => {
  return (
    <nav>
        <ul>
            <li>
            <Link>Home</Link>
            </li>
            <li>
            <Link>Services</Link>
            </li>
            <li>
            <Link>FAQ</Link>
            </li>
            <li>
            <Link>Home</Link>
            </li>
        </ul>
    </nav>
  )
}
