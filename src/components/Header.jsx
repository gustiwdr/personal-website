import React from "react";

function Header() {
  // Fungsi untuk meng-handle klik pada elemen navbar
  let handleNavClick = (event) => {
    document.querySelectorAll(".nav").forEach((nav) => {
      nav.classList.remove("active"); 
    });
    event.target.classList.add("active"); 
  };

  // Event listener untuk event 'scroll' pada window
  window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav"); 

    let current = "";

    sections.forEach((section) => {
      let sectionTop = section.offsetTop; 
      let sectionHeight = section.offsetHeight; 

      if (window.scrollY >= sectionTop - sectionHeight / 3) { 
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active"); 
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  return (
    <nav className="header">
      <div className="left-section">
        <p>Gusti Putu Wulandari</p>
      </div>

      <div className="right-section">
        <a className="nav active" href="#home" onClick={handleNavClick}>
          HOME
        </a>
        <a className="nav" href="#about" onClick={handleNavClick}>
          ABOUT
        </a>
        <a className="nav" href="#experience" onClick={handleNavClick}>
          EXPERIENCE
        </a>
        <a className="nav" href="#projects" onClick={handleNavClick}>
          PROJECTS
        </a>
      </div>
    </nav>
  );
}

export default Header;
