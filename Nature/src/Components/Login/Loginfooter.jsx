import React from 'react';
import Insta from './instagram.png'
import './LoginFooter.css'

const LoginFooter = () => {
    return (
        <div className="FooterLoginContainer">
            <a href="https://github.com/Fesantos12" target="E_blank" className='CopyLogin'>&copy;Unker</a>
            <div className="InstaLogin">
                <img src={Insta} alt="logo do Instagram" id='logoinstaLogin'/>
                <a href="https://www.instagram.com/fe_santos95/" className='aLogin' target="_blank">Fe_santos95</a>
            </div>
        
        </div>
    )
}

export default LoginFooter;