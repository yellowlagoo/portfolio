// components/Projects.js
import React from 'react';
import elevatorPainImage from '../images/elevatorpain.png';
import connectFourImage from '../images/connect-four.png';

function Projects() {
  const projects = [
    {
      title: "Sequent Calculus",
      image: null,
      description: "A Haskell implementation of a sequent calculus system for logical propositions.",
      details: [
        "Engineered a sequent calculus system using recursive algorithms and the `Prop` ADT to model logical propositions",
        "Implemented 12 type-safe inference rules via pattern matching, validated by 20+ test cases for semantic correctness",
        "Passed 100% of 25 test cases (including edge cases like nested implications)"
      ],
      technologies: ["Haskell", "Functional Programming", "Logic"],
      link: "https://github.com/yellowlagoo/sequent-calculus.git"
    },
    {
      title: "Elevator Simulation",
      image: elevatorPainImage,
      description: "A realistic elevator simulator with finite state machine logic and physics-based movement.",
      details: [
        "Designed and implemented a finite state machine (FSM) to model elevator logic, simulating 5+ floors with real-time physics for acceleration/deceleration",
        "Architected the MVC framework to decouple logic, UI, and controller layers, enabling seamless team collaboration across 4 developers",
        "Streamlined version control via Git, resolving 15+ merge conflicts and ensuring 100% code integration before deadlines"
      ],
      technologies: ["Java", "MVC Architecture", "Git", "FSM"],
      link: "https://github.com/yellowlagoo/elevatorpain.git"
    },
    {
      title: "Physics-Based Connect Four",
      image: connectFourImage,
      description: "A JavaFX implementation of Connect Four with realistic physics and immersive audio.",
      details: [
        "Developed a physics-based Connect Four game with JavaFX, featuring realistic chip physics, dynamic SFX, and integrated music control",
        "Implemented MVC architecture to separate game logic from UI, enabling modular testing and future extensibility",
        "Created immersive audio experience with real-time volume controls and seamless playback using the javax.sound API"
      ],
      technologies: ["Java", "JavaFX", "MVC Architecture", "Physics"],
      link: "https://github.com/yellowlagoo/connect-four.git"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My <span className="highlight">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-img">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  project.title
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;