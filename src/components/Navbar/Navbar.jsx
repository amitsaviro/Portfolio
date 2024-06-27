import React, {useState} from "react";
import './Navbar.css';
import logo from '../../assets/portfolio-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                <Link className="desktopMenuListItem" activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                <Link className="desktopMenuListItem" activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
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
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500}> <button className="desktopMenuBtn">
                    <FontAwesomeIcon className="contact-icon" icon={faMessage} />Contact Me
                </button></Link>
            </div>
            <FontAwesomeIcon icon={faBarsStaggered} className="mobileMenuIcon" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="mobileMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link className="listItem" activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Home</Link>
                <Link className="listItem" activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>About</Link>
                <Link className="listItem" activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link className="listItem" activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    );
}

export default Navbar;
