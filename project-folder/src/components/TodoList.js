import React from 'react';

const TaskList = ({curTask}) => {
    return <div className="listItem">
        <div>{curTask.task}</div>
        <input type="checkbox"/>
        <button type="button">X</button>
    </div>
}

export default TaskList;
