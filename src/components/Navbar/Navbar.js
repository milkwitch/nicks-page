import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import MenuContainer from '../MenuContainer/MenuContainer'
import instIcon from '../../inst-icon.png'

export default function Navbar () {
  
  return (
    <div id='nav-container' >
      <div id='logo'>
        <Link to='/home'>NQN</Link>
      </div>
      <div id='mid-container'>
        <div id='name'>Nickolas Quinn</div>
          <a href='https://www.instagram.com/infernohotnick/'>
            <img src={instIcon} width='29px' height='29px' alt='insta icon'/>
          </a>
      </div>
      <div id='menu-container'>
        <MenuContainer />
      </div>
    </div>
  )
}
