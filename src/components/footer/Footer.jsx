import React from 'react'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import './footer.css'

import {ExternalLink} from 'react-external-link'

const Footer = () => {
  return (
    <div className='app__social'>
      <ExternalLink href="https://www.instagram.com/ohpandas_nft/"><img src={instagram} alt="Instagram" /></ExternalLink>
      <ExternalLink href="https://www.twitter.com/PandasOpen"><img src={twitter} alt="Twitter" /></ExternalLink>
    </div>
  )
}

export default Footer
