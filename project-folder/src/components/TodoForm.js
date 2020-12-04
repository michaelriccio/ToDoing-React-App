import React,{useState} from 'react';
import uuid from 'uuid';

const TodoForm = ({addTodo, curProject}) => {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        project: "inbox",
        completed: false
    });

    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({...todo, id: uuid.v4()});
            setTodo({ ...todo, task: ""}); //Reset task
        };
    }

    const handleSelect = (e) => {
        setTodo({...todo, project: e.target.value});
    }

    let projectList = curProject.map((item) => <option key={item.id}>{item.project}</option>
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
                className="taskInput form" 
                placeholder="Enter task here"
                />
                <select onChange={handleSelect} onF>
                    {projectList}
                </select>
                <button type="submit" className="taskButton taskAdd">+</button>
            </form>
        </div>
    )
}

export default TodoForm;