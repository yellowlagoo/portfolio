// components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Hi, I'm <span className="highlight">Karina Asanbekova</span></h1>
        <p>A passionate software developer with experience in web development, Java, Python, and functional programming.</p>
        <div>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;