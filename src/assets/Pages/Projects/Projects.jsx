import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Offline Multiplayer Chess Game',
    description: 'A fully functional Offline Chess game built with React.',
    image: './chess-game.png',
    liveDemo: 'https://sandeepbhaskar-chessgame.netlify.app/',
  },
  {
    title: 'Online Video Straming Platform',
    description: 'A fully functional online Video Streaming platform built using React for frontend and Nodejs as backend.',
    image: './video-streaming.png',
    liveDemo: 'https://video-straming-frontend.vercel.app/',
  },
  {
    title: 'Simple Model of Message Posting platform',
    description: 'A simple platform where user can register, login and post a message for all the users built using React, and Nodejs.',
    image: './x.png',
    liveDemo: 'https://message-with-profilepic-frontend.vercel.app/login',
  },
  {
    title: 'Laundry Service',
    description: 'A platform where user can book the required laundry service and recive a confirmation through mail, built using React and for EmailJS for mail service.',
    image: './Laundry.png',
    liveDemo: 'https://message-with-profilepic-frontend.vercel.app/login',
  },
  {
    title: 'Simple E-commerce website',
    description: 'A simple e-commerce application to order footwear.',
    image: './shoe-shopping.png',
    liveDemo: 'https://warm-cascaron-8bac1a.netlify.app/',
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="header">
        <header>My Projects</header>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;