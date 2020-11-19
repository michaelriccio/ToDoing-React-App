import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

const Projects = () => {
    return (
        <div className="projects">
            <ProjectForm/>
            <ProjectList/>
        </div>
    )
}

export default Projects;