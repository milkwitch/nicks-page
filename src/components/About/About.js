import React from 'react'
import abtimage from '../../about.jpg'

export default function About () {
  return (
    <div id='about-container' >
      <img src={abtimage} alt='about'/>
      <div id='about-txt'>
      About ME
      </div>
    </div>
  )
}
