import React from 'react';

const ProjectList = ({curProject, setProject, nowFolder, removeProject}) => {

    const handleClick = (e) => {
        nowFolder(e.target.innerText);
    };

    const deleteProject = () => {
        removeProject(curProject);
    };

    let button;
    if (curProject.completable === true) {
        button = <button onClick={deleteProject} type="button"> X </button>
    }
    else {
        button = null
    };

    return <div className="listItem">
        <div onClick={handleClick} > {curProject.project} </div>
        {button}
    </div>
}

export default ProjectList;