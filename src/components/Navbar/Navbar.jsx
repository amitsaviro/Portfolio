import React from "react";
import './Navbar.css';
import logo from '../../assets/portfolio-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" to="home" smooth={true} duration={500}>Home</Link>
                <Link className="desktopMenuListItem" to="about" smooth={true} duration={500}>About</Link>
                <Link className="desktopMenuListItem" to="projects" smooth={true} duration={500}>Projects</Link>
            </div>
            <div className="socialAndButton">
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/amit-saviro/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="socialIcon" icon={faLinkedinIn} />
                    </a>
                    <a href="https://www.facebook.com/amit.savir.5" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="socialIcon" icon={faSquareFacebook} />
                    </a>
                    <a href="https://www.instagram.com/amit_saviro/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
                    </a>
                </div>
                <button className="desktopMenuBtn">
                    <FontAwesomeIcon className="contact-icon" icon={faMessage} />Contact Me
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
