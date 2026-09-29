import React from "react";
import './Projects.css';
import Ecommerce from '../../assets/E-commerce.png';
import TicTacToe from '../../assets/Tic-Tac-Toe.png';
import Memory from '../../assets/Memory-game.png';
import falafel from '../../assets/Falafel_King.jpg';
import mem from '../../assets/mem.webp';
import reactor from '../../assets/reactor.webp';
import threads from '../../assets/threads.webp';
import kanban from '../../assets/kanban.png';
import mosad from '../../assets/mosad.png';
import ai from '../../assets/ai.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = [
    {
        id: 1,
        image: Ecommerce,
        githubLink: 'https://github.com/amitsaviro/FE-ShoopingWebsite',
        alt: 'E-commerce',
    },
    {
        id: 2,
        image: mosad,
        githubLink: 'https://github.com/amitsaviro/mosad.git ',
        alt: 'mosad',
    },
    {
        id: 3,
        image: mem,
        githubLink: 'https://github.com/amitsaviro/SPL25-Assignment1-memoryManagment',
        alt: 'memoryManagment',
    },
    {
        id: 4,
        image: ai,
        githubLink: 'https://github.com/amitsaviro/ai-football-studio.git',
        alt: 'ai',
    },
    {
        id: 5,
        image: kanban,
        githubLink: 'https://github.com/BGU-SE-Courses/kanban-2026-2026-23.git',
        alt: 'kanban',
    },
    {
        id: 6,
        image: Memory,
        githubLink: 'https://github.com/amitsaviro/Memory-game',
        alt: 'Memory game',
    },
    {
        id: 7,
        image: reactor,
        githubLink: 'https://github.com/amitsaviro/HW3-SPL-Communication',
        alt: 'Communication',
    },
    {
        id: 8,
        image: threads,
        githubLink: 'https://github.com/amitsaviro/HW2---SPL-Threads ',
        alt: 'threads',
    },
    {
        id: 9,
        image: falafel,
        githubLink: 'https://github.com/amitsaviro/king-of-falafel',
        alt: 'king-of-falafel',
    },
    {
        id: 10,
        image: TicTacToe,
        githubLink: 'https://github.com/amitsaviro/tic-tac-toe-project',
        alt: 'Tic Tac Toe',
    },
];

const Projects = () => {
    return (
        <section id="projects">
                <h2 className="projectsTitle">My Projects</h2>
            <div className="projectsGrid">
                {projects.map((project, index) => (
                    <div key={project.id} className={`projectItem item-${index}`}>
                        <img src={project.image} alt={project.alt} className="projectImage" />
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="githubLink">
                            <FontAwesomeIcon icon={faGithub} className="githubIcon" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
