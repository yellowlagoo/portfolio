// components/Skills.js
import React from 'react';

function Skills() {
  const skills = [
    {
      category: "Languages",
      icon: "💻",
      items: "Java, Python, Haskell, HTML, CSS, JavaScript"
    },
    {
      category: "Frameworks & Tools",
      icon: "🔨",
      items: "React, JavaFX, Git, REST APIs, SQL"
    },
    {
      category: "Concepts",
      icon: "📊",
      items: "MVC Architecture, OOP, Functional Programming, Agile"
    },
    {
      category: "Development",
      icon: "🚀",
      items: "Web Development, UI/UX, API Design, Database Management"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My <span className="highlight">Skills</span></h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.category}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;