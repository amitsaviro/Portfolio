import React from "react";
import './Footer.css';
import logo from '../../assets/portfolio-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <img className="footerLogo" src={logo} alt="logo" />
            <div className="footerSocialIcons">
                <a href="https://www.linkedin.com/in/amit-saviro/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="footerSocialIcon" icon={faLinkedinIn} />
                </a>
                <a href="https://www.facebook.com/amit.savir.5" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="footerSocialIcon" icon={faSquareFacebook} />
                </a>
                <a href="https://www.instagram.com/amit_saviro/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="footerSocialIcon" icon={faInstagram} />
                </a>
            </div>
            <p className="footerCopyright">
              CopyRight  &copy; 2024. All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;
