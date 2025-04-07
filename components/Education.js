// components/Education.js
import React from 'react';

function Education() {
  const education = [
    {
      institution: "University of Edinburgh",
      degree: "BSc. Artificial Intelligence and Computer Science",
      duration: "2024 - 2028",
      description: "Currently pursuing a bachelor's degree in AI and Computer Science, developing a strong foundation in both theoretical concepts and practical applications of computing.",
      courses: [
        "Introduction to Linear Algebra",
        "Introduction to Computation",
        "Calculus and its Applications",
        "Introduction to Object Oriented Programming",
        "Engineering Principles"
      ]
    },
    {
      institution: "Los Altos High School",
      degree: "High School Diploma",
      duration: "2020 - 2024",
      description: "Earned my high school diploma while pursuing my interest in computer science and software development.",
      courses: [
        "AP Calculus AB and BC",
        "AP Statistics",
        "AP Computer Science A",
        "Advanced Data Structures and Embedded Systems Networking"
      ]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>My <span className="highlight">Education</span></h2>
        {education.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.institution}</h3>
            <div className="degree">{edu.degree}</div>
            <div className="duration">{edu.duration}</div>
            <p>{edu.description}</p>
            <p>Relevant coursework:</p>
            <ul>
              {edu.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;