import React from 'react';

const TaskList = ({curTask, toggleComplete, removeTodo}) => {

    const handleCheckbox = () => toggleComplete(curTask, toggleComplete);

    const handleDelete = () => removeTodo(curTask.id);

    return <div className="listItem">
        <div style={{textDecoration: curTask.completed ? "line-through" : null}}> {curTask.task}</div>
        <input onClick={handleCheckbox} type="checkbox"/>
        <button onclick={handleDelete} type="button">X</button>
    </div>
}

export default TaskList;
