import React,{useState} from 'react';
import uuid from 'uuid';

const ProjectForm = ({addProj, curProject}) => {

    const [proj, setProj] = useState({
        id: "",
        project: "",
        completable: true
    });

    //Changes proj state on input change
    const handleTaskInputChange = (e) => {
        setProj({...proj, project: e.target.value});
    }

    //Submits project list change
    const handleSubmit = (e) => {
        e.preventDefault();
        if(proj.project.trim()) {
            addProj({...proj, id: uuid.v4()});
            setProj({ ...proj, project: ""}); //Reset textbox
        };
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="task"
                type="text"
                value={proj.project}
                onChange={handleTaskInputChange}
                className="projectInput form" 
                placeholder="Enter task here"
                />
                <button type="submit" className="taskButton projectAdd">
                +
                </button>
            </form>
        </div>
    )
}

export default ProjectForm;