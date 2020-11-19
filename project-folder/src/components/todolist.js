import React from 'react';

const TaskList = ({curTask}) => {
    return <div>
        <div>{curTask.task}</div>
        <input type="checkbox"/>
        <button type="button">X</button>
    </div>
}

export default TaskList;