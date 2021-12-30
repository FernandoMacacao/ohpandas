import React from 'react'
import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className='app__hero2'>
      <div className="app__hero2-content">
        <>
          <p className="app__hero2-content_title">{props.title}</p>
          <p className="app__hero2-content_subtitle">{props.subtitle}</p>
        </>
      </div>
      <div className="app__hero2-image">
        <img src={`../../../img/${props.image}`} alt={props.title} />
      </div>
    </div>
  )
}

export default Hero2
