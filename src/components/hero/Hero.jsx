import React from 'react'
import { ExternalLink } from 'react-external-link'
import { Link } from 'react-router-dom'
import './hero.css'
import json from './hero.json'
import opensea from '../../assets/opensea.png'

const Hero = () => {
  return (
    <div className='app__hero'>
      <div className="app__hero-left">
        <div className="app__hero-left_text">
          <p className="app__hero-left_text-title">Buyers are donating to animal charity institutions in Portugal.</p>
          <p className="app__hero-left_text-subtitle">7,777 Open-Handed Pandas on the Polygon Blockchain</p>
        </div>
        <ExternalLink href="https://opensea.io/" className='app__hero-left_link hidden'>
          <img src={opensea} alt="OpenSea Logo" className="app__hero-left_link-img" />
          <p className="app__hero-left_link-text">Visit Our OpenSea</p>
        </ExternalLink>
      </div>
      <div className="app__hero-right">
        {json.cards.map(cards => (
          <div className="app__hero-right_card">
            <div className="app__hero-right_card-title">
              <img src={`../../../img/${cards.image}`} alt={cards.title} className="app__hero-right_card-title_img" />
              <p className="app__hero-right_card-title_text">{cards.title}</p>
            </div>
            <div className="app__hero-right_card-content">
              <p>{cards.text}</p>
            </div>
            <div className='df'>
              <Link to={cards.link} className='app__hero-right_card-link'>Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
