import React from 'react'
import roadmap from '../../assets/roadmap.png'
import './hero3.css'

const Hero3 = () => {
  return (
    <div className='app__roadmap'>
      <p className="app__roadmap-title">RoadMap</p>
      <img src={roadmap} alt="Roadmap" className='app__roadmap-image'/>  
    </div>
  )
}

export default Hero3
