import React from 'react'
import { Link } from 'react-router-dom'
import json from './navbar.json'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <Link to="/" className="app__navbar-logo">
        <img src={logo} alt="OHPandas NFT logo" className="app__navbar-logo_img" />
        <p className="app__navbar-logo_title">Open-Handed Pandas NFT</p>
      </Link>
      <div className="app__navbar-links">
        {json.links.map(links => (
          <Link to={links.href} className='app__navbar-links_link' key={links.id}>{links.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
