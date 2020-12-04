import React from 'react';

const TodoList = ({curTask, toggleComplete, removeTodo}) => {

    const handleCheckbox = () => toggleComplete(curTask.id);

    const handleDelete = () => removeTodo(curTask.id);

    return (
        <div className="listItem todoItem">
            <button className="ex green" onClick={handleCheckbox} type="checkbox">✓</button>
            <div className="list" style={{textDecoration: curTask.completed ? "line-through" : null}}> {curTask.task}</div>
            <button className="ex " onClick={handleDelete} type="button">X</button>
        </div>
    )
}

export default TodoList;