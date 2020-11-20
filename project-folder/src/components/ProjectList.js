import React from 'react';

const ProjectList = ({key, curProject, nowFolder}) => {
    return <div className="listItem">
        <div onClick={nowFolder}>{curProject.project}</div>
        <button type="button">X</button>
    </div>
}

export default ProjectList;