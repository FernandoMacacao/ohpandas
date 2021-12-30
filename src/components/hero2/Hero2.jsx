import React from 'react'
import './hero2.css'
import {ExternalLink} from "react-external-link";

const Hero2 = (props) => {
  return (
    <div className='app__hero2'>
      <div className="app__hero2-content">
        <>
          <p className="app__hero2-content_title">{props.title}</p>
          <p className="app__hero2-content_subtitle">
              {props.subtitle1}
              <ExternalLink href="https://chaodosbichos.org/" className="bold">{props.link1}</ExternalLink>
              {props.subtitle2}
              <ExternalLink href="https://www.ocantinhodamilu.com/" className="bold">{props.link2}</ExternalLink>
              {props.subtitle3}
          </p>
        </>
      </div>
      <div className="app__hero2-image">
        <img src={`../../../img/${props.image}`} alt={props.title} />
      </div>
    </div>
  )
}

export default Hero2
