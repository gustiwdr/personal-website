import React from "react";
import { Github, LinkedIn, Instagram, Phone, Email } from "../icons";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="about-hero-container">
          <div className="name-container">
            <p className="greeting">Hello, my name is</p>
            <p className="name">Gusti Putu Wulandari.</p>
            <p className="position">Computer Science Student</p>
            <p className="short-desc"> I am deeply passionate about technology, particularly in <span>web and mobile development</span>. I am committed to continuously learning and refining my skills to excel in this dynamic and fast-evolving field.</p>
      
            <button className="ask-me-button">Ask Me Question</button>
          </div>  
        </div>
        <div className="social-media-container">
          <div className="left-social-media">
            <a href="https://github.com/gustiwdr" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="" className="github" />
            </a>
            <a href="https://instagram.com/gustiwdr" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="" className="instagram" />
            </a>
            <a href="https://linkedin.com/in/gustiputuwulandari" target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="" className="linkedin" />
            </a>
          </div>
        

          <div className="right-social-media">
            <div className="phone-container">
              <div className="phone-number">
                <img src={Phone} alt="" className="phone" />
                <p>+628551487640</p>
              </div>
              <div className="email-container">
                <img src={Email} alt="" className="email" />
                <p>gustiputuwulandari1409@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;