import React from 'react';
import './Skills.css';  // We'll add component-specific styles here

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2>Skills</h2>
      <div className="skill-grid">
        <div className="skill-item">
          <h3>React.js</h3>
          <p>Experienced in building dynamic UIs with React</p>
        </div>
        <div className="skill-item">
          <h3>Angular</h3>
          <p>Developing scalable front-end apps with Angular</p>
        </div>
        <div className="skill-item">
          <h3>ASP.Net Core</h3>
          <p>Proficient in back-end integration with ASP.Net Core</p>
        </div>
        <div className="skill-item">
          <h3>MS SQL</h3>
          <p>Database management and query optimization</p>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
