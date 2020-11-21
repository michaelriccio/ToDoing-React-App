import React from 'react';

const TaskList = ({curTask, toggleComplete, removeTodo}) => {

    const handleCheckbox = () => toggleComplete(curTask.id);

    const handleDelete = () => removeTodo(curTask.id);

    return (
    <div className="listItem">
        <div style={{textDecoration: curTask.completed ? "line-through" : null}}> {curTask.task}</div>
        <button onClick={handleCheckbox} type="checkbox">√</button>
        <button onClick={handleDelete} type="button">X</button>
    </div>
    )
}

export default TaskList;
