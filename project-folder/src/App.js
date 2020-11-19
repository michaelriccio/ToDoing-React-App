import React,{useEffect, useState} from 'react';
import './App.css';
import Projects from './components/Projects';
import Todo from './components/Todo';

const LOCAL_STORAGE_TASKS = "todoing-tasks";
const LOCAL_STORAGE_PROJECTS = "todoing-projects";

const App = () => {
  const [curFolder, setFolder] = useState([{text: "inbox", id: "a1"}]);
  const [curProject, setProject] = useState([{text: "inbox", id: "b1"}]);
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
  }

  return (
    <div className="App">
      <header className="bigtext">ToDoing by Michael Riccio</header>
      <div className="center">
        <Projects/>
        <Todo addTodo={addTodo}  curTask={curTask} curProject={curProject} curFolder={curFolder}/>
      </div>
      <footer className="bigtext">Made with HTML/CSS/JS/REACT</footer>
    </div>
  );
}

export default App;
