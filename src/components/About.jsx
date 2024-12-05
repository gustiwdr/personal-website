import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-desc-container">
        <p className="about-desc">Hi, I’m <span>Wulan</span>—a dedicated Computer Science student at Esa Unggul University, currently in my fifth semester. I’m passionate about exploring the world of technology and programming, with a particular love for teaching and creating meaningful projects.</p>
        
        <p className="about-desc">Alongside my studies, I work part-time as a <span>Programming Tutor</span>, specializing in Python, where I guide students in building their programming skills. I’m also the <span>Person-in-Charge (PIC) for the Google Developer Group on Campus</span>, coordinating events and fostering a collaborative learning environment for tech enthusiasts.</p>  

        <p className="about-desc">My journey so far includes projects in Laravel, mobile app design with Flutter, and ReactJS, alongside diving into concepts like data structures, algorithms, web development, and android development. These experiences have honed my problem-solving skills and strengthened my passion for continuous learning.</p>
        
        <p className="about-desc">Beyond academics, I enjoy mentoring, building practical solutions, and contributing to impactful projects. With a drive for innovation and a focus on development, I’m constantly striving to grow as a developer and make a positive impact through technology.</p>

        <p className="about-desc"><span>Let’s connect and explore the exciting possibilities of tech together!</span></p>
      </div>
    </section>
  )
}

export default About;