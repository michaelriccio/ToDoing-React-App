import React from 'react';

const ProjectList = ({curProject, nowFolder}) => {

    const handleClick = (e) => {
        nowFolder(e.target.innerText);
    }

    return <div className="listItem">
        <div onClick={handleClick} > {curProject.project} </div>
        <button type="button"> X </button>
    </div>
}

export default ProjectList;