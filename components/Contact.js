// components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Message sent! (Note: This is just a demo, no actual email was sent)');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in <span className="highlight">Touch</span></h2>
        <p>Interested in working together? Feel free to contact me for any project or collaboration.</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">✉</div>
            <a href="mailto:karina.asanbe@gmail.com">karina.asanbe@gmail.com</a>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <span>+1 (650) 309 4510 / +44 7931 804689</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon">🔗</div>
            <a href="https://www.linkedin.com/in/karina-asanbekova" target="_blank" rel="noopener noreferrer">linkedin.com/in/karina-asanbekova</a>
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;