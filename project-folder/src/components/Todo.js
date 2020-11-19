import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Tasks = ({addTodo, curTask, curProject, curFolder}) => {
    return (
        <div className="tasks">
            <h1> {curFolder[0].text} </h1>
            <TodoForm addTodo={addTodo} curProject={curProject}/>
            {curTask.map((item) => 
            <TodoList key={item.id} curTask={item}/>
            )}  
        </div>
    )
}

export default Tasks;