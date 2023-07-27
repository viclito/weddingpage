import React from 'react'
import {BiLogoPlayStore ,BiLogoGmail} from 'react-icons/bi'
import {FaAppStoreIos ,FaFacebook ,FaTwitter ,FaInstagram } from 'react-icons/fa'
import "./Footer.scss"

const Footer = () => {
  return (
    <main>
    <div className='footer'> 
        <div className="f-left">
            <h1>Plan your wedding by a single click</h1>
            <span>
            <span><BiLogoPlayStore/></span>
            <span><FaAppStoreIos/></span>
            </span>
            
            <button className='btn footerbtn'>Register</button>
        </div>
        <div className="f-middle">
            <h1>Informations</h1>
            <ul>
                <li className='mi-list'>Contact us</li>
                <li className='mi-list'>Terms & Privacy</li>
                <li className='mi-list'>About Us</li>
                <li className='mi-list'>Careers</li>
                <li className='mi-list'>Editorial Team & Policies</li>
            </ul>
        </div>
        <div className="f-right">
            <h1>Follow us on</h1>
            <span><FaFacebook/> Facebook</span>
            <span><FaTwitter/> Twitter</span>
            <span><FaInstagram/> Instagram</span>
            <span><BiLogoGmail/> Gmail</span>
        </div>
    </div>
    </main>
  )
}

export default Footer