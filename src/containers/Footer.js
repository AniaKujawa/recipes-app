import React from 'react';
import '../styles/Footer.scss'
import { FaFacebook } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="contact">
        <div className="contact__info">
            <h3 className="contact__welcome">Contact with us! -</h3>
            <h3 className="contact__mail">recipe@recipe.com</h3>
        </div>
        <div className="contact__social-media">
            <h3 className="contact__follow">Follow us</h3>
            <a href="/" className="contact__social-links"><FaInstagram /></a>
            <a href="/" className="contact__social-links"><FaFacebook /></a>
        </div>
    </footer> 
    )
}

export default Footer