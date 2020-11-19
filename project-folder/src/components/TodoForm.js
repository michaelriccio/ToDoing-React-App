import React,{useState} from 'react';
import uuid from 'uuid';

const TodoForm = ({addTodo, curProject}) => {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        project: "",
        completed: false
    });

    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value});
        console.log({todo});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({...todo, id: uuid.v4()});
            setTodo({ ...todo, task: "", project: "inbox"}); //Reset task
        };
    }

    const handleSelect = (e) => {
        e.preventDefault();
        setTodo({...todo, project: e.target.value});
    }

    let projectList = curProject.map((projects) => <option value={projects} key={projects.id}>{projects.text}</option>
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                className="taskInput" 
                placeholder="Enter task here"
                />
                <select onSelect={handleSelect} placeholder="project?">
                    {projectList}
                </select>
                <button type="submit" className="taskButton">
                    <i className="far fa-plus-square"/>
                </button>
            </form>
        </div>
    )
}

export default TodoForm;