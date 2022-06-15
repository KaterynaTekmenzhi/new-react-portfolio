import React from 'react';
import './portfolio.scss';

export default function Portfolio({ projectData }) {
  console.log(projectData, 'projectData');
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <h2>Hover to view a project</h2>
      <div className="container">
        {projectData.map((project, index) => (
          <div className="item" key={index}>
            <img src={require(`../../assets/${project.image}`)} alt="something here" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="container">
                <a href={project.repo_link} className="repo" target="_blank" rel="noopener noreferrer">Repository</a>
                <a href={project.deployed_link} className="deploy" target="_blank" rel="noopener noreferrer">Deployed</a>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
}