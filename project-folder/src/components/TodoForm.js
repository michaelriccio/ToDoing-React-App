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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({...todo, id: uuid.v4()});
            setTodo({ ...todo, task: ""}); //Reset task
        };
    }

    const handleSelect = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setTodo({...todo, project: e.target.value});
    }

    let projectList = curProject.map((item) => <option onChange={handleSelect} value={item.project} key={item.id}>{item.project}</option>
    );
    console.log(projectList);

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
                <select>
                    {projectList}
                </select>
                <button type="submit" className="taskButton">+</button>
            </form>
        </div>
    )
}

export default TodoForm;