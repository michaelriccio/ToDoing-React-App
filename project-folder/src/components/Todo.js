import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = ({addTodo, curTask, curProject, curFolder, toggleComplete, removeTodo}) => {
    let includedTodos = curTask.filter(item => item.project.includes(curFolder)).map((filteredItem) => <TodoList key={filteredItem.id} curTask={filteredItem} toggleComplete={toggleComplete} removetodo={removeTodo} /> );

    return(
        <div className="tasks">
            <h1> {curFolder} </h1>
            <TodoForm addTodo={addTodo} curProject={curProject}/>
            {includedTodos}  
        </div>
    )
}

export default Todo;