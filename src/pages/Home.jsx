import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero d-flex align-items-center justify-content-center text-center">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="company-title">CODEX PROJECT</h1>
          <p className="tagline">
            Empowering Innovation through Final Year Projects
          </p>
          <a href="#projects" className="btn btn-light btn-lg mt-3">
            Explore Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container text-center py-5">
        <h2 className="section-title mb-4">About Us</h2>
        <p className="lead text-muted">
          CodeX Project is a leading project development center helping students 
          create innovative <strong>Final Year Projects</strong> in 
          <strong> Software, Embedded Systems, and Mechanical Engineering</strong>. 
          We aim to turn your ideas into impactful real-world solutions.
        </p>
      </section>

      {/* Project Categories */}
      <section id="projects" className="projects-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Project Domains</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="project-card p-4 text-center shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Software" className="project-icon mb-3" />
                <h4>Software Projects</h4>
                <p className="text-muted">Web, Mobile & AI-based Applications for innovative solutions.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="project-card p-4 text-center shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/2707/2707259.png" alt="Embedded" className="project-icon mb-3" />
                <h4>Embedded Systems</h4>
                <p className="text-muted">IoT, Microcontrollers, and Automation systems for smart technology.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="project-card p-4 text-center shadow-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png" alt="Mechanical" className="project-icon mb-3" />
                <h4>Mechanical Projects</h4>
                <p className="text-muted">Design, fabrication, and innovation for real-world engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
