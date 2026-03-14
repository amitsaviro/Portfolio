import React from "react";
import'./Skills.css';
import java from '../../assets/java.jpeg';
import website from '../../assets/website.jpeg';
import problems from '../../assets/problems.png';
import teamwork from '../../assets/teamwork.webp';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillsTitle">My Skills</span>
            <span className="skillsDesc">
                I am a passionate Full-Stack Developer with a deep technical background in building scalable, 
                high-performance applications. My expertise spans across frontend modern frameworks, 
                backend system architecture, and efficient infrastructure management.
            </span>
            <div className="skillsBars">
                <div className="skillsBar">
                    <img src={website} alt="frontend" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Front-end Development</h2>
                        <p>High-level expertise in HTML, CSS, JavaScript, and React, creating responsive and dynamic user interfaces.</p>
                    </div>
                </div>
                
                <div className="skillsBar">
                    <img src={java} alt="backend" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Back-end & Systems</h2>
                        <p>Proficient in Java, Spring Boot, Python, and C++. Experienced in Multithreading, Communication Models, and robust system logic.</p>
                    </div>
                </div>

                <div className="skillsBar">
                    <img src={problems} alt="data and infrastructure" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Data & Infrastructure</h2>
                        <p>Expertise in SQL (MySQL & pgAdmin), database management, and streamlining development environments with Docker.</p>
                    </div>
                </div>

                <div className="skillsBar">
                    <img src={teamwork} alt="soft skills" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Problem Solving & Teamwork</h2>
                        <p>Advanced analytical skills with a focus on efficient solutions. A collaborative team player with strong communication skills.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills