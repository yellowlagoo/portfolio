// components/About.js
import React from 'react';
import profileImage from '../images/profile.jpeg';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2>About <span className="highlight">Me</span></h2>
          <p>I'm a software developer with a focus on creating efficient, user-friendly applications. Currently pursuing my BSc in Artificial Intelligence and Computer Science at the University of Edinburgh, I bring practical experience from both industry roles and academic projects.</p>
          <p>I enjoy tackling complex problems and have experience in various languages and frameworks, including Java, Python, Haskell, and React. My work spans from developing web applications to implementing algorithms and designing simulations.</p>
          <p>I'm passionate about creating software that makes a difference, whether it's improving search engine rankings, optimizing user workflows, or building engaging applications with intuitive interfaces.</p>
        </div>
        <div className="image-placeholder">
          <img src={profileImage} alt="Karina Asanbekova Headshot, White Tee, Greenery Background" />
        </div>
      </div>
    </section>
  );
}

export default About;