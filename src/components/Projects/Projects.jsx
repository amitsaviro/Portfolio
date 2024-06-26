import React from "react";
import './Projects.css';
import Ecommerce from '../../assets/E-commerce.png';
import TicTacToe from '../../assets/Tic-Tac-Toe.png';
import Memory from '../../assets/Memory-game.png';
import Portfolio from '../../assets/Portfolio.png';
import githubIcon from '../../assets/github-icon.png';

const projects = [
    {
        id: 1,
        image: Ecommerce,
        githubLink: 'https://github.com/amitsaviro/FE-ShoopingWebsite',
        alt: 'E-commerce',
    },
    {
        id: 2,
        image: TicTacToe,
        githubLink: 'https://github.com/amitsaviro/tic-tac-toe-project',
        alt: 'Tic Tac Toe',
    },
    {
        id: 3,
        image: Memory,
        githubLink: 'https://github.com/amitsaviro/Memory-game',
        alt: 'Memory game',
    },
    {
        id: 4,
        image: Portfolio,
        githubLink: 'https://github.com/yourusername/project3',
        alt: 'Portfolio',
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="projectsGrid">
                {projects.map(project => (
                    <div key={project.id} className="projectItem">
                        <img src={project.image} alt={project.alt} className="projectImage" />
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="githubLink">
                            <img src={githubIcon} alt="GitHub" className="githubIcon" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
