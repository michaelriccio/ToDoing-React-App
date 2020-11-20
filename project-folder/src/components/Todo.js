import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Tasks = ({addTodo, curTask, curProject, curFolder}) => {
    console.log(curFolder)
    return (
        <div className="tasks">
            <h1> {curFolder} </h1>
            <TodoForm addTodo={addTodo} curProject={curProject}/>
            {curTask.map((item) => {
                if (item.project === curFolder) {
                    <TodoList key={item.id} curTask={item}/>
                }
            }
            )}  
        </div>
    )
}

export default Tasks;