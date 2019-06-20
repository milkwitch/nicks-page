import React from 'react'
import './home.css'
import deskImg from '../../desk.jpg'
import beachImg from '../../beach.jpg'

export default function Home () {
  return (
    <div id='home-image'>
      <img src={deskImg} alt='nick on a desk'/>
      <img src={beachImg} alt='nick on the beach' />
    </div>
  )
}
