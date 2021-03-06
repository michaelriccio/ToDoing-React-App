import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

const Projects = ({ addProj, curProject, nowFolder, removeProject}) => {
    return (
        <div className="projects">
            <h1 className="header"> Projects </h1>
            <ProjectForm addProj={addProj} curProject={curProject} />
            {curProject.map((item) => <ProjectList key={item.id} curProject={item} nowFolder={nowFolder} removeProject={removeProject} /> )}
        </div>
    )
}

export default Projects;