import React from 'react';
import './portfolio.scss';

export default function Portfolio({ projectData }) {
  console.log(projectData, 'projectData');
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {projectData.map((project, index) => (
          <div className="item" key={index}>
            <img src={require(`../../assets/${project.image}`)} alt="something here" />
            <h3>{project.title}</h3>

            {/* <a href={project.repo_link}></a> */}
            {/* <a href={require(`../../assets/${project.repo_link}`)} 
            target="_blank"
            rel="noopener noreferrer"
            className='repo-link'
            ></a> */}
          </div>
        ))}
      </div>
    </div>
  );
}