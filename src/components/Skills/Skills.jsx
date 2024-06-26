import React from "react";
import'./Skills.css';
import java from '../../assets/java.jpeg';
import website from '../../assets/website.jpeg';
import problems from '../../assets/problems.png';
import teamwork from '../../assets/teamwork.webp';

const Skills = () =>{
    return(
        <section id="skills">
            <span className="skillsTitle">My Skills</span>
            <span className="skillsDesc">I am a skilled and passionate full stack developer with experience in creating end to end websites. I have a strong understangind in HTML, CSS, Java Script, jQuery and React framework in frontend and Java, Spring Boot and SQL in backend.</span>
            <div className="skillsBars">
                <div className="skillsBar">
                    <img src={website} alt="frontend" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Front-end Developer</h2>
                        <p>I have high level of skills in HTML, CSS, jQuery, Java Script and React framework.</p>
                    </div>
                </div>
                <div className="skillsBar">
                    <img src={problems} alt="problem solving" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Problems solvin</h2>
                        <p>Advenced problem solving skills in minimum time.</p>
                    </div>
                </div>
                 <div className="skillsBar">
                    <img src={java} alt="backend" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Back-end Developer</h2>
                        <p>I have high level of skills in Java, Spring Boot and SQL-MySql</p>
                    </div>
                </div>
                <div className="skillsBar">
                    <img src={teamwork} alt="teamwork" className="skillsBarImg" />
                    <div className="skillsBarText">
                        <h2>Collaboration & Teamwork</h2>
                        <p>Teamwork player with excellent interpersonal skills</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills