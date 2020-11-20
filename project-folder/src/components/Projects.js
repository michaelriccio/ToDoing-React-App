import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

const Projects = ({addProj, curProject}) => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <ProjectForm addProj={addProj} curProject={curProject} />
            {curProject.map((item) => 
            <ProjectList key={item.id} curProject={item}/>
            )}
        </div>
    )
}

export default Projects;