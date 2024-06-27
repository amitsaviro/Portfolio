import React from "react";
import './Intro.css';
import amit from '../../assets/Amit.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Amit</span><br />Full-Stack Developer</span>
                <p className="introPara">I am Amit, a full-stack web developer, experienced in front-end technologies</p>
                <p className="introPara"> like HTML, CSS, jQuery, JavaScript and React framework</p>
                <p className="introPara"> And Java and Spring-Boot on the back-end with SQL-database.</p>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}><button className="hire-me-btn"><FontAwesomeIcon className="hire-me-icon" icon={faBriefcase} /> Hire Me</button></Link>
            </div>
            <img className="amit" src={amit} alt="Amit" />
        </section>
    );
}

export default Intro;
