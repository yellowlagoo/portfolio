// components/Experience.js
import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Swarmed",
      position: "Software Developer",
      duration: "July 2024 - Present",
      responsibilities: [
        "Improved search engine rankings by 6 times through researching keywords; assessed current performance and recommended strategies to boost visibility",
        "Analyzed and enhanced the user signup workflow to resolve email confirmation issues, implementing a solution to resend confirmation emails via login popups",
        "Ensured consistent functionality across registration and dashboard login workflows"
      ]
    },
    {
      company: "Edinburgh University Formula Student",
      position: "Software Developer",
      duration: "September 2024 - Present",
      responsibilities: [
        "Collaborate within team to develop useful features to improve productivity of other teams",
        "Created a RESTful API and cache to download and display racing data",
        "Optimized the testing process for other teams by making testing data more accessible and easy to visualize"
      ]
    },
    {
      company: "Sandlines",
      position: "Software Developer Intern",
      duration: "June - August 2023",
      responsibilities: [
        "Engineered promotional TikTok campaigns using ChatGPT (scriptwriting), DALL-E (visual assets), and voice AI tools (audio cleanup), producing 10+ videos that boosted app visibility and engagement",
        "Developed Java web scrapers to gather data used to build app, automating input into Google Sheets and reducing manual reporting time by 5 hours"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>My <span className="highlight">Experience</span></h2>
        
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.company}</h3>
            <div className="position">{exp.position}</div>
            <div className="duration">{exp.duration}</div>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;