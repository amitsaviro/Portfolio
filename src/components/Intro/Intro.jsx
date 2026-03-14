import React from "react";
import './Intro.css';
import amit from '../../assets/amit.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">Amit</span><br />
                    Full-Stack Developer & Software Engineering Student
                </span>
                <div className="introP">
                    <p className="introPara">
                        I specialize in building end-to-end applications using <b>React, JavaScript, HTML, and CSS</b> on the frontend.
                    </p>
                    <p className="introPara">
                        Experienced in backend development with <b>Java, Spring-Boot, Python, and C++</b>, including <b>Multithreading</b> and <b>Communication Models</b>.
                    </p>
                    <p className="introPara">
                        Skilled in managing databases with <b>SQL & pgAdmin</b>, and streamlining workflows using <b>Docker</b>.
                    </p>
                </div>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                    <button className="hire-me-btn">
                        <FontAwesomeIcon className="hire-me-icon" icon={faBriefcase} /> Hire Me
                    </button>
                </Link>
            </div>
            <img className="amit" src={amit} alt="Amit" />
        </section>
    );
}

export default Intro;
