import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Project 1",
      img: "clock.png",
      gLink: "https://github.com/sanjujangra072",
      lLink: <a href="https://sanjujangra072.github.io/myclockcode/">go to clock</a>,
    },
    {
      title: "Project 2" ,
      img: "calculator.png",
      gLink: "https://github.com/sanjujangra072",
      lLink: <a href="https://sanjujangra072.github.io/mycalculator/">go to calculator</a>,
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>My Projects</h3>
          <a
            href="https://github.com/sanjujangra072"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
                <div className="gotoclock">
                  <button>
                      {project.lLink}
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;