import React from 'react';

import Insta from './instagram.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="FooterContainer">
            <a href="#" target="E_blank" className='Copy'>&copy;Unker</a>
            <div className="Insta">
                <img src={Insta} alt="logo do Instagram" id='logoinsta'/>
                <a href="#" target="_blank">Fe_santos95</a>
            </div>
            
        </div>
    )
}

export default Footer;