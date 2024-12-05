import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  let experienceData = [
    {
      year: "Sep 2024 - Present",
      title: "Programming Tutor",
      desc: "As a Programming Tutor, I specialize in teaching Python and guiding students in building their foundational programming skills. I focus on simplifying complex concepts, fostering logical thinking, and helping students apply their knowledge to real-world problems.",
      skills: ["Python", "Problem-Solving", "Project-Based Learning", "Mentoring", "Teaching"],
    },
    {
      year: "Nov 2024 - Present",
      title: "PIC of Google Developer Group on Campus",
      desc: "As the Person in Charge (PIC) for the Google Developer Group on Campus (GDGoC), I am responsible for organizing and managing developer-focused events, workshops, and initiatives. I collaborate with peers and professionals to foster a tech-savvy community, inspire innovation, and share knowledge about the latest technologies.",
      skills: ["Leadership", "Event Planning", "Community Building", "Communication", "Technical Knowledge"],
    }
  ]

  let projectData = [
    {
      title: "Table Reservation: A Laravel Restaurant Reservation System 🔗",
      description: "I contributed to a Laravel-based restaurant reservation system, focusing on back-end functionality and data handling, while also assisting with front-end enhancements. Collaborating with a team, we aligned the system with restaurant management needs, delivering a scalable and user-friendly solution.",
      github: "https://github.com/gustiwdr/laravel-restaurant-reservation",
      link: "https://github.com/gustiwdr/laravel-restaurant-reservation",
      skills: ["Laravel", "SQL", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "YouTube Clone Static 🔗",
      description: "A static YouTube homepage clone built with HTML and CSS to enhance my frontend development skills, emphasizing responsive layout design and precision in replicating details.",
      github: "https://github.com/gustiwdr/youtube-clone-static",
      link: "https://gustiwdr.github.io/youtube-clone-static/",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Flutter Firebase Auth & Notifications 🔗",
      description: " A Flutter project integrating Firebase Authentication and Push Notifications to deliver a seamless user login experience and real-time notifications. Designed for secure access and enhanced user engagement.",
      github: "https://github.com/gustiwdr/flutter-firebase-auth-notifications",
      link: "https://github.com/gustiwdr/flutter-firebase-auth-notifications",
      skills: ["Flutter", "Dart", "Firebase"],
    }
  ]
  return (
    <div>
      <Header />
      <Hero />
      <About />

      <section className="experience" id="experience">
        <h1 className="experience-title">Experience</h1>
        <Experience experienceData={experienceData} />
      </section>

      <section className="project" id="projects">
        <h1 className="project-title">Projects</h1>
        <Projects projectData={projectData} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
