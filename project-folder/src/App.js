import React,{useEffect, useState} from 'react';
import './App.css';
import Projects from './components/Projects';
import Todo from './components/Todo';

const LOCAL_STORAGE_TASKS = "todoing-tasks";
const LOCAL_STORAGE_PROJECTS = "todoing-projects";

const App = () => {

  const clearing = () => {
    localStorage.setItem(LOCAL_STORAGE_TASKS, []);
    localStorage.setItem(LOCAL_STORAGE_PROJECTS, []);
    console.log('clearing');
  }


  const [curFolder, setFolder] = useState(["inbox"]);
  const [curProject, setProject] = useState([{id: "b1", project: "inbox", completable: false }]);
  const [curTask, setTask] = useState([]);

  //Retrieves tasks from local storage when the page loads
  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS));
    if(storageTasks){
      setTask(storageTasks); //Will set tasks if storageTasks isn't null
    }
  }, [])
  //Saves tasks to local storage any time curTask changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TASKS, JSON.stringify(curTask));
  }, [curTask]);

  //Retrieves projects from local storage on load
  useEffect(() => {
    const storageProjects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS));
    if(storageProjects) {
      setProject(storageProjects);
    }
  }, []);
  //Saves projects to local storage when curProject changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS, JSON.stringify(curProject));
  }, [curProject]);

  const addTodo = (todo) => {
    setTask([todo, ...curTask]);
  };

  const addProj = (proj) => {
    setProject([...curProject, proj ])
  };

  const nowFolder = (projectValue) => {
    setFolder(projectValue);
  } 

  const toggleComplete = (id) => {
    setTask(
      curTask.map(item => {
        if(item.id === id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
    )
  }

  const removeTodo = (id) => {
    setTask(curTask.filter(item => item.id !== id));
  }

  const removeProject = (tempProj) => {
    if (window.confirm('Deleting a project deletes all tasks sorted beneath it. Are you sure you want to delete?')) {
      setProject(curProject.filter(item => item.id !== tempProj.id));
      setTask(curTask.filter(item => item.project !== tempProj.project));
    }
  }

  return (
    <div className="App">
      <header className="bigtext">ToDoing by Michael Riccio</header>
      <button className="clearing" onClick={clearing} type='button'>X</button>
      <div className="center">
        <Projects addProj={addProj} curProject={curProject} setProject={setProject} nowFolder={nowFolder} removeProject={removeProject} />
        <Todo addTodo={addTodo}  curTask={curTask} curProject={curProject} curFolder={curFolder} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </div>
      <footer className="bigtext">Made with HTML/CSS/JS/REACT</footer>
    </div>
  )
}

export default App;