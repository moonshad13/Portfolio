import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <Slider {...settings}>
          <div className="project-item">
            <h3>Password Security System</h3>
            <p>Built a password security system with real-time validation.</p>
          </div>
          <div className="project-item">
            <h3>Portfolio Website</h3>
            <p>Designed and developed a personal portfolio showcasing my work.</p>
          </div>
          {/* Add more project slides here */}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;



